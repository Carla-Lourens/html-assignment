# CSS Styling for Responsive Web Page

Hi! This is a short write-up on how I styled the CSS for this project. I used a mobile-first approach and focused on creating a clean, responsive, and user-friendly layout with some thoughtful design touches. Here's how I approached different aspects of the stylesheet:

---

## Responsiveness

I started with a **mobile-first** strategy, building base styles for small screens and then enhancing them with media queries. I used a breakpoint at `768px` to adjust the layout for tablets and larger screens.

For the navigation, I kept the items stacked vertically on mobile and switched to a horizontal layout using Flexbox when the screen reached 768px. This way, the navigation remains accessible and readable across all devices.

---

## Layout Tools: Flexbox for Navigation

I used **Flexbox** specifically for the main navigation menu. On smaller screens, the menu is a vertical column with space (`gap`) between items. On larger screens, Flexbox makes it easy to switch to a row layout and center the items with `justify-content: center`.

---

## Design Decisions

### Typography and Colors

- The base font is `'Georgia', serif` for a classic, readable feel.
- I chose a warm, soft background color (`#fffaf5`) with darker text (`#333`) for contrast and comfort.
- Accent colors like `#a85664` and `#793149` give the page a friendly, slightly vintage aesthetic.

### Navigation

- I created a responsive nav menu using Flexbox, and included dropdown submenus that appear on hover.
- Submenus are initially hidden (`display: none`) and revealed when their parent list item is hovered over.

### Hero and Section Layouts

- Hero images span the full width of the page and maintain a 16:9 aspect ratio using `aspect-ratio` and `object-fit: cover`.
- Content is centered within sections using a `max-width` and `margin: auto` to ensure readability on wide screens.

### Buttons

- Buttons are styled with a consistent color scheme and hover effects.
- On hover, they slightly scale up, change background color, and show a subtle shadow — this adds a bit of interactivity and polish.

### Footer

- The footer uses the same background color as the header for visual consistency.
- I added a **bouncing animation** to a `.bouncing-text` class using `@keyframes bounce`, just for a playful touch at the end of the page.

---

## Challenges & Experiments

The biggest challenge was gettin the nested list to behave. I struggled to get it to only show when hovering on "The details" section of the nav bar. There are definitely still more improvements that could happen for the nav bar, and I look forward to investigating a toggle menu option in the coming weeks. 

---

## Future Enhancements

Here are a few ideas I’d like to explore further:
- Introduce JavaScript for toggling nav menus on mobile (especially for accessibility)
- Look more into the use of either Flexbox or Grid to further structure the page.
- Possibly break the CSS into components for easier scaling in larger projects
