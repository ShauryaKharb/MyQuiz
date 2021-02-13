class Questions{
    constructor(){
        // QUESTIONS AND OPTIONS
        this.question = createElement('h1');
        this.opt1 = createElement('h2');
        this.opt2 = createElement('h2');
        this.opt3 = createElement('h2');
        this.opt4 = createElement('h2');

        // BUTTONS
        this.nameBox = createInput("Your name");
        this.valueBox = createInput("Answer");
        this.submitButton = createButton("Submit");

    }
    display(){

        // QUESTIONS AND OPTIONS
        this.question.html("Which existed first CHICKEN or EGG ?");
        this.question.position(width/2-320,height/2-140);
        
        this.opt1.html("1. chicken");
        this.opt1.position(width/2-320,height/2-82);

        this.opt2.html("2. Egg");
        this.opt2.position(width/2-320,height/2-40);
        
        this.opt3.html("3. it's a silly question");
        this.opt3.position(width/2-320,height/2);

        this.opt4.html("4. me 😎");
        this.opt4.position(width/2-320,height/2+40);

        // BUTTONS
        this.nameBox.position(width/2-325,325);

        this.valueBox.position(width/2-75,325);
        
        this.submitButton.position(width/2+200,325);

        // FUNCTIONS 😲😲😲
        this.submitButton.mousePressed(()=>{
            clear();
            background("#d6e861");
            this.nameBox.hide();
            this.valueBox.hide();
            this.submitButton.hide();

            player.name = this.nameBox.value();
            
            playerCount+=1;
            player.index = playerCount;
            player.updateCount(playerCount)

            player.answer = this.valueBox.value();
            player.updateName();

        })
    }
}