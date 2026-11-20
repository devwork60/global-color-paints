import Container from "@/components/layout/Container";
import { SITE } from "@/constant/siteData";
import FooterContact from "./FooterContact";
import FooterCta from "./FooterCta";
import { FooterBrandsAndCompany, FooterProducts } from "./FooterLinks";
import FooterWordmark from "./FooterWordmark";

/** Site footer. */
const Footer = () => (
  <footer className="mt-section overflow-hidden bg-charcoal text-white/[.78]">
    <Container>
      <div className="grid grid-cols-[1.5fr_1fr_1fr_1.5fr] gap-10 pt-20 pb-10 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-8 max-sm:pt-14 max-sm:pb-6">
        <FooterCta />
        <FooterBrandsAndCompany />
        <FooterProducts />
        <FooterContact />
      </div>
      <FooterWordmark />
      <div className="mt-7 flex flex-wrap justify-between gap-3 border-t border-white/[.12] py-[22px] text-[13.5px] text-white/50">
        <span>{SITE.copyright}</span>
      </div>
    </Container>
  </footer>
);

export default Footer;
