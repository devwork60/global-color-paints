export const AUDIENCE_HEAD = {
  eyebrow: "Find your way in",
  title: "Tell us who you are. We'll show you where to start.",
  description:
    "Choose the one that fits you best to see what matters to you and the quickest way through the site.",
  kicker: "Recommended for you",
  pathLabel: "Your path:",
};

export interface AudienceData {
  id: string;
  title: string;
  sub: string;
  heading: string;
  points: string[];
  cta: { label: string; href: string };
  path: string;
  image: string;
  imageAlt: string;
}

export const AUDIENCES: AudienceData[] = [
  {
    id: "dealer",
    title: "I'm a dealer or distributor",
    sub: "Stock our brands",
    heading: "Add five paint brands to your shelves.",
    points: [
      "See all five brands and the full product range at a glance",
      "All three pack sizes, from quarter to bucket",
      "Call or WhatsApp our sales team directly",
    ],
    cta: { label: "Become a Dealer", href: "#dealer" },
    path: "Our Brands, then the brand page, then Become a Dealer",
    image: "/assets/images/audience/dealer-brushes.jpg",
    imageAlt: "Paint brushes on display in a shop",
  },
  {
    id: "contractor",
    title: "I'm a contractor or project buyer",
    sub: "Supply for a project",
    heading: "Paint supply for your next project.",
    points: [
      "Exterior, weather-resistant and waterproofing products",
      "Primers and putty for surface preparation",
      "Proven on 22+ landmark projects, from villas to an international airport",
    ],
    cta: { label: "Send a Business Enquiry", href: "#dealer" },
    path: "Product range, then the brand page, then a business enquiry",
    image: "/assets/images/audience/contractor-site.jpg",
    imageAlt: "A house under construction with timber roof beams",
  },
  {
    id: "homeowner",
    title: "I'm painting my home",
    sub: "Choose a product and colour",
    heading: "Find the right paint and colour for your home.",
    points: [
      "Browse all five brands by room and surface",
      "Preview 54 colours, then ask for the shade card",
      "Find out where to buy near you",
    ],
    cta: { label: "Explore Colours", href: "#colour" },
    path: "Colour range, then the brand page, then Contact Us",
    image: "/assets/images/audience/homeowner-bedroom.jpg",
    imageAlt: "A bright bedroom with soft white walls and a terracotta throw",
  },
  {
    id: "painter",
    title: "I'm a painter",
    sub: "Know the products you apply",
    heading: "Know every product you put on a wall.",
    points: [
      "Product categories with their uses",
      "Pack sizes for every job",
      "Talk to our team about products",
    ],
    cta: { label: "See the Product Range", href: "#range" },
    path: "Product range, then the brand page, then Contact Us",
    image: "/assets/images/audience/painter-roller.jpg",
    imageAlt: "A painter in overalls rolling paint onto a white wall",
  },
];
