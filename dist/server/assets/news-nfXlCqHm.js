import { t as Panel } from "./Panel-d4J3NCKk.js";
import { c as getNewsPosts } from "./content-B7CY0fH7.js";
import { t as LikeButton } from "./LikeButton-DzGMy0sV.js";
import { useEffect, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/news.tsx?tsr-split=component
var tagColor = {
	game: "text-cyan border-cyan",
	music: "text-gold border-gold",
	voice: "text-lime border-lime",
	site: "text-magenta border-magenta",
	news: "text-violet border-violet"
};
var tagAccent = {
	game: "cyan",
	music: "gold",
	voice: "lime",
	site: "magenta",
	news: "violet"
};
function News() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		getNewsPosts().then((data) => {
			setPosts(data);
			setLoading(false);
		});
	}, []);
	const handleNewsLikeToggle = (itemId, newLikes) => {
		setPosts((prev) => prev.map((p) => p.id === itemId ? {
			...p,
			likes: newLikes
		} : p));
	};
	if (loading) return /* @__PURE__ */ jsx("div", {
		className: "p-10 text-center",
		children: "Loading news..."
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "mx-auto max-w-4xl px-4 py-10",
		children: [
			/* @__PURE__ */ jsxs("header", {
				className: "mb-8",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "crt text-xl text-violet",
						children: "> tail -f news.log"
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "mt-2 font-pixel text-2xl glow-magenta md:text-3xl",
						children: "NEWS.LOG"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-3 max-w-2xl text-muted-foreground",
						children: "Announcements, tiny devlogs and general updates. Newest at the top."
					})
				]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "space-y-6",
				children: posts.map((p) => /* @__PURE__ */ jsxs(Panel, {
					title: p.date,
					accent: tagAccent[p.tag],
					children: [
						"   ",
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-start justify-between gap-3",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "font-pixel text-sm text-foreground md:text-base",
								children: p.title
							}), /* @__PURE__ */ jsx("span", {
								className: `shrink-0 border px-2 py-1 font-pixel text-[8px] uppercase ${tagColor[p.tag]}`,
								children: p.tag
							})]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground",
							children: p.body
						}),
						p.picture && /* @__PURE__ */ jsx("a", {
							href: p.picture,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "mt-4 block",
							children: /* @__PURE__ */ jsx("div", {
								className: "pixelated overflow-hidden rounded border border-border bg-panel-2",
								children: /* @__PURE__ */ jsx("img", {
									src: p.picture,
									alt: p.title,
									className: "h-auto w-full max-h-64 object-contain",
									loading: "lazy"
								})
							})
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-4 flex justify-end",
							children: /* @__PURE__ */ jsx(LikeButton, {
								itemId: p.id,
								likes: p.likes || 0,
								onToggle: handleNewsLikeToggle
							})
						})
					]
				}, p.id))
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-10 border border-dashed border-border bg-panel/60 p-6 text-center",
				children: [/* @__PURE__ */ jsx("div", {
					className: "font-pixel text-[10px] uppercase text-muted-foreground",
					children: "── end of transmission ──"
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-2 crt text-lg text-cyan",
					children: /* @__PURE__ */ jsx("span", {
						className: "blink",
						children: "▮"
					})
				})]
			})
		]
	});
}
//#endregion
export { News as component };
