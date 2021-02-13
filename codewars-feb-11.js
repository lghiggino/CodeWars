//Feb-11-2021 - 50
//99 Bottles of Beer
var sing = function () {
    let song = []
    for (let i = 99; i >=0; i--){
        if (i > 2){
            let first = `${i} bottles of beer on the wall, ${i} bottles of beer.`
            let second = `Take one down and pass it around, ${i-1} bottles of beer on the wall.`
            song.push(first, second)
        }else if (i > 1){
            let first = `${i} bottles of beer on the wall, ${i} bottles of beer.`
            let second = `Take one down and pass it around, ${i-1} bottle of beer on the wall.`
            song.push(first, second)
        }else if (i === 1){
            let first = "1 bottle of beer on the wall, 1 bottle of beer."
            let second = "Take one down and pass it around, no more bottles of beer on the wall."
            song.push(first, second)
        }else{
            let first =  "No more bottles of beer on the wall, no more bottles of beer."
            let second = "Go to the store and buy some more, 99 bottles of beer on the wall."
            song.push(first, second)
        }
    }
    return song
  };