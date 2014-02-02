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

        show : function(tileEl, layout){
            var position = tileEl.offset();

            this.setPosition(position);

            switch(layout){
                case 0:
                case 1:
                case 2:
                    layout = 'left';
                    break;
                case 3:
                case 4:
                    layout = 'center-left';
                    break;
                case 5:
                    layout = 'center-right';
                    break;
                case 6:
                case 7:
                case 8:
                    layout = 'right';
                    break;
            }

            this.setLayout(layout);

            this.element.show();
        },

        hide : function(){
            this.element.hide();
        },

        setPosition : function(position){
            this.element.css(position);
        },

        setLayout : function(layout){
            this.element.removeClass('left center-left center-right right');
            this.element.addClass(layout);
        }
    }
});