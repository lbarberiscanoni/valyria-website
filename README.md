## ROADMAP

- [ ] Footer
- [ ] Implement global styling (e.g., using Tailwind CSS)
    - [ ] Test responsiveness and accessibility across devices
- [ ] Add CV look to portfolio pages
- [ ] Sort projects by date 
- [ ] Backfill past projects
- [ ] Connect Vercel to the valyriastudios.com domain

## Mar 21st 2025

- Ok let's do this 
- [x] Navbar 
- [x] Home Page 
    - started styling a little bit like https://readymag.com/designstories/
    - Arguably I should drop our Work page
- [x] Create "Our Services" page (outline the unique business model)
    - It kinda looks bad and at least it's an initial tackle at this

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