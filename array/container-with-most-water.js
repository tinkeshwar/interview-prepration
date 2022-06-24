var container_with_most_water = function (cluster) {
    let first = 0
    let last = cluster.length - 1
    let max = 0
    let area = 0

    while(first < last){
        if(cluster[first] >= cluster[last]){
            area = cluster[last] * (last-first)
            last -= 1
        } else {
            area = cluster[first] * (last-first)
            first += 1
        }
        max = Math.max(max, area)
    }
    return max
}