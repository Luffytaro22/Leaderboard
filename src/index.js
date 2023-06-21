import './styles.css';
import { form, refreshButton } from '../modules/elements.js';
// eslint-disable-next-line import/no-named-as-default
import newScore from '../modules/newScores.js';
import { createScores } from '../modules/storage.js';
import addScore from '../modules/addScore.js';

// Display the scores in the table.
async function loadScores() {
  const scores = await createScores();

  scores.result.forEach((obj) => {
    addScore(obj);
  });
}

loadScores();

refreshButton.addEventListener('click', () => {
  document.getElementById('scores-container').innerHTML = '';
  loadScores();
});
form.addEventListener('submit', newScore);