import { t as Panel } from "./Panel-d4J3NCKk.js";
import { s as getMusicTracks, u as getVoiceVideos } from "./content-B7CY0fH7.js";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/index.tsx?tsr-split=component
var tiles = [
	{
		to: "/games",
		label: "GAMES",
		sub: "itch.io library",
		color: "cyan",
		src: "/media/graphics/icons/games_icon.png"
	},
	{
		to: "/music",
		label: "MUSIC",
		sub: "spotify + player",
		color: "gold",
		src: "/media/graphics/icons/music_icon.gif"
	},
	{
		to: "/voice",
		label: "VOICE",
		sub: "reels & clips",
		color: "lime",
		src: "/media/graphics/icons/voice_icon.png"
	},
	{
		to: "/news",
		label: "NEWS",
		sub: "announcements",
		color: "violet",
		src: "/media/graphics/icons/news_icon.png"
	},
	{
		to: "/about",
		label: "ABOUT",
		sub: "things about me",
		color: "magenta",
		src: "/media/graphics/icons/about_icon.png"
	}
];
var tileClass = {
	cyan: "hover:shadow-[6px_6px_0_0_var(--color-cyan)] hover:border-cyan hover:-translate-y-2",
	gold: "hover:shadow-[6px_6px_0_0_var(--color-gold)] hover:border-gold hover:-translate-y-2",
	lime: "hover:shadow-[6px_6px_0_0_var(--color-lime)] hover:border-lime hover:-translate-y-2",
	violet: "hover:shadow-[6px_6px_0_0_var(--color-violet)] hover:border-violet hover:-translate-y-2",
	magenta: "hover:shadow-[6px_6px_0_0_var(--color-magenta)] hover:border-magenta hover:-translate-y-2"
};
function Home() {
	const [latestTrack, setLatestTrack] = useState(null);
	const [latestVideo, setLatestVideo] = useState(null);
	useEffect(() => {
		Promise.all([getMusicTracks(), getVoiceVideos()]).then(([tracks, videos]) => {
			setLatestTrack(tracks[0] || null);
			setLatestVideo(videos[0] || null);
		});
	}, []);
	return /* @__PURE__ */ jsxs("div", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "mb-8 overflow-hidden border border-border bg-panel/60 py-2",
				children: /* @__PURE__ */ jsx("div", {
					className: "marquee-track flex whitespace-nowrap crt text-lg text-cyan",
					style: { width: "200%" },
					children: Array.from({ length: 2 }).map((_, i) => /* @__PURE__ */ jsx("span", {
						className: "flex-1 text-center px-4",
						children: "---- ★ WELCOME TO PXLDEV.EXE ★ -- ✧ -- ★ WELCOME TO PXLDEV.EXE ★ -- ✧ -- ★ WELCOME TO PXLDEV.EXE ★ -- ✧ -- ★ WELCOME TO PXLDEV.EXE ★ ----"
					}, i))
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "grid gap-6 md:grid-cols-[1.4fr_1fr]",
				children: [/* @__PURE__ */ jsxs(Panel, {
					title: "hello_world.txt",
					accent: "magenta",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "crt text-xl text-cyan",
							children: "> whoami"
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "mt-2 font-pixel text-2xl leading-relaxed glow-magenta md:text-3xl",
							children: "MIKA HENTTINEN"
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-1 crt text-2xl text-gold",
							children: "a.k.a. pxldev"
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "mt-5 max-w-prose text-base leading-relaxed text-muted-foreground",
							children: [
								"Just a dude with many interests, I make",
								" ",
								/* @__PURE__ */ jsx("span", {
									className: "text-cyan",
									children: "games"
								}),
								", write",
								" ",
								/* @__PURE__ */ jsx("span", {
									className: "text-cyan",
									children: "code"
								}),
								", make",
								" ",
								/* @__PURE__ */ jsx("span", {
									className: "text-gold",
									children: "music"
								}),
								", do",
								" ",
								/* @__PURE__ */ jsx("span", {
									className: "text-magenta",
									children: "art"
								}),
								", and lend my",
								" ",
								/* @__PURE__ */ jsx("span", {
									className: "text-lime",
									children: "voice"
								}),
								" to characters. This site is a place for some of that stuff."
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-6 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ jsx(Link, {
								to: "/games",
								className: "bg-cyan px-4 py-3 font-pixel text-[10px] uppercase text-primary-foreground shadow-[4px_4px_0_0_var(--color-magenta)] transition-transform hover:-translate-y-0.5",
								children: "▸ Press START"
							}), /* @__PURE__ */ jsx(Link, {
								to: "/about",
								className: "border border-border bg-panel px-4 py-3 font-pixel text-[10px] uppercase text-foreground hover:border-gold hover:text-gold",
								children: "▸ Read manual"
							})]
						})
					]
				}), /* @__PURE__ */ jsx(Panel, {
					title: "me.md",
					accent: "cyan",
					children: /* @__PURE__ */ jsxs("div", {
						className: "profile_show grid grid-cols-2 gap-4 md:grid-cols-2",
						children: [/* @__PURE__ */ jsxs("p", {
							className: "max-w-prose text-base leading-relaxed text-muted-foreground",
							children: [
								"I publish a lot of different stuff on my",
								/* @__PURE__ */ jsx("span", {
									className: "text-red",
									children: " YouTube"
								}),
								", channel.",
								" ",
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx("br", {}),
								"You can find everything from devlogs to voice acting, but lately, I've been focusing mostly on",
								/* @__PURE__ */ jsx("span", {
									className: "text-gold",
									children: " Music"
								}),
								".",
								" "
							]
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("img", {
							width: 250,
							src: "/media/pxl.png"
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-5 flex flex-wrap gap-3",
							children: /* @__PURE__ */ jsx("a", {
								href: "https://www.youtube.com/@pxldev",
								target: "_blank",
								rel: "noreferrer",
								className: "button-option bg-magenta px-4 py-3 font-pixel text-[10px] uppercase text-primary-foreground shadow-[4px_4px_0_0_var(--color-gold)] transition-transform hover:-translate-y-0.5",
								children: "▸ Check YouTube"
							})
						})] })]
					})
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "mb-4 font-pixel text-xs uppercase tracking-widest text-white",
					style: { filter: "drop-shadow(2px 2px 6px rgba(0,0,0,0.7))" },
					children: "── SELECT A FILE ──"
				}), /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-2 gap-4 md:grid-cols-5",
					children: tiles.map((t) => /* @__PURE__ */ jsxs(Link, {
						to: t.to,
						className: `group border-[5px] border-muted-foreground bg-panel p-4 text-center transition-all ${tileClass[t.color]}`,
						style: { filter: "drop-shadow(2px 2px 7px rgba(0,0,0,0.7))" },
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "pixelated text-4xl bob flex justify-center",
								children: /* @__PURE__ */ jsx("img", {
									src: t.src,
									alt: t.label,
									className: "h-17 w-17 object-contain pixelated",
									loading: "lazy"
								})
							}),
							/* @__PURE__ */ jsx("div", {
								className: "mt-3 font-pixel text-[10px] uppercase",
								children: t.label
							}),
							/* @__PURE__ */ jsx("div", {
								className: "crt mt-1 text-base text-muted-foreground",
								children: t.sub
							})
						]
					}, t.to))
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "mt-10 grid gap-6 md:grid-cols-3",
				children: [
					/* @__PURE__ */ jsx(Panel, {
						title: "latest_game",
						accent: "cyan",
						children: /* @__PURE__ */ jsxs("a", {
							href: "https://pxldev.itch.io/assembly-required",
							target: "_blank",
							rel: "noreferrer",
							className: "block",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "pixelated aspect-video w-full bg-cover bg-center",
									style: { backgroundImage: "url('/media/graphics/games/assembly-required.png')" }
								}),
								/* @__PURE__ */ jsx("div", {
									className: "mt-3 crt text-xl text-cyan",
									children: "> play now on itch.io"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: "You have been hired as a merchant to a shady gun store. Mix and match to create weapons, but watch out, one wrong move and you're getting shot."
								})
							]
						})
					}),
					/* @__PURE__ */ jsxs(Panel, {
						title: "latest_track",
						accent: "gold",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "pixelated aspect-video w-full overflow-hidden bg-panel-2",
								children: latestTrack?.cover ? /* @__PURE__ */ jsx("img", {
									src: latestTrack.cover,
									alt: latestTrack.title,
									className: "h-full w-full object-cover"
								}) : /* @__PURE__ */ jsx("div", { className: "h-full w-full bg-[repeating-linear-gradient(90deg,var(--color-gold)_0_6px,var(--color-panel-2)_6px_10px)]" })
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-3 crt text-xl text-gold",
								children: ["> ", latestTrack?.title || "new single"]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: latestTrack?.album || "Placeholder waveform."
							}),
							/* @__PURE__ */ jsx(Link, {
								to: "/music",
								className: "mt-4 inline-block border border-gold bg-transparent px-4 py-2 font-pixel text-[10px] uppercase text-gold hover:bg-gold hover:text-primary-foreground",
								children: "▸ Listen now"
							})
						]
					}),
					/* @__PURE__ */ jsxs(Panel, {
						title: "latest_reel",
						accent: "lime",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "pixelated aspect-video w-full overflow-hidden bg-panel-2",
								children: latestVideo?.cover ? /* @__PURE__ */ jsx("img", {
									src: latestVideo.cover,
									alt: latestVideo.title,
									className: "h-full w-full object-cover"
								}) : /* @__PURE__ */ jsx("div", { className: "aspect-video w-full bg-[radial-gradient(circle_at_30%_30%,var(--color-lime),transparent_60%),radial-gradient(circle_at_70%_70%,var(--color-cyan),transparent_60%)]" })
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-3 crt text-xl text-lime",
								children: ["> ", latestVideo?.title || "new reel"]
							}),
							/* @__PURE__ */ jsx(Link, {
								to: "/voice",
								className: "mt-4 inline-block border border-lime bg-transparent px-4 py-2 font-pixel text-[10px] uppercase text-lime hover:bg-lime hover:text-primary-foreground",
								children: "▸ Listen now"
							})
						]
					})
				]
			})
		]
	});
}
//#endregion
export { Home as component };
