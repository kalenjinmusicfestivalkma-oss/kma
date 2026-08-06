// Public route group layout — no Navbar / Footer in Wayfinder mode
// Each page is a full-bleed scene managing its own layout
export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
