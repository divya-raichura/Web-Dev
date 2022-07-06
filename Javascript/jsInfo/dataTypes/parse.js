// Numeric conversion using a plus + or Number() is strict. If a value is not exactly a number, it fails: (exception : spaces at start and end)

console.log(+"100px"); // NaN

// parseInt and parseFloat are for extracting numbers from such strings
// They “read” a number from a string until they can’t. In case of an error, the gathered number is returned. The function parseInt returns an integer, whilst parseFloat will return a floating-point number:

alert(parseInt("100px")); // 100
alert(parseFloat("12.5em")); // 12.5

alert(parseInt("12.3")); // 12, only the integer part is returned
alert(parseFloat("12.3.4")); // 12.3, the second point stops the reading

// There are situations when parseInt/parseFloat will return NaN. It happens when no digits could be read:

alert(parseInt("a123")); // NaN, the first symbol stops the process

// The parseInt() function has an optional second parameter. It specifies the base of the numeral system, so parseInt can also parse strings of hex numbers, binary numbers and so on:

alert(parseInt("0xff", 16)); // 255
alert(parseInt("ff", 16)); // 255, without 0x also works

alert(parseInt("2n9c", 36)); // 123456
