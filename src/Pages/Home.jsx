import { useState } from "react";
import FormTab from "../components/FormTab";
import ChatTab from "../components/ChatTab";
import "./Home.css";
import History from "../components/History";

function Home() {
  const [tab, setTab] = useState("form");

  return (
    <div className="container">
      <h1>AI CRM</h1>
      <p>Healthcare Professional Module</p>

      <div className="tabs">
        <button
          className={tab === "form" ? "active" : ""}
          onClick={() => setTab("form")}
        >
          Structured Form
        </button>

        <button
          className={tab === "chat" ? "active" : ""}
          onClick={() => setTab("chat")}
        >
          AI Chat
        </button>
        
      </div>

      {tab === "form" ? <FormTab /> : <ChatTab />}
      <History/>
    </div>
  );
}

export default Home;