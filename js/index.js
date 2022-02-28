const loadPlayers = () => {
  const searchField = document.getElementById('player-name');
  const searchValue = searchField.value;
  console.log(searchValue);

  const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`;

  fetch(url)
  .then(response => response.json())
  .then(data => showPlayers(data.player))
}

const showPlayers = data => {
  console.log(data)
}