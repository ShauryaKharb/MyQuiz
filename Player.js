class Player{
    constructor(){
        this.index = count;
        this.name=null;
        this.answer = null;
    }

    getName(){
        var playerNameRef = database.ref('/');
        playerNameRef.on("value",function(data){name = data.val();})
    }

    updateName(){
        var something = "Players/player" + this.index;
        database.ref(something).set({ "name" : this.name , "answer" : this.answer });
    }

    getCount(){
        var playerCountref = database.ref('playerCount');
        playerCountref.on("value",(data)=>{
            count = data.val(); 
        })
    }
    
    updateCount(index){
        database.ref('/').update({ PlayerCount : index});
    }
}