Class(SDQ,'Grid').inherits(Widget)({
    ELEMENT_CLASS:'grid',
    prototype : {
        init : function(config){
            Widget.prototype.init.call(this, config);

            this.setGrid();
        },

        setGrid : function(){
            var grid = this;

            this.values.forEach(function(num){
                var tile = new SDQ.Tile({
                    num : num
                });

                grid.appendChild(tile);
            });
        },

        render : function(element, beforeElement){
            Widget.prototype.render.call(this, element, beforeElement);

            this.children.forEach(function(child){
                child.render(board.element);
            });
        }

    }
});