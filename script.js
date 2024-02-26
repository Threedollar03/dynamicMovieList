const listaFilmes = [
  {
    id: 1,
    title: "Matrix",
    poster:
      "https://img.elo7.com.br/product/zoom/2679A17/big-poster-filme-matrix-lo02-tamanho-90x60-cm-poster-de-filme.jpg",
    genre: "Ação, Ficção Científica",
    rated: "R",
    stars: 4,
    synopsis:
      "Um programador de computador descobre a verdade por trás de sua realidade e sua identidade.",
  },
  {
    id: 2,
    title: "Senhor dos Anéis: A Sociedade do Anel",
    poster:
      "https://img.elo7.com.br/product/main/2692755/poster-o-senhor-dos-aneis-a-sociedade-do-anel-lo05-90x60-cm-geek.jpg",
    genre: "Aventura, Fantasia",
    rated: "PG-13",
    stars: 5,
    synopsis:
      "Um hobbit é incumbido de uma missão para destruir um poderoso anel e impedir que caia nas mãos do mal.",
  },
  {
    id: 3,
    title: "Senhor dos Anéis: As Duas Torres",
    poster:
      "https://img.elo7.com.br/product/zoom/26927C9/poster-o-senhor-dos-aneis-as-duas-torres-lo01-tam-90x60-cm-presente-geek.jpg",
    genre: "Aventura, Fantasia",
    rated: "PG-13",
    stars: 5,
    synopsis:
      "A jornada para destruir o anel continua enquanto a sociedade do anel se divide.",
  },
  {
    id: 4,
    title: "Senhor dos Anéis: O Retorno do Rei",
    poster:
      "https://br.web.img2.acsta.net/medias/nmedia/18/92/91/47/20224867.jpg",
    genre: "Aventura, Fantasia",
    rated: "PG-13",
    stars: 5,
    synopsis:
      "A batalha final pela Terra-média acontece enquanto os destinos dos personagens principais se desenrolam.",
  },
  {
    id: 5,
    title: "A Origem",
    poster:
      "https://br.web.img3.acsta.net/medias/nmedia/18/87/32/31/20028688.jpg",
    genre: "Ação, Ficção Científica",
    rated: "PG-13",
    stars: 4,
    synopsis:
      "Um ladrão especializado em roubar segredos corporativos através do uso da tecnologia de compartilhamento de sonhos é encarregado de uma tarefa inversa: implantar uma ideia na mente de um CEO.",
  },
  {
    id: 6,
    title: "Interestelar",
    poster:
      "https://upload.wikimedia.org/wikipedia/pt/3/3a/Interstellar_Filme.png",
    genre: "Aventura, Drama, Ficção Científica",
    rated: "PG-13",
    stars: 5,
    synopsis:
      "Um grupo de exploradores viaja através de um buraco de minhoca em busca de um novo lar para a humanidade, enfrentando desafios cósmicos e emocionais no processo.",
  },
  {
    id: 7,
    title: "O Poderoso Chefão",
    poster:
      "https://img.elo7.com.br/product/zoom/1E0EB9C/poster-cartaz-o-poderoso-chefao-chefao.jpg",
    genre: "Crime, Drama",
    rated: "R",
    stars: 5,
    synopsis:
      "A saga de uma família de mafiosos italianos nos Estados Unidos, liderada pelo patriarca Vito Corleone.",
  },
  {
    id: 8,
    title: "O Silêncio dos Inocentes",
    poster: "https://br.web.img3.acsta.net/pictures/14/10/07/22/16/591185.jpg",
    genre: "Crime, Drama, Suspense",
    rated: "R",
    stars: 4,
    synopsis:
      "Uma agente do FBI busca a ajuda de um serial killer encarcerado para capturar outro assassino em série.",
  },
  {
    id: 9,
    title: "Os Bons Companheiros",
    poster:
      "https://br.web.img2.acsta.net/medias/nmedia/18/93/46/41/20258439.jpg",
    genre: "Biografia, Crime, Drama",
    rated: "R",
    stars: 4,
    synopsis:
      "A ascensão e queda de um grupo de mafiosos ítalo-americanos em Nova York.",
  },
  {
    id: 10,
    title: "Pulp Fiction: Tempo de Violência",
    poster:
      "https://vertentesdocinema.com/wp-content/uploads/2022/01/pulp-fiction-2.jpeg",
    genre: "Crime, Drama",
    rated: "R",
    stars: 5,
    synopsis:
      "Várias histórias entrelaçadas de criminosos, gangsters e personagens excêntricos se desenrolam em Los Angeles.",
  },
];
const watchList = [];
function createCard(movie) {
  const movieContent = document.createElement("div");
  movieContent.className = "movie__content";

  const movieCard = document.createElement("li");
  movieCard.className = "movie";

  const moviePoster = document.createElement("img");
  moviePoster.className = "movie__poster";

  const movieInfo = document.createElement("div");
  movieInfo.className = "movie__info";

  const movieTitle = document.createElement("h3");
  movieTitle.className = "movie__title";

  const movieGenre = document.createElement("h4");
  movieGenre.className = "movie__genre";

  const movieRating = document.createElement("span");
  movieRating.classList.add("movie__rating");

  if (movie.rated == "R") {
    movieRating.classList.add("movie__rating__r");
  } else if (movie.rated == "PG-13") {
    movieRating.classList.add("movie__rating__pg13");
  } else {
    movieRating.classList.add("movie__rating__g");
  }

  const movieStars = document.createElement("div");
  movieStars.className = "movie__starRating";

  const movieSynopsis = document.createElement("p");
  movieSynopsis.className = "movie__synopsis";

  const movieActions = document.createElement("div");
  movieActions.className = "movie__actions";

  const buttonWatchlist = document.createElement("button");
  buttonWatchlist.className = "movie__action__button";

  const buttonAlugar = document.createElement("button");
  buttonAlugar.className = "movie__action__button";

  for (let i = 1; i <= 5; i++) {
    const starIcon = document.createElement("i");
    starIcon.classList.add("fa", "fa-star");
    if (i <= movie.stars) {
      starIcon.classList.add("starChecked");
    }
    movieStars.append(starIcon);
  }

  buttonWatchlist.addEventListener('click', function(){
    for(let i = 0; i<watchList.length;i++){
      if(watchList[i].id == movie.id){
        alert('Este filme já foi adicionado')

    }
  }
  watchList.push(movie);
  renderWatchListCards(watchList)
    
    
  })

  moviePoster.src = movie.poster;
  moviePoster.alt = `Poster do ${movie.title}`;

  movieTitle.innerText = movie.title;
  movieGenre.innerText = movie.genre;
  movieRating.innerText = movie.rated;
  movieSynopsis.innerText = movie.synopsis;
  buttonWatchlist.innerText = "Adicionar a Watchlist";
  buttonAlugar.innerText = "Alugar";

  movieActions.append(
    buttonWatchlist,
     buttonAlugar
     );

  movieInfo.append(
    movieTitle,
    movieGenre,
    movieRating,
    movieStars,
    movieSynopsis
  );

  movieContent.append(movieInfo, movieActions);

  movieCard.append(moviePoster, movieContent);

  return movieCard;
}

function renderListCards(movie) {
  const moviesUl = document.querySelector(".movies__list");
  for (let i = 0; i < movie.length; i++) {
    const cards = createCard(movie[i]);
    moviesUl.append(cards);
  }
}

renderListCards(listaFilmes);

function renderWatchListCards(movie) {
  const moviesUl = document.querySelector(".watchlist__list");
  moviesUl.innerHTML = "";
  for (let i = 0; i < movie.length; i++) {
    const cards = createWatchListCard(movie[i]);
    moviesUl.appendChild(cards);
  }
}


function createWatchListCard(movie) {
  const movieCard = document.createElement("li");
  movieCard.classList.add("movie");
  movieCard.classList.add("movie__watchList");

  const moviePoster = document.createElement("img");
  moviePoster.className = "movie__poster";

  const movieInfo = document.createElement("div");
  movieInfo.className = "movie__info";

  const movieTitle = document.createElement("h3");
  movieTitle.className = "movie__title_watchList";

  const movieGenre = document.createElement("h4");
  movieGenre.className = "movie__genre";

  moviePoster.src = movie.poster;
  moviePoster.alt = `Poster do ${movie.title}`;

  movieTitle.innerText = movie.title;
  movieGenre.innerText = movie.genre;


  movieInfo.append(
    movieTitle,
    movieGenre,

  );
  movieCard.append(
    moviePoster,
    movieInfo,
  );
  return movieCard
}

