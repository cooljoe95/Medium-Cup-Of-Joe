export const REQUEST_STORIES = "REQUEST_STORIES";
export const RECEIVE_STORIES = "RECEIVE_STORIES";
export const REQUEST_STORY = "REQUEST_STORY";
export const RECEIVE_STORY = "RECEIVE_STORY";


export const requestStories = () => {
  return {
    type: REQUEST_STORIES
  };
};

export const receiveStories = (stories) => {
  return {
    type: RECEIVE_STORIES,
    stories
  };
};

export const requestStory = (id) => {
  debugger
  return {
    type: REQUEST_STORY,
    id
  };
};

export const receiveStory = story => {
  return {
    type: RECEIVE_STORY,
    story
  };
};
