// arr in not sorted
var two_sum = function (arr, sum) {
    let hashTable = {}
    let num1 = null
    let num2 = null
    for(var i= 0; i< arr.length; i++){
        let compliment = sum-arr[i]
        if(compliment in hashTable){
            num1 = hashTable[compliment]
            num2 = i
            break
        }
        hashTable[arr[i]] = i
    }
    return [num1, num2]
}