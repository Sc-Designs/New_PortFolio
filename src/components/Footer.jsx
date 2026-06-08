import SoftAurora from "./SoftAurora";

const TermLine = ({ cmd, children }) => (
  <div className="mb-3">
    <div className="flex gap-3 mb-1">
      <span className="text-[#e100ff]">→</span>
      <span className="text-zinc-100">{cmd}</span>
    </div>
    <div className="pl-6">{children}</div>
  </div>
);

const Row = ({ label, value, link, highlight }) => (
  <div className="flex flex-row items-center gap-3 text-xs font-primary leading-5">
    <span className="text-zinc-600 w-20 shrink-0">{label}</span>
    {link ? (
      <a
        href={link}
        className="text-[#e100ff] hover:underline whitespace-nowrap">
        {value}
      </a>
    ) : (
      <span className={highlight ? "text-white font-bold" : "text-zinc-300"}>
        {value}
      </span>
    )}
  </div>
);

const Footer = () => {
  return (
    <div
      id="contact"
      className="relative w-full bg-black"
      style={{ minHeight: "100svh" }}>
      {/* Aurora fills entire section */}
      <div className="absolute inset-0 w-full h-full">
        <SoftAurora
          speed={0.6}
          scale={1.5}
          brightness={1}
          color1="#f7f7f7"
          color2="#e100ff"
          noiseFrequency={2.5}
          noiseAmplitude={1}
          bandHeight={0.5}
          bandSpread={1}
          octaveDecay={0.1}
          layerOffset={0}
          colorSpeed={1}
          enableMouseInteraction
          mouseInfluence={0.25}
        />
      </div>

      {/* Terminal card */}
      <div
        className="absolute z-10 top-1/2 -translate-y-1/2
                      w-[92%] left-1/2 -translate-x-1/2
                      md:left-auto md:translate-x-0
                      md:right-6 md:w-[60%] lg:right-25 lg:w-[35%]
                      md:h-[46%]
                      lg:h-[70vh]
                      rounded-3xl bg-zinc-900/60 backdrop-blur-2xl
                      border border-white/10 overflow-hidden flex flex-col">
        {/* Terminal bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-zinc-950/80 border-b border-white/10 shrink-0">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
          <span className="mx-auto text-xs text-zinc-600 font-mono tracking-widest">
            suvam@portfolio ~ contact
          </span>
        </div>

        {/* Terminal body */}
        <div className="flex-1 p-4 sm:p-6 font-mono text-xs sm:text-sm overflow-auto">
          <TermLine cmd="whoami">
            <Row label="name" value="Suvam Chakraborti" highlight />
            <Row label="role" value="Full Stack MERN Developer" />
            <Row
              label="status"
              value="🟢 Available for freelance & internships"
            />
          </TermLine>

          <TermLine cmd="cat contact.json">
            <Row
              label="email"
              value="suvam@suvam.info"
              link="mailto:suvam@suvam.info"
            />
            <Row
              label="github"
              value="github.com/suvam"
              link="https://github.com/Sc-Designs"
            />
            <Row
              label="linkedin"
              value="linkedin.com/in/suvam-chakraborti"
              link="https://www.linkedin.com/in/suvam-chakraborti"
            />
            <Row
              label="whatsapp"
              value="+91 800XX XX553"
              link="https://wa.me/918001165553"
            />
          </TermLine>

          {/* Blinking cursor */}
          <div className="flex gap-3 mt-1">
            <span className="text-[#e100ff]">→</span>
            <span className="w-2 h-4 bg-[#e100ff] animate-pulse inline-block mt-0.5" />
          </div>

          {/* CTA buttons */}
          <div className="flex gap-2 sm:gap-3 mt-4 pt-4 border-t border-white/10 flex-wrap">
            {[
              {
                label: "✉ send email",
                href: "mailto:suvam@suvam.info",
                primary: true,
              },
              { label: "↗ whatsapp", href: "https://wa.me/918001165553" },
              {
                label: "↗ linkedin",
                href: "https://linkedin.com/in/suvam-chakraborti",
              },
            ].map((btn) => (
              <a
                key={btn.label}
                href={btn.href}
                className={`px-4 py-2 rounded-md text-xs border transition-all duration-200 ${
                  btn.primary
                    ? "border-[#e100ff88] text-[#e100ff] bg-[#e100ff18] hover:bg-[#e100ff30]"
                    : "border-white/20 text-zinc-400 hover:border-[#e100ff] hover:text-[#e100ff]"
                }`}>
                {btn.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="absolute bottom-0 flex items-center justify-center w-full border-t border-white/30 h-20 z-10">
        <code className="text-white text-xs sm:text-sm text-center px-4">
          Copyright &copy; {new Date().getFullYear()} Suvam - All Rights
          Reserved.
        </code>
      </div>
    </div>
  );
};

export default Footer;
