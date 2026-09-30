import type { Service, ServiceContentBlock } from "@/data/services";

export type StructuredPoint = {
  title: string;
  body: string;
};

export type StructuredService = {
  introTitle?: string;
  intro: string;
  processTitle: string;
  processIntro?: string;
  process: StructuredPoint[];
  benefitsTitle: string;
  benefitsIntro?: string;
  benefits: StructuredPoint[];
  whyTitle: string;
  whyIntro?: string;
  why: StructuredPoint[];
};

const PROCESS_STOP =
  /Empowering|AI Expertise|Case Stud|Do You Really|Is .+ for You|Advantages|Our .+ Services|Find The Best|Partner with|Efficiently Expand|Custom AI Solutions|Custom Digital Product|OUR FULL|Reduced expenses|Hire Top|Expert Full-Stack|Full Stack Development Services|Mobile App Development Services|Product Design Case|Staff Augmentation Solutions for Guaranteed/i;

const BENEFIT_START =
  /Do You Really|Is .+ for You|Advantages of|Is Full Stack|Is Bespoke|Is Mobile|Is Staff/i;

const WHY_START =
  /Find The Best|Partner with|Hire Top IT|Competence and Reliability|Custom Digital Product/i;

function pairsFromBlocks(
  blocks: ServiceContentBlock[],
  startIdx: number,
  stopTest: (t: string) => boolean,
): { intro?: string; items: StructuredPoint[] } {
  const items: StructuredPoint[] = [];
  let intro: string | undefined;
  let i = startIdx;

  // optional intro paragraph right after section heading
  if (blocks[i]?.type === "p") {
    intro = blocks[i].text;
    i += 1;
  }

  while (i < blocks.length) {
    const b = blocks[i];
    if (b.type === "h" && stopTest(b.text)) break;
    if (b.type === "h") {
      const title = b.text.replace(/:$/, "").replace(/^"|"$/g, "");
      const next = blocks[i + 1];
      if (next?.type === "p") {
        items.push({ title, body: next.text });
        i += 2;
        continue;
      }
      // heading without body — skip lonely banners
      i += 1;
      continue;
    }
    i += 1;
  }

  return { intro, items };
}

function fromContent(blocks: ServiceContentBlock[]): StructuredService {
  let introTitle: string | undefined;
  let intro = "";
  let processTitle = "How we work";
  let processIntro: string | undefined;
  let process: StructuredPoint[] = [];
  let benefitsTitle = "Why it matters";
  let benefitsIntro: string | undefined;
  let benefits: StructuredPoint[] = [];
  let whyTitle = "Why Tekvill";
  let whyIntro: string | undefined;
  let why: StructuredPoint[] = [];

  // First heading + first paragraph = intro
  const firstH = blocks.findIndex((b) => b.type === "h");
  if (firstH >= 0) {
    introTitle = blocks[firstH].text;
    const p = blocks.slice(firstH + 1).find((b) => b.type === "p");
    if (p) intro = p.text;
  }

  const processIdx = blocks.findIndex(
    (b) => b.type === "h" && /Process/i.test(b.text),
  );
  if (processIdx >= 0) {
    processTitle = blocks[processIdx].text;
    const parsed = pairsFromBlocks(blocks, processIdx + 1, (t) =>
      PROCESS_STOP.test(t),
    );
    processIntro = parsed.intro;
    process = parsed.items;
  }

  // Product Design pages often start process at User Research without a Process H2
  if (process.length < 3) {
    const altIdx = blocks.findIndex(
      (b) => b.type === "h" && /^User Research$/i.test(b.text),
    );
    if (altIdx >= 0) {
      processTitle = "Our product design process";
      const parsed = pairsFromBlocks(blocks, altIdx, (t) =>
        PROCESS_STOP.test(t) || BENEFIT_START.test(t) || WHY_START.test(t),
      );
      process = parsed.items;
    }
  }

  const benefitIdx = blocks.findIndex(
    (b) => b.type === "h" && BENEFIT_START.test(b.text),
  );
  if (benefitIdx >= 0) {
    benefitsTitle = blocks[benefitIdx].text;
    const parsed = pairsFromBlocks(blocks, benefitIdx + 1, (t) =>
      WHY_START.test(t) || /Our .+ Case|Case Stud|OUR FULL/i.test(t),
    );
    benefitsIntro = parsed.intro;
    benefits = parsed.items;
  }

  const whyIdx = blocks.findIndex(
    (b) => b.type === "h" && WHY_START.test(b.text),
  );
  if (whyIdx >= 0) {
    whyTitle = blocks[whyIdx].text;
    const parsed = pairsFromBlocks(blocks, whyIdx + 1, (t) =>
      /Case Stud|Brands That Trust|Our Services/i.test(t),
    );
    whyIntro = parsed.intro;
    why = parsed.items;
  }

  // Staff services block as why fallback
  if (!why.length) {
    const staffIdx = blocks.findIndex(
      (b) => b.type === "h" && /Our Staff Augmentation Services|Hire Top IT/i.test(b.text),
    );
    if (staffIdx >= 0) {
      whyTitle = blocks[staffIdx].text;
      const start =
        blocks[staffIdx + 1]?.type === "h" ? staffIdx + 1 : staffIdx + 1;
      const parsed = pairsFromBlocks(blocks, start, () => false);
      whyIntro = parsed.intro;
      why = parsed.items.filter((x) => x.title.length < 80);
    }
  }

  // Fallbacks if process empty — take consecutive heading/p after intro
  if (!process.length) {
    process = blocks
      .map((b, i) => ({ b, i }))
      .filter(({ b }) => b.type === "h" && (b.level ?? 2) >= 2)
      .slice(1, 9)
      .map(({ b, i }) => ({
        title: b.text,
        body: blocks[i + 1]?.type === "p" ? blocks[i + 1].text : "",
      }))
      .filter((x) => x.body);
  }

  return {
    introTitle,
    intro,
    processTitle,
    processIntro,
    process: process.slice(0, 6),
    benefitsTitle,
    benefitsIntro,
    benefits: benefits.slice(0, 6),
    whyTitle,
    whyIntro,
    why: why.slice(0, 5),
  };
}

function fromLegacy(service: Service): StructuredService {
  const process = service.process.map((step) => {
    const [title, ...rest] = step.split(" — ");
    return {
      title: title.trim(),
      body: rest.join(" — ").trim() || step,
    };
  });

  const benefits =
    service.sections?.[0]?.items.map((item) => ({
      title: item.heading || service.sections![0].title,
      body: item.body,
    })) ||
    service.deliverables.slice(0, 6).map((d) => ({
      title: d.split(":")[0]?.slice(0, 48) || "Deliverable",
      body: d,
    }));

  return {
    intro: service.overview,
    processTitle: "How we work",
    process,
    benefitsTitle: service.sections?.[0]?.title || "What you get",
    benefits,
    whyTitle: "Why Tekvill",
    why: benefits.slice(0, 4),
  };
}

export function structureService(service: Service): StructuredService {
  if (service.content?.length) return fromContent(service.content);
  return fromLegacy(service);
}
