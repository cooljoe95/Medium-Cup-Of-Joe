```js
{
  currentUser: {
    id: 1,
    username: "cooljoe95",
    image: "https://www.fakewebsite.com"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createStory: {errors: ["body can't be blank"]}
  },
  stories: {
    1: {
      title: "First Story",
      body: "is fun to write",
      author_id: 1,
      tags: {
        1: {
          id: 1
          name: "Technology"
        }
      },
      response_to_id: null (# if a response to a previous story)
    }
  },
  followers: {
    1: {
      follower_id: 1,
      followed_id: 5
    }
  },
  likes: {
    1: {
      liker_id: 1,
      story_id: 1
    }
  },
  tagFilters: [1, 7, 14] // Used to track selected Tags for filtering of notes
}
```
