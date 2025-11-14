export const swiperOptions = {
  spaceBetween: 30,

  slidesPerView: 1,
  slidesPerGroup: 1,
  
  // Autoplay solo para móviles (se desactiva en desktop con breakpoints)
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true
  },
  
  pagination: {
    type: 'progressbar' as const,

  },
  
  // Sin grid por defecto (para móviles)
  grid: {
    rows: 1,
    fill: 'row' as const
  },
  
  breakpoints: {
    // Móviles: Carrusel con 1 card, loop y autoplay
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      grid: {
        rows: 1,
        fill: 'row' as const
      }
    },
    
    // Tablets pequeñas: Grid 3 columnas × 2 filas
    768: {
      slidesPerView: 3,
      slidesPerGroup: 6, // 3 columnas × 2 filas = 6 cards
      spaceBetween: 25,
      loop: false, // ⬅️ Desactiva loop en desktop
      autoplay: false, // ⬅️ Desactiva autoplay en desktop
      grid: {
        rows: 2,
        fill: 'row' as const
      }
    },
    
    // Tablets medianas/Desktop pequeño: 4 columnas × 2 filas
    1024: {
      slidesPerView: 4,
      slidesPerGroup: 8, // 4 columnas × 2 filas = 8 cards
      spaceBetween: 30,
      loop: false,
      autoplay: false,
      grid: {
        rows: 2,
        fill: 'row' as const
      }
    },
    
    // Desktop grande: 5 columnas × 2 filas
    1280: {
      slidesPerView: 4,
      slidesPerGroup: 8, // 4 columnas × 2 filas = 8 cards
      spaceBetween: 30,
      loop: false,
      autoplay: false,
      grid: {
        rows: 2,
        fill: 'row' as const
      }
    }
  }
};



// export const swiperOptions = {
//   spaceBetween: 30,
//   loop: true,
//   autoplay: { delay: 3000, disableOnInteraction: false },

//   pagination: true,
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: 'auto' as const, // <- aquí está el cambio importante

//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//       spaceBetween: 20,
//     },
//     480: {
//       slidesPerView: 1,
//       spaceBetween: 30,
//     },
//     720: {
//       slidesPerView: 3,
//       spaceBetween: 40,
//     },
//   },
// }