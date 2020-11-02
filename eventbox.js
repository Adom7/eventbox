const EventEmitter = require('events');
const myEmitter = new EventEmitter();

function empty(){
    myEmitter.on('hi',() => 
    console.log('Ch0oooooooper!')
    );
    myEmitter.emit('hi')
}

function withArgs(names,array){
    myEmitter.on('newFellow',() =>
    console.log("Here come's a new pirate ->> "+ name)
    );
    myEmitter.emit('newFellow')
}

module.exports={
    empty,
    withArgs
}