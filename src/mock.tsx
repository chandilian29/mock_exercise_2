import {v4 as uuidv4} from 'uuid';

const idOne = uuidv4();
const idTwo = uuidv4();

//mock db
let users = {
    [idOne]: {
        id: idOne,
        firstName: 'Scooby',
        lastName: 'Doo',
        role: 'student',
        enrollDate: Date.now()
    },
    [idTwo]: {
        id: idTwo,
        firstName: 'Shaggy',
        lastName: 'Rogers',
        role: 'student',
        enrollDate: Date.now()
    }
}

export const getUsers = () => {
    return Object.values(users);
}

export const createUser = (data: any) => {
    //we dont care about validation
    const id = uuidv4();
    const newUser = {
        id: id,
        firstName: data.firstName,
        lastName: data.lastName,
        role: data.role,
        enrollDate: data.enrollDate
    };
    users = {...users, [id]: newUser}; //mock services should manipulate the mock db ("users" object)
    return newUser;
}

export const updateUserValue = (data: any) => {
    //we dont care about validation
    getUsers().forEach(user => {
        if (user.id === data.id) {
            user.firstName = data.firstName;
            user.lastName = data.lastName;
            user.role = data.role;
            user.enrollDate = data.enrollDate;
        }
    })
    //mock services should manipulate the mock db ("users" object)
    return users;
}

export const deleteUserValue = (data: any) => {
    //we dont care about validation
    let tempUser= {};
    getUsers().forEach(user => {
        if (user.id !== data.id) {
            tempUser = {...tempUser, [user.id]:user};
        }
    })
    users = tempUser;
    //mock services should manipulate the mock db ("users" object)
    return users;
}
