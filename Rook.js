class Rook extends Board {
  constructor(x,y){
    super();
    this.x = x;
    this.y = y;
    this.active = false;
    
    document.addEventListener("click", ()=> {
      if(
        mouseX > this.x *this.cellWidth&&
        mouseX < this.x *this.cellWidth+ this.cellWidth  &&
        mouseY > this.y *this.cellWidth&&
        mouseY < this.y *this.cellWidth+ this.cellWidth
      ){
         this.active = !this.active;
        }
    })
  }
  
  draw(){
    fill("yellow")
    rect(this.x*this.cellWidth,this.y*this.cellWidth, this.cellWidth, this.cellWidth)
    if(this.active) {
      this.drawAttack()
    }
  }
  
  drawAttack(){
    fill("#FF000068")
    for(let y = 0; y < this.board.length; y++){
      for(let x = 0; x < this.board[0].length; x++){
        if(x === this.x || y === this.y){
          rect(
            x*this.cellWidth, 
            y*this.cellWidth, 
            this.cellWidth, 
            this.cellWidth
          )
        }
      }
    }
  }
}

