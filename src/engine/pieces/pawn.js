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
        const moveDir = (this.player === Player.WHITE ? 1 : -1);
        availableMoves.push(Square.at(position.row +1*moveDir , position.col));
        const linearA = 3.5;
        const linearB = -2.5;
        if (position.row==Math.round(linearA+moveDir*linearB)){
            availableMoves.push(Square.at(position.row +2 * moveDir, position.col));
        }
        return availableMoves;
    }
}
