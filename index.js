// Hàm board : Hàm lưu trạng thái 
// Trạng thái mặc định của 9 ô
let board = ['', '', '', '', '', '', '', '', ''];
let squares = document.querySelectorAll("td")
let go = document.getElementById("go")
console.log(go);
let player = 'X'
for (let i = 0; i < squares.length; i++) {
    squares[i].setAttribute("onClick" , "clickedBox(this)")
}
// Xử lý khi click vào các ô 
function clickedBox(element) {
    let index = element.getAttribute("id")
    if(board[index] === ''){
        board[index] = player
        console.log(board);
        element.innerHTML = player
        let result = checkResult()
        if(result){
           setTimeout(() =>{
            alert("Người thắng cuộc :" + result)
            // Xóa dữ liệu sau khi tìm được người thắng cuộc
            for (let i = 0; i < squares.length; i++) {
                squares[i].innerHTML=''
            }
            // Reset sau  khi tìm được người win
            board = ['', '', '', '', '', '', '', '', ''];
            player = 'X'
            go.innerHTML = player
           } , 500)
        
        }
        player = player === 'X' ? 'O' :'X'
        go.innerHTML = player
    }
}

// Hàm check wins
function checkResult() {
    // kiểm tra 3 ô thẳng hàng theo chiều ngang
    for (let i = 0; i < 9; i += 3) {
      if (board[i] && board[i] === board[i+1] && board[i+1] === board[i+2]) {
        return board[i];
      }
    }
  
    // kiểm tra 3 ô thẳng hàng theo chiều dọc
    for (let i = 0; i < 3; i++) {
      if (board[i] && board[i] === board[i+3] && board[i+3] === board[i+6]) {
        return board[i];
      }
    }
  
    // kiểm tra 3 ô thẳng hàng theo đường chéo chính
    if (board[0] && board[0] === board[4] && board[4] === board[8]) {
      return board[0];
    }
  
    // kiểm tra 3 ô thẳng hàng theo đường chéo phụ
    if (board[2] && board[2] === board[4] && board[4] === board[6]) {
      return board[2];
    }
    if(checkAllBoxesFilled()){
        setTimeout(() =>{
            alert("Hòa")
            // Reset dữ liệu
            for (let i = 0; i < squares.length; i++) {
                squares[i].innerHTML=''
            }
            board = ['', '', '', '', '', '', '', '', ''];
            player = 'X'
            go.innerHTML = player
           } , 500)
    }
  
    // nếu không có ô nào hoàn thành thẳng hàng, trả về null
    return null;
  }

//   Check đi hết các ô
  function checkAllBoxesFilled() {
    for (let i = 0; i < board.length; i++) {
      if (board[i] === '') {
        return false;
      }
    }
    return true;
  }