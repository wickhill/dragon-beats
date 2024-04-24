export const GET_USER="GET_USER"
export const USER_ERROR="USER_ERROR"
export const USER_IS_LOADING="USER_IS_LOADING"

export const loadingAction = () =>({
    type: USER_IS_LOADING
})
const loginAction = (user) => ({
    type: GET_USER, payload: user
})
const errorAction = (error) => ({
    type: USER_ERROR, payload: error
})
export const login = (formData) => async (dispatch) => {
    const res = await fetch ("http://localhost:3000/user/signin", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    const data = await res.json();

    if(!res.ok) {
        dispatch (errorAction(data)) 
        return 
    } 
    dispatch (loginAction(data))
    return true
} 
export const getSpotifyPage = () => async (dispatch) => {
    const res = await fetch ("http://localhost:3000/user/spotify-login")
    const data = await res.json()
    if(res.ok) {
        window.location.href = data.url; // Redirect using JavaScript
      }
    callback()
    return true
}

export const signup = (formData) => async (dispatch) => {
    const res = await fetch ("http://localhost:3000/user/signup", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    // const data = await res.json();

    if(!res.ok) {
        dispatch (errorAction(data)) 
        return 
    } 
    dispatch (loginAction(data))
    return true
} 


export const callback = () => async (dispatch) => {
    const res = await fetch ("http://localhost:3000/user/callback", {
    method: "GET",
    headers: {
        'Content-Type': 'application/json'
      },
    })
    // const data = await res.json();
    const cookies = document.cookie.split('; ');
    const cookieObject = {};
  
    cookies.forEach(cookie => {
      const [name, value] = cookie.split('=');
      cookieObject[name] = value;
    });
    console.log(cookieObject)
    // if(!res.ok) {
    //     dispatch (errorAction(data)) 
    //     return 
    // } 
    // dispatch (loginAction(data))
    return true

} 

