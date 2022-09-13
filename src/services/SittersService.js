class SittersService {
    _apiBase = 'http://localhost:3001/sitters';


    getResource = async (url, method = 'GET', body = null, headers = { 'Content-Type': 'application/json' }) => {
        let res = await fetch(url, { method, body, headers });

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }


    getAllSitters = async () => {
        const res = await this.getResource(this._apiBase);
        return res;
    }
}

export default SittersService;