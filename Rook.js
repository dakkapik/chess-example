class Rook extends Board {
  constructor(x,y){
    super();
    this.x = x;
    this.y = y;
    this.active = false;
    
    document.addEventListener('click',()=> {
      let x = floor(mouseX/this.cellWidth);
      let y = floor(mouseY/this.cellWidth);
      
      if(this.x === x && this.y === y)
      { this.active = !this.active }
      
      if(this.active && this.board[y][x] === 1){
        this.attack(false)
        this.x = x;
        this.y = y;
        this.active = false;
      }
      
    })
    
  }
  
  draw(){
    fill("yellow")
    
    rect(
      this.x * this.cellWidth, 
      this.y * this.cellWidth, 
      this.cellWidth, 
      this.cellWidth
    )
    
    if(this.active) {
      this.attack(true)
    } else {
      this.attack(false)
    }
  }
  
  attack(active){
    for(let y = 0; y < this.board.length; y++){
      for(let x = 0; x < this.board[0].length; x++){
        if(x === this.x || y === this.y){
          if(active){
            this.board[y][x] = 1;
            fill("#FF000068")
            rect(
              x*this.cellWidth, 
              y*this.cellWidth, 
              this.cellWidth, 
              this.cellWidth
            )
          } else {
            this.board[y][x] = 0;
          }
        }
      }
    }
  }
}

