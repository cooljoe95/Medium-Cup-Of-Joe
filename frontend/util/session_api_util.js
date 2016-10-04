export const signup = (user, success, errors) => ($.ajax({
  url: "/api/users",
  method: "POST",
  dataType: "json",
  data: { user },
  success,
  errors
}));

export const login = (user, success, error) => ($.ajax({
  url: "/api/session",
  method: "POST",
  dataType: "json",
  data: { user },
  success,
  errors
}));

export const logout = (success, error) => ($.ajax({
  url: "/api/users",
  method: "DELETE",
  dataType: "json",
  success,
  errors
}));
