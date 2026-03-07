import Image from "next/image";

const FOOTER_IMAGES = [
  {
    src: "/F2A%20Footer%20Images/Fundraising%20Regulator.JPG",
    alt: "Fundraising Regulator",
    width: 200,
    height: 100,
  },
  {
    src: "/F2A%20Footer%20Images/VCSEAlliance.jpg",
    alt: "VCSE Alliance",
    width: 200,
    height: 100,
  },
] as const;

export function FooterImages() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10 py-8 border-t border-white/15">
      {FOOTER_IMAGES.map(({ src, alt, width, height }) => (
        <div
          key={src}
          className="flex items-center justify-center rounded-md bg-white/5 p-4 min-h-[100px]"
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="h-auto w-auto max-h-[88px] object-contain object-center"
            unoptimized
          />
        </div>
      ))}
    </div>
  );
}
