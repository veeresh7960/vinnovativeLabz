//name: veeresh phoneNo:821709690


function consecutivePair(arr,key){
    console.log("invoke function calling")
    console.log(arr)
    console.log(key)
    var c
    var b[]
    for(var i=0 ; i<arr.length;i++){
        c=i+1;
        if(arr[i]+arr[c]==key){
            b.push(arry[i])
            b.push(arr[c])
            return b
        }
    }
}
var arr=[3,9,2,5,6,7]
var key=11
console.log(consecutivePair(arr,key))