const header = document.querySelector('[data-header]');
const buttonBurger = document.querySelector('[data-burger]');
const buttonClose = document.querySelectorAll('[data-close-menu]');
const menuLink = document.querySelectorAll('[data-menu-link]');

const initBurgerMenu = () => {
  buttonBurger.addEventListener('click', () => {
    const closeMenu = () => {
      header.classList.remove('is-active');
      document.body.style.overflow = '';
    };

    if (!header.classList.contains('is-active')) {
      header.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    } else {
      closeMenu();
    }

    menuLink.forEach((elem) => {
      elem.addEventListener('click', () => {
        closeMenu();
      });
    });

    buttonClose.forEach((elem) => {
      elem.addEventListener('click', () => {
        closeMenu();
      });
    });

    document.addEventListener('click', function (e) {
      const target = e.target;
      if (header.classList.contains('is-active') && !header.contains(target)) {
        closeMenu();
      }
    });
  });
};

export {initBurgerMenu};
