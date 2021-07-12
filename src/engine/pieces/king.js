import Piece from './piece';
import Square from '../square';

export default class King extends Piece {
    constructor(player) {
        super(player);
        this.name = 'king';
    }

    getAvailableMoves(board) {
        const availableMoves = [];
        const position = board.findPiece(this);
        const modifiers = King.getKingModifers();
            for (var modifier of modifiers){
                var targetSquare = Square.at(position.row+modifier.row, position.col+modifier.col)
                if (targetSquare.checkOnBoard() && (!board.getPiece(targetSquare) || board.checkOpposingPiece(targetSquare,this.player))) {
                    availableMoves.push(targetSquare);
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
