//your JS code here. If required.
 function secondHighest(num, arr) {
    // your code here
    if (arr.length < 2) {
        return "Infinity";
    }

    arr.sort();

    for(let i=arr.length -2; i>=0; i--)
    {
        if(arr[i] !== arr[arr.length - 1])
        {
            return arr[i];
        }
    }