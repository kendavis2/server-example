exports.db = function () {

    const data = {
        users: [{
            username: "mark.taylor@gmail.com",
            first: "Mark",
            last: "Taylor"
        },{
            username: "kenneth.davis@dabblebox.com",
            first: "Kenneth",
            last: "Davis"
        }]
    }

    return {
        users: {
            list: () => {
                return data.users;
            },
            find: (username) => {
                return data.users.filter((u) => u.username === username);
            },
            upsert: (user) => {
                let userIndex = data.users.findIndex((u) => u.username === user.username);
    
                if (data.users[userIndex]) {
                    data.users.splice(userIndex, 1);
                }
                
                data.users.push(user);
            },
            delete: (username) => {
                let userIndex = data.users.findIndex((u) => u.username === username);
    
                if (data.users[userIndex]) {
                    data.users.splice(userIndex, 1);
                }
            }
        }
    }
}