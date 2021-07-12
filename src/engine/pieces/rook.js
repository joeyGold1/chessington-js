import Piece from './piece';
import Square from '../square';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const availableMoves = [];
        const position = board.findPiece(this);
        for(var i =0; i<8; i++) {
            var targetSquare = Square.at(i,position.col);
            if (i !== position.row && !board.checkPieceBetween(position, targetSquare)) {
            availableMoves.push(targetSquare);
            }
            targetSquare = Square.at(position.row,i);
            if(i!== position.col && !board.checkPieceBetween(position, targetSquare)) {
            availableMoves.push(targetSquare);
            }}
        return availableMoves;
    }
}
