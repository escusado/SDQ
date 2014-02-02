Class('InputPanel').inherits(Widget)({
    ELEMENT_CLASS:'input-panel',
    prototype : {
        init : function(config){
            var tile;

            Widget.prototype.init.call(this, config);

            for(var i=1; i<10; i+=1){
                tile = new InputTile({
                    number : i
                });

                this.appendChild(tile);

                tile.render(this.element);
            }
        },

        show : function(tileEl){
            var position = tileEl.offset();

            this.setPosition(position);

            this.element.show();
        },

        hide : function(){
            this.element.hide();
        },

        setPosition : function(position){
            this.element.css(position);
        }
    }
});