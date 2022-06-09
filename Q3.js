const render = require('surrender')({
    from : [ [ -1, 1 ], [ -1, 1 ] ]
});
// sample solution there are many others...
render
    .line([ -1, 0 ], [ 0, -1 ])
    .line([ 0, -1 ], [ 1, 0 ])
    .line([ 1, 0 ], [ 0, 1 ])
    .line([ 0, 1 ], [ -1, 0 ])
;