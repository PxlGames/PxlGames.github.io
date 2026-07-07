import { n as useLikes } from "./LikesProvider-DKQ1EBpP.js";
import { d as incrementLikes, n as decrementLikes } from "./content-B7CY0fH7.js";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/site/LikeButton.tsx
function LikeButton({ itemId, likes, onToggle, className = "" }) {
	const { likedIds, addLiked, removeLiked } = useLikes();
	const [loading, setLoading] = useState(false);
	const isLiked = likedIds.has(itemId);
	const handleToggle = async (e) => {
		e.stopPropagation();
		if (loading) return;
		setLoading(true);
		try {
			let newCount;
			if (isLiked) {
				newCount = await decrementLikes(itemId);
				removeLiked(itemId);
			} else {
				newCount = await incrementLikes(itemId);
				addLiked(itemId);
			}
			onToggle?.(itemId, newCount);
		} catch (error) {
			console.error("Failed to toggle like:", error);
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ jsxs("button", {
		onClick: handleToggle,
		disabled: loading,
		className: `flex items-center gap-1.5 font-pixel text-sm uppercase transition-colors px-3 py-1.5 rounded border ${isLiked ? "text-red border-red bg-red/10 hover:bg-red/20" : "text-muted-foreground border-muted-foreground/20 hover:text-red hover:border-red hover:bg-red/5"} ${className}`,
		children: [/* @__PURE__ */ jsx("span", { children: isLiked ? "❤️" : "🤍" }), /* @__PURE__ */ jsx("span", { children: likes })]
	});
}
//#endregion
export { LikeButton as t };
