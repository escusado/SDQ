Class(SDQ,'Grid').inherits(Widget)({
    ELEMENT_CLASS:'grid',
    prototype : {
        init : function(config){
            Widget.prototype.init.call(this, config);

            this.borderToken = 1;
        },

        addTile : function(x,y,number){
            var tile = new SDQ.Tile({
                x : x,
                y : y,
                number : number
            });

            this.appendChild(tile);

            if(this.borderToken === this.size){
                tile.setAsBorderRight();
                this.borderToken = 0;
            }
            this.borderToken++;

            if(this.children.length >= ((this.size*this.size)-this.size)){
                tile.setAsBorderBottom();
            }

            return this;
        },

        setAsBorderRight : function(){
            this.element.addClass('border-right');
            return this;
        },

        setAsBorderBottom : function(){
            this.element.addClass('border-bottom');
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