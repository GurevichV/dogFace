import { useHttp } from "../hooks/http.hook";

const useApiService = () => {

    const { request, process } = useHttp();
    const _apiBase = 'https://dogsitter-backend-k7ee4.ondigitalocean.app/';

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

    return {getAllUsers,
            registration,
            login,
            process};

}

export default useApiService;