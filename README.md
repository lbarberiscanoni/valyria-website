## ROADMAP

- [ ] Sort projects by date 
    - [ ] Add a "date" attribute
    - [ ] Eventually add "days to completion" 
- [ ] Add CV look to portfolio pages
- [ ] Connect Vercel to the valyriastudios.com domain
- [ ] Test responsiveness and accessibility across devices

## Mar 25th 2025

- [x] Add Teammates (pic, linkedin, github)

- Next I need to fix the dynamic loops that are generating the Team page 

- [x] Map "teammates" to "developers"
    - [x] ensure their name shows up under [username] for the url

## Mar 24th 2025

- ok let's do this
    - first step is to fire up Claude

- [x] Systematize the CSS
    - it did this pretty well, now most of the styling is happening in `global.css` which makes it easier to do global modifications
    - Claude reccomended to setup a component library 
        ```src/
        ├── components/
        │   ├── layout/
        │   │   ├── Section.js
        │   │   ├── Container.js
        │   │   └── Grid.js
        │   ├── ui/
        │   │   ├── Button.js
        │   │   ├── Card.js
        │   │   ├── Heading.js
        │   │   └── ProgressBar.js
        │   ├── common/
        │   │   ├── ProjectCard.js
        │   │   ├── TeamMemberCard.js
        │   │   ├── PricingCard.js
        │   │   └── CheckItem.js
        │   └── sections/
        │       ├── Hero.js
        │       ├── About.js
        │       ├── Projects.js
        │       └── CallToAction.js```
    - the component library is not a bad because it makes the code more modular
        - let's start with the basics
            - Section
            - Container
            - Grid 
            - Button
            - Card
    - ok now let's update the rest of the website with this component architecture

- [ ] Backfill past projects (live project, repo link, demo link)
    - [x] Carbon Trust
    - [x] Net Project
    - [x] GBA
    - [x] Roo
    - [x] FantasySCOTUS
    - [x] Farmer Website
    - [x] Poverty Pockets
- let's make a clear template
```
{
    "name": "",
    "developer": "",
    "designer": "",
    "client": "",
    "project-url": "",
    "video-url": "",
    "repo-link": "",
    "client-url": "",
    "description": ""
}
```

## Mar 22nd 2025

- ok let's do this
    - first step is giving Claude context again
        - then we drop trying to have it see it on its own simulator and instead I'll just show pictures

- Let me complete the globals.css file and then summarize all the updates we've made to the site:
    1. Created New Components
        - **Footer Component**: Added a fully responsive footer with company info, site links, and contact information
        - **Enhanced Navigation**: Ensured the navbar works properly with active state for current pages
    2. Page Redesigns
        - **Home Page**: Created a modern layout with hero section, about section, featured projects, and call-to-action
        - **Services Page**: Redesigned with pricing cards, process explanation, FAQ section, and better visual hierarchy
        - **Work Page**: Improved project showcase with better layout and prominent calls-to-action
        - **Team Page**: Enhanced with leadership section, student developer cards, and "join our team" section
        - **Portfolio Pages**: Created detailed portfolio templates for individual developers
    3. Styling Improvements
        - **Global CSS**: Enhanced with consistent typography, spacing, and reusable components
        - **Responsive Design**: Ensured all pages work well on mobile, tablet, and desktop
        - **Component Classes**: Added utility classes for buttons, cards, typography, etc.
        - **Color Scheme**: Maintained the minimalist black/white aesthetic with proper contrast
    4. Features Added
        - **Call-to-Action Sections**: Added to each page to encourage visitor engagement
        - **Improved Information Architecture**: Better organization of content with clear visual hierarchy
        - **Responsive Layout**: All pages now properly adjust for different screen sizes
        - **Consistent Styling**: The brand identity is now consistent across all pages

- ok now let's systematize the css
    - we don't want to style each individual element, but rather use more of an object-oriented approach


## Mar 21st 2025

- Ok let's do this 
- [x] Navbar 
- [x] Home Page 
    - started styling a little bit like https://readymag.com/designstories/
    - Arguably I should drop our Work page
- [x] Create "Our Services" page (outline the unique business model)
    - It kinda looks bad and at least it's an initial tackle at this
- [ ] Implement global styling (e.g., using Tailwind CSS)
    - let's see the structure it proposes
        src/
        ├── app/
        │   ├── globals.css         # Global styles and Tailwind imports
        │   └── layout.js           # Root layout with Tailwind classes
        ├── components/
        │   ├── ui/                 # Reusable UI components
        │   │   ├── Button.js
        │   │   ├── Card.js
        │   │   └── ...
        │   ├── layout/             # Layout components
        │   │   ├── Footer.js       # Your pending footer component
        │   │   └── NavBar.js       # Your existing navbar
        │   └── project/            # Project-specific components
        │       ├── ProjectCard.js  # For homepage grid
        │       └── ...
        └── styles/
            └── tailwind-utils.js   # Any custom utility functions
    - let's leverage Claude to iterate on the aesthetic 

## Mar 18th 2025

- ok so this is the beginning
- we are using NextJS with App Router
- it's now hosted on Vercel at [valyria-website.vercel.app](https://valyria-website.vercel.app/)
    - I will later add valyriastudios.com to the DNS or something
- ok now let's look at the websites Shanik found
    - ok so here are the ReadyMag websites
        1. https://readymag.com/designs/grids/
        2. https://readymag.com/designstories
        3. https://readymag.com/designs/sleek/project/
- Actually, let's start with the general component structure first
    - let's start with the JSON
        ``` {
            "name": <project-name>,
            "developer": <student_name>,
            "designer": <designer_name>,
            "client": <client_name>,
            "project-url": <project-link>,
            "video-url": <video-link>,
            "repo-link": <repo-url>,
            "client-url": <client_url>,
            "description": <project descriptoin>,
            "date": <date-of-project>,
        }```
    - 