function changeLanguage(lang) {
    const translations = {
        pt: {
            authorName: "Adenilson Carvalho",
            aboutText: "Autor de livros de poesia, provérbios e análises de mercado...",
            booksTitle: "Livros",
            book1Title: "Arranha Verso",
            book2Title: "Poemas para se ler descalço",
            contactTitle: "Contato",
            phoneLabel: "Telefone: +55 11 99999-9999",
            socials: "Acompanhe-me em:",
            worksTitle: "Outras Obras e Eventos",
            eventsText: "Fique atento para novidades...",
            mediaTitle: "Fotos e Vídeos",
            mediaText: "Explore fotos e vídeos..."
        },
        en: {
            authorName: "Adenilson Carvalho",
            aboutText: "Author of poetry, proverbs, and stock market analysis books...",
            booksTitle: "Books",
            book1Title: "Arranha Verso",
            book2Title: "Poems to Read Barefoot",
            contactTitle: "Contact",
            phoneLabel: "Phone: +55 11 99999-9999",
            socials: "Follow me on:",
            worksTitle: "Other Works and Events",
            eventsText: "Stay tuned for new releases...",
            mediaTitle: "Photos and Videos",
            mediaText: "Explore photos and videos..."
        },
        es: {
            authorName: "Adenilson Carvalho",
            aboutText: "Autor de libros de poesía, proverbios y análisis del mercado...",
            booksTitle: "Libros",
            book1Title: "Arranha Verso",
            book2Title: "Poemas para leer descalzo",
            contactTitle: "Contacto",
            phoneLabel: "Teléfono: +55 11 99999-9999",
            socials: "Sígueme en:",
            worksTitle: "Otras Obras y Eventos",
            eventsText: "Mantente atento a las novedades...",
            mediaTitle: "Fotos y Videos",
            mediaText: "Explora fotos y videos..."
        }
    };

    const elements = {
        authorName: "author-name",
        aboutText: "about-text",
        booksTitle: "books-title",
        book1Title: "book1-title",
        book2Title: "book2-title",
        contactTitle: "contact-title",
        phoneLabel: "phone-label",
        socials: "socials",
        worksTitle: "works-title",
        eventsText: "events-text",
        mediaTitle: "media-title",
        mediaText: "media-text"
    };

    const translation = translations[lang];
    for (let [key, value] of Object.entries(elements)) {
        document.getElementById(value).innerText = translation[key];
    }
}