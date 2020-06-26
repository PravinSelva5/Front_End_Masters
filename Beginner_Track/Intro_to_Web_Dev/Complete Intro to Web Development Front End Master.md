# Complete Intro to Web Development [Front End Masters]

Created By: Pravin Selvarajah
Last Edited: May 31, 2020 11:58 PM

# HTML Notes

- HTML and CSS are declared languages while Javascript, you're telling the computer to do something
- If you use the analogy of building a house:
    - HTML would be the raw materials used to build the foundations
    - CSS would be the blueprints for the house, where everything is layed out and how it is styled
    - Javascript would be what makes your house smart & interactive.
- An anchor tag is a link to somewhere:

```html
<a href="https://www.frontendmasters.com">Frontend Masters</a>
```

- div's has no meaning of moreso a container where you group things together
    - Div's can be really useful for styling in CSS
- span is a container for small pieces of text.
- ol refers to an ordered list
- ul refers to an un-ordered list
- li refers to the individual list elements found in the **ol or ul**
- A button is a **hook for Javascript.**
- img is a self closing tag. You use it to load an image to the page. An alt tag is also used within the img tag if the image doesn't load up.
    - You can also add images with just CSS. The only time you would want to do this, if its purely decorative. An example would be a background image.
    - If it's an actual content, you use img tags because you want to incorporate the alt tag. CSS doesn't have this option.
    - Search engines also read alt tags
- select and option tags are used to limit the number of options a user can select.

```html
<select><option value="seattle">Seattle</option><option value="portland">Portland</option><option value="san-francisco">San Francisco</option></select>
```

- form tag is a container that groups together html tags to gather information from the user.
- for table tags:
    - tr refers to table rows
    - td refers to the individual cells

- Comments in HTML

```html
<!------ this is a comment ---->
```

- Use comments when the code you wrote fails to tell the next programmer **what it does!**
- Classes are special attributes that can go on any tag. You're essentially labelling each div with a specific name.
- Classes are useful because they are re-usable
- **IDs are far less useful than classes. You need to guarantee that the ID you create is unique on the page.**
- **IDs are useful for deep linking. Because there is only one place for the browser to navigate to.**
- Name your classes based off **what it does AND NOT WHAT IT LOOKS LIKE**
- Kebab case has all letters in lower case and all whitespace is replaced with a dash

```html
this-is-kebab-case
```

## Meta HTML

- HTML Basic Framework

```html
<!DOCTYPE html>
<!-- this tells us you're working with the latest version of HTML and is always the first line of HTML code-->
<html lang="en">
<!-- html tag basically tells us the begining and end of your HTML doc -->
<head>
<!-- Head contains all the meta-data to help the browser understand how to read the document-->
  <title>My amazing HTML Document</title>
</head>
<body>
  <h1>Check this out</h1>
  <!-- Your amazing HTML here -->
</body>
</html>

<!-- script tags are used to link javascript files-->
<script></script>

<!-- link is how you bring in all your CSS -->
<link />

<!-- to see both your HTMl and CSS, you would use the style tags but this isn't the typical approach-->
<style></style>

```

# CSS Notes

- CSS is a series of rules. Essentially, **if this condition is true, set these styles.**
- If you don't specify the length, the following take the whole line: h1 to h6, p, div.
- **Classes can be used to style the same tags.**
- The way to differentiate between a tag and a class is using a period.

```css
.branding {
/* The set of rules in this section refers to a class named branding */
}
```

- Generally, style on **classes!**
- Styling on tags should only be done if you literally want every element on the page to be the same.
- **What is the cascade?**
    - Firstly, try to keep your CSS as simple as possible
    - But what happens if two CSS classes have conflicting properties?

    ```html
    <style>
    .title{
    	color: red;
    }

    .title{
    	color:green;
    }
    </style>

    <h1 class="title other-title">Cool Title</h1>
    ```

    - In the code snippet above, the text "Cool Title" will be set to the colour green. The reason being, **when everything is said equal, the one that comes last WINS!**
    - **Classes are more specfic than tags:**

    ```html
    <style>
      .title-4 {
        color: orange;
      }

      h1 {
        color: green;
      }
    </style>
    <h1 class="title-4">Another h1</h1>
    ```

    - The output of the above code will be "Another h1" because a class selector **overpowers a tag selector**.

- To incorporate ID selectors in CSS, you use the '#' to set rules based off IDs. **ID selectors overpower class selectors.**

```html
<style type="text/css">
  #site-brand {
    color: red;
  }

  h1.nav-head.nav-main.other-useful-class {
    /*
     * this class is way too specific; never have a class selector so long
     * it's ridiculous and just to illustrate a point
     */
    color: green;
  }
</style>
<h1 id="site-brand" class="nav-head nav-main other-useful-class">The Brand of my Website</h1>

/* Colour of sentence will be RED */
```

- Something that has a higher rank is the " !important ". **Avoid using! But this is an example:**

```html
<style>
  #site-brand-2 {
    color: red;
    border: 1px solid red;
  }

  .nav-head-2 {
    color: green !important;
    border: 1px solid green;
  }
</style>
<h1 id="site-brand-2" class="nav-head-2 nav-main-2 other-useful-class-2">The Brand of my Website</h1>

/* Colour of sentence will be GREEN */
```

- Pseudoclasses are used based off how elements look on certain events. An example is the hover pseudoclass.
- What is the wildcard selector?

```html
<style>
* {
	font-weight: bold;
}
</style>
```

- The '*' applies to the entire page.
- CSS can also be used to layout the page differently. By default, display property for divs is set `block`
- Padding refers to **inside the border**
- margin: this is the space outside of the element between it and other elements. It is outside of the border
- A typical box model looks like this:

```css
.example {
  border: 3px solid red;
  padding: 5px;
  margin: 25px;
  background-color: white;
}
```

- One exception to using a selector tag is or box sizing:

```css
* {
  box-sizing: border-box;
}
```

- The above rule will make everything use the `border-box` sizing instead of the default one.
- The order is **Height,** **Width, Padding, Border, and Margin**
- Float doesn't allow a box/element to be above a box/element before it.
- Some key Flex properties are flex-direction, justify-content (left & right adjustements), and align-items (top & bottom adjustments).
- **With Flex, you're changing the parent container, not the child elements within it.**
- The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines.

## Effective Patterns for Writing CSS

- If you do use the cascading function, make sure the rules are on the same file right after each other. So it's easier to read.

- The HTML <section> element represents a standalone section — which doesn't have a more specific semantic element to represent it — contained within an HTML document. Typically, but not always, sections have a heading.

- section and div are essentially the same thing but section has more meaning (documentation wise)

- A rule of thumb:
	- Margins are used to spaced elements between each other
	- Padding should be use to space things within the element.


# Javascript
- Javascript is single-threaded. It has no way to preform concurrency

```jsx
const monthlyRent = 500;
console.log(monthlyRent);

const yearlyRent = monthlyRent * 12;
console.log(yearlyRent);
```

- **const** means it's an unchanging value. You can't assign it another value unless you use **less.**
- Javascript using **camelcasing** for naming variables.
- You have to use "  `  " aka back-ticks to use template-strings :

```jsx
const firstName = "Brian";
const lastName = "Holt";

const sentence = "Hello " + firstName + " " + lastName + "! How are you!?";
const sentenceWithTemplate = `Hello ${firstName} ${lastName}! How are you!?`;

console.log(sentence);
console.log(sentenceWithTemplate);
```

```xml
Result

"Hello Brian Holt! How are you!?"
"Hello Brian Holt! How are you!?"
undefined
```

- Control Flow in Javascript:

```jsx
const skyIsBlue = true;
​
if (skyIsBlue) {
  console.log("The sky is blue!");
} else {
  console.log("The sky is … not blue?");
}
```

- In Javascript, `=` is used to assign a value to a variable. Triple equals `===` is used to check if a value is **equal** to the value that's being compared. Double equals, `==` uses coercion to try and make the comparison true. For example, if you compared **an int 86 to a string '86'.**
    - IF, ELSE-IF, ELSE:

    ```jsx
    const friendsAtYourParty = 10;
    ​
    if (friendsAtYourParty === 0) {
      console.log("Cool, now I have a lot of nachos to myself.");
    } else if (friendsAtYourParty >= 4) {
      console.log("Perfect amount to play some Mario Kart.");
    } else {
      console.log("Wooooo turn on the dance music!");
    }
    ```

- **LOOPS**

```jsx
let friendsAtYourParty = 0;
while (friendsAtYourParty < 10) {
  friendsAtYourParty = friendsAtYourParty + 1;
}
console.log(friendsAtYourParty);

let friendsAtYourParty = 0;
for (let i = 0; i <= 10; i++) {
  friendsAtYourParty++;
}
console.log(friendsAtYourParty);
```

- **Iterative shortcuts**: `-=` (subtraction,) as well as `*=` (multiplication,) `/=` (division,) and `**=` (exponent)
- **let has block level scope and var has function level scope.**
    - It can be said that a variable declared with var is defined throughout the program **as compared to let.**
- **FUNCTIONS**

```jsx
function addTwo(number) {
  return number + 2;
}

const finalAnswer = addTwo(5);
console.log(finalAnswer);
```

- **OBJECTS**

```jsx
const person = {
  name: "Brian Holt",
  city: "Seattle",
  state: "WA",
  favoriteFood: "🌮",
  wantsTacosRightNow: true,
  numberOfTacosWanted: 100
};
console.log(person);
console.log(person.name);
```

- You can have an object within an object as well

```jsx
const person = {
  name: "Brian Holt",
  city: "Seattle",
  state: "WA",
  favoriteFood: "🌮",
  wantsTacosRightNow: true,
  numberOfTacosWanted: 100,
	
	address:{
		street: "133 Place Road"
		apt: "123"
	}
};
console.log(person);
console.log(person.name);
console.log(person.address.street); //this is how you would call an object within an object
```

- Objects can also have their own functions within them:

```jsx
const dog = {
  name: "dog",
  speak() {
    console.log("woof woof");
  }
};

dog.speak();
```

- **CONTEXT**

```jsx
const me = {
  name: {
    first: "Brian",
    last: "Holt"
  },
  location: {
    streetNumber: 500,
    street: "Fakestreet",
    city: "Seattle",
    state: "WA",
    zipCode: 55555,
    country: "USA"
  },
  getAddress() {
    return `${this.name.first} ${this.name.last}
${this.location.streetNumber} ${this.location.street}
${this.location.city}, ${this.location.state} ${this.location.zipCode}
${this.location.country}`;
  }
};

console.log(me.getAddress());
```

- **this** refers to whatever object it is on. The general rule of thumb is, the closest object to the **this** refers to.
- For the above code snippet, **this** refers to the **object me.**
- If I just reference `this` from the outtermost layer, it'll be the global object, which in the browser is something called `window`. `window` already has a bunch of stuff on it. For example:
- A good rule of thumb (that is unfortunately not always true) is that if you're inside an object of some sort, the `this` will be that object. If not, it'll be the global object, `window`.
- **ARRAYS**
- An **ordered collection of data. In contrast, an object is an un-ordered collection of data with keys and values.**

```jsx
const daysOfTheWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
console.log(daysOfTheWeek);
console.log(daysOfTheWeek[0]); // Monday
console.log(daysOfTheWeek[1]); // Tuesday
console.log(daysOfTheWeek[6]); // Sunday
```

- You can use `push` to add elements to the end of the array

```jsx
const courses = [
  { teacher: "Kyle Simpson", course: "JS Function Lite" },
  { teacher: "Sarah Drasner", course: "Intro to Vue" },
  { teacher: "Brian Holt", course: "Complete Intro to React v3" },
  { teacher: "Steve Kinney", course: "State Management" }
];

courses.push({ teacher: "Sean Larkinn", course: "Webpack" });

console.log(courses);

courses[2] = { teacher: "Brian Holt", course: "Complete Intro to React v4" }; // overwriting course name with this statement
// could have also used courses[2].course = "Complete Intro to React v4"
console.log(courses);
```

- To invidually log every element in an array:

```jsx
const cities = [
  "Seattle",
  "San Francisco",
  "Salt Lake City",
  "Amsterdam",
  "Hong Kong"
];

// method 1
for (let i = 0; i < cities.length; i++) {
  console.log(cities[i]);
}

// method 2
cities.forEach(function(city)) {
  console.log(city);
});
```
- **DOM (DATA OBJECT MODEL)**
- The DOM is how javascript interacts with HTML & CSS.
- `document` is a globally available variable in the browser that you use to interact with the HTML and CSS.
- Example:

```jsx
<style>
  .red-square {
    width: 100px;
    height: 100px;
    background-color: crimson;
  }
</style>

<div class="red-square"></div>

<script>
  const redSquare = document.querySelector('.red-square'); 
// you can start manipulating the variable after assigning it to const redSquare
  
	redSquare.style.backgroundColor = 'green';
</script>
```

- We called a method on `document`. `document` is a globally available variable in the browser that you use to interact with the HTML and CSS. It a lot of methods that you can use. In this case, we're using the `querySelector` in which you pass in a CSS selector and it returns to you the **first** one of that matches selector that it finds (if you have many of them on the page, you get just the first one.)
- From there, we have a JavaScript pointer to the `div.red-square` tag stored in the `redSquare` variable which means we can start manipulating it.
- We then use the `style` object which represents all the CSS styles that are being applied to that object at that time.
- We then set the `backgroundColor` of that element. Notice it is `backgroundColor` and not `background-color` (camelCasing vs kebab-casing). This is how you interact with CSS via JavaScript. Anything that's kebab-cased like `padding-right` becomes camelCased, like `paddingRight`. While annoying, it'd be even more annoying if they didn't switch it since everything in JavaScript is camelCased.
- We then just assign that to be whatever value we want. This works with any CSS property, eg: `tag.style.marginBottom = '50px'`.
- An example of modifying mulitple items all at once:

```jsx
<ul>
  <li class="js-target">Unchanged</li>
  <li class="js-target">Unchanged</li>
  <li>Won't Change</li>
  <li class="js-target">Unchanged</li>
  <li>Won't Change</li>
  <li class="js-target">Unchanged</li>
</ul>
<script>
  const elementsToChange = document.querySelectorAll('.js-target');
  for (let i = 0; i < elementsToChange.length; i++) {
    const currentElement = elementsToChange[i];
    currentElement.innerText = "Modified by JavaScript!";
  }
</script>
```

**RESULT** 

```
Modified by JavaScript!
Modified by JavaScript!
Won't Change
Modified by JavaScript!
Won't Change
Modified by JavaScript!
```

**EVENTS AND LISTENERS**

- Evenets and listeners are used to make a webpage more reactive to the user. The following example creates a button named "Click Me". When it's clicked, a function is evoked,a pop up will appear saying "Hey There!".

```jsx
<button class="event-button">Click me!</button>
<script>
  const button = document.querySelector('.event-button');
  button.addEventListener('click', function () {
    alert("Hey there!");
  });
```

**EVENT DELEGATION**

- Instead of adding a bunch of event listeners on a bunch of elements you need to listen for, you can use **event bubbling.**
    - You would be listening for an event in a parent container, if any one of the elements get clicked, the event that has been triggered will bubble up to the parent container.
    - Example:

    ```jsx
    <div class="button-container">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
    </div>
    <script>
      document.querySelector('.button-container').addEventListener('click', function(event) {
        if (event.target.tagName === 'button'){
        	alert(`You clicked on button ${event.target.innerText}`);
    	}	
    		event.stopPropagation(); //this function's used to stop the event from bubbling further than the parent container
      });
    </script>
    ```

## AJAX

- Asynchronous Javascript and XML
- AJAX allows you to request more information from a server without refreshing it.

```jsx
const promise = fetch(DOG_URL); // the newer way to preform AJAX

promise 
	.then(function(response) {
		const processingPromise = response.json();
		return processingPromise;
})
	.then(function(processedResponse) {
		console.log(processedResponse);
});

console.log("this will log first");
```

- What `fetch` returns is called a promise and it's similar to a callback that we used before. A promise, like callbacks, allows you to deal with things that don't happen immediately, things that are asynchronous. In this case, we're waiting for the API to respond with the information we asked for. It takes to request more information over the Internet and we don't want to hold up the rest of our code.
- **JSON** stands for JavaScript Object Notation, and it's a very common way to exchange data over the Internet because it's machine readable but also pretty readable to humans.

```jsx
const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const promise = fetch(DOG_URL);
const doggos = document.querySelector(".doggos");

promise
  .then(function(response) {
    const processingPromise = response.json();
    return processingPromise;
  })
  .then(function(processedResponse) {
    const img = document.createElement("img");
    img.src = processedResponse.message;
    img.alt = "Cute doggo";
    doggos.appendChild(img);
  });
```

## Node.js [ PARCEL]

- From a high-level, it's important to understand that node allows you to run javascript outside the browser.
- Install node.js to your machine

```xml
npm install --global parcel-bundler
```

- Use the following code to create an npm project (-y forces the creating without answering any questions):

```xml
npm init -y
```

```xml
npm install popmotion   //downloading dependencies 
```

- The following code will bundle the dependencies such as popmotion together and run a local server. Parcel looks for changes and will update itself when you make changes to your files.

```xml
parcel index.html
```

- You can also bundle together other js files with the `require` command. Example:

```jsx
require("./useless");
```

- There is a new way of doing modules, ES6 modules:

```jsx
import popmotion from "popmotion";
import "./useless";

// the old way was

const popmotion = require("popmotion");
require("./useless");
```

## Git and BASH

