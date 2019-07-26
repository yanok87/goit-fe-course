import quizData from './quiz-data.js';

const questionObj = {
  question: 'Что возвращает метод Array.prototype.filter()?',
  choices: [
    'Массив, если результат работы содержит более одного элемента',
    'Один элемент, если только он прошел фильтрацию',
    'Всегда массив',
  ],
  answer: 2,
};

const form = document.querySelector('form');
form.className = 'form';
const fragment = document.createDocumentFragment();



quizData.questions.forEach((questionObj, index) => {
  const section = document.createElement('section');
  section.className = "question-section";

  const h3 = document.createElement('h3');
  h3.className = "question-text";
  h3.textContent = `${index + 1}. ${questionObj.question}`;

  const ol = document.createElement('ol');
  ol.className = "choices-list";

  const createChoice = function(choice, index, choiseIndex){
    const li = document.createElement('li');

    const label = document.createElement('label');
    label.textContent = choice;

    const input = document.createElement('input');
    input.setAttribute('type', 'radio');
    input.setAttribute('name', index);
    input.setAttribute('value', choiseIndex);

    label.prepend(input);
    li.append(label);

    return li;
  }

  questionObj.choices.forEach((choice, choiseIndex) => {
    ol.append(createChoice(choice, index, choiseIndex));
  })

  section.append(h3, ol);
  fragment.append(section);

})

form.prepend(fragment);

const h1 = document.createElement('h1');
h1.className = "title";
h1.textContent = quizData.title;

form.prepend(h1);

// =============== EVENTLISTENER


function handleSubmit (event){
  event.preventDefault();

  const choices = [...document.querySelectorAll('input:checked')].map(el => el.value);
  console.log('choices :', choices);
  const answerCount = getCorrectAnswers(choices, quizData.questions);
  console.log('answerCount :', answerCount);
}

form.addEventListener('submit', handleSubmit);

const getCorrectAnswers = (choices, questions) => {
  const correctAnswers = choices.reduce((acc, choice, indx) => {
    if(questions[indx].answer === Number(choice)) {
      return acc += 1;
    }
    return acc;
  }, 0)
  // return correctAnswers;

  if(choices < 6){
    form.reset();
    return alert(`You didn't answer all the questions`);
  };

  if( correctAnswers === 1) {
    form.reset();
    return alert(`You STUUUPID! You've got ${correctAnswers} correct answer!`);
  };

  if( correctAnswers === 2){
    form.reset();
    return alert(`You STUUUPID! You've got ${correctAnswers} correct answers!`);
  };
  if(correctAnswers >= 2 && correctAnswers < 6){
    form.reset();
    return alert(`Learn harder! You've got ${correctAnswers} correct answers!`);
  };
  if(correctAnswers === 6){
    form.reset();
    return alert(`Keep it up BADAAASS! You've got ${correctAnswers} correct answers!`);
  }
}




