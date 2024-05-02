// export keyword is using to access this API_KEY in any components.
export const API_Key = 'AIzaSyD5RmPkACYnYn-BOWA8xsNSBnhg9BvHnKI';

export const value_converter = (value) => {
    if (value >= 1000000) {
        return Math.floor(value / 1000000) + "M";

    }
    else if (value >= 1000) {
        return Math.floor(value / 1000000) + "K";
    }

    else{
        return value;
    }
}