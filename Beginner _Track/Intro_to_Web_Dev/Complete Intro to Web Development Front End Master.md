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