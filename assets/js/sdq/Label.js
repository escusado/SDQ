Class(SDQ,'Label').inherits(Widget)({
    ELEMENT_CLASS:'label',
    prototype : {
        init : function(config){
            Widget.prototype.init.call(this, config);
            this.element.html(this.text);
        },
        set : function(text){
            this.text = text;
            this.element.html(this.text);
            return this;
        }
    }
});