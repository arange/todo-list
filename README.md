# Code Challenge: Todo List
This code challenge is to test your basic understanding of how React works. It also tests your knowledge about state management, component structure, and event handling.

## Code Structure
The code structure is very simple, we have an `src/App.js` file which is the main app, then all the components it use are sitting under `src/components` folder.

## Start the App
As a standard Create-React-App, run `npm start` to start the application and go to http://localhost:3000 to view it.

## Challenges
### Add a new task
**When** user enters a task into the `Add a new task` input field

**And** User clicks on the `Add` button

**Then** The newly added task should appear on the todo list

### Remove an added task
**When** There are task(s) added on the todo list

**And** User clicks on the `Remove` button next to any one of the task

**Then** That task should be removed from the todo list

### Strike through a completed task
**When** There are task(s) added on the todo list

**And** User clicks on the `Complete` button next to any one of the task

**Then** That task should appear as strike-through but stays on the todo list

(Bonus point):
**Then** That task should be moved to the bottom of the list