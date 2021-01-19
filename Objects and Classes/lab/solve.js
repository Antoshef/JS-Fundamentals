function solve(input) {
    let numOfSongs = input.shift();
    let songList = input.pop();
    let songs = [];
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }
    for (let line of input) {
        let [type, name, time] = line.split('_');
        let song = new Song(type, name, time);
        songs.push(song);
    }
    if (songList == 'all') {
        songs.forEach(x => console.log(x.name));
    } else {
        let filtered = songs.filter(i => i.type == songList);
        filtered.forEach((i) => console.log(i.name));
    }
}
solve([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'favourite']
)