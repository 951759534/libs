/**
 * Created by K550jk on 2017/8/17.
 */
function urlParse(url){
    var  reg = /(\w*):\/\/([\w+.]+\w)([\/\w+]*[\w]+):(\d*)\?([\w]*=[\w][&\w*=\w*]*)*(#\w)?/;
    var arr = url.match(reg);
    var obj = {};
    console.log(arr);
    var attrArr = ['scheme', 'host', 'path', 'port', 'queries', 'hash'];
    for(var i = 1;i<arr.length;i++){
        if(!arr[i]){
            continue;
        }
        if(i-1 !== 4){
            obj[attrArr[i-1]] = arr[i];
        }else{
                var str = arr[i];
                console.log(str);
                obj[attrArr[i-1]] = {};
                var newArr = str.split("&");
                for(var j = 0;j<newArr.length;j++){
                    var queries = newArr[j].split("=");
                    obj[attrArr[i-1]][queries[0]] = queries[1];
                }
        }
    }
    console.log(obj);
}
urlParse("http://www.example.com/aa:8080?a=1&b=1");