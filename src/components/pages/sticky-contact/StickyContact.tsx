import Link from "next/link";
import { MessageCircleMore, Phone, Send } from "lucide-react";
import { SITE } from "@/constant/siteData";

const barItem =
  "flex min-h-[52px] flex-col items-center justify-center gap-1 rounded-xl font-body text-[12.5px] leading-none font-semibold no-underline [&>svg]:size-5";

/** WhatsApp bubble (tablet and desktop) and the Call / WhatsApp / Enquire bar (phones). */
const StickyContact = () => (
  <>
    <Link
      href="#dealer"
      aria-label="Chat with us on WhatsApp"
      className="fixed right-6 bottom-[calc(24px+env(safe-area-inset-bottom,0px))] z-[45] grid size-[60px] place-items-center rounded-full bg-wa text-white no-underline shadow-[0_16px_34px_-12px_rgba(31,143,78,.7)] transition-transform duration-200 after:absolute after:inset-0 after:animate-ping-slow after:rounded-full after:border-2 after:border-wa after:content-[''] hover:scale-[1.07] max-sm:hidden"
    >
      <MessageCircleMore aria-hidden="true" className="size-7 stroke-[1.75]" />
    </Link>
    <nav
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-[45] hidden grid-cols-3 gap-2 border-t border-line bg-white px-2 pt-2 pb-[calc(8px+env(safe-area-inset-bottom,0px))] max-sm:grid"
    >
      <a href={SITE.phoneHref} className={`${barItem} bg-canvas text-charcoal`}>
        <Phone aria-hidden="true" />
        Call
      </a>
      <Link href="#dealer" className={`${barItem} bg-wa text-white`}>
        <MessageCircleMore aria-hidden="true" />
        WhatsApp
      </Link>
      <Link href="#dealer" className={`${barItem} bg-charcoal text-white`}>
        <Send aria-hidden="true" />
        Enquire
      </Link>
    </nav>
  </>
);

export default StickyContact;
