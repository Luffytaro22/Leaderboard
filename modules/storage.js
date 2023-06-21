async function createScores() {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Z3iGcEUE1HlerNd8QYix/scores/', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    if (!response.ok) {
      throw new Error('Error al obtener los puntajes');
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
    return []; // Devuelve un arreglo vacío en caso de error
  }
}

function storage(scores) {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Z3iGcEUE1HlerNd8QYix/scores/', {
    method: 'POST',
    body: JSON.stringify({
      user: `${scores.user}`,
      score: `${scores.score}`,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => json);
}

export { createScores, storage };