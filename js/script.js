const texts = {
    pt: {
        bio: `Olá, sou Adenilson Carvalho, um poeta de bolso furado que gosta de caminhar descalço pela praia e contemplar o sol 
            nas tardes de domingo. Não escrevo para seguir tendências nem para 'engajar' – escrevo para brincar com as palavras e, 
    se você sorrir ou se perder um pouco no meu jogo de versos, já terá valido a pena. Bem-vindo ao meu universo de pequenas maravilhas!`,
        menuBooks: "Livros",
        menuMedia: "Fotos e Vídeos",
        menuContact: "Contato",
        sectionBooksTitle: "Livros",
        mediaDescription: "Explore alguns momentos e inspirações por trás de cada verso e pensamento. (Em breve)",
        sectionContactTitle: "Contato",
        contactDirectPurchase: "Interessado em adquirir um livro diretamente comigo? Entre em contato pelo telefone abaixo.",
        contactSocialMedia: "Acompanhe-me nas redes sociais:",
        bookDescriptions: [
            "Uma coleção poética única que explora o sentir do mundo e os detalhes simples da vida.",
            "Um convite para se reconectar com a poesia em seu estado mais puro e despretensioso.",
            "Guia para explorar o mercado de ações com abordagens práticas e acessíveis."
        ]
    },
    en: {
        bio: `Hello, I'm Adenilson Carvalho, a poet with holes in his pockets who loves walking barefoot along the beach 
        and contemplating the sun on Sunday afternoons. I don't write to follow trends or to "engage"—I write to play with words, 
        and if you smile or lose yourself a little in my game of verses, it will have been worth it. Welcome to my universe of small wonders!`,
        menuBooks: "Books",
        menuMedia: "Photos and Videos",
        menuContact: "Contact",
        sectionBooksTitle: "Books",
        mediaDescription: "Explore moments and inspirations behind each verse and thought. (Coming soon)",
        sectionContactTitle: "Contact",
        contactDirectPurchase: "Interested in purchasing directly from me? Contact me at the phone number below.",
        contactSocialMedia: "Follow me on social media:",
        bookDescriptions: [
            "A unique poetic collection exploring the world’s feeling and life’s simple details.",
            "An invitation to reconnect with poetry in its purest and unpretentious form.",
            "A guide to exploring the stock market with practical and accessible approaches."
        ]
    },
    es: {
        bio: `Hola, soy Adenilson Carvalho, un poeta de bolsillo roto que le gusta caminar descalzo por la playa y contemplar 
        el sol en las tardes de domingo. No escribo para seguir tendencias ni para "generar compromiso"—escribo para jugar con las palabras y, 
        si sonríes o te pierdes un poco en mi juego de versos, ya habrá valido la pena. ¡Bienvenido a mi universo de pequeñas maravillas!`,
        menuBooks: "Libros",        
        menuMedia: "Fotos y Videos",
        menuContact: "Contacto",
        sectionBooksTitle: "Libros",
        mediaDescription: "Explora momentos e inspiraciones detrás de cada verso y pensamiento. (Próximamente)",
        sectionContactTitle: "Contacto",
        contactDirectPurchase: "¿Interesado en adquirir un libro directamente conmigo? Contáctame al teléfono a continuación.",
        contactSocialMedia: "Sígueme en las redes sociales:",
        bookDescriptions: [
            "Una colección poética única que explora el sentimiento del mundo y los detalles simples de la vida.",
            "Una invitación para reconectar con la poesía en su forma más pura y sin pretensiones.",
            "Guía para explorar el mercado de valores con enfoques prácticos y accesibles."
        ]
    }
};

function changeLanguage(lang) {
    document.getElementById("Bio").innerText = texts[lang].bio;
    document.getElementById("menu-books").innerText = texts[lang].menuBooks;
    document.getElementById("menu-media").innerText = texts[lang].menuMedia;
    document.getElementById("menu-contact").innerText = texts[lang].menuContact;
    document.getElementById("section-books-title").innerText = texts[lang].sectionBooksTitle;
    document.getElementById("media-description").innerText = texts[lang].mediaDescription;
    document.getElementById("section-contact-title").innerText = texts[lang].sectionContactTitle;
    document.getElementById("contact-direct-purchase").innerText = texts[lang].contactDirectPurchase;
    document.getElementById("contact-social-media").innerText = texts[lang].contactSocialMedia;

    const bookSlides = document.querySelectorAll(".book-slide");
    texts[lang].bookDescriptions.forEach((description, index) => {
        const descriptionElement = bookSlides[index].querySelector("p");
        if (descriptionElement) descriptionElement.innerText = description;
    });
}


let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.book-slide');
    const totalSlides = slides.length;

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    const offset = -currentSlide * 100;
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}
