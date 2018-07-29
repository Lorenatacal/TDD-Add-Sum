# Learning TDD 

This is the first time when I am doing TDD, using a tutorial from Code Camp, but also pairing with my husband.

The way I have done this project is by creating a test, then running it and after tHat I wrote the part of the Kata that was requested so that the test can pass.

In order to start working on this Kata I had to fisrt install Jest on my terminal.

##  Solving the exercise:

    * First Loop - handle the case where our add function is given an empty string or one with a single element;
        - Writing the tests:
            - The first test checks that an empty string returns 0;
            - The second checks that a single element string returns the provided element.
        - Writing the code:
            - First we return 0 by default
            - Then we provide an if statement that handles the parsing of a single provided element
        -Refactoring:
    * Second Loop - handle the case where the string contains multiple elements
        - Writting the test:
            - The new test makes sure that calculation of a multiple element string was done correctly;
        - Writting the code:
            - First I created a new if statement on purpose to be sure that our first two tests affect the new solution;
            - Second I create a new array from the entry string, using the , as a separator, I also used map and Number to change the elements from the array from strings to numbers;
            - Finally, I have used reduced to calculate the sum.
        -Refactoring:
            - I have created to new variables in order or the code to be easier to read and to understand (sum and Total sum)
    * Third Loop - handle the declaration of new separators and avoid the entry of negative numbers
        - Writting the test
            - I wrote the test that is accepting "\n" as the separator;
            - I wrote the test that is accepting a custom separator "// '//;\n1,2;3";
            - I wrote the test that is going to throw an error when a negativ number is given, by using the method throw;
            - I observed that the test is not written correctlt and I changed the test by wrapping the add method into an anonymus function so that jest could catch the error;
        - writting the Code:
            - I wrote the code that made this test to pass by calling the method replace and changed the separator "\n" with ", ";
            - I wrote the test that made the test that accepts a custom seperator. In order to do this I have created the variable number, asigned it a regex that will return a new array that is only returning the numbers from the string. I have created a new array (arr) and I have assigned to this the match of numbers from the given string by calling the method match on the given string and assigning as an argument the variable number. I have checked if the test is passing by using npm run test assuming that the test is going to pass and it did!;
            - I made the test pass by creating an if statement with the condition that if the string.includes the sign "-" to throw the error "negative provided int"


