import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Register | Kalenjin Music Awards 2026",
  description: "Create your KMA account to start voting for your favourite Kalenjin artists.",
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 rounded-full bg-kalenjin-green/5 blur-[100px]" />
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-primary-gold mb-4">
            <span className="font-heading font-bold text-black text-lg">K</span>
          </Link>
          <h1 className="font-heading text-3xl font-bold text-white">Create Account</h1>
          <p className="text-foreground/60 mt-2">Register to vote and support Kalenjin artists</p>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-8">
          <form className="space-y-5" id="register-form">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="reg-firstname" className="block text-sm font-medium text-foreground/70 mb-1.5">First Name</label>
                <input
                  id="reg-firstname"
                  type="text"
                  placeholder="Jane"
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary-gold/50 transition"
                />
              </div>
              <div>
                <label htmlFor="reg-lastname" className="block text-sm font-medium text-foreground/70 mb-1.5">Last Name</label>
                <input
                  id="reg-lastname"
                  type="text"
                  placeholder="Chebet"
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary-gold/50 transition"
                />
              </div>
            </div>

            <div>
              <label htmlFor="reg-phone" className="block text-sm font-medium text-foreground/70 mb-1.5">Phone Number</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40 text-sm">+254</span>
                <input
                  id="reg-phone"
                  type="tel"
                  placeholder="7XX XXX XXX"
                  className="w-full rounded-lg border border-border bg-background pl-14 pr-4 py-2.5 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary-gold/50 transition"
                />
              </div>
              <p className="text-xs text-foreground/40 mt-1.5">Used for OTP verification — one account per number</p>
            </div>

            <div>
              <label htmlFor="reg-email" className="block text-sm font-medium text-foreground/70 mb-1.5">Email <span className="text-foreground/30">(optional)</span></label>
              <input
                id="reg-email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary-gold/50 transition"
              />
            </div>

            <div>
              <label htmlFor="reg-password" className="block text-sm font-medium text-foreground/70 mb-1.5">Password</label>
              <input
                id="reg-password"
                type="password"
                placeholder="Min. 8 characters"
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary-gold/50 transition"
              />
            </div>

            <div>
              <label htmlFor="reg-confirm-password" className="block text-sm font-medium text-foreground/70 mb-1.5">Confirm Password</label>
              <input
                id="reg-confirm-password"
                type="password"
                placeholder="Re-enter password"
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary-gold/50 transition"
              />
            </div>

            {/* Anti-fraud notice */}
            <div className="rounded-lg border border-border bg-background/50 p-3 flex items-start gap-2">
              <span className="text-primary-gold text-base shrink-0 mt-0.5">🛡️</span>
              <p className="text-xs text-foreground/50 leading-relaxed">
                Your phone number will be verified via OTP. Each number can only vote once per category to ensure fair results.
              </p>
            </div>

            <button
              id="register-submit"
              type="submit"
              className="w-full rounded-md bg-primary-gold text-black font-semibold h-11 text-sm hover:bg-primary-gold/90 transition-colors"
            >
              Create Account & Get OTP
            </button>

            <p className="text-center text-xs text-foreground/40">
              By registering, you agree to our{" "}
              <Link href="/terms" className="text-primary-gold hover:underline">Terms</Link>
              {" "}and{" "}
              <Link href="/privacy" className="text-primary-gold hover:underline">Privacy Policy</Link>.
            </p>
          </form>
        </div>

        <p className="text-center text-foreground/50 text-sm mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-primary-gold hover:underline font-medium">
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
}
