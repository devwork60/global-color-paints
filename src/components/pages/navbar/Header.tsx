import Container from "@/components/layout/Container";
import DesktopNav from "./DesktopNav";
import HeaderActions from "./HeaderActions";
import HeaderShell from "./HeaderShell";
import Logo from "./Logo";

/** Site header: logo, desktop navigation, actions and mobile menu. */
const Header = () => (
  <HeaderShell>
    <Container className="flex h-20 items-center gap-7 transition-[height] duration-[250ms] group-data-[scrolled=true]/hdr:h-[66px]">
      <Logo href="#top" />
      <DesktopNav />
      <HeaderActions />
    </Container>
  </HeaderShell>
);

export default Header;
