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


const createPlaylistBlock = document.querySelector('.create-playlist');
const createPlaylistRocket = document.querySelector('.rocket-create');
const createPlaylistText = document.querySelector('.create-playlist__text');
const createPlaylistGirls = document.querySelectorAll('.girl-create');

if (createPlaylistBlock) {
  const updateElements = () => {
    const rect = createPlaylistBlock.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const inView = rect.bottom <= windowHeight;

    createPlaylistGirls.forEach(el => {
      el.style.transform = inView ? 'rotate(0deg)' : 'rotate(15deg)';
    });
    createPlaylistRocket.style.transform = inView ? 'translateX(0)' : 'translateX(-150%)';
    createPlaylistText.style.opacity = inView ? '1' : '0';
  };

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateElements();
        ticking = false;
      });
      ticking = true;
    }
  });

  updateElements();
}


// GARMONY BLOCK

// if (garmonyBlock) {
//   const baseTransforms = [
//     { rotate: -20, tx: -55, ty: -55 },
//     { rotate: 0,   tx: 0,   ty: -65 },
//     { rotate: 20,  tx: 55,  ty: -55 },
//     { rotate: 20,  tx: -55, ty: 55  },
//     { rotate: -20,   tx: -55,   ty: 65  }
//   ];

//   const itemStart = 0.90; // момент старта блоков
//   let targetProgress = 0; // целевой прогресс анимации
//   let currentProgress = 0; // текущий прогресс, который будем плавно приближать к target

//   function animateItems() {
//     // плавное приближение currentProgress к targetProgress
//     currentProgress += (targetProgress - currentProgress) * 0.03; // коэффициент 0.1 = плавность

//     garmonyItems.forEach((el, i) => {
//       const t = baseTransforms[i];
//       if (!t) return;

//       const curRotate = t.rotate * (1 - currentProgress);
//       const curTx = t.tx * (1 - currentProgress);
//       const curTy = t.ty * (1 - currentProgress);

//       if (t.rotate !== 0) {
//         el.style.transform = `rotate(${curRotate}deg) translate(${curTx}px, ${curTy}px)`;
//       } else {
//         el.style.transform = `translate(${curTx}px, ${curTy}px)`;
//       }
//     });

//     requestAnimationFrame(animateItems);
//   }

//   window.addEventListener('scroll', () => {
//     const rect = garmonyBlock.getBoundingClientRect();
//     const windowHeight = window.innerHeight;

//     const start = windowHeight * 1.2;
//     const end   = windowHeight * 0.2;

//     let progress = (start - rect.top) / (start - end);
//     progress = Math.min(Math.max(progress, 0), 1);

//     // вычисляем целевой прогресс для блоков с задержкой старта
//     let itemProgress = (progress - itemStart) / (1 - itemStart);
//     itemProgress = Math.min(Math.max(itemProgress, 0), 1);

//     targetProgress = itemProgress;

//     // анимация заголовка остаётся как есть
//     const translateX = 1200 * (1 - progress);
//     garmonyTitle.style.transform = `translateX(${translateX}px)`;
//     garmonyTitle.style.opacity = progress;
//   });

//   // запускаем плавную анимацию
//   animateItems();
// }

const garmonyBlock = document.querySelector('.garmony');
const garmonyTitle = document.querySelector('.garmony__title');
const garmonyItems = document.querySelectorAll('.item-garmony');

if (garmonyBlock) {
  window.addEventListener('scroll', () => {
    const rect = garmonyBlock.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // === Заголовок ===
    const start = windowHeight * 1.2;
    const end = windowHeight * 0.2;

    let progress = (start - rect.top) / (start - end);
    progress = Math.min(Math.max(progress, 0), 1);

    const translateX = 1200 * (1 - progress);
    garmonyTitle.style.transform = `translateX(${translateX}px)`;
    garmonyTitle.style.opacity = progress;

    // === Элементы ===
    const gItemTop = rect.top;

    const a  = Math.max(0, (gItemTop - 150) / 20);
    const a1 = Math.max(0, (gItemTop - 150) / 5);
    const b  = Math.max(0, a - 12);
    const c  = Math.max(0, (gItemTop - 100) / 60);
    const d  = Math.max(0, (gItemTop - 100) / 4);

    const transforms = [
      `rotate(${-a}deg) translate(${-a}px, ${-a1}px)`,
      `translate(0, ${-a1}px)`,
      `rotate(${b}deg) translate(${a}px, ${-a1}px)`,
      `rotate(${c}deg) translate(${-b}px, ${a1}px)`,
      `rotate(${-c}deg) translate(${-a1}px, ${d}px)`
    ];

    garmonyItems.forEach((item, i) => {
      if (i < transforms.length) item.style.transform = transforms[i];
    });
  });
}


















