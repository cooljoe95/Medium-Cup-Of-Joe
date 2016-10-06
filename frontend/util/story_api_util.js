export const fetchStories = (success, error) => {
  $.ajax({
    url: "api/stories",
    method: "GET",
    dataType: "json",
    success,
    error
  });
};
