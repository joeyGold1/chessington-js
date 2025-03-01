import GameSettings from "./gameSettings";

export default class Square {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }

    static at(row, col) {
        return new Square(row, col);
    }

    equals(otherSquare) {
        return !!otherSquare && this.row === otherSquare.row && this.col === otherSquare.col;
    }
    
    add(otherSquare){
        return new Square(this.row+otherSquare.row,this.col+otherSquare.col)
    }
    
    toString() {
        return `Row ${this.row}, Col ${this.col}`;
    }
    checkOnBoard() {
        if (this.row< GameSettings.BOARD_SIZE && this.col < GameSettings.BOARD_SIZE && this.row > -1 && this.col > -1){
            return true;
        }
        return false;
    }
}
