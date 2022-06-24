var longest_substring = function (string){
    if(!!string || typeof string !== 'string')
        return 0
    if(string.length === 1){
        return 1
    }
    let hashTable = {} // keep value as index and index as value
    let longest = 0 // result we are stoing
    let first = 0 // staring pointer
    let i = 0

    for(i = 0; i< string.length; i++){
        if(hashTable[string[i]] !== undefined && hashTable[string[i]] >= first){
            // if char alreay appeared in string, change pointer position to next of its last occurence
            first = hashTable[string[i]]+1
        }
        hashTable[string[i]]
        
        // update longest if first and pointer diffrence is larger. alternate:  if(longest < (i - first + 1)) longest = (i - first + 1)
        longest = Math.max(longest, (i - first + 1))
    }
    return longest
}