const listaFilmes = [
    {
        title: "Matrix",
        poster: "https://img.elo7.com.br/product/zoom/2679A17/big-poster-filme-matrix-lo02-tamanho-90x60-cm-poster-de-filme.jpg",
        genre: "Ação, Ficção Científica",
        synopsis: "Um programador de computador descobre a verdade por trás de sua realidade e sua identidade.",
    },
    {
        title: "Senhor dos Anéis: A Sociedade do Anel",
        poster: "https://img.elo7.com.br/product/main/2692755/poster-o-senhor-dos-aneis-a-sociedade-do-anel-lo05-90x60-cm-geek.jpg",
        genre: "Aventura, Fantasia",
        synopsis: "Um hobbit é incumbido de uma missão para destruir um poderoso anel e impedir que caia nas mãos do mal.",
    },
    {
        title: "Senhor dos Anéis: As Duas Torres",
        poster: "https://img.elo7.com.br/product/zoom/26927C9/poster-o-senhor-dos-aneis-as-duas-torres-lo01-tam-90x60-cm-presente-geek.jpg",
        genre: "Aventura, Fantasia",
        synopsis: "A jornada para destruir o anel continua enquanto a sociedade do anel se divide.",
    },
    {
        title: "Senhor dos Anéis: O Retorno do Rei",
        poster: "https://br.web.img2.acsta.net/medias/nmedia/18/92/91/47/20224867.jpg",
        genre: "Aventura, Fantasia",
        synopsis: "A batalha final pela Terra-média acontece enquanto os destinos dos personagens principais se desenrolam.",
    },
    {
        title: "A Origem",
        poster: "https://br.web.img3.acsta.net/medias/nmedia/18/87/32/31/20028688.jpg",
        genre: "Ação, Ficção Científica",
        synopsis: "Um ladrão especializado em roubar segredos corporativos através do uso da tecnologia de compartilhamento de sonhos é encarregado de uma tarefa inversa: implantar uma ideia na mente de um CEO.",
    },
    {
        title: "Interestelar",
        poster: "https://upload.wikimedia.org/wikipedia/pt/3/3a/Interstellar_Filme.png",
        genre: "Aventura, Drama, Ficção Científica",
        synopsis: "Um grupo de exploradores viaja através de um buraco de minhoca em busca de um novo lar para a humanidade, enfrentando desafios cósmicos e emocionais no processo.",
    },
];

function createCard(movie) {

    for(let i = 0; i<movie.length;i++){

    
        const moviesUl = document.querySelector('.movies__list')
        
        const movieCard = document.createElement('li');
        movieCard.className = 'movie'
        
        const moviePoster = document.createElement('img');
        moviePoster.className = 'movie__poster';
        
        
        const movieInfo = document.createElement('div');
        movieInfo.className = 'movie__info'
        
        const movieTitle = document.createElement('h3');
        movieTitle.className = 'movie__title';
        
        const movieGenre = document.createElement('h4');
        movieGenre.className = 'movie__genre';
        
        const movieSynopsis = document.createElement('p');
        movieSynopsis.className = 'movie__synopsis';
        


        moviePoster.src = movie[i].poster;
        moviePoster.alt = `Poster do ${movie[i].title}`;
        
        movieTitle.innerText = movie[i].title;
        movieGenre.innerText = movie[i].genre;
        movieSynopsis.innerText = movie[i].synopsis;
        
        
        movieInfo.append(movieTitle, movieGenre, movieSynopsis);
        
        movieCard.append(moviePoster, movieInfo);
        
        moviesUl.append(movieCard);
    }
}
let filme= {
    title: "Interestelar",
    poster: "https://upload.wikimedia.org/wikipedia/pt/3/3a/Interstellar_Filme.png",
    genre: "Aventura, Drama, Ficção Científica",
    synopsis: "Um grupo de exploradores viaja através de um buraco de minhoca em busca de um novo lar para a humanidade, enfrentando desafios cósmicos e emocionais no processo.",
}
createCard(listaFilmes)


