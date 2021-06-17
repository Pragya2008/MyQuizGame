class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){

    question.hide();

   
    Contestant.getPlayerInfo();

    textSize(30);
    text("Result of the Quiz " ,130,230);
    
    var display_height=290;
   
       if(allContestants !== undefined)
        {
         
        fill("blue");
        textSize(20)
        text("NOTE : Contestant who answered correctly are highlighted in green color",15,270);

       //var index;
       //var y;
        
       for(var plr in allContestants) 
       {
         var correctAns="Peacock";

           if(correctAns === allContestants[plr].answer)
             {
               fill("green");
             }
              else
            {
               fill("red");
            }
             display_height=display_height+30;

            text(allContestants[plr].name + " : " +allContestants[plr].answer,70,display_height);
          }

        }

         
      }
        //{

         //}
        
        //green if answeered correctly else red 
        
        
        //allContesttant[plr].name=name;
         //allContesttant[plr].answer=answer;

       //}



    //write code here to hide question elements

    //write code to change the background color here

    //write code to show a heading for showing the result of Quiz

    //call getContestantInfo( ) here


    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }


