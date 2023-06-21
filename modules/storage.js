const createScores = async () => {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Z3iGcEUE1HlerNd8QYix/scores/', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    if (!response.ok) {
      throw new Error('Error at getting the scores');
    }

    // eslint-disable-next-line no-return-await
    return await response.json();
  } catch (error) {
    throw new Error(`${error}`);
  }
};

const storage = async (scores) => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Z3iGcEUE1HlerNd8QYix/scores/', {
    method: 'POST',
    body: JSON.stringify({
      user: scores.user,
      score: scores.score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error at adding the score');
      }
      return response.json();
    })
    .catch((error) => {
      throw new Error(`${error}`);
    });
};

export { createScores, storage };