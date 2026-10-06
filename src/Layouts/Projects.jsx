import { HiArrowUpRight, HiOutlineArrowTopRightOnSquare, HiOutlineCheckCircle, HiOutlineCodeBracket, HiOutlineXMark } from "react-icons/hi2";

import centroMartImage from "../assets/project/centromart.png";
import { useState } from "react";

const projects = [
    {
        title: "Centro Mart",
        category: "E-Commerce Platform",
        year: "2026",

        image: centroMartImage,

        description: "A full-stack e-commerce platform built to handle product discovery, authentication, shopping carts, orders, and administration.",

        overview: "Centro Mart was designed as a complete commerce experience rather than just a storefront. The system connects a React frontend with an ASP.NET Core Web API and SQL Server backend.",

        role: "Full-Stack Developer",

        technologies: ["React", "JavaScript", "Tailwind CSS", "C#", "ASP.NET Core", "Entity Framework Core", "SQL Server", "JWT",],

        features: ["User authentication", "Role-based authorization", "Product management", "Shopping cart", "Order management", "Password recovery", "Admin dashboard", "Responsive interface",],

        architecture: "The backend uses a layered architecture with controllers, services, repositories, and data access separated into clear responsibilities. Entity Framework Core handles persistence while JWT secures protected API resources.",

    },
];


const Projects = () => {

    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section
            id="projects"
            className="relative overflow-hidden bg-black px-5 py-28 sm:px-8 lg:px-12 lg:py-40"
        >
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <div className="mb-20 flex items-end justify-between border-b border-white/10 pb-5">
                    <div className="flex items-center gap-4">
                        <span className="text-xs font-medium text-white/30">
                            02
                        </span>

                        <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/50">
                            Selected Work
                        </span>
                    </div>

                    <span className="hidden text-xs text-white/20 sm:block">
                        Things I've built
                    </span>
                </div>

                {/* Intro */}
                <div className="mb-20 max-w-3xl">
                    <h2 className="text-4xl font-medium leading-tight tracking-[-0.04em] text-white sm:text-6xl">
                        A few things I've
                        <span className="text-white/30"> designed & built.</span>
                    </h2>
                </div>

                {/* Projects */}
                <div className="space-y-8 grid gap-8 lg:grid-cols-2 lg:gap-12 lg:space-y-0">

                    {projects.map((project, index) => (
                        <article
                            key={project.title}
                            className={`group relative overflow-hidden rounded-[2rem] border border-white/10 ${project.size === "large"
                                ? "min-h-[50px]"
                                : "min-h-[40px]"
                                }`}
                        >
                            {/* Background */}
                            <div className="absolute inset-0 bg-white/[0.025] transition-all duration-700 group-hover:bg-white/[0.05]" />

                            {/* Grid */}
                            <div
                                className="absolute inset-0 opacity-[0.035]"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                                    backgroundSize: "60px 60px",
                                }}
                            />

                            {/* Glow */}
                            <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/[0.04] blur-[100px] transition-all duration-700 group-hover:bg-white/[0.08]" />

                            {/* Project number */}
                            <div className="absolute right-8 top-8 sm:right-12 sm:top-12">
                                <span className="text-xs font-medium text-white/30">
                                    {project.number}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="relative flex h-full min-h-[inherit] flex-col justify-between p-7 sm:p-10 lg:p-14">

                                <div>
                                    <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-white/30">
                                        {project.category}
                                    </p>

                                    <h3 className="max-w-3xl text-4xl font-bold tracking-[-0.05em] text-white transition-transform duration-500 group-hover:translate-x-2 sm:text-6xl lg:text-7xl">
                                        {project.title}
                                    </h3>

                                    <p className="mt-6 max-w-xl text-sm leading-7 text-white/40 sm:text-base">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="mt-16 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((technology) => (
                                            <span
                                                key={technology}
                                                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] text-white/40 transition-colors duration-300 group-hover:border-white/20 group-hover:text-white/60"
                                            >
                                                {technology}
                                            </span>
                                        ))}
                                    </div>

                                    {/* View project */}
                                    <button onClick={() => setSelectedProject(project)}
                                        className="group/link flex shrink-0 items-center gap-3 text-sm font-semibold text-white"
                                    >
                                        View project

                                        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover/link:border-white group-hover/link:bg-white group-hover/link:text-black">
                                            <HiArrowUpRight
                                                size={17}
                                                className="transition-transform duration-300 group-hover/link:rotate-45"
                                            />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}

                </div>

                {/* Bottom CTA */}
                {/* <div className="mt-16 flex justify-center">
                    <Link
                        to="/projects"
                        className="group flex items-center gap-3 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-white/60 transition-all duration-300 hover:border-white/30 hover:text-white"
                    >
                        View all projects

                        <HiArrowUpRight
                            size={15}
                            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                    </Link>
                </div> */}

            </div>



            {selectedProject && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md sm:p-6"
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                        className="relative max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-2xl border border-white/10 bg-[#090909] shadow-[0_0_80px_rgba(255,255,255,0.06)]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* == CLOSE BUTTON == */}
                        <button
                            onClick={() => setSelectedProject(null)}
                            aria-label="Close project"
                            className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/70 text-gray-400 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white hover:text-black sm:right-6 sm:top-6"
                        >
                            <HiOutlineXMark className="h-5 w-5" />
                        </button>

                        {/* == HERO / PROJECT HEADER == */}
                        <div className="p-5 sm:p-8 md:p-10">

                            {/* Category + Year */}
                            <div className="mb-5 flex items-center gap-3">
                                <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-gray-500 sm:text-xs">
                                    {selectedProject.category}
                                </span>

                                <span className="h-1 w-1 rounded-full bg-gray-700" />

                                <span className="text-xs text-gray-600">
                                    {selectedProject.year}
                                </span>
                            </div>

                            {/* Title */}
                            <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
                                {selectedProject.title}
                            </h2>

                            {/* Description */}
                            <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-400 sm:text-base md:text-lg">
                                {selectedProject.description}
                            </p>

                            {/* == PROJECT IMAGE == */}
                            <div className="group relative mt-8 overflow-hidden rounded-2xl border border-white/10 bg-[#111]">
                                {/* Image overlay */}
                                <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="aspect-[16/9] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                                />
                            </div>

                            {/* == TECHNOLOGIES == */}
                            <div className="mt-6 flex flex-wrap gap-2">
                                {selectedProject.technologies?.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] text-gray-400 transition-colors hover:border-white/20 hover:text-white"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* CONTENT */}
                        <div className="border-t border-white/10 p-5 sm:p-8 md:p-10">
                            <div className="grid gap-12 lg:grid-cols-[1fr_300px]">

                                {/* MAIN CONTENT */}
                                <div>

                                    {/* Overview */}
                                    <section>
                                        <div className="mb-4 flex items-center gap-3">
                                            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-gray-600">
                                                01
                                            </span>

                                            <span className="text-xs font-medium uppercase tracking-[0.25em] text-gray-400">
                                                Overview
                                            </span>
                                        </div>

                                        <p className="max-w-3xl text-sm leading-7 text-gray-400 sm:text-base">
                                            {selectedProject.overview}
                                        </p>
                                    </section>

                                    {/* Features */}
                                    {selectedProject.features?.length > 0 && (
                                        <section className="mt-12">
                                            <div className="mb-5 flex items-center gap-3">
                                                <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-gray-600">
                                                    02
                                                </span>

                                                <span className="text-xs font-medium uppercase tracking-[0.25em] text-gray-400">
                                                    Key Features
                                                </span>
                                            </div>

                                            <div className="grid gap-3 sm:grid-cols-2">
                                                {selectedProject.features.map((feature) => (
                                                    <div
                                                        key={feature}
                                                        className="group flex gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]"
                                                    >
                                                        <HiOutlineCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-gray-500 transition-colors group-hover:text-white" />

                                                        <span className="text-sm leading-6 text-gray-400 group-hover:text-gray-300">
                                                            {feature}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </section>
                                    )}

                                    {/* Architecture */}
                                    {selectedProject.architecture && (
                                        <section className="mt-12">
                                            <div className="mb-4 flex items-center gap-3">
                                                <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-gray-600">
                                                    03
                                                </span>

                                                <span className="text-xs font-medium uppercase tracking-[0.25em] text-gray-400">
                                                    Architecture
                                                </span>
                                            </div>

                                            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
                                                <p className="text-sm leading-7 text-gray-400">
                                                    {selectedProject.architecture}
                                                </p>
                                            </div>
                                        </section>
                                    )}
                                </div>

                                {/* == SIDEBAR == */}
                                <aside className="lg:border-l lg:border-white/10 lg:pl-8">

                                    {/* Role */}
                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-600">
                                            Role
                                        </p>

                                        <p className="mt-2 text-sm text-gray-300">
                                            {selectedProject.role || "Full-Stack Developer"}
                                        </p>
                                    </div>

                                    {/* Stack */}
                                    <div className="mt-8">
                                        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-600">
                                            Technology
                                        </p>

                                        <div className="mt-4 space-y-2">
                                            {selectedProject.technologies?.map((tech) => (
                                                <div
                                                    key={tech}
                                                    className="text-sm text-gray-400"
                                                >
                                                    {tech}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="mt-10 space-y-3">

                                        {selectedProject.liveUrl && (
                                            <a
                                                href={selectedProject.liveUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-gray-200"
                                            >
                                                View Live Project

                                                <HiOutlineArrowTopRightOnSquare className="h-4 w-4" />
                                            </a>
                                        )}

                                        {selectedProject.githubUrl && (
                                            <a
                                                href={selectedProject.githubUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex w-full items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-white/30 hover:bg-white/[0.05]"
                                            >
                                                View Source

                                                <HiOutlineCodeBracket className="h-4 w-4" />
                                            </a>
                                        )}

                                    </div>
                                </aside>
                            </div>
                        </div>

                        {/* == FOOTER == */}
                        <div className="border-t border-white/10 px-5 py-5 sm:px-8 md:px-10">
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="text-xs uppercase tracking-[0.2em] text-gray-600 transition-colors hover:text-white"
                            >
                                Close Project
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>


    );
};

export default Projects;