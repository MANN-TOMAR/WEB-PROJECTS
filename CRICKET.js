let getscore = localStorage.getItem('score');
    let score = JSON.parse(getscore) || {
      win: 0,
      lost: 0,
      tie: 0,
    }
    let display = {
      displayscore: function (userchoice, result) {
        document.querySelector("#userchoice").innerText = `YOU CHOOSE ${userchoice}`;
        document.querySelector("#computerchoice").innerText = `COMPUTER CHOOSE ${getcompchoice}`;
        document.querySelector("#result").innerText = result;
        document.querySelector("#score").innerText =``;
        // alert(`YOU CHOOSE ${userchoice}, COMPUTER CHOOSE ${getcompchoice}, ${result}
        //   WIN: ${score.win}
        //   LOST: ${score.lost}
        //   TIE: ${score.tie}`)
      }
    }
    function getcomputerchoice() {
      let computers = Math.random() * 3;
      if (0 <= computers && computers < 1) {
        return 'BAT';
      }
      else if (computers >= 1 && computers < 2) {
        return 'BALL';
      }
      else if (computers >= 2 && computers <= 3) {
        return 'STUMP';
      }
    }
    let getcompchoice;
    function result(userchoice) {
      getcompchoice = getcomputerchoice();
      if (userchoice == getcompchoice) {
        score.tie++;
        return "ITS A TIE";
      }
      else if (userchoice == "BAT") {
        if (getcompchoice == "BALL") {
          score.win++;
          return "YOU WON";
        }
        else {
          score.lost++;
          return "YOU LOST";
        }
      }
      else if (userchoice == "BALL") {
        if (getcompchoice == 'BAT') {
          score.lost++;
          return "YOU LOST";
        }
        else if (getcompchoice == 'STUMP') {
          score.win++;
          return "YOU WIN";
        }
      }
      else {
        if (getcompchoice == 'BAT') {
          score.win++;
          return "YOU WIN";
        }
        else if (getcompchoice == 'BALL') {
          score.lost++;
          return "YOU LOST";
        }
      }
    }
    function showresult(userchoice, result) {
      display.displayscore(userchoice, result);
      localStorage.setItem("score",JSON.stringify(score));
    }
    function resultbutton() {
      document.querySelector("#score").innerText =`SCORE: WIN: ${score.win} LOST: ${score.lost} TIE: ${score.tie}`;
    //   alert(`
    // Win = ${score.win}
    // LOST = ${score.lost}
    // Tie = ${score.tie}`
    //   );
    }