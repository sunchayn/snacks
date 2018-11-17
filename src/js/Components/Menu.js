class Menu {
  constructor(menu, mobileMenu) {
    this.menu = menu;
    this.mobileMenu = mobileMenu;

    this._initEvents();
  }

  _initEvents() {
    const menu = this.menu;
    let scrollEnabled = true;

    window.addEventListener('wheel', function(e) {
      if (!scrollEnabled) {
        e.preventDefault();
      }
    });

    window.addEventListener('scroll', function(e) {
      
      if (document.documentElement.scrollTop == 0) {
        menu.classList.remove('is-scrolling');
      } else {
        menu.classList.add('is-scrolling');
      }

    });

    const mobileMenu = this.mobileMenu;
    const toggles = document.querySelectorAll('.toggle-menu');

    for (let i = 0; i < toggles.length; i++) {
      toggles[i].addEventListener('click', function(e) {
        e.preventDefault();
        if (mobileMenu.classList.contains('is-toggled')) {
          mobileMenu.classList.remove('is-toggled');
          scrollEnabled = true;
        } else {
          mobileMenu.classList.add('is-toggled');
          scrollEnabled = false;
        }
      });
    }

    mobileMenu.addEventListener('click', function(e) {
      if (!e.target.classList.contains('mobileMenu-item')) {
         mobileMenu.classList.remove('is-toggled');
         scrollEnabled = true;
      }
    });
  }
}

export default Menu;
