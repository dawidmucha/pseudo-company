window.addEventListener('scroll', function(e) {
  var scrolled = window.pageYOffset;
  const background = document.querySelector('#jumbotron');
  background.style.backgroundPositionY = (scrolled * 0.3) + 'px';
}); //inspired by @ilonacodes

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});