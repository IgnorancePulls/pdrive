import {ORDER_FIELD_KEY} from '../constatns/custom.fields';

export const indexUsers = (users) => users
    .map(defineUserIndex)
    .sort(sortUsersByOrderField);

const defineUserIndex = (user, i) => {
    if(user[ORDER_FIELD_KEY] === null && user.hasOwnProperty(ORDER_FIELD_KEY)) {
        return Object.assign({}, user, {
            [ORDER_FIELD_KEY]: i
        });
    }
    return user;
};

const sortUsersByOrderField = (a, b) => a[ORDER_FIELD_KEY] - b[ORDER_FIELD_KEY];

export const generateSortableIndex = (users, newIndex) => {
    let prevIndex = 0;
    let nextIndex = newIndex + 1;
    const prev = users[newIndex - 1];
    const next = users[newIndex + 1];

    if(!prev && !next) {
        return 0;
    }

    if (next && next[ORDER_FIELD_KEY]) {
        nextIndex = next[ORDER_FIELD_KEY];
    }

    if (prev && prev[ORDER_FIELD_KEY]) {
        prevIndex = prev[ORDER_FIELD_KEY];
    }

    return generateUniqueID(prevIndex, nextIndex);
};

const generateUniqueID = (max, min) => {
    if (max === min || min > max) return Math.random();
    return Math.random() * (max - min) + min;
};

