# Medium-Cup-Of-Joe
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
- [ ] **`User`** model/migration
- [ ] Back end authentication (session/password)
- [ ] **`StaticPages`** controller and root view
- [ ] Webpack & react/redux modules
- [ ] **`APIUtil`** to interact with the API
- [ ] Redux cycle for frontend authentication
- [ ] User signup/signin components
- [ ] Blank landing component after signup/signin
- [ ] Style signup/signin components
- [ ] Bonus: Auth for Facebook/Twitter/Google Users
- [ ] Seed users

### Phase 2: Stories Model, API, and components (3 Days)
**Objective**: Create a way to 
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
**Objective**: 
- [ ] 

### Phase 4: Follow Users and Like Articles (1 Day)

### Phase 5: Rich Text Editing (1 Days)

### Phase 6: Infinite Scrolling (1 Day)
