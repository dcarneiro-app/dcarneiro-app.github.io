document.addEventListener("DOMContentLoaded", function () {
    const convenios = [
        { src: "assets/img/convenios/medprev.png", alt: "MedPrev", link: "http://institutomedprev.org.br/" },
        { src: "assets/img/convenios/siemaco.png", alt: "Siemaco", link: "https://siemaco.org.br/" },
        { src: "assets/img/convenios/daidellein.png", alt: "Daidellein", link: "https://www.daidellein.com/" },
        { src: "assets/img/convenios/sinam.png", alt: "Sinam", link: "https://sinam.com.br/site/" },
        { src: "assets/img/convenios/global.png", alt: "Global", link: "http://www.globalgestaosaude.com.br/" },
        { src: "assets/img/convenios/sudomed.png", alt: "Sudomed", link: "https://sudomed.com.br/" },
        { src: "assets/img/convenios/universal.png", alt: "Universal Saúde", link: "https://www.universalsaude.com/" },
        { src: "assets/img/convenios/mstp.png", alt: "MSTP", link: "https://www.grupomstp.com/" },
        { src: "assets/img/convenios/redentor.png", alt: "Redentor", link: "https://www.avredentor.com.br/" },
        { src: "assets/img/convenios/acesso-saude.png", alt: "Acesso Saúde", link: "https://www.acessosaude.com.br/" },
        { src: "assets/img/convenios/art-sorriso.jpeg", alt: "Art Sorriso", link: "https://www.artsorriso.com.br/" },
        { src: "assets/img/convenios/centro-do-sorriso.png", alt: "Centro do Sorriso", link: "https://www.centrodosorriso.com.br/" },
        { src: "assets/img/convenios/dentvida-med.png", alt: "Dentvida MED", link: "https://www.dentvida.com.br/" },
        { src: "assets/img/convenios/medicina-do-trabalho.png", alt: "Medicina do Trabalho", link: "https://www.medicinadotrabalho.com.br/" },
        { src: "assets/img/convenios/odonto-company.png", alt: "Odonto Company", link: "https://www.odontocompany.com/" },
        { src: "assets/img/convenios/odonto-excellence.png", alt: "Odonto Excellence", link: "https://www.odontoexcellence.com.br/" },
        { src: "assets/img/convenios/odonto-gold.png", alt: "Odonto Gold", link: "https://www.odontogold.com.br/" },
        { src: "assets/img/convenios/orthodontic.png", alt: "Orthodontic", link: "https://www.orthodonticbrasil.com.br/" },
        { src: "assets/img/convenios/policlinica.png", alt: "Policlínica", link: "https://www.policlinica.com.br/" },
        { src: "assets/img/convenios/solumedi.png", alt: "SOLUMEDI", link: "https://www.solumedi.com.br/" },
        { src: "assets/img/convenios/stories-odontologia.jpeg", alt: "STORIES ODONTOLOGIA", link: "https://www.storiesodontologia.com.br/" },
        { src: "assets/img/convenios/todosmed.png", alt: "TODOSMED", link: "https://www.todosmed.com.br/" },
        { src: "assets/img/convenios/total-saude.png", alt: "TOTAL SAÚDE", link: "https://www.totalsaude.com.br/" }
    ];

    const conveniosCount = convenios.length;
    document.querySelector('[data-purecounter-end]').setAttribute('data-purecounter-end', conveniosCount);
    new PureCounter();

    const carouselInner = document.getElementById('carouselItems');

    function generateCarouselItems(convenios) {
        let carouselItems = '';

        for (let i = 0; i < convenios.length; i += 4) {
            const itemsGroup = convenios.slice(i, i + 4);
            const isActive = i === 0 ? 'active' : '';
            carouselItems += `<div class="carousel-item ${isActive}">
                              <div class="d-flex justify-content-center align-items-center flex-wrap">`;

            itemsGroup.forEach(item => {
                carouselItems += `<a href="${item.link}" target="_blank" class="d-block mx-2 my-2">
                                <img src="${item.src}" alt="${item.alt}" class="img-fluid" style="max-width: 150px; height: auto;">
                              </a>`;
            });
            carouselItems += `</div></div>`;
        }
        carouselInner.innerHTML = carouselItems;
    }

    generateCarouselItems(convenios);
});
