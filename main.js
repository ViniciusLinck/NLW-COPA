function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/${player1}-bg.svg" 
      alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/${player2}-bg.svg" 
      alt="Bandeira da ${player2}" />
    </li>
  `
}

let delay = -0.3;
function createCard(date, day, games) {
  delay = delay + 0.3;
  return `
      <div class="card" style="animation-delay: ${delay}s"> 
        <h2>${date} <span>${day}</span></h2>
        <ul>
          ${games}
        </ul>
      </div>
  `
}

document.querySelector("#cards").innerHTML = 
      createCard("24/11", "quinta", createGame("brazil", "16:00", "japan")) +
      createCard("28/11", "segunda",
        createGame("argentina", "20:00", "brazil") +
        createGame("cameroon", "20:00", "hungary")
      ) +
      createCard("02/12", "sexta", createGame("brazil", "13:00", "colombia"))

