import { useEffect } from "react"

export default function Message() {

    const Fetch = async ()=> {
        const response = await fetch("http://127.0.0.1:8000/api/dashboard", {
            method: "GET", 
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data);
        }
    }

    useEffect(()=>{
        Fetch()
    }, []);

    return (
        <div>
            Message
        </div>
    )
}