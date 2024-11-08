const texts = {
    pt: {
        subtitle: "Autor de livros de poesia e mercado de ações",
        menuBooks: "Livros",
        menuProjects: "Outras Obras/Projetos",
        menuMedia: "Fotos e Vídeos",
        menuContact: "Contato",
        sectionBooksTitle: "Livros",
        projectsDescription: "Em breve, mais informações sobre novos projetos e eventos.",
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
        subtitle: "Author of poetry and stock market books",
        menuBooks: "Books",
        menuProjects: "Other Works/Projects",
        menuMedia: "Photos and Videos",
        menuContact: "Contact",
        sectionBooksTitle: "Books",
        projectsDescription: "More information on new projects and events coming soon.",
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
        subtitle: "Autor de libros de poesía y mercado de valores",
        menuBooks: "Libros",
        menuProjects: "Otras Obras/Proyectos",
        menuMedia: "Fotos y Videos",
        menuContact: "Contacto",
        sectionBooksTitle: "Libros",
        projectsDescription: "Pronto, más información sobre nuevos proyectos y eventos.",
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
    document.getElementById("subtitle").innerText = texts[lang].subtitle;
    document.getElementById("menu-books").innerText = texts[lang].menuBooks;
    document.getElementById("menu-projects").innerText = texts[lang].menuProjects;
    document.getElementById("menu-media").innerText = texts[lang].menuMedia;
    document.getElementById("menu-contact").innerText = texts[lang].menuContact;
    document.getElementById("section-books-title").innerText = texts[lang].sectionBooksTitle;
    document.getElementById("projects-description").innerText = texts[lang].projectsDescription;
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
