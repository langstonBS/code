/* eslint-disable no-unused-vars */

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1
Write a function named howMuchPencil that takes in a string, as written on the side of a pencil.
As you sharpen the pencil, the string will become shorter and shorter, starting by removing the first letter.
Your function should use slice within a loop and return an array of each successive string result from losing letters to the sharpener, until nothing is left.
For example, if the input is 'Welcome', the output will be:
['Welcome', 'elcome', 'lcome', 'come', 'ome', 'me', 'e', ''].
------------------------------------------------------------------------------------------------ */

export const howMuchPencil = (str) => {
    let result = [];

    for(let i = 0; i < str.length + 1; i++){
        result.push(str.slice(i, str.length));
    }
    
    return result;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2
Write a function name wordsToCharList that, given a string as input, returns a new array where every element is a character of the input string.
For example, wordsToCharList('gregor') returns ['g','r','e','g','o','r'].
------------------------------------------------------------------------------------------------ */

export const wordsToCharList = (str) => {
    return str.split('');
};


/* ------------------------------------------------------------------------------------------------
CHALLENGE 3
You are making a grocery list for ingredients needed in the gruffalo crumble recipe, below. Rather than taking the entire recipe, you only want a list of the item names.
Write a function named listFoods that takes in the recipe and returns a new array of the food items without any amount or units. Just the name. For example, '1 cup flour' will return 'flour'.
Use slice for this function, maybe more than once. The .indexOf() method may also be helpful.
Do not use split for this function.
------------------------------------------------------------------------------------------------ */

export const listFoods = (recipe) => {
    let result = [];
    const ingredientList = recipe.ingredients;
    for(let i = 0; i < ingredientList.length; i++){
        const x = ingredientList[i].indexOf(' ');
        const j = ingredientList[i].indexOf(' ', x + 1);
        result.push(ingredientList[i].slice(j + 1, ingredientList[i].length));
    }
    return result;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4
Write a function named splitFoods that uses split to produce the same output as Challenge 3.
You may also use other string or array methods.
------------------------------------------------------------------------------------------------ */

export const splitFoods = (recipe) => {
    let result = [];
    recipe.ingredients.forEach(ingredient => {
        result.push(ingredient.split(' ').splice(2, ingredient.length).join(' '));
    });
    return result;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5
Use the same recipe from Challenge 3, above.
Write a function named stepAction that takes in the recipe and extracts the action verbs from the steps. Fortunate for you, the action verbs are the first word of each action.
Return a new array containing just the verbs. For example, ['Mix until evenly distributed'] returns ['Mix'].
------------------------------------------------------------------------------------------------ */

export const stepActions = (recipe) => {
    let result = [];
    recipe.steps.forEach(recipeStep => {
        result.push(recipeStep.split(' ').splice(0, 1).join(' '));
    });
    return result;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6
Write a function named removeEvenValues that, given an array of integers as input, deletes all even values from the array, leaving no 'gaps' behind.
The array should be modified in-place.
For example:
  const integers = [1, 2, 3, 4, 5, 6];
  removeEvenValues(integers);
  console.log(integers) will print [1, 3, 5]
------------------------------------------------------------------------------------------------ */

export const removeEvenValues = (arr) => {
    for(let i = arr.length; i >= 0; i--){
        if(arr[i] % 2 === 0){
            arr.splice(i, 1);
        }
    }
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7
Write a function named removeLastCharacters that takes in a string and a number. The numberOfCharacters argument determines how many characters will be removed from the end of the string. Return the resulting string.
If the numberOfCharacters argument is greater than the length of the input string, the function should return an empty string.
If the numberOfCharacters argument input is a negative number, the function should return the input string without any changes.
For example:
removeLastCharacters('Gregor', 2) returns 'Greg'
removeLastCharacters('Gregor', -2) returns 'Gregor'
removeLastCharacters('Gregor', 9) returns ''
------------------------------------------------------------------------------------------------ */

export const removeLastCharacters = (str, numberOfCharacters) => {
    if(numberOfCharacters < 0) {
        return str;
    } else if(numberOfCharacters > str.length) {
        return '';
    } else {
        return str.slice(0, str.length - numberOfCharacters);
    }
};


/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal
Write a function named totalSumCSV that, given a string of comma-separated values (CSV) as input. (e.g. "1,2,3"), returns the total sum of the numeric values (e.g. 6).
------------------------------------------------------------------------------------------------ */

export const totalSumCSV = (str) => {
    let total = 0;
    const arr = str.split(',');
    arr.forEach(element => {
        total = total + Number(element);
    });
    return total;
};


/* ------------------------------------------------------------------------------------------------
CHALLENGE 9 - Stretch Goal
Write a function named removeVowels that takes in a string and returns a new string where all the vowels of the original string have been removed.
For example, removeVowels('gregor') returns 'grgr'.
------------------------------------------------------------------------------------------------ */

export const removeVowels = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let arr = str.split('');
    for(let i = arr.length; i >= 0; i--){
        if(vowels.includes(arr[i])){
            arr.splice(i, 1);
        }
    }
    return arr.join('');
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 10 - Stretch Goal
Write a function named extractVowels that takes in a string and returns an array where the first element is the original string with all the vowels removed, and the second element is a string of all the vowels that were removed, in alphabetical order.
For example, extractVowels('gregor') returns ['grgr', 'eo'].
Similarly, extractVowels('The quick brown fox') returns ['Th qck brwn fx', 'eioou']
------------------------------------------------------------------------------------------------ */

export const extractVowels = (str) => {
    const vowelString = ['a', 'e', 'i', 'o', 'u'];
    let word = str.split('');
    let vowels = [];
    for(let i = word.length; i >= 0; i--){
        if(vowelString.includes(word[i])){
            vowels.push(word[i]);
            word.splice(i, 1);
        }
    }
    vowels.sort();
    return [word.join(''), vowels.join('')];
};
