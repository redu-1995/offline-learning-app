export const englishGrade1 = {
  u1: {
    title: "Unit 1:  My Family",
    sections: {
      s1: [
        // --- CLUSTER 1: A, B, C ---
        {
          id: 'g1_u1_a',
          type: 'alphabet-hero',
          title: 'Letter A',
          big: 'A', small: 'a', icon: 'images/apple.webp', name: 'Apple',
          audio: '/audio/en/g1/a_hero.mp3'
        },
        {
          id: 'g1_u1_b',
          type: 'alphabet-hero',
          title: 'Letter B',
          big: 'B', small: 'b', icon: 'images/ball.jpg', name: 'Ball',
          audio: '/audio/en/g1/b_hero.mp3'
        },
        {
          id: 'g1_u1_c',
          type: 'alphabet-hero',
          title: 'Letter C',
          big: 'C', small: 'c', icon: 'images/coffee.jpg', name: 'Coffee', // Relatable: "Bunna"
          audio: '/audio/en/g1/c_hero.mp3'
        },
        {
          id: 'g1_u1_words_1',
          type: 'letter-focus',
          title: 'A, B, and C Words',
          items: [
            { word: 'Ant', icon: 'images/ant.webp', audio: '/audio/en/g1/ant.mp3' },
            { word: 'Bee', icon: 'images/bee.webp', audio: '/audio/en/g1/bee.mp3' },
            { word: 'Cat', icon: 'images/cat.webp', audio: '/audio/en/g1/cat.mp3' }
          ]
        },
        {
          id: 'g1_u1_quiz_1',
          type: 'quiz',
          title: 'Let’s Play!',
          question: 'Which one is the "Ball"?',
          options: ['images/apple.webp', 'images/ball.jpg', 'images/cat.webp'],
          correct: 1,
          audio: '/audio/en/g1/quiz_ball.mp3'
        },

        // --- CLUSTER 2: D, E, F ---
        {
          id: 'g1_u1_d',
          type: 'alphabet-hero',
          title: 'Letter D',
          big: 'D', small: 'd', icon: 'images/dog.jpg', name: 'Dog',
          audio: '/audio/en/g1/d_hero.mp3'
        },
        {
          id: 'g1_u1_e',
          type: 'alphabet-hero',
          title: 'Letter E',
          big: 'E', small: 'e', icon: 'images/egg.webp', name: 'Egg',
          audio: '/audio/en/g1/e_hero.mp3'
        },
        {
          id: 'g1_u1_f',
          type: 'alphabet-hero',
          title: 'Letter F',
          big: 'F', small: 'f', icon: 'images/fish.webp', name: 'Fish',
          audio: '/audio/en/g1/f_hero.mp3'
        },
        {
          id: 'g1_u1_quiz_2',
          type: 'quiz',
          title: 'Find the Match',
          question: 'Find the letter "E"',
          options: ['D', 'E', 'F'],
          correct: 1,
          audio: '/audio/en/g1/quiz_find_e.mp3'
        },
        {
    id: 'g1_u1_d',
    type: 'alphabet-hero',
    title: 'Letter D',
    big: 'D', small: 'd', icon: 'images/dog.jpg', name: 'Dog',
    audio: '/audio/en/g1/d_hero.mp3'
  },
  {
    id: 'g1_u1_e',
    type: 'alphabet-hero',
    title: 'Letter E',
    big: 'E', small: 'e', icon: 'images/egg.webp', name: 'Egg',
    audio: '/audio/en/g1/e_hero.mp3'
  },
  {
    id: 'g1_u1_f',
    type: 'alphabet-hero',
    title: 'Letter F',
    big: 'F', small: 'f', icon: 'images/fish.webp', name: 'Fish',
    audio: '/audio/en/g1/f_hero.mp3'
  },
  {
    id: 'g1_u1_words_3',
    type: 'letter-focus',
    title: 'D, E, and F Words',
    items: [
      { word: 'Drum', icon: 'images/drum.webp', audio: '/audio/en/g1/drum.mp3' },
      { word: 'Elephant', icon: 'images/elephant.webp', audio: '/audio/en/g1/elephant.mp3' },
      { word: 'Fan', icon: 'images/fan.webp', audio: '/audio/en/g1/fan.mp3' }
    ]
  },
  {
    id: 'g1_u1_quiz_3',
    type: 'quiz',
    title: 'Let’s Play!',
    question: 'Find the "Egg"',
    options: ['images/dog.jpg', 'images/egg.webp', 'images/fish.webp'],
    correct: 1,
    audio: '/audio/en/g1/quiz_egg.mp3'
  },
  {
    id: 'g1_u1_g',
    type: 'alphabet-hero',
    title: 'Letter G',
    big: 'G', small: 'g', icon: 'images/giraffe.webp', name: 'Giraffe',
    audio: '/audio/en/g1/g_hero.mp3'
  },
  {
    id: 'g1_u1_h',
    type: 'alphabet-hero',
    title: 'Letter H',
    big: 'H', small: 'h', icon: 'images/house.jpg', name: 'House',
    audio: '/audio/en/g1/h_hero.mp3'
  },
  {
    id: 'g1_u1_i',
    type: 'alphabet-hero',
    title: 'Letter I',
    big: 'I', small: 'i', icon: 'images/ice_cream.webp', name: 'Ice Cream',
    audio: '/audio/en/g1/i_hero.mp3'
  },
  {
    id: 'g1_u1_words_4',
    type: 'letter-focus',
    title: 'G, H, and I Words',
    items: [
      { word: 'Goat', icon: 'images/goat.jpg', audio: '/audio/en/g1/goat.mp3' },
      { word: 'Hat', icon: 'images/hat.webp', audio: '/audio/en/g1/hat.mp3' },
      { word: 'Igloo', icon: 'images/igloo.jpg', audio: '/audio/en/g1/igloo.mp3' }
    ]
  },
  {
    id: 'g1_u1_quiz_4',
    type: 'quiz',
    title: 'Quick Check!',
    question: 'Which one is a "House"?',
    options: ['images/ice_cream.webp', 'images/house.jpg', 'images/goat.jpg'],
    correct: 1,
    audio: '/audio/en/g1/quiz_house.mp3'
  },
  {
    id: 'g1_u1_j',
    type: 'alphabet-hero',
    title: 'Letter J',
    big: 'J', small: 'j', icon: 'images/jar.webp', name: 'Jar',
    audio: '/audio/en/g1/j_hero.mp3'
  },
  {
    id: 'g1_u1_k',
    type: 'alphabet-hero',
    title: 'Letter K',
    big: 'K', small: 'k', icon: 'images/key.jpg', name: 'Key',
    audio: '/audio/en/g1/k_hero.mp3'
  },
  {
    id: 'g1_u1_l',
    type: 'alphabet-hero',
    title: 'Letter L',
    big: 'L', small: 'l', icon: 'images/lion.webp', name: 'Lion',
    audio: '/audio/en/g1/l_hero.mp3'
  },
  {
    id: 'g1_u1_m',
    type: 'alphabet-hero',
    title: 'Letter M',
    big: 'M', small: 'm', icon: 'images/moon.webp', name: 'Moon',
    audio: '/audio/en/g1/m_hero.mp3'
  },
  {
    id: 'g1_u1_quiz_5',
    type: 'quiz',
    title: 'Animal Fun',
    question: 'Which one is the "Lion"?',
    options: ['images/lion.webp', 'images/giraffe.webp', 'images/dog.jpg'],
    correct: 0,
    audio: '/audio/en/g1/quiz_lion.mp3'
  },
  {
    id: 'g1_u1_n',
    type: 'alphabet-hero',
    title: 'Letter N',
    big: 'N', small: 'n', icon: 'images/nose.jpg', name: 'Nose',
    audio: '/audio/en/g1/n_hero.mp3'
  },
  {
    id: 'g1_u1_o',
    type: 'alphabet-hero',
    title: 'Letter O',
    big: 'O', small: 'o', icon: 'images/orange.webp', name: 'Orange',
    audio: '/audio/en/g1/o_hero.mp3'
  },
  {
    id: 'g1_u1_p',
    type: 'alphabet-hero',
    title: 'Letter P',
    big: 'P', small: 'p', icon: 'images/pen.jpg', name: 'Pen',
    audio: '/audio/en/g1/p_hero.mp3'
  },
  {
    id: 'g1_u1_q',
    type: 'alphabet-hero',
    title: 'Letter Q',
    big: 'Q', small: 'q', icon: 'images/queen.webp', name: 'Queen',
    audio: '/audio/en/g1/q_hero.mp3'
  },
  {
    id: 'g1_u1_r',
    type: 'alphabet-hero',
    title: 'Letter R',
    big: 'R', small: 'r', icon: 'images/rabbit.webp', name: 'Rabbit',
    audio: '/audio/en/g1/r_hero.mp3'
  },
  {
  id: 'g1_u1_words_6',
  type: 'letter-focus',
  title: 'N, O, P, Q, R Words',
  items: [
    { word: 'Net', icon: 'images/net.webp', audio: '/audio/en/g1/net.mp3' },
    { word: 'Owl', icon: 'images/owl.jpg', audio: '/audio/en/g1/owl.mp3' },
   { word: 'Pot', icon: 'images/pot.jpg', audio: '/audio/en/g1/pot.mp3' },    // New word for P
    { word: 'Quilt', icon: 'images/quilt.jpg', audio: '/audio/en/g1/quilt.mp3' }, // New word for Q
    { word: 'Rain', icon: 'images/rain.jpg', audio: '/audio/en/g1/rain.mp3' }
  ]
},
  {
    id: 'g1_u1_quiz_6',
    type: 'quiz',
    title: 'Quick Check!',
    question: 'Find the "Rabbit"',
    options: ['images/nose.jpg', 'images/rabbit.webp', 'images/queen.webp'],
    correct: 1,
    audio: '/audio/en/g1/quiz_rabbit.mp3'
  },
  {
    id: 'g1_u1_s',
    type: 'alphabet-hero',
    title: 'Letter S',
    big: 'S', small: 's', icon: 'images/sun.jpg', name: 'Sun',
    audio: '/audio/en/g1/s_hero.mp3'
  },
  {
    id: 'g1_u1_t',
    type: 'alphabet-hero',
    title: 'Letter T',
    big: 'T', small: 't', icon: 'images/tree.webp', name: 'Tree',
    audio: '/audio/en/g1/t_hero.mp3'
  },
  {
    id: 'g1_u1_u',
    type: 'alphabet-hero',
    title: 'Letter U',
    big: 'U', small: 'u', icon: 'images/umbrella.jpg', name: 'Umbrella',
    audio: '/audio/en/g1/u_hero.mp3'
  },
  {
    id: 'g1_u1_v',
    type: 'alphabet-hero',
    title: 'Letter V',
    big: 'V', small: 'v', icon: 'images/van.webp', name: 'Van',
    audio: '/audio/en/g1/v_hero.mp3'
  },
  {
    id: 'g1_u1_w',
    type: 'alphabet-hero',
    title: 'Letter W',
    big: 'W', small: 'w', icon: 'images/watch.webp', name: 'Watch',
    audio: '/audio/en/g1/w_hero.mp3'
  },
  {
    id: 'g1_u1_quiz_7',
    type: 'quiz',
    title: 'Let’s Play!',
    question: 'Which is the "Sun"?',
    options: ['images/tree.webp', 'images/van.webp', 'images/sun.jpg'],
    correct: 2,
    audio: '/audio/en/g1/quiz_sun.mp3'
  },
  {
    id: 'g1_u1_x',
    type: 'alphabet-hero',
    title: 'Letter X',
    big: 'X', small: 'x', icon: 'images/xylophone.webp', name: 'Xylophone',
    audio: '/audio/en/g1/x_hero.mp3'
  },
  {
    id: 'g1_u1_y',
    type: 'alphabet-hero',
    title: 'Letter Y',
    big: 'Y', small: 'y', icon: 'images/yo_yo.webp', name: 'Yo-yo',
    audio: '/audio/en/g1/y_hero.mp3'
  },
  {
    id: 'g1_u1_z',
    type: 'alphabet-hero',
    title: 'Letter Z',
    big: 'Z', small: 'z', icon: 'images/zebra.jpg', name: 'Zebra',
    audio: '/audio/en/g1/z_hero.mp3'
  },
  {
    id: 'g1_u1_words_8',
    type: 'letter-focus',
    title: 'The Final Letters!',
    items: [
      { word: 'Box', icon: 'images/box.jpg', audio: '/audio/en/g1/box.mp3' },
      { word: 'Yellow', icon: 'images/yellow.jpg', audio: '/audio/en/g1/yellow.mp3' },
      { word: 'Zoo', icon: 'images/zoo.webp', audio: '/audio/en/g1/zoo.mp3' }
    ]
  },
  {
    id: 'g1_u1_quiz_8',
    type: 'quiz',
    title: 'Alphabet Master!',
    question: 'Which one is the "Zebra"?',
    options: ['images/zebra.webp', 'images/yo_yo.webp', 'images/box.webp'],
    correct: 0,
    audio: '/audio/en/g1/quiz_zebra.mp3'
  }
  ],
section2: [
  // --- GROUP 1: A, B, C, D ---
  { id: 'g1_u1_a_h', type: 'alphabet-hero', big: 'A', small: 'a', image: '/images/axe.jpg', name: 'Axe', audio: '/audio/en/g1/a_phonics.mp3' },
  { id: 'g1_u1_b_h', type: 'alphabet-hero', big: 'B', small: 'b', image: '/images/book.png', name: 'Book', audio: '/audio/en/g1/b_phonics.mp3' },
  { id: 'g1_u1_c_h', type: 'alphabet-hero', big: 'C', small: 'c', image: '/images/chair.png', name: 'Chair', audio: '/audio/en/g1/c_phonics.mp3' },
  { id: 'g1_u1_d_h', type: 'alphabet-hero', big: 'D', small: 'd', image: '/images/desk.png', name: 'Desk', audio: '/audio/en/g1/d_phonics.mp3' },
  {
    id: 'quiz_ad_1',
    type: 'quiz',
    question: 'Which one starts with "A"?',
    options: ['/images/axe.png', '/images/book.png', '/images/desk.png'],
    correct: 0
  },
  {
    id: 'quiz_ad_2',
    type: 'quiz',
    question: 'Find the "Book"',
    options: ['/images/chair.png', '/images/book.png', '/images/axe.png'],
    correct: 1
  },
  {
    id: 'quiz_ad_3',
    type: 'quiz',
    question: 'Which one is the "Desk"?',
    options: ['/images/chair.png', '/images/book.png', '/images/desk.png'],
    correct: 2
  },

  // --- GROUP 2: E, F, G, H ---
  { id: 'g1_u1_e_h', type: 'alphabet-hero', big: 'E', small: 'e', icon: '/images/eraser.png', name: 'Eraser', audio: '/audio/en/g1/e_phonics.mp3' },
  { id: 'g1_u1_f_h', type: 'alphabet-hero', big: 'F', small: 'f', icon: '/images/fish.png', name: 'Fish', audio: '/audio/en/g1/f_phonics.mp3' },
  { id: 'g1_u1_g_h', type: 'alphabet-hero', big: 'G', small: 'g', icon: '/images/glass.png', name: 'Glass', audio: '/audio/en/g1/g_phonics.mp3' },
  { id: 'g1_u1_h_h', type: 'alphabet-hero', big: 'H', small: 'h', icon: '/images/house.png', name: 'House', audio: '/audio/en/g1/h_phonics.mp3' },
  {
    id: 'quiz_eh_1',
    type: 'quiz',
    question: 'Which one is the "Fish"?',
    options: ['/images/fish.png', '/images/eraser.png', '/images/glass.png'],
    correct: 0
  },
  {
    id: 'quiz_eh_2',
    type: 'quiz',
    question: 'Find the "House"',
    options: ['/images/glass.png', '/images/house.png', '/images/fish.png'],
    correct: 1
  },
  {
    id: 'quiz_eh_3',
    type: 'quiz',
    question: 'Which one is the "Eraser"?',
    options: ['/images/house.png', '/images/glass.png', '/images/eraser.png'],
    correct: 2
  },

  // --- GROUP 3: I, J, K, L, M ---
  { id: 'g1_u1_i_h', type: 'alphabet-hero', big: 'I', small: 'i', icon: '/images/ink.png', name: 'Ink', audio: '/audio/en/g1/i_phonics.mp3' },
  { id: 'g1_u1_j_h', type: 'alphabet-hero', big: 'J', small: 'j', icon: '/images/jam.png', name: 'Jam', audio: '/audio/en/g1/j_phonics.mp3' },
  { id: 'g1_u1_k_h', type: 'alphabet-hero', big: 'K', small: 'k', icon: '/images/king.png', name: 'King', audio: '/audio/en/g1/k_phonics.mp3' },
  { id: 'g1_u1_l_h', type: 'alphabet-hero', big: 'L', small: 'l', icon: '/images/lion.png', name: 'Lion', audio: '/audio/en/g1/l_phonics.mp3' },
  { id: 'g1_u1_m_h', type: 'alphabet-hero', big: 'M', small: 'm', icon: '/images/moon.png', name: 'Moon', audio: '/audio/en/g1/m_phonics.mp3' },
  {
    id: 'quiz_im_1',
    type: 'quiz',
    question: 'Which one is "Ink"?',
    options: ['/images/ink.png', '/images/jam.png', '/images/king.png'],
    correct: 0
  },
  {
    id: 'quiz_im_2',
    type: 'quiz',
    question: 'Find the "Lion"',
    options: ['/images/king.png', '/images/lion.png', '/images/moon.png'],
    correct: 1
  },
  {
    id: 'quiz_im_3',
    type: 'quiz',
    question: 'Which one is the "Moon"?',
    options: ['/images/lion.png', '/images/ink.png', '/images/moon.png'],
    correct: 2
  },

  // --- GROUP 4: N, O, P, Q, R, S ---
  { id: 'g1_u1_n_h', type: 'alphabet-hero', big: 'N', small: 'n', icon: '/images/nurse.png', name: 'Nurse', audio: '/audio/en/g1/n_phonics.mp3' },
  { id: 'g1_u1_o_h', type: 'alphabet-hero', big: 'O', small: 'o', icon: '/images/orange.png', name: 'Orange', audio: '/audio/en/g1/o_phonics.mp3' },
  { id: 'g1_u1_p_h', type: 'alphabet-hero', big: 'P', small: 'p', icon: '/images/pancake.png', name: 'Pancake', audio: '/audio/en/g1/p_phonics.mp3' },
  { id: 'g1_u1_q_h', type: 'alphabet-hero', big: 'Q', small: 'q', icon: '/images/queen.png', name: 'Queen', audio: '/audio/en/g1/q_phonics.mp3' },
  { id: 'g1_u1_r_h', type: 'alphabet-hero', big: 'R', small: 'r', icon: '/images/rain.png', name: 'Rain', audio: '/audio/en/g1/r_phonics.mp3' },
  { id: 'g1_u1_s_h', type: 'alphabet-hero', big: 'S', small: 's', icon: '/images/sandal.png', name: 'Sandal', audio: '/audio/en/g1/s_phonics.mp3' },
  {
    id: 'quiz_ns_1',
    type: 'quiz',
    question: 'Which one is "Nurse"?',
    options: ['/images/nurse.png', '/images/orange.png', '/images/pancake.png'],
    correct: 0
  },
  {
    id: 'quiz_ns_2',
    type: 'quiz',
    question: 'Find the "Sandal"',
    options: ['/images/rain.png', '/images/sandal.png', '/images/queen.png'],
    correct: 1
  },
  {
    id: 'quiz_ns_3',
    type: 'quiz',
    question: 'Which one is "Rain"?',
    options: ['/images/orange.png', '/images/pancake.png', '/images/rain.png'],
    correct: 2
  },

  // --- GROUP 5: T, U, V, W, X, Y, Z ---
  { id: 'g1_u1_t_h', type: 'alphabet-hero', big: 'T', small: 't', icon: '/images/tomato.png', name: 'Tomato', audio: '/audio/en/g1/t_phonics.mp3' },
  { id: 'g1_u1_u_h', type: 'alphabet-hero', big: 'U', small: 'u', icon: '/images/umbrella.png', name: 'Umbrella', audio: '/audio/en/g1/u_phonics.mp3' },
  { id: 'g1_u1_v_h', type: 'alphabet-hero', big: 'V', small: 'v', icon: '/images/van.png', name: 'Van', audio: '/audio/en/g1/v_phonics.mp3' },
  { id: 'g1_u1_w_h', type: 'alphabet-hero', big: 'W', small: 'w', icon: '/images/watch.png', name: 'Watch', audio: '/audio/en/g1/w_phonics.mp3' },
  { id: 'g1_u1_x_h', type: 'alphabet-hero', big: 'X', small: 'x', icon: '/images/box.png', name: 'Box', audio: '/audio/en/g1/x_phonics.mp3' },
  { id: 'g1_u1_y_h', type: 'alphabet-hero', big: 'Y', small: 'y', icon: '/images/yoyo.png', name: 'Yo-yo', audio: '/audio/en/g1/y_phonics.mp3' },
  { id: 'g1_u1_z_h', type: 'alphabet-hero', big: 'Z', small: 'z', icon: '/images/zebra.png', name: 'Zebra', audio: '/audio/en/g1/z_phonics.mp3' },
  {
    id: 'quiz_tz_1',
    type: 'quiz',
    question: 'Which one is the "Van"?',
    options: ['/images/van.png', '/images/watch.png', '/images/tomato.png'],
    correct: 0
  },
  {
    id: 'quiz_tz_2',
    type: 'quiz',
    question: 'Find the "Zebra"',
    options: ['/images/box.png', '/images/zebra.png', '/images/yoyo.png'],
    correct: 1
  },
  {
    id: 'quiz_tz_3',
    type: 'quiz',
    question: 'Which one is the "Box"?',
    options: ['/images/umbrella.png', '/images/van.png', '/images/box.png'],
    correct: 2
  }
]
    }
  }
};