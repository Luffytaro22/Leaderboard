import './styles.css';
import { form } from '../modules/elements.js';
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

form.addEventListener('submit', newScore);