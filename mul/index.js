const { Matrix } = require("./../matrix")

Matrix.prototype.mul = function(data) {
    let fres = []
    for (var i = 0; i < data.length; i++) {
        var elm = data[i];
        let res = []
        for (var ii = 0; ii < elm.length; ii++) {
            var elm2 = elm[i][ii];
            let sum = 0
            for (var iii = 0; iii < elm.length; iii++) {
                var elem = data[i][ii] * this.data[iii][ii];
                sum += elem
                    //l(elem)
            }
            res.push(sum)
        }
        fres.push(res)
    }
    return fres
}

Matrix.prototype.mul = mul
const matMul = new Matrix()
module.exports = matMul