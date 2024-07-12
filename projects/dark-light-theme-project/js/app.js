const switchElement = document.querySelector('.switch')

switchElement.addEventListener('click', function () {

  document.body.classList.toggle('dark')

  document.body.className.includes('dark') ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light');

})

window.onload = () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark')
  }
}

