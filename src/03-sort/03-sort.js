/* eslint-disable no-unused-vars */

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1

Write a function named sortBackwards that takes in an array of numbers and returns the same array, with the numbers sorted, highest to smallest.
------------------------------------------------------------------------------------------------ */

export const sortBackwards = (arr) => {
  // Solution code here...
    const sorted = arr.sort((a, b) => b - a);
    return sorted;
};
/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named alphabetize that takes in an array of strings and returns the same array with the strings sorted alphabetically.

In this alphabetization, capital letters come before lower case letters.

For example, ['Alphabet', 'Zebra', 'alphabet', 'carrot'] is correctly sorted.
------------------------------------------------------------------------------------------------ */

export const alphabetize = (arr) => {
  // Solution code here...
    return arr.sort();
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named sortByLength that takes in an array of strings and returns the same array, with the strings sorted by their length, lowest to highest.
------------------------------------------------------------------------------------------------ */

export const sortByLength = (arr) => {
  // Solution code here...
    arr.sort(function(a, b) {
        return a.length - b.length;
    });
    return arr;

};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named alphabetizeBetter that takes in an array of strings and returns the same array, with the strings sorted alphabetically. Capitalization should not change the sort order of two strings.

For example, ['Alphabet', 'alphabet', 'carrot', 'Zebra'] is correctly sorted, and so is ['alphabet', 'Alphabet', 'carrot', 'Zebra'].
------------------------------------------------------------------------------------------------ */
export const alphabetizeBetter = (arr) => {
    // Solution code here...
    arr.sort(function(a, b){
        return a.localeCompare(b);
    });
    return arr;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function named sortByPrice that takes in an array of objects, each of which has a 'price' property, and sorts those objects by price, lowest to highest, returning the same array.

Here is an example of the input:
[
  {name: 'Sweatshirt', price: 45},
  {name: 'Bookmark', price: 2.50},
  {name: 'Tote bag', price: 15}
];
------------------------------------------------------------------------------------------------ */

export const sortByPrice = (arr) => {
  // Solution code here...
    arr.sort(function(a, b) {
        return a.price - b.price;
    });
    return arr;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6

Write a function named sortNumbersByLength that takes in an array of numbers and sorts those numbers by their length.

For example, [1, 14, 0.2, -281, 54782] is only correctly sorted in that order.
------------------------------------------------------------------------------------------------ */

export const sortNumbersByLength = (arr) => {
  // Solution code here...
    arr.sort(function(a, b) {
        return a.toString().length - b.toString().length;
    });
    return arr;
};

/*-----------------------------------------------------------------------------------------------
CHALLENGE 7

Write a function named sortPeople that takes in an array of Person objects, each of which has firstName, lastName, and age properties, and sorts those people by their last names. Do not worry about capitalization or first names.
------------------------------------------------------------------------------------------------ */

export class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

export const sortPeople = (arr) => {
  // Solution code here...
    arr.sort(function(a, b) {
        return a.lastName.localeCompare(b.lastName);
    });
    return arr;

};
////////////////////////////////////////////
////////////////////////////////////////
/* ------------------------------------------------------------------------------------------------
CHALLENGE 8

Write a function named sortPeopleBetter that takes in an array of Person objects, each of which has firstName, lastName, and age properties, and sorts those people by their last names.

If two people share the same last name, alphabetize on their first name.

If two people have the same full name, the younger one should come first. Do not worry about capitalization.
------------------------------------------------------------------------------------------------ */


export const sortPeopleBetter = (arr) => {
  // Solution code here...
    arr.sort(function(a, b){
        if(a.lastName !== b.lastName){
            return a.lastName.localeCompare(b.lastName);
        } else if(a.lastName === b.lastName){
            if(a.firstName === b.firstName){
                return a.age - b.age;
            } else {
                return a.firstName.localeCompare(b.firstName);
            } 
        }
    });
    return arr;
};
