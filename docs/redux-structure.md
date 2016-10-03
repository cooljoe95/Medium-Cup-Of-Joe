# Redux Structure

The application's state is organized by data type. Under each data type, there
may be sub-states. Each action is listed with the sequence of events that
results from its invocation, ending with the API or a reducer. Subscribed
components, i.e. containers, are listed at the end.

## Auth Cycles

### Session API Request Actions

* `signUp`
  0. invoked from `SignupForm` `onSubmit`
  0. `POST /api/users` is called.
  0. `receiveCurrentUser` is set as the success callback.
* `logIn`
  0. invoked from `Navbar` `onSubmit`
  0. `POST /api/session` is called.
  0. `receiveCurrentUser` is set as the callback.
* `logOut`
  0. invoked from `Navbar` `onClick`
  0. `DELETE /api/session` is called.
  0. `removeCurrentUser` is set as the success callback.
* `fetchCurrentUser`
  0. invoked from `App` in `didMount`
  0. `GET /api/session` is called.
  0. `receiveCurrentUser` is set as the success callback.

### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` stores `currentUser` in the application's state.
* `removeCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` removes `currentUser` from the application's state.

## Error Cycles

### Error API Response Actions
* `setErrors`
  0. invoked from API callbacks on error for actions that generate POST requests
  0. the `ErrorReducer` stores the `form` in the application's state; `errors` are mapped to their respective forms
* `removeErrors`
  0. invoked from API callbacks on success for actions that generate POST requests
  0. the `ErrorReducer` removes `errors` for a given `form` in the application's state.

## Story Cycles

### Stories API Request Actions

* `fetchAllStories`
  0. invoked from `StoriesIndex` `didMount`/`willReceiveProps`
  0. `GET /api/stories` is called.
  0. `receiveAllStories` is set as the success callback.

* `createStory`
  0. invoked from new story button `onClick`
  0. `POST /api/story` is called.
  0. `receiveSingleStory` is set as the success callback.

* `fetchSingleStory`
  0. invoked from `StoryDetail` `didMount`/`willReceiveProps`
  0. `GET /api/story/:id` is called.
  0. `receiveSingleStory` is set as the success callback.

* `updateStory`
  0. invoked from `StoryForm` `onSubmit`
  0. `POST /api/stories` is called.
  0. `receiveSingleStories` is set as the success callback.

* `destroyStory`
  0. invoked from delete story button `onClick`
  0. `DELETE /api/stories/:id` is called.
  0. `removeStory` is set as the success callback.

### Stories API Response Actions

* `receiveAllStories`
  0. invoked from an API callback
  0. the `StoryReducer` updates `stories` in the application's state.

* `receiveSingleStory`
  0. invoked from an API callback
  0. the `StoryReducer` updates `stories[id]` in the application's state.

* `removeStory`
  0. invoked from an API callback
  0. the `StoryReducer` removes `stories[id]` from the application's state.

## SearchSuggestion Cycles

### SearchSuggestion API Request Actions

* `fetchSearchSuggestions`
  0. invoked from `StorySearchBar` `onChange` when there is text
  0. `GET /api/stories` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the success callback.

### SearchSuggestion API Response Actions

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. The `SearchSuggestion` reducer updates `suggestions` in the application's state.

* `removeSearchSuggestions`
  0. invoked from `StorySearchBar` `onChange` when empty
  0. The `SearchSuggestion` reducer resets `suggestions` in the application's state.

### TagsSuggestion API Request Actions

* `fetchTaggedStories`
  0. invoked from `TagsContainer` `onClick` on any of the tags
  0. `GET /api/tags` is called with the `text` of the tag as the param.
  0. `receiveTaggedStories` is set as the success callback.
  
### TagsSuggestion API Response Actions

* `receiveTaggedStories`
  0. invoked from an API callback.
  0. The `Tags` reducer updates the `stories` available in the application's state
