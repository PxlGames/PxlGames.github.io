import { t as LikesProvider } from "./LikesProvider-DKQ1EBpP.js";
import { useEffect } from "react";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, useLocation, useRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//#region src/styles.css?url
var styles_default = "/assets/styles-DVehfjst.css";
//#endregion
//#region src/components/site/Nav.tsx
var links = [
	{
		to: "/",
		label: "HOME",
		active: "text-magenta",
		hover: "hover:text-magenta"
	},
	{
		to: "/games",
		label: "GAMES",
		active: "text-cyan",
		hover: "hover:text-cyan"
	},
	{
		to: "/music",
		label: "MUSIC",
		active: "text-gold",
		hover: "hover:text-gold"
	},
	{
		to: "/voice",
		label: "VOICE",
		active: "text-lime",
		hover: "hover:text-lime"
	},
	{
		to: "/news",
		label: "NEWS",
		active: "text-violet",
		hover: "hover:text-violet"
	},
	{
		to: "/about",
		label: "ABOUT",
		active: "text-foreground",
		hover: "hover:text-foreground"
	}
];
function Nav() {
	return /* @__PURE__ */ jsxs("aside", {
		className: "fixed left-0 top-0 z-40 flex h-full w-22.5 flex-col border-r border-border/70 panel-inset backdrop-blur-sm",
		children: [/* @__PURE__ */ jsx("div", {
			style: {
				display: "flex",
				justifyContent: "center"
			},
			children: /* @__PURE__ */ jsx("img", {
				className: "mt-3",
				src: "/media/kitty.png",
				style: {
					width: "50px",
					height: "auto",
					filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.4))",
					imageRendering: "pixelated"
				},
				alt: "Kitty"
			})
		}), /* @__PURE__ */ jsx("nav", {
			className: "flex flex-1 flex-col gap-1 px-2 py-4",
			children: links.map((l) => /* @__PURE__ */ jsx(Link, {
				to: l.to,
				className: "flex w-full items-center justify-start",
				activeOptions: { exact: l.to === "/" },
				children: ({ isActive }) => /* @__PURE__ */ jsxs("div", {
					className: `flex items-center gap-1.25 rounded px-3 py-2.5 font-pixel text-[10px] uppercase tracking-wider whitespace-nowrap transition-colors ${isActive ? `${l.active} bg-panel border-l-4 pl-1.5 pr-3` : `text-muted-foreground ${l.hover}`}`,
					style: isActive ? { borderLeftColor: `var(--color-${l.active.replace("text-", "")})` } : {},
					children: [isActive && /* @__PURE__ */ jsx("img", {
						src: "/media/cursor.png",
						alt: "",
						className: "h-4 w-4 flex-shrink-0 pixelated",
						loading: "lazy"
					}), /* @__PURE__ */ jsx("span", { children: l.label })]
				})
			}, l.to))
		})]
	});
}
//#endregion
//#region src/components/site/Footer.tsx
function Footer() {
	return /* @__PURE__ */ jsx("footer", {
		className: "mt-24 border-t border-border/70 bg-panel/40",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-center crt text-base text-muted-foreground md:flex-row md:justify-between md:text-left",
			children: [/* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx("span", {
					className: "text-magenta",
					children: "◆"
				}),
				" © ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" pxldev.exe"
			] }), /* @__PURE__ */ jsxs("div", { children: ["one of the developers of all time · ", /* @__PURE__ */ jsx("span", {
				className: "blink text-cyan",
				children: "_"
			})] })]
		})
	});
}
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex min-h-[70vh] flex-col items-center justify-center px-4 text-center",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "font-pixel text-6xl glow-magenta",
				children: "404"
			}),
			/* @__PURE__ */ jsx("div", {
				className: "crt mt-4 text-2xl text-cyan",
				children: "FILE NOT FOUND"
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-3 max-w-md text-muted-foreground",
				children: "The sector you tried to load is corrupted or has been ejected from the cartridge."
			}),
			/* @__PURE__ */ jsx(Link, {
				to: "/",
				className: "mt-6 inline-block bg-magenta px-5 py-3 font-pixel text-[10px] uppercase text-primary-foreground shadow-[4px_4px_0_0_var(--color-cyan)] transition-transform hover:-translate-y-0.5",
				children: "▸ Return to menu"
			})
		]
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex min-h-[70vh] flex-col items-center justify-center px-4 text-center",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "font-pixel text-4xl glow-magenta",
				children: "SYSTEM ERROR"
			}),
			/* @__PURE__ */ jsxs("p", {
				className: "mt-3 max-w-md text-muted-foreground",
				children: [
					"A wild bug appeared. It used ",
					/* @__PURE__ */ jsx("span", {
						className: "text-magenta",
						children: "CRASH"
					}),
					". It's super effective."
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-6 flex flex-wrap justify-center gap-2",
				children: [/* @__PURE__ */ jsx("button", {
					onClick: () => {
						router.invalidate();
						reset();
					},
					className: "bg-cyan px-5 py-3 font-pixel text-[10px] uppercase text-primary-foreground shadow-[4px_4px_0_0_var(--color-magenta)]",
					children: "▸ Retry"
				}), /* @__PURE__ */ jsx("a", {
					href: "/",
					className: "border border-border bg-panel px-5 py-3 font-pixel text-[10px] uppercase text-foreground",
					children: "▸ Home"
				})]
			})
		]
	});
}
var Route$8 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "PXLDEV.EXE" },
			{
				name: "description",
				content: "Portfolio of Mika Henttinen (pxldev) - indie game developer, programmer, musician and voice actor."
			},
			{
				name: "author",
				content: "Mika Henttinen"
			},
			{
				property: "og:title",
				content: "PXLDEV.EXE"
			},
			{
				property: "og:description",
				content: "Games, music and voice acting from Mika Henttinen (pxldev)."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: ""
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&family=Inter:wght@400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		className: "dark",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$8.useRouteContext();
	const bgClass = {
		"/": "bg-home",
		"/about": "bg-about",
		"/games": "bg-games",
		"/music": "bg-music",
		"/voice": "bg-voice",
		"/news": "bg-news"
	}[useLocation().pathname] || "bg-default";
	useEffect(() => {
		const html = document.documentElement;
		html.className = html.className.split(" ").filter((c) => !c.startsWith("bg-")).join(" ");
		html.classList.add(bgClass);
	}, [bgClass]);
	return /* @__PURE__ */ jsx(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ jsx(LikesProvider, { children: /* @__PURE__ */ jsxs("div", {
			className: "flex min-h-screen",
			children: [/* @__PURE__ */ jsx(Nav, {}), /* @__PURE__ */ jsxs("main", {
				className: "ml-22.5 flex-1 p-0 md:p-0",
				children: [/* @__PURE__ */ jsx(Outlet, {}), /* @__PURE__ */ jsx(Footer, {})]
			})]
		}) })
	});
}
//#endregion
//#region src/routes/voice.tsx
var $$splitComponentImporter$6 = () => import("./voice-BQhAJEyo.js");
var Route$7 = createFileRoute("/voice")({
	head: () => ({ meta: [
		{ title: "Voice Acting - PXLDEV.EXE" },
		{
			name: "description",
			content: "Voice reels, character clips and YouTube performances by Mika Henttinen."
		},
		{
			property: "og:title",
			content: "Voice Acting - PXLDEV.EXE"
		},
		{
			property: "og:description",
			content: "Reels, character clips, YouTube performances."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
//#endregion
//#region src/routes/sitemap[.]xml.ts
var BASE_URL = "";
var Route$6 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...[
			{
				path: "/",
				changefreq: "weekly",
				priority: "1.0"
			},
			{
				path: "/games",
				changefreq: "weekly",
				priority: "0.9"
			},
			{
				path: "/music",
				changefreq: "weekly",
				priority: "0.9"
			},
			{
				path: "/voice",
				changefreq: "weekly",
				priority: "0.9"
			},
			{
				path: "/news",
				changefreq: "weekly",
				priority: "0.8"
			},
			{
				path: "/about",
				changefreq: "monthly",
				priority: "0.7"
			},
			{
				path: "/admin",
				changefreq: "monthly",
				priority: "0.6"
			}
		].map((e) => [
			`  <url>`,
			`    <loc>${BASE_URL}${e.path}</loc>`,
			e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
			e.priority ? `    <priority>${e.priority}</priority>` : null,
			`  </url>`
		].filter(Boolean).join("\n")),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
//#endregion
//#region src/routes/news.tsx
var $$splitComponentImporter$5 = () => import("./news-nfXlCqHm.js");
var Route$5 = createFileRoute("/news")({
	head: () => ({ meta: [
		{ title: "News - PXLDEV.EXE" },
		{
			name: "description",
			content: "Announcements, devlog snippets and updates from pxldev."
		},
		{
			property: "og:title",
			content: "News - PXLDEV.EXE"
		},
		{
			property: "og:description",
			content: "Announcements and devlog updates."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
//#endregion
//#region src/routes/music.tsx
var $$splitComponentImporter$4 = () => import("./music-D_qqviAz.js");
var Route$4 = createFileRoute("/music")({
	head: () => ({ meta: [
		{ title: "Music - PXLDEV.EXE" },
		{
			name: "description",
			content: "Music by Mika Henttinen. In-browser player, Spotify and YouTube links."
		},
		{
			property: "og:title",
			content: "Music - PXLDEV.EXE"
		},
		{
			property: "og:description",
			content: "Selected tracks, plus Spotify and YouTube."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
//#endregion
//#region src/routes/games.tsx
var $$splitComponentImporter$3 = () => import("./games-Cc-4hsak.js");
var Route$3 = createFileRoute("/games")({
	head: () => ({ meta: [
		{ title: "Games - PXLDEV.EXE" },
		{
			name: "description",
			content: "Games and side projects by Mika Henttinen. Screenshots, descriptions, itch.io."
		},
		{
			property: "og:title",
			content: "Games - PXLDEV.EXE"
		},
		{
			property: "og:description",
			content: "Screenshots, prototypes and released games."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/admin.tsx
var $$splitComponentImporter$2 = () => import("./admin-CZa6XFLV.js");
var Route$2 = createFileRoute("/admin")({
	ssr: false,
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/about.tsx
var $$splitComponentImporter$1 = () => import("./about-C8O01M4L.js");
var Route$1 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About - Mika Henttinen" },
		{
			name: "description",
			content: "Education, work experience and background of Mika Henttinen (pxldev)."
		},
		{
			property: "og:title",
			content: "About - Mika Henttinen"
		},
		{
			property: "og:description",
			content: "Education, work experience and skills."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter = () => import("./routes-B5wviS6o.js");
var Route = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
//#endregion
//#region src/routeTree.gen.ts
var VoiceRoute = Route$7.update({
	id: "/voice",
	path: "/voice",
	getParentRoute: () => Route$8
});
var SitemapDotxmlRoute = Route$6.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$8
});
var NewsRoute = Route$5.update({
	id: "/news",
	path: "/news",
	getParentRoute: () => Route$8
});
var MusicRoute = Route$4.update({
	id: "/music",
	path: "/music",
	getParentRoute: () => Route$8
});
var GamesRoute = Route$3.update({
	id: "/games",
	path: "/games",
	getParentRoute: () => Route$8
});
var AdminRoute = Route$2.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => Route$8
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$8
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$8
	}),
	AboutRoute,
	AdminRoute,
	GamesRoute,
	MusicRoute,
	NewsRoute,
	SitemapDotxmlRoute,
	VoiceRoute
};
var routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
