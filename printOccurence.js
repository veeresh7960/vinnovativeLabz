//name : veeresh phoneNo: 8217096590
function printOccurence(str){
    var res=""
    for(var i=0;i<str.length;i++){
        if(!res.includes(str.charAt(i))){
            res=res+str.charAt(i)

        }

    }
    console.log(res)
}
var str="aasdvasvavda"
printOccurence(str)