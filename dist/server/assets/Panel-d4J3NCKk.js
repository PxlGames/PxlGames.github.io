import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/site/Panel.tsx
var accentBg = {
	magenta: "bg-magenta text-primary-foreground",
	cyan: "bg-cyan text-primary-foreground",
	gold: "bg-gold text-primary-foreground",
	lime: "bg-lime text-primary-foreground",
	violet: "bg-violet text-primary-foreground"
};
/** Windowed panel with SNES title bar. */
function Panel({ title, accent = "magenta", children, className = "" }) {
	return /* @__PURE__ */ jsxs("section", {
		className: `panel-inset ${className}`,
		children: [title && /* @__PURE__ */ jsxs("header", {
			className: `flex items-center justify-between border-b border-border/60 px-3 py-2 ${accentBg[accent]}`,
			children: [/* @__PURE__ */ jsxs("h3", {
				className: "font-pixel text-[10px] uppercase tracking-widest",
				children: ["▸ ", title]
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex gap-1",
				children: [
					/* @__PURE__ */ jsx("span", { className: "h-2 w-2 bg-background/60" }),
					/* @__PURE__ */ jsx("span", { className: "h-2 w-2 bg-background/60" }),
					/* @__PURE__ */ jsx("span", { className: "h-2 w-2 bg-background/60" })
				]
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "p-4 md:p-5",
			children
		})]
	});
}
//#endregion
export { Panel as t };
