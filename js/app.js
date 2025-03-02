'use strict'

document.addEventListener('DOMContentLoaded', () => {
    const isTouchDevice = 'ontouchstart' in window;
    if(!isTouchDevice) {
      const cursor = document.getElementById('cursor');
      
      document.addEventListener('mousemove', (e) => {
        cursor.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
      });
  
      document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('mini'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('mini'));
      });
    } else {
      cursor.style.display = 'none';
    }
  });