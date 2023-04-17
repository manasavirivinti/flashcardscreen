# Flashcard-Screen

# Title Flashcard Screen

Creating a flashcard screen which contains a list of cards and user can also add new cards.


## Techstack

ReactJS,CSS,NodeJS,Express,MySQL,Sequelize

## Features

-User can perform the following operations
-Add a new card : A new flash card containing details such as purpose name, purpose details can be seen on the flashcard screen
-Edit the card : After adding a particular card user can edit the card by clicking on : symbol on the card
-Delete the card : If the user want's to delete the card then he can do it by choose the delete option by clicking : on the right corner of the card

# Instructions to RUN
## Getting started with Create React App

This project was bootstrapped with [Create React App] (https://github.com/facebook/create-react-app).

## Steps to be followed & Available Scripts
Open the project folder in vscode.\
In the project directory, open the new terminal and split it into two.\
1.In second terminal install json server
### `npm install json-server`
-now run the below command to create a port
### `json-server --watch dbb.json --port=5000`

Local api is created and we already have dbb.json with a component called cards

2.In first terminal run the react app with below command

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# User interface
On starting the node package manager (npm start) your browser will automatically be opened and [http://localhost:3000](http://localhost:3000) page will be loaded which has the following components.\
## Cards
Contains list of cards added.\
We can perform the following operations.\
-Add a new card
-Delete a card(if user required)
## Newcard
-Conatins a form where we input our new card along with the details and submit it by clicking it on 'submit' button
