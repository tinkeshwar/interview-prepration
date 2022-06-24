var rotate_image = function (matrix) {
    const size = matrix.length

    if(!!!size || size < 1){
        return matrix
    }

    for(let i = 0; i < size; i++){
        for(let j = 0; j < size; j++){
            matrix = swapInMatrix(matrix, i, j)
        }
    }

    for(let i = 0; i< size; i++){
        matrix[i] = reverse(matrix[i])
    }

    return matrix
}

var swapInMatrix = function (matrix, i , j) {
    let temp = matrix[i][j]
    matrix[i][j] = matrix[j][i]
    matrix[j][i] = temp
    return matrix
}

var swapInArray = function (arr, i , j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    return arr
}

var reverse = function (arr) {
    let first = 0
    let last = arr.length-1
    while(first < last){
        arr = swapInArray(arr, first, last)
        first += 1
        last -= 1
    }
    return arr
}