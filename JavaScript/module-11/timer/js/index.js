class CountdownTimer {
  constructor({selector, targetDate}){
    this.selector = document.querySelector(selector);
    this.targetDate = targetDate;
    this.interval;
    this.createTimer(targetDate);
  }


  createTimer(targetDate){
    const divDays = document.querySelector('.days');
    const divHours = document.querySelector('.hours');
    const divMins = document.querySelector('.mins');
    const divSecs = document.querySelector('.secs');

    function counter() {
    const currentDate = new Date();
    const time = targetDate.getTime() - currentDate.getTime();

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    return {days, hours, mins, secs};
    };

    let countdown;

    this.interval = setInterval(() => {
      countdown = counter();

      divDays.textContent = countdown.days;
      divHours.textContent = countdown.hours;
      divMins.textContent = countdown.mins;
      divSecs.textContent = countdown.secs;
    }, 1000)
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 13, 2020'),
});

// Для подсчета значений используй следующие готовые формулы, где time - разница между
// targetDate и текущей датой.

/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
