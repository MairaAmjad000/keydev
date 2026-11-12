import { SmartImage } from "@/components/ui/SmartImage";
import { Carousel, CarouselItem } from "@/components/ui/Carousel";
import type { SectionData } from "@/lib/sections/types";

export function BannerSlider({ items }: SectionData) {
  const banners = (items ?? []).filter((item) => item.image);
  if (banners.length === 0) return null;

  return (
    <section aria-label="Project banners" className="border-b border-line bg-surface py-8">
      <div className="container-page">
        <Carousel>
          {banners.map((banner, index) => (
            <CarouselItem key={banner.image ?? index} className="w-[min(34rem,88vw)]">
              <SmartImage
                src={banner.image}
                alt={banner.alt ?? ""}
                className="aspect-[16/9]"
              />
            </CarouselItem>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
