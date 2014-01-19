Class(SDQ, 'Tile').inherits(Widget)({
    ELEMENT_CLASS :'tile',
    prototype : {
        init : function(config){
            Widget.prototype.init.call(this, config);

            this.label = new SDQ.Label({
                text : this.number
            });
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
            Widget.prototype.render.call(this, element, beforeElement);

            this.label.render(this.element);
        }
    }
});