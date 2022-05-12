//Function to to generate a random powerball pick.
function powerball()
{
    const pb1 = [];

    for (let i=1; i<=5;i++)
    {
        pb1[i]=Math.floor(Math.random() * 69) + 1;
    }

    let pb=Math.floor(Math.random() * 26) + 1;
    
    alert(pb1.join(" ") + " + " + pb);
}

//function to check if a word is a palindrome.
//Write a script to determine whether a given input is a palindrome. A palindrome is a word, phrase, number, 
//or other sequence of characters which reads the same backward as forward, such as madam or racecar.
function palindrome()
{
    input=prompt('Enter Palindrome to check');
    let len = input.length;
    
    for (let i = 0; i < len/2; i++) 
    {
        //Checking first and last letter of the array
        if (input[i] !== input[len - 1 - i]) 
        {
            return false;
        }
    }
    return true;
}

//Write a script to encrypt a sentence using caesar cipher.  key is set to 3.
function caesarCipherEncryption()
{
    let key=3;
    let z=0;
    let tmp1 = [];
    let tmp2 = [];

    input=prompt('Enter phrase to Encrypt').toLowerCase();

    //Create an array of alphabets and its keys
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x));

    for(let i=0; i<alphabet.length; i++)
    {
        if(i+key>=26)
        {
            tmp1[i] = alphabet[0+z];
            z++;
        }
        else
        {
            tmp1[i] = alphabet[i+key];
        }
    }
    
    //Create the encrypted message
    for(i=0;i<input.length;i++)
    {
        tmp2[i] = tmp1[getPosition(input[i].toUpperCase(), alphabet)];
    }
    return tmp2.join("");
}

//Write a script to decrypt encrypted text using caesar cipher.  key is set to 3.
function caesarCipherDecoding()
{
    let key=3;
    let z=0;
    let tmp1 = [];
    let tmp2 = [];

    input=prompt('Enter phrase to Decode').toLowerCase();

    //Create an array of alphabets and its keys
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x));

    for(let i=0; i<alphabet.length; i++)
    {
        if(i+key>=26)
        {
            tmp1[i] = alphabet[0+z];
            z++;
        }
        else
        {
            tmp1[i] = alphabet[i+key];
        }
    }
    
    //Create the decrypted message
    for(i=0;i<input.length;i++)
    {
        tmp2[i] = alphabet[getPosition(input[i].toUpperCase(), tmp1)];
    }
    return tmp2.join("");
}

//Write a program that checks whether the parentheses, brackets, and curly braces in a string are properly matched.
function parenthesesChecker()
{
    phrase = [];
    input=prompt('Enter phrase to check');

    //Parse the input removing all characters but parentheses, brackets, and curly braces.
    for(let i=0; i<=input.length; i++)
    {
        switch(input[i])
        {
            case '{': phrase.push(input[i]);
            break;

            case '}': phrase.push(input[i]);
            break;

            case '[': phrase.push(input[i]);
            break;

            case ']': phrase.push(input[i]);
            break;

            case '(': phrase.push(input[i]);
            break;

            case ')': phrase.push(input[i]);
            break;
        } 
    }
    
    //Checks whether the parentheses, brackets, and curly braces in a string are properly balanced
    return checkifBalanced(phrase);
}

//Get the position of an element of a array
function getPosition(elementToFind, arrayElements) 
{
    for (let i = 0; i < arrayElements.length; i++)
     {
        if (arrayElements[i] === elementToFind) 
        {
            return i;
        }
    }
    return null;
}

//Function to check whether the parentheses, brackets, and curly braces in a string are properly balanced
function checkifBalanced(expr)
{
	let stack = [];

	for(let i = 0; i < expr.length; i++)
	{
		let x = expr[i];

		if (x == '(' || x == '[' || x == '{')
		{
			stack.push(x);
			continue;
		}

		if (stack.length == 0)
			return false;
			
		let check;
		switch (x){
		case ')':
			check = stack.pop();
			if (check == '{' || check == '[')
				return false;
			break;

		case '}':
			check = stack.pop();
			if (check == '(' || check == '[')
				return false;
			break;

		case ']':
			check = stack.pop();
			if (check == '(' || check == '{')
				return false;
			break;
		}
	}

	return (stack.length == 0);
}