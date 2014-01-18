Class(SDQ, 'Board').inherits(Widget)({
    ELEMENT_CLASS : 'board',
    prototype : {
        init : function(config){
            Widget.prototype.init.call(this, config);

            this.user =[
                [0,0,0 ,0,0,0 ,0,0,0],
                [0,0,0 ,0,0,0 ,0,0,0],
                [0,0,0 ,0,0,0 ,0,0,0],

                [0,0,0 ,0,0,0 ,0,0,0],
                [0,0,0 ,0,0,0 ,0,0,0],
                [0,0,0 ,0,0,0 ,0,0,0],

                [0,0,0 ,0,0,0 ,0,0,0],
                [0,0,0 ,0,0,0 ,0,0,0],
                [0,0,0 ,0,0,0 ,0,0,0]
            ];

            console.log('board');
            this.styleTag = new SDQ.StyleTag();

            this.setupGrid(config.puzzle);
        },

        setupGrid : function(){
            var board = this,
                separator = Math.sqrt(this.size);

            //walk a (column-based) puzzle;
            var tile;
            this.puzzle.masked.forEach(function(row, y){
                row.forEach(function(num, x){
                    tile = new SDQ.Tile({
                        x   : x,
                        y   : y,
                        num : num
                    });

                    board.appendChild(tile);
                });
            });

            this.setSize();
        },

        setSize : function(){
            var style = '  .tile {\
                                width  :  {{width}}px;\
                                height : {{height}}px;\
                                margin-right : {{margin}}px;\
                           }',

                tileSize = Math.floor( this.size * 0.087 ),
                margin   = Math.ceil( this.size * 0.02 );

            style = style.replace('{{width}}', tileSize)
                         .replace('{{height}}', tileSize)
                         .replace('{{margin}}', margin);

            this.styleTag.set(style);

            return this;
        },

        render : function(element, beforeElement){
            var board = this;

            Widget.prototype.render.call(this, element, beforeElement);

            this.styleTag.render(this.element);

            this.children.forEach(function(tile){
                tile.render(board.element);
            });
        }
    }
});