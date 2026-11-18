import { HERO_ROOM_IMAGE } from "@/utils/heroWall";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroFoot from "./HeroFoot";
import HeroSwatches from "./HeroSwatches";
import { HeroWallProvider } from "./HeroWall";

/** Full-bleed hero: a room photo whose walls recolour live. Its id (#vhero) drives the header's transparent state. */
const Hero = () => (
  <section
    id="vhero"
    className="relative isolate -mt-20 flex min-h-[max(680px,100svh)] flex-col justify-center overflow-hidden bg-[#8a6a4a] text-white max-sm:min-h-[max(640px,calc(100svh-72px))]"
  >
    <HeroWallProvider src={HERO_ROOM_IMAGE}>
      <HeroBackground />
      <div className="mx-auto flex max-w-[960px] flex-col items-center px-gutter pt-[130px] pb-[120px] text-center max-sm:py-[110px]">
        <HeroContent />
        <HeroSwatches />
      </div>
    </HeroWallProvider>
    <HeroFoot />
  </section>
);

export default Hero;
