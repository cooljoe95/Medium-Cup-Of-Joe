export const REQUEST_STORIES = "REQUEST_STORIES";
export const RECEIVE_STORIES = "RECEIVE_STORIES";
export const REQUEST_STORY = "REQUEST_STORY";


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
  return {
    type: REQUEST_STORY,
    story
  };
};
