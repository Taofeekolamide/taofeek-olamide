import { HiArrowUpRight } from "react-icons/hi2";

const technologies = ["HTML5", "CSS3", "TailwindCSS", "JavaScript", "React", "C#", "ASP.NET Core", "PostgreSQL", "REST APIs", "Git", "Wordpress"];

const About = () => {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-black px-5 py-28 sm:px-8 lg:px-12 lg:py-40"
        >
            <div className="mx-auto max-w-7xl">

                {/* Section heading */}
                <div className="mb-20 flex items-center justify-between border-b border-white/10 pb-5">
                    <div className="flex items-center gap-4">
                        <span className="text-xs font-medium text-white/30">
                            01
                        </span>

                        <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/50">
                            About Me
                        </span>
                    </div>

                    <span className="hidden text-xs text-white/20 sm:block">
                        A little bit about how I work
                    </span>
                </div>

                {/* Main content */}
                <div className="grid gap-16 lg:grid-cols-[0.8fr_1.5fr] lg:gap-24">

                    {/* Left */}
                    <div>
                        <p className="text-sm uppercase tracking-[0.25em] text-white/30">
                            Who I am
                        </p>

                        <div className="mt-8">
                            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/10">
                                <span className="text-2xl font-black tracking-tighter">
                                    OT
                                </span>
                            </div>
                        </div>

                        <p className="mt-8 max-w-xs text-sm leading-relaxed text-white/40">
                            Developer focused on building useful, scalable and
                            visually engaging digital products.
                        </p>
                    </div>

                    {/* Right */}
                    <div>
                        <h2 className="max-w-5xl text-3xl font-medium leading-[1.15] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                            I don't just write code.
                            <span className="text-white/30">
                                {" "}
                                I build products that are designed to be used,
                                understood and remembered.
                            </span>
                        </h2>

                        <div className="mt-12 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-2">

                            <div>
                                <p className="text-sm leading-7 text-white/45">
                                    My approach sits somewhere between design and
                                    engineering. I care about how an application
                                    looks, but I care just as much about what happens
                                    underneath it.
                                </p>
                            </div>

                            <div>
                                <p className="text-sm leading-7 text-white/45">
                                    From responsive React interfaces to structured
                                    APIs, authentication, databases and business
                                    logic, I enjoy working across the full stack.
                                </p>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-12">
                            <a
                                href="#projects"
                                className="group inline-flex items-center gap-3 text-sm font-semibold text-white"
                            >
                                See what I've built

                                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-white/40 group-hover:bg-white group-hover:text-black">
                                    <HiArrowUpRight
                                        size={15}
                                        className="transition-transform duration-300 group-hover:rotate-45"
                                    />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Technology strip */}
                <div className="mt-28 overflow-hidden border-y border-white/10 py-7">
                    <div className="flex min-w-max items-center justify-between">
                        {technologies.map((technology, index) => (
                            <div
                                key={technology}
                                className="flex items-center gap-8"
                            >
                                <span className="text-sm font-medium text-white/30 transition-colors duration-300 hover:text-white">
                                    {technology}
                                </span>

                                {index !== technologies.length - 1 && (
                                    <span className="h-1 w-1 rounded-full bg-white/20" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;