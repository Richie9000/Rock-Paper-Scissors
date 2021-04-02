function computerPlay (){
    var random = Math.floor(Math.random() * 3);
    
    if (random == 0){
      console.log("rock")
    }if (random == 1){
      console.log("scissors")
    }else {
      console.log("paper")
    }

}
computerPlay()