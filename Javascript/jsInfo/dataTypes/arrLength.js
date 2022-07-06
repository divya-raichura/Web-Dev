let arr = [1, 2, 3, 4, 5];

arr.length = 2; // truncate to 2 elements
alert(arr); // [1, 2]

arr.length = 5; // return length back
alert(arr[3]); // undefined: the values do not return


// so in js we can change arr length

// So, the simplest way to clear the array is: arr.length = 0;.