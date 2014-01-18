Class(SDQ, 'StyleTag').inherits(Widget)({
    HTML : '<style></style>',
    prototype : {
        init : function(config){
            Widget.prototype.init.call(this, config);

            this.ruleString = this.ruleString ? this.ruleString : '';

            this.element.text(this.ruleString);
        },
        set : function(ruleString){
            this.ruleString = ruleString;
            this.element.text(this.ruleString);
            return this;
        }
    }
});