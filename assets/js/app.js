

var sections = document.querySelectorAll('.section');
var logo = document.querySelector('.logo');
var home = document.querySelector('.home')
var about = document.querySelector('#about');
var portfolio = document.querySelector('#portfolio');
var certificate = document.querySelector('#certificate');
var contact = document.querySelector('#contact');
var service = document.querySelector('#service');

var homeLink = document.querySelector('#home-link');
var aboutLink = document.querySelector('#about-link');
var portfolioLink = document.querySelector('#portfolio-link');
var certificateLink = document.querySelector('#certificate-link');
var contactLink = document.querySelector('#contact-link');
var serviceLink = document.querySelector('#service-link');

logo.onclick = function() {
    for (section of sections) {
        section.classList.add('hidden');
    }
    
    home.classList.remove('hidden');
}

homeLink.onclick = function() {
    for (section of sections) {
        section.classList.add('hidden');
    }
    
    home.classList.remove('hidden');
}


aboutLink.onclick = function() {
    for (section of sections) {
        section.classList.add('hidden');
    }
    
    about.classList.remove('hidden');
}

portfolioLink.onclick = function() {
    for (section of sections) {
        section.classList.add('hidden');
    }
    portfolio.classList.remove('hidden');
}

certificateLink.onclick = function() {
    for (section of sections) {
        section.classList.add('hidden');
    }
    certificate.classList.remove('hidden');
}

contactLink.onclick = function() {
    for (section of sections) {
        section.classList.add('hidden');
    }
    contact.classList.remove('hidden');
}

serviceLink.onclick = function() {
    for (section of sections) {
        section.classList.add('hidden');
    }
    service.classList.remove('hidden');
}
