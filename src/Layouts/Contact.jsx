import { HiArrowUpRight, HiOutlineEnvelope } from "react-icons/hi2";

const Contact = () => {
    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-black px-5 pb-28 pt-32 sm:px-8 lg:px-12 lg:pb-40 lg:pt-44"
        >
            {/* Large ambient glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.035] blur-[140px]" />

            {/* Grid */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.025]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                    backgroundSize: "70px 70px",
                }}
            />

            <div className="relative mx-auto max-w-7xl">

                {/* Section heading */}
                <div className="mb-20 flex items-center justify-between border-b border-white/10 pb-5">
                    <div className="flex items-center gap-4">
                        <span className="text-xs font-medium text-white/30">
                            05
                        </span>

                        <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/50">
                            Contact
                        </span>
                    </div>

                    <span className="hidden text-xs text-white/20 sm:block">
                        Let's make something happen
                    </span>
                </div>

                {/* Main CTA */}
                <div className="max-w-6xl">

                    <p className="mb-8 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-white/30">
                        <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
                        Open to opportunities
                    </p>

                    <h2 className="text-[clamp(3.5rem,9vw,9rem)] font-black leading-[0.82] tracking-[-0.07em] text-white">
                        LET'S
                        <br />

                        <span className="text-white/30">
                            BUILD
                        </span>

                        <br />

                        SOMETHING<span className="text-white/30">.</span>
                    </h2>

                </div>

                {/* Bottom area */}
                <div className="mt-16 grid gap-12 border-t border-white/10 pt-10 lg:grid-cols-[1fr_auto] lg:items-end">

                    <div>
                        <p className="max-w-lg text-base leading-8 text-white/40 sm:text-lg">
                            Have a project, an idea, or an opportunity you'd like
                            to discuss? I'm always interested in hearing about
                            interesting things being built.
                        </p>

                        {/* Email */}
                        <a
                            href="mailto:taofeekolamide55@gmail.com"
                            className="group mt-8 inline-flex items-center gap-4 text-lg font-medium text-white sm:text-2xl"
                        >
                            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black">
                                <HiOutlineEnvelope size={19} />
                            </span>

                            <span className="border-b border-white/20 pb-1 transition-colors duration-300 group-hover:border-white">
                                taofeekolamide55@gmail.com
                            </span>
                        </a>
                    </div>

                    {/* CTA */}
                    <a
                        href="mailto:taofeekolamide55@gmail.com"
                        className="group flex w-full items-center justify-between gap-8 rounded-2xl bg-white px-6 py-5 text-black transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/10 sm:w-auto sm:min-w-[280px]"
                    >
                        <span className="text-sm font-bold">
                            Start a conversation
                        </span>

                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-transform duration-500 group-hover:rotate-45">
                            <HiArrowUpRight size={17} />
                        </span>
                    </a>

                </div>

            </div>
        </section>
    );
};

export default Contact;