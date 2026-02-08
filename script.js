//this website is not for all display sizes : non-adaptive 
// i tried my best to document this code. spend time to understand variables

console.log("I intentionally kept the console log statements");
let options = ["stone", "paper", "scissor"];         //computer choice selection logic

let choose  =  () => {
    compChoice = options[Math.floor(Math.random()*3)];
    console.log("computer choice : ", compChoice);

    let id = document.querySelector("#comp_sel");
    id.innerText = "Computer Choice: " + compChoice      // computer choice selection displayed in selection section
}

let userChoice;
let compChoice;
let add;

let stone = () => {                                      //result updation fucntion invoke for all options
    userChoice= "stone";
    console.log("user choice: stone");

    let id = document.querySelector("#user_sel");        //choice is displayed in choice selection section
    id.innerText = "Your Choice:     " + userChoice

    choose();       //choose computer choice
    winner();       //choose winner
    update();       //for increment in score
}
let paper = () => {                                      //similar : refer stone() 
    userChoice= "paper";
    console.log("user choice: paper");

    let id = document.querySelector("#user_sel");
    id.innerText = "Your Choice:     " + userChoice

    choose();       //similar
    winner();
    update();
}
let scissor = () => {                                    //similar : refer stone() 
    userChoice= "scissor";
    console.log("user choice: scissor");

    let id = document.querySelector("#user_sel");
    id.innerText = "Your Choice:     " + userChoice

    choose();       //similar
    winner();
    update();
}


let winner = () => {                                     // logic for winner
    if ( userChoice === compChoice ) {
        console.log("draw");
        add = null;
    } else if ( userChoice === "paper" && compChoice === "scissor"
            ||  userChoice === "stone" && compChoice === "paper"
            ||  userChoice === "scissor" && compChoice === "stone"
    ) {
        console.log("lose");
        add = "comp"
    } else {
        console.log("win")
        add = "user"
    }
    }
    
let update = () => {     
     if (add === "user") {                               //result updation logic
       let id=  document.querySelector("#yourScore")
       id.innerText = Number(id.innerText) + 1;
     } else if(add === "comp") {
        let id=  document.querySelector("#compScore")
       id.innerText = Number(id.innerText) + 1;
     } else {
        console.log("no increment");
     }

     if(add == "user") {                                 //winner msg display logic
        let id = document.querySelector("#result_msg");
        id.innerText = "Victory is yours! Rock on!"

    } else if(add == "comp") {
        let id = document.querySelector("#result_msg");
        id.innerText = "Close one! Better luck next time!"
    } else {
        let id = document.querySelector("#result_msg");
        id.innerText = "Even Stevens!"
    }
}


