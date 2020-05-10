class BorderRadiusController{

    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputTopLeft = $('#top-left');
        this._inputTopRight = $('#top-right');
        this._inputBottomRight = $('#bottom-right');
        this._inputBottomLeft = $('#bottom-left');
        this._content = document.querySelector('#content');
    }

    form_OnChange(){
        var manipulador = new Manipulador(
            this._inputTopLeft.value,
            this._inputTopRight.value,
            this._inputBottomRight.value,
            this._inputBottomLeft.value
        );

        manipulador.modificarVisualizacao(this._content);
    }
}