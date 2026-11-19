import Link from "next/link";
import { BRANDS } from "@/constant/brands";
import { COMPANY_LINKS, PRODUCT_LINKS } from "@/constant/siteData";
import FooterColumn, { footerLinkClass } from "./FooterColumn";

const brandRow = "flex items-center gap-2.5";

const BrandDot = ({ color }: { color: string }) => (
  <i
    style={{ backgroundColor: color }}
    className="inline-block size-3 rounded-[3px]"
    aria-hidden="true"
  />
);

/** Brand, company and product link columns of the footer. */
export const FooterBrandsAndCompany = () => (
  <div>
    <FooterColumn title="Our Brands">
      {BRANDS.map((brand) => (
        <li key={brand.id}>
          <Link href="#brands" className={`${brandRow} ${footerLinkClass}`}>
            <BrandDot color={brand.color} />
            {brand.name}
          </Link>
        </li>
      ))}
    </FooterColumn>
    <FooterColumn title="Company" className="mt-[30px]">
      {COMPANY_LINKS.map((link) => (
        <li key={link.label}>
          <Link href={link.href} className={footerLinkClass}>
            {link.label}
          </Link>
        </li>
      ))}
    </FooterColumn>
  </div>
);

export const FooterProducts = () => (
  <FooterColumn title="Products">
    {PRODUCT_LINKS.map((link) => (
      <li key={link.label}>
        <Link href={link.href} className={footerLinkClass}>
          {link.label}
        </Link>
      </li>
    ))}
  </FooterColumn>
);
