import { f as reorderContentItems, h as getAuth$1, i as getContent, m as updateContentItem, o as getMusicPlaylistOrder, p as setMusicPlaylistOrder, r as deleteContentItem, t as createContentItem } from "./content-B7CY0fH7.js";
import { useEffect, useMemo, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
//#region src/routes/admin.tsx?tsr-split=component
function Admin() {
	const [authenticated, setAuthenticated] = useState(false);
	const [loadingAuth, setLoadingAuth] = useState(true);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [activeTab, setActiveTab] = useState("news");
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const [editingId, setEditingId] = useState(null);
	const [formData, setFormData] = useState({});
	useEffect(() => {
		return onAuthStateChanged(getAuth$1(), (user) => {
			setAuthenticated(!!user);
			setLoadingAuth(false);
		});
	}, []);
	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			await signInWithEmailAndPassword(getAuth$1(), email, password);
		} catch (error) {
			alert("Login failed: " + error.message);
		}
	};
	const handleLogout = async () => {
		await signOut(getAuth$1());
		setAuthenticated(false);
	};
	useEffect(() => {
		if (authenticated) loadContent();
	}, [activeTab, authenticated]);
	const loadContent = async () => {
		setLoading(true);
		setItems(await getContent(activeTab));
		setLoading(false);
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		let dataToSave = formData;
		if (activeTab === "voice" && !dataToSave.type) dataToSave = {
			...dataToSave,
			type: "video"
		};
		if (editingId) await updateContentItem(editingId, dataToSave);
		else await createContentItem(activeTab, dataToSave);
		setFormData({});
		setEditingId(null);
		loadContent();
	};
	const handleDelete = async (id) => {
		if (confirm("Delete this item?")) {
			await deleteContentItem(id);
			loadContent();
		}
	};
	const handleEdit = (item) => {
		setEditingId(item.id);
		setFormData(item.data);
	};
	const handleCancel = () => {
		setEditingId(null);
		setFormData({});
	};
	const moveItem = async (index, direction) => {
		const newItems = [...items];
		if (direction === "up") if (index === 0) {
			const [first] = newItems.splice(0, 1);
			newItems.push(first);
		} else [newItems[index], newItems[index - 1]] = [newItems[index - 1], newItems[index]];
		else if (index === items.length - 1) {
			const [last] = newItems.splice(-1, 1);
			newItems.unshift(last);
		} else [newItems[index], newItems[index + 1]] = [newItems[index + 1], newItems[index]];
		await reorderContentItems(activeTab, newItems.map((item) => item.id));
		await loadContent();
	};
	if (loadingAuth) return /* @__PURE__ */ jsx("div", {
		className: "p-10 text-center",
		children: "Loading..."
	});
	if (!authenticated) return /* @__PURE__ */ jsxs("div", {
		className: "mx-auto max-w-md p-10",
		children: [
			/* @__PURE__ */ jsx("h1", {
				className: "font-pixel text-xl",
				children: "Admin Login"
			}),
			/* @__PURE__ */ jsxs("form", {
				onSubmit: handleLogin,
				className: "mt-4 space-y-3",
				children: [
					/* @__PURE__ */ jsx("input", {
						type: "email",
						placeholder: "Email",
						value: email,
						onChange: (e) => setEmail(e.target.value),
						className: "w-full border border-border bg-panel p-2 font-mono",
						required: true
					}),
					/* @__PURE__ */ jsx("input", {
						type: "password",
						placeholder: "Password",
						value: password,
						onChange: (e) => setPassword(e.target.value),
						className: "w-full border border-border bg-panel p-2 font-mono",
						required: true
					}),
					/* @__PURE__ */ jsx("button", {
						type: "submit",
						className: "bg-cyan px-4 py-2 font-pixel text-[10px] uppercase",
						children: "Login"
					})
				]
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-4 text-xs text-muted-foreground",
				children: "Use the admin email/password you set up in Firebase."
			})
		]
	});
	const renderForm = () => {
		if (activeTab === "news") return /* @__PURE__ */ jsx(NewsForm, {
			data: formData,
			onChange: setFormData,
			editing: !!editingId
		});
		if (activeTab === "music") return /* @__PURE__ */ jsx(MusicForm, {
			data: formData,
			onChange: setFormData,
			editing: !!editingId
		});
		if (activeTab === "games") return /* @__PURE__ */ jsx(GamesForm, {
			data: formData,
			onChange: setFormData,
			editing: !!editingId
		});
		if (activeTab === "voice") return /* @__PURE__ */ jsx(VoiceForm, {
			data: formData,
			onChange: setFormData,
			editing: !!editingId
		});
		return null;
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "mx-auto max-w-4xl p-10",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ jsx("h1", {
					className: "font-pixel text-2xl",
					children: "📝 Content Manager"
				}), /* @__PURE__ */ jsx("button", {
					onClick: handleLogout,
					className: "border border-red px-3 py-1 font-pixel text-[8px] uppercase hover:border-red hover:text-red",
					children: "Logout"
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mt-6 flex gap-2 border-b border-border",
				children: [
					"news",
					"music",
					"games",
					"voice"
				].map((tab) => /* @__PURE__ */ jsx("button", {
					onClick: () => setActiveTab(tab),
					className: `px-4 py-2 font-pixel text-[10px] uppercase ${activeTab === tab ? "border-b-2 border-magenta text-magenta" : "text-muted-foreground hover:text-foreground"}`,
					children: tab
				}, tab))
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-6 rounded border border-border bg-panel p-6",
				children: [/* @__PURE__ */ jsxs("h2", {
					className: "font-pixel text-sm",
					children: [
						editingId ? "✏️ Edit" : "➕ Add New",
						" ",
						activeTab
					]
				}), /* @__PURE__ */ jsxs("form", {
					onSubmit: handleSubmit,
					className: "mt-4 space-y-3",
					children: [renderForm(), /* @__PURE__ */ jsxs("div", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ jsx("button", {
							type: "submit",
							className: "bg-magenta px-4 py-2 font-pixel text-[10px] uppercase text-primary-foreground",
							children: editingId ? "Update" : "Create"
						}), editingId && /* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: handleCancel,
							className: "border border-border bg-panel-2 px-4 py-2 font-pixel text-[10px] uppercase",
							children: "Cancel"
						})]
					})]
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mt-6 space-y-2",
				children: loading ? /* @__PURE__ */ jsx("p", {
					className: "crt text-center",
					children: "Loading..."
				}) : items.length === 0 ? /* @__PURE__ */ jsx("p", {
					className: "crt text-center text-muted-foreground",
					children: "No items found"
				}) : activeTab === "music" ? /* @__PURE__ */ jsx(MusicAdminList, {
					items,
					moveItem,
					loadContent,
					handleEdit,
					handleDelete
				}) : items.map((item, idx) => /* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between border border-border bg-panel-2 p-3",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex-1",
						children: [/* @__PURE__ */ jsx("div", {
							className: "font-pixel text-[10px] uppercase text-muted-foreground",
							children: item.data.title || "Untitled"
						}), /* @__PURE__ */ jsxs("div", {
							className: "crt text-sm text-muted-foreground flex items-center gap-3",
							children: [item.data.body || item.data.album || item.data.game || item.data.role || "", item.data.likes !== void 0 && /* @__PURE__ */ jsxs("span", {
								className: "text-red",
								children: ["❤️ ", item.data.likes]
							})]
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex gap-2",
						children: [
							/* @__PURE__ */ jsx("button", {
								onClick: () => moveItem(idx, "up"),
								className: "border border-border px-2 py-1 font-pixel text-[8px] uppercase hover:border-cyan hover:text-cyan",
								children: "↑"
							}),
							/* @__PURE__ */ jsx("button", {
								onClick: () => moveItem(idx, "down"),
								className: "border border-border px-2 py-1 font-pixel text-[8px] uppercase hover:border-cyan hover:text-cyan",
								children: "↓"
							}),
							/* @__PURE__ */ jsx("button", {
								onClick: () => handleEdit(item),
								className: "border border-border px-3 py-1 font-pixel text-[8px] uppercase hover:border-cyan hover:text-cyan",
								children: "Edit"
							}),
							/* @__PURE__ */ jsx("button", {
								onClick: () => handleDelete(item.id),
								className: "border border-red px-3 py-1 font-pixel text-[8px] uppercase hover:border-red hover:text-red",
								children: "Delete"
							})
						]
					})]
				}, item.id))
			})
		]
	});
}
function getAlbumColor(album) {
	let hash = 0;
	for (let i = 0; i < album.length; i++) hash = album.charCodeAt(i) + ((hash << 5) - hash);
	return `hsl(${Math.abs(hash % 360)}, ${60 + hash % 30}%, ${20 + hash % 15}%)`;
}
function NewsForm({ data, onChange, editing }) {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("input", {
			type: "text",
			placeholder: "Title",
			value: data.title || "",
			onChange: (e) => onChange({
				...data,
				title: e.target.value
			}),
			className: "w-full border border-border bg-panel-2 p-2"
		}),
		/* @__PURE__ */ jsx("textarea", {
			placeholder: "Body",
			value: data.body || "",
			onChange: (e) => onChange({
				...data,
				body: e.target.value
			}),
			rows: 4,
			className: "w-full border border-border bg-panel-2 p-2"
		}),
		/* @__PURE__ */ jsxs("select", {
			value: data.tag || "site",
			onChange: (e) => onChange({
				...data,
				tag: e.target.value
			}),
			className: "w-full border border-border bg-panel-2 p-2",
			children: [
				/* @__PURE__ */ jsx("option", {
					value: "site",
					children: "Site"
				}),
				/* @__PURE__ */ jsx("option", {
					value: "game",
					children: "Game"
				}),
				/* @__PURE__ */ jsx("option", {
					value: "music",
					children: "Music"
				}),
				/* @__PURE__ */ jsx("option", {
					value: "voice",
					children: "Voice"
				}),
				/* @__PURE__ */ jsx("option", {
					value: "news",
					children: "News"
				})
			]
		}),
		/* @__PURE__ */ jsx("input", {
			type: "text",
			placeholder: "Picture URL (optional)",
			value: data.picture || "",
			onChange: (e) => onChange({
				...data,
				picture: e.target.value
			}),
			className: "w-full border border-border bg-panel-2 p-2"
		}),
		/* @__PURE__ */ jsx("input", {
			type: "text",
			placeholder: "Date (e.g., 2026-07-06)",
			value: data.date || (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
			onChange: (e) => onChange({
				...data,
				date: e.target.value
			}),
			className: "w-full border border-border bg-panel-2 p-2"
		})
	] });
}
function MusicForm({ data, onChange, editing }) {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("input", {
			type: "text",
			placeholder: "Title",
			value: data.title || "",
			onChange: (e) => onChange({
				...data,
				title: e.target.value
			}),
			className: "w-full border border-border bg-panel-2 p-2"
		}),
		/* @__PURE__ */ jsx("input", {
			type: "text",
			placeholder: "Album",
			value: data.album || "",
			onChange: (e) => onChange({
				...data,
				album: e.target.value
			}),
			className: "w-full border border-border bg-panel-2 p-2"
		}),
		/* @__PURE__ */ jsx("input", {
			type: "text",
			placeholder: "Duration (e.g., 3:42)",
			value: data.duration || "",
			onChange: (e) => onChange({
				...data,
				duration: e.target.value
			}),
			className: "w-full border border-border bg-panel-2 p-2"
		}),
		/* @__PURE__ */ jsx("textarea", {
			placeholder: "Description (optional)",
			value: data.description || "",
			onChange: (e) => onChange({
				...data,
				description: e.target.value
			}),
			rows: 3,
			className: "w-full border border-border bg-panel-2 p-2"
		}),
		/* @__PURE__ */ jsx("input", {
			type: "text",
			placeholder: "Playlist (e.g., Games, Originals)",
			value: data.playlist || "",
			onChange: (e) => onChange({
				...data,
				playlist: e.target.value
			}),
			className: "w-full border border-border bg-panel-2 p-2"
		}),
		/* @__PURE__ */ jsx("input", {
			type: "text",
			placeholder: "Audio URL (optional)",
			value: data.src || "",
			onChange: (e) => onChange({
				...data,
				src: e.target.value
			}),
			className: "w-full border border-border bg-panel-2 p-2"
		}),
		/* @__PURE__ */ jsx("input", {
			type: "text",
			placeholder: "Cover URL (optional)",
			value: data.cover || "",
			onChange: (e) => onChange({
				...data,
				cover: e.target.value
			}),
			className: "w-full border border-border bg-panel-2 p-2"
		})
	] });
}
function MusicAdminList({ items, moveItem, handleEdit, handleDelete }) {
	const [playlistOrder, setPlaylistOrder] = useState([]);
	const groups = useMemo(() => {
		const result = {};
		items.forEach((item) => {
			const playlist = item.data.playlist || "General";
			if (!result[playlist]) result[playlist] = [];
			result[playlist].push(item);
		});
		return result;
	}, [items]);
	useEffect(() => {
		getMusicPlaylistOrder().then((order) => {
			const allPlaylists = Object.keys(groups);
			setPlaylistOrder([...new Set([...order, ...allPlaylists])]);
		});
	}, [groups]);
	const movePlaylist = (playlistName, direction) => {
		setPlaylistOrder((prevOrder) => {
			const currentIndex = prevOrder.indexOf(playlistName);
			if (currentIndex === -1) return prevOrder;
			const newOrder = [...prevOrder];
			if (direction === "up") if (currentIndex === 0) {
				const [first] = newOrder.splice(0, 1);
				newOrder.push(first);
			} else [newOrder[currentIndex], newOrder[currentIndex - 1]] = [newOrder[currentIndex - 1], newOrder[currentIndex]];
			else if (currentIndex === newOrder.length - 1) {
				const [last] = newOrder.splice(-1, 1);
				newOrder.unshift(last);
			} else [newOrder[currentIndex], newOrder[currentIndex + 1]] = [newOrder[currentIndex + 1], newOrder[currentIndex]];
			setMusicPlaylistOrder(newOrder).catch(console.error);
			return newOrder;
		});
	};
	return /* @__PURE__ */ jsx("div", {
		className: "space-y-4",
		children: playlistOrder.map((playlistName) => {
			const groupItems = groups[playlistName] || [];
			if (groupItems.length === 0) return null;
			const albumMap = /* @__PURE__ */ new Map();
			groupItems.forEach((item) => {
				const album = item.data.album || "[Single]";
				if (!albumMap.has(album)) albumMap.set(album, []);
				albumMap.get(album).push(item);
			});
			const albumGroups = [];
			const seen = /* @__PURE__ */ new Set();
			groupItems.forEach((item) => {
				const album = item.data.album || "[Single]";
				if (!seen.has(album)) {
					seen.add(album);
					albumGroups.push([album, albumMap.get(album)]);
				}
			});
			return /* @__PURE__ */ jsxs("div", {
				className: "border border-border bg-panel/30 p-3",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between mb-2",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "font-pixel text-sm text-muted-foreground uppercase",
						children: playlistName
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ jsx("button", {
							onClick: () => movePlaylist(playlistName, "up"),
							className: "border border-border px-2 py-1 font-pixel text-[8px] uppercase hover:border-cyan hover:text-cyan",
							children: "↑"
						}), /* @__PURE__ */ jsx("button", {
							onClick: () => movePlaylist(playlistName, "down"),
							className: "border border-border px-2 py-1 font-pixel text-[8px] uppercase hover:border-cyan hover:text-cyan",
							children: "↓"
						})]
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "space-y-2",
					children: albumGroups.map(([album, albumItems]) => {
						const bgColor = album === "[Single]" || albumItems.length === 1 ? "rgba(10, 10, 10, 0.75)" : getAlbumColor(album);
						return albumItems.map((item) => {
							const globalIndex = items.indexOf(item);
							return /* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between border border-border p-2",
								style: { backgroundColor: bgColor || void 0 },
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex-1",
									children: [/* @__PURE__ */ jsx("div", {
										className: "font-pixel text-[10px] uppercase text-muted-foreground",
										children: item.data.title || "Untitled"
									}), /* @__PURE__ */ jsx("div", {
										className: "crt text-sm text-muted-foreground",
										children: item.data.album || ""
									})]
								}), /* @__PURE__ */ jsxs("div", {
									className: "flex gap-2",
									children: [
										/* @__PURE__ */ jsx("button", {
											onClick: () => moveItem(globalIndex, "up"),
											className: "border border-border px-2 py-1 font-pixel text-[8px] uppercase hover:border-cyan hover:text-cyan",
											children: "↑"
										}),
										/* @__PURE__ */ jsx("button", {
											onClick: () => moveItem(globalIndex, "down"),
											className: "border border-border px-2 py-1 font-pixel text-[8px] uppercase hover:border-cyan hover:text-cyan",
											children: "↓"
										}),
										/* @__PURE__ */ jsx("button", {
											onClick: () => handleEdit(item),
											className: "border border-border px-3 py-1 font-pixel text-[8px] uppercase hover:border-cyan hover:text-cyan",
											children: "Edit"
										}),
										/* @__PURE__ */ jsx("button", {
											onClick: () => handleDelete(item.id),
											className: "border border-red px-3 py-1 font-pixel text-[8px] uppercase hover:border-red hover:text-red",
											children: "Delete"
										})
									]
								})]
							}, item.id);
						});
					})
				})]
			}, playlistName);
		})
	});
}
function GamesForm({ data, onChange, editing }) {
	const imagesString = data.images ? data.images.join("\n") : "";
	const handleImagesChange = (e) => {
		const arr = e.target.value.split("\n").map((s) => s.trim()).filter(Boolean);
		onChange({
			...data,
			images: arr.length ? arr : void 0
		});
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("input", {
			type: "text",
			placeholder: "Title",
			value: data.title || "",
			onChange: (e) => onChange({
				...data,
				title: e.target.value
			}),
			className: "w-full border border-border bg-panel-2 p-2"
		}),
		/* @__PURE__ */ jsx("input", {
			type: "text",
			placeholder: "Game",
			value: data.game || "",
			onChange: (e) => onChange({
				...data,
				game: e.target.value
			}),
			className: "w-full border border-border bg-panel-2 p-2"
		}),
		/* @__PURE__ */ jsx("textarea", {
			placeholder: "Description",
			value: data.description || "",
			onChange: (e) => onChange({
				...data,
				description: e.target.value
			}),
			rows: 3,
			className: "w-full border border-border bg-panel-2 p-2"
		}),
		/* @__PURE__ */ jsx("input", {
			type: "text",
			placeholder: "Palette (CSS gradient)",
			value: data.palette || "",
			onChange: (e) => onChange({
				...data,
				palette: e.target.value
			}),
			className: "w-full border border-border bg-panel-2 p-2"
		}),
		/* @__PURE__ */ jsx("input", {
			type: "text",
			placeholder: "Single image URL (optional, legacy)",
			value: data.src || "",
			onChange: (e) => onChange({
				...data,
				src: e.target.value
			}),
			className: "w-full border border-border bg-panel-2 p-2"
		}),
		/* @__PURE__ */ jsx("textarea", {
			placeholder: "Image URLs (one per line)",
			value: imagesString,
			onChange: handleImagesChange,
			rows: 3,
			className: "w-full border border-border bg-panel-2 p-2 font-mono text-sm"
		}),
		/* @__PURE__ */ jsx("div", {
			className: "text-xs text-muted-foreground",
			children: "Paste one image URL per line. Leave empty to use the single image above."
		})
	] });
}
function VoiceForm({ data, onChange, editing }) {
	const type = data.type || "video";
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("select", {
			value: type,
			onChange: (e) => onChange({
				...data,
				type: e.target.value
			}),
			className: "w-full border border-border bg-panel-2 p-2",
			children: [/* @__PURE__ */ jsx("option", {
				value: "video",
				children: "Video / Reel"
			}), /* @__PURE__ */ jsx("option", {
				value: "clip",
				children: "Audio Clip"
			})]
		}),
		/* @__PURE__ */ jsx("input", {
			type: "text",
			placeholder: "Title",
			value: data.title || "",
			onChange: (e) => onChange({
				...data,
				title: e.target.value
			}),
			className: "w-full border border-border bg-panel-2 p-2"
		}),
		type === "video" ? /* @__PURE__ */ jsxs(Fragment, { children: [
			/* @__PURE__ */ jsx("input", {
				type: "text",
				placeholder: "Role",
				value: data.role || "",
				onChange: (e) => onChange({
					...data,
					role: e.target.value
				}),
				className: "w-full border border-border bg-panel-2 p-2"
			}),
			/* @__PURE__ */ jsx("input", {
				type: "text",
				placeholder: "YouTube ID",
				value: data.youtubeId || "",
				onChange: (e) => onChange({
					...data,
					youtubeId: e.target.value
				}),
				className: "w-full border border-border bg-panel-2 p-2"
			}),
			/* @__PURE__ */ jsx("input", {
				type: "text",
				placeholder: "Cover URL (optional)",
				value: data.cover || "",
				onChange: (e) => onChange({
					...data,
					cover: e.target.value
				}),
				className: "w-full border border-border bg-panel-2 p-2"
			})
		] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
			/* @__PURE__ */ jsx("input", {
				type: "text",
				placeholder: "Character",
				value: data.character || "",
				onChange: (e) => onChange({
					...data,
					character: e.target.value
				}),
				className: "w-full border border-border bg-panel-2 p-2"
			}),
			/* @__PURE__ */ jsx("input", {
				type: "text",
				placeholder: "Note",
				value: data.note || "",
				onChange: (e) => onChange({
					...data,
					note: e.target.value
				}),
				className: "w-full border border-border bg-panel-2 p-2"
			}),
			/* @__PURE__ */ jsx("input", {
				type: "text",
				placeholder: "Audio URL (optional)",
				value: data.src || "",
				onChange: (e) => onChange({
					...data,
					src: e.target.value
				}),
				className: "w-full border border-border bg-panel-2 p-2"
			})
		] })
	] });
}
//#endregion
export { Admin as component };
