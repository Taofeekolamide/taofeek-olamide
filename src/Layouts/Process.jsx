import { HiOutlineLightBulb, HiOutlineSquare3Stack3D, HiOutlineCodeBracket, HiOutlineRocketLaunch, } from "react-icons/hi2";

const processSteps = [
    {
        number: "01",
        title: "Understand",
        icon: HiOutlineLightBulb,
        description: "I start by understanding the problem, the users, the requirements and what the product actually needs to achieve.",
        label: "Research & Requirements",
    },
    {
        number: "02",
        title: "Architect",
        icon: HiOutlineSquare3Stack3D,
        description: "I break the problem into manageable pieces and think through the application structure, data flow, API design and database.",
        label: "Structure & Architecture",
    },
    {
        number: "03",
        title: "Build",
        icon: HiOutlineCodeBracket,
        description: "I turn the design into a working product, building reusable interfaces, APIs, business logic and reliable data access.",
        label: "Development",
    },
    {
        number: "04",
        title: "Refine",
        icon: HiOutlineRocketLaunch,
        description: "I test, improve and polish the application, from responsiveness and performance to edge cases and user experience.",
        label: "Testing & Optimization",
    },
];

const Process = () => {
    return (
        <section
            id="process"
            className="relative overflow-hidden bg-black px-5 py-28 sm:px-8 lg:px-12 lg:py-40"
        >
            <div className="mx-auto max-w-7xl">

                {/* Section heading */}
                <div className="mb-20 flex items-center justify-between border-b border-white/10 pb-5">
                    <div className="flex items-center gap-4">
                        <span className="text-xs font-medium text-white/30">
                            04
                        </span>

                        <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/50">
                            How I Work
                        </span>
                    </div>

                    <span className="hidden text-xs text-white/20 sm:block">
                        From idea to product
                    </span>
                </div>

                {/* Intro */}
                <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-24">

                    <div>
                        <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/30">
                            My process
                        </p>

                        <h2 className="mt-7 text-4xl font-medium leading-[1.05] tracking-[-0.05em] text-white sm:text-6xl">
                            Good software
                            <span className="text-white/30">
                                {" "}
                                starts before the first line of code.
                            </span>
                        </h2>
                    </div>

                    <div className="flex items-end">
                        <p className="max-w-xl text-base leading-8 text-white/40">
                            I like to understand the problem first, make deliberate
                            technical decisions, then build the product in a way that
                            keeps it easy to change and maintain.
                        </p>
                    </div>

                </div>

                {/* Process timeline */}
                <div className="relative mt-24">

                    {/* Connecting line */}
                    <div className="absolute left-0 right-0 top-8 hidden h-px bg-white/10 lg:block" />

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                        {processSteps.map((step) => {
                            const Icon = step.icon;

                            return (
                                <article
                                    key={step.number}
                                    className="group relative"
                                >

                                    {/* Number / timeline point */}
                                    <div className="relative z-10 flex items-center justify-between lg:block">

                                        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-black transition-all duration-500 group-hover:border-white/40 group-hover:bg-white group-hover:text-black">
                                            <Icon
                                                size={21}
                                                className="transition-transform duration-500 group-hover:scale-110"
                                            />
                                        </div>

                                        <span className="text-xs font-medium text-white/20 lg:absolute lg:right-0 lg:top-5">
                                            {step.number}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="mt-8">

                                        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/25">
                                            {step.label}
                                        </p>

                                        <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">
                                            {step.title}
                                        </h3>

                                        <p className="mt-4 text-sm leading-7 text-white/40">
                                            {step.description}
                                        </p>

                                    </div>

                                </article>
                            );
                        })}

                    </div>
                </div>

                {/* Bottom statement */}
                <div className="mt-24 border-t border-white/10 pt-8">
                    <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

                        <p className="max-w-2xl text-sm leading-7 text-white/30">
                            The goal isn't to make the most complicated system.
                            It's to make the right system for the problem.
                        </p>

                        <span className="text-xs uppercase tracking-[0.25em] text-white/20">
                            Think → Build → Improve
                        </span>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Process;