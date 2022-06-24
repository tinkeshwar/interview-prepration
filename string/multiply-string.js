var multiply_string = function (string1, string2) {
    if( string1 === '0' || string2 === '0'){
        return '0'
    }
    
	 let first = [...string1].reverse()
	 let second = [...string2].reverse()
	 
	 
	 let answer = new Array(first.length+second.length).fill(0)
	 
	 for(var place2 = 0; place2 < second.length; place2++){
	 	let d2 = Number(second[place2])
		for(var place1 = 0; place1 < first.length; place1++){
			let d1 = Number(first[place1])
			
			let current = place1+place2
			
			let carry = answer[current]
			
			let multiply = d1*d2 + carry
			
			answer[current] = multiply%10
			
			answer[current+1] += Math.floor(multiply/10);
		
		}
	 }
	 
	 if(answer[answer.length-1] === 0){
	 	answer.pop()
	 }
	 
	 answer.reverse()
	 
	 
	 return answer.join('');
    
}