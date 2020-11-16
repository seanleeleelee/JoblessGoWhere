# JoblessGoWhere

With the current state of the economy, it has been difficult for people to find employment. This includes fresh graduates and professionals in severely affected sectors like tourism and retail. As a result, more people are planning to upgrade their current skill sets to improve their employability. Due to the plethora of choices online and offline, people may be unsure of which courses have the most impact on their career progression.

JoblessGoWhere is a website for job seekers who are looking to upgrade their skill sets. It aims to provide users with the most relevant resources for their job search. This can be in the form of online courses from edX or Coursera, or in-person training programmes provided by SGUnited Skills programme.

Users would answer a series of questions about their career aspirations and an algorithm would recommend a personalized collection of learning resources. JoblessGoWhere also shows market trends for different industries which will help user make more informed choices if they are thinking of switching industries. Our goal is to reduce frictional unemployment by improving the quality of job seekers in the workforce. Users can upgrade themselves by using JoblessGoWhere to see courses that are the most relevant to their needs on a centralized platform. Hopefully, this would help Singaporeans increase their employability in a shorter period.

## Table of Contents

- [JoblessGoWhere](#joblessgowhere)
  - [Table of Contents](#table-of-contents)
  - [BuildSetup](#buildsetup)
  - [Features](#features)
  - [Videos](#videos)
  - [File Structure](#file-structure)
  - [Questions or Feedback](#questions-or-feedback)
  - [Contributors](#contributors)


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

```

## Features
- User Questionnaire
- Recommendation algorithm
- Industries Dashboard

## Videos
- [Product Overview Video](https://www.youtube.com/watch?v=HwGWJ8N8w74)

## File Structure
```
src
 ┣ assets
 ┃ ┣ img
 ┃ ┃ ┣ faces
 ┃ ┃ ┃ ┣ quiz
 ┃ ┃ ┃ ┃ ┣ graduate.jpeg
 ┃ ┃ ┃ ┃ ┣ industry.jpg
 ┃ ┃ ┃ ┃ ┣ midcareer.jpg
 ┃ ┃ ┃ ┃ ┗ student.jpg
 ┃ ┃ ┃ ┣ among_us.png
 ┃ ┃ ┃ ┣ profilepic.png
 ┃ ┃ ┃ ┣ user.jpg
 ┃ ┃ ┃ ┣ user2.jpg
 ┃ ┃ ┃ ┗ user3.jpg
 ┃ ┃ ┣ profile
 ┃ ┃ ┃ ┣ google-analytics.svg
 ┃ ┃ ┃ ┣ html.jpeg
 ┃ ┃ ┃ ┣ IntroCSlogo.jpeg
 ┃ ┃ ┃ ┣ java.jpg
 ┃ ┃ ┃ ┗ oop.jpg
 ┃ ┃ ┣ apple-icon.png
 ┃ ┃ ┣ bg.jpg
 ┃ ┃ ┣ city-profile.jpg
 ┃ ┃ ┣ DataAnalytics.jpg
 ┃ ┃ ┣ GoogleAnalytics.png
 ┃ ┃ ┣ hero2.jpg
 ┃ ┃ ┣ profile_city.jpg
 ┃ ┃ ┣ python.jpeg
 ┃ ┃ ┗ SEO.jpg
 ┃ ┣ scss
 ┃ ┃ ┣ material-kit
 ┃ ┃ ┃ ┣ mixins
 ┃ ┃ ┃ ┃ ┣ _transparency.scss
 ┃ ┃ ┃ ┃ ┗ _vendor-prefixes.scss
 ┃ ┃ ┃ ┣ plugins
 ┃ ┃ ┃ ┃ ┣ _perfect-scrollbar.scss
 ┃ ┃ ┃ ┃ ┗ _plugin-nouislider.scss
 ┃ ┃ ┃ ┣ _alerts.scss
 ┃ ┃ ┃ ┣ _autocomplete.scss
 ┃ ┃ ┃ ┣ _badges.scss
 ┃ ┃ ┃ ┣ _buttons.scss
 ┃ ┃ ┃ ┣ _cards.scss
 ┃ ┃ ┃ ┣ _carousel.scss
 ┃ ┃ ┃ ┣ _checkboxes.scss
 ┃ ┃ ┃ ┣ _colors.scss
 ┃ ┃ ┃ ┣ _datepicker.scss
 ┃ ┃ ┃ ┣ _dialogs.scss
 ┃ ┃ ┃ ┣ _dropdown.scss
 ┃ ┃ ┃ ┣ _example-pages.scss
 ┃ ┃ ┃ ┣ _footers.scss
 ┃ ┃ ┃ ┣ _headers.scss
 ┃ ┃ ┃ ┣ _images.scss
 ┃ ┃ ┃ ┣ _info-areas.scss
 ┃ ┃ ┃ ┣ _inputs.scss
 ┃ ┃ ┃ ┣ _layout.scss
 ┃ ┃ ┃ ┣ _misc.scss
 ┃ ┃ ┃ ┣ _mixins.scss
 ┃ ┃ ┃ ┣ _navbars.scss
 ┃ ┃ ┃ ┣ _pagination.scss
 ┃ ┃ ┃ ┣ _pills.scss
 ┃ ┃ ┃ ┣ _popups.scss
 ┃ ┃ ┃ ┣ _progress.scss
 ┃ ┃ ┃ ┣ _radios.scss
 ┃ ┃ ┃ ┣ _responsive.scss
 ┃ ┃ ┃ ┣ _shadows.scss
 ┃ ┃ ┃ ┣ _tables.scss
 ┃ ┃ ┃ ┣ _tabs.scss
 ┃ ┃ ┃ ┣ _togglebutton.scss
 ┃ ┃ ┃ ┣ _typography.scss
 ┃ ┃ ┃ ┗ _variables.scss
 ┃ ┃ ┗ material-kit.scss
 ┃ ┗ demo.css
 ┣ components
 ┃ ┣ cards
 ┃ ┃ ┗ LoginCard.vue
 ┃ ┣ Dropdown.vue
 ┃ ┣ index.js
 ┃ ┣ Modal.vue
 ┃ ┣ Pagination.vue
 ┃ ┗ Parallax.vue
 ┣ layout
 ┃ ┣ AccountsNavbar.vue
 ┃ ┣ MainNavbar.vue
 ┃ ┣ MobileMenu.vue
 ┃ ┗ QuizLoginHeader.vue
 ┣ plugins
 ┃ ┣ globalComponents.js
 ┃ ┣ globalDirectives.js
 ┃ ┣ globalMixins.js
 ┃ ┗ material-kit.js
 ┣ views
 ┃ ┣ IndustryPie.js
 ┃ ┣ Landing.vue
 ┃ ┣ LineChart.js
 ┃ ┣ LineChart.vue
 ┃ ┣ LoginPage.vue
 ┃ ┣ Profile.vue
 ┃ ┣ ProfilePage.vue
 ┃ ┣ QuizCourse.vue
 ┃ ┣ QuizIndustry.vue
 ┃ ┣ QuizLifestage.vue
 ┃ ┣ QuizSkillset.vue
 ┃ ┣ RadarSkillset.js
 ┃ ┣ RecommendedPage.vue
 ┃ ┗ SignUp.vue
 ┣ App.vue
 ┣ CombinedChart.js
 ┣ EmployChart.js
 ┣ firebase.js
 ┣ GraduateBar.js
 ┣ main.js
 ┣ router.js
 ┣ store.js
 ┗ VaccancyChart.js
 ```

## Questions or Feedback
If you have questions or have any feedback, do [contact us](mailto:joblessgowhere@gmail.com).

## Contributors
- Cai Shuhang
- Ashley Ho
- Callie Cheong
- Sean Lee
