import Player from './player';
import GameSettings from './gameSettings';
import Square from './square';

export default class Board {
    constructor(currentPlayer) {
        this.currentPlayer = currentPlayer ? currentPlayer : Player.WHITE;
        this.board = this.createBoard();
    }

    createBoard() {
        const board = new Array(GameSettings.BOARD_SIZE);
        for (let i = 0; i < board.length; i++) {
            board[i] = new Array(GameSettings.BOARD_SIZE);
        }
        return board;
    }

    setPiece(square, piece) {
        this.board[square.row][square.col] = piece;
    }

    getPiece(square) {
        return this.board[square.row][square.col];
    }

    findPiece(pieceToFind) {
        for (let row = 0; row < this.board.length; row++) {
            for (let col = 0; col < this.board[row].length; col++) {
                if (this.board[row][col] === pieceToFind) {
                    return Square.at(row, col);
                }
            }
        }
        throw new Error('The supplied piece is not on the board');
    }

    movePiece(fromSquare, toSquare) {
        const movingPiece = this.getPiece(fromSquare);        
        if (!!movingPiece && movingPiece.player === this.currentPlayer) {
            this.setPiece(toSquare, movingPiece);
            this.setPiece(fromSquare, undefined);
            this.currentPlayer = (this.currentPlayer === Player.WHITE ? Player.BLACK : Player.WHITE);
        }
    }
    //exclusive square 1, inclusive square 2
    checkPieceBetween(square1,square2){
        console.log("square 1" + square1)
        console.log("square 2" + square2)

        var dirVector = Square.at(Math.sign(square2.row-square1.row), 
                                  Math.sign(square2.col-square1.col));

        var distance = Math.max(Math.abs(square2.row-square1.row), 
                                Math.abs(square2.col-square1.col));

        for (var i = 1; i<=distance; i++){
            var squareToCheck = Square.at(square1.row + i*dirVector.row,
                                          square1.col + i*dirVector.col);
            
            var pieceToCheck =this.getPiece(squareToCheck); 
            if (!!pieceToCheck){
                return true;
            }
        }
        return false;
    }
    static checkDiagonal(square1,square2){
        return (Math.abs(square1.row-square2.row)==Math.abs(square1.col-square2.col))
    }

    static range(n1,n2){
        var numbersToIterate = Array.from(Array(Math.abs(n1-n2)).keys())
        return numbersToIterate.map(x => Math.min([n1,n2]+x));
    }
}