class Board {
    constructor() {
        this.checkBool = true;
        this.board = [
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0]
        ]
        this.cellWidth = 50
    }
    
    draw() {
        for(let i = 0; i < this.board.length; i++) {
            for(let j = 0; j < this.board[0].length; j++){
                if(this.checkBool){
                    fill('white')
                } else {
                    fill('black')
                }
                rect(i*this.cellWidth,j*this.cellWidth, this.cellWidth,this.cellWidth) 
                this.checkBool = !this.checkBool
                }
                this.checkBool = !this.checkBool
        }
    }
}