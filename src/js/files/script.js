// Підключення функціоналу "Чертоги Фрілансера"
import { act } from "react";
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

// PARALLAX

const parallax = document.querySelectorAll('.parallax-item');
if (parallax.length) {
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        parallax.forEach(el => {
            el.style.transform = `translateY(${-scrolled * 0.2}px)`;
        });
    });
}

// TICKER

const ticker = document.querySelector('.ticker');
const createPlaylistCircle = document.querySelector('.circle-playlist__image');

if (ticker) {
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        ticker.style.transform = `translateX(${-scrolled * 0.8}px)`;
        createPlaylistCircle.style.transform = `rotate(${-scrolled * 0.5}deg)`;
    });
}

// ACTIONS BLOCK

const actionsBlock = document.querySelector('.actions');
const actionsItem = document.querySelectorAll('.actions__item');
const actionsTitle = document.querySelectorAll('.actions__text');
const actionsDescription = document.querySelectorAll('.actions__description');

if (actionsBlock) {
  window.addEventListener('scroll', () => {
    const rect = actionsBlock.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
      const visible = windowHeight - rect.top;
      let progress = visible / rect.height;
      progress = Math.min(Math.max(progress, 0), 1);

      // функция с задержкой: стартует позже, но всё равно доходит до 1
      function delayedOpacity(p, delay) {
        let value = (p - delay) / (1 - delay);
        return Math.min(Math.max(value, 0), 1);
      }

      // рамки — без задержки
      actionsItem.forEach(el => {
        el.style.opacity = delayedOpacity(progress, 0);
      });

      // заголовки — позже (примерно через 30% скролла блока)
      actionsTitle.forEach(el => {
        el.style.opacity = delayedOpacity(progress, 0.3);
      });

      // описания — ещё позже (примерно через 60%)
      actionsDescription.forEach(el => {
        el.style.opacity = delayedOpacity(progress, 0.6);
      });

    } else {
      [...actionsItem, ...actionsTitle, ...actionsDescription].forEach(el => el.style.opacity = 0);
    }
  });
}


// CREATE-PLAYLIST BLOCK

const createPlaylistBlock = document.querySelector('.create-playlist'),
  createPlaylistRocket = document.querySelector('.rocket-create'),
  createPlaylistText = document.querySelector('.create-playlist__text'),
  createPlaylistGirl = document.querySelectorAll('.girl-create');
  

if (createPlaylistBlock) {

  window.addEventListener('scroll', () => {
    const rect = createPlaylistBlock.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const scrolled = window.scrollY;

    // rect.bottom — расстояние от верха окна до низа элемента
    if (rect.bottom <= windowHeight) {
      // элемент полностью виден (дошли до низа)
      createPlaylistGirl.forEach(el => el.style.transform = 'rotate(0deg)');
      createPlaylistRocket.style.transform = 'translateX(0)';
      createPlaylistText.style.opacity = '1';
    } else {
      createPlaylistGirl.forEach(el => el.style.transform = 'rotate(15deg)');
      createPlaylistRocket.style.transform = 'translateX(-150%)';
      createPlaylistText.style.opacity = '0';
    }
  });
}




