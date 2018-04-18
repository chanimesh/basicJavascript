array1 = [1,2,3,4,5,6];


array2 = Array.of(5,6,7,8,9);

isArray = Array.isArray(array2);

arraylength = array2.length;

y = 0;

array1.forEach((x) => y = x+y);

array3 = array1.map((x) =>  x+3 );

// copy within
array1.copyWithin(3,2,3) //  [ 1, 2, 3, 3, 5, 6 ]

array1.fill(5,3,4)

array1.pop();

array1.push(10,1,21,32);

array1.reverse() // applies to array and returns the changed array

array1.shift() // shifts all elements to left and pops the first element ie pop() in reverse

function sortFunction(a, b) {
    if(a>b){
        return -1
    }
    else if (b>a) {
        return 1
    }
    return 0

}

array2.sort(sortFunction);

array3 = [1,2,3,4,5,6];

array3.splice(3,2,"h","k","l");

array3.unshift("a","b","c")
