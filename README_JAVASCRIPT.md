# Popup and Mobile Dropdown Interaction

## Overview

This project implements two key interactive features on a webpage:

1. **Popup Window:**  
   A popup overlay that displays additional details when triggered.

2. **Mobile Dropdown Toggle:**  
   A mobile-friendly dropdown menu that toggles open and closed on smaller screens.

---

## How It Works

- **Popup Interaction:**  
  When the user clicks the **"The details"** button, a popup appears showing more information. The popup can be closed by clicking a close button inside it.

- **Mobile Dropdown Toggle:**  
  On screens narrower than 768 pixels, clicking a navigation menu item that contains a dropdown submenu toggles the visibility of that submenu.

---

## User Actions That Trigger the Interaction

- Clicking the **"The details"** button triggers the popup to show.
- Clicking the close button inside the popup hides it.
- On mobile devices (width < 768px), clicking a menu item with a dropdown toggles that dropdown open or closed.

---

## Design Choices

- The popup uses a simple show/hide toggle by adding/removing a CSS class, keeping the implementation lightweight and easily maintainable.
- The mobile dropdown toggle is only enabled on smaller screen sizes, improving usability on touch devices and preventing accidental toggling on desktop.
- Using the modern CSS `:has()` selector to target menu items containing dropdowns keeps the JavaScript clean and focused on behavior rather than structure.

## Challenges and Decisions

- **Mobile-Only Interaction:**  
  The decision to limit dropdown toggling to mobile screen sizes helps prevent interference with desktop hover behavior and keeps the UI intuitive on touch devices.