let zeros = function(shape) {
    const { 0: row, 1: col, length } = shape
    let fe = []
    for (var i = 0; i < row; i++) {
        let res = []
        for (var ii = 0; ii < col; ii++) {
            res.push(0)
        }
        fe.push(res)
    }
    return fe
}

module.exports = zeros