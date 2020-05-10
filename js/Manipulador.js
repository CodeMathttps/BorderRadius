class Manipulador{
    constructor(topLeft, topRight, bottomRight, bottomLeft){
        this._topLeft = topLeft.length == 0 ? `${topLeft.length}px` : topLeft;
        this._topRight = topRight.length == 0 ? `${topRight.length}px` : topRight;
        this._bottomRight = bottomRight.length == 0 ? `${bottomRight.length}px` : bottomRight;
        this._bottomLeft = bottomLeft.length == 0 ? `${bottomLeft.length}px` : bottomLeft;
    }

    modificarVisualizacao(content){
        content.style.borderRadius = `${this._topLeft} ${this._topRight} ${this._bottomRight} ${this._bottomLeft}`
    }
}