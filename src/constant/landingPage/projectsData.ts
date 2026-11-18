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
}

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: "premier-choice",
    name: "Premier Choice",
    place: "Commercial development",
    image: "/assets/images/projects/premier-choice.jpg",
    imageAlt: "The glass-fronted Premier Choice commercial building",
  },
  {
    id: "aaa-business-center",
    name: "AAA Business Center",
    place: "Bahria Town",
    image: "/assets/images/projects/aaa-business-center.jpg",
    imageAlt: "AAA Business Center seen from above in Bahria Town",
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
    id: "galaxy-riveria",
    name: "Galaxy Riveria",
    place: "Commercial plaza",
    image: "/assets/images/projects/galaxy-riveria.jpg",
    imageAlt: "The Galaxy Riveria commercial plaza at dusk",
  },
  {
    id: "river-hills",
    name: "River Hills",
    place: "Bahria Town",
    image: "/assets/images/projects/river-hills.jpg",
    imageAlt: "The River Hills apartment building in Bahria Town",
  },
];
