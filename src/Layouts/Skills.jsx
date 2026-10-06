import { useState } from "react";
import { HiOutlineCodeBracket, HiOutlineServerStack, HiOutlineCircleStack, HiOutlineWrenchScrewdriver, HiArrowUpRight, HiOutlineCube } from "react-icons/hi2";

const skillGroups = [
    {
        id: "frontend",
        number: "01",
        title: "Frontend",
        icon: HiOutlineCodeBracket,
        description: "Building responsive, interactive interfaces with a strong focus on usability, structure and visual detail.",
        technologies: ["HTML", "CSS", "Tailwind CSS", "Bootstrap", "JavaScript", "React"],
    },
    {
        id: "backend",
        number: "02",
        title: "Backend",
        icon: HiOutlineServerStack,
        description: "Designing APIs and application logic that are structured, maintainable and ready to grow.",
        technologies: ["C#", "ASP.NET Core", "REST APIs", "Entity Framework Core", "Authentication", "Authorization",],
    },
    {
        id: "database",
        number: "03",
        title: "Database",
        icon: HiOutlineCircleStack,
        description: "Designing relational data structures and working with application data through reliable database access patterns.",
        technologies: ["SQL Server", "Entity Framework Core", "LINQ", "Database Design", "Relationships", "Migrations",],
    },
    {
        id: "tools",
        number: "04",
        title: "Tools",
        icon: HiOutlineWrenchScrewdriver,
        description: "Keeping projects organized with reusable architecture, source control and development workflows.",
        technologies: ["Git", "GitHub", "Cloud Storage", "Payment APIs", "Vercel", "Render",],
    },
    {
        id: "architecture",
        number: "05",
        title: "Architecture",
        icon: HiOutlineCube,
        description: "Designing scalable and maintainable application architectures.",
        technologies: ["Clean Architecture", "Domain-Driven Design", "Microservices", "Event Sourcing",]
    }
];

const Skills = () => {
    const [activeGroup, setActiveGroup] = useState("frontend");

    const activeSkill = skillGroups.find(
        (group) => group.id === activeGroup
    );

    return (
        <section
            id="skills"
            className="relative overflow-hidden bg-black px-5 py-28 sm:px-8 lg:px-12 lg:py-40"
        >
            <div className="mx-auto max-w-7xl">

                {/* Section heading */}
                <div className="mb-20 flex items-center justify-between border-b border-white/10 pb-5">
                    <div className="flex items-center gap-4">
                        <span className="text-xs font-medium text-white/30">
                            03
                        </span>

                        <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/50">
                            Skills & Stack
                        </span>
                    </div>

                    <span className="hidden text-xs text-white/20 sm:block">
                        How I build
                    </span>
                </div>

                {/* Intro */}
                <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-24">

                    <div>
                        <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/30">
                            My toolkit
                        </p>

                        <h2 className="mt-7 text-4xl font-medium leading-[1.05] tracking-[-0.05em] text-white sm:text-6xl">
                            Tools are just tools.
                            <span className="text-white/30">
                                {" "}
                                Knowing how to use them is what matters.
                            </span>
                        </h2>
                    </div>

                    <div className="flex items-end">
                        <p className="max-w-xl text-base leading-8 text-white/40">
                            I work across the frontend, backend and database layers
                            of an application. My goal isn't simply to make something
                            work, it's to build systems that are clear, maintainable
                            and pleasant to use.
                        </p>
                    </div>

                </div>

                {/* Skills interface */}
                <div className="mt-20 grid overflow-hidden rounded-[2rem] border border-white/10 lg:grid-cols-[0.8fr_1.2fr]">

                    {/* Categories */}
                    <div className="border-b border-white/10 lg:border-b-0 lg:border-r">

                        {skillGroups.map((group) => {
                            const Icon = group.icon;
                            const isActive = activeGroup === group.id;

                            return (
                                <button
                                    key={group.id}
                                    onClick={() => setActiveGroup(group.id)}
                                    className={`group flex w-full items-center justify-between border-b border-white/10 px-6 py-7 text-left transition-all duration-300 last:border-b-0 sm:px-8 ${isActive
                                        ? "bg-white text-black"
                                        : "text-white/50 hover:bg-white/[0.04] hover:text-white"
                                        }`}
                                >
                                    <div className="flex items-center gap-5">

                                        <Icon
                                            size={21}
                                            className={`transition-transform duration-300 ${isActive
                                                ? "text-black"
                                                : "text-white/30 group-hover:scale-110 group-hover:text-white"
                                                }`}
                                        />

                                        <div>
                                            <span
                                                className={`block text-[10px] uppercase tracking-[0.2em] ${isActive
                                                    ? "text-black/40"
                                                    : "text-white/20"
                                                    }`}
                                            >
                                                {group.number}
                                            </span>

                                            <span className="mt-1 block text-lg font-semibold">
                                                {group.title}
                                            </span>
                                        </div>
                                    </div>

                                    <HiArrowUpRight
                                        size={18}
                                        className={`transition-all duration-300 ${isActive
                                            ? "rotate-45 text-black"
                                            : "text-white/20 group-hover:-translate-y-1 group-hover:translate-x-1"
                                            }`}
                                    />
                                </button>
                            );
                        })}

                    </div>

                    {/* Active category */}
                    <div className="relative min-h-[430px] overflow-hidden p-7 sm:p-10 lg:p-14">

                        {/* Background grid */}
                        <div
                            className="pointer-events-none absolute inset-0 opacity-[0.035]"
                            style={{
                                backgroundImage:
                                    "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                                backgroundSize: "50px 50px",
                            }}
                        />

                        {/* Ambient circle */}
                        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/[0.035] blur-[90px]" />

                        <div className="relative">

                            <div className="flex items-center justify-between">

                                <span className="text-xs uppercase tracking-[0.25em] text-white/25">
                                    {activeSkill.number} / {skillGroups.length
                                        .toString()
                                        .padStart(2, "0")}
                                </span>

                                <span className="text-xs text-white/20">
                                    {activeSkill.title}
                                </span>

                            </div>

                            <h3 className="mt-12 text-4xl font-bold tracking-[-0.05em] text-white sm:text-6xl">
                                {activeSkill.title}
                            </h3>

                            <p className="mt-5 max-w-lg text-sm leading-7 text-white/40">
                                {activeSkill.description}
                            </p>

                            {/* Technologies */}
                            <div className="mt-12 grid grid-cols-2 gap-2 sm:grid-cols-3">

                                {activeSkill.technologies.map((technology) => (
                                    <div
                                        key={technology}
                                        className="group/item flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-4 py-4 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06]"
                                    >
                                        <span className="text-xs font-medium text-white/50 transition-colors duration-300 group-hover/item:text-white">
                                            {technology}
                                        </span>

                                        <HiArrowUpRight
                                            size={13}
                                            className="text-white/15 transition-all duration-300 group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5 group-hover/item:text-white/50"
                                        />
                                    </div>
                                ))}

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Skills;