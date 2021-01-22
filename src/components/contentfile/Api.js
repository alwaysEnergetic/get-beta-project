import Axios from "axios";

export const getContentFile = (token, id) => 
    Axios.get (       
        `http://localhost:5000/apiv1/vendors/contents/contentfile/${id}/findFile`,
        {
            headers: { "x-auth-token": token }
        }
    ).then(res => res.data)
        .catch(err => console.log(err))

export const deleteContentFile = (token, confile_id) => 
Axios.delete (       
    `http://localhost:5000/apiv1/vendors/contents/contentfile/${confile_id}`,
    {
        headers: { "x-auth-token": token }
    }
).then(res => res.data)
    .catch(err => console.log(err))