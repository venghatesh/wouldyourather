"Would You Rather?” Is a web app project built on react , redux  that lets a user play the “Would You Rather?” game. The game goes like this: A user is asked a question in the form: “Would you rather [option A] or [option B] ?”. User has to choose one of the options. Answering "neither" or "both" is against the rules.

Technology Stack
* [React] (https://reactjs.org/)
* [Redux] (https://redux.js.org/)
* [React Router] (https://github.com/ReactTraining/react-router)
* [ReactStrap] https://reactstrap.github.io/components/alerts/
* [Material UI](https://material-ui.com/)

## Setting up the environment
To get started right away:
* Clone the repo using git clone
* Install project dependencies with `npm install`
* Start the development server with `npm start`
* Open the browser at `localhost:3000`

You might get a error
npm WARN ajv-keywords@3.2.0 requires a peer of ajv@^6.0.0 but none is installed. You must install peer dependencies yourself.

New users can access the application by using the signup link in the login page. 

In this case , please install the dependency manually

npm install ajv@^6.0.0
Issue explained in the following thread.
https://github.com/epoberezkin/ajv/issues/708#issuecomment-377696889

App Functionality

At the start up a  login box that appears at the home page (/) of the application. The user can select a name from the list of existing users.  Existing users are read from the Data.js file . Users can also create their own accounts by using the sign up link provided as part of the login screen.
Once the user logs in, the home page is  shown. Also user session related information (who has logged in ) is shown on the page. If someone tries to navigate anywhere by entering the address in the address bar, the user is asked to sign in and then the requested page is shown. The application allows the user to log out and log back in. It also provides the user to switch between different users by using the Navigation menu provided on the top left hand side.
Once the user logs in, the user can toggle between his/her answered and unanswered polls on the home page, which is located at the root. The polls in both categories are arranged from the most recently created (top) to the least recently created (bottom). The unanswered questions are shown by default, and the name of the logged in user is visible on the top right hand corner of the page.
Each polling question should link to the details of that poll. The details of each poll is available at questions/:question_id.
When a poll is clicked on the home page, the following is shown:
1. Text “Would You Rather”;
2. Avatar of the user who posted the polling question; and
3. Two options. (Option 1 and Option 2)
For answered polls, each of the two options contains the following:
1. Text of the option;
2. Number of people who voted for that option; and
3. Percentage of people who voted for that option.
The option selected by the logged-in user is clearly marked and shown to the user.
Since we want to make sure our application creates a good user experience, the application should show a 404 page if the user is trying to access a poll that does not exist.  The application display a navigation bar so that the user can easily navigate anywhere in the application.
Upon voting in a poll, all of the information of an answered poll is displayed. The user’s response are recorded and clearly visible on the poll details page. Users can only vote once per poll; they are not allowed to change their answer after they’ve voted . After voting, When the user comes back to the home page, the polling question appears in the “Answered” column.

It would be no fun to vote in polls if we couldn’t post our own questions! The form for posting new polling questions should be available at the /add route. The application should show the text “Would You Rather” and have a form for creating two options. Upon submitting the form, a new poll should be created, the user should be taken to the home page, and the new polling question should appear in the correct category on the home page.

The application has a leaderboard that’s available at the /leaderboard route. Each entry on the leaderboard contains the following:
1. User’s name;
2. User’s picture;
3. Number of questions the user asked; and
4. Number of questions the user answered
Users are ordered in descending order based on the sum of the number of questions they’ve asked and the number of questions they’ve answered. The more questions they ask and answer, the higher up they move up the chain.

The user would be able to navigate to the leaderboard, to a specific question, and to the form that allows the user to create a new poll both from within the app and by typing in the address into the address bar. To make sure that we’re showing the data that is relevant to the user, the application requires the user to be signed in order to access those pages.

In case the user navigates to a URL which is not available, then a page not found error is shown to the user .

App Architecture
The application state is  managed by Redux.
Application’s store should be the source of truth, and components reads the necessary state from the store instead of having their own versions of the same state.Updates are  triggered by dispatching action creators.
