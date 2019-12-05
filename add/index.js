const Matrix = require("./../matrix")
const add = function(mtrix = []) {
    /**
     * [
     *  [1, 2, 3],      [7, 8, 9]
     *  [4, 5, 6]       [3, 5, 7]
     * ]
     * 
     * 
     */
    const data = this.data
    let fres = []
    for (var i = 0; i < mtrix.length; i++) {
        var el = mtrix[i];
        var fe = []
        for (var ii = 0; ii < el.length; ii++) {
            var el2 = el[ii];
            var del2 = data[i][ii]
            var res = el2 + del2
            fe.push(res)
        }
        fres.push(fe)
    }
    return fres
}

exports._add = add
Matrix.prototype.add = add
const matAdd = new Matrix()
module.exports = matAdd