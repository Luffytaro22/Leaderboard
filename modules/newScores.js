import Score from './constructor.js';
import { form, inputName, inputScore } from './elements.js';
import { storage } from './storage.js';
import addScore from './addScore.js';

export default async function newScore(event) {
  // If the name and score inputs are not empty.
  if (!inputName.validity.valueMissing && !inputScore.validity.valueMissing) {
    event.preventDefault();
    // Creates a new object.
    const myScore = new Score(inputName.value, inputScore.value);
    // Adds the score to the table.
    addScore(myScore);
    try {
      // Save the updated array in the API
      await storage({ score: myScore.score, user: myScore.user });

      // Resets the form.
      form.reset();
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}
