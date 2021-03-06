import { Post } from '../helpers/helpers';

export const login = (data, props) => {
    let url = '/auth/signin';
    return Post(data, url).then(response => {
        const { data } = response;
        props.display_message({
            message: data.message,
            color: "success",
            visible: true
        });
        return data.token;
    }).catch(error => {
        const { data } = error.response;
        props.display_message({
            message: data.error,
            color: "danger",
            visible: true
        })
        return false
    });
}

export const signup = (data, props) => {
    let url = '/auth/signup';
    return Post(data, url).then(response => {
        const { data } = response;
        props.display_message({
            message: data.message + 'Please login to access your account',
            color: "success",
            visible: true
        });
        props.history.push("/signin")
        return data
    }).catch(error => {
        const { data } = error.response;
        props.display_message({
            message: data.error,
            color: "danger",
            visible: true
        })
    })
}
