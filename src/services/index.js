import axios from 'axios';
// const axios = require('axios');

const BASE_URL = 'https://flenemailsender.herokuapp.com';

async function sendMail(mail) {
    const res = await axios.post(`${BASE_URL}/api/form`, mail);
    return res.data;
}


// const mail = {
//     name: "Test",
//     email: "ademfat21@gmail.com",
//     message: "Test",
// }

// sendMail(mail).then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// })

export { sendMail }