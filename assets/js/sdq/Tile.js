Class(SDQ, 'Tile').inherits(Widget)({
    prototype : {
        init : function(config){
            Widget.prototype.init.call(this, config);

            this.klass = ['tile'];

            this.label = new SDQ.Label();

            this.set({
                type : 'mask',
                number : this.number
            });

            this.element.addClass('inactive');
        },

        setAsBorderRight : function(){
            this.element.addClass('border-right');
            return this;
        },

        setAsBorderBottom : function(){
            this.element.addClass('border-bottom');
            return this;
        },

        animIntro : function(time){
            var tile = this;
            setTimeout(function(){
                tile.element.removeClass('inactive');
            }, time);
        },

        set : function(value){
            this.label.set(value.number);

            value.type = value.number === 0 ? 'user' : value.type;
            value.number = value.type === 'user' ? 'unsolved' : value.number;

            this.klass[1] = value.type;
            this.klass[2] = value.type+'-'+value.number;
            this.element.attr('class', this.klass.join(' '));
        },

        render : function(element, beforeElement){
            Widget.prototype.render.call(this, element, beforeElement);

            this.label.render(this.element);
        }
    }
});