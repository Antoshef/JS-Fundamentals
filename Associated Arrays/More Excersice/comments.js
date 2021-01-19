function comments(input) {
    let users = [];
    let result = {};
    for (let line of input) {
        if (line.includes('user')) {
            let [arg, user] = line.split(' ');
            users.push(user);
        } else if (line.includes('article ')) {
            let [arg, article] = line.split(' ');
            result[article] = [];
        } else if (line.includes('posts on')) {
            let [user, arg] = line.split(' posts on ');
            let [article, comment] = arg.split(': ');
            let checkUser = users.filter(x => x === user);
            if (checkUser.length > 0) {
                if (result.hasOwnProperty(article)) {
                    result[article].push(user + ': ' + comment);
                }
            }
        }
    }
    let sorted = [];
    for (let name in result) {
        let length = Object.values(result[name]).length;
        sorted.push(name + ': ' + length);
    }
    sorted.sort((a, b) => {
        let [aName, aCount] = a.split(': ');
        let [bName, bCount] = b.split(': ');
        return Number(bCount) - Number(aCount);
    })
    sorted = sorted.map(x => {
        let a = x.split(': ');
        return a[0];
    })
    for (let line of sorted) {
        let check = Array.from(result[line]);
        if (check.length > 0) {
            console.log(`Comments on ${line}`);
        }
        check.sort((a, b) => {
            let [aName, aComment] = a.split(': ');
            let [bName, bCommen] = b.split(': ');
            return a.localeCompare(b);
        })
        for (let next of check) {
            let [name, comment] = next.split(': ');
            comment = comment.split(', '
            ).join(' - ');
            console.log(`--- From user ${name}: ${comment}`);
        }
    }
}
comments([
    'user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    // 'someUser posts on Movies: Like, I also like movies very much'
])
