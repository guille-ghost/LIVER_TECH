/* =======================================================
   Mega Soluciones SAC — Interacciones del encabezado
   ======================================================= */

document.addEventListener('DOMContentLoaded', () => {

  // ---------- Menú móvil (hamburguesa) ----------
  const menuBtn   = document.getElementById('mobileMenuBtn');
  const menu      = document.getElementById('mobileMenu');
  const iconOpen  = document.getElementById('iconOpen');
  const iconClose = document.getElementById('iconClose');

  if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => {
      const isOpen = !menu.classList.contains('hidden');

      menu.classList.toggle('hidden');
      iconOpen.classList.toggle('hidden');
      iconClose.classList.toggle('hidden');

      menuBtn.setAttribute('aria-expanded', String(!isOpen));
    });
  }

  // ---------- Submenú "Servicios" (acordeón móvil) ----------
  const subBtn  = document.getElementById('mobileSubmenuBtn');
  const subMenu = document.getElementById('mobileSubmenu');
  const subIcon = document.getElementById('mobileSubmenuIcon');

  if (subBtn && subMenu) {
    subBtn.addEventListener('click', () => {
      subMenu.classList.toggle('open');
      subIcon.classList.toggle('rotate-180');
    });
  }

  // ---------- Cerrar el menú móvil al hacer clic en un enlace ----------
  if (menu) {
    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        menu.classList.add('hidden');
        iconOpen.classList.remove('hidden');
        iconClose.classList.add('hidden');
      });
    });
  }

  // ---------- Sombra del header al hacer scroll ----------
  const header = document.querySelector('header');
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 10) {
        header.classList.add('shadow-2xl');
      } else {
        header.classList.remove('shadow-2xl');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }

});
