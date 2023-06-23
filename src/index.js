import './styles.css';
import { form, refreshButton } from '../modules/elements.js';
// eslint-disable-next-line import/no-named-as-default
import newScore from '../modules/newScores.js';
import { createScores } from '../modules/storage.js';
import addScore from '../modules/addScore.js';
import webIcon from './assets/puntuacion.png';

// Add web icon
const link = document.createElement('link');
link.href = webIcon;
link.rel = 'icon';
document.querySelector('head').appendChild(link);

// Display the scores in the table.
const loadScores = async () => {
  try {
    const scores = await createScores();

    // Sort the array from the highest score to the lowest.
    scores.result.sort((obj1, obj2) => obj2.score - obj1.score);

    scores.result.forEach((obj) => {
      addScore(obj);
    });
  } catch (error) {
    throw new Error(`${error}`);
  }
};

loadScores();

refreshButton.addEventListener('click', () => {
  document.getElementById('scores-container').innerHTML = '';
  loadScores();
});
form.addEventListener('submit', newScore);
