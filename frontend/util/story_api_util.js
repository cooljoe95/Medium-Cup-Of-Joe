export const fetchBenches = (success, error) => {
  $.ajax({
    url: "api/stories",
    method: "GET",
    dataType: "json",
    successs,
    error
  });
};
