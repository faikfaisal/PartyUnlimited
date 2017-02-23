/**
 * Created by T897060 on 19/02/2017.
 */
export function isLoggedIn() {
  return !!localStorage.getItem('token');
}

export function getLoggedInUserId()
{
  var userId = localStorage.getItem('token');
  return userId;
}
