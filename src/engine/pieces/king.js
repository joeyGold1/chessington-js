import Piece from './piece';
import Square from '../square';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const availableMoves = [];
        const position = board.findPiece(this);
        const modifiers = King.getKingModifers();
            for (var modifier of modifiers){
                var possibleSquare = Square.at(position.row+modifier.row, position.col+modifier.col)
                if (possibleSquare.checkOnBoard()) {
                    availableMoves.push(possibleSquare);
                }
            }
        return availableMoves;
    }

    static getKingModifers(){
        var modifiers = []
        for (var i of [-1,0,1]){
            for (var j of [-1,0,1]){
                if(i !== 0 || j !==0){
                modifiers.push(Square.at(i,j));
            }}
        }
        return modifiers;
    }
}
