import Piece from './piece';
import Square from '../square';
import Player from '../player';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const availableMoves = [];
        const position = board.findPiece(this);
        const moveDir = (this.player === Player.WHITE ? 1 : -1);
        const add1Square = Square.at(position.row + 1*moveDir , position.col);

        if (add1Square.checkOnBoard() && !board.checkPieceBetween(position,add1Square) ) {
            availableMoves.push(add1Square);
        }
        const linearA = 3.5;
        const linearB = -2.5;
        const add2Square = Square.at(position.row +2 * moveDir, position.col);
        if (add2Square.checkOnBoard() && position.row==Math.round(linearA+moveDir*linearB) && !board.checkPieceBetween(position,add2Square)){
            availableMoves.push(add2Square);
        }
        return availableMoves;
    }
}
