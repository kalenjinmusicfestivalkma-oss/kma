# Kalenjin Music Awards (KMA) 2026 Platform

Welcome to the official source code for the **Kalenjin Music Awards 2026** platform! This is a production-ready, highly secure, and culturally resonant music awards platform built with Next.js 15, React, Tailwind CSS, and Supabase.

## 🚀 Features

- **Premium Cultural Design**: Modern UI/UX reflecting Kalenjin heritage using tailored colors (Maroon, Gold, Green) and glassmorphism.
- **Robust Authentication & Voting**: Secure phone number OTP verification to ensure 1 vote per category per user.
- **Anti-Fraud Protections**: Strict rate limiting, DB-level unique constraints, and race condition guards.
- **M-Pesa STK Push Integration**: Automated ticket purchasing through Safaricom Daraja API with real-time webhooks.
- **Admin Dashboard**: Comprehensive management panels for nominees, votes, tickets, categories, and news with live statistics.
- **SEO Optimized**: Dynamic `sitemap.xml`, `robots.txt`, and rich OpenGraph social metadata.

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v3 (Custom tokens)
- **Icons**: Lucide React
- **Database & Auth**: Supabase (PostgreSQL + RLS)
- **Payments**: Safaricom M-Pesa

## 💻 Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Create a `.env.local` file and add the following:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   
   # M-Pesa Credentials
   MPESA_CONSUMER_KEY=your_key
   MPESA_CONSUMER_SECRET=your_secret
   MPESA_SHORTCODE=your_shortcode
   MPESA_PASSKEY=your_passkey
   MPESA_CALLBACK_URL=your_ngrok_or_live_url/api/mpesa/callback
   ```

3. **Database Setup:**
   Run the SQL migration script located in `supabase/migrations/20260806000000_initial_schema.sql` in your Supabase SQL Editor.

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

## ☁️ Deployment (Render)

This project is configured for a 1-click deployment on [Render](https://render.com/).

1. Connect your GitHub repository to Render.
2. Go to **Blueprints** and create a New Blueprint Instance.
3. Render will automatically read the `render.yaml` file at the root of the project and provision a Web Service using Node v20.
4. Go to your newly created service's **Environment** tab in Render and supply the required API keys (Supabase and M-Pesa).
5. Render will automatically build (`npm run build`) and start (`npm start`) your Next.js application!

---
*Built to amplify the voice of Kalenjin Music on the global stage.*
