document.querySelectorAll('.mobile-menu__body a').forEach((link) => {
  link.addEventListener('click', () => {
    const menu = document.querySelector('#mobileMenu');
    const instance = bootstrap.Offcanvas.getInstance(menu);
    if (instance) {
      instance.hide();
    }
  });
});
