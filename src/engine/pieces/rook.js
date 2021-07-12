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
            if (i !== position.row) {
            availableMoves.push(Square.at(i,position.col));
            }
            if(i!== position.col) {
            availableMoves.push(Square.at(position.row,i));
            }}
        return availableMoves;
    }
}
