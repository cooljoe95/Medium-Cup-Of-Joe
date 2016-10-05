export const signup = (user, success, error) => {
  $.ajax({
    url: "/api/users",
    method: "POST",
    dataType: "json",
    data: user,
    success,
    error
  });
};

export const login = (user, success, error) => {
  $.ajax({
    url: "/api/session",
    method: "POST",
    dataType: "json",
    data: user,
    success,
    error
  });
};

export const logout = (success, error) => {
  $.ajax({
    url: "/api/session",
    method: "DELETE",
    dataType: "json",
    success,
    error
  });
};
