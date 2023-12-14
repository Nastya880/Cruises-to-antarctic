
const initSmoothScroll = () => {
  const anchors = document.querySelectorAll('[data-menu-href]');
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute('href').substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }
};

export {initSmoothScroll};
