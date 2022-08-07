import {useState, useEffect} from 'react';
const API_KEY = process.env.REACT_APP_API_KEY

const CONTEXT_KEY = "e54dee7b4cbc31bfc";

const UseGoogleSearch = (term) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
                .then(response => response.json())
                .then(result => {
                    setData(result)
                })
        }

        fetchData().then(res => {
            console.log(res);
        }).catch(error => {
            console.log(error);
        });
    }, [term])

    return {data};
};

export default UseGoogleSearch;
