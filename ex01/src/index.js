let myArr = [];

function* multiplication(x) {


    for (i = x + 1; i >= 0; i--) {

        myArr.push(x);

        yield x *= 2;
    }
    return x;
}

var num = multiplication(3);

for (let i = 0; i < 3; i++) {

console.log(num.next().value);  

}

  
module.exports = multiplication;


