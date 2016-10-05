# Medium Cup Of Joe
[Link](https://medium-cup-of-joe.herokuapp.com/) to app.
## Minimum Viable Product
MediumCupOfJoe is a web application inspired by Medium built using Ruby on Rails and React/Redux. By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

- [x] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Stories
- [ ] Commenting on stories
- [ ] Allow users to follow writers and getting a feed
- [ ] Allow users to like articles 
- [ ] Rich Text Editing
- [ ] Infinite Scroll
- [ ] Production README sample

## Design Documentation
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Redux Structure][redux-structure]
* [Sample State][sample-state]

[wireframes]: wireframes/
[components]: component-heirarchy.md
[redux-structure]: redux-structure.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Implementation Timeline
### Phase 1: Backend Authentication and Front End User Authentication (2 Days)
**Objective**: Create users and impolent authentication to Medium Cup of Joe
- [x] New Rails project
- [x] **`User`** model/migration
- [x] Back end authentication (session/password)
- [x] **`StaticPages`** controller and root view
- [ ] Webpack & react/redux modules
- [ ] **`APIUtil`** to interact with the API
- [ ] Redux cycle for frontend authentication
- [ ] User signup/signin components
- [ ] Blank landing component after signup/signin
- [ ] Style signup/signin components
- [ ] Bonus: Auth for Facebook/Twitter/Google Users
- [x] Seed users

### Phase 2: Stories Model, API, and components (3 Days)
**Objective**: Create a way to create a story and see a feed of stories.
- [ ] Create Header
- [ ] **`Story`** model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for notes (**`StoryController`**)
- [ ] JBuilder views for stories
  * Story components and respective Redux loops
    - [ ] **`StoryIndex`** (List of the stories)
    - [ ] **`StoryIndexItem`** (Individual story)
    - [ ] **`StoryForm`** (Create a new story)
- [ ] Autosave stories feature
- [ ] Style story components
- [ ] Seed stories

### Phase 3: Commenting (1 Day)
**Objective**: Create a way to comment on an article and insert to the bottom of the story container
- [ ] Utilize the response_id of the **`Story`** model to simulate comments
- [ ] Seed comments
- [ ] Comments form
- [ ] Style the comments
- [ ] Insert the footer in the bottom of the Story container
  * Display the Similar Stories

### Phase 4: Follow Users and Like Articles (1 Day)
**Objective**: Follow and like stories and have them display 
- [ ] Create **`Follow`** model
- [ ] Create **`Like`** model
- [ ] Seed followers
- [ ] Seed Likes between users and articles/comments
- [ ] Style and prettify the liking and following


### Phase 5: Rich Text Editing (1 Days)
**Objective**: Allow the user to style their own work
- [ ] Integrate react-quill (based on Quill.js).
- [ ] Rails helpers to sanitize HTML before rendering.
- [ ] Style Quill components. 
- [ ] Add Quill styling to seeded stories

### Phase 6: Infinite Scrolling (1 Day)
**Objective**: Add infinite scroll to StoryIndex
- [ ] Paginate Story Index API to send 20 results at a time
- [ ] Append next set of results when user scrolls and is near bottom
- [ ] Style scroll components and transitions
- [ ] Ensure seed data demonstrates infinite scroll
