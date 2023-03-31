/* eslint-disable no-param-reassign */
const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator который будет анимировать timerEl;
const createTimerAnimator = () => {
  function startTimer(seconds) {
    const hour = Math.floor(seconds / 3600);
    const minute = Math.floor((seconds - hour * 3600) / 60);
    const second = Math.floor((seconds - hour * 3600) - minute * 60);

    const hh = (`${hour}`.length === 1) ? `0${hour}` : `${hour}`;
    const mm = (`${minute}`.length === 1) ? `0${minute}` : `${minute}`;
    const ss = (`${second}`.length === 1) ? `0${second}` : `${second}`;

    timerEl.innerText = `${hh}:${mm}:${ss}`;
  }
  let timerId;

  return (seconds) => {
    if (timerId) clearInterval(timerId);

    timerId = setInterval(() => {
      startTimer(seconds);
      seconds += 1;
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении оставались только числа
  const regex = /\d*/;
  const chakedValue = inputEl.value.match(regex);
  inputEl.value = chakedValue;
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
