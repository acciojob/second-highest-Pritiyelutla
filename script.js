function secondHighest(arr) {
    // your code here
     if (arr.length < 2) {
        return "-Infinity";
    }

    arr = [...Set(arr)];
    
    let firstMax = null;
    let temp = null;
    for(let i=0; i<arr.length - 1; i++)
    {
        for(let j=0; j<arr.length - i; j++)
        {
            if(arr[j] > arr[j+1])
            {
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
        if(firstMax == null)
            firstMax = arr[arr.length - 1];
        if(firstMax != arr[arr.length - i - 1]){
            return arr[arr.length - i - 1];
        }
    }
    return "-Infinity";
 }