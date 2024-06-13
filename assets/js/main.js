/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
	navToggle = document.getElementById('nav-toggle'),
	navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/   
/* Validate if constant exists */
if (navToggle){
	navToggle.addEventListener('click', () =>{
		navMenu.classList.add('show-menu') 
	})
}
if (navClose){
	navClose.addEventListener('click', () =>{
		navMenu.classList.remove('show-menu') 
	})
}
 
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
 
/*==================== ACCORDION SKILLS ====================*/
	const skillsContent = document.getElementsByClassName('skills__content'),
		  skillsHeader = document.querySelectorAll('.skills__header')

	function toggleSkills() {
		let itemClass = this.parentNode.className

		for(i = 0; i < skillsContent.length; i++) {
			skillsContent[i].className = 'skills__content skills__close'
		}
		if(itemClass === 'skills__content skills__close') {
			this.parentNode.className = 'skills__content skills__open'
		}
	}

	skillsHeader.forEach((eL) =>{
		eL.addEventListener('click', toggleSkills)
	})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{ 
	tab.addEventListener('click', () =>{
		const target = document.querySelector(tab.dataset.target)

		tabContents.forEach(tabContent =>{
			tabContent.classList.remove('qualification__active')
		})
		target.classList.add('qualification__active')
 
		tabs.forEach(tab =>{
			tab.classList.remove('qualification__active')
		})
		tab.classList.add('qualification__active')
	})
})

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
	modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
	modalBtn.addEventListener('click', () =>{
		modal(i)
	})
})

modalCloses.forEach((modalClose) => {
	modalClose.addEventListener('click', () =>{
		modalViews.forEach((modalView) =>{
			modalView.classList.remove('active-modal')
		})
	})
})

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper('.portfolio__container', {  
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }, 
});

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper('.testimonial__container', {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints:{
  	568:{
  		slidesPerView: 2,
  	}
  }
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset 

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive) 

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

let isEnglish = false;

function mudarIdioma() {
    const titulo = document.querySelector('.home__title');
    const subtitulo = document.querySelector('.home__subtitle');
    const descricao = document.querySelector('.home__description');
    const menuItens = document.querySelectorAll('.nav__link');
    const aboutTitulo = document.querySelector('.about .section__title');
    const aboutSubtitulo = document.querySelector('.about .section__subtitle');
    const aboutDescricao = document.querySelector('.about__description');
    const skillsTitulo = document.querySelector('.skills .section__title');
    const skillsSubtitulo = document.querySelector('.skills .section__subtitle');
    const contactButton = document.querySelector('.button-flex');
    const aboutInfoTitles = document.querySelectorAll('.about__info-title'); 
    const aboutInfoNames = document.querySelectorAll('.about__info-name');
    const skillsTitles = document.querySelectorAll('.skills__title');
    const skillsSubtitles = document.querySelectorAll('.skills__subtitle');
    const experienceTitulo = document.querySelector('.qualification .section__title');
    const experienceSubtitulo = document.querySelector('.qualification .section__subtitle');
    const educationButton = document.querySelector('.qualification__button[data-target="#education"]');
    const workButton = document.querySelector('.qualification__button[data-target="#work"]');
    const certificatesButton = document.querySelector('.qualification__button[data-target="#certificates"]');
    const educationContents = document.querySelectorAll('.qualification__content#education .qualification__data');
    const workContents = document.querySelectorAll('.qualification__content#work .qualification__data');
    const certificatesContents = document.querySelectorAll('.qualification__content#certificates .qualification__data');
    const portfolioTitulo = document.querySelector('.portfolio .section__title');
    const portfolioSubtitulo = document.querySelector('.portfolio .section__subtitle');
    const portfolioTitles = document.querySelectorAll('.portfolio__title');
    const portfolioDescription = document.querySelectorAll('.portfolio__description');
    const portfolioButton = document.querySelectorAll('.portfolio__button');
    const contactTitulo = document.querySelector('.contact .section__title');
    const contactSubtitulo = document.querySelector('.contact .section__subtitle');
    const contactTitulos = document.querySelectorAll('.contact__title');
    const contactSubtitulos = document.querySelectorAll('.contact__subtitle');
    const contactLabel = document.querySelectorAll('.contact__label');
    const contactButtonElement = document.querySelector('.contact .button--flex');
    const footerTitle = document.querySelector('.footer__container .footer__title');
    const footerSubtitle = document.querySelector('.footer__container .footer__subtitle');
    const footerLinks = document.querySelectorAll('.footer__links .footer__link');
    const footerCopy = document.querySelector('.footer__copy');

    if (isEnglish) {
        // Se estiver em inglês, muda para português
        titulo.textContent = "Olá, eu sou o Yang!";
        subtitulo.textContent = "Desenvolvedor Full-Stack";
        descricao.textContent = "Estudante de Análise e Desenvolvimento de Sistemas e Profissional de TI. Apaixonado por tecnologia em busca de experiência no mercado para expandir meus conhecimentos e aplicar habilidades com foco em crescimento contínuo.";

        aboutTitulo.textContent = "Sobre mim";
        aboutSubtitulo.textContent = "Minha introdução";
        aboutDescricao.textContent = "Desenvolvedor full-stack apaixonado por tecnologia, música e desenvolvimento mobile, com experiência em diversas linguagens e frameworks. Adoro criar soluções completas, desde um backend robusto até um frontend intuitivo. Minha paixão é integrar minhas habilidades para entregar projetos inovadores e eficientes.";

        skillsTitulo.textContent = "Habilidades";
        skillsSubtitulo.textContent = "Meus níveis de tecnologia";

        experienceTitulo.textContent = "Experiência";
        experienceSubtitulo.textContent = "Minha carreira";

        // Mudar textos do menu
        menuItens[0].textContent = "Início";
        menuItens[1].textContent = "Sobre mim";
        menuItens[2].textContent = "Habilidades";
        menuItens[3].textContent = "Experiência";
        menuItens[4].textContent = "Projetos";
        menuItens[5].textContent = "Contato";

        // Traduzir botão "Contate-me"
        contactButton.textContent = "Contate-me";
        contactButtonElement.textContent = "Contate-me";

        // Traduzir informações sobre a experiência
        aboutInfoTitles[0].textContent = "03+";
        aboutInfoNames[0].textContent = "Anos de experiência";

        aboutInfoTitles[1].textContent = "06+";
        aboutInfoNames[1].textContent = "Projetos desenvolvidos";

        aboutInfoTitles[2].textContent = "04+";
        aboutInfoNames[2].textContent = "Passagem em empresas";

        // Traduzir títulos e subtítulos das habilidades
        skillsTitles[0].textContent = "Desenvolvedor front-end";
        skillsSubtitles[0].textContent = "3 anos";

        skillsTitles[1].textContent = "Desenvolvedor back-end";
        skillsSubtitles[1].textContent = "2 anos";

        skillsTitles[2].textContent = "Designer";
        skillsSubtitles[2].textContent = "5 anos";

        skillsTitles[3].textContent = "Desenvolvedor Mobile";
        skillsSubtitles[3].textContent = "1 ano";

        // Traduzir títulos e subtítulos da seção de experiência
        educationButton.textContent = "Educação";
        workButton.textContent = "Trabalho";
        certificatesButton.textContent = "Certificações";

        educationButton.innerHTML = '<i class="uil uil-graduation-cap qualification__icon"></i> ' + educationButton.textContent;
        workButton.innerHTML = '<i class="uil uil-briefcase-alt qualification__icon"></i> ' + workButton.textContent;
        certificatesButton.innerHTML = '<i class="uil uil-book-alt qualification__icon"></i> ' + certificatesButton.textContent;

        // Traduzir conteúdo da seção de educação
        educationContents[0].querySelector('.qualification__title').textContent = "Programação de Jogos Digitais";
        educationContents[0].querySelector('.qualification__subtitle').textContent = "Peruíbe - ETEC";
        educationContents[0].querySelector('.qualification__calendar').innerHTML = '<i class="uil uil-calendar-alt"></i> 2019 - 2021';

        educationContents[1].querySelector('.qualification__title').textContent = "Desenvolvimento de Sistemas";
        educationContents[1].querySelector('.qualification__subtitle').textContent = "Itanhaém - ETEC";
        educationContents[1].querySelector('.qualification__calendar').innerHTML = '<i class="uil uil-calendar-alt"></i> 2020 - 2021';

        educationContents[2].querySelector('.qualification__title').textContent = "Análise e Desenvolvimento de Sistemas";
        educationContents[2].querySelector('.qualification__subtitle').textContent = "Praia Grande - FATEC";
        educationContents[2].querySelector('.qualification__calendar').innerHTML = '<i class="uil uil-calendar-alt"></i> 2022 - 2024';

        // Traduzir conteúdo da seção de trabalho
        workContents[0].querySelector('.qualification__title').textContent = "Professor Preparatório Jovem Aprendiz";
        workContents[0].querySelector('.qualification__subtitle').textContent = "CAMP - Peruíbe";
        workContents[0].querySelector('.qualification__calendar').innerHTML = '<i class="uil uil-calendar-alt"></i> Jan/2022 - Jun/2022';

        workContents[1].querySelector('.qualification__title').textContent = "Professor de Informática e Manutenção de Computadores";
        workContents[1].querySelector('.qualification__subtitle').textContent = "Ação Social - Peruíbe";
        workContents[1].querySelector('.qualification__calendar').innerHTML = '<i class="uil uil-calendar-alt"></i> 2022 - 2023';

        workContents[2].querySelector('.qualification__title').textContent = "Professor de Robótica";
        workContents[2].querySelector('.qualification__subtitle').textContent = "Ensina Mais Turma da Mônica - Praia Grande";
        workContents[2].querySelector('.qualification__calendar').innerHTML = '<i class="uil uil-calendar-alt"></i> Fev/2023 - Mar/2023';

        workContents[3].querySelector('.qualification__title').textContent = "Gestor de Tráfego";
        workContents[3].querySelector('.qualification__subtitle').textContent = "F.D.Tavares";
        workContents[3].querySelector('.qualification__calendar').innerHTML = '<i class="uil uil-calendar-alt"></i> Abr/2023 - Maio/2023';

        // Traduzir conteúdo da seção de certificações
        certificatesContents[0].querySelector('.qualification__title').textContent = "Marketing Digital";
        certificatesContents[0].querySelector('.qualification__subtitle').textContent = "SEBRAE";
        certificatesContents[0].querySelector('.qualification__calendar').innerHTML = '<i class="uil uil-calendar-alt"></i> 3 horas';

        certificatesContents[1].querySelector('.qualification__title').textContent = "DevOps & Agile Culture";
        certificatesContents[1].querySelector('.qualification__subtitle').textContent = "FIAP";
        certificatesContents[1].querySelector('.qualification__calendar').innerHTML = '<i class="uil uil-calendar-alt"></i> 60 horas';

        certificatesContents[2].querySelector('.qualification__title').textContent = "Scrum Fundamentals";
        certificatesContents[2].querySelector('.qualification__subtitle').textContent = "Scrum Study";
        certificatesContents[2].querySelector('.qualification__calendar').innerHTML = '<i class="uil uil-calendar-alt"></i> 60 horas';

        certificatesContents[3].querySelector('.qualification__title').textContent = "React e React Native";
        certificatesContents[3].querySelector('.qualification__subtitle').textContent = "Udemy";
        certificatesContents[3].querySelector('.qualification__calendar').innerHTML = '<i class="uil uil-calendar-alt"></i> 300 horas';

        certificatesContents[4].querySelector('.qualification__title').textContent = "Networking Essentials";
        certificatesContents[4].querySelector('.qualification__subtitle').textContent = "Cisco Packet Tracer";
        certificatesContents[4].querySelector('.qualification__calendar').innerHTML = '<i class="uil uil-calendar-alt"></i> 60 horas';

        portfolioTitulo.textContent = "Projetos";
        portfolioSubtitulo.textContent = "Meus projetos";

        portfolioTitles[1].textContent = "Brain Help";
        portfolioDescription[1].textContent = "Aplicativo exclusivamente mobile voltado para a saúde mental das pessoas.";
        portfolioButton[1].textContent = "Demonstração";

        portfolioTitles[2].textContent = "Brain Help Pro";
        portfolioDescription[2].textContent = "Versão do Brain Help para profissionais.";
        portfolioButton[2].textContent = "Demonstração";

        portfolioTitles[3].textContent = "Blog JODI";
        portfolioDescription[3].textContent = "Projeto acadêmico com o intuito de divulgar o curso de Jogos Digitais.";
        portfolioButton[3].textContent = "Demonstração";

        portfolioTitles[4].textContent = "Turismo";
        portfolioDescription[4].textContent = "Projeto acadêmico com o intuito de aplicar responsividade e demonstrar conhecimento.";
        portfolioButton[4].textContent = "Demonstração";

        portfolioTitles[5].textContent = "Terapeuticativa";
        portfolioDescription[5].textContent = "Portfolio profissional realizado para uma terapeuta em dependência química.";
        portfolioButton[5].textContent = "Demonstração";

        portfolioTitles[6].textContent = "Aplicativos";
        portfolioDescription[6].textContent = "Projeto mobile com o intuito de praticar habilidades em diversas linguagens de programação.";
        portfolioButton[6].textContent = "Demonstração";

        contactTitulo.textContent = "Contato";
        contactSubtitulo.textContent = "Entre em contato";

        contactTitulos[0].textContent = "Celular";
        contactSubtitulos[0].textContent = "(11) 94177-0287";
        contactLabel[0].textContent = "Nome";

        contactTitulos[1].textContent = "E-mail";
        contactSubtitulos[1].textContent = "yang.ferreira2023@gmail.com";
        contactLabel[1].textContent = "E-mail";

        contactTitulos[2].textContent = "Localização";
        contactSubtitulos[2].textContent = "Peruíbe - 11770-886";
        contactLabel[2].textContent = "Mensagem";

        footerTitle.textContent = "Yang";
        footerSubtitle.textContent = "Desenvolvedor Full-Stack";
        footerSubtitle.textContent = "Desenvolvedor Full-Stack";

        footerLinks[0].textContent = "Experiência";
        footerLinks[1].textContent = "Projetos";
        footerLinks[2].textContent = "Contato";

        footerCopy.textContent = "© YSF. Direitos reservados";
    } else {
        contactButtonElement.textContent = "Contact me";
        // Se estiver em português, muda para inglês
        titulo.textContent = "Hello, I'm Yang!";
        subtitulo.textContent = "Full-Stack Developer";
        descricao.textContent = "Students of Systems Analysis and Development and IT Professional. Passionate about technology looking for experience in the market to expand my knowledge and apply skills with a focus on continuous growth.";

        aboutTitulo.textContent = "About";
        aboutSubtitulo.textContent = "My introduction";
        aboutDescricao.textContent = "Passionate full-stack developer about technology, music and mobile development, with experience in various languages and frameworks. I love creating complete solutions, from a robust backend to an intuitive frontend. My passion is to integrate my skills to deliver innovative and efficient projects.";

        skillsTitulo.textContent = "Skills";
        skillsSubtitulo.textContent = "My technology levels";

        experienceTitulo.textContent = "Experience";
        experienceSubtitulo.textContent = "My career";

        // Mudar textos do menu
        menuItens[0].textContent = "Home";
        menuItens[1].textContent = "About";
        menuItens[2].textContent = "Skills";
        menuItens[3].textContent = "Experience";
        menuItens[4].textContent = "Projects";
        menuItens[5].textContent = "Contact";

        // Traduzir botão "Contate-me"
        contactButton.textContent = "Contact me";
        contactButtonElement.textContent = "Contact me";

        // Traduzir informações sobre a experiência
        aboutInfoTitles[0].textContent = "03+";
        aboutInfoNames[0].textContent = "Years of experience";

        aboutInfoTitles[1].textContent = "06+";
        aboutInfoNames[1].textContent = "Projects developed";

        aboutInfoTitles[2].textContent = "04+";
        aboutInfoNames[2].textContent = "Experience in companies";

        // Traduzir títulos e subtítulos das habilidades
        skillsTitles[0].textContent = "Front-end Developer";
        skillsSubtitles[0].textContent = "3 years";

        skillsTitles[1].textContent = "Back-end Developer";
        skillsSubtitles[1].textContent = "2 years";

        skillsTitles[2].textContent = "Designer";
        skillsSubtitles[2].textContent = "5 years";

        skillsTitles[3].textContent = "Mobile Developer";
        skillsSubtitles[3].textContent = "1 year";

        // Traduzir títulos e subtítulos da seção de experiência
        educationButton.textContent = "Education";
        workButton.textContent = "Work";
        certificatesButton.textContent = "Certificates";

        educationButton.innerHTML = '<i class="uil uil-graduation-cap qualification__icon"></i> ' + educationButton.textContent;
        workButton.innerHTML = '<i class="uil uil-briefcase-alt qualification__icon"></i> ' + workButton.textContent;
        certificatesButton.innerHTML = '<i class="uil uil-book-alt qualification__icon"></i> ' + certificatesButton.textContent;

        // Traduzir conteúdo da seção de educação
        educationContents[0].querySelector('.qualification__title').textContent = "Digital Games Programming";
        educationContents[0].querySelector('.qualification__subtitle').textContent = "Peruíbe - ETEC";
        educationContents[0].querySelector('.qualification__calendar').innerHTML = '<i class="uil uil-calendar-alt"></i> 2019 - 2021';

        educationContents[1].querySelector('.qualification__title').textContent = "Systems Development";
        educationContents[1].querySelector('.qualification__subtitle').textContent = "Itanhaém - ETEC";
        educationContents[1].querySelector('.qualification__calendar').innerHTML = '<i class="uil uil-calendar-alt"></i> 2020 - 2021';

        educationContents[2].querySelector('.qualification__title').textContent = "Systems Analysis and Development";
        educationContents[2].querySelector('.qualification__subtitle').textContent = "Praia Grande - FATEC";
        educationContents[2].querySelector('.qualification__calendar').innerHTML = '<i class="uil uil-calendar-alt"></i> 2022 - 2024';

        // Traduzir conteúdo da seção de trabalho
        workContents[0].querySelector('.qualification__title').textContent = "Young Apprentice Preparatory Teacher";
        workContents[0].querySelector('.qualification__subtitle').textContent = "CAMP - Peruíbe";
        workContents[0].querySelector('.qualification__calendar').innerHTML = '<i class="uil uil-calendar-alt"></i> Jan/2022 - Jun/2022';

        workContents[1].querySelector('.qualification__title').textContent = "Professor of Computer Science and Computer Maintenance";
        workContents[1].querySelector('.qualification__subtitle').textContent = "Social Action - Peruíbe";
        workContents[1].querySelector('.qualification__calendar').innerHTML = '<i class="uil uil-calendar-alt"></i> 2022 - 2023';

        workContents[2].querySelector('.qualification__title').textContent = "Robotics Teacher";
        workContents[2].querySelector('.qualification__subtitle').textContent = "Teach More Monica's Class - Praia Grande";
        workContents[2].querySelector('.qualification__calendar').innerHTML = '<i class="uil uil-calendar-alt"></i> Fev/2023 - Mar/2023';

        workContents[3].querySelector('.qualification__title').textContent = "Traffic Manager";
        workContents[3].querySelector('.qualification__subtitle').textContent = "F.D.Tavares";
        workContents[3].querySelector('.qualification__calendar').innerHTML = '<i class="uil uil-calendar-alt"></i> Abr/2023 - Maio/2023';

        // Traduzir conteúdo da seção de certificações
        certificatesContents[0].querySelector('.qualification__title').textContent = "Marketing Digital";
        certificatesContents[0].querySelector('.qualification__subtitle').textContent = "SEBRAE";
        certificatesContents[0].querySelector('.qualification__calendar').innerHTML = '<i class="uil uil-calendar-alt"></i> 3 hours';

        certificatesContents[1].querySelector('.qualification__title').textContent = "DevOps & Agile Culture";
        certificatesContents[1].querySelector('.qualification__subtitle').textContent = "FIAP";
        certificatesContents[1].querySelector('.qualification__calendar').innerHTML = '<i class="uil uil-calendar-alt"></i> 60 hours';

        certificatesContents[2].querySelector('.qualification__title').textContent = "Scrum Fundamentals";
        certificatesContents[2].querySelector('.qualification__subtitle').textContent = "Scrum Study";
        certificatesContents[2].querySelector('.qualification__calendar').innerHTML = '<i class="uil uil-calendar-alt"></i> 60 hours';

        certificatesContents[3].querySelector('.qualification__title').textContent = "React and React Native";
        certificatesContents[3].querySelector('.qualification__subtitle').textContent = "Udemy";
        certificatesContents[3].querySelector('.qualification__calendar').innerHTML = '<i class="uil uil-calendar-alt"></i> 300 hours';

        certificatesContents[4].querySelector('.qualification__title').textContent = "Networking Essentials";
        certificatesContents[4].querySelector('.qualification__subtitle').textContent = "Cisco Packet Tracer";
        certificatesContents[4].querySelector('.qualification__calendar').innerHTML = '<i class="uil uil-calendar-alt"></i> 60 hours';

        portfolioTitulo.textContent = "Projects";
        portfolioSubtitulo.textContent = "My projects";

        portfolioTitles[1].textContent = "Brain Help";
        portfolioDescription[1].textContent = "Mobile-only app focused on people's mental health.";
        portfolioButton[1].textContent = "Demo";

        portfolioTitles[2].textContent = "Brain Help Pro";
        portfolioDescription[2].textContent = "Professional version of Brain Help.";
        portfolioButton[2].textContent = "Demo";

        portfolioTitles[3].textContent = "Blog JODI";
        portfolioDescription[3].textContent = "Academic project with the aim of disseminating the Digital Games course.";
        portfolioButton[3].textContent = "Demo";

        portfolioTitles[4].textContent = "Tourism";
        portfolioDescription[4].textContent = "Academic project in order to apply responsiveness and demonstrate knowledge.";
        portfolioButton[4].textContent = "Demo";

        portfolioTitles[5].textContent = "Terapeuticativa";
        portfolioDescription[5].textContent = "Professional portfolio made for a therapist in chemical dependency.";
        portfolioButton[5].textContent = "Demo";

        portfolioTitles[6].textContent = "Applications";
        portfolioDescription[6].textContent = "Mobile project in order to practice skills in several programming languages.";
        portfolioButton[6].textContent = "Demo";

        contactTitulo.textContent = "Contact";
        contactSubtitulo.textContent = "Contact Us";

        contactTitulos[0].textContent = "Phone";
        contactSubtitulos[0].textContent = "(11) 94177-0287";
        contactLabel[0].textContent = "Name";

        contactTitulos[1].textContent = "Email";
        contactSubtitulos[1].textContent = "yang.ferreira2023@gmail.com";
        contactLabel[1].textContent = "Email";

        contactTitulos[2].textContent = "Location";
        contactSubtitulos[2].textContent = "Peruíbe - 11770-886";
        contactLabel[2].textContent = "Message";

        footerTitle.textContent = "Yang";
        footerSubtitle.textContent = "Full-Stack Developer";

        footerLinks[0].textContent = "Experience";
        footerLinks[1].textContent = "Projects";
        footerLinks[2].textContent = "Contact";

        footerCopy.textContent = "© YSF. All rights reserved";
    }

    // Alterna o estado do idioma
    isEnglish = !isEnglish;
}
