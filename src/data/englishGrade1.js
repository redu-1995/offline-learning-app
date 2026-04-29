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
  {
    id: 's2_a_discovery',
    type: 'audio-discovery',
    big: 'A',
    small: 'a',
    audio: '/audio/en/g1/a_words_group.mp3', 
    subItems: [
      { name: 'Apple', image: '/images/apple.webp' },
      { name: 'Axe', image: '/images/axe.jpg' },
      { name: 'arm', image: '/images/arm.jpg' }
    ]
  },
  {
    id: 's2_b_discovery',
    type: 'audio-discovery',
    big: 'B',
    small: 'b',
    audio: '/audio/en/g1/b_words_group.mp3', // Audio says: "B is for Book, Ball, and Bee"
    subItems: [
      { name: 'Book', image: '/images/book.webp' },
      { name: 'Bag', image: '/images/bag.webp' },
      { name: 'Bat', image: '/images/bat.jpg' }
    ]
  },
  {
    id: 's2_c_discovery',
    type: 'audio-discovery',
    big: 'C',
    small: 'c',
    audio: '/audio/en/g1/c_words_group.mp3', // Audio says: "C is for Chair, Cat, and Cup"
    subItems: [
      { name: 'Chair', image: '/images/chair.webp' },
      { name: 'Cow', image: '/images/cow.webp' },
      { name: 'Carrot', image: '/images/carrot.webp' }
    ]
  },
  {
    id: 's2_d_discovery',
    type: 'audio-discovery',
    big: 'D',
    small: 'd',
    audio: '/audio/en/g1/d_words_group.mp3', // Audio says: "D is for Desk, Dog, and Duck"
    subItems: [
      { name: 'Desk', image: '/images/desk.webp' },
      { name: 'Duster', image: '/images/duster.jppg' },
      { name: 'Dog', image: '/images/dog.jpg' }
    ]
  },

  // --- 3 QUIZZES AFTER THE DISCOVERY SLIDES ---
  {
    id: 'quiz_ad_1',
    type: 'quiz',
    question: 'Which one starts with "A"?',
    options: ['/images/arm.jpg', '/images/book.webp', '/images/desk.webp'],
    correct: 0
  },
  {
    id: 'quiz_ad_2',
    type: 'quiz',
    question: 'Find the "Dog"',
    options: ['/images/carrot.webp', '/images/dog.jpg', '/images/ant.png'],
    correct: 1
  },
  {
    id: 'quiz_ad_3',
    type: 'quiz',
    question: 'Which one is the "Chair"?',
    options: ['/images/desk.webp', '/images/chair.webp', '/images/bag.jpg'],
    correct: 1
  },
  // --- GROUP 2: E, F, G, H ---
  {
    id: 's2_e_discovery',
    type: 'audio-discovery',
    big: 'E',
    small: 'e',
    audio: '/audio/en/g1/e_words_group.mp3', // Audio: "E is for Eraser, Egg, and Elephant"
    subItems: [
      { name: 'Eraser', image: '/images/eraser.webp' },
      { name: 'Elephant', image: '/images/elephant.webp' },
      { name: 'Elbow', image: '/images/elbow.jpg' }
    ]
  },
  {
    id: 's2_f_discovery',
    type: 'audio-discovery',
    big: 'F',
    small: 'f',
    audio: '/audio/en/g1/f_words_group.mp3', // Audio: "F is for Fish, Fan, and Fork"
    subItems: [
      { name: 'Fish', image: '/images/fish.webp' },
      { name: 'Fox', image: '/images/fox.jpg' },
      { name: 'Foot', image: '/images/foot.webp' }
    ]
  },
  {
    id: 's2_g_discovery',
    type: 'audio-discovery',
    big: 'G',
    small: 'g',
    audio: '/audio/en/g1/g_words_group.mp3', // Audio: "G is for Glass, Goat, and Gift"
    subItems: [
      { name: 'Glass', image: '/images/glass.webp' },
      { name: 'Grass', image: '/images/grass.webp' },
      { name: 'Green', image: '/images/green.webp' }
    ]
  },
  {
    id: 's2_h_discovery',
    type: 'audio-discovery',
    big: 'H',
    small: 'h',
    audio: '/audio/en/g1/h_words_group.mp3', // Audio: "H is for House, Hat, and Hippo"
    subItems: [
      { name: 'Hand', image: '/images/hand.webp' },
      { name: 'House', image: '/images/house.jpg' },
      { name: 'Hat', image: '/images/hat.webp' }
    ]
  },

  // --- 3 QUIZZES FOR GROUP E-H ---
  {
    id: 'quiz_eh_1',
    type: 'quiz',
    question: 'Which one is the "Foot"?',
    options: ['/images/foot.webp', '/images/elbow.jpg', '/images/glass.webp'],
    correct: 0
  },
  {
    id: 'quiz_eh_2',
    type: 'quiz',
    question: 'Find the "Hat"',
    options: ['/images/house.jpg', '/images/hat.webp', '/images/fox.jpg'],
    correct: 1
  },
  {
    id: 'quiz_eh_3',
    type: 'quiz',
    question: 'Which one starts with "E"?',
    options: ['/images/green.webp', '/images/glass.webp', '/images/eraser.webp'],
    correct: 2
  },
  // --- GROUP 3: I, J, K, L, M ---
  {
    id: 's2_i_discovery',
    type: 'audio-discovery',
    big: 'I',
    small: 'i',
    audio: '/audio/en/g1/i_words_group.mp3', // Audio: "I is for Ink, Igloo, and Insect"
    subItems: [
      { name: 'Ink', image: '/images/ink.webp' },
      { name: 'Insect', image: '/images/insect.webp' },
      { name: 'Igloo', image: '/images/igloo.jpg' },
      
    ]
  },
  {
    id: 's2_j_discovery',
    type: 'audio-discovery',
    big: 'J',
    small: 'j',
    audio: '/audio/en/g1/j_words_group.mp3', // Audio: "J is for Jam, Jeep, and Jug"
    subItems: [
      { name: 'Jam', image: '/images/jam.webp' },
      { name: 'Jar', image: '/images/jar.webp' },
      { name: 'Jet', image: '/images/jet.webp' }
    ]
  },
  {
    id: 's2_k_discovery',
    type: 'audio-discovery',
    big: 'K',
    small: 'k',
    audio: '/audio/en/g1/k_words_group.mp3', // Audio: "K is for King, Kite, and Key"
    subItems: [
      { name: 'King', image: '/images/king.webp' },
      { name: 'Kite', image: '/images/kite.jpg' },
      { name: 'Key', image: '/images/key.jpg' }
    ]
  },
  {
    id: 's2_l_discovery',
    type: 'audio-discovery',
    big: 'L',
    small: 'l',
    audio: '/audio/en/g1/l_words_group.mp3', // Audio: "L is for Lion, Lamp, and Leaf"
    subItems: [
      { name: 'Lion', image: '/images/lion.webp' },
      { name: 'Leaf', image: '/images/leaf.webp' },
      { name: 'Leg', image: '/images/leg.webp' }
    ]
  },
  {
    id: 's2_m_discovery',
    type: 'audio-discovery',
    big: 'M',
    small: 'm',
    audio: '/audio/en/g1/m_words_group.mp3', // Audio: "M is for Moon, Mouse, and Mug"
    subItems: [
      { name: 'Moon', image: '/images/moon.webp' },
      { name: 'Mouse', image: '/images/mouse.webp' },
      { name: 'Match', image: '/images/match.webp' }
    ]
  },

  // --- 3 QUIZZES FOR GROUP I-M ---
  {
    id: 'quiz_im_1',
    type: 'quiz',
    question: 'Which one is "Igloo"?',
    options: ['/images/igloo.jpg', '/images/jam.webp', '/images/king.webp'],
    correct: 0
  },
  {
    id: 'quiz_im_2',
    type: 'quiz',
    question: 'Find the "Kite"',
    options: ['/images/key.jpg', '/images/kite.jpg', '/images/leaf.webp'],
    correct: 1
  },
  {
    id: 'quiz_im_3',
    type: 'quiz',
    question: 'Which one starts with "M"?',
    options: ['/images/lion.webp', '/images/leg.jpg', '/images/mouse.webp'],
    correct: 2
  },

  // --- GROUP 4: N, O, P, Q, R, S ---
 {
    id: 's2_n_discovery',
    type: 'audio-discovery',
    big: 'N',
    small: 'n',
    audio: '/audio/en/g1/n_words_group.mp3', // Audio: "N is for Nurse, Nose, and Net"
    subItems: [
      { name: 'Nurse', image: '/images/nurse.webp' },
      { name: 'Nail', image: '/images/nail.webp' },
      { name: 'Nine', image: '/images/nine.jpg' }
    ]
  },
  {
    id: 's2_o_discovery',
    type: 'audio-discovery',
    big: 'O',
    small: 'o',
    audio: '/audio/en/g1/o_words_group.mp3', // Audio: "O is for Orange, Owl, and Octopus"
    subItems: [
      { name: 'Orange', image: '/images/orange.png' },
      { name: 'Onion', image: '/images/onion.webp' },
      { name: 'Ostrich', image: '/images/ostrich.webp' }
    ]
  },
  {
    id: 's2_p_discovery',
    type: 'audio-discovery',
    big: 'P',
    small: 'p',
    audio: '/audio/en/g1/p_words_group.mp3', // Audio: "P is for Pancake, Pen, and Pizza"
    subItems: [
      { name: 'Pancake', image: '/images/pancake.png' },
      { name: 'Pen', image: '/images/pen.png' },
      { name: 'Pizza', image: '/images/pizza.png' }
    ]
  },
  {
    id: 's2_q_discovery',
    type: 'audio-discovery',
    big: 'Q',
    small: 'q',
    audio: '/audio/en/g1/q_words_group.mp3', // Audio: "Q is for Queen, Quill, and Quiet"
    subItems: [
      { name: 'Queen', image: '/images/queen.png' },
      { name: 'Quill', image: '/images/quill.png' },
      { name: 'Quiet', image: '/images/quiet.png' }
    ]
  },
  {
    id: 's2_r_discovery',
    type: 'audio-discovery',
    big: 'R',
    small: 'r',
    audio: '/audio/en/g1/r_words_group.mp3', // Audio: "R is for Rain, Rabbit, and Ring"
    subItems: [
      { name: 'Rain', image: '/images/rain.png' },
      { name: 'Rabbit', image: '/images/rabbit.png' },
      { name: 'Ring', image: '/images/ring.png' }
    ]
  },
  {
    id: 's2_s_discovery',
    type: 'audio-discovery',
    big: 'S',
    small: 's',
    audio: '/audio/en/g1/s_words_group.mp3', // Audio: "S is for Sandal, Sun, and Snake"
    subItems: [
      { name: 'Sandal', image: '/images/sandal.png' },
      { name: 'Sun', image: '/images/sun.png' },
      { name: 'Snake', image: '/images/snake.png' }
    ]
  },

  // --- 3 QUIZZES FOR GROUP N-S ---
  {
    id: 'quiz_ns_1',
    type: 'quiz',
    question: 'Which one is "Octopus"?',
    options: ['/images/nurse.png', '/images/octopus.png', '/images/pancake.png'],
    correct: 1
  },
  {
    id: 'quiz_ns_2',
    type: 'quiz',
    question: 'Find the "Rabbit"',
    options: ['/images/rabbit.png', '/images/sandal.png', '/images/queen.png'],
    correct: 0
  },
  {
    id: 'quiz_ns_3',
    type: 'quiz',
    question: 'Which one starts with "P"?',
    options: ['/images/orange.png', '/images/pizza.png', '/images/rain.png'],
    correct: 1
  },

  // --- GROUP 5: T, U, V, W, X, Y, Z ---
  // --- GROUP 5: T, U, V, W, X, Y, Z (1 Letter per Slide, 3 Words each) ---
[
  {
    id: 's2_t_discovery',
    type: 'audio-discovery',
    big: 'T',
    small: 't',
    audio: '/audio/en/g1/t_words_group.mp3', // Audio: "T is for Tomato, Tiger, and Tree"
    subItems: [
      { name: 'Tomato', image: '/images/tomato.png' },
      { name: 'Tiger', image: '/images/tiger.png' },
      { name: 'Tree', image: '/images/tree.png' }
    ]
  },
  {
    id: 's2_u_discovery',
    type: 'audio-discovery',
    big: 'U',
    small: 'u',
    audio: '/audio/en/g1/u_words_group.mp3', // Audio: "U is for Umbrella, Up, and Under"
    subItems: [
      { name: 'Umbrella', image: '/images/umbrella.png' },
      { name: 'Up', image: '/images/up.png' },
      { name: 'Under', image: '/images/under.png' }
    ]
  },
  {
    id: 's2_v_discovery',
    type: 'audio-discovery',
    big: 'V',
    small: 'v',
    audio: '/audio/en/g1/v_words_group.mp3', // Audio: "V is for Van, Vest, and Vase"
    subItems: [
      { name: 'Van', image: '/images/van.png' },
      { name: 'Vest', image: '/images/vest.png' },
      { name: 'Vase', image: '/images/vase.png' }
    ]
  },
  {
    id: 's2_w_discovery',
    type: 'audio-discovery',
    big: 'W',
    small: 'w',
    audio: '/audio/en/g1/w_words_group.mp3', // Audio: "W is for Watch, Whale, and Window"
    subItems: [
      { name: 'Watch', image: '/images/watch.png' },
      { name: 'Whale', image: '/images/whale.png' },
      { name: 'Window', image: '/images/window.png' }
    ]
  },
  {
    id: 's2_x_discovery',
    type: 'audio-discovery',
    big: 'X',
    small: 'x',
    audio: '/audio/en/g1/x_words_group.mp3', // Audio: "X is in Box, Fox, and Six"
    subItems: [
      { name: 'Box', image: '/images/box.png' },
      { name: 'Fox', image: '/images/fox.png' },
      { name: 'Six', image: '/images/six.png' }
    ]
  },
  {
    id: 's2_y_discovery',
    type: 'audio-discovery',
    big: 'Y',
    small: 'y',
    audio: '/audio/en/g1/y_words_group.mp3', // Audio: "Y is for Yo-yo, Yellow, and Yak"
    subItems: [
      { name: 'Yo-yo', image: '/images/yoyo.png' },
      { name: 'Yellow', image: '/images/yellow.png' },
      { name: 'Yak', image: '/images/yak.png' }
    ]
  },
  {
    id: 's2_z_discovery',
    type: 'audio-discovery',
    big: 'Z',
    small: 'z',
    audio: '/audio/en/g1/z_words_group.mp3', // Audio: "Z is for Zebra, Zoo, and Zipper"
    subItems: [
      { name: 'Zebra', image: '/images/zebra.png' },
      { name: 'Zoo', image: '/images/zoo.png' },
      { name: 'Zipper', image: '/images/zipper.png' }
    ]
  },

  // --- 3 QUIZZES FOR GROUP T-Z ---
  {
    id: 'quiz_tz_1',
    type: 'quiz',
    question: 'Which one is the "Whale"?',
    options: ['/images/whale.png', '/images/watch.png', '/images/van.png'],
    correct: 0
  },
  {
    id: 'quiz_tz_2',
    type: 'quiz',
    question: 'Find the "Zebra"',
    options: ['/images/box.png', '/images/zebra.png', '/images/tiger.png'],
    correct: 1
  },
  {
    id: 'quiz_tz_3',
    type: 'quiz',
    question: 'Which one is the "Yo-yo"?',
    options: ['/images/umbrella.png', '/images/six.png', '/images/yoyo.png'],
    correct: 2
  }
]
]
    }
  }
};