export const fetchStories = (success, error) => {
  $.ajax({
    url: "api/stories",
    method: "GET",
    dataType: "json",
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
