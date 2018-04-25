https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

str.chatAt(postion)
returns the character at position

str.charCodeAt(postion)
returns the utf-16 of the character at the position

str.codePointAt(postion)
returns the unicode of the character at the position

str.concat(string1,string2,string3,...stringN)
returns the concated form  all the strings to the given string 

str.includes(subString, searchStartPosition)
returns true if subString is available in str starting the from searchStartPosition 
if searchStringPosition not given it starts the search from zero

str.endsWith(subString, length)
returns true if subString is the end of the length given
if the length is not given the string length is taken as length 

str.indexOf(subString, startSearchFrom)
returns the index of subString starting from startSearchFrom 
is startSearchFrom is not specified it defaults to 0
and returns -1 if not found

str.lastIndexOf(subString, endOfString)
returns the last index of the subString match found until endOfString
if endOfString is not found length of the string is taken 
-1 is returned if match is not found

str.localeCompare(subString, locale)
returns negative number if str sorts before subString in corresponding locale
returns positive number if str sorts after subString in corresponding locale
returns zero number if str and subString are same in corresponding locale
need more understanding on this on locales part

str.match(regExp)
returns the entrie matched string with regExp as first element in the array and other matched values and index of matched values and input string
if not found it returns null

str.normalize 
need to check this again 

str.padEnd(neededLength, padString)
returns a string of neededLength with padString 
if no padString is specified it uses " " an space

