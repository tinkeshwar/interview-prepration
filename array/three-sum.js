var three_sum_sort = function (arr, sum) {
    var response = []
    var current = 0
    var last = nums.length-1
    if(nums.length<3){
        return response
    }
    const arr = nums.sort()
    while(current < last){
        var low = current+1
        var high = last
        var point = current
        while(low < high){
            if(nums[point]+nums[low]+nums[high] === sum){
                response.push([nums[point],nums[low],nums[high]])
                low += 1
                high -= 1
                while(low<high && nums[low] === nums[low-1]){
                    low += 1
                }
            }
            if(nums[point]+nums[low]+nums[high] > sum){
                    high -= 1
            }
            if(nums[point]+nums[low]+nums[high] < sum){
                    low += 1
            }
        }
        current += 1
        while(arr[current] === arr[current-1]){
            current += 1
        }
    }

    return response
}