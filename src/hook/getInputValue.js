import { useState } from "react";

const useInputValue = (initialValue) => {
    const [formdata, setFormdata] = useState(initialValue);
    const handlechange = (e) => {
        let { name, value } = e.target;
        setFormdata({ ...formdata, [name]: value });
    }
}

export default useInputValue