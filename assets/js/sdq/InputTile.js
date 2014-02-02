Class('InputTile').inherits(Widget)({
    ELEMENT_CLASS : 'input-tile',
    prototype : {
        init : function(config){
            Widget.prototype.init.call(this, config);

            this.label = new SDQ.Label();

            this.set(this.number);

            this.bindEvents();
        },

        bindEvents : function(){
            var inputTile = this;

            this.element.on('mouseup', function(){
                console.log('>>>>', inputTile.number);
            });
        },

        set : function(label){
            this.label.set(label);
            this.element.addClass('input-'+label);
        },

        render : function(element, beforeElement){
            Widget.prototype.render.call(this, element, beforeElement);

            this.label.render(this.element);
        },
    }
});