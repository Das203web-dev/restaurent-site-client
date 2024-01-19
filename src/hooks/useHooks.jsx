import { useEffect, useState } from "react";

const useHooks = () => {
    const [popularItems, setMenu] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch(`http://localhost:5000/menu`)
            .then(res => res.json())
            .then(data => {
                setMenu(data)
                setLoading(false)
            })
    }, [])
    return [popularItems, loading]
}
export default useHooks;