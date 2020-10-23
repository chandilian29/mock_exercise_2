import { v4 as uuidv4 } from 'uuid';

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
    const newUser = {id, ...data};
    users = {...users, [id]: newUser}; //mock services should manipulate the mock db ("users" object)
    return newUser;
}