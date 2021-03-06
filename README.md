# FriendFinder

## Live Link
- https://lit-forest-18337.herokuapp.com/

## Description on how to use the app
- Take the survey.
- Get matched based on answers.

## Requirements
- Your survey should have 10 questions of your choosing. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.
- Your server.js file should require the basic npm packages we've used in class: express, body-parser and path.
- Your htmlRoutes.js file should include two routes:
- A GET Route to /survey which should display the survey page.
- A default, catch-all route that leads to home.html which displays the home page.
- Your apiRoutes.js file should contain two routes:
- A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
- A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

## Technologies Used

- Express.js
- Node.js

## Code Explaination