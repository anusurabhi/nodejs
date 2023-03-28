var giveMeAJoke = require('give-me-a-joke');
var colors = require('colors');
giveMeAJoke.getRandomDadJoke (function(joke) {
    console.log(joke.rainbow);
}); 