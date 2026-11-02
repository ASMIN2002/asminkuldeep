import { useState, useRef, useEffect } from "react";
import { quickPrompts, getAIResponse } from "../data/aiResponses";
import { FaPaperPlane, FaRobot, FaUser } from "react-icons/fa";
import "../componentsstyle/ChatWindow.css";
export default function ChatWindow() {
    const [messages, setMessages] = useState([
        { from: "ai", text: "Hi! 👋 I'm Asmin's AI assistant. Ask me about his skills, projects, experience, or how to contact him." },
    ]);
    const [input, setInput] = useState("");
    const [typing, setTyping] = useState(false);
    const endRef = useRef(null);
    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, typing]);
    const send = async (text) => {
        const msg = text.trim();
        if (!msg) return;
        setMessages((prev) => [...prev, { from: "user", text: msg }]);
        setInput("");
        setTyping(true);
        const localReply = getAIResponse(msg);
        if (localReply) {
            setTimeout(() => {
                setTyping(false);
                setMessages((prev) => [...prev, { from: "ai", text: localReply }]);
            }, 500);
            return;
        }
        try {
            const res = await fetch("/.netlify/functions/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: msg }),
            });
            const data = await res.json();
            setTyping(false);
            setMessages((prev) => [...prev, { from: "ai", text: data.reply || "I'm not sure about that. Try asking about Asmin's skills, projects, or experience." }]);
        } catch {
            setTyping(false);
            setMessages((prev) => [...prev, { from: "ai", text: "I'm having trouble connecting right now. Try asking about Asmin's skills, projects, or experience." }]);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        send(input);
    };
    return (
        <div className="chat-window">
            <div className="chat-messages">
                {messages.map((m, i) => (
                    <div key={i} className={`chat-msg ${m.from}`}>
                        <div className="chat-avatar">{m.from === "ai" ? <FaRobot /> : <FaUser />}</div>
                        <div className="chat-bubble">{m.text}</div>
                    </div>
                ))}
                {typing && (
                    <div className="chat-msg ai">
                        <div className="chat-avatar"><FaRobot /></div>
                        <div className="chat-bubble typing"><span /><span /><span /></div>
                    </div>
                )}
                <div ref={endRef} />
            </div>
            {messages.length <= 1 && (
                <div className="chat-prompts">
                    {quickPrompts.map((p) => (
                        <button key={p} onClick={() => send(p)}>{p}</button>
                    ))}
                </div>
            )}
            <form className="chat-input-row" onSubmit={handleSubmit}>
                <input type="text" placeholder="Ask something..." value={input} onChange={(e) => setInput(e.target.value)} />
                <button type="submit" aria-label="Send"><FaPaperPlane /></button>
            </form>
        </div>
    );
}