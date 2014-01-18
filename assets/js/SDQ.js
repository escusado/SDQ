var SDQ = {};

//column based
var puzzle = {
    solved : [
        [9,7,5, 3,4,8, 1,6,2],
        [3,2,8, 7,1,6, 5,4,9],
        [6,1,4, 9,2,5, 8,7,3],

        [8,4,6, 2,7,3, 9,5,1],
        [2,5,9, 8,6,1, 4,3,7],
        [1,3,7, 5,9,4, 6,2,8],

        [5,9,1, 6,3,7, 2,8,4],
        [4,8,3, 1,5,2, 7,9,6],
        [7,6,2, 4,8,9, 3,1,5]
    ],
    masked : [
        [0,7,0, 0,0,8, 0,0,0],
        [0,0,0, 7,0,0, 5,4,9],
        [0,1,0, 0,0,0, 0,7,0],

        [0,0,6, 0,0,3, 9,0,0],
        [0,0,0, 8,6,1, 0,0,0],
        [1,3,0, 5,0,0, 0,2,8],

        [0,9,0, 0,0,0, 0,8,0],
        [4,8,3, 0,0,2, 0,0,0],
        [0,0,0, 4,0,0, 0,1,0]
    ]
};

Class(SDQ, 'App').inherits(Widget)({
    ELEMENT_CLASS : 'sdq',
    prototype : {
        init : function(config){
            var wrapper = $('.wrapper');

            Widget.prototype.init.call(this, config);

            size = wrapper.width() > wrapper.height() ? wrapper.height() : wrapper.width();

            this.board = new SDQ.Board({
                puzzle : puzzle,
                size   : size
            });

        },
        render : function(element, beforeElement){
            Widget.prototype.render.call(this, element, beforeElement);

            this.board.render(this.element);
        }
    }
});

$(document).ready(function(){
    window.sdq = new SDQ.App();
    window.sdq.render($('.wrapper'));
});

