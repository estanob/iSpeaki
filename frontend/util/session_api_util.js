export const login = user => {
  debugger
  return (
    $.ajax({
      method: 'POST',
      url: '/api/session',
      data: { user }
    })
  )
};

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);

export const signup = user => {
  debugger
  return (
    $.ajax({
      method: 'POST',
      url: '/api/users',
      data: { user },
    })
  )
};