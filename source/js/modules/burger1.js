const header = document.querySelector('[data-header]');
const buttonOpen = document.querySelector('[data-burger]');
const navLink = document.querySelectorAll('[data-menu-link]');
const overlay = document.querySelector('[data-menu-overlay]');

const initMenu = () => {

  // header.classList.remove('header--nojs');

  buttonOpen.addEventListener('click', () => {
    const close = () => {
      header.classList.remove('is-open');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    };

    if (!header.classList.contains('is-open')) {
      header.classList.add('is-open');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    } else {
      close();
    }

    navLink.forEach((elem) => {
      elem.addEventListener('click', () => {
        close();
      });
    });

    overlay.addEventListener('click', () => {
      close();
    });
  });
};

export {initMenu};
