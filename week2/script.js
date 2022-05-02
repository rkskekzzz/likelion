const titleContainer = document.querySelector('.title-container');
const titleBtn = document.querySelector('#startBtn');
const questionContainer = document.querySelector('.question-container');
const question = document.querySelector('#question');
const type = document.querySelector('#type');
const aBtn = document.querySelector('#a');
const bBtn = document.querySelector('#b');
const EI = document.querySelector('#EI');
const SN = document.querySelector('#SN');
const TF = document.querySelector('#TF');
const JS = document.querySelector('#JP');
const pro = document.querySelector('.progress-bar');
const MBTI = document.querySelector('#mbti');
const explain = document.querySelector('#explain');
const image = document.querySelector('#result-img');
const resultContainer = document.querySelector('.result-container');

const q = {
  1: {
    title: '문제 1번',
    type: 'EI',
    A: 'E',
    B: 'I',
  },
  2: { title: '문제 2번', type: 'EI', A: 'E', B: 'I' },
  3: { title: '문제 3번', type: 'EI', A: 'E', B: 'I' },
  4: { title: '문제 4번', type: 'SN', A: 'S', B: 'N' },
  5: { title: '문제 5번', type: 'SN', A: 'S', B: 'N' },
  6: { title: '문제 6번', type: 'SN', A: 'S', B: 'N' },
  7: { title: '문제 7번', type: 'TF', A: 'T', B: 'F' },
  8: { title: '문제 8번', type: 'TF', A: 'T', B: 'F' },
  9: { title: '문제 9번', type: 'TF', A: 'T', B: 'F' },
  10: { title: '문제 10번', type: 'JP', A: 'J', B: 'P' },
  11: { title: '문제 11번', type: 'JP', A: 'J', B: 'P' },
  12: { title: '문제 12번', type: 'JP', A: 'J', B: 'P' },
};
const result = {
  ISTJ: {
    animal: '하마',
    explain: '하마 설명',
    img: 'lion.jpg',
  },
  ISFJ: { animal: '부엉이', explain: '부엉이 설명', img: 'lion.png' },
  INFJ: { animal: '물소', explain: '물소 설명', img: 'lion.png' },
  INTJ: { animal: '치타', explain: '치타 설명', img: 'lion.png' },
  ISTP: { animal: '나무늘보', explain: '나무늘보 설명', img: 'lion.png' },
  ISFP: { animal: '거북이', explain: '거북이 설명', img: 'lion.png' },
  INFP: { animal: '코끼리', explain: '코끼리 설명', img: 'lion.png' },
  INTP: { animal: '침팬지', explain: '침팬지 설명', img: 'lion.png' },
  ESTP: { animal: '악어', explain: '악어 설명', img: 'lion.png' },
  ESFP: { animal: '미어캣', explain: '미어캣 설명', img: 'lion.png' },
  ENFP: { animal: '멋쟁이 사자', explain: '멋쟁이 사자 설명', img: 'lion.png' },
  ENTP: { animal: '태양새', explain: '태양새 설명', img: 'lion.png' },
  ESTJ: { animal: '기린', explain: '기린 설명', img: 'lion.png' },
  ESFJ: { animal: '고릴라', explain: '고릴라 설명', img: 'lion.png' },
  ENFJ: { animal: '카피바라', explain: '카피바라 설명', img: 'lion.png' },
  ENTJ: { animal: '호랑이', explain: '호랑이 설명', img: 'lion.png' },
};

let num = 1;

// 여기까지만 사전 제공
titleBtn.addEventListener('click', () => {
  titleContainer.style.display = 'none';
  questionContainer.style.display = 'block';
  updateQuestion();
});

aBtn.addEventListener('click', () => {
  switch (type.innerHTML) {
    case 'EI':
      let e = parseInt(EI.value);
      EI.setAttribute('value', e + 1);
      break;
    case 'SN':
      let s = parseInt(SN.value);
      SN.setAttribute('value', s + 1);
      break;
    case 'TF':
      let t = parseInt(SN.value);
      SN.setAttribute('value', t + 1);
      break;
    case 'JP':
      let j = parseInt(SN.value);
      SN.setAttribute('value', j + 1);
      break;
  }
  updateQuestion();
});

bBtn.addEventListener('click', () => {
  updateQuestion();
});

function updateQuestion() {
  if (num == 13) {
    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';

    let mbti = '';

    EI.value > 2 ? (mbti += 'E') : (mbti += 'I');
    SN.value > 2 ? (mbti += 'S') : (mbti += 'N');
    TF.value > 2 ? (mbti += 'T') : (mbti += 'F');
    JP.value > 2 ? (mbti += 'J') : (mbti += 'P');

    MBTI.innerHTML = mbti;
    explain.innerHTML = result[mbti].explain;
    image.setAttribute('src', result[mbti].img);
  } else {
    pro.setAttribute('style', `width: calc(100/12*${num}%)`);
    question.innerHTML = q[num].title;
    type.innerHTML = q[num].type;
    aBtn.innerHTML = q[num].A;
    bBtn.innerHTML = q[num].B;
    num++;
  }
}
