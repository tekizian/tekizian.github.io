import { useState } from 'react';

const URL_BASE = process.env.REACT_APP_URL_BASE

const useFetch = () => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    const resetState = () => {
        setIsPending(true);
        setError(null);
        setData(null);
    }

    const fetchData = async (url) => {
        resetState();

        try {
            const res = await fetch(`${URL_BASE}${url}`)

            if (!res.ok) {
                throw new Error(res.body);
            }

            const json = await res.json();
            setData(json);
        } catch (err) {
            setError(err);
        } finally {
            setIsPending(false);
        }
    };
    return { data, isPending, error, fetchData }
}

export default useFetch