let rockStar = new Map();

rockStar.set("artist", "The Rolling Stones");
rockStar.set("song", "Angie");
rockStar.set("album", "Goats Head Soup");
rockStar.set("singer", "Mick Jagger");

let newRock = new Map();

for (let r of rockStar) {
    if (r[0][0] > 'a') {
        newRock.set(r[0], r[1]);
    }
}

console.log(newRock);



module.exports = { rockStar, newRock };
