const l = console.log
const matlib = require("./")

const
var = matlib.Variable([

])
matlib.add([
    [9, 8]
])
return
l(matlib.zeros([3, 2]))

/*const M = matlib.Variable([
    [2, 3],
    [4, 5],
    [9, 8]
])*/

/*l(M.add([
    [1, 1],
    [1, 1],
    [1, 1]
]))*/

const M = matlib.Variable([
    [7, 8, 9, 7, 5],
    [4, 5, 6, 7, 4],
    [7, 8, 9, 5, 8],
    [4, 3, 2, 5, 7],
    [7, 2, 3, 4, 5]
])

l(M.mul([
    [7, 8, 9, 7, 5],
    [4, 5, 6, 7, 4],
    [7, 8, 9, 5, 3],
    [4, 3, 2, 5, 6],
    [1, 2, 3, 4, 5]
]))