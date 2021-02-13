//Feb-12-2021 - 51
//Move 10

function moveTen(str){
    let input     = 'abcdefghijklmnopqrstuvwxyz';
    let output    = 'klmnopqrstuvwxyzabcdefghij';
    let index     = x => input.indexOf(x);
    let translate = x => index(x) > -1 ? output[index(x)] : x;
    return str.split('').map(translate).join('');
}

function rot13(str) {
    var input     = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var output    = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
    var index     = x => input.indexOf(x);
    var translate = x => index(x) > -1 ? output[index(x)] : x;
    return str.split('').map(translate).join('');
  }
  