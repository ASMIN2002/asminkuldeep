import { useEffect } from "react";
import ChatWindow from "../components/ChatWindow";
import "../pagesstyle/AI.css";
export default function AI() {
    useEffect(() => {
        document.body.classList.add("ai-active");
        return () => document.body.classList.remove("ai-active");
    }, []);
    return (
        <section className="ai-page">
            <div className="container">
                <div className="ai-wrapper">
                    <ChatWindow />
                </div>
            </div>
        </section>
    );
}