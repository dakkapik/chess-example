class Rook extends Board {
    constructor(x,y){
      super();
      this.x = x;
      this.y = y;
    }
    
    drawAttack(){
      fill("#FF000068")
      for(let y = 0; y < this.board.length; y++){
        for(let x = 0; x < this.board[0].length; x++){
          if(x === this.x || y ===this.y){
            rect(
              this.x*this.cellWidth, 
              this.y*this.cellWidth, 
              this.cellWidth, 
              this.cellWidth
            )
          }
        }
      }
    }
  }