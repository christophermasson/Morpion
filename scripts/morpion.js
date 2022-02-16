var move = 1;
var play = true;

var player1 = 0;
var player2 = 0;

$("#replay").click(function () {
  location.reload();
});

// permet de faire les X et O dans les div
$("#grid div div").click(function () {
  if ($(this).text() == "" && play) {
    if (move % 2 == 1) {
      $(this).append("X");
      $(this).css("color", "#61892f");
    } else {
      $(this).append("O");
      $(this).css("color", "#e85a4f");
    }
    move++;
    if (checkForWinner() != -1 && checkForWinner() != "") {
      if (checkForWinner() == "X") {
        $("body").append('<div class="winner"><span>Winner</span>X</div>');

        $(".winner").css("background-color", "#61892f");
        $("#playerOne").text("1");
      } else {
        $("body").append('<div class="winner"><span>Winner</span>O</div>');

        $(".winner").css("background-color", "#e85a4f");
        $("#playerTwo").text("1");
      }
      play = false;
    }
  }
});

function checkForWinner() {
  sp1 = $("#grid .row:nth-child(1) .cell:nth-child(1)").text();
  sp2 = $("#grid .row:nth-child(1) .cell:nth-child(2)").text();
  sp3 = $("#grid .row:nth-child(1) .cell:nth-child(3)").text();
  sp4 = $("#grid .row:nth-child(2) .cell:nth-child(1)").text();
  sp5 = $("#grid .row:nth-child(2) .cell:nth-child(2)").text();
  sp6 = $("#grid .row:nth-child(2) .cell:nth-child(3)").text();
  sp7 = $("#grid .row:nth-child(3) .cell:nth-child(1)").text();
  sp8 = $("#grid .row:nth-child(3) .cell:nth-child(2)").text();
  sp9 = $("#grid .row:nth-child(3) .cell:nth-child(3)").text();
  //   check rows
  if (sp1 == sp2 && sp2 == sp3) {
    return sp3;
  } else if (sp4 == sp5 && sp5 == sp6) {
    return sp6;
  } else if (sp7 == sp8 && sp8 == sp9) {
    return sp9;
  }
  // check colums
  else if (sp1 == sp4 && sp4 == sp7) {
    return sp7;
  } else if (sp2 == sp5 && sp5 == sp8) {
    return sp8;
  } else if (sp1 == sp5 && sp5 == sp9) {
    return sp9;
  }
  //   check diago
  else if (sp1 == sp5 && sp5 == sp9) {
    return sp9;
  } else if (sp3 == sp5 && sp5 == sp7) {
    return sp7;
  }
  // no winner
  return -1;
}
