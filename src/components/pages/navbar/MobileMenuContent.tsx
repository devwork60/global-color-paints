import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FAMILY_BRANDS, FLAGSHIP_BRAND } from "@/constant/brands";
import { NAV_LINKS } from "@/constant/siteData";
import Button from "@/components/button/Button";
import BrandStack from "@/components/ui/BrandStack";
import BrandDirectoryTrigger from "@/components/pages/brand-directory/BrandDirectoryTrigger";

const bigLink =
  "flex items-center justify-between border-b border-line py-3 font-display text-[32px] leading-[1.15] font-semibold tracking-[-0.02em] no-underline";

const BigLink = ({ href, children }: { href: string; children: string }) => (
  <Link href={href} className={bigLink}>
    {children}
    <ArrowUpRight aria-hidden="true" className="size-[1em] stroke-[1.75]" />
  </Link>
);

/** Links shown inside the open mobile menu (below the logo / close bar). */
const MobileMenuContent = () => (
  <>
    <BigLink href={NAV_LINKS.home.href}>{NAV_LINKS.home.label}</BigLink>
    <BigLink href={NAV_LINKS.about.href}>{NAV_LINKS.about.label}</BigLink>
    <BigLink href="#brands">Our Brands</BigLink>
    <div className="grid grid-cols-2 gap-2.5 pt-3 pb-1.5">
      <Link
        href="#brands"
        style={{ backgroundColor: FLAGSHIP_BRAND.color }}
        className="col-span-full flex min-h-24 items-end rounded-[14px] p-3.5 font-display text-[17px] leading-[1.2] font-bold text-white no-underline"
      >
        {FLAGSHIP_BRAND.name}
      </Link>
      {FAMILY_BRANDS.map((brand) => (
        <div
          key={brand.id}
          style={{ backgroundColor: brand.color }}
          className="flex min-h-16 items-end rounded-[14px] p-3.5 font-display text-[17px] leading-[1.2] font-bold text-white"
        >
          {brand.name}
        </div>
      ))}
      <BrandDirectoryTrigger className="col-span-full flex w-full cursor-pointer items-center gap-3 rounded-[14px] border-[1.5px] border-dashed border-charcoal/30 bg-white p-3.5 font-display text-[17px] leading-[1.2] font-bold text-charcoal">
        <BrandStack />
        <span className="flex-1 text-left">View All Brands</span>
        <ArrowRight aria-hidden="true" className="size-5" />
      </BrandDirectoryTrigger>
    </div>
    <BigLink href={NAV_LINKS.contact.href}>{NAV_LINKS.contact.label}</BigLink>
    <Button href="#dealer" icon={<ArrowRight />} className="mt-[18px] justify-center">
      Become a Dealer
    </Button>
  </>
);

export default MobileMenuContent;
