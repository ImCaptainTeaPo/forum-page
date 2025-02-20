document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', () => {

      const overlay = document.createElement('div');
      overlay.className = 'overlay';
      document.body.appendChild(overlay);
  

      const enlargedImg = document.createElement('img');
      enlargedImg.src = img.src;
      enlargedImg.className = 'enlarged';
      overlay.appendChild(enlargedImg);
  

      overlay.addEventListener('click', () => {
        overlay.remove();
      });
    });
  });
  