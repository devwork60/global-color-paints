import Footer from "@/components/pages/footer/Footer";
import StickyContact from "@/components/pages/sticky-contact/StickyContact";

/** Public-site group layout: shared footer and sticky contact controls. */
export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Footer />
      <StickyContact />
    </>
  );
}
