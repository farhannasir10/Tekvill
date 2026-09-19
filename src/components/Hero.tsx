import Link from "next/link";
import HeroEffects from "./HeroEffects";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate h-dvh overflow-hidden group"
    >
      <HeroEffects />

      <div className="absolute inset-0 -z-10 overflow-hidden bg-black" aria-hidden="true">
        <div
          data-hero-field
          className="animate-field absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 55% 45% at 22% 42%, var(--color-accent-glow), transparent 62%),
              radial-gradient(ellipse 50% 40% at 75% 35%, rgba(255,255,255,0.06), transparent 60%),
              radial-gradient(ellipse 40% 35% at 20% 70%, rgba(255,255,255,0.03), transparent 55%),
              linear-gradient(160deg, #101010 0%, #0a0a0a 45%, #050505 100%)
            `,
          }}
        />
        <div
          className="animate-shade absolute inset-0"
          style={{
            background: `
              linear-gradient(105deg, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.2) 45%, rgba(10,10,10,0.45) 100%),
              linear-gradient(180deg, rgba(10,10,10,0.35) 0%, transparent 25%, transparent 65%, rgba(10,10,10,0.7) 100%)
            `,
          }}
        />
        <div className="hero-grid-bg animate-grid pointer-events-none absolute inset-0 opacity-0" />
        <div
          data-hero-glow
          className="animate-glow pointer-events-none absolute top-[-10%] right-[-8%] h-[120%] w-[min(58vw,720px)] opacity-0 blur-[18px] will-change-transform"
          style={{
            background: `
              radial-gradient(ellipse 55% 50% at 62% 38%, rgba(77,159,255,0.16) 0%, rgba(255,255,255,0.05) 38%, transparent 68%),
              linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.04) 48%, rgba(255,255,255,0.1) 58%, rgba(255,255,255,0.03) 72%, transparent 88%)
            `,
          }}
        />
        <div
          id="spotlight"
          className="pointer-events-none absolute top-[42%] left-[72%] h-[42vw] max-h-[520px] w-[42vw] max-w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 mix-blend-screen transition-opacity duration-600 will-change-[left,top] group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 35%, transparent 70%)",
          }}
        />
        <div
          className="animate-scan pointer-events-none absolute inset-0 mix-blend-screen"
          style={{
            background:
              "linear-gradient(105deg, transparent 38%, rgba(255,255,255,0.02) 46%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.02) 54%, transparent 62%)",
            backgroundSize: "240% 100%",
          }}
        />
        <div className="hero-grain-bg animate-grain pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay" />
      </div>

      <div className="animate-frame-in relative z-2 mx-[clamp(0.75rem,1.5vw,1.25rem)] mt-15 mb-[0.85rem] grid h-[calc(100%-3.75rem-0.85rem)] grid-rows-[auto_minmax(0,1fr)_auto] gap-[clamp(0.5rem,1.2vh,1rem)] border border-warm/16 p-[clamp(0.85rem,1.6vh,1.35rem)_clamp(1rem,1.8vw,1.5rem)]">
        <div className="flex max-w-56 items-center gap-4">
          <span className="text-[0.7rem] font-medium tracking-[0.18em] text-white">
            01
          </span>
          <span
            className="animate-rule h-px flex-1 origin-left bg-warm/35"
            aria-hidden="true"
          />
          <span className="hidden whitespace-nowrap text-[0.65rem] font-normal tracking-[0.12em] text-muted uppercase md:inline">
            31.52° N · 74.35° E
          </span>
        </div>

        <div className="grid min-h-0 items-center gap-[clamp(1.25rem,2.5vw,2.25rem)] py-0 pr-[clamp(0.15rem,0.8vw,0.5rem)] pl-[clamp(2.25rem,6vw,5.5rem)] max-[980px]:grid-cols-1 max-[980px]:px-0 min-[981px]:grid-cols-[minmax(0,1.1fr)_minmax(340px,1fr)] min-[981px]:max-[1200px]:pl-[clamp(1.5rem,4vw,3rem)]">
          <div className="z-2 flex min-h-0 max-w-[44rem] flex-col justify-center justify-self-stretch">
            <p className="animate-rise mb-[clamp(0.7rem,1.5vh,1.1rem)] text-[0.7rem] font-semibold tracking-[0.28em] text-white uppercase [animation-delay:0.25s] opacity-0">
              Product & brand studio
            </p>
            <h1 className="mb-[clamp(0.75rem,1.8vh,1.25rem)] font-serif text-[clamp(2.2rem,9vw,3.6rem)] font-medium leading-[1.06] tracking-[-0.03em] text-warm md:text-[clamp(2.6rem,5vw,4.6rem)] min-[981px]:max-[1200px]:text-[clamp(2.4rem,4vw,3.6rem)]">
              <span className="animate-rise block opacity-0 [animation-delay:0.35s] [animation-duration:1.05s]">
                A first impression that
              </span>
              <span className="animate-rise block text-accent opacity-0 [animation-delay:0.48s] [animation-duration:1.05s]">
                holds its weight.
              </span>
            </h1>
            <p className="animate-rise mb-[clamp(1rem,2.4vh,1.75rem)] max-w-[38rem] text-[clamp(1.08rem,1.5vw,1.28rem)] leading-[1.6] font-normal text-lede opacity-0 [animation-delay:0.75s]">
              Tekvill plans, designs, and ships digital products for companies
              that need to look exact — not loud. Black, white, and the work in
              between.
            </p>
            <div className="animate-rise flex flex-wrap items-center gap-x-6 gap-y-4 opacity-0 [animation-delay:0.9s] max-[600px]:flex-col max-[600px]:items-start">
              <Link
                href="#contact"
                className="inline-flex min-h-11 items-center justify-center rounded-sm border border-warm bg-warm px-[1.35rem] text-[0.7rem] font-semibold tracking-[0.12em] text-black uppercase transition hover:-translate-y-px hover:bg-transparent hover:text-warm"
              >
                Start a project <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="#work"
                className="text-[0.7rem] font-medium tracking-[0.12em] text-warm uppercase underline underline-offset-[0.28em] transition hover:text-white"
              >
                See selected work
              </Link>
            </div>
          </div>

          <aside
            className="animate-stage relative mr-[clamp(0.75rem,3vw,2.5rem)] hidden h-[min(62vh,500px)] w-full max-w-[460px] justify-self-end opacity-0 perspective-[1000px] min-[981px]:block min-[981px]:max-[1200px]:h-[min(56vh,440px)] min-[981px]:max-[1200px]:max-w-[400px]"
            aria-hidden="true"
          >
            <div
              id="stagePanel"
              className="absolute inset-x-0 top-0 bottom-7 overflow-hidden border border-warm/20 shadow-[0_28px_70px_rgba(0,0,0,0.45)] backdrop-blur-[6px] will-change-transform [transform-style:preserve-3d]"
              style={{
                background:
                  "linear-gradient(160deg, rgba(255,255,255,0.03), transparent 40%), rgba(12,12,12,0.72)",
              }}
            >
              <div className="absolute top-1/2 left-[52%] aspect-square w-[min(52%,210px)] -translate-x-1/2 -translate-y-1/2">
                <span className="animate-spin-slow absolute inset-[8%] rounded-full border border-t-transparent border-l-transparent border-accent/35" />
                <span className="animate-spin-rev absolute -inset-[6%] rounded-full border border-warm/12 border-r-transparent border-b-accent/35" />
                <span className="animate-spin-dashed absolute inset-[22%] rounded-full border border-dashed border-accent/16" />
                <span
                  className="animate-orb absolute inset-[28%] rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.32), rgba(77,159,255,0.12) 45%, transparent 70%), radial-gradient(circle at 50% 50%, rgba(77,159,255,0.14), transparent 65%)",
                    boxShadow:
                      "0 0 48px rgba(77,159,255,0.18), inset 0 0 30px rgba(255,255,255,0.06)",
                  }}
                />
                <span className="absolute top-1/2 left-1/2 mt-[-3.5px] ml-[-3.5px] h-[7px] w-[7px] rounded-full bg-accent shadow-[0_0_18px_rgba(77,159,255,0.85)]" />
              </div>

              <svg
                className="pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 400 400"
                fill="none"
              >
                <g className="[&_path]:stroke-accent/28 [&_path]:stroke-1 [&_path]:[stroke-linecap:round]">
                  <path className="animate-draw" d="M70 300 L140 220 L210 250 L290 120 L340 170" />
                  <path
                    className="animate-draw"
                    style={{ animationDelay: "0.95s" }}
                    d="M90 90 L160 140 L230 80 L310 200 L360 150"
                  />
                  <path
                    className="animate-draw stroke-accent/14!"
                    style={{ animationDelay: "1.2s" }}
                    d="M140 220 L160 140"
                  />
                  <path
                    className="animate-draw stroke-accent/14!"
                    style={{ animationDelay: "1.2s" }}
                    d="M210 250 L230 80"
                  />
                  <path
                    className="animate-draw stroke-accent/14!"
                    style={{ animationDelay: "1.2s" }}
                    d="M290 120 L310 200"
                  />
                  <path
                    className="animate-draw stroke-accent/14!"
                    style={{ animationDelay: "1.2s" }}
                    d="M70 300 L90 90"
                  />
                </g>
                <g className="fill-accent opacity-0 [filter:drop-shadow(0_0_6px_rgba(77,159,255,0.75))]">
                  {[
                    [70, 300, 3, "1.3s"],
                    [140, 220, 4, "1.4s"],
                    [210, 250, 3, "1.5s"],
                    [290, 120, 5, "1.35s"],
                    [340, 170, 3, "1.55s"],
                    [90, 90, 3, "1.45s"],
                    [160, 140, 4, "1.5s"],
                    [230, 80, 3, "1.6s"],
                    [310, 200, 3, "1.55s"],
                    [360, 150, 4, "1.65s"],
                  ].map(([cx, cy, r, delay]) => (
                    <circle
                      key={`${cx}-${cy}`}
                      className="animate-node"
                      style={{ animationDelay: String(delay) }}
                      cx={cx}
                      cy={cy}
                      r={r}
                    />
                  ))}
                </g>
                <circle
                  className="animate-pulse-ring fill-transparent stroke-accent stroke-1"
                  cx="290"
                  cy="120"
                  r="5"
                />
              </svg>

              <div className="absolute top-[12%] right-[8%] bottom-[18%] flex w-[18%] gap-[10%] opacity-55">
                {Array.from({ length: 8 }).map((_, i) => (
                  <span
                    key={i}
                    className={`stream-line animate-stream flex-1 opacity-35 ${
                      i % 2 === 0 ? "[animation-duration:3.4s] [animation-delay:-1s]" : ""
                    } ${i % 3 === 2 ? "[animation-duration:2.2s] opacity-55" : ""}`}
                  />
                ))}
              </div>

              <div className="absolute bottom-4 left-4 grid w-[7.5rem] gap-[0.35rem] text-[0.58rem] tracking-[0.14em] text-muted uppercase">
                <div className="flex justify-between gap-2">
                  <span>SYS</span>
                  <span className="animate-blink text-warm">LIVE</span>
                </div>
                <div className="flex justify-between gap-2">
                  <span>LAT</span>
                  <span>12ms</span>
                </div>
                <div className="flex justify-between gap-2">
                  <span>NODES</span>
                  <span>1.4k</span>
                </div>
                <div className="mt-1 h-0.5 overflow-hidden bg-warm/12">
                  <i className="animate-load block h-full w-2/5 bg-warm" />
                </div>
              </div>

              <div className="absolute top-4 left-4 grid gap-[0.3rem] font-mono text-[0.58rem] leading-[1.4] tracking-[0.02em] text-warm/28">
                {["model.route(signal)", "infer → optimize", "deploy.cluster()", "scale.auto(true)"].map(
                  (line, i) => (
                    <span
                      key={line}
                      className="animate-code opacity-0"
                      style={{ animationDelay: `${1 + i * 0.15}s` }}
                    >
                      {line}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="absolute bottom-0 left-0 flex items-center gap-3">
              <span className="text-[0.65rem] font-medium tracking-[0.16em] text-white">
                02
              </span>
              <span className="text-[0.65rem] font-normal tracking-[0.16em] text-muted uppercase">
                Systems layer
              </span>
            </div>
          </aside>
        </div>

        <div className="animate-rise border-t border-warm/14 pt-[clamp(0.75rem,1.6vh,1.1rem)] opacity-0 [animation-delay:1.05s]">
          <ul className="flex w-full list-none flex-wrap items-center gap-[clamp(1rem,2.8vw,2.75rem)] p-0 max-[600px]:gap-x-[1.35rem] max-[600px]:gap-y-[0.85rem]">
            <li className="text-[0.68rem] font-bold tracking-[0.18em] text-warm uppercase">
              Partners
            </li>
            {["Helion", "Northline", "Vesper", "Kindred", "Atlas Freight"].map(
              (name) => (
                <li
                  key={name}
                  className="text-[0.68rem] font-medium tracking-[0.16em] text-warm/48 uppercase"
                >
                  {name}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
