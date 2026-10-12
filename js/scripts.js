// Portuguese translations. English is the default text written in index.html,
// so to add a new translatable element give it a data-i18n key and add the key here.
const translations = {
    pt: {
        "nav.about": "Sobre mim",
        "nav.skills": "Competências",
        "nav.projects": "Projetos",
        "nav.experience": "Percurso",
        "nav.contact": "Contacto",

        "hero.available": "Disponível para funções de web developer júnior · Reino Unido, Portugal e remoto",
        "hero.greeting": "Olá, sou o",
        "hero.role": "Web developer full-stack.",
        "hero.intro": "Licenciado em Ciências da Computação (BSc Hons, Leeds Beckett University). Desenvolvo aplicações web responsivas e centradas no utilizador com JavaScript, React, Next.js, PHP e Laravel.",
        "hero.cv": "Descarregar CV",
        "hero.contact": "Entrar em contacto",

        "facts.degree": "Licenciatura",
        "facts.focus": "Foco",
        "facts.focusValue": "Desenvolvimento web full-stack",
        "facts.languages": "Idiomas",
        "facts.languagesValue": "Português e Inglês (fluente)",
        "facts.location": "Localização",

        "about.title": "Sobre mim",
        "about.p1": "Sou um web developer português que se mudou para o Reino Unido para estudar Ciências da Computação na Leeds Beckett University, com foco em desenvolvimento web full-stack. Obtive classificações de primeira classe nos módulos de desenvolvimento web.",
        "about.p2": "Gosto de todo o percurso de uma aplicação web: desenhar interfaces limpas e acessíveis, construir o back-end e a base de dados, e garantir que tudo é rápido e responsivo. No projeto final comparei Next.js e Laravel, construindo o mesmo website completo com cada um.",
        "about.p3": "Procuro agora integrar uma equipa onde possa desenvolver produtos reais, aprender com engenheiros experientes e continuar a crescer como developer.",
        "about.s1t": "Full-stack",
        "about.s1d": "Front-end em React/Next.js, back-end em PHP/Laravel ou Node.js, dados em MySQL.",
        "about.s2t": "Foco no utilizador",
        "about.s2d": "Layouts responsivos e acessíveis que funcionam em qualquer ecrã.",
        "about.s3t": "Trabalho em equipa",
        "about.s3d": "Experiência com Git e Agile/Scrum em projetos universitários.",

        "skills.title": "Competências",
        "skills.data": "Bases de dados",
        "skills.tools": "Ferramentas e outros",

        "projects.title": "Projetos",
        "projects.hdk": "Projeto em destaque · Full-stack",
        "projects.hdt": "HelpDesk Pro: service desk de IT",
        "projects.hdd": "Um sistema completo de tickets para equipas de suporte de IT. Os colaboradores abrem tickets e recebem ajuda de uma base de conhecimento que sugere soluções enquanto escrevem; os técnicos gerem a fila com prazos, notas internas e respostas guardadas; os administradores gerem utilizadores e relatórios.",
        "projects.hd1": "Permissões por perfil: colaboradores, técnicos e administradores",
        "projects.hd2": "Notificações por email e na aplicação, anexos e histórico completo de atividade",
        "projects.hd3": "Relatórios, exportação CSV e uma API REST com autenticação por token",
        "projects.hd4": "Mais de 90 testes automáticos e reforço de segurança (CSP, limites de pedidos)",
        "projects.p1k": "Projeto final · Licenciatura",
        "projects.p1t": "Next.js vs Laravel: um website, duas stacks",
        "projects.p1d": "Construí o mesmo website completo duas vezes, uma com Next.js (React) e outra com Laravel (PHP), e comparei-os em experiência de desenvolvimento, desempenho, estrutura e facilidade de manutenção.",
        "projects.p2k": "Projeto pessoal",
        "projects.p2t": "Este portfólio",
        "projects.p2d": "Um site rápido, responsivo e sem dependências, com alternância entre Inglês e Português, temas claro e escuro e marcação acessível. Alojado no GitHub Pages.",
        "projects.code": "Ver código →",

        "exp.title": "Percurso",
        "exp.uniT": "Licenciatura (BSc Hons) em Ciências da Computação, 2:1",
        "exp.uni1": "Forte componente prática em desenvolvimento web full-stack, engenharia de software e redes.",
        "exp.uni2": "Classificações de primeira classe nos módulos de desenvolvimento web.",
        "exp.uni3": "Projeto final: comparação entre Next.js e Laravel através da construção de um website completo com cada um.",
        "exp.schoolT": "Curso Profissional de Técnico de Informática – Sistemas",
        "exp.school1": "Redes, sistemas operativos, bases de dados e arquitetura de computadores.",
        "exp.school2": "Fundamentos de programação em C, C++ e Java, incluindo programação orientada a objetos.",
        "exp.internT": "Estagiário de IT",
        "exp.intern1": "Suporte técnico e reparação de equipamentos informáticos da empresa.",
        "exp.intern2": "Preparação de novos postos de trabalho e backups para os colaboradores.",
        "exp.intern3": "Apoio à melhoria de software usado na produção e criação de um inventário completo do equipamento de IT.",

        "contact.title": "Vamos trabalhar juntos",
        "contact.text": "Está a recrutar para uma função de web developer ou tem um projeto em mente? Envie-me uma mensagem e respondo em um ou dois dias.",
        "contact.name": "Nome",
        "contact.message": "Mensagem",
        "contact.send": "Enviar mensagem",
        "contact.sending": "A enviar…",
        "contact.ok": "Obrigado! A sua mensagem foi enviada.",
        "contact.error": "Algo correu mal. Por favor envie-me um email diretamente.",

        "footer.top": "Voltar ao topo ↑",
    },
    en: {
        "contact.sending": "Sending…",
        "contact.ok": "Thanks! Your message has been sent.",
        "contact.error": "Something went wrong. Please email me directly instead.",
    },
};

const i18nElements = document.querySelectorAll("[data-i18n]");
i18nElements.forEach((el) => {
    translations.en[el.dataset.i18n] = el.textContent.trim().replace(/\s+/g, " ");
});

let currentLang = "en";

function t(key) {
    return translations[currentLang][key] ?? translations.en[key];
}

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    i18nElements.forEach((el) => {
        el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll(".lang-switch button").forEach((btn) => {
        btn.setAttribute("aria-pressed", btn.dataset.lang === lang);
    });
    try {
        localStorage.setItem("lang", lang);
    } catch (e) {}
}

document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

let savedLang = null;
try {
    savedLang = localStorage.getItem("lang");
} catch (e) {}
const initialLang = savedLang || (navigator.language.startsWith("pt") ? "pt" : "en");
if (initialLang !== "en") setLanguage(initialLang);

// Mobile menu
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.getElementById("nav-menu");

function closeMenu() {
    navMenu.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
}

navToggle.addEventListener("click", () => {
    const open = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", open);
});
navMenu.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));

// Header border once the page is scrolled
const header = document.querySelector(".site-header");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Highlight the nav link of the section in view
const navLinks = document.querySelectorAll(".nav-links a");
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
        });
    });
}, { rootMargin: "-40% 0px -55% 0px" });
document.querySelectorAll("main section[id]").forEach((s) => sectionObserver.observe(s));

// Fade sections in as they scroll into view
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });
document.querySelectorAll(".section").forEach((el) => {
    el.classList.add("reveal");
    revealObserver.observe(el);
});

// Contact form: submit to Formspree without leaving the page
const form = document.querySelector(".contact-form");
const formStatus = form.querySelector(".form-status");

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const button = form.querySelector("button[type=submit]");
    button.disabled = true;
    formStatus.className = "form-status";
    formStatus.textContent = t("contact.sending");
    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: new FormData(form),
            headers: { Accept: "application/json" },
        });
        if (!response.ok) throw new Error(response.statusText);
        form.reset();
        formStatus.classList.add("ok");
        formStatus.textContent = t("contact.ok");
    } catch (e) {
        formStatus.classList.add("error");
        formStatus.textContent = t("contact.error");
    } finally {
        button.disabled = false;
    }
});

document.getElementById("year").textContent = new Date().getFullYear();
