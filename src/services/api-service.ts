class ApiService {
    _apiBase = 'https://dogsitter-backend-k7ee4.ondigitalocean.app';

    registration =  async (url, method = 'POST', body = null, headers = { 'Content-Type': 'application/json' }) => {
        let res = await fetch(url, { method, body, headers });

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

}

export default ApiService;