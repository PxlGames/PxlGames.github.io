import { t as Panel } from "./Panel-d4J3NCKk.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/data/aboutData.ts
var education = [
	{
		when: "Aug 2026 —",
		title: "Bachelor of Engineering (B.Eng.)",
		place: "Satakunta University of Applied Sciences",
		details: "Electrical and Automation Engineering (starting August 2026)."
	},
	{
		when: "May 2026 — May 2026 (1 month)",
		title: "Introduction to the Metal Industry Course",
		place: "Länsirannikon Koulutus Oy WinNova",
		details: "- Introduction to the Mechanical and Metal Industry\n- Introduction to Jobs and Work Tasks in the Industry\n- Materials and Technical Drawings\n- Welding and Sheet Metal Work\n- Machining\n- Machine Installation and Maintenance"
	},
	{
		when: "2021 — 2024",
		title: "General Studies",
		place: "Porin lukio / Pori high school",
		details: "General high school studies, with an additional focus on acting."
	}
];
var work = [
	{
		when: "Dec 2021 — present",
		title: "Game Developer",
		place: "Team Melon",
		details: "I've collaborated with Team Melon for an extended period; \nDuring that span, I've engaged in projects functioning as a programmer, a 3D modeler, 2D artist, lighting and shader coder, a level designer, a composer, and a voice actor. "
	},
	{
		when: "Jul 2025 — Dec 2025 (6 months)",
		title: "Electronics Maintenance Specialist",
		place: "Puolustusvoimat - Försvarsmakten - Finnish Defence Forces",
		details: "Completed military training with a focus on communications infrastructure and electrical systems. \n - Performed maintenance and inspections of power systems, vehicles, and communication equipment. \n - Repaired data cabling and electrical devices while following electrical safety procedures. \n - Obtained SFS 6002 Electrical Safety and EA1 First Aid certifications."
	},
	{
		when: "Jun 2024 — Sep 2024 (4 months)",
		title: "Game Developer",
		place: "Satakunta University of Applied Sciences",
		details: "I crafted a top-down strategy game centered on agriculture and manufacturing. \n I oversaw each front of the development process, including game design to programming and visual design."
	},
	{
		when: "Jun 2023 — Jul 2023 (2 months)",
		title: "Game Developer",
		place: "Satakunta University of Applied Sciences",
		details: "I made a 3D first-person shooter for mobile devices in partnership with another programmer. \n During game creation, I functioned as a programmer, a designer, a 3D artist, and a composer."
	}
];
var skills = {
	craft: [
		{
			label: "Programming",
			color: "text-cyan"
		},
		{
			label: "Pixel art",
			color: "text-magenta"
		},
		{
			label: "3D Modeling",
			color: "text-violet"
		},
		{
			label: "Music composition",
			color: "text-gold"
		},
		{
			label: "Voice acting (EN/FI)",
			color: "text-gold"
		},
		{
			label: "Video editing",
			color: "text-lime"
		},
		{
			label: "Metal working",
			color: "text-red"
		}
	],
	tools: [
		{
			label: "Unity",
			color: "text-cyan"
		},
		{
			label: "C#",
			color: "text-cyan"
		},
		{
			label: "Python",
			color: "text-cyan"
		},
		{
			label: "Aseprite",
			color: "text-magenta"
		},
		{
			label: "Blender",
			color: "text-violet"
		},
		{
			label: "FL Studio",
			color: "text-gold"
		},
		{
			label: "Davinci Resolve",
			color: "text-lime"
		}
	]
};
//#endregion
//#region src/routes/about.tsx?tsr-split=component
function About() {
	return /* @__PURE__ */ jsxs("div", {
		className: "mx-auto max-w-5xl px-4 py-10",
		children: [
			/* @__PURE__ */ jsxs("header", {
				className: "mb-8",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "crt text-xl text-magenta",
						children: "> cat /home/mika/about.txt"
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "mt-2 font-pixel text-2xl glow-magenta md:text-3xl",
						children: "ABOUT.TXT"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-3 max-w-2xl text-muted-foreground",
						children: "The manual page. Background, education and the skill tree."
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "grid gap-6 md:grid-cols-3",
				children: [/* @__PURE__ */ jsxs(Panel, {
					title: "stats.sys",
					accent: "magenta",
					className: "md:col-span-1",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "mx-auto aspect-square w-40 overflow-hidden bg-panel-2",
							children: /* @__PURE__ */ jsx("img", {
								src: "/media/profile.jpg",
								alt: "Mika Henttinen",
								className: "h-full w-full object-cover"
							})
						}),
						"          ",
						/* @__PURE__ */ jsxs("div", {
							className: "mt-4 text-center",
							children: [/* @__PURE__ */ jsx("div", {
								className: "font-pixel text-sm",
								children: "MIKA HENTTINEN"
							}), /* @__PURE__ */ jsx("div", {
								className: "crt text-lg text-muted-foreground",
								children: "pxldev · game dev"
							})]
						}),
						/* @__PURE__ */ jsxs("ul", {
							className: "crt mt-5 space-y-1 text-base",
							children: [
								/* @__PURE__ */ jsxs("li", { children: [
									/* @__PURE__ */ jsx("span", {
										className: "text-muted-foreground",
										children: "LOC"
									}),
									" ",
									/* @__PURE__ */ jsx("span", { children: "Finland" })
								] }),
								/* @__PURE__ */ jsxs("li", { children: [
									/* @__PURE__ */ jsx("span", {
										className: "text-muted-foreground",
										children: "LANG"
									}),
									" ",
									/* @__PURE__ */ jsx("span", { children: "FI · EN" })
								] }),
								/* @__PURE__ */ jsxs("li", { children: [
									/* @__PURE__ */ jsx("span", {
										className: "text-muted-foreground",
										children: "MODE"
									}),
									" ",
									/* @__PURE__ */ jsx("span", {
										className: "text-lime",
										children: "open to projects"
									})
								] })
							]
						})
					]
				}), /* @__PURE__ */ jsxs(Panel, {
					title: "skill_tree.dat",
					accent: "cyan",
					className: "md:col-span-2",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "space-y-5",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
							className: "font-pixel text-[8px] uppercase tracking-wider text-muted-foreground",
							children: "// practices.craft"
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-1.5 flex flex-wrap gap-2",
							children: skills.craft.map((s) => /* @__PURE__ */ jsx("span", {
								className: `border border-border bg-panel-2 px-3 py-2 font-pixel text-[9px] uppercase ${s.color}`,
								children: s.label
							}, s.label))
						})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
							className: "font-pixel text-[8px] uppercase tracking-wider text-muted-foreground",
							children: "// tools.software"
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-1.5 flex flex-wrap gap-2",
							children: skills.tools.map((s) => /* @__PURE__ */ jsx("span", {
								className: `border border-border bg-panel-2 px-3 py-2 font-pixel text-[9px] uppercase ${s.color}`,
								children: s.label
							}, s.label))
						})] })]
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-5 text-sm leading-relaxed text-muted-foreground",
						children: "I'm a solo creator who couldn't really pick a single lane, so I do almost everything. I write code, compose music, draw pixel art, make 3D models, and voice characters, often all in the same project."
					})]
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "mt-8 grid gap-6 md:grid-cols-2",
				children: [/* @__PURE__ */ jsx(Panel, {
					title: "work_history.log",
					accent: "gold",
					children: /* @__PURE__ */ jsx("ul", {
						className: "space-y-5",
						children: work.map((e) => /* @__PURE__ */ jsxs("li", {
							className: "border-l-2 border-gold pl-4",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "font-pixel text-[9px] uppercase text-gold",
									children: e.when
								}),
								/* @__PURE__ */ jsx("div", {
									className: "crt mt-1 text-xl text-foreground",
									children: e.title
								}),
								/* @__PURE__ */ jsx("div", {
									className: "text-sm text-muted-foreground",
									children: e.place
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-2 text-sm text-muted-foreground whitespace-pre-line",
									children: e.details
								})
							]
						}, e.title + e.when))
					})
				}), /* @__PURE__ */ jsx(Panel, {
					title: "education.log",
					accent: "violet",
					children: /* @__PURE__ */ jsx("ul", {
						className: "space-y-5",
						children: education.map((e) => /* @__PURE__ */ jsxs("li", {
							className: "border-l-2 border-violet pl-4",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "font-pixel text-[9px] uppercase text-violet",
									children: e.when
								}),
								/* @__PURE__ */ jsx("div", {
									className: "crt mt-1 text-xl text-foreground",
									children: e.title
								}),
								/* @__PURE__ */ jsx("div", {
									className: "text-sm text-muted-foreground",
									children: e.place
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-2 text-sm text-muted-foreground whitespace-pre-line",
									children: e.details
								})
							]
						}, e.title + e.when))
					})
				})]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "mt-8",
				children: /* @__PURE__ */ jsx(Panel, {
					title: "contact.txt",
					accent: "magenta",
					children: /* @__PURE__ */ jsxs("div", {
						className: "grid gap-4 sm:grid-cols-4",
						children: [/* @__PURE__ */ jsxs("p", {
							target: "_blank",
							rel: "noreferrer",
							className: "border border-border bg-panel-2 p-4 hover:border-cyan hover:text-cyan",
							children: [/* @__PURE__ */ jsx("div", {
								className: "font-pixel text-[10px] uppercase",
								children: "email"
							}), /* @__PURE__ */ jsx("div", {
								className: "crt mt-1 text-base",
								children: "contact.pxldev@gmail.com"
							})]
						}), /* @__PURE__ */ jsxs("p", {
							target: "_blank",
							rel: "noreferrer",
							className: "border border-border bg-panel-2 p-4 hover:border-cyan hover:text-cyan",
							children: [/* @__PURE__ */ jsx("div", {
								className: "font-pixel text-[10px] uppercase",
								children: "Discord"
							}), /* @__PURE__ */ jsx("div", {
								className: "crt mt-1 text-base",
								children: "pxldev"
							})]
						})]
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "mt-8",
				children: /* @__PURE__ */ jsx(Panel, {
					title: "credits.txt",
					accent: "cyan",
					children: /* @__PURE__ */ jsxs("div", {
						className: "space-y-4",
						children: [/* @__PURE__ */ jsxs("p", {
							className: "text-muted-foreground font-bold text-1xl",
							children: [
								"Special thanks to ",
								/* @__PURE__ */ jsx("span", {
									className: "text-cyan text-2xl",
									children: "  Kaparoinen  "
								}),
								" for the pixel art icons used on the homepage."
							]
						}), /* @__PURE__ */ jsx("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: /* @__PURE__ */ jsxs("a", {
								href: "https://instagram.com/Kaparoinen",
								target: "_blank",
								rel: "noreferrer",
								className: "border border-border bg-panel-2 p-4 text-center hover:border-cyan hover:text-cyan transition-colors",
								children: [/* @__PURE__ */ jsx("div", {
									className: "font-pixel text-[10px] uppercase",
									children: "Instagram"
								}), /* @__PURE__ */ jsx("div", {
									className: "crt mt-1 text-base",
									children: "@Kaparoinen"
								})]
							})
						})]
					})
				})
			})
		]
	});
}
//#endregion
export { About as component };
