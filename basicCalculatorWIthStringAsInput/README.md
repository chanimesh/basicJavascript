The basic caliculator takes the a string as input and
it should the do the following operations

1) It should identify all the symbols
    these should be 
    + \+ for addition
    + \- for subtraction
    + x for multiplication 
    + / for division
    + and also brackets ()
    



**Happy paths**

given a string with brackets it shoud return result

error scenario:
negative result in a expression of brackets will lead to not matching string for operations,
like 8 x -4 from (2 + 3) x (4 - 8) doesn't match.
