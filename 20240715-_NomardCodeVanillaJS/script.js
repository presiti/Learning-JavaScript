// Objects
const me = {
    nickname : "presiti",
    gender : null,
    likeCoffe : false,
    fatigue : 74
};

console.log(me);

// me = "hi";           //error
me.likeCoffe = true;    //possible
console.log(me.likeCoffe);

me.strong = "weak";
console.log(me);


// homework
const calculator = {
    add : function(a, b){return a + b},
    minus: function(a, b){return a - b},
    divde: function(a, b){return a / b},
    powerof: function(a, b){return a * b}
};

console.log(calculator.add(2,4));
console.log(calculator.minus(2,4));
console.log(calculator.divde(2,4));
console.log(calculator.powerof(2,4));