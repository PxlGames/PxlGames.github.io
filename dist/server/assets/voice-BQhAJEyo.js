import { t as Panel } from "./Panel-d4J3NCKk.js";
import { l as getVoiceClips, u as getVoiceVideos } from "./content-B7CY0fH7.js";
import { t as LikeButton } from "./LikeButton-DzGMy0sV.js";
import { useEffect, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/voice.tsx?tsr-split=component
function Voice() {
	const [videos, setVideos] = useState([]);
	const [clips, setClips] = useState([]);
	const [loading, setLoading] = useState(true);
	const [playingId, setPlayingId] = useState(null);
	useEffect(() => {
		Promise.all([getVoiceVideos(), getVoiceClips()]).then(([videoData, clipData]) => {
			setVideos(videoData);
			setClips(clipData);
			setLoading(false);
		});
	}, []);
	const handleVideoLikeToggle = (itemId, newLikes) => {
		setVideos((prev) => prev.map((v) => v.id === itemId ? {
			...v,
			likes: newLikes
		} : v));
	};
	const handleClipLikeToggle = (itemId, newLikes) => {
		setClips((prev) => prev.map((c) => c.id === itemId ? {
			...c,
			likes: newLikes
		} : c));
	};
	if (loading) return /* @__PURE__ */ jsx("div", {
		className: "p-10 text-center",
		children: "Loading voice reel..."
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [
			/* @__PURE__ */ jsxs("header", {
				className: "mb-8",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "crt text-xl text-lime",
						children: "> chmod +x voice.reel"
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "mt-2 font-pixel text-2xl glow-cyan md:text-3xl",
						style: { color: "var(--color-lime)" },
						children: "VOICE.REEL"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-3 max-w-2xl text-muted-foreground",
						children: "Character work, narration and dubs."
					})
				]
			}),
			/* @__PURE__ */ jsx(Panel, {
				title: "reels.tv",
				accent: "lime",
				className: "mb-6",
				children: /* @__PURE__ */ jsx("div", {
					className: "grid gap-4 md:grid-cols-3",
					children: videos.map((v) => /* @__PURE__ */ jsxs("div", {
						className: "border border-border bg-panel-2",
						children: [/* @__PURE__ */ jsx("div", {
							className: "pixelated relative aspect-video w-full overflow-hidden bg-black",
							children: v.youtubeId ? /* @__PURE__ */ jsx("iframe", {
								className: "h-full w-full",
								src: `https://www.youtube.com/embed/${v.youtubeId}`,
								title: v.title,
								allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
								allowFullScreen: true
							}) : /* @__PURE__ */ jsx("div", {
								className: "flex h-full items-center justify-center bg-[radial-gradient(circle_at_30%_30%,var(--color-lime),transparent_60%),radial-gradient(circle_at_70%_70%,var(--color-violet),transparent_60%)]",
								children: /* @__PURE__ */ jsxs("div", {
									className: "text-center",
									children: [/* @__PURE__ */ jsx("div", {
										className: "font-pixel text-xl text-primary-foreground",
										children: "▶"
									}), /* @__PURE__ */ jsx("div", {
										className: "mt-2 crt text-base text-primary-foreground",
										children: "no video id"
									})]
								})
							})
						}), /* @__PURE__ */ jsx("div", {
							className: "p-3",
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex items-start justify-between",
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
									className: "font-pixel text-[9px] uppercase text-lime",
									children: v.role
								}), /* @__PURE__ */ jsx("div", {
									className: "crt mt-1 text-lg text-foreground",
									children: v.title
								})] }), /* @__PURE__ */ jsx(LikeButton, {
									itemId: v.id,
									likes: v.likes || 0,
									onToggle: handleVideoLikeToggle
								})]
							})
						})]
					}, v.id))
				})
			}),
			/* @__PURE__ */ jsx(Panel, {
				title: "character_clips.wav",
				accent: "violet",
				children: /* @__PURE__ */ jsx("ul", {
					className: "divide-y divide-border",
					children: clips.map((c) => {
						const isPlaying = playingId === c.id;
						return /* @__PURE__ */ jsxs("li", {
							className: "flex items-center justify-between gap-4 py-3",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "min-w-0 flex-1",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "font-pixel text-[9px] uppercase text-violet",
										children: c.character
									}),
									/* @__PURE__ */ jsx("div", {
										className: "crt mt-0.5 text-lg text-foreground",
										children: c.title
									}),
									/* @__PURE__ */ jsx("div", {
										className: "text-xs text-muted-foreground",
										children: c.note
									})
								]
							}), /* @__PURE__ */ jsxs("div", {
								className: "shrink-0 flex items-center gap-4",
								children: [/* @__PURE__ */ jsx(LikeButton, {
									itemId: c.id,
									likes: c.likes || 0,
									onToggle: handleClipLikeToggle
								}), c.src ? /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ jsx("button", {
										type: "button",
										onClick: () => setPlayingId(isPlaying ? null : c.id),
										className: "bg-violet px-4 py-2 font-pixel text-[10px] uppercase text-primary-foreground shadow-[3px_3px_0_0_var(--color-lime)]",
										children: isPlaying ? "❚❚" : "▶"
									}), isPlaying && /* @__PURE__ */ jsx("audio", {
										src: c.src,
										controls: true,
										autoPlay: true,
										className: "max-w-[350px]"
									})]
								}) : /* @__PURE__ */ jsx("div", {
									className: "border border-dashed border-border bg-panel-2 px-3 py-2 crt text-sm text-muted-foreground",
									children: "no clip loaded"
								})]
							})]
						}, c.id);
					})
				})
			})
		]
	});
}
//#endregion
export { Voice as component };
