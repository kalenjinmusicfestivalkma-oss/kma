import type { Metadata } from "next";

export const metadata: Metadata = { title: "Settings | KMA Admin" };

export default function AdminSettingsPage() {
  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="font-heading text-2xl font-bold text-foreground">System Settings</h1>
        <p className="text-foreground/50 text-sm mt-1">Configure global application parameters</p>
      </div>

      <div className="space-y-6">
        {/* Voting Status */}
        <section className="rounded-xl border border-border bg-surface p-6">
          <h2 className="font-heading font-semibold text-foreground mb-4">Voting Configuration</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-background/50">
              <div>
                <p className="font-medium text-foreground">Voting Status</p>
                <p className="text-foreground/50 text-xs mt-0.5">Allow public users to cast votes</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-kalenjin-green text-sm font-medium mr-2">Active</span>
                <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-kalenjin-green transition-colors">
                  <span className="inline-block h-4 w-4 translate-x-6 rounded-full bg-white transition-transform" />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground/70 mb-1.5">Voting Start Date</label>
                <input type="datetime-local" defaultValue="2026-08-01T00:00" className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary-gold/50" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground/70 mb-1.5">Voting End Date</label>
                <input type="datetime-local" defaultValue="2026-08-30T23:59" className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary-gold/50" />
              </div>
            </div>
          </div>
        </section>

        {/* Payment Settings */}
        <section className="rounded-xl border border-border bg-surface p-6">
          <h2 className="font-heading font-semibold text-foreground mb-4">M-Pesa Integration</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground/70 mb-1.5">Paybill / Till Number</label>
              <input type="text" defaultValue="555123" className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary-gold/50" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground/70 mb-1.5">Consumer Key</label>
              <input type="password" defaultValue="********" className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary-gold/50" />
            </div>
          </div>
        </section>

        <div className="flex justify-end gap-3">
          <button className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground/70 hover:bg-surface-hover hover:text-foreground transition-colors">Cancel</button>
          <button className="rounded-lg bg-primary-gold px-4 py-2 text-sm font-semibold text-black hover:bg-primary-gold/90 transition-colors">Save Settings</button>
        </div>
      </div>
    </div>
  );
}
