document.documentElement.addEventListener('click', function() {
     if(document.documentElement.requestFullscreen)
     document.documentElement.requestFullscreen();
});



document.getElementById('options-hover').addEventListener('mouseenter', function() {
     document.querySelector('.options-panel').classList.add('options-panel-visible');
     document.querySelector('.overlay').classList.add('overlay-visible');
});

document.querySelector('.options-panel').addEventListener('mouseleave', function() {
     document.querySelector('.options-panel').classList.remove('options-panel-visible');
     document.querySelector('.overlay').classList.remove('overlay-visible');
});

document.querySelector('.options-panel').querySelectorAll('.option:not(.focus)').forEach(option => {
     option.addEventListener('click', function() {
          document.querySelector('.options-panel').classList.remove('options-panel-visible');
          document.querySelector('.overlay').classList.remove('overlay-visible');
     });
});



function openWallpaper() {
     document.getElementById('wallpaper-panel').style.display = 'block'
     document.getElementById('wallpaper-panel').classList.add('wallpaper-panel-visible');
}
function closeWallpaper() {
     document.getElementById('wallpaper-panel').classList.add('wallpaper-panel-hidden');
     document.getElementById('wallpaper-panel').style.display = 'none'
}
document.getElementById('wallpapers').querySelectorAll('.wallpaper-select').forEach(option => {
     option.addEventListener('click', function() {
          document.querySelector('body').style.backgroundImage = `url(${option.querySelector('img').src})`;
          closeWallpaper();
     });
});



document.getElementById('logout-button').addEventListener('click', function() {
     const black_screen = document.createElement('div');
     black_screen.style.position = 'fixed';
     black_screen.style.width = '100vw';
     black_screen.style.height = '100dvh';
     black_screen.style.transition = 'backdrop-filter 0.3s ease-out';
     document.querySelector('body').appendChild(black_screen);
     
     setTimeout(() => {
          black_screen.style.backdropFilter = 'blur(50px) brightness(0)'
     }, 10);

     setTimeout(() => {
          black_screen.style.zIndex = '5'
          const login_screen = document.createElement('iframe');
          login_screen.style.zIndex = '4'
          login_screen.src = 'Login/login.html';
          login_screen.id = 'login-screen';
          document.querySelector('body').appendChild(login_screen);

          setTimeout(() => {
               black_screen.style.backdropFilter = 'blur(0) brightness(1)';
               setTimeout(() => {
                    document.querySelector('body').removeChild(black_screen);
               }, 1500);
          }, 10);
     }, 700);
})