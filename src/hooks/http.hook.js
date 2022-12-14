import { useState, useCallback } from 'react';

export const useHttp = () => {
    const [process, setProcesss] = useState('waiting');


    const request = useCallback(
        async (url, method = 'GET', body = null, headers = {
            'Content-Type': 'application/json',
        },
        ) => {
            setProcesss('loading');
            try {
                const response = await fetch(url, {
                    method, body, headers, credentials: 'include'
                });
                if (!response.ok) {
                    throw new Error(`Could not fetch ${url}, status: ${response.status}`);
                }
                const data = await response.json();

                return data;
            } catch (e) {


                setProcesss('error');
                throw e;
            }
        }, [])

    const clearError = useCallback(() => {

        setProcesss('loading')
    }, [])

    return { request, clearError, process, setProcesss }
}

export default useHttp;