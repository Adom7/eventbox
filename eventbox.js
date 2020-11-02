const EventEmitter = require('events');
const myEmitter = new EventEmitter();

function empty(){
    myEmitter.on('hi',() => 
    console.log('Ch0oooooooper!')
    );
    myEmitter.emit('hi')
}

function withArgs(names){
    myEmitter.on('newFellow',(element) =>
    console.log("Here come's a new pirate ->> "+ element)
    );
for (let i = 0; i < names.length; i++) {
    const x = names[i];
    myEmitter.emit('newFellow',x)
}
}
module.exports={
    empty,
    withArgs,
}