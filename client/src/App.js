import axios from 'axios'

export default {

    getUsers() {
        return axios.get('http://localhost:3000/users');
    },

    data: {
        users: [
            { username: 'mark.taylor@gmail.com' },
            { username: 'kenneth.davis@dabblebox.com' },
        ]
    }
}