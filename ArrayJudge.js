function ArrayJudge(arr){
    return arr instanceof Array && Object.prototype.toString.call(arr) === "[object Array]";
}
