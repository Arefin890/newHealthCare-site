import { useEffect, useState } from "react";

const useLabs = () => {
    const [labs, setLabs] = useState([]);
    useEffect(() => {
        fetch('./lab.json')
            .then(res => res.json())
            .then(data => setLabs(data))
    }, [])
    return [labs];
}

export default useLabs;