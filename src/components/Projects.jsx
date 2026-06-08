import ScrollStack, { ScrollStackItem } from "./ScrollStack";

const projects = [
  {
    title: "Billing & Inventory System",
    company: "KT Computech",
    description:
      "Production business application handling billing, inventory, and order management. Processed 700+ customer orders with real-time reporting dashboards.",
    stack: ["React.js", "Node.js", "MongoDB", "Express.js"],
    tag: "Production App",
    tagColor: "bg-green-100 text-green-800",
    link: "https://ktcomputech.in/",
  },
  {
    title: "Ai Interviewer Microservices Architecture",
    company: "Personal Project",
    description:
      "Scalable microservices-based web application with service isolation, REST APIs, and inter-service communication built for high availability.",
    stack: ["Node.js", "REST APIs", "MongoDB", "Socket.IO"],
    tag: "Backend",
    tagColor: "bg-blue-100 text-blue-800",
    link: "https://ai-interviewer-sc-designs.netlify.app",
  },
  {
    title: "Desktop App with Tauri",
    company: "KT Computech",
    description:
      "Cross-platform desktop application built with Tauri and React, combining a lightweight Rust backend with a modern web frontend.",
    stack: ["Tauri", "React.js", "Rust", "Vite"],
    tag: "Desktop",
    tagColor: "bg-orange-100 text-orange-800",
    link: "https://sourceforge.net/projects/kt-admin-panel/files/KT%20Admin%20Panel_0.2.3_x64-setup.exe/download",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="w-full pt-20 sm:pt-20">
      <h1 className="text-center font-secondary italic text-3xl sm:text-4xl mb-4">
        Projects
      </h1>
      <p className="text-center font-primary text-zinc-500 text-sm">
        Things I've built
      </p>

      <ScrollStack
        useWindowScroll={true}
        itemDistance={120}
        itemScale={0.03}
        itemStackDistance={24}
        stackPosition="12%"
        baseScale={0.9}>
        {projects.map((project, i) => (
          <ScrollStackItem
            key={i}
            itemClassName="bg-white border border-zinc-100">
            <div className="h-full py-2 flex flex-col justify-between">
              {/* Top row */}
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <span
                    className={`text-xs font-primary px-3 py-1 rounded-full ${project.tagColor}`}>
                    {project.tag}
                  </span>
                  <h2 className="font-secondary italic text-xl sm:text-2xl md:text-3xl mt-3 sm:mt-4 text-zinc-900 leading-tight">
                    {project.title}
                  </h2>
                  <p className="font-primary text-sm text-zinc-400 mt-1">
                    {project.company}
                  </p>
                </div>
                <span className="font-secondary italic text-4xl sm:text-5xl md:text-6xl text-zinc-800 select-none shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Description */}
              <p className="font-primary text-zinc-600 text-sm sm:text-base leading-6 sm:leading-7 mt-4 sm:mt-6 w-full md:w-3/4 lg:w-1/2">
                {project.description}
              </p>

              <a
                target="_blank"
                rel="noreferrer"
                className="mt-3 sm:mt-2 border rounded-md w-fit px-4 py-2 text-sm font-primary hover:bg-zinc-50 transition-colors"
                href={project.link}>
                Live View
              </a>

              {/* Stack tags */}
              <div className="flex gap-2 flex-wrap mt-4 sm:mt-6">
                {project.stack.map((tech, j) => (
                  <span
                    key={j}
                    className="text-xs font-primary px-3 py-1 border border-zinc-200 rounded-full text-zinc-500">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </div>
  );
};

export default Projects;
