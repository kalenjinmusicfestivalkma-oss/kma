-- Phase 7: Initial Schema for Kalenjin Music Awards

-- 1. Nominees Table
CREATE TABLE public.nominees (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    genre TEXT NOT NULL,
    votes_count INTEGER DEFAULT 0 NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. OTP Tokens Table (For vote verification)
CREATE TABLE public.otp_tokens (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL, -- References auth.users(id) if using Supabase Auth
    nominee_id INTEGER REFERENCES public.nominees(id) ON DELETE CASCADE,
    category TEXT NOT NULL,
    token TEXT NOT NULL,
    used BOOLEAN DEFAULT FALSE NOT NULL,
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Votes Table
CREATE TABLE public.votes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    nominee_id INTEGER REFERENCES public.nominees(id) ON DELETE CASCADE,
    category TEXT NOT NULL,
    ip_address TEXT,
    voted_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    
    -- ANTI-FRAUD: Ensure a user can only vote once per category
    CONSTRAINT unique_vote_per_category UNIQUE (user_id, category)
);

-- 4. Tickets Table
CREATE TABLE public.tickets (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    buyer_name TEXT NOT NULL,
    buyer_phone TEXT NOT NULL,
    tier TEXT NOT NULL,
    qty INTEGER NOT NULL,
    amount NUMERIC(10, 2) NOT NULL,
    payment_method TEXT DEFAULT 'M-Pesa' NOT NULL,
    status TEXT DEFAULT 'pending' NOT NULL, -- pending, paid, refunded
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. News / Articles Table
CREATE TABLE public.news (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    category TEXT NOT NULL,
    content TEXT,
    status TEXT DEFAULT 'draft' NOT NULL, -- draft, published
    views INTEGER DEFAULT 0 NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 6. RPC: Increment Vote Count
-- This allows safely incrementing the vote count on the nominees table
CREATE OR REPLACE FUNCTION increment_vote_count(p_nominee_id INTEGER)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE public.nominees
  SET votes_count = votes_count + 1
  WHERE id = p_nominee_id;
END;
$$;

-- 7. Row Level Security (RLS) setup (Basic Examples)
ALTER TABLE public.nominees ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.votes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.otp_tokens ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read nominees
CREATE POLICY "Nominees are viewable by everyone" ON public.nominees FOR SELECT USING (true);

-- Allow users to read their own votes
CREATE POLICY "Users can view their own votes" ON public.votes FOR SELECT USING (auth.uid() = user_id);

-- Only service role or triggers should insert votes/tokens securely in a real production app
-- For this setup, we'll allow authenticated users to insert their own tokens/votes
CREATE POLICY "Users can insert their own OTP tokens" ON public.otp_tokens FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can view their own OTP tokens" ON public.otp_tokens FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can update their own OTP tokens" ON public.otp_tokens FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own votes" ON public.votes FOR INSERT WITH CHECK (auth.uid() = user_id);
