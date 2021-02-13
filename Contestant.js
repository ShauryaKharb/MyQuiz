class Contestant{
    constructor(){

    }// CONSTRUCTOR

    updateState(){
        var gameState = database.ref('gameState');
        gameState.on("value",function(data){
            state = data.val();
        })
    }// UPDATE STATE

    write(y){
        database.ref('/').update({gameState : y});
    }// WRITE

    initialise(){

        if(state===0){
            player = new Player();
            player.getCount();

            questions = new Questions();
            questions.display();
        }

    }// INITIALISE
    
    // end(){
    //     if(player.answer === 5){
    //         game.write(0);
    //     }
    // }
}