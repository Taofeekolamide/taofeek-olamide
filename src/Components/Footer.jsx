import { HiOutlineArrowUp, HiOutlineArrowUpRight, } from "react-icons/hi2";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
];

const socialLinks = [
    {
        label: "GitHub",
        href: "https://github.com/Taofeekolamide",
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/taofeek-olamide/",
    },
];

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="relative overflow-hidden border-t border-white/10 bg-black">
            {/* Background glow */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-white/[0.025] blur-[120px]" />

            <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
                {/* Main footer CTA */}
                <div className="grid gap-12 border-b border-white/10 pb-16 lg:grid-cols-[1fr_auto] lg:items-end">
                    <div>
                        <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-white/40">
                            Have an idea?
                        </p>

                        <h2 className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                            LET&apos;S BUILD
                            <br />
                            SOMETHING
                            <br />
                            <span className="text-white/30">GREAT.</span>
                        </h2>
                    </div>

                    <a
                        href="mailto:taofeekolamide55@gmail.com"
                        className="group inline-flex w-fit items-center gap-3 border-b border-white/30 pb-3 text-sm font-medium text-white transition hover:border-white"
                    >
                        Start a conversation
                        <HiOutlineArrowUpRight
                            className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                            size={18}
                        />
                    </a>
                </div>

                {/* Footer navigation */}
                <div className="grid gap-12 border-b border-white/10 py-12 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <div className="mb-5 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-sm font-semibold">
                                O
                            </div>

                            <div>
                                <p className="text-sm font-semibold tracking-[0.15em] text-white">
                                    OLAMIDE
                                </p>

                                <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                                    Web Developer
                                </p>
                            </div>
                        </div>

                        <p className="max-w-md text-sm leading-7 text-white/40">
                            I design and build modern web applications with thoughtful
                            interfaces, solid architecture, and real-world functionality.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <p className="mb-5 text-xs uppercase tracking-[0.25em] text-white/30">
                            Navigation
                        </p>

                        <nav className="flex flex-col gap-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="w-fit text-sm text-white/50 transition hover:translate-x-1 hover:text-white"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Socials */}
                    <div>
                        <p className="mb-5 text-xs uppercase tracking-[0.25em] text-white/30">
                            Connect
                        </p>

                        <div className="flex flex-col gap-3">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex w-fit items-center gap-2 text-sm text-white/50 transition hover:text-white"
                                >
                                    {link.label}

                                    <HiOutlineArrowUpRight
                                        size={15}
                                        className="opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100"
                                    />
                                </a>
                            ))}

                            <a
                                href="mailto:your@email.com"
                                className="group flex w-fit items-center gap-2 text-sm text-white/50 transition hover:text-white"
                            >
                                Email

                                <HiOutlineArrowUpRight
                                    size={15}
                                    className="opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col gap-6 pt-8 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                        <p className="text-xs text-white/30">
                            © {new Date().getFullYear()} Olamide. All rights reserved.
                        </p>

                        <span className="hidden text-white/10 sm:block">•</span>

                        <p className="text-xs text-white/30">
                            Designed & built with React.
                        </p>
                    </div>

                    {/* Back to top */}
                    <button
                        onClick={scrollToTop}
                        className="group flex w-fit items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/40 transition hover:text-white"
                    >
                        Back to top

                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition duration-300 group-hover:-translate-y-1 group-hover:border-white/30">
                            <HiOutlineArrowUp
                                size={16}
                                className="transition-transform duration-300 group-hover:-translate-y-0.5"
                            />
                        </span>
                    </button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;