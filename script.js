//your JS code here. If required.
 function secondHighest(arr) {
    // your code here
     if (arr.length < 2) {
        return "Infinity";
    }

    let uniqueArr = [...new Set(arr)];
    
    ar = uniqueArr.sort((a, b) =>{
        if(a < b)
        {
            return -1;
        }
    });
res = ar[ar.length-2];
    
    if(res !== undefined)
    {
        return res;
    }
    else{
        return "Infinity";
    }
 }