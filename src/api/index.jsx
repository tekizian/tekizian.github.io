import { useAuth0 } from '@auth0/auth0-react';
import { useCallback, useState } from 'react';

const URL_BASE = process.env.REACT_APP_URL_BASE

const useApi = () => {
    const { isAuthenticated, getAccessTokenSilently } = useAuth0();
    const [isPending, setPending] = useState(null);
    const [error, setError] = useState(null);

    const fetchApi = useCallback(async (url, options = {}) => {
        setPending(true);
        setError(null);
        let data = null;

        try {
            if (!isAuthenticated) throw new Error('User is not authenticated');

            const token = await getAccessTokenSilently();
            const headers = {
                ...options.headers,
                Authorization: `Bearer ${token}`,
            };
            const res = await fetch(URL_BASE + url, { ...options, headers });

            if (!res.ok) {
                const errMsg = await res.text();
                throw new Error(`API call failed: ${res.status} ${res.statusText} - ${errMsg}`)
            }
            data = await res.json();
        } catch (err) {
            // TODO: handle expired tokens
            setError(err);
        } finally {
            setPending(false);
        }

        return data;
    }, [isAuthenticated, getAccessTokenSilently]);

    return { fetchApi, isLoading: isPending, error }
}

export default useApi;