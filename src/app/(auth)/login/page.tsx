import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login | Kalenjin Music Awards 2026",
  description: "Sign in to your KMA account to vote for your favourite artists.",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 rounded-full bg-primary-gold/5 blur-[100px]" />
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-primary-gold mb-4">
            <span className="font-heading font-bold text-black text-lg">K</span>
          </Link>
          <h1 className="font-heading text-3xl font-bold text-white">Welcome back</h1>
          <p className="text-foreground/60 mt-2">Sign in to vote for your favourite artists</p>
        </div>

        {/* Form */}
        <div className="rounded-2xl border border-border bg-surface p-8">
          <form className="space-y-5" id="login-form">
            <div>
              <label htmlFor="login-phone" className="block text-sm font-medium text-foreground/70 mb-1.5">
                Phone Number
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40 text-sm">+254</span>
                <input
                  id="login-phone"
                  type="tel"
                  placeholder="7XX XXX XXX"
                  className="w-full rounded-lg border border-border bg-background pl-14 pr-4 py-2.5 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary-gold/50 transition"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="login-password" className="block text-sm font-medium text-foreground/70">
                  Password
                </label>
                <Link href="/forgot-password" className="text-xs text-primary-gold hover:underline">
                  Forgot password?
                </Link>
              </div>
              <input
                id="login-password"
                type="password"
                placeholder="••••••••"
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary-gold/50 transition"
              />
            </div>
            <button
              id="login-submit"
              type="submit"
              className="w-full rounded-md bg-primary-gold text-black font-semibold h-11 text-sm hover:bg-primary-gold/90 transition-colors"
            >
              Sign In
            </button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border" /></div>
            <div className="relative flex justify-center"><span className="bg-surface px-3 text-xs text-foreground/40">or continue with</span></div>
          </div>

          {/* OTP Login */}
          <Link
            href="/verify"
            id="login-otp-btn"
            className="flex items-center justify-center gap-2 w-full rounded-md border border-border bg-transparent text-foreground/70 font-medium h-11 text-sm hover:border-primary-gold/40 hover:text-white transition-all"
          >
            📱 Login with OTP
          </Link>
        </div>

        <p className="text-center text-foreground/50 text-sm mt-6">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-primary-gold hover:underline font-medium">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
