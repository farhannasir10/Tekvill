import Image from "next/image";

type Brand = {
  src: string;
  alt: string;
  width: number;
  height: number;
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
          className="group flex h-[5rem] w-[12rem] shrink-0 items-center justify-center sm:h-[5.5rem] sm:w-[14rem] md:h-[6rem] md:w-[15rem]"
        >
          <Image
            src={brand.src}
            alt={brand.alt}
            width={brand.width}
            height={brand.height}
            style={{ transform: `scale(${brand.scale ?? 1})` }}
            className="max-h-[3.5rem] w-auto max-w-[90%] object-contain opacity-50 grayscale transition duration-400 group-hover:opacity-100 group-hover:grayscale-0 sm:max-h-[4rem] md:max-h-[4.5rem]"
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
      className="relative overflow-hidden bg-white pt-[clamp(1.5rem,3vh,2.5rem)] pb-[clamp(4.5rem,10vh,7rem)]"
    >
      <div className="relative mx-auto mb-10 w-[min(1120px,calc(100%-2.5rem))] text-center md:mb-12">
        <h2 className="font-display text-[clamp(2.1rem,4.2vw,3.2rem)] font-semibold tracking-[-0.035em] text-ink">
          Brands That Trust Us
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-[1rem] leading-relaxed text-ink-soft">
          Visionary teams we&apos;ve helped shape what comes next.
        </p>
      </div>

      <div className="brand-slider relative">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 sm:w-24 md:w-32"
          style={{
            background:
              "linear-gradient(to right, #ffffff, rgba(255,255,255,0.8), transparent)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 sm:w-24 md:w-32"
          style={{
            background:
              "linear-gradient(to left, #ffffff, rgba(255,255,255,0.8), transparent)",
          }}
        />

        <div className="brand-slider__viewport overflow-hidden py-1">
          <div className="brand-slider__track flex w-max">
            <LogoRow suffix="a" />
            <LogoRow suffix="b" />
          </div>
        </div>
      </div>
    </section>
  );
}
