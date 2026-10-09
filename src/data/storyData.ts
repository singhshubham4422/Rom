/**
 * Romantic Story & Assets Configuration
 * All image assets and story texts are centrally configured here.
 */

export const STORY_ASSETS = {
  page1: '/images/split_image_1_upscaled.png',
  page2: '/images/split_image_2_upscaled.png',
  page3: '/images/split_image_3_upscaled.png',
  page4: '/images/split_image_4_upscaled.png',
  page5: '/images/split_image_5_upscaled.png',
  page6: '/images/split_image_6_upscaled.png',
  /**
   * Her Old Photo Asset:
   * By default, points to the romantic polaroid artwork.
   * If you wish to replace this with her real photo later, simply drop the photo into
   * the images/ folder and change this path below (e.g., '/images/her_photo.jpg')!
   */
  page7Photo: '/images/split_image_7_upscaled.png',
  page8Movie: '/images/split_image_8_upscaled.png',
  finalScreenshot: '/images/image_last.png',
};

// Complete manifest of required images to preload before revealing the site
export const REQUIRED_IMAGE_PATHS: string[] = [
  STORY_ASSETS.page1,
  STORY_ASSETS.page2,
  STORY_ASSETS.page3,
  STORY_ASSETS.page4,
  STORY_ASSETS.page5,
  STORY_ASSETS.page6,
  STORY_ASSETS.page7Photo,
  STORY_ASSETS.page8Movie,
  STORY_ASSETS.finalScreenshot,
];

export const STORY_CONTENT = {
  page1: {
    question: "Suno, ek chhoti si baat poochhun? 🥹",
    subtext: "Bas 5 minute lagenge, promise! ❤️",
    yesBtn: "YES 💗",
    noBtn: "NO 🥺",
    noResponse: "Arey please, bas 5 minute! 🥺",
    noContinueBtn: "Achha theek hai, poochho! 🥺❤️",
  },
  page2: {
    question: "Achha madam, ek baat batao… 😏",
    subtext: "Kya main tumhe kabhi-kabhi pareshan karta hoon?",
    yesBtn: "YES 😈",
    noBtn: "NO 😲",
    yesResponse: "Achha ji, main badmaash hoon? 😂",
    yesContinueBtn: "Haha aage suno… 👉",
    noResponse: "Sach mein? Pakka soch lo! 😲",
    noContinueBtn: "Sach mein! Next dekho 👉",
  },
  page3: {
    title: "Yaad hai na hamari story? 🥹❤️",
    paragraphs: [
      "Itne saalon tak hum long distance mein rahe. Pehle bas video calls aur phone par baatein hoti thi…",
      "Aur ab finally hum paas mein hain, mil sakte hain, ek-doosre ke saath time spend kar sakte hain.",
      "Socho, kitna kuch badal gaya na? ❤️"
    ],
    nextBtn: "Next ❤️",
  },
  page4: {
    title: "Ek sachhi baat… 🥺",
    paragraphs: [
      "Dekho, main tumse bahut pyaar karta hoon. Mere dimaag mein kisi aur ladki ka khayal bhi nahi aata.",
      "Jab tum kisi aur ladke se baat karti ho, toh main thoda insecure feel karta hoon, khaaskar kyunki woh ladka tumhe pehle bhi propose kar chuka hai.",
      "Mujhe pata hai ki tum uske paas nahi ja rahi ho. Lekin shayad main tumhari tarah mature nahi hoon aur apni feelings ko sahi tareeke se handle nahi kar paaya.",
      "Mujhse galti ho gayi. I'm sorry. 🥺"
    ],
    nextBtn: "Next 🥺❤️",
  },
  page5: {
    question: "Maaf karogi kya, meri cutie? 🥹❤️",
    yesBtn: "YES 🥹❤️",
    noBtn: "NO 🥺",
    noResponse: "Main hoon toh tumhare hi na, meri cutie? ❤️\n\nSorry, thoda insecure ho gaya tha. 🥺",
    noContinueBtn: "Ab toh maaf kar do na 🥹❤️",
  },
  page6: {
    lines: [
      "I wanna tell you something… ❤️",
      "I LOVE YOU! ❤️",
      "Accept the flower, please? 🥹❤️"
    ],
    yesBtn: "YES 🌹",
    noBtn: "NO 🙈",
    yesFeedback: "Yayyy! You accepted my rose! 🌹🥰❤️",
    yesContinueBtn: "Next Surprise 🥰👉",
    noPlayfulText: "I LOVE YOU! ❤️",
    noContinueBtn: "Kitna bhi NO bolo, I LOVE YOU! Continue 🥰❤️",
  },
  page7: {
    heading: "Wait… look what I found! 🥹❤️",
    caption: "Tumhari ye purani photo mili… yaad hai? Kitni cute lagti thi meri cutie! 🥰❤️",
    nextBtn: "Next ❤️",
  },
  page8: {
    heading: "Arey haan… kal ka plan! 😍",
    subheading: "Hum movie dekhne ja rahe hain! 🎬🍿",
    question: "Chalogi na mere saath? ❤️",
    yesBtn: "YES 😍",
    noBtn: "NO 🥺",
    yesResponse: "Yayyy! 😍 Can't wait! ❤️",
    yesContinueBtn: "Dekhein kaunsi movie chalna hai! 🍿🎬",
    noResponse: "Please meri cutie, saath chalo na! 🥺❤️",
    noContinueBtn: "Chalo theek hai, saath chalungi! 🍿🎬",
  },
  final: {
    heading: "One last thing… ❤️",
    subheading: "Ye dekho saari movies… batao hum kaunsi dekhne chalein? 🍿🎬",
    tapToZoomHint: "Tap image to view full screen & explore movies 🔍",
    replayBtn: "Replay Our Story From Start ❤️",
  }
};
