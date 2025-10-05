
(function () {
  if (window.location.hostname !== 'wiki.staff-rp.com.ua') {
    // Удаляем всё из body
    document.body.innerHTML = '';

    // Создаём предупреждение
    const warning = document.createElement('div');
    warning.style.position = 'fixed';
    warning.style.top = '0';
    warning.style.left = '0';
    warning.style.width = '100vw';
    warning.style.height = '100vh';
    warning.style.backgroundColor = '#000';
    warning.style.color = '#fff';
    warning.style.display = 'flex';
    warning.style.justifyContent = 'center';
    warning.style.alignItems = 'center';
    warning.style.fontSize = '3rem';
    warning.style.fontWeight = 'bold';
    warning.style.textAlign = 'center';
    warning.style.padding = '20px';
    warning.style.zIndex = '9999';
    warning.textContent = 'Сайт спижений у ELITA RP!';
    document.body.appendChild(warning);
  }

  // Блокировка правой кнопки мыши
  document.addEventListener('contextmenu', event => event.preventDefault());

  // Блокировка F12, Ctrl+Shift+I/J/C, Ctrl+U
  document.onkeydown = function (e) {
    if (
      e.keyCode === 123 || // F12
      (e.ctrlKey && e.shiftKey && [73, 74, 67].includes(e.keyCode)) || // Ctrl+Shift+I/J/C
      (e.ctrlKey && e.keyCode === 85) // Ctrl+U
    ) {
      return false;
    }
  };
})();
