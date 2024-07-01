// Set up FAQ interaction by selecting DOM elements
const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer');
const plusIcons = document.querySelectorAll('.plus-icon');
const minusIcons = document.querySelectorAll('.minus-icon');

// Iterating through each question element
for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener('click', function() {
    for (let j = 0; j < answers.length; j++) {
      if (j !== i) {
        answers[j].classList.remove('max-h-64');
        answers[j].classList.add('max-h-0');
        plusIcons[j].classList.remove('hidden');
        minusIcons[j].classList.add('hidden');
      }
    }
    // Toggle visibility for the clicked question's answer
    if (answers[i].classList.contains('max-h-0')) {
      answers[i].classList.remove('max-h-0');
      answers[i].classList.add('max-h-64');
      plusIcons[i].classList.add('hidden');
      minusIcons[i].classList.remove('hidden');
    } else {
      answers[i].classList.remove('max-h-64');
      answers[i].classList.add('max-h-0');
      plusIcons[i].classList.remove('hidden');
      minusIcons[i].classList.add('hidden');
    }
  });
}
