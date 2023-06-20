import './styles.css';
import { form } from '../modules/elements.js';
// eslint-disable-next-line import/no-named-as-default
import newScore from '../modules/newScores.js';
import { createScores } from '../modules/storage.js';
import addScore from '../modules/addScore.js';

// Display the scores in the table.
let score = [];
score = createScores(score);
score.forEach((obj) => {
  addScore(obj);
});

form.addEventListener('submit', newScore);