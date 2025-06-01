const panel = document.getElementById('login-panel');
const form = document.getElementById('form');
const input = document.getElementById('password');
const show = document.getElementById('show-password');
const loading = document.getElementById('loading-panel');

const pwd = 'password';
const hint = document.getElementById('hint').innerHTML = 'Password : &emsp;'+ pwd.toString();

const clicks = [
     new Audio('../Sounds/Click1.wav'),
     new Audio('../Sounds/Click2.mp3'),
];


input.addEventListener('input', function() {
     let click = clicks[Math.round(Math.random()*(clicks.length-1))]
     click.currentTime = 0;
     click.play();
     if(input.style.borderColor != 'var(--accent1)')
          input.style.borderColor = 'var(--accent1)';
});


show.addEventListener('change', function() {
     input.type = this.checked ? 'text' : 'password';
});


form.addEventListener('submit', function(x) {
     x.preventDefault();

     if (input.value.toString() == pwd) {
          panel.style.display = 'none';document.documentElement
          loading.style.display= 'flex';
          loading.classList.add('loading-on');
          setTimeout(()=> {
               document.querySelector('html').style.opacity = 0;
               setTimeout(() => {
                    window.parent.document.getElementById('login-screen').remove();
               }, 210);
          }, (500 + Math.round(Math.random() * 3500)));
     } else
          input.style.borderColor= 'red';
});

document.documentElement.addEventListener('click', function() {
     if(window.parent.document.documentElement.requestFullscreen)
     window.parent.document.documentElement.requestFullscreen();
});