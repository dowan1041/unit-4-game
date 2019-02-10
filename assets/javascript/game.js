$(document).ready(function(){
    var targetNumber;
    var losses = 0;
    var wins = 0;
    var counter = 0;
    var yourNumber = 0;
    var image = [
        'assets/images/crystal1.jpg',
        'assets/images/crystal2.jpg',
        'assets/images/crystal3.jpg',
        'assets/images/crystal4.jpg' ]
        
        targetNumber = Math.floor(Math.random()*101+19); //random number 19-120
        $("#targetNumber").html(targetNumber);

        for (var i =0; i < 4; i++) {
            var randomNumber = Math.floor(Math.random()*11+1); //random number 1-12
            
            var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-randomNumber": randomNumber
            });
            crystal.css({
                "background-image":"url('" + image[i] + "')",
                "background-size":"cover"
            });

        $(".crystals").append(crystal); // creating 4 divs in crystal div
        }
    function gameReset() {
        $(".crystals").empty();
        counter = 0;
        $("#yourNumber").html(counter);
        yourNumber = 0;
        targetNumber = Math.floor(Math.random()*101+19); //random number 19-120
        $("#targetNumber").html(targetNumber);

        for (var i =0; i < 4; i++) {
            var randomNumber = Math.floor(Math.random()*11+1); //random number 1-12
            
            var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-randomNumber": randomNumber
            });
            crystal.css({
                "background-image":"url('" + image[i] + "')",
                "background-size":"cover"
            });

        $(".crystals").append(crystal);
        }
    }
    gameReset();
    $(document).on("click", ".crystal", function() {
        
        var value = parseInt($(this).attr('data-randomNumber'));
        //$(this).attr('data-randomNumber') : string
        //parseInt -> to change strings to numbers(value)
        // console.log($(this).attr('data-randomNumber'))
        // console.log(value);
        counter += value;
        // console.log(counter)
        $("#yourNumber").html(counter);
        if (counter > targetNumber) {
            losses ++;
            $("#losses").html(losses);
            $("#message").html("YOU LOST :(");
            gameReset();

        } else if (counter === targetNumber) {
            wins ++;
            $("#wins").html(wins);
            $("#message").html("YOU WON :)")
            gameReset();
        }
        
    });

});





























// $(document).ready(function(){

//     //variables
//     var targetNumber = Math.floor(Math.random()*101+19); //random number 19-120
//     var crystal1 = Math.floor(Math.random()*11+1); //random number 1-12
//     var crystal2 = Math.floor(Math.random()*11+1); //random number 1-12
//     var crystal3 = Math.floor(Math.random()*11+1); //random number 1-12
//     var crystal4 = Math.floor(Math.random()*11+1); //random number 1-12
   
//     var counter = 0; //user's total score
//     var wins = 0;
//     var loses = 0;
//     $("#number-to-guess").text(targetNumber);
//     $("counter").text(counter);

//     $("crystal1").attr(crystal1);
//     $("crystal2").attr(crystal2);
//     $("crystal3").attr(crystal3);
//     $("crystal4").attr(crystal4);

//     function updateInformation() {
//         $("#wins").text(wins);
//         $("#loses").text(loses);
    
//     }
//     // if (targetNumber < crystal1 + crystal2 + crystal3 + crystal4) {
//     //     gameReset();
//     // }

//     function gameReset() {
//         var targetNumber = Math.floor(Math.random()*101+19); //random number 19-120
//         var crystal1 = Math.floor(Math.random()*11+1); //random number 1-12
//         var crystal2 = Math.floor(Math.random()*11+1); //random number 1-12
//         var crystal3 = Math.floor(Math.random()*11+1); //random number 1-12
//         var crystal4 = Math.floor(Math.random()*11+1); //random number 1-12
//         var counter = 0;
//         $("#number-to-guess").text(targetNumber);
//         $("counter").text(counter);
//     }
//     function winner () {
//         wins ++;
//         $("#wins").text(wins);
//         gameReset();
//     }
//     function loser () {
//         loses ++;
//         $("#loses").text(loses);
//         gameReset();
//     }

//     $("#crystal1").on("click", function(){
//         counter = counter + crystal1;
//         $("counter").text(counter);
//         if (counter === targetNumber) {
//             winner();
//         } else if (counter > targetNumber) {
//             loser ();
//         }
//     })

//     $("#crystal2").on("click", function(){
//         counter = counter + crystal2;
//         $("counter").text(counter);
//         if (counter === targetNumber) {
//             winner();
//         } else if (counter > targetNumber) {
//             loser ();
//         }
//     })

//     $("#crystal3").on("click", function(){
//         counter = counter + crystal3;
//         $("counter").text(counter);
//         if (counter === targetNumber) {
//             winner();
//         }else if (counter > targetNumber) {
//             loser ();
//         }
//     })

//     $("#crystal4").on("click", function(){
//         counter = counter + crystal4;
//         $("counter").text(counter);
//         if (counter === targetNumber) {
//             winner();
//         }else if (counter > targetNumber){
//             loser ();
//         }
//     })
// })

// var gameStarted = false;
// var gameFinished = false;
// var wins = 0;
// var loses =0;


// console.log(targetNumber);

// $("number-to-guess").text(targetNumber);

// var counter = 0;
// // Creating four random numbers
// function gameReset (){
//     for (var i=0; i<4; i++) {
//         var numberOptions = [];
//         numberOptions = Math.floor(Math.random()*11+1) //random number 1-12

//         var imageCrystal = $(".crystal-image");
//         imageCrystal.attr("data-crystalvalue", numberOptions[i]);
//     }
//     if (targetNumber < numberOption[0]+numberOption[1]+numberOption[2]+numberOption[3]) {
//         gameStarted = false;
//         gameReset();
//     }
// }
// $(".crystal-image").on("click", function (){
//     var crystalValue = ($(this).attr("data-crystalvalue"));
//     crystalValue = parseInt(crystalValue);

//     counter += crystalValue;

//     $("#counter").text(counter);
//     if (counter === targetNumber) {
//         wins ++;
//     } else if (counter > targetNumber) {
//         loses ++;
//     }

//     updateInformation();

// });

// function updateInformation() { 
//     $("#wins").text(wins);
//     $("#loses").text(loses);

// }