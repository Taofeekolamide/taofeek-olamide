import { Link } from "react-router-dom";
import { HiArrowUpRight, HiOutlineArrowDown } from "react-icons/hi2";

const Hero = () => {
    return (
        <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-black px-5 pt-32 sm:px-8 lg:px-12">

            {/* Ambient background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/[0.035] blur-[120px]" />

                <div className="absolute -right-40 top-1/3 h-[350px] w-[350px] rounded-full bg-white/[0.025] blur-[100px]" />

                <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-white/[0.02] blur-[100px]" />
            </div>

            {/* Grid */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                    backgroundSize: "70px 70px",
                }}
            />

            <div className="relative mx-auto w-full max-w-7xl">

                {/* Top label */}
                <div className="mb-8 flex items-center gap-3">
                    <span className="h-px w-8 bg-white/40" />

                    <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/40">
                        Full-Stack Web Developer
                    </span>
                </div>

                {/* Main heading */}
                <div className="max-w-6xl">
                    <h1 className="text-[clamp(3.5rem,9vw,9rem)] font-black leading-[0.82] tracking-[-0.07em] text-white">
                        I BUILD
                        <br />

                        <span className="text-white/30">
                            DIGITAL
                        </span>

                        <br />

                        EXPERIENCES<span className="text-white/30">.</span>
                    </h1>
                </div>

                {/* Bottom content */}
                <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">

                    {/* Description */}
                    <div className="max-w-xl">
                        <p className="text-lg leading-relaxed text-white/50 sm:text-xl">
                            I design and develop modern web applications that
                            combine thoughtful interfaces, solid architecture,
                            and real-world functionality.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-4">

                            {/* Primary CTA */}
                            <a
                                href="#projects"
                                className="group flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-black transition-all duration-300 hover:scale-105"
                            >
                                Explore my work

                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:rotate-45">
                                    <HiArrowUpRight size={15} />
                                </span>
                            </a>

                            {/* Secondary CTA */}
                            <a
                                href="#contact"
                                className="rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white/70 transition-all duration-300 hover:border-white/40 hover:bg-white/5 hover:text-white"
                            >
                                Let's work together
                            </a>
                        </div>
                    </div>

                    {/* Side information */}
                    <div className="flex items-end gap-10 lg:pb-1">

                        <div>
                            <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
                                Based in
                            </p>

                            <p className="mt-2 text-sm font-medium text-white/70">
                                Nigeria
                            </p>
                        </div>

                        <div>
                            <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
                                Focus
                            </p>

                            <p className="mt-2 text-sm font-medium text-white/70">
                                Web Development
                            </p>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 right-0 hidden items-center gap-3 xl:flex">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                        Scroll to explore
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10">
                        <HiOutlineArrowDown
                            size={15}
                            className="animate-bounce text-white/50"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;