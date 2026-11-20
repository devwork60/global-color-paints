export const SITE = {
  name: "Global Colors Company",
  phone: "0327-5001444",
  phoneHref: "tel:03275001444",
  email: "contact@globalcolorscompany.com",
  emailHref: "mailto:contact@globalcolorscompany.com",
  copyright:
    "© 2026 Global Colors Company, home of HomeStyle Paints, BestWall, Tylac, Expresso and IBEX. All rights reserved.",
};

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: { home: NavLink; about: NavLink; contact: NavLink } = {
  home: { label: "Home", href: "#top" },
  about: { label: "About Us", href: "#about" },
  contact: { label: "Contact Us", href: "#dealer" },
};

export const COMPANY_LINKS: NavLink[] = [
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "#dealer" },
];

export const PRODUCT_LINKS: NavLink[] = [
  { label: "Interior emulsion", href: "#range" },
  { label: "Exterior emulsion", href: "#range" },
  { label: "Waterproofing", href: "#range" },
  { label: "Primer and putty", href: "#range" },
  { label: "Wood and metal", href: "#range" },
];

export type SocialIconKey = "facebook" | "instagram" | "youtube";

export const SOCIAL_LINKS: {
  label: string;
  href: string;
  icon: SocialIconKey;
}[] = [
  {
    label: "Facebook, @homestylepaints",
    href: "https://www.facebook.com/homestylepaints",
    icon: "facebook",
  },
  {
    label: "Instagram, @homestylepaints",
    href: "https://www.instagram.com/homestylepaints",
    icon: "instagram",
  },
  { label: "YouTube", href: "#dealer", icon: "youtube" },
];
