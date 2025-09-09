const URL_BASE = process.env.REACT_APP_URL_BASE

const fetchData = async (url) => {
    const abortCtrl = new AbortController();
    try {
        console.info({ URL_BASE, url });
        const res = await fetch(`${URL_BASE}${url}`, { signal: abortCtrl.signal })

        if (!res.ok) {
            throw new Error(res.body);
        }

        const json = await res.json();
        console.log(json);
    } catch (err) {
        throw err;
    }
}

export default fetchData