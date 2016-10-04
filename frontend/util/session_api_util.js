export const signup = (user, success, errors) => ({
  url: "/api/users",
  method: "POST",
  dataType: "json",
  data: { user },
  success,
  errors
});

export const login = (user, success, error) => ({
  url: "/api/session",
  method: "POST",
  dataType: "json",
  data: { user },
  success,
  errors
});

export const logout = (success, error) => ({
  url: "/api/users",
  method: "DELETE",
  dataType: "json",
  success,
  errors
});
