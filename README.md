# KyleCars.ke

## Live Demo
[https://iyf-final-project-wrp1-bcmqfoj4b-kyle-kariukis-projects.vercel.app](https://iyf-final-project-wrp1-bcmqfoj4b-kyle-kariukis-projects.vercel.app)

## Project Overview
KyleCars.ke is a premium car dealership and management website designed to provide luxury car enthusiasts and dealers with a seamless experience. Users can explore high-end vehicles, view detailed specifications, and easily contact dealers.

## Brand Identity

### Color System
| Color     | Hex     | Usage/Rationale |
|----------|---------|----------------|
| Primary  | #1F2937 | Dark Gray - sleek, modern, luxury feel |
| Secondary| #FBBF24 | Gold - highlights, buttons, conveys elegance |
| Accent   | #FFFFFF | White - text/background contrast for readability |

### Typography
| Type      | Font   | Usage/Reasoning |
|-----------|--------|----------------|
| Headings  | Poppins| Clean, bold, modern |
| Body      | Roboto | Readable, professional, complements headings |

## Design Decisions

### Layout Adherence
- Used Tailwind CSS grid and flex utilities to maintain consistent spacing  
- Margins and padding measured in `rem` units for responsiveness  
- Verified alignment and proportions using Figma  

### Creative Departures
- Dynamic hero images and testimonials implemented for engagement  
- Brand positioned as premium but approachable for buyers  
- Mobile-first breakpoints using Tailwind’s `sm`, `md`, `lg`, and `xl` classes  

## Component Architecture
- Modular React components: Header, Footer, Hero, Testimonials, Subscription  
- Reusable button, card, and image components  
- Folder structure separates layout, components, and pages for maintainability  

## Performance Optimizations
- Image optimization using Vite’s asset handling  
- Minimized CSS and JS via Vite build  
- Tailwind purge configured to remove unused styles  

## Screenshots
### Desktop View
![Desktop Screenshot 1](./screenshots/desktop1.png)
![Desktop Screenshot 2](./screenshots/desktop2.png)

### Mobile View
![Mobile Screenshot 1](./screenshots/mobile1.png)
![Mobile Screenshot 2](./screenshots/mobile2.png)

> Replace the paths above with your actual screenshot filenames in the `/screenshots` folder.

## Image Credits
- All images sourced from royalty-free platforms (Unsplash, Pexels)  
- Individual attribution available in `/assets` folder

## Technologies Used
- **React:** 18.x
- **Tailwind CSS:** 3.x
- **Vite:** Latest version
- **Additional Packages:** autoprefixer, react-icons

## Challenges & Solutions
1. **404 errors on deployment:** Fixed by adding `_redirects` file and using Vercel auto-deploy for SPA routing
2. **Responsive design issues on mobile:** Solved using Tailwind responsive classes (`sm:`, `md:`, `lg:`)
3. **Optimizing images for performance:** Compressed images and used Vite’s asset handling

## Future Improvements
1. Add full backend integration for dealer management
2. Implement user authentication and favorites system
3. Add dynamic car search and filtering
 

## Installation & Setup
Follow these steps to run the project locally:

1. **Navigate to the project folder:**  
```bash
cd kylekariuki-iyf-final
npm run dev
npm run build
deploy using vercel (optional)
vercel --prod
















