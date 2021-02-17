function outputFizzBuzz(num){
    for (i = 1; i <= num; i++){
        let output = ""
        if (i % 3 === 0){output += "Fizz"} 
        if (i % 4 === 0){output += "Bazz"}
        if (i % 5 === 0){output += "Buzz"}
        if(output == ""){ output = i}
        
        console.log(output)
    }
}

outputFizzBuzz(34)