function chessBoard(num) {
  let board = '<div class="chessboard">\n';
  let previousColor = "black";
  for (let i = 0; i < num; i++) {
    board += "  <div>\n";
    for (let j = 0; j < num; j++) {
      board += `    <span class="${previousColor}"></span>\n`;
      if (previousColor == "black") {
        if (num % 2 == 0 && j == num - 1) {
            break;
        }
        previousColor = "white";
      } else if (previousColor == "white") {
        if (num % 2 == 0 && j == num - 1) {
            break;
        }
        previousColor = "black";
      }
    }
    board += "  </div>\n";
  }
  board += "</div>";
  console.log(board);
}
chessBoard(6);
