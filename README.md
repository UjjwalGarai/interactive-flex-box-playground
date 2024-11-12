# Flexbox Playground: Interactive CSS Flexbox Tutorial

Welcome to the **Flexbox Playground**, an interactive tutorial designed to help you master CSS Flexbox! This tool allows you to experiment with key flexbox properties, observe changes in real-time, and gain a visual understanding of how CSS Flexbox layouts work. Perfect for learners who prefer a hands-on approach!

## Table of Contents
- [Features](#features)
- [Usage](#usage)
  - [Layout Controls](#layout-controls)
  - [Item Controls](#item-controls)
- [Code Structure](#code-structure)
- [Examples](#examples)
- [Demo](#demo)
- [License](#license)

## Features
- **Interactive Flexbox Controls**: Change properties like `flex-direction`, `justify-content`, `align-items`, and more.
- **Visual Feedback**: See immediate changes on colorful flex items as you adjust the settings.
- **Individual Flex Item Customization**: Modify specific items with properties like `order`, `flex-grow`, `flex-shrink`, and `flex-basis`.
- **Reset Options**: Easily reset properties to default values to try different configurations.


## Usage
### Layout Controls
Adjust the main container's layout using the **Flex Box Playground** panel. Here’s a breakdown of what each property does:
- **Flex Direction**: Changes the direction of items (`row`, `column`, etc.).
- **Justify Content**: Aligns items along the main axis (e.g., `center`, `space-around`).
- **Align Items**: Aligns items along the cross axis.
- **Flex Wrap**: Determines if items wrap within the container.
- **Align Content**: Adjusts alignment along the cross axis when items wrap.
- **Gap**: Sets space between items using `gap`, `row-gap`, or `column-gap`.

### Item Controls
In the **Flex Item Playground** panel, select an individual item to modify its specific properties:
- **Order**: Changes the item’s order in the layout.
- **Flex Grow**: Specifies how much an item will grow relative to others.
- **Flex Shrink**: Specifies how much an item will shrink relative to others.
- **Flex Basis**: Sets the initial main size of an item.
- **Align Self**: Overrides `align-items` for the selected item.

## Code Structure
- **index.html**: Contains the HTML structure for the playground and flex items.
- **style.css**: Defines base styles, color classes, and layout adjustments for the playground.
- **index.js**: Contains JavaScript code for handling property changes and resetting values.

## Examples
1. **Change Flex Direction**: Select "Column" under **Flex Direction** to see items arranged vertically.
2. **Align Content Center**: Choose `center` in **Align Content** to center items within the container.
3. **Customize Individual Items**: Select an item (e.g., "Red") from **Select Item** and adjust properties like `flex-grow` to see it expand in size.


## Demo
> **Link to Demo**: [URL](https://ujjwalgarai.github.io/interactive-flex-box-playground/) 

## License
This project is licensed under the MIT License.

---

Explore and experiment with Flexbox in this interactive playground. Feel free to contribute or open an issue if you have any feedback or suggestions!
