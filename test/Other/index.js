class Car {
    move(){
        throw new Error('method cannot access')
    }
}

class EV extends Car{
    move(){
        console.log('new electrical ..')
    }
}

const ev=new EV()
ev.move()