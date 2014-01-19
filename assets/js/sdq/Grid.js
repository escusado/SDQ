Class(SDQ,'Grid').inherits(Widget)({
    ELEMENT_CLASS:'grid',
    prototype : {
        init : function(config){
            Widget.prototype.init.call(this, config);
        },

        addTile : function(x,y,number){
            var tile = new SDQ.Tile({
                x : x,
                y : y,
                number : number
            });

            this.appendChild(tile);

            return this;
        },

        render : function(element, beforeElement){
            var grid = this;

            Widget.prototype.render.call(this, element, beforeElement);

            this.children.forEach(function(child){
                child.render(grid.element);
            });
        }

    }
});