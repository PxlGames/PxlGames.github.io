import { t as Panel } from "./Panel-d4J3NCKk.js";
import { a as getGameShots } from "./content-B7CY0fH7.js";
import { t as LikeButton } from "./LikeButton-DzGMy0sV.js";
import { useEffect, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/games.tsx?tsr-split=component
function Games() {
	const [shots, setShots] = useState([]);
	const [loading, setLoading] = useState(true);
	const [activeId, setActiveId] = useState(null);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	useEffect(() => {
		getGameShots().then((data) => {
			setShots(data);
			setLoading(false);
		});
	}, []);
	const getImages = (shot) => {
		if (shot.images && shot.images.length > 0) return shot.images;
		if (shot.src) return [shot.src];
		return [];
	};
	const handleOpen = (shot) => {
		setActiveId(shot.id);
		setCurrentImageIndex(0);
	};
	const handleClose = () => {
		setActiveId(null);
	};
	const handleLikeToggle = (itemId, newLikes) => {
		setShots((prev) => prev.map((shot) => shot.id === itemId ? {
			...shot,
			likes: newLikes
		} : shot));
	};
	if (loading) return /* @__PURE__ */ jsx("div", {
		className: "p-10 text-center",
		children: "Loading games..."
	});
	const activeShot = activeId ? shots.find((s) => s.id === activeId) : null;
	return /* @__PURE__ */ jsxs("div", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [
			/* @__PURE__ */ jsxs("header", {
				className: "mb-8",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "crt text-xl text-cyan",
						children: "> cd ./games"
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "mt-2 font-pixel text-2xl glow-cyan md:text-3xl",
						children: "GAMES.DIR"
					}),
					/* @__PURE__ */ jsxs("p", {
						className: "mt-3 max-w-2xl text-muted-foreground",
						children: [
							"Released projects, prototypes and screenshot dumps. Full library lives on itch.io.",
							/* @__PURE__ */ jsx("br", {}),
							"This page is the curated selection."
						]
					}),
					/* @__PURE__ */ jsx("a", {
						href: "https://pxldev.itch.io/",
						target: "_blank",
						rel: "noreferrer",
						className: "button-option mt-5 inline-flex items-center gap-2 bg-cyan px-4 py-3 font-pixel text-[10px] uppercase text-primary-foreground shadow-[4px_4px_0_0_var(--color-magenta)] transition-transform hover:-translate-y-0.5",
						children: "▸ Visit pxldev.itch.io"
					})
				]
			}),
			/* @__PURE__ */ jsx(Panel, {
				title: "screenshot_gallery.exe",
				accent: "cyan",
				children: /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: shots.map((s) => {
						const images = getImages(s);
						const count = images.length;
						return /* @__PURE__ */ jsxs("button", {
							type: "button",
							onClick: () => handleOpen(s),
							className: "group border border-border bg-panel-2 text-left transition-all hover:-translate-y-0.5 hover:border-cyan hover:shadow-[5px_5px_0_0_var(--color-cyan)]",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "aspect-video w-full overflow-hidden bg-panel-2 relative",
								children: [
									count === 0 && /* @__PURE__ */ jsx("div", {
										className: "h-full w-full",
										style: { background: s.palette }
									}),
									count === 1 && /* @__PURE__ */ jsx("img", {
										src: images[0],
										alt: s.title,
										className: "h-full w-full object-contain"
									}),
									count === 2 && /* @__PURE__ */ jsx("div", {
										className: "grid h-full w-full grid-cols-2 gap-0.5 p-0.5",
										children: images.map((img, idx) => /* @__PURE__ */ jsx("div", {
											className: "overflow-hidden",
											children: /* @__PURE__ */ jsx("img", {
												src: img,
												alt: `${s.title} ${idx + 1}`,
												className: "h-full w-full object-cover"
											})
										}, idx))
									}),
									count === 3 && /* @__PURE__ */ jsxs("div", {
										className: "grid h-full w-full grid-cols-2 gap-0.5 p-0.5",
										children: [images.slice(0, 2).map((img, idx) => /* @__PURE__ */ jsx("div", {
											className: "overflow-hidden",
											children: /* @__PURE__ */ jsx("img", {
												src: img,
												alt: `${s.title} ${idx + 1}`,
												className: "h-full w-full object-cover"
											})
										}, idx)), /* @__PURE__ */ jsx("div", {
											className: "col-span-2 overflow-hidden",
											children: /* @__PURE__ */ jsx("img", {
												src: images[2],
												alt: `${s.title} 3`,
												className: "h-full w-full object-cover"
											})
										})]
									}),
									count >= 4 && /* @__PURE__ */ jsx("div", {
										className: "grid h-full w-full grid-cols-2 grid-rows-2 gap-0.5 p-0.5",
										children: images.slice(0, 4).map((img, idx) => /* @__PURE__ */ jsx("div", {
											className: "overflow-hidden",
											children: /* @__PURE__ */ jsx("img", {
												src: img,
												alt: `${s.title} ${idx + 1}`,
												className: "h-full w-full object-cover"
											})
										}, idx))
									}),
									count > 1 && /* @__PURE__ */ jsxs("div", {
										className: "absolute bottom-1 right-1 bg-black/70 px-2 py-1 font-pixel text-[12px] text-white",
										children: [
											"×",
											count,
											" Images"
										]
									})
								]
							}), /* @__PURE__ */ jsxs("div", {
								className: "p-3",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "font-pixel text-[9px] uppercase text-cyan",
										children: s.game
									}),
									/* @__PURE__ */ jsx("div", {
										className: "crt mt-1 text-lg text-foreground",
										children: s.title
									}),
									/* @__PURE__ */ jsx("div", {
										className: "mt-1 text-xs text-muted-foreground line-clamp-2",
										children: s.description
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "mt-2 flex items-center justify-between",
										children: [/* @__PURE__ */ jsx("div", {
											className: "font-pixel text-[8px] uppercase text-muted-foreground group-hover:text-cyan",
											children: count > 1 ? "▸ view gallery" : "▸ view fullscreen"
										}), /* @__PURE__ */ jsx(LikeButton, {
											itemId: s.id,
											likes: s.likes || 0,
											onToggle: handleLikeToggle
										})]
									})
								]
							})]
						}, s.id);
					})
				})
			}),
			activeShot && /* @__PURE__ */ jsx("div", {
				role: "dialog",
				"aria-modal": "true",
				className: "fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-4 backdrop-blur-md",
				onClick: handleClose,
				children: /* @__PURE__ */ jsxs("div", {
					className: "relative flex max-h-[92vh] w-full max-w-5xl flex-col border-2 border-cyan bg-panel shadow-[8px_8px_0_0_var(--color-magenta)]",
					onClick: (e) => e.stopPropagation(),
					children: [
						/* @__PURE__ */ jsxs("header", {
							className: "flex shrink-0 items-center justify-between border-b border-border px-3 py-2 text-primary-foreground backdrop-blur-sm",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "font-pixel text-[10px] uppercase text-gold",
								children: [
									"▸ ",
									activeShot.game,
									" — ",
									activeShot.title
								]
							}), /* @__PURE__ */ jsx("button", {
								onClick: handleClose,
								"aria-label": "Close",
								className: "grid h-6 w-6 place-items-center border text-red/100 font-pixel text-[10px]",
								children: "✕"
							})]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "relative flex-1 aspect-video w-full overflow-hidden bg-panel-2 min-h-0",
							children: (() => {
								const images = getImages(activeShot);
								if (images.length > 0) return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("img", {
									src: images[currentImageIndex],
									alt: activeShot.title,
									className: "h-full w-full object-contain"
								}), images.length > 1 && /* @__PURE__ */ jsxs(Fragment, { children: [
									/* @__PURE__ */ jsx("button", {
										onClick: (e) => {
											e.stopPropagation();
											setCurrentImageIndex((prev) => prev === 0 ? images.length - 1 : prev - 1);
										},
										className: "absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 px-2 py-4 text-white hover:bg-black/70",
										children: "◀"
									}),
									/* @__PURE__ */ jsx("button", {
										onClick: (e) => {
											e.stopPropagation();
											setCurrentImageIndex((prev) => prev === images.length - 1 ? 0 : prev + 1);
										},
										className: "absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 px-2 py-4 text-white hover:bg-black/70",
										children: "▶"
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/60 px-3 py-1 font-pixel text-[8px] text-white",
										children: [
											currentImageIndex + 1,
											" / ",
											images.length
										]
									})
								] })] });
								else return /* @__PURE__ */ jsx("div", {
									className: "h-full w-full",
									style: { background: activeShot.palette }
								});
							})()
						}),
						/* @__PURE__ */ jsx("div", {
							className: "shrink-0 border-t border-border p-4",
							children: /* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ jsxs("div", { children: [
									/* @__PURE__ */ jsx("div", {
										className: "font-pixel text-[10px] uppercase text-cyan",
										children: activeShot.game
									}),
									/* @__PURE__ */ jsx("div", {
										className: "crt mt-1 text-2xl text-foreground",
										children: activeShot.title
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-2 text-sm text-muted-foreground",
										children: activeShot.description
									})
								] }), /* @__PURE__ */ jsx(LikeButton, {
									itemId: activeShot.id,
									likes: activeShot.likes || 0,
									onToggle: handleLikeToggle
								})]
							})
						})
					]
				})
			})
		]
	});
}
//#endregion
export { Games as component };
