import Square from "../square";

export default class Piece {
    constructor(player) {
        this.player = player;
        this.name = '';
    }

    getAvailableMoves(board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    moveTo(board, newSquare) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }

    checks(board) {
        var kingPosition;
    for(var i=0; i<8; i++) {
        for(var j=0; j<8; j++){
            if(!!board.getPiece(Square.at(i,j)) && board.getPiece(Square.at(i,j)).name == 'king' && board.getPiece(Square.at(i,j)).player != this.player) {
                kingPosition = Square.at(i,j);
            }
        }
        
    }
    const possibleMoves = this.getAvailableMoves(board);
    for(var move in possibleMoves) {
        if (move.equals(kingPosition)) {
            return true;
        }
    }
    return false;
    }

}
