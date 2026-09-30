import fs from "fs";
import path from "path";
import https from "https";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "../public/services/detail");

// Save product-design / staff unique uploads from latest CDP if present
const cdpPath =
  "C:/Users/farha/.cursor/browser-logs/cdp-response-Runtime.evaluate-2026-09-30T11-46-30-316Z.json";
if (fs.existsSync(cdpPath)) {
  const raw = JSON.parse(fs.readFileSync(cdpPath, "utf8").replace(/^\uFEFF/, ""));
  const data = raw.result?.value || {};
  for (const [slug, items] of Object.entries(data)) {
    const dir = path.join(root, slug);
    fs.mkdirSync(dir, { recursive: true });
    for (const item of items || []) {
      if (!item.ok || !item.b64) continue;
      // Skip people stock and tiny icons
      if (/pexels-pavel|cost-saving|scalibiltiy|development-speed|specialized-skills|quick-results|less-respons|agility|assumption/i.test(item.name)) {
        continue;
      }
      // Skip shared process photos that look like generic office stock with people
      if (/discovery-and-requirements|data-collection|data-analysis|evaluation-validation|Model-selecion|Deployment-and-Integration/i.test(item.name)) {
        // keep only in _shared already; don't duplicate as service-unique unless product-design specific
        if (slug !== "ui-ux-design" || !/Product|Lawmatics/i.test(item.name)) continue;
      }
      const buf = Buffer.from(item.b64, "base64");
      if (buf.length < 30000) continue;
      const name = item.name.replace(/[^a-zA-Z0-9._-]/g, "-");
      fs.writeFileSync(path.join(dir, name), buf);
      console.log("saved", slug, name, buf.length);
    }
  }
}

// Tech-only Unsplash images (no office-people stock). Specific photo IDs.
const downloads = {
  "ai-development": [
    ["tech-01.jpg", "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80"], // AI abstract
    ["tech-02.jpg", "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80"], // robot/ai
    ["tech-03.jpg", "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=1600&q=80"], // ml board
    ["tech-04.jpg", "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1600&q=80"], // robot
  ],
  "full-stack-development": [
    ["tech-01.jpg", "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=80"], // code
    ["tech-02.jpg", "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80"], // code screen
    ["tech-03.jpg", "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1600&q=80"], // laptop code
    ["tech-04.jpg", "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1600&q=80"], // code close
    ["tech-05.jpg", "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=80"], // terminal
  ],
  "mobile-app-development": [
    ["tech-01.jpg", "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1600&q=80"], // phones
    ["tech-02.jpg", "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1600&q=80"], // app screens
    ["tech-03.jpg", "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=1600&q=80"], // phone desk
    ["tech-04.jpg", "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1600&q=80"], // smartphone
  ],
  "ui-ux-design": [
    ["tech-01.jpg", "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1600&q=80"], // design tools
    ["tech-02.jpg", "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1600&q=80"], // ui design
    ["tech-03.jpg", "https://images.unsplash.com/photo-1618788372246-79faff0c3742?auto=format&fit=crop&w=1600&q=80"], // figma-like
    ["tech-04.jpg", "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1600&q=80"], // wireframe hands device-ish
  ],
  "staff-augmentation": [
    ["tech-01.jpg", "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80"], // laptop desk no face
    ["tech-02.jpg", "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1600&q=80"], // coding hands
    ["tech-03.jpg", "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80"], // remote laptop
    ["tech-04.jpg", "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80"], // diverse team workshop - CHECK if too white; alternative below
    ["tech-05.jpg", "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"], // diverse team - may have mix
  ],
  "cloud-devops": [
    ["tech-01.jpg", "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80"], // earth network
    ["tech-02.jpg", "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80"], // server racks
    ["tech-03.jpg", "https://images.unsplash.com/photo-1544197150-b99a580b7d34?auto=format&fit=crop&w=1600&q=80"], // network cables
    ["tech-04.jpg", "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80"], // circuit board
  ],
  "product-strategy": [
    ["tech-01.jpg", "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80"], // desk charts hands
    ["tech-02.jpg", "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1600&q=80"], // kanban board
    ["tech-03.jpg", "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=1600&q=80"], // sticky notes
    ["tech-04.jpg", "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80"], // strategy meeting - CHECK people
  ],
  "qa-automation": [
    ["tech-01.jpg", "https://images.unsplash.com/photo-1516321497487-eaa9e8aafd4a?auto=format&fit=crop&w=1600&q=80"], // testing screens
    ["tech-02.jpg", "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1600&q=80"], // code debug
    ["tech-03.jpg", "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1600&q=80"], // laptop code
    ["tech-04.jpg", "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1600&q=80"], // react/code abstract
  ],
  "data-engineering": [
    ["tech-01.jpg", "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80"], // dashboard charts
    ["tech-02.jpg", "https://images.unsplash.com/photo-1504868584819-f8e8b4b67d3d?auto=format&fit=crop&w=1600&q=80"], // analytics
    ["tech-03.jpg", "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80"], // data laptop
    ["tech-04.jpg", "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1600&q=80"], // charts paper
  ],
};

// Prefer NO-PEOPLE replacements for staff/strategy
downloads["staff-augmentation"] = [
  ["tech-01.jpg", "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80"],
  ["tech-02.jpg", "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1600&q=80"],
  ["tech-03.jpg", "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80"],
  ["tech-04.jpg", "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1600&q=80"], // typing laptop
  ["tech-05.jpg", "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1600&q=80"], // code colors
];
downloads["product-strategy"] = [
  ["tech-01.jpg", "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80"],
  ["tech-02.jpg", "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1600&q=80"],
  ["tech-03.jpg", "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=1600&q=80"],
  ["tech-04.jpg", "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1600&q=80"], // project board
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https
      .get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          file.close();
          try { fs.unlinkSync(dest); } catch {}
          download(res.headers.location, dest).then(resolve, reject);
          return;
        }
        if (res.statusCode !== 200) {
          file.close();
          reject(new Error(res.statusCode + " " + url));
          return;
        }
        res.pipe(file);
        file.on("finish", () => file.close(() => resolve()));
      })
      .on("error", reject);
  });
}

for (const [slug, list] of Object.entries(downloads)) {
  const dir = path.join(root, slug);
  fs.mkdirSync(dir, { recursive: true });
  for (const [name, url] of list) {
    const dest = path.join(dir, name);
    try {
      await download(url, dest);
      console.log("dl", slug, name, fs.statSync(dest).size);
    } catch (e) {
      console.log("fail", slug, name, e.message);
    }
  }
}

// Remove people-heavy shared stock
const kill = [
  path.join(root, "_shared/pexels-pavel-danilyuk-6340641-scaled.jpg"),
];
for (const f of kill) {
  if (fs.existsSync(f)) {
    fs.unlinkSync(f);
    console.log("removed", f);
  }
}

console.log("done");
