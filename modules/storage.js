function createScores(scores) {
  scores = localStorage.getItem('scores') ? JSON.parse(localStorage.getItem('scores')) : [];
}

function storage(scores) {
  localStorage.setItem('scores', JSON.stringify(scores));
}

export { createScores, storage };