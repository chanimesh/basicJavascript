string1 = "2+3"
string2 = new String('2+3')
eval_result1= eval(string1);
eval_result2= eval(string2);


string3 = "This is a string and used for testing strings"

string3.charAt(5)
string3.charCodeAt(4)
string3.codePointAt(4)

string2.includes(2)

string2.includes(2+3)

string1.padEnd(4)

string1.padEnd(10,"rras")

string1.concat("a")

string3.includes('a')

string3.includes('as')

string3.endsWith('s')

string3.endsWith('s',2)

string3.endsWith('gs')

string3.endsWith('ngs')

string3.indexOf(4) //-1
string3.indexOf('a') //8
string3.indexOf('s') //3
string3.indexOf('e') //23
string3.indexOf('a',9) //17
string3.indexOf('a',18) //-1

string3.lastIndexOf('a'); //17
string3.lastIndexOf('a',18); //17
string3.lastIndexOf('a',16); //8
string3.lastIndexOf('a',8); //8
string3.lastIndexOf('a',7); //-1
string3.lastIndexOf('a',-1); //-1
string3.lastIndexOf('a',4); //-1

string3.match(/is/i); //Array [ "is" ]
string1.match(/\d/i); //Array [ "2" ]
string1.match(/\d/+/d/i); //null
string1.match(/\d\d/i); //null
string1.match(/\d\+\d/i) //Array [ "2+3" ]
string1.match(/\d\+\d/gi) //Array [ "2+3" ]
string1.match(/\d/gi) //Array [ "2", "3" ]
string1.match(/^\d/gi) //Array [ "2" ]

string2.padEnd(); //"2+3"
string2.padEnd(5,'a'); //"2+3aa"
string2.padEnd(5); //"2+3  "

string2.padStart(10); //"       2+3"
string2.padStart(10, 'a'); //"aaaaaaa2+3"
string2.padStart(10, string1); //"2+32+322+3"

