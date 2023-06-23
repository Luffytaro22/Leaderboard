import { form, inputName, inputScore } from './elements.js';
import { storage } from './storage.js';

const newScore = async (event) => {
  // If the name and score inputs are not empty.
  if (!inputName.validity.valueMissing && !inputScore.validity.valueMissing) {
    event.preventDefault();

    const name = inputName.value;
    const scoreV = inputScore.value;

    try {
      // Save the updated array in the API
      await storage({ score: scoreV, user: name });

      // Resets the form.
      form.reset();
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
};

export default newScore;
