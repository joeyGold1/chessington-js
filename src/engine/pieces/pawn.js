import Piece from './piece';
import Square from '../square';
import Player from '../player';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        console.log(this.player);
        const availableMoves = [];
        const position = board.findPiece(this);
        if (this.player === Player.WHITE) {
            availableMoves.push(Square.at(position.row +1 , position.col));
        };
        if (this.player === Player.BLACK) {
            availableMoves.push(Array(Square.at(position.row -1 , position.col)));
        }
        return availableMoves;
    }
}
