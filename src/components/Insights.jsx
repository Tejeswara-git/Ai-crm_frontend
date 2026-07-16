
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

function Insights(){

    const [text,setText]=useState("");
const latest = useSelector(
    state => state.interaction?.latest
);

async function generate() {

    if (!latest) {
        alert("Please log an interaction first.");
        return;
    }

    try {

        const res = await axios.get(
            "http://127.0.0.1:8000/insights",
            {
                params: {
                    summary: latest.summary,
                },
            }
        );

        setText(res.data.insight);

    } catch (err) {

        console.log(err);

        alert("Backend Error");

    }
}
    return(

        <div className="card">

            <h2>AI Insights</h2>

            <button onClick={generate}>

                Generate Insights

            </button>

            <p>{text}</p>

        </div>

    )

}

export default Insights;