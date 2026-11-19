export const PROJECTS_HEAD = {
  eyebrow: "Featured work",
  title: "Proven on projects you know.",
  description:
    "From residential villas and shopping malls to universities and an international airport, our paint is chosen where quality matters.",
};

export interface FeaturedProject {
  id: string;
  name: string;
  place: string;
  image: string;
  imageAlt: string;
  /** CSS object-position, for photos that need a different crop than the centre. */
  imagePosition?: string;
}

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: "amazon-mall",
    name: "Amazon Mall",
    place: "A project of Imarat Builders",
    image: "/assets/images/projects/amazon-mall.jpg",
    imageAlt:
      "Amazon Factory Outlet Mall, a white building with tall sail-shaped fins, seen from above at dusk",
  },
  {
    id: "galaxy-riveria",
    name: "Galaxy Riveria",
    place: "Commercial plaza",
    image: "/assets/images/projects/galaxy-riveria.jpg",
    imageAlt: "The sandstone facade of the Galaxy Riveria plaza under a clear blue sky",
  },
  {
    id: "68-high-street",
    name: "68 High Street",
    place: "Bahria Town",
    image: "/assets/images/projects/68-high-street.jpg",
    imageAlt: "The 68 High Street commercial building beside a main road in Bahria Town",
  },
  {
    id: "islamabad-airport",
    name: "New Islamabad International Airport",
    place: "Islamabad",
    image: "/assets/images/projects/islamabad-airport.jpg",
    imageAlt: "The entrance canopy of Islamabad International Airport",
  },
  {
    id: "askari-14",
    name: "Askari 14",
    place: "Rawalpindi, a Pak Army project",
    image: "/assets/images/projects/askari-14.jpg",
    imageAlt: "A mosque with green-capped minarets at Askari 14",
  },
  {
    id: "river-hills",
    name: "River Hills",
    place: "Bahria Town",
    image: "/assets/images/projects/river-hills.jpg",
    imageAlt: "The River Hills apartment building in Bahria Town",
  },
  {
    id: "galaxy-heights",
    name: "Galaxy Heights",
    place: "Commercial & Retail",
    image: "/assets/images/projects/galaxy-heights.jpg",
    imageAlt:
      "Galaxy Heights, a white six-storey building with arched shopfronts, lit at dusk",
    imagePosition: "30% 50%",
  },
];
