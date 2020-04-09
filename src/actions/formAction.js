export const PPPFORM_POST = "PPPFORM_POST";
import axios from 'axios';



export const postForm = () => {
  return (dispatch) => {
      console.log('actions')
      axios.post('APIURL')           // API post url to be provided
          .then(res => res.json())
    .then(form => {
        dispatch({
            type: PPPFORM_POST,
            payload: form
        })
    })
      
  }
}



