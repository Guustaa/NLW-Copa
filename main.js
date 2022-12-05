document.querySelector("#app").innerHTML = `

      <header>
            <img src="./assets/logo.svg" alt="Logo da NLW">
        </header>
        <main id="card">
            <div class="card">
                <h2>24/11 <span>quinta</span></h2>
                <ul>
                    <li>
                        <img src="./assets/icon brazil.svg" alt="Bandeira do Brasil">
                        <strong>16:00</strong>
                        <img src="./assets/icon serbia.svg" alt="Bandeira da Sérvia">
                    </li>
                </ul>
            </div>
        </main>

`
function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `
}

function createCard(date, day, games) {
  return `
    <div class="card">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}
