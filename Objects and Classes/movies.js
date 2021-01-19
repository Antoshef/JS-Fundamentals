function movies(input) {
    let result = [];
    for (const line of input) {
        if (line.includes('addMovie')) {
            let currentMovie = {};
            let name = line.substring(9);
            currentMovie.name = name;
            result.push(currentMovie);
        }
    }
    for (const line of input) {
          if (line.includes('directedBy')) {
            let [movie, director] = line.split(' directedBy ');
            result.find(x => {
                if (x.name == movie) {
                    x.director = director;
                }
            });
        } else if (line.includes('onDate')) {
            let [movie, date] = line.split(' onDate ');
            result.find(x => {
                if (x.name == movie) {
                    x.date = date;
                }
            });
        }
    }
    result.forEach(x => {
        if (x.name && x.director && x.date) {
        console.log(JSON.stringify(x));
        }
    })
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen',
    'addMovie Batman'
    ]
    )