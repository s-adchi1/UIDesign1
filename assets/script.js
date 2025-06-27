 document.querySelector('#darkmode').addEventListener('click', function() {
      document.getElementsByTagName('body')[0].classList.toggle('dark');
      document.getElementsByTagName('h1')[0].classList.toggle('dark');
      document.getElementsByTagName('a')[0].classList.toggle('dark');
});