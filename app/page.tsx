type IconProps = {
  className?: string;
};

const navItems = ["GIẢI PHÁP", "SẢN PHẨM", "CASE STUDIES", "DÙNG THỬ", "TÀI NGUYÊN"];

const agricultureCards = [
  {
    title: "Kiểm định nông sản",
    description: "Phân loại chất lượng, kích thước và lỗi bề mặt bằng camera AI.",
    icon: LeafIcon,
  },
  {
    title: "Phân tích bệnh lý",
    description: "Nhận diện dấu hiệu sâu bệnh và bất thường sinh trưởng trên cây trồng.",
    icon: PulseIcon,
  },
  {
    title: "Ước tính năng suất",
    description: "Đếm đối tượng, đo mật độ và dự báo sản lượng theo thời gian thực.",
    icon: ChartIcon,
  },
];

const industryCards = [
  {
    title: "Kiểm tra ngoại quan",
    description: "Phát hiện trầy xước, sai lệch hình dạng và lỗi lắp ráp trên dây chuyền.",
    icon: ScanIcon,
  },
  {
    title: "Nhận dạng mẫu",
    description: "Định danh sản phẩm, linh kiện và phân nhóm mẫu bằng Deep Learning.",
    icon: NetworkIcon,
  },
  {
    title: "Đọc mã OCR",
    description: "Trích xuất ký tự, tem nhãn, mã lô và dữ liệu truy xuất nguồn gốc.",
    icon: TextIcon,
  },
];

const uspItems = [
  { title: "Độ chính xác cao", icon: TargetIcon },
  { title: "Xử lý thời gian thực", icon: BoltIcon },
  { title: "Dễ dàng tích hợp", icon: PlugIcon },
];

const productImage = "/images/sections/product.png";
const fullLogoImage = "/images/brand/full-logo.png";
const logoImage = "/images/brand/logo.png";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <USPSection />
      <SolutionsSection />
      <AboutSection />
      <DemoSection />
      <Footer />
      <FloatingWidget />
    </main>
  );
}

function Header() {
  return (
    <header className="relative z-50">
      <div className="bg-gray-50 text-xs text-gray-600">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-5 px-4 py-2 sm:px-6 lg:px-8">
          <a className="hidden transition hover:text-green-700 sm:inline" href="#about">
            VỀ VIỆT TREE
          </a>
          <a className="hidden transition hover:text-green-700 sm:inline" href="#resources">
            TÀI LIỆU
          </a>
          <a className="hidden transition hover:text-green-700 sm:inline" href="#news">
            TIN TỨC
          </a>
          <SearchIcon className="h-4 w-4" />
          <button className="flex items-center gap-1 font-semibold text-gray-800" type="button">
            VI <ChevronDownIcon className="h-3 w-3" />
          </button>
        </div>
      </div>

      <nav className="sticky top-0 h-20 bg-white shadow-sm">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <a className="flex min-w-fit items-center gap-3" href="#top" aria-label="Việt Tree AI">
            <img
              alt="Việt Tree AI"
              className="h-12 w-12 object-contain"
              src={logoImage}
            />
            <span className="text-xl font-bold tracking-tight text-green-900 sm:text-2xl">
              Việt Tree AI
            </span>
          </a>

          <div className="hidden items-center justify-center lg:flex">
            {navItems.map((item, index) => (
              <a
                className={`px-5 text-sm font-bold tracking-wide text-gray-700 transition hover:text-green-700 ${
                  index !== navItems.length - 1 ? "border-r border-gray-200" : ""
                }`}
                href="#solutions"
                key={item}
              >
                {item}
              </a>
            ))}
          </div>

          <a
            className="hidden rounded-md border border-blue-900 px-5 py-3 text-sm font-bold text-blue-900 transition hover:bg-blue-900 hover:text-white md:inline-flex"
            href="#contact"
          >
            TƯ VẤN HỆ THỐNG
          </a>

          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 lg:hidden"
            type="button"
            aria-label="Mở menu"
          >
            <MenuIcon className="h-5 w-5" />
          </button>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[640px] items-center bg-cover bg-center text-white md:h-[80vh]"
      style={{ backgroundImage: `url('${productImage}')` }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-green-300">
            Computer Vision for Sustainable Automation
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Giải pháp thị giác máy tính cho Công nghiệp & Nông nghiệp
          </h1>
          <p className="mt-4 max-w-2xl text-xl leading-8 text-gray-200">
            Kiến tạo tự động hóa bền vững bằng Trí tuệ nhân tạo.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex items-center justify-center rounded-md bg-green-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-green-700"
              href="#demo"
            >
              Trải nghiệm Demo
            </a>
            <a
              className="inline-flex items-center justify-center rounded-md border border-white px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-gray-950"
              href="#contact"
            >
              Nhận tư vấn hệ thống
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function USPSection() {
  return (
    <section className="relative z-10 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-gray-100 px-4 py-8 shadow-[0_-18px_45px_rgba(15,23,42,0.08)] sm:px-6 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-8">
        {uspItems.map((item) => {
          const Icon = item.icon;
          return (
            <div className="flex items-center gap-4 py-4 md:justify-center" key={item.title}>
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-green-50 text-green-700">
                <Icon className="h-6 w-6" />
              </div>
              <p className="text-lg font-bold text-gray-900">{item.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function SolutionsSection() {
  return (
    <section id="solutions" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-green-700">
            VietTreeAI Platform
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
            Giải pháp Cốt lõi cho B2B
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <SolutionColumn
            eyebrow="AgriTech Vision"
            title="Nông nghiệp"
            tone="green"
            cards={agricultureCards}
          />
          <SolutionColumn
            eyebrow="Industrial Vision"
            title="Công nghiệp"
            tone="blue"
            cards={industryCards}
          />
        </div>
      </div>
    </section>
  );
}

function SolutionColumn({
  eyebrow,
  title,
  tone,
  cards,
}: {
  eyebrow: string;
  title: string;
  tone: "green" | "blue";
  cards: typeof agricultureCards;
}) {
  const isGreen = tone === "green";
  return (
    <div className={`rounded-lg p-6 ${isGreen ? "bg-green-50" : "bg-blue-50"}`}>
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className={`text-xs font-bold uppercase tracking-[0.2em] ${isGreen ? "text-green-700" : "text-blue-800"}`}>
            {eyebrow}
          </p>
          <h3 className="mt-2 text-2xl font-bold text-gray-950">{title}</h3>
        </div>
        <div
          className={`hidden h-14 w-14 items-center justify-center rounded-md text-white sm:flex ${
            isGreen ? "bg-green-700" : "bg-blue-900"
          }`}
        >
          {isGreen ? <LeafIcon className="h-7 w-7" /> : <ScanIcon className="h-7 w-7" />}
        </div>
      </div>
      <div className="grid gap-4">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <article className="rounded-lg border border-white/80 bg-white p-5 shadow-sm" key={card.title}>
              <div className="flex gap-4">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-md ${
                    isGreen ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-900"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-950">{card.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{card.description}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-green-700">
            Về chúng tôi
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
            Về Việt Tree AI
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            Việt Tree AI phát triển các hệ thống thị giác máy tính lấy phát triển bền vững làm
            trọng tâm, giúp doanh nghiệp tự động hóa kiểm định, đo lường và ra quyết định dựa trên
            dữ liệu hình ảnh.
          </p>
          <p className="mt-4 leading-7 text-gray-600">
            Nền tảng kết hợp Computer Vision, Deep Learning và AI Agents để xử lý luồng camera,
            phân tích bất thường, trích xuất dữ liệu vận hành và tích hợp trực tiếp vào hệ thống ERP,
            MES, IoT hoặc dashboard hiện hữu.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {["Computer Vision", "Deep Learning", "AI Agents"].map((item) => (
              <div className="rounded-md border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-bold text-gray-800" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg bg-gray-900">
          <img
            alt="VietTree AI computer vision system"
            className="h-[460px] w-full object-cover opacity-80"
            src={productImage}
          />
          <div className="absolute inset-x-6 bottom-6 rounded-lg bg-white/90 p-5 shadow-lg backdrop-blur">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
              Mission
            </p>
            <p className="mt-2 text-lg font-bold text-gray-950">
              Tự động hóa quy trình quan sát, kiểm định và truy xuất nguồn gốc cho doanh nghiệp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function DemoSection() {
  return (
    <section id="demo" className="bg-gray-900 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-green-300">
            AI Output Preview
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Trực quan hóa đầu ra mô hình AI
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <DemoPanel
            title="Công nghiệp"
            description="Phát hiện lỗi ngoại quan và đánh dấu vùng bất thường trên sản phẩm."
            beforeLabel="Before"
            afterLabel="Defect map"
            color="blue"
          />
          <DemoPanel
            title="Nông nghiệp"
            description="Phân đoạn vùng cây trồng, phát hiện bệnh lý và tính toán chỉ số sinh trưởng."
            beforeLabel="Before"
            afterLabel="AI mask"
            color="green"
          />
        </div>
      </div>
    </section>
  );
}

function DemoPanel({
  title,
  description,
  beforeLabel,
  afterLabel,
  color,
}: {
  title: string;
  description: string;
  beforeLabel: string;
  afterLabel: string;
  color: "blue" | "green";
}) {
  const accent = color === "blue" ? "border-blue-400 text-blue-200" : "border-green-400 text-green-200";
  return (
    <article className="rounded-lg border border-white/10 bg-white/5 p-5">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-gray-300">{description}</p>
        </div>
        <span className={`rounded-md border px-3 py-1 text-xs font-bold uppercase ${accent}`}>
          Live AI
        </span>
      </div>

      <div className="grid overflow-hidden rounded-lg border border-white/10 md:grid-cols-2">
        <div
          className="relative min-h-64 bg-cover bg-center"
          style={{ backgroundImage: `url('${productImage}')` }}
        >
          <div className="absolute left-4 top-4 rounded-md bg-black/70 px-3 py-1 text-xs font-bold">
            {beforeLabel}
          </div>
        </div>
        <div
          className="relative min-h-64 overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url('${productImage}')` }}
        >
          <div className={`absolute inset-0 ${color === "blue" ? "bg-blue-950/50" : "bg-green-950/45"}`} />
          <div className="absolute left-[18%] top-[22%] h-24 w-32 rounded-md border-2 border-red-400 bg-red-500/20" />
          <div className="absolute bottom-[18%] right-[14%] h-20 w-28 rounded-md border-2 border-emerald-300 bg-emerald-400/20" />
          <div className="absolute left-4 top-4 rounded-md bg-black/70 px-3 py-1 text-xs font-bold">
            {afterLabel}
          </div>
          <div className="absolute bottom-4 left-4 right-4 rounded-md bg-black/65 p-3 text-xs text-gray-100">
            Confidence 98.7% · Latency 42ms · API Ready
          </div>
        </div>
      </div>
    </article>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-black py-12 text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img
              alt="Việt Tree AI"
              className="h-16 w-auto rounded bg-white object-contain p-1"
              src={fullLogoImage}
            />
          </div>
          <p className="mt-5 leading-7 text-gray-400">
            Giải pháp AI thị giác máy tính giúp doanh nghiệp kiểm định, giám sát và tự động hóa vận
            hành với dữ liệu hình ảnh thời gian thực.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white">Liên hệ</h3>
          <div className="mt-5 space-y-3 text-sm">
            <p>Email: hello@viettree.ai</p>
            <p>Phone: +84 900 000 000</p>
            <p>Addr: TP. Hồ Chí Minh, Việt Nam</p>
          </div>
        </div>

        <form className="space-y-3">
          <h3 className="text-lg font-bold text-white">Form tư vấn</h3>
          <input className="w-full rounded-md border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-green-400" placeholder="Name" />
          <input className="w-full rounded-md border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-green-400" placeholder="Email" type="email" />
          <input className="w-full rounded-md border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-green-400" placeholder="Phone" />
          <button className="w-full rounded-md bg-green-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-green-700" type="button">
            Submit
          </button>
        </form>
      </div>
    </footer>
  );
}

function FloatingWidget() {
  return (
    <div className="fixed bottom-8 right-4 z-50 flex items-center gap-3 sm:right-8">
      <div className="hidden rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-xl transition hover:scale-105 sm:block">
        Tôi có thể giúp gì cho bạn? &gt;
      </div>
      <button
        className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-700 shadow-2xl ring-1 ring-blue-100 transition hover:scale-105"
        type="button"
        aria-label="Robot AI B2B"
      >
        <RobotIcon className="h-9 w-9" />
      </button>
    </div>
  );
}

function SearchIcon({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>;
}

function ChevronDownIcon({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>;
}

function MenuIcon({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
}

function LeafIcon({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 20c8-1 13-7 14-15C11 6 5 11 5 20Z" /><path d="M5 20c4-6 8-9 14-15" /></svg>;
}

function PulseIcon({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 12h4l2-6 4 12 2-6h6" /></svg>;
}

function ChartIcon({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 19V5" /><path d="M4 19h16" /><path d="M8 16v-5" /><path d="M12 16V8" /><path d="M16 16v-7" /></svg>;
}

function ScanIcon({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 3H5a2 2 0 0 0-2 2v2" /><path d="M17 3h2a2 2 0 0 1 2 2v2" /><path d="M7 21H5a2 2 0 0 1-2-2v-2" /><path d="M17 21h2a2 2 0 0 0 2-2v-2" /><path d="M7 12h10" /></svg>;
}

function NetworkIcon({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="6" cy="7" r="3" /><circle cx="18" cy="7" r="3" /><circle cx="12" cy="18" r="3" /><path d="M8.5 8.7 11 15" /><path d="m15.5 8.7-2.5 6.3" /><path d="M9 7h6" /></svg>;
}

function TextIcon({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 7V5h16v2" /><path d="M9 19h6" /><path d="M12 5v14" /></svg>;
}

function TargetIcon({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3" /></svg>;
}

function BoltIcon({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m13 2-8 12h7l-1 8 8-12h-7l1-8Z" /></svg>;
}

function PlugIcon({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M8 2v6M16 2v6" /><path d="M7 8h10v4a5 5 0 0 1-10 0V8Z" /><path d="M12 17v5" /></svg>;
}

function RobotIcon({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="5" y="8" width="14" height="11" rx="3" /><path d="M12 8V4" /><circle cx="9" cy="13" r="1.2" fill="currentColor" /><circle cx="15" cy="13" r="1.2" fill="currentColor" /><path d="M9 17h6" /><path d="M3 12h2M19 12h2" /></svg>;
}
