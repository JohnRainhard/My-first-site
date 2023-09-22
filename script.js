function changeTheme() {
  var themeLink = document.getElementById('theme');
  if (themeLink.getAttribute('href') === 'lStyle.css') {
    themeLink.setAttribute('href', 'dStyle.css');
  } else {
    themeLink.setAttribute('href', 'lStyle.css');
  }
}