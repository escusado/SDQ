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
            var gridRow, gridX, gridY, i, j, grid,

                id = 0,
                board = this,
                gridSize = Math.sqrt(this.puzzle.masked[0].length);


            //Create the quadrant grids 3x3
            this.grids = [];
            i = gridSize;
            while(i--){

                gridRow = [];
                j = gridSize;
                while(j--){

                    grid = new SDQ.Grid({
                        name : 'grid-'+i+'-'+j,
                        size : gridSize
                    });
                    gridRow.push(grid);
                    this.appendChild(grid);

                    if(i === 0){
                        grid.setAsBorderBottom();
                    }

                }
                grid.setAsBorderRight();
                this.grids.push(gridRow);
            }

            //walk grid to fill quadrants
            this.puzzle.masked.forEach(function(gridRow, y){

                gridRow.forEach(function(num, x){

                    gridY = Math.floor(y/gridSize);
                    gridX = Math.floor(x/gridSize);

                    //add number to correspondant grid quadrant

                    var tile = new SDQ.Tile({
                        id : id,
                        x : x,
                        y : y,
                        number : num
                    });

                    board.grids[gridY][gridX].addTile(tile);
                    board.user[y][x] = tile;

                    id++;
                });

            });

            this.setSize();
        },

        setSize : function(){
            var gridSize, tileSize, margin,
                style = '  .grid {\
                                width : {{gwidth}}px;\
                                height : {{gheight}}px;\
                                margin-right : {{gmargin}}px;\
                                margin-bottom : {{gmargin}}px;\
                           }\
                           .tile {\
                                width : {{twidth}}px;\
                                height : {{theight}}px;\
                                margin-right : {{tmargin}}px;\
                                margin-bottom : {{tmargin}}px;\
                           }';

            gridSize = this.getGridMeasures(this.size);
            tileSize = this.getGridMeasures(gridSize.tile);

            style = style.replace( /{{twidth}}/g  , tileSize.tile)
                         .replace( /{{theight}}/g , tileSize.tile)
                         .replace( /{{tmargin}}/g , tileSize.margin)
                         .replace( /{{gwidth}}/g  , gridSize.tile)
                         .replace( /{{gheight}}/g , gridSize.tile)
                         .replace( /{{gmargin}}/g , gridSize.margin);

            this.styleTag.set(style);

            return this;
        },

        getGridMeasures : function(gridSize){
            var measures = {tile : 0, margin : 0},
                ratio = {
                    tile : 0.3,
                    margin : 0.03
                };

            measures.tile = Math.floor(gridSize*ratio.tile);
            // measures.margin = Math.floor(gridSize*ratio.margin);
            measures.margin = (gridSize - (measures.tile*Math.sqrt(this.puzzle.masked[0].length)))/2;

            return measures;
        },

        _activate : function(){
            var c,    // a counter, set by the outer loop
                tmp,  // for intermediate results
                x,
                col, row,
                index = 0,
                gridSize = this.puzzle.masked[0].length;    // the x-index into *arr* (*y* will be defined implicitly)

            for (c = gridSize - 1; c > -gridSize; c--) {

                tmp = gridSize - Math.abs(c) - 1;
                x = tmp;

                while (x >= 0) {

                    if (c >= 0) {
                        row = x;
                        col = tmp - x;
                    }
                    else {
                        col = gridSize - (tmp - x) - 1;
                        row = (gridSize-1)-x;
                    }

                    this.user[col][row].animIntro(index*50);

                    index++;

                    x--;
                }

            }

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