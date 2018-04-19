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

