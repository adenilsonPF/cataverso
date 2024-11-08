const texts = {
    pt: {
        subtitle: "Autor de livros de poesia e mercado de ações",
        menuBooks: "Livros",
        menuProjects: "Outras Obras/Projetos",
        menuMedia: "Fotos e Vídeos",
        menuContact: "Contato",
        sectionBooksTitle: "Livros",
        book1Description: "Uma coleção poética única que explora o sentir do mundo e os detalhes simples da vida.",
        book2Description: "Um convite para se reconectar com a poesia em seu estado mais puro e despretensioso.",
        book3Description: "Guia para explorar o mercado de ações com abordagens práticas e acessíveis.",
        sectionProjectsTitle: "Outras Obras/Projetos",
        projectsDescription: "Em breve, mais informações sobre novos projetos e eventos.",
        sectionMediaTitle: "Fotos e Vídeos",
        mediaDescription: "Explore alguns momentos e inspirações por trás de cada verso e pensamento. (Em breve)",
        sectionContactTitle: "Contato",
        contactDirectPurchase: "Interessado em adquirir um livro diretamente comigo? Entre em contato pelo telefone abaixo.",
        contactSocialMedia: "Acompanhe-me nas redes sociais:"
    },
    en: {
        subtitle: "Author of poetry and stock market books",
        menuBooks: "Books",
        menuProjects: "Other Works/Projects",
        menuMedia: "Photos and Videos",
        menuContact: "Contact",
        sectionBooksTitle: "Books",
        book1Description: "A unique poetic collection exploring the world’s feeling and life’s simple details.",
        book2Description: "An invitation to reconnect with poetry in its purest and unpretentious form.",
        book3Description: "A guide to exploring the stock market with practical and accessible approaches.",
        sectionProjectsTitle: "Other Works/Projects",
        projectsDescription: "More information on new projects and events coming soon.",
        sectionMediaTitle: "Photos and Videos",
        mediaDescription: "Explore moments and inspirations behind each verse and thought. (Coming soon)",
        sectionContactTitle: "Contact",
        contactDirectPurchase: "Interested in purchasing directly from me? Contact me at the phone number below.",
        contactSocialMedia: "Follow me on social media:"
    },
    es: {
        subtitle: "Autor de libros de poesía y mercado de valores",
        menuBooks: "Libros",
        menuProjects: "Otras Obras/Proyectos",
        menuMedia: "Fotos y Videos",
        menuContact: "Contacto",
        sectionBooksTitle: "Libros",
        book1Description: "Una colección poética única que explora el sentimiento del mundo y los detalles simples de la vida.",
        book2Description: "Una invitación para reconectar con la poesía en su forma más pura y sin pretensiones.",
        book3Description: "Guía para explorar el mercado de valores con enfoques prácticos y accesibles.",
        sectionProjectsTitle: "Otras Obras/Proyectos",
        projectsDescription: "Pronto, más información sobre nuevos proyectos y eventos.",
        sectionMediaTitle: "Fotos y Videos",
        mediaDescription: "Explora momentos e inspiraciones detrás de cada verso y pensamiento. (Próximamente)",
        sectionContactTitle: "Contacto",
        contactDirectPurchase: "¿Interesado en adquirir un libro directamente conmigo? Contáctame al teléfono a continuación.",
        contactSocialMedia: "Sígueme en las redes sociales:"
    }
};

function changeLanguage(lang) {
    const elements = [
        "subtitle", "menuBooks", "menuProjects", "menuMedia", "menuContact",
        "sectionBooksTitle", "book1Description", "book2Description", "book3Description",
        "sectionProjectsTitle", "projectsDescription", "sectionMediaTitle",
        "mediaDescription", "sectionContactTitle", "contactDirectPurchase",
        "contactSocialMedia"
    ];
    elements.forEach(id => {
        document.getElementById(id).innerText = texts[lang][id];
    });
}