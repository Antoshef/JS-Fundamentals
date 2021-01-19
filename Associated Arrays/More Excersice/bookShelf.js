function bookShelf(input) {
    let result = {};
    let idents = {};
    function Book(book, author, genre) {
        this.book = book,
        this.author = author,
        this.genre = genre;
    }
    for (let line of input) {
        if (line.includes('->')) {
            let [id, shelf] = line.split(' -> ');
            if (!idents.hasOwnProperty(id)) {
                result[shelf] = [];
                idents[id] = {name: shelf, count: 0};
            }
        }else {
            let [book, arg] = line.split(': ');
            let [author, genre] = arg.split(', ');
            let current = new Book(book, author, genre);
            if (result.hasOwnProperty(genre)) {
                result[genre].push(current);
                for (let line in idents) {
                    if (idents[line].name == genre) {
                        idents[line].count++;
                    }
                }
            }
        }
    }
    let sorted = Object.entries(idents)
    .sort((a, b) => sortingShelfs(a, b));
    for (let line of sorted) {
        let id = line[0];
        let name = line[1].name;
        let count = line[1].count;
        console.log(`${id} ${name}: ${count}`);
        let ordered = result[name];
        ordered = ordered.sort((a, b) => ordering(a, b));
        for (let next of ordered) {
            console.log(`--> ${next.book}: ${next.author}`);
        }
    }

    function sortingShelfs(a, b) {
        return b[1].count - a[1].count;
    }
    function ordering(a, b) {
        return a.book.localeCompare(b.book);
    }
}
bookShelf([
    '1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery', 
    '2 -> mystery', '3 -> sci-fi', 'Child of Silver: Bruce Rich, mystery', 
    'Hurting Secrets: Dustin Bolt, action', 'Future of Dawn: Aiden Rose, sci-fi', 
    'Lions and Rats: Gabe Roads, history', '2 -> romance', 
    'Effect of the Void: Shay B, romance', 'Losing Dreams: Gail Starr, sci-fi', 
    'Name of Earth: Jo Bell, sci-fi', 'Pilots of Stone: Brook Jay, history'
])