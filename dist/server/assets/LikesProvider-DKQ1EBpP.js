import { createContext, useContext, useEffect, useState } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/site/LikesProvider.tsx
var LikesContext = createContext(null);
function LikesProvider({ children }) {
	const [likedIds, setLikedIds] = useState(/* @__PURE__ */ new Set());
	useEffect(() => {
		const stored = localStorage.getItem("pxldev_likes");
		if (stored) try {
			const ids = JSON.parse(stored);
			setLikedIds(new Set(ids));
		} catch (e) {}
	}, []);
	const addLiked = (id) => {
		setLikedIds((prev) => {
			const newSet = new Set(prev);
			newSet.add(id);
			localStorage.setItem("pxldev_likes", JSON.stringify([...newSet]));
			return newSet;
		});
	};
	const removeLiked = (id) => {
		setLikedIds((prev) => {
			const newSet = new Set(prev);
			newSet.delete(id);
			localStorage.setItem("pxldev_likes", JSON.stringify([...newSet]));
			return newSet;
		});
	};
	return /* @__PURE__ */ jsx(LikesContext.Provider, {
		value: {
			likedIds,
			addLiked,
			removeLiked
		},
		children
	});
}
function useLikes() {
	const context = useContext(LikesContext);
	if (!context) throw new Error("useLikes must be used within LikesProvider");
	return context;
}
//#endregion
export { useLikes as n, LikesProvider as t };
