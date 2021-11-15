export const GET_USERS = 'GET_USERS';
export const GET_USER_DETAILS = 'GET_USERS_DETAILS';
export const SET_USER_DETAILS = 'SET_USER_DETAILS';
export const SET_USERS = 'SET_USERS';


export const getUsers = () => ({
    type: GET_USERS
});

export const getUserDetails = (ID) => ({
    type: GET_USER_DETAILS,
    ID
});

export const setUserDetails = (user) => ({
    type: SET_USER_DETAILS,
    user
});

export const setUsers = (users) => ({
    type: SET_USERS,
    users
});

const initialState = {
    users: undefined,
    qUser: undefined
};

let user = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            const { users } = action;
            return { ...state, users };
        case SET_USER_DETAILS:
            const { user } = action;
            return { ...state, qUser:user };
        default:
            return state;
    }
};

export default user;