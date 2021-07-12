import Piece from './piece';
import Square from '../square';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const availableMoves = [];
        const position = board.findPiece(this);
        const modifiers = Knight.getKnightModifers();
        for (var modifier of modifiers){
            var possibleSquare = Square.at(position.row+modifier.row, position.col+modifier.col)
            if (possibleSquare.checkOnBoard()) {
                availableMoves.push(possibleSquare);
            }
        }
        return availableMoves;
    }

    static getKnightModifers(){
        var modifiers = []
        for (var i of [-1,1]){
            for (var j of [-2,2]){
                modifiers.push(Square.at(i,j));
                modifiers.push(Square.at(j,i));
            }
        }
        return modifiers;
    }
}
