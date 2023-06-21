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
      user: scores.user,
      score: scores.score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error al agregar el puntaje');
      }
      return response.json();
    })
    .then((json) => {
      console.log('Puntaje agregado:', json);
    })
    .catch((error) => {
      console.error(error);
    });
}

export { createScores, storage };