const render = require('surrender')({
    from : [ [ -1, 1 ], [ -1, 1 ] ]
});
 
render
    .line([ -0.7, 0 ], [ 0, -0.5 ])
    .line([ 0, -0.5 ], [ 0.7, 0 ])
    .line([ 0.7, 0 ], [ 0, 0.5 ])
    .line([ 0, 0.5 ], [ -0.7, 0 ])
;