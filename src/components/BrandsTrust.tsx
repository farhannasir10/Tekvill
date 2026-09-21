import Image from "next/image";

type Brand = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Visual scale so wide/short logos match taller marks */
  scale?: number;
};

const brands: Brand[] = [
  {
    src: "/brands/html-3d4593dea70c.svg",
    alt: "Teck Scout",
    width: 260,
    height: 76,
  },
  {
    src: "/brands/logo3-clear.png",
    alt: "Gig Elite",
    width: 250,
    height: 54,
  },
  {
    src: "/brands/css-2480d12c880a-clear.png",
    alt: "Sealed",
    width: 300,
    height: 85,
    scale: 1.4,
  },
  {
    src: "/brands/css-2bb631e02957-clear.png",
    alt: "Estatepro",
    width: 260,
    height: 78,
    scale: 1.2,
  },
  {
    src: "/brands/css-5d480488d55b-clear.png",
    alt: "ARTZERO",
    width: 240,
    height: 110,
    scale: 1.15,
  },
];

function LogoRow({ suffix }: { suffix: string }) {
  return (
    <div className="brand-slider__slide flex shrink-0 items-center gap-12 pr-12 md:gap-16 md:pr-16">
      {brands.map((brand) => (
        <div
          key={`${brand.src}-${suffix}`}
          className="flex h-[5.75rem] w-[13.5rem] shrink-0 items-center justify-center sm:h-[6.25rem] sm:w-[15rem] md:h-[6.75rem] md:w-[16.5rem]"
        >
          <Image
            src={brand.src}
            alt={brand.alt}
            width={brand.width}
            height={brand.height}
            style={{ transform: `scale(${brand.scale ?? 1})` }}
            className="max-h-[4.25rem] w-auto max-w-[95%] object-contain opacity-90 transition duration-300 hover:opacity-100 sm:max-h-[4.75rem] md:max-h-[5.25rem]"
          />
        </div>
      ))}
    </div>
  );
}

export default function BrandsTrust() {
  return (
    <section
      id="brands"
      className="relative overflow-hidden bg-paper py-[clamp(4.5rem,10vh,7rem)]"
    >
      <div className="relative mx-auto w-[min(1120px,calc(100%-2.5rem))]">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <h2 className="font-display text-[clamp(2.1rem,4.2vw,3.2rem)] font-semibold tracking-[-0.03em] text-ink">
            Brands That Trust Us
          </h2>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-soft">
            Some visionary clients that we&apos;ve helped in shaping the future.
          </p>
        </div>
      </div>

      <div className="brand-slider relative">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-20 md:w-28"
          style={{
            background:
              "linear-gradient(to right, var(--color-paper), color-mix(in srgb, var(--color-paper) 80%, transparent), transparent)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-20 md:w-28"
          style={{
            background:
              "linear-gradient(to left, var(--color-paper), color-mix(in srgb, var(--color-paper) 80%, transparent), transparent)",
          }}
        />

        <div className="brand-slider__viewport overflow-hidden py-2">
          <div className="brand-slider__track flex w-max">
            <LogoRow suffix="a" />
            <LogoRow suffix="b" />
          </div>
        </div>
      </div>
    </section>
  );
}
