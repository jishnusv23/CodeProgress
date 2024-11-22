class FunctionAlreadyCalled extends Error{
    constructor(message){
        super(message)
            this.name='FunctionAlredyCalled'
        
    }
}

function callOnce(){
    if(callOnce.hasBeen){
        throw new FunctionAlreadyCalled('this is function can be call once')
    }
    console.log('first try function is working')
    callOnce.hasBeen=true
}
callOnce.hasBeen=false

try{    
    callOnce()
    callOnce()
}catch(error){
    if(error instanceof FunctionAlreadyCalled){
            console.error(`Error:${error.name}`);
            console.error(`Error Message:${error.message}`);
            
    }else{

        console.error('someting wrong',err);
    }
    
}