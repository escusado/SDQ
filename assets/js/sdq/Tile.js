Class(SDQ, 'Tile').inherits(Widget)({
    ELEMENT_CLASS :'tile',
    prototype : {
        init : function(config){
            Widget.prototype.init.call(this, config);
            this.label = new SDQ.Label({
                text : config.num
            });
        },

        render : function(element, beforeElement){
            Widget.prototype.render.call(this, element, beforeElement);

            this.label.render(this.element);
        }
    }
});