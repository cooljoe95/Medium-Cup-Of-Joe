export const fetchStories = (success, error) => {
  $.ajax({
    url: "api/stories",
    method: "GET",
    dataType: "json",
    data: {user: window.currentUser ? window.currentUser.id : 0},
    success,
    error
  });
};

export const fetchStory = (id, success, error) => {
  $.ajax({
    url: `api/stories/${id}`,
    method: "GET",
    dataType: "json",
    success,
    error
  });
};

export const createStory = (story, success, error) => {
  $.ajax({
    url: `api/stories`,
    method: "POST",
    dataType: "json",
    data: story,
    success
  });
};
