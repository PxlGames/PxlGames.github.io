import { t as Panel } from "./Panel-d4J3NCKk.js";
import { o as getMusicPlaylistOrder, s as getMusicTracks } from "./content-B7CY0fH7.js";
import { t as LikeButton } from "./LikeButton-DzGMy0sV.js";
import { useEffect, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/music.tsx?tsr-split=component
function getPattern(idx) {
	const hue1 = idx * 37 % 360;
	const hue2 = (idx * 47 + 120) % 360;
	const hue3 = (idx * 53 + 240) % 360;
	switch (idx % 10) {
		case 0: return `
        repeating-linear-gradient(
          45deg,
          hsl(${hue1}, 80%, 60%) 0px,
          hsl(${hue1}, 80%, 60%) 4px,
          hsl(${hue2}, 70%, 50%) 4px,
          hsl(${hue2}, 70%, 50%) 8px
        )
      `;
		case 1: return `
        radial-gradient(circle at 30% 30%, hsl(${hue1}, 80%, 60%) 2px, transparent 3px),
        radial-gradient(circle at 70% 70%, hsl(${hue2}, 70%, 50%) 2px, transparent 3px),
        radial-gradient(circle at 50% 50%, hsl(${hue3}, 80%, 60%) 3px, transparent 4px),
        hsl(${hue1}, 60%, 40%)
      `;
		case 2: return `
        repeating-linear-gradient(
          0deg,
          hsl(${hue1}, 70%, 50%) 0px,
          hsl(${hue1}, 70%, 50%) 2px,
          hsl(${hue2}, 60%, 40%) 2px,
          hsl(${hue2}, 60%, 40%) 10px
        ),
        repeating-linear-gradient(
          90deg,
          hsl(${hue2}, 70%, 50%) 0px,
          hsl(${hue2}, 70%, 50%) 2px,
          hsl(${hue1}, 60%, 40%) 2px,
          hsl(${hue1}, 60%, 40%) 10px
        )
      `;
		case 3: return `
        linear-gradient(
          135deg,
          hsl(${hue1}, 80%, 60%),
          hsl(${hue2}, 70%, 50%),
          hsl(${hue3}, 80%, 60%)
        )
      `;
		case 4: return `
        repeating-conic-gradient(
          hsl(${hue1}, 80%, 60%) 0% 25%,
          hsl(${hue2}, 70%, 50%) 0% 50%
        )
      `;
		case 5: return `
        repeating-linear-gradient(
          45deg,
          hsl(${hue1}, 80%, 60%) 0px,
          hsl(${hue1}, 80%, 60%) 3px,
          transparent 3px,
          transparent 8px
        ),
        repeating-linear-gradient(
          -45deg,
          hsl(${hue2}, 70%, 50%) 0px,
          hsl(${hue2}, 70%, 50%) 3px,
          transparent 3px,
          transparent 8px
        ),
        hsl(${hue3}, 60%, 40%)
      `;
		case 6: return `
        repeating-linear-gradient(
          -45deg,
          hsl(${hue1}, 80%, 60%) 0px,
          hsl(${hue1}, 80%, 60%) 4px,
          hsl(${hue2}, 70%, 50%) 4px,
          hsl(${hue2}, 70%, 50%) 8px,
          hsl(${hue3}, 80%, 60%) 8px,
          hsl(${hue3}, 80%, 60%) 12px
        )
      `;
		case 7: return `
        repeating-linear-gradient(
          60deg,
          hsl(${hue1}, 80%, 60%) 0px,
          hsl(${hue1}, 80%, 60%) 5px,
          hsl(${hue2}, 70%, 50%) 5px,
          hsl(${hue2}, 70%, 50%) 10px
        )
      `;
		case 8: return `
        repeating-radial-gradient(
          circle at 20% 30%,
          hsl(${hue1}, 80%, 60%) 0px,
          hsl(${hue2}, 70%, 50%) 8px,
          hsl(${hue3}, 80%, 60%) 16px
        )
      `;
		case 9: return `
        radial-gradient(circle at 20% 20%, hsl(${hue1}, 80%, 60%) 4px, transparent 5px),
        radial-gradient(circle at 80% 80%, hsl(${hue2}, 70%, 50%) 6px, transparent 7px),
        radial-gradient(circle at 50% 30%, hsl(${hue3}, 80%, 60%) 3px, transparent 4px),
        radial-gradient(circle at 70% 20%, hsl(${hue1}, 70%, 50%) 5px, transparent 6px),
        radial-gradient(circle at 30% 70%, hsl(${hue2}, 80%, 60%) 4px, transparent 5px),
        hsl(${hue3}, 60%, 40%)
      `;
		default: return `
        linear-gradient(
          135deg,
          hsl(${hue1}, 80%, 60%),
          hsl(${hue2}, 70%, 50%),
          hsl(${hue3}, 80%, 60%)
        )
      `;
	}
}
function Music() {
	const [tracks, setTracks] = useState([]);
	const [playlistOrder, setPlaylistOrder] = useState([]);
	const [loading, setLoading] = useState(true);
	const [current, setCurrent] = useState(0);
	const [playing, setPlaying] = useState(false);
	const [progress, setProgress] = useState(0);
	const [volume, setVolume] = useState(.8);
	const [expandedAlbums, setExpandedAlbums] = useState(/* @__PURE__ */ new Set());
	const audioRef = useRef(null);
	const progressRef = useRef(null);
	useEffect(() => {
		const saved = localStorage.getItem("music-volume");
		if (saved !== null) setVolume(parseFloat(saved));
	}, []);
	useEffect(() => {
		Promise.all([getMusicTracks(), getMusicPlaylistOrder()]).then(([data, order]) => {
			setTracks(data);
			setPlaylistOrder(order);
			setLoading(false);
		});
	}, []);
	useEffect(() => {
		if (tracks.length > 0 && current >= tracks.length) setCurrent(0);
	}, [tracks, current]);
	const track = tracks[current] || null;
	const handleSeek = (e) => {
		const rect = progressRef.current?.getBoundingClientRect();
		if (!rect) return;
		let percent = (e.clientX - rect.left) / rect.width;
		percent = Math.min(1, Math.max(0, percent));
		setProgress(percent * 100);
		const audio = audioRef.current;
		if (audio && track?.src && audio.duration) audio.currentTime = percent * audio.duration;
	};
	useEffect(() => {
		setProgress(0);
		setPlaying(false);
	}, [current]);
	useEffect(() => {
		if (audioRef.current) audioRef.current.volume = volume;
		localStorage.setItem("music-volume", String(volume));
	}, [volume]);
	useEffect(() => {
		if (!track?.src) {
			if (!playing) return;
			const id = window.setInterval(() => {
				setProgress((p) => p >= 100 ? 0 : p + .6);
			}, 120);
			return () => window.clearInterval(id);
		}
		const a = audioRef.current;
		if (!a) return;
		if (playing) a.play();
		else a.pause();
	}, [playing, track?.src]);
	const handleTrackLikeToggle = (itemId, newLikes) => {
		setTracks((prev) => prev.map((t) => t.id === itemId ? {
			...t,
			likes: newLikes
		} : t));
	};
	const toggleAlbum = (key) => {
		setExpandedAlbums((prev) => {
			const newSet = new Set(prev);
			if (newSet.has(key)) newSet.delete(key);
			else newSet.add(key);
			return newSet;
		});
	};
	if (loading) return /* @__PURE__ */ jsx("div", {
		className: "p-10 text-center",
		children: "Loading music..."
	});
	if (!track) return /* @__PURE__ */ jsx("div", {
		className: "p-10 text-center",
		children: "No tracks found."
	});
	const groups = {};
	tracks.forEach((t) => {
		const playlist = t.playlist || "General";
		if (!groups[playlist]) groups[playlist] = [];
		groups[playlist].push(t);
	});
	const sortedPlaylistNames = [...new Set([...playlistOrder, ...Object.keys(groups).filter((name) => !playlistOrder.includes(name))])];
	return /* @__PURE__ */ jsxs("div", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [
			/* @__PURE__ */ jsxs("header", {
				className: "mb-8",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "crt text-xl text-gold",
						children: "> load ./music.wav"
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "mt-2 font-pixel text-2xl glow-gold md:text-3xl",
						children: "MUSIC.WAV"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-3 max-w-2xl text-muted-foreground",
						children: "A rotating selection of my work."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-5 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ jsx("a", {
							href: "https://open.spotify.com/artist/7LO0UMyp39smYDxo7drq60",
							target: "_blank",
							rel: "noreferrer",
							className: "button-option bg-gold px-4 py-3 font-pixel text-[10px] uppercase text-primary-foreground shadow-[4px_4px_0_0_var(--color-magenta)] transition-transform hover:-translate-y-0.5",
							children: "▸ Spotify"
						}), /* @__PURE__ */ jsx("a", {
							href: "https://www.youtube.com/@pxldev",
							target: "_blank",
							rel: "noreferrer",
							className: "button-option bg-magenta px-4 py-3 font-pixel text-[10px] uppercase text-primary-foreground shadow-[4px_4px_0_0_var(--color-gold)] transition-transform hover:-translate-y-0.5",
							children: "▸ YouTube"
						})]
					})
				]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mb-6",
				children: /* @__PURE__ */ jsx(Panel, {
					title: "now_playing.exe",
					accent: "gold",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col md:flex-row gap-6",
						children: [/* @__PURE__ */ jsx("div", {
							className: "md:w-1/3",
							children: /* @__PURE__ */ jsx("div", {
								className: "pixelated aspect-square w-full max-w-xs mx-auto md:mx-0 overflow-hidden bg-[conic-gradient(from_45deg,var(--color-magenta),var(--color-gold),var(--color-cyan),var(--color-violet),var(--color-magenta))]",
								children: track.cover ? /* @__PURE__ */ jsx("img", {
									src: track.cover,
									alt: track.title,
									className: "h-full w-full object-cover"
								}) : null
							})
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex-1 flex flex-col justify-between",
							children: [/* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("div", {
									className: "font-pixel text-[10px] uppercase text-gold",
									children: track.album
								}),
								/* @__PURE__ */ jsx("div", {
									className: "crt mt-1 text-2xl text-foreground",
									children: track.title
								}),
								track.playlist && /* @__PURE__ */ jsxs("div", {
									className: "crt text-sm text-muted-foreground",
									children: ["Playlist: ", track.playlist]
								}),
								track.description && /* @__PURE__ */ jsx("div", {
									className: "mt-3 crt text-base text-muted-foreground leading-relaxed border-l-2 border-gold pl-3",
									children: track.description
								}),
								/* @__PURE__ */ jsx("div", {
									className: "mt-3 flex justify-start",
									children: /* @__PURE__ */ jsx(LikeButton, {
										itemId: track.id,
										likes: track.likes || 0,
										onToggle: handleTrackLikeToggle
									})
								})
							] }), /* @__PURE__ */ jsxs("div", {
								className: "mt-4",
								children: [
									/* @__PURE__ */ jsx("div", {
										ref: progressRef,
										onClick: handleSeek,
										className: "h-4 cursor-pointer border border-border bg-panel-2 p-0.5",
										children: /* @__PURE__ */ jsx("div", {
											className: "h-full bg-gold transition-[width]",
											style: { width: `${progress}%` }
										})
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "mt-1 flex justify-between crt text-base text-muted-foreground",
										children: [/* @__PURE__ */ jsxs("span", { children: ["0:", String(Math.floor(progress / 100 * 60)).padStart(2, "0")] }), /* @__PURE__ */ jsx("span", { children: track.duration })]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "mt-5 flex items-center justify-between relative",
										children: [
											/* @__PURE__ */ jsx("div", { className: "flex items-center gap-2" }),
											/* @__PURE__ */ jsxs("div", {
												className: "absolute left-1/2 -translate-x-1/2 flex items-center gap-2",
												children: [
													/* @__PURE__ */ jsx("button", {
														type: "button",
														onClick: () => setCurrent((c) => (c - 1 + tracks.length) % tracks.length),
														className: "border border-border bg-panel-2 px-4 py-3 font-pixel text-[10px] hover:border-gold hover:text-gold",
														children: "◀◀"
													}),
													/* @__PURE__ */ jsx("button", {
														type: "button",
														onClick: () => setPlaying((p) => !p),
														className: "bg-gold px-6 py-3 font-pixel text-[12px] text-primary-foreground shadow-[3px_3px_0_0_var(--color-magenta)]",
														children: playing ? "❚❚ PAUSE" : "▶ PLAY"
													}),
													/* @__PURE__ */ jsx("button", {
														type: "button",
														onClick: () => setCurrent((c) => (c + 1) % tracks.length),
														className: "border border-border bg-panel-2 px-4 py-3 font-pixel text-[10px] hover:border-gold hover:text-gold",
														children: "▶▶"
													})
												]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-2",
												children: [
													/* @__PURE__ */ jsx("span", {
														className: "crt text-sm text-muted-foreground",
														children: "🔊"
													}),
													/* @__PURE__ */ jsx("input", {
														type: "range",
														min: "0",
														max: "1",
														step: "0.01",
														value: volume,
														onChange: (e) => setVolume(parseFloat(e.target.value)),
														className: "w-24 h-1.5 bg-border rounded appearance-none cursor-pointer",
														style: { background: `linear-gradient(to right, var(--color-gold) 0%, var(--color-gold) ${volume * 100}%, var(--color-border) ${volume * 100}%, var(--color-border) 100%)` }
													}),
													/* @__PURE__ */ jsxs("span", {
														className: "crt text-xs text-muted-foreground w-10 text-right",
														children: [Math.round(volume * 100), "%"]
													})
												]
											})
										]
									}),
									track.src && /* @__PURE__ */ jsx("audio", {
										ref: audioRef,
										src: track.src,
										onTimeUpdate: (e) => {
											const a = e.currentTarget;
											setProgress(a.currentTime / (a.duration || 1) * 100);
										},
										onEnded: () => setCurrent((c) => (c + 1) % tracks.length)
									}),
									!track.src && /* @__PURE__ */ jsxs("div", {
										className: "mt-4 border border-dashed border-border bg-panel-2 p-2 text-center crt text-sm text-muted-foreground",
										children: [
											"error — no ",
											/* @__PURE__ */ jsx("span", {
												className: "text-gold",
												children: "src"
											}),
											" found for the track."
										]
									})
								]
							})]
						})]
					})
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-1 md:grid-cols-2 gap-4",
				children: sortedPlaylistNames.map((name) => {
					const playlistTracks = groups[name] || [];
					const albumMap = /* @__PURE__ */ new Map();
					playlistTracks.forEach((t) => {
						const album = t.album || "[Single]";
						if (!albumMap.has(album)) albumMap.set(album, []);
						albumMap.get(album).push(t);
					});
					const albumGroups = [];
					const seen = /* @__PURE__ */ new Set();
					playlistTracks.forEach((t) => {
						const album = t.album || "[Single]";
						if (!seen.has(album)) {
							seen.add(album);
							albumGroups.push([album, albumMap.get(album)]);
						}
					});
					return /* @__PURE__ */ jsx(Panel, {
						title: `tracklist.dat — ${name}`,
						accent: "magenta",
						children: /* @__PURE__ */ jsx("ol", {
							className: "divide-y divide-border",
							children: albumGroups.map(([album, albumTracks]) => {
								if (album === "[Single]" || albumTracks.length === 1) return albumTracks.map((t) => {
									const idx = tracks.indexOf(t);
									return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("button", {
										type: "button",
										onClick: () => {
											setCurrent(idx);
											setPlaying(true);
										},
										className: `flex w-full items-center justify-between gap-3 px-2 py-3 text-left transition-colors ${current === idx ? "bg-panel-2 text-gold" : "text-foreground hover:bg-panel-2 hover:text-gold"}`,
										children: [/* @__PURE__ */ jsxs("div", {
											className: "flex min-w-0 items-center gap-3",
											children: [t.cover ? /* @__PURE__ */ jsx("img", {
												src: t.cover,
												alt: "",
												className: "w-8 h-8 object-cover pixelated flex-shrink-0"
											}) : /* @__PURE__ */ jsx("div", {
												className: "w-8 h-8 flex-shrink-0 border border-border",
												style: { background: getPattern(idx) }
											}), /* @__PURE__ */ jsxs("div", {
												className: "min-w-0",
												children: [/* @__PURE__ */ jsx("div", {
													className: "crt truncate text-lg",
													children: t.title
												}), /* @__PURE__ */ jsx("div", {
													className: "font-pixel text-[8px] uppercase text-muted-foreground",
													children: t.album
												})]
											})]
										}), /* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-3 shrink-0",
											children: [/* @__PURE__ */ jsx("span", {
												className: "crt text-base text-muted-foreground",
												children: t.duration
											}), /* @__PURE__ */ jsx(LikeButton, {
												itemId: t.id,
												likes: t.likes || 0,
												onToggle: handleTrackLikeToggle
											})]
										})]
									}) }, t.id);
								});
								const albumKey = `${name}-${album}`;
								const isExpanded = expandedAlbums.has(albumKey);
								const firstTrack = albumTracks[0];
								return /* @__PURE__ */ jsxs("li", {
									className: "border-t border-border first:border-t-0",
									children: [/* @__PURE__ */ jsxs("button", {
										type: "button",
										onClick: () => toggleAlbum(albumKey),
										className: "flex w-full items-center justify-between px-2 py-2 text-left transition-colors hover:bg-panel-2",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-3 min-w-0",
											children: [
												firstTrack.cover ? /* @__PURE__ */ jsx("img", {
													src: firstTrack.cover,
													alt: album,
													className: "w-8 h-8 object-cover pixelated flex-shrink-0"
												}) : /* @__PURE__ */ jsx("div", {
													className: "w-8 h-8 flex-shrink-0 border border-border",
													style: { background: getPattern(tracks.indexOf(firstTrack)) }
												}),
												/* @__PURE__ */ jsx("span", {
													className: "font-pixel text-xs truncate text-gold",
													children: album
												}),
												/* @__PURE__ */ jsxs("span", {
													className: "text-xs text-muted-foreground whitespace-nowrap",
													children: [
														"(",
														albumTracks.length,
														" tracks)"
													]
												})
											]
										}), /* @__PURE__ */ jsx("span", {
											className: "font-pixel text-xs text-muted-foreground ml-2",
											children: isExpanded ? "▼" : "▶"
										})]
									}), isExpanded && /* @__PURE__ */ jsx("div", {
										className: "pl-4 border-l-2 border-gold/30 ml-2 space-y-0",
										children: albumTracks.map((t) => {
											const idx = tracks.indexOf(t);
											return /* @__PURE__ */ jsx("div", {
												className: "border-t border-border first:border-t-0",
												children: /* @__PURE__ */ jsxs("button", {
													type: "button",
													onClick: () => {
														setCurrent(idx);
														setPlaying(true);
													},
													className: `flex w-full items-center justify-between gap-3 px-2 py-3 text-left transition-colors ${current === idx ? "bg-panel-2 text-gold" : "text-foreground hover:bg-panel-2 hover:text-gold"}`,
													children: [/* @__PURE__ */ jsxs("div", {
														className: "flex min-w-0 items-center gap-3",
														children: [t.cover ? /* @__PURE__ */ jsx("img", {
															src: t.cover,
															alt: "",
															className: "w-8 h-8 object-cover pixelated flex-shrink-0"
														}) : /* @__PURE__ */ jsx("div", {
															className: "w-8 h-8 flex-shrink-0 border border-border",
															style: { background: getPattern(idx) }
														}), /* @__PURE__ */ jsxs("div", {
															className: "min-w-0",
															children: [/* @__PURE__ */ jsx("div", {
																className: "crt truncate text-lg",
																children: t.title
															}), /* @__PURE__ */ jsx("div", {
																className: "font-pixel text-[8px] uppercase text-muted-foreground",
																children: t.album
															})]
														})]
													}), /* @__PURE__ */ jsxs("div", {
														className: "flex items-center gap-3 shrink-0",
														children: [/* @__PURE__ */ jsx("span", {
															className: "crt text-base text-muted-foreground",
															children: t.duration
														}), /* @__PURE__ */ jsx(LikeButton, {
															itemId: t.id,
															likes: t.likes || 0,
															onToggle: handleTrackLikeToggle
														})]
													})]
												})
											}, t.id);
										})
									})]
								}, albumKey);
							})
						})
					}, name);
				})
			})
		]
	});
}
//#endregion
export { Music as component };
