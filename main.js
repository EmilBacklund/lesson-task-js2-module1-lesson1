// const options = { method: "GET" };

// fetch("https://www.breakingbadapi.com/api/characters", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

const url = "https://www.breakingbadapi.com/api/characters";

const resultsContainer = document.querySelector(".results");

async function getCharacters() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    console.log(results);

    for (let i = 0; i < results.length; i++) {
      let characterName = results[i].name;
      let characterBirthday = results[i].birthday;
      let characterNickname = results[i].nickname;
      let characterImg = results[i].img;

      if (i === 7) break;

      //   let combinedOccupations = results[i].occupation.map((occupation) => {
      //     return `<span>${occupation}</span>`;
      //   });

      let combinedOccupations = results[i].occupation.map(
        (occupation) => `<span>${occupation}</span>`
      );

      resultsContainer.innerHTML += `
      <div class="character-detail">
      <div class="character-img-container"><img src="${characterImg}"></div>
      <div class="details">
          <p>Name: ${characterName}</p>
          <p>Nickname: ${characterNickname}</p>
          <p>Birthday: ${characterBirthday}</p>
          <p>Occupations:${combinedOccupations}</p>
      </div>
      </div>`;
    }
  } catch (error) {
    console.log(error);
  }
}

getCharacters();
