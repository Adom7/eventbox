const EventEmitter = require('events');
const myEmitter = new EventEmitter();

function empty(){                               // Exo 1
    myEmitter.on('hi',() => 
    console.log('Ch0oooooooper!')
    );
    myEmitter.emit('hi')
}

function withArgs(names){                       //Exo2
    myEmitter.on('newFellow',(element) =>
    console.log("Here come's a new pirate ->> "+ element)
    );
for (let i = 0; i < names.length; i++) {
    const x = names[i];
    myEmitter.emit('newFellow',x)
}
}


function duplicate(filename){
return filename
}
module.exports={
    empty,
    withArgs,
    duplicate,
}