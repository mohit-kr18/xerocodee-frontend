import {axios} from '.'


export const savePrefs = async (prefs) => {
    const {data} = await axios.post('/api/prefs/addPref', prefs);
    return data;
}

export const getPrefs = async (userId) => {
    const { data } = await axios.get(`/api/prefs/getPref/${userId}`);
    return data;
}