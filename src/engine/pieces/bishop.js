import Piece from './piece';
import Square from '../square';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const availableMoves = [];
        const position = board.findPiece(this);
        const modifiers = [Square.at(1,1),Square.at(1,-1),Square.at(-1,1),Square.at(-1,-1)]
        for(var i =1; i<8; i++) {
            for (var modifier of modifiers){
                var possibleSquare = Square.at(position.row+i*modifier.row, position.col+i*modifier.col)
                console.log(possibleSquare);
                if (possibleSquare.checkOnBoard()) {
                    availableMoves.push(possibleSquare);
                }
            }
        }
        console.log(availableMoves);
        return availableMoves;
    }
}
