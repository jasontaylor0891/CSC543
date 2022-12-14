# CSC543

Class Repository for CSC543 (Web Programming)

## Authors

- [@jasontaylor0891](https://www.github.com/jasontaylor0891)

### Project 1
Simple personal website using HTML and CSS.

### Project 2
Simple personal website using Bootstrap 5.

### Project 3
In this programming assignment, we were asked to write JavaScripts to solve the following problems.

- Powerball - Write a script to generate a random powerball pick.
- Palindrome - Write a script to determine whether a given input is a palindrome.
- Caesar Cipher Encryption - Write a script to encrypt a sentence using caesar cipher.
- Caesar Cipher Decoding - Write a script to decrypt encrypted text using caesar cipher.
- Parentheses Checker - Write a program that checks whether the parentheses, brackets, and curly braces in a string are properly matched.
- Stock
   - You have been supplied with a JSON file named "companies.json". Convert this file into an array of company objects using JSON.parse.
   - Create a constructor function named "CompanyCard" which will be passed a company object from the JSON data. Within the constructor function, create properties named symbol, name, day50, day200, revenue, marketCap50, marketCap200, equity, and tags, whose values are extracted from the passed company object.
   - Add a method to CompanyCard named currency() using arrow syntax that is passed a number named num and returns a currency formatted number using the Intl.NumberFormat() function (lookup the details online). Add another method to CompanyCard named billions() using arrow syntax that is passed a number named num and returns a currency using compact notation, also using the Intl.NumberFormat() function. This will display the large number in the data set as a short billions or millions value.
   - Add a method to CompanyCard named outputCard() that uses the methods and properties created in the two previous steps to output the markup for a single company card.
   - Create a function named outputCompanyCards that loops through the company data, instantiate a CompanyCard object using the new keyword, and then call the outputCard() method of the CompanyCard object.
   
### Project 4

- You have been provided with the necessary styling and markup already. Examine pa4.html in the editor of your choice.
- You have been provide with four JSON data files: users.json, stocks-complete.json, stock-formatted.json and single-user.json. The file users.json contains an array of objects consisting of an individual user's information and the stocks he or she owns (i.e., his or her portfolio). Information about each stock/company is contained in stocks-complete.json. Examine single-user.json and stocks-formatted.json, which contains single examples of the objects contained in users.json and stock-complete.json (and will not be used by your application since it is only provided for illustration purposes.)
- Note: users.json and stocks-complete.json are actually js scripts define two variables with JSON string
- Begin by modifying pa4.js and add a DOMContentLoaded event handler(3pt). All of your code will be inside that handler. Your handler will need to use the JSON.parse() method to transform the JSON data in the two JSON data files into JavaScript objects (1pt). Initially, your code should hide the details <section> by setting its display property to none (1pt)
- Generate the user list by looping throught the objects in users.json and adding $ltli> elements to the user list <ul>(3pt). To make click processing easier, you will also want to add the id value of the user using the dataset property(2pt).
- Use event delegation to handle all click events in the user list(2pt). If a list item is clicked, then unhide the details <section> and display the user information in the user details form and display their stock portfolio holdings in the portfolio section(3pt). This will require you to find the user in your array that matches the id value of the clicked thumbnail; you can do this via a simple loop.
- Rather than use event delegation, assign a click event handler to each View button in the portfolio list(2pt). When the user clicks one of the these buttons, display the information for that stock in the stock details section(3pt).

