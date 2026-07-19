import { a as React, p as jsx } from "./chunk-EPOLDU6W-CkoexLYk.js";
import { M as MatrixCanvas } from "./MatrixCanvas-gBTz1CWi.js";

const steps = [
  "Perfil localizado com sucesso",
  "Curtidas e seguidores sincronizados",
  "Conversas e interações organizadas",
  "Relatório pronto para desbloqueio",
];

const fakeProfiles = [
  { name: "Mariana Alves", user: "@ma.alves", status: "Online agora", color: "from-pink-500 to-purple-500" },
  { name: "Lucas Ferreira", user: "@lucas.f", status: "12 novas curtidas", color: "from-purple-500 to-blue-500" },
  { name: "Camila Rocha", user: "@cami.rocha", status: "3 directs recentes", color: "from-fuchsia-500 to-rose-500" },
];

const feedItems = [
  ["Curtiu uma publicação", "há 2 min", "Foto marcada como favorita"],
  ["Começou a seguir", "há 8 min", "Novo perfil adicionado à rede"],
  ["Comentou em reels", "há 15 min", "Comentário detectado em conteúdo público"],
  ["Visualizou stories", "há 21 min", "Sequência de stories acompanhada"],
];

const chats = [
  ["Contato frequente", "Você viu isso?", "Agora"],
  ["Perfil suspeito", "chama no direct depois", "4 min"],
  ["Melhor amigo", "kkkk combinado", "18 min"],
  ["Novo contato", "oi, tudo bem?", "1 h"],
];

function routeTo(path) {
  const params = window.location.search || "";
  window.location.href = `${path}${params}`;
}

function Shell({ children, eyebrow = "STALKEIA" }) {
  return jsx.jsxs("main", {
    className: "relative min-h-screen overflow-hidden bg-[#040607] text-white",
    children: [
      jsx.jsx(MatrixCanvas, { opacity: 0.18, text: "STALKEIA" }),
      jsx.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_top,#4a37b633,transparent_45%),linear-gradient(180deg,rgba(4,6,7,.25),#040607_70%)]" }),
      jsx.jsxs("div", {
        className: "relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col px-5 py-6",
        children: [
          jsx.jsxs("header", {
            className: "mb-8 flex items-center justify-between",
            children: [
              jsx.jsxs("div", { className: "flex items-center gap-3", children: [jsx.jsx("div", { className: "h-10 w-10 rounded-2xl bg-gradient-to-br from-purple-500 to-fuchsia-500 shadow-lg shadow-purple-900/40" }), jsx.jsx("strong", { className: "text-lg tracking-wide", children: eyebrow })] }),
              jsx.jsx("span", { className: "rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-purple-100", children: "Acesso seguro" }),
            ],
          }),
          children,
        ],
      }),
    ],
  });
}

function PrimaryButton({ children, to = "/feed" }) {
  return jsx.jsx("button", {
    onClick: () => routeTo(to),
    className: "w-full rounded-2xl bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 px-6 py-4 text-base font-black uppercase tracking-wide text-white shadow-xl shadow-purple-950/40 transition hover:scale-[1.01] active:scale-[.99]",
    children,
  });
}

function ProgressCard() {
  return jsx.jsx("div", {
    className: "rounded-3xl border border-white/10 bg-white/[.06] p-5 backdrop-blur-xl",
    children: jsx.jsx("div", {
      className: "space-y-3",
      children: steps.map((step, index) => jsx.jsxs("div", { className: "flex items-center gap-3 rounded-2xl bg-black/25 p-3", children: [jsx.jsx("span", { className: "flex h-7 w-7 items-center justify-center rounded-full bg-emerald-400 text-sm font-black text-black", children: "✓" }), jsx.jsx("span", { className: "text-sm text-gray-100", children: step })] }, index)),
    }),
  });
}

function PhonePreview({ mode = "feed" }) {
  const list = mode === "direct" ? chats : feedItems;
  return jsx.jsxs("div", {
    className: "mx-auto w-full max-w-[330px] rounded-[2rem] border border-white/15 bg-black p-3 shadow-2xl shadow-purple-950/40",
    children: [
      jsx.jsx("div", { className: "mx-auto mb-3 h-1.5 w-20 rounded-full bg-white/20" }),
      jsx.jsxs("div", {
        className: "rounded-[1.5rem] bg-[#0d1016] p-4",
        children: [
          jsx.jsxs("div", { className: "mb-4 flex items-center justify-between", children: [jsx.jsx("strong", { children: mode === "direct" ? "Direct" : "Atividades" }), jsx.jsx("span", { className: "text-xs text-emerald-300", children: "ao vivo" })] }),
          jsx.jsx("div", { className: "space-y-3", children: list.map((item, index) => jsx.jsxs("div", { className: "rounded-2xl bg-white/[.06] p-3", children: [jsx.jsxs("div", { className: "flex items-center justify-between gap-3", children: [jsx.jsx("span", { className: "font-semibold", children: item[0] }), jsx.jsx("small", { className: "text-purple-200", children: item[1] })] }), jsx.jsx("p", { className: "mt-1 text-xs text-gray-400", children: item[2] })] }, index)) }),
        ],
      }),
    ],
  });
}

export function HomePage() {
  const [user, setUser] = React.useState("");
  return jsx.jsx(Shell, {
    children: jsx.jsxs("section", {
      className: "grid flex-1 items-center gap-8 md:grid-cols-[1.05fr_.95fr]",
      children: [
        jsx.jsxs("div", {
          children: [
            jsx.jsx("div", { className: "mb-4 inline-flex rounded-full border border-purple-400/30 bg-purple-500/15 px-4 py-2 text-sm font-semibold text-purple-100", children: "Análise inteligente de Instagram" }),
            jsx.jsxs("h1", { className: "text-4xl font-black leading-tight tracking-tight md:text-6xl", children: ["Descubra atividades e sinais de qualquer perfil ", jsx.jsx("span", { className: "bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent", children: "em poucos segundos" })] }),
            jsx.jsx("p", { className: "mt-5 max-w-xl text-lg leading-relaxed text-gray-300", children: "Veja curtidas, seguidores, directs e interações organizadas em uma experiência simples, rápida e otimizada para celular." }),
            jsx.jsxs("div", { className: "mt-7 rounded-3xl border border-white/10 bg-white/[.06] p-4 backdrop-blur-xl", children: [jsx.jsx("label", { className: "mb-2 block text-sm font-semibold text-gray-200", children: "Usuário do Instagram" }), jsx.jsx("input", { value: user, onChange: (event) => setUser(event.target.value), placeholder: "@usuario", className: "mb-3 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-4 text-white outline-none ring-purple-400/40 placeholder:text-gray-500 focus:ring-4" }), jsx.jsx(PrimaryButton, { to: `/feed${user ? `?perfil=${encodeURIComponent(user)}` : ""}`, children: "Iniciar análise agora" })] }),
          ],
        }),
        jsx.jsxs("div", { className: "space-y-5", children: [jsx.jsx(PhonePreview, {}), jsx.jsx(ProgressCard, {})] }),
      ],
    }),
  });
}

export function FeedPage() {
  return jsx.jsx(Shell, { children: jsx.jsxs("section", { className: "grid flex-1 items-center gap-8 md:grid-cols-2", children: [jsx.jsxs("div", { children: [jsx.jsx("h1", { className: "text-4xl font-black", children: "Feed e atividades recentes" }), jsx.jsx("p", { className: "mt-4 text-gray-300", children: "Acompanhe as principais interações encontradas no perfil analisado, com uma linha do tempo clara e fácil de entender." }), jsx.jsx("div", { className: "mt-6", children: jsx.jsx(ProgressCard, {}) }), jsx.jsx("div", { className: "mt-6", children: jsx.jsx(PrimaryButton, { to: "/direct", children: "Ver mensagens do Direct" }) })] }), jsx.jsx(PhonePreview, {})] }) });
}

export function DirectPage() {
  return jsx.jsx(Shell, { children: jsx.jsxs("section", { className: "grid flex-1 items-center gap-8 md:grid-cols-2", children: [jsx.jsx(PhonePreview, { mode: "direct" }), jsx.jsxs("div", { children: [jsx.jsx("h1", { className: "text-4xl font-black", children: "Mensagens e contatos frequentes" }), jsx.jsx("p", { className: "mt-4 text-gray-300", children: "Visualize uma prévia organizada de conversas, contatos recorrentes e alertas encontrados durante a análise." }), jsx.jsx("div", { className: "mt-6 grid gap-3", children: fakeProfiles.map((profile) => jsx.jsxs("div", { className: "flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[.06] p-4", children: [jsx.jsx("div", { className: `h-12 w-12 rounded-full bg-gradient-to-br ${profile.color}` }), jsx.jsxs("div", { children: [jsx.jsx("strong", { children: profile.name }), jsx.jsx("p", { className: "text-sm text-gray-400", children: `${profile.user} • ${profile.status}` })] })] }, profile.user)) }), jsx.jsx("div", { className: "mt-6", children: jsx.jsx(PrimaryButton, { to: "/cta", children: "Desbloquear relatório completo" }) })] })] }) });
}

export function ChatPage() {
  const chatId = window.location.pathname.split("/").filter(Boolean).pop() || "1";
  return jsx.jsx(Shell, { children: jsx.jsxs("section", { className: "mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center", children: [jsx.jsx("h1", { className: "text-4xl font-black", children: `Conversa #${chatId}` }), jsx.jsx("p", { className: "mt-3 text-gray-300", children: "Prévia do chat localizado na análise. Para ver todo o conteúdo, desbloqueie o relatório completo." }), jsx.jsx("div", { className: "mt-6 space-y-3 rounded-3xl border border-white/10 bg-white/[.06] p-5", children: chats.map((chat, index) => jsx.jsxs("div", { className: `max-w-[85%] rounded-2xl p-4 ${index % 2 ? "ml-auto bg-purple-600" : "bg-black/35"}`, children: [jsx.jsx("p", { children: chat[1] }), jsx.jsx("small", { className: "mt-1 block text-white/60", children: chat[2] })] }, index)) }), jsx.jsx("div", { className: "mt-6", children: jsx.jsx(PrimaryButton, { to: "/cta", children: "Ver conversa completa" }) })] }) });
}

export function CtaPage() {
  return jsx.jsx(Shell, { children: jsx.jsxs("section", { className: "mx-auto grid w-full max-w-4xl flex-1 items-center gap-8 md:grid-cols-[.9fr_1.1fr]", children: [jsx.jsx(ProgressCard, {}), jsx.jsxs("div", { children: [jsx.jsx("div", { className: "mb-4 inline-flex rounded-full bg-emerald-400 px-4 py-2 text-sm font-black text-black", children: "Relatório encontrado" }), jsx.jsx("h1", { className: "text-4xl font-black md:text-5xl", children: "Seu acesso VIP está pronto" }), jsx.jsx("p", { className: "mt-4 text-lg text-gray-300", children: "Desbloqueie o relatório completo para visualizar detalhes das atividades, contatos e interações identificadas." }), jsx.jsx("ul", { className: "my-6 grid gap-3 text-gray-200", children: ["Curtidas e seguidores recentes", "Prévia de directs e contatos", "Alertas de atividade em tempo real"].map((item) => jsx.jsxs("li", { className: "flex items-center gap-3", children: [jsx.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-emerald-300" }), item] }, item)) }), jsx.jsx(PrimaryButton, { to: "https://stalkeia.website/", children: "Garantir acesso agora" })] })] }) });
}

export function WhitePage() {
  return jsx.jsx("main", { className: "min-h-screen bg-white" });
}

export function StartPage() { return jsx.jsx(HomePage, {}); }
export function ResultsPage() { return jsx.jsx(CtaPage, {}); }
export function BackRedirectPage() { return jsx.jsx(CtaPage, {}); }
export function NotificationsPage() { return jsx.jsx(FeedPage, {}); }

export function makeMeta(title, description = "STALKEIA - análise de atividades e interações do Instagram.") {
  return [
    { title },
    { name: "description", content: description },
  ];
}
