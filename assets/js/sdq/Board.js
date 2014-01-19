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

            this.setupGrid();
        },

        setupGrid : function(){
            var gridRow, gridX, gridY, i, j,

                board = this,
                gridSize = Math.sqrt(this.puzzle.masked[0].length);


            //Create the quadrant grids
            this.grids = [];
            i = gridSize;
            while(i--){

                gridRow = [];
                j = gridSize;
                while(j--){

                    var grid = new SDQ.Grid({
                        name : 'grid-'+i+'-'+j
                    });
                    gridRow.push(grid);
                    this.appendChild(grid);
                }

                this.grids.push(gridRow);
            }

            //walk grid to fill quadrants
            this.puzzle.masked.forEach(function(gridRow, y){

                gridRow.forEach(function(num, x){

                    gridY = Math.floor(y/gridSize);
                    gridX = Math.floor(x/gridSize);

                    //add number to correspondant grid quadrant
                    board.grids[gridY][gridX].addTile(x, y, num);

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

            this.children.forEach(function(child){
                child.render(board.element);
            });
        }
    }
});