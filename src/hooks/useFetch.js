import { useState, useEffect } from "react";

function useFetch(apiUrl) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState({ products: [] }); 

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(apiUrl);
                const result = await res.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [apiUrl]);

    return { loading, error, data };
}

export default useFetch;
