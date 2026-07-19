import { p as jsx } from "./chunk-EPOLDU6W-CkoexLYk.js";
export default function BlockedPopup({ onClose }) {
  return jsx.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-5", children: [jsx.jsxs("div", { className: "max-w-sm rounded-3xl bg-[#10131a] p-6 text-center text-white shadow-2xl", children: [jsx.jsx("h2", { className: "text-xl font-bold", children: "Conteúdo bloqueado" }), jsx.jsx("p", { className: "mt-2 text-sm text-gray-300", children: "Desbloqueie o relatório para continuar vendo os detalhes." }), jsx.jsx("button", { onClick: onClose, className: "mt-5 rounded-xl bg-purple-600 px-5 py-3 font-bold", children: "Entendi" })] })] });
}
