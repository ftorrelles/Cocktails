import axios from "axios";
import { useState, useEffect } from "react";

const useGetData = (url, accessData, cocktailName) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get(url)
            .then((resp) => setData(accessData(resp)))
            .catch((error) => console.error(error));
    }, [cocktailName]);
    return {
        data,
    };
};

export default useGetData;
