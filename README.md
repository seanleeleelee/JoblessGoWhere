# JoblessGoWhere

With the current state of the economy, it has been difficult for people to find employment. This includes fresh graduates and professionals in severely affected sectors like tourism and retail. As a result, more people are planning to upgrade their current skill sets to improve their employability. Despite the plethora of choices online and offline, people may be unsure of which courses are applicable or useful to their industry.

The JoblessGoWhere platform will be a website for people who are looking to upgrade their skill sets. It aims to provide users with the most relevant resources for their job search. This can be in the form of online courses from edX or Coursera, or in-person training programmes provided by SGUnited Skills programme.

Users would answer a series of questions about their career aspirations and an algorithm would recommend a personalized collection of learning resources. We also can show users market trends for the different industries which will help them make more informed choices if they are thinking of switching industries. Our goal is to reduce frictional unemployment, for users to upgrade themselves by providing a centralized platform for them to see all courses about a specific subject. Hopefully, this would help users increase their employability in a shorter period.

## Table of Contents

* [BuildSetup](#buildsetup)
* [Documentation](#documentation)
* [Features](#feature)
* [Videos](#videos)
* [File Structure](#file-structure)
* [Reporting Issues](#reporting-issues)
* [Questions or Feedback](#technical-support-or-questions)
* [Acknowledgements](#acknowledgements)


## BuildSetup
```
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/).

## Documentation
The documentation for JoblessGoWhere is hosted on our [drive](https://motherfuckingwebsite.com/).

## Features
- User Questionnaire
- Recommendation algorithm
- Industries Dashboard

## Videos
- [Product Overview Video](https://www.youtube.com/watch?v=ub82Xb1C8os)

## File Structure
Within the download you'll find the following directories and files:
```
📦src
 ┣ 📂assets
 ┃ ┣ 📂img
 ┃ ┃ ┣ 📂examples
 ┃ ┃ ┃ ┣ 📜clem-onojegaw.jpg
 ┃ ┃ ┃ ┣ 📜clem-onojeghuo.jpg
 ┃ ┃ ┃ ┣ 📜cynthia-del-rio.jpg
 ┃ ┃ ┃ ┣ 📜mariya-georgieva.jpg
 ┃ ┃ ┃ ┣ 📜olu-eletu.jpg
 ┃ ┃ ┃ ┣ 📜studio-1.jpg
 ┃ ┃ ┃ ┣ 📜studio-2.jpg
 ┃ ┃ ┃ ┣ 📜studio-3.jpg
 ┃ ┃ ┃ ┣ 📜studio-4.jpg
 ┃ ┃ ┃ ┗ 📜studio-5.jpg
 ┃ ┃ ┣ 📂faces
 ┃ ┃ ┃ ┣ 📂quiz
 ┃ ┃ ┃ ┃ ┗ 📜student.jpg
 ┃ ┃ ┃ ┣ 📜among_us.png
 ┃ ┃ ┃ ┣ 📜avatar.jpg
 ┃ ┃ ┃ ┣ 📜camp.jpg
 ┃ ┃ ┃ ┣ 📜card-profile1-square.jpg
 ┃ ┃ ┃ ┣ 📜card-profile2-square.jpg
 ┃ ┃ ┃ ┣ 📜card-profile4-square.jpg
 ┃ ┃ ┃ ┣ 📜card-profile5-square.jpg
 ┃ ┃ ┃ ┣ 📜card-profile6-square.jpg
 ┃ ┃ ┃ ┣ 📜christian.jpg
 ┃ ┃ ┃ ┣ 📜kendall.jpg
 ┃ ┃ ┃ ┗ 📜marc.jpg
 ┃ ┃ ┣ 📜apple-icon.png
 ┃ ┃ ┣ 📜bg.jpg
 ┃ ┃ ┣ 📜bg2.jpg
 ┃ ┃ ┣ 📜bg3.jpg
 ┃ ┃ ┣ 📜city-profile.jpg
 ┃ ┃ ┣ 📜city.jpg
 ┃ ┃ ┣ 📜hero.jpg
 ┃ ┃ ┣ 📜hero2.jpg
 ┃ ┃ ┣ 📜landing.jpg
 ┃ ┃ ┣ 📜leaf1.png
 ┃ ┃ ┣ 📜leaf2.png
 ┃ ┃ ┣ 📜leaf3.png
 ┃ ┃ ┣ 📜leaf4.png
 ┃ ┃ ┣ 📜nature-2.jpg
 ┃ ┃ ┣ 📜nature-3.jpg
 ┃ ┃ ┣ 📜nature.jpg
 ┃ ┃ ┣ 📜profile.jpg
 ┃ ┃ ┣ 📜profile_city.jpg
 ┃ ┃ ┗ 📜vue-mk-header.jpg
 ┃ ┣ 📂scss
 ┃ ┃ ┣ 📂material-kit
 ┃ ┃ ┃ ┣ 📂mixins
 ┃ ┃ ┃ ┃ ┣ 📜_transparency.scss
 ┃ ┃ ┃ ┃ ┗ 📜_vendor-prefixes.scss
 ┃ ┃ ┃ ┣ 📂plugins
 ┃ ┃ ┃ ┃ ┣ 📜_perfect-scrollbar.scss
 ┃ ┃ ┃ ┃ ┗ 📜_plugin-nouislider.scss
 ┃ ┃ ┃ ┣ 📜_alerts.scss
 ┃ ┃ ┃ ┣ 📜_autocomplete.scss
 ┃ ┃ ┃ ┣ 📜_badges.scss
 ┃ ┃ ┃ ┣ 📜_buttons.scss
 ┃ ┃ ┃ ┣ 📜_cards.scss
 ┃ ┃ ┃ ┣ 📜_carousel.scss
 ┃ ┃ ┃ ┣ 📜_checkboxes.scss
 ┃ ┃ ┃ ┣ 📜_colors.scss
 ┃ ┃ ┃ ┣ 📜_datepicker.scss
 ┃ ┃ ┃ ┣ 📜_dialogs.scss
 ┃ ┃ ┃ ┣ 📜_dropdown.scss
 ┃ ┃ ┃ ┣ 📜_example-pages.scss
 ┃ ┃ ┃ ┣ 📜_footers.scss
 ┃ ┃ ┃ ┣ 📜_headers.scss
 ┃ ┃ ┃ ┣ 📜_images.scss
 ┃ ┃ ┃ ┣ 📜_info-areas.scss
 ┃ ┃ ┃ ┣ 📜_inputs.scss
 ┃ ┃ ┃ ┣ 📜_layout.scss
 ┃ ┃ ┃ ┣ 📜_misc.scss
 ┃ ┃ ┃ ┣ 📜_mixins.scss
 ┃ ┃ ┃ ┣ 📜_navbars.scss
 ┃ ┃ ┃ ┣ 📜_pagination.scss
 ┃ ┃ ┃ ┣ 📜_pills.scss
 ┃ ┃ ┃ ┣ 📜_popups.scss
 ┃ ┃ ┃ ┣ 📜_progress.scss
 ┃ ┃ ┃ ┣ 📜_radios.scss
 ┃ ┃ ┃ ┣ 📜_responsive.scss
 ┃ ┃ ┃ ┣ 📜_shadows.scss
 ┃ ┃ ┃ ┣ 📜_tables.scss
 ┃ ┃ ┃ ┣ 📜_tabs.scss
 ┃ ┃ ┃ ┣ 📜_togglebutton.scss
 ┃ ┃ ┃ ┣ 📜_typography.scss
 ┃ ┃ ┃ ┗ 📜_variables.scss
 ┃ ┃ ┗ 📜material-kit.scss
 ┃ ┗ 📜demo.css
 ┣ 📂components
 ┃ ┣ 📂cards
 ┃ ┃ ┣ 📜LoginCard.vue
 ┃ ┃ ┗ 📜NavTabsCard.vue
 ┃ ┣ 📜Badge.vue
 ┃ ┣ 📜Dropdown.vue
 ┃ ┣ 📜index.js
 ┃ ┣ 📜Modal.vue
 ┃ ┣ 📜Pagination.vue
 ┃ ┣ 📜Parallax.vue
 ┃ ┣ 📜Slider.vue
 ┃ ┗ 📜Tabs.vue
 ┣ 📂layout
 ┃ ┣ 📜MainNavbar.vue
 ┃ ┗ 📜MobileMenu.vue
 ┣ 📂plugins
 ┃ ┣ 📜globalComponents.js
 ┃ ┣ 📜globalDirectives.js
 ┃ ┣ 📜globalMixins.js
 ┃ ┗ 📜material-kit.js
 ┣ 📂views
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📜BasicElementsSection.vue
 ┃ ┃ ┣ 📜JavascriptComponentsSection.vue
 ┃ ┃ ┣ 📜NavigationSection.vue
 ┃ ┃ ┣ 📜NavPillsSection.vue
 ┃ ┃ ┣ 📜NotificationsSection.vue
 ┃ ┃ ┣ 📜SmallNavigationSection.vue
 ┃ ┃ ┣ 📜TabsSection.vue
 ┃ ┃ ┗ 📜TypographyImagesSection.vue
 ┃ ┣ 📜Index.vue
 ┃ ┣ 📜Landing.vue
 ┃ ┣ 📜Login.vue
 ┃ ┣ 📜Profile.vue
 ┃ ┗ 📜QuizLifestage.vue
 ┣ 📜App.vue
 ┣ 📜main.js
 ┗ 📜router.js
```

## Reporting Issues
We use GitHub Issues as the official bug tracker for Pandas-Connect. Feel free to [email us]().

## Questions or Feedback
If you have questions or have any feedback, do [contact us]().

## Acknowledgements
