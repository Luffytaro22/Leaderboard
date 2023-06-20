import Score from './constructor.js';
import { inputName, inputScore, form } from './elements.js';
import { createScores, storage } from './storage.js';
import addScore from './addScore.js';

export default function newScore(event) {
  // If the name and score inputs are not empty.
  if (!inputName.validity.valueMissing && !inputScore.validity.valueMissing) {
    event.preventDefault();
    // Creates a new object.
    const myScore = new Score(inputName.value, inputScore.value);
    // Adds the score to the table.
    addScore(myScore);
    let score = [];
    // The score it's assigned to the scores key of the local storage.
    score = createScores(score);
    // Adds the new object to the array.
    score.push(myScore);
    // Save the array in the local storage.
    storage(score);
    // Resets the form.
    form.reset();
  }
}