import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ProductPhotoTile } from "@/constant/landingPage/productRangeData";
import CardHeading from "@/components/typography/CardHeading";
import SmallText from "@/components/typography/SmallText";
import Badge from "@/components/ui/Badge";

/** Large photo tile (spans two columns) with a title, a one-line use and an optional tag. */
const PhotoTile = ({ tile }: { tile: ProductPhotoTile }) => (
  <Link
    href={tile.href}
    className="group/tile relative col-span-2 flex h-[clamp(300px,30vw,380px)] flex-col justify-end gap-2.5 overflow-hidden rounded-card text-white no-underline transition duration-[350ms] ease-brand hover:-translate-y-1 hover:shadow-card max-md:h-[300px] max-sm:col-span-full max-sm:h-60 max-sm:rounded-[18px]"
  >
    <Image
      src={tile.image}
      alt={tile.imageAlt}
      fill
      sizes="(min-width: 1280px) 600px, (min-width: 960px) 50vw, 100vw"
      className="object-cover transition-transform duration-1000 ease-brand group-hover/tile:scale-[1.06]"
    />
    <div
      aria-hidden="true"
      className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_35%,rgba(20,16,14,.78))]"
    />
    <div className="relative flex h-full flex-col justify-end gap-2.5 p-[22px]">
      {tile.tag && <Badge className="mb-auto self-start">{tile.tag}</Badge>}
      <CardHeading size="feature">{tile.title}</CardHeading>
      <SmallText variant="note" tone="onDark">
        {tile.description}
      </SmallText>
    </div>
    <ArrowUpRight
      aria-hidden="true"
      className="absolute top-[22px] right-[22px] size-5 opacity-90 transition duration-300 group-hover/tile:rotate-45 group-hover/tile:opacity-100"
    />
  </Link>
);

export default PhotoTile;
