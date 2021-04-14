const navigation = document.querySelector('.nav');
const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close-btn');

function openNav() {
  navigation.classList.add('open-nav');
}

function closeNav() {
  navigation.classList.remove('open-nav');
}

window.addEventListener('scroll', () => {
  if (document.querySelector('html').scrollTop > 40) {
    document.querySelector('.top-content').classList.add('sticky');
  } else {
    document.querySelector('.top-content').classList.remove('sticky');
  }
});

hamburger.addEventListener('click', openNav);
closeBtn.addEventListener('click', closeNav);
