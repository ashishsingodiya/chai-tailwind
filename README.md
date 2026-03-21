# Chai Tailwind

A simple utility-first CSS class system for building web interfaces quickly and easily.

## What is Chai Tailwind?

Chai Tailwind is a collection of pre-made CSS classes that you can use directly in your HTML. Instead of writing custom CSS for every element, you use class names like `chai-bg-orange`, `chai-text-center`, or `chai-rounded-lg` to style your pages.

It works similar to Tailwind CSS but is simpler and easier to get started with.

## Key Features

- Simple utility classes for styling
- Live preview playground to test your code
- Built-in HTML editor with code suggestions
- Support for colors, spacing, typography, layouts, borders, and more
- No build process required, just use the classes

## How to Use

1. Open `index.html` in your web browser
2. You will see the welcome page and the Chai Tailwind playground below
3. In the playground, use chai classes to style your HTML
4. See the live preview update as you type

## Available Classes

Chai Tailwind includes many utility classes organized by type:

### Colors

- Background colors: `chai-bg-red`, `chai-bg-blue`, `chai-bg-green`, `chai-bg-orange`, `chai-bg-white`, `chai-bg-gray`, and more
- Text colors: `chai-text-red`, `chai-text-blue`, `chai-text-orange`, `chai-text-white`, `chai-text-gray`, etc.

### Spacing

- Padding: `chai-p-10`, `chai-px-12`, `chai-py-6`, etc.
- Margin: `chai-m-10`, `chai-mx-auto`, `chai-mt-24`, `chai-mb-20`, etc.

### Text

- Font size: `chai-text-xs`, `chai-text-sm`, `chai-text-md`, `chai-text-lg`, `chai-text-xl`, `chai-text-2xl`, `chai-text-3xl`
- Text align: `chai-text-left`, `chai-text-center`, `chai-text-right`
- Font weight: `chai-font-light`, `chai-font-normal`, `chai-font-medium`, `chai-font-semibold`, `chai-font-bold`
- Other: `chai-capitalize`

### Layout

- Display: `chai-block`, `chai-inline`, `chai-inline-block`, `chai-flex`, `chai-grid`, `chai-hidden`
- Flexbox: `chai-flex-row`, `chai-flex-col`, `chai-flex-wrap`, `chai-justify-center`, `chai-items-center`
- Grid: `chai-grid-cols-1`, `chai-grid-cols-2`, `chai-grid-cols-3`, `chai-grid-cols-4`
- Width/Height: `chai-w-75`, `chai-w-100`, `chai-min-h-400`

### Borders and Shadows

- Borders: `chai-border`, `chai-border-2`, `chai-border-4`, `chai-border-r`, `chai-border-b`
- Rounded corners: `chai-rounded-md`, `chai-rounded-lg`, `chai-rounded-full`
- Shadows: `chai-shadow-md`, `chai-shadow-lg`

### Other Utilities

- Overflow: `chai-overflow-hidden`
- Cursor: `chai-cursor-pointer`

## Example

Here's a simple example of styling with Chai Tailwind:

```html
<div class="chai-bg-orange chai-p-10 chai-rounded-lg chai-text-center">
  <h1 class="chai-text-white chai-text-2xl chai-font-bold">Hello</h1>
  <p class="chai-text-white">This is styled with Chai Tailwind</p>
</div>
```

## Files in This Project

- `index.html` - The main page with the playground
- `main.js` - JavaScript code that runs the editor and preview
- `chaiData.js` - All the available chai utility classes and their styles

## How It Works

1. Each chai class is defined in `chaiData.js` with a CSS property and value
2. When the page loads, `main.js` finds all elements with chai classes
3. It applies the corresponding CSS styles to those elements
4. In the playground, you can test your HTML with live updates

## Getting Started

Simply open `index.html` in any web browser. No installation or setup needed.

## Author

Made by Ashish Singodiya

Email: hello@ashish.pro
Website: https://ashish.pro
