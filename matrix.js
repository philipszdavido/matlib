const l = console.log

function Matrix() {
    this.data = null
}

Matrix.prototype.Variable = function(data) {
    this.data = data
    return this
}

//Matrix.prototype =function() {}
module.exports = Matrix