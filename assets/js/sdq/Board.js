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
            var row, col, gridValues, grid,
                board = this,
                colOffset = 0,
                rowOffset = 0,
                colIterator = 0,
                rowIterator = 0,
                firstRow = this.puzzle.masked[0],
                gridsize = Math.sqrt(firstRow.length);

            //create mini grids
            // +-+-+-+
            // |1|2|3|
            // +-+-+-+
            // |4|5|6|
            // +-+-+-+
            // |7|8|9|
            // +-+-+-+

            //Create necesary grids
            for(row = 0; row < gridsize; row++){
                for(col = 0; col < gridsize; col++){
                    gridValues = [];

                    for(var i=0;i<gridsize;i++){
                        var offsetCol = i+(gridsize*col);


                    }

                    // for(rowIterator=0;rowIterator<rowOffset*(row+1); rowIterator++){
                    //     console.log('3');
                    //     for(colIterator=0;colIterator<colOffset*(col+1); colIterator++){
                    //         console.log('4');
                    //         gridValues.push( this.puzzle.masked[rowIterator][colIterator] );
                    //     }
                    // }

                    grid = new SDQ.Grid({
                        values : gridValues
                    });

                    this.appendChild(grid);
                }
            }

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