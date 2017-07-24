function factorialize(num)
{
    let newNum = 1;
    while(num > 0)
    {
        newNum *= num--;
    }

    return newNum;
}

//console.log(factorialize(5));

function palindrome(str)
{
    let array = str.split('');

    while(array.length >= 1)
    {
        if(array[0] != array[array.length-1])
        {
            return false;
        }

        array.pop();
        array.shift();
    }
    
    return true;
}

//console.log(palindrome("eye"));

function destroyer(arr)
{
    // Remove all the values
    return arr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));