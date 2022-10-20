import { useHttp } from "../hooks/http.hook";

const useApiService = () => {

    const { request, process } = useHttp();
    const _apiBase = 'https://facedogapi.iliagurevich.com/';

    const getAllUsers = async () => {
        const res = await request(`${_apiBase}users`)
        return res;
    }

    const registration = async (body) => {
        const method = 'POST'
        const res = await request(`${_apiBase}authentication/register`, method, JSON.stringify(body))
        return res;
    }

    const login = async (body) => {
        const method = 'POST'
        const res = await request(`${_apiBase}authentication/login`, method, JSON.stringify(body))
        return res;
    }

    const setAccountInfo = async (body) => {
        const method = 'PATCH';
        const res = await request(`${_apiBase}users/setAccountInfo`, method, JSON.stringify(body));
        return res;
    }

    const getAccountInfo = async () => {
        const method = 'GET';
        const res = await request(`${_apiBase}users/getAccountInfo`, method);
        return res;
    }

    const getVerificationCod = async (body) => {
        const method = 'POST';
        const res = await request(`${_apiBase}sms/initiate-verification`, method, JSON.stringify(body))
        return res;
    }

    const setVerificationCod = async (body) => {
        const method = 'POST';
        const res = await request(`${_apiBase}sms/check-verification-code`, method, JSON.stringify(body))
        return res;
    }

    return {getAllUsers,
            registration,
            login,
            setAccountInfo,
            getAccountInfo,
            getVerificationCod,
            setVerificationCod,
            process};

}

export default useApiService;