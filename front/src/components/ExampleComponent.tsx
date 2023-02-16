import axios from "axios";
import { useState, FC } from "react";

export const ExampleComponent: FC = () => {
    const [message, setMessage] = useState<string>("");
    axios.get("/api/example").then((res) => {
        setMessage(res.data.message);
    });
    return <p>{message}</p>;
};
