export const createAction = (type, ...argNames) => (...args) => {
        let action = {type};
        argNames.forEach((arg, i) => {
            action[argNames[i]] = args[i]
        });
        return action;
};

export const createAsyncAction = (types, callApi, payload = {}) => {
    return {
        types,
        callApi,
        payload
    }
};