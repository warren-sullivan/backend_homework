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
    for(i in arr)
    {
		for(j = 1; j < arguments.length; j++)
		{
			if(arr[i] == arguments[j])
			{
				arr.splice(i, 1)
			}
		}
	}
	
    return arr;
}

//console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));


function confirmEnding(str, target)
{
	return str.charAt(str.length-1) == target;
}

//console.log(confirmEnding("Bastian", "n"));


function largestOfFour(arr)
{
	for(i in arr)
	{
		let max = Number.MIN_SAFE_INTEGER;

		for(j in arr[i])
		{
			if(arr[i][j] > max)
			{
				max = arr[i][j];
			}
		}

		arr[i] = max;
	}
	return arr;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
