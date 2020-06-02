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
