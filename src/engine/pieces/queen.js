import Bishop from './bishop';
import Piece from './piece';
import Rook from './rook';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const position = board.findPiece(this);
        const rook = new Rook(this.player);
        board.setPiece(position, rook);
        const rookAvailableMoves = rook.getAvailableMoves(board)
        const bishop = new Bishop(this.player);
        board.setPiece(position, bishop);
        const availableMoves = rookAvailableMoves.concat(bishop.getAvailableMoves(board));
        board.setPiece(position,this);
        return availableMoves;
    }
}
