import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hallo,My name is ',
  name: 'ZHENG,JIA-FENG',
  subtitle: 'I am glad you could come',
  cta: 'About me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Hi, My Chinese name is 鄭嘉峰',
  paragraphTwo: 'I am from Changhua, a city in Taiwan province.',
  paragraphThree: 'I like programming and I am passionate about it.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: '1.PNG',
    title: '台灣旅遊部落格',
    info: '以Visual Studio Code為工具做開發，運用HTML，flex切版與CSS建構網頁',
    info2: '分享台灣各地旅遊的網頁',
    url: 'https://feng-10102110.github.io/TWpapago/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '2.PNG',
    title: '呼拉貓鬆餅舖訂購網頁',
    info: '以Visual Studio Code為工具做開發，運用HTML，與CSS建構網頁',
    info2: '運用所學貼近自己的生活，以自家親人開的小店建構出訂購網頁',
    url: 'https://feng-10102110.github.io/Hulacat/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Contact mail',
  btn: 'Click here',
  email: 'blackdim10102110@gmail.com',
};

// FOOTER DATA
export const footerData = {};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
