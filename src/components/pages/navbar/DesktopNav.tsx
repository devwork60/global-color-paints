import Link from "next/link";
import { NAV_LINKS } from "@/constant/siteData";
import BrandsMenu from "./BrandsMenu";
import NavDropdown from "./NavDropdown";
import { navItemClass } from "./navStyles";

/** Desktop navigation pill (hidden below the md breakpoint, where the mobile menu takes over). */
const DesktopNav = () => (
  <nav
    aria-label="Main"
    className="ml-auto flex gap-0.5 rounded-full border border-line bg-white/60 p-[5px] transition-colors duration-300 group-data-[surface=over]/hdr:border-white/[.22] group-data-[surface=over]/hdr:bg-white/10 group-data-[surface=over]/hdr:backdrop-blur-[10px] max-md:hidden"
  >
    <Link href={NAV_LINKS.home.href} aria-current="page" className={navItemClass}>
      {NAV_LINKS.home.label}
    </Link>
    <Link href={NAV_LINKS.about.href} className={navItemClass}>
      {NAV_LINKS.about.label}
    </Link>
    <NavDropdown>
      <BrandsMenu />
    </NavDropdown>
    <Link href={NAV_LINKS.contact.href} className={navItemClass}>
      {NAV_LINKS.contact.label}
    </Link>
  </nav>
);

export default DesktopNav;
