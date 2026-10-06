import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX, } from "react-icons/hi";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const closeMenu = () => setIsOpen(false);

    /* Detect active  */

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems
                .map((item) => document.querySelector(item.href))
                .filter(Boolean);

            let currentSection = "home";

            const headerOffset = 150;

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();

                if (rect.top <= headerOffset) {
                    currentSection = section.id;
                }
            });

            setActiveSection(currentSection);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    /*
    |--------------------------------------------------------------------------
    | Navigation
    |--------------------------------------------------------------------------
    */

    const handleNavigation = (href) => {
        setIsOpen(false);

        const section = document.querySelector(href);

        if (!section) return;

        section.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">

                <nav className="relative flex items-center justify-between rounded-2xl border border-white/10 bg-black/70 px-5 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl">

                    {/* =====================================================
                        LOGO
                    ====================================================== */}

                    <button
                        type="button"
                        onClick={() => handleNavigation("#home")}
                        className="group flex items-center gap-3"
                    >
                        {/* Logo Mark */}
                        <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-white text-black transition-transform duration-300 group-hover:rotate-6">

                            <span className="relative z-10 text-lg font-black tracking-tighter">
                                O
                            </span>

                            <div className="absolute inset-0 translate-y-full bg-gray-300 transition-transform duration-300 group-hover:translate-y-0" />

                            <span className="absolute z-10 text-lg font-black tracking-tighter opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                O
                            </span>
                        </div>

                        {/* Brand */}
                        <div className="hidden text-left sm:block">
                            <p className="text-sm font-bold tracking-tight text-white">
                                OLAMIDE
                            </p>

                            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/40">
                                Web Developer
                            </p>
                        </div>
                    </button>


                    {/* =====================================================
                        DESKTOP NAVIGATION
                    ====================================================== */}

                    <nav className="hidden items-center gap-1 md:flex">
                        {navItems.map((item) => {
                            const sectionId = item.href.replace("#", "");
                            const isActive =
                                activeSection === sectionId;

                            return (
                                <button
                                    key={item.name}
                                    type="button"
                                    onClick={() =>
                                        handleNavigation(item.href)
                                    }
                                    className={`group relative rounded-xl px-4 py-2 text-sm transition-all duration-300 ${isActive
                                        ? "text-white"
                                        : "text-white/50 hover:text-white"
                                        }`}
                                >
                                    {item.name}

                                    {/* Active indicator */}
                                    <span
                                        className={`absolute bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-white transition-all duration-300 ${isActive
                                            ? "scale-100 opacity-100"
                                            : "scale-0 opacity-0"
                                            }`}
                                    />
                                </button>
                            );
                        })}
                    </nav>


                    {/* =====================================================
                        RIGHT SIDE
                    ====================================================== */}

                    <div className="flex items-center gap-3">

                        {/* Availability */}
                        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 lg:flex">

                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

                                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                            </span>

                            <span className="text-xs font-medium text-white/70">
                                Available for work
                            </span>
                        </div>


                        {/* Let's Talk */}
                        <button
                            type="button"
                            onClick={() =>
                                handleNavigation("#contact")
                            }
                            className="group relative hidden overflow-hidden rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/10 sm:block"
                        >
                            <span className="relative z-10">
                                Let's Talk
                            </span>

                            <span className="absolute inset-0 -translate-x-full bg-gray-200 transition-transform duration-300 group-hover:translate-x-0" />
                        </button>


                        {/* Mobile menu button */}
                        <button
                            type="button"
                            onClick={() =>
                                setIsOpen((prev) => !prev)
                            }
                            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:bg-white/10 md:hidden"
                            aria-label={
                                isOpen
                                    ? "Close menu"
                                    : "Open menu"
                            }
                            aria-expanded={isOpen}
                        >
                            {isOpen ? (
                                <HiOutlineX size={21} />
                            ) : (
                                <HiOutlineMenuAlt3 size={21} />
                            )}
                        </button>
                    </div>


                    {/* =====================================================
                        MOBILE NAVIGATION
                    ====================================================== */}

                    <div
                        className={`absolute left-0 right-0 top-[calc(100%+10px)] overflow-hidden rounded-2xl border border-white/10 bg-black/95 shadow-2xl shadow-black/30 backdrop-blur-xl transition-all duration-300 md:hidden ${isOpen
                            ? "visible translate-y-0 opacity-100"
                            : "invisible -translate-y-3 opacity-0"
                            }`}
                    >
                        <div className="p-3">

                            {navItems.map((item, index) => {
                                const sectionId =
                                    item.href.replace("#", "");

                                const isActive =
                                    activeSection === sectionId;

                                return (
                                    <button
                                        key={item.name}
                                        type="button"
                                        onClick={() =>
                                            handleNavigation(
                                                item.href
                                            )
                                        }
                                        className={`flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left text-sm font-medium transition-all duration-300 ${isActive
                                            ? "bg-white text-black"
                                            : "text-white/60 hover:bg-white/5 hover:text-white"
                                            }`}
                                    >
                                        <span>
                                            {item.name}
                                        </span>

                                        <span
                                            className={`text-xs ${isActive
                                                ? "text-black/40"
                                                : "text-white/20"
                                                }`}
                                        >
                                            0{index + 1}
                                        </span>
                                    </button>
                                );
                            })}


                            {/* Mobile Let's Talk */}
                            <button
                                type="button"
                                onClick={() =>
                                    handleNavigation("#contact")
                                }
                                className="mt-2 flex w-full items-center justify-center rounded-xl bg-white px-4 py-3.5 text-sm font-bold text-black transition hover:bg-gray-200"
                            >
                                Let's Talk
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;