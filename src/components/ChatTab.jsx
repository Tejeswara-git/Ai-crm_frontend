import { useState } from "react";
import axios from "axios";

function ChatTab() {

    const [message, setMessage] = useState("");

    const [answer, setAnswer] = useState("");

    const send = async () => {

        const res = await axios.post(
            "http://127.0.0.1:8000/chat",
            {
                message
            }
        );

        setAnswer(res.data.response);

    };

    return (

        <div>

            <textarea
                rows="8"
                placeholder="Describe your visit..."
                value={message}
                onChange={(e)=>setMessage(e.target.value)}
            />

            <br/><br/>

            <button onClick={send}>
                Ask AI
            </button>

            <br/><br/>

            <pre>{answer}</pre>

        </div>

    );

}

export default ChatTab;