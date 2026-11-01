import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { quizData } from "../data/quizData";
import "../pagesstyle/SkillDetails.css";
function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
export default function SkillDetails() {
    const { skillSlug } = useParams();
    const skill = quizData[skillSlug];
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");
    const [examStarted, setExamStarted] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(0);
    useEffect(() => {
        setExamStarted(false);
        setSubmitted(false);
        setAnswers({});
        setName("");
        setNameError("");
    }, [skillSlug]);
    if (!skill) {
        return (
            <section className="skill-details">
                <div className="container">
                    <div className="sd-notfound">
                        <h2>Skill not found</h2>
                        <Link to="/skills" className="sd-back">← Back to Skills</Link>
                    </div>
                </div>
            </section>
        );
    }
    const startExam = () => {
        const trimmed = name.trim();
        if (trimmed.length < 3 || trimmed.length > 10) {
            setNameError("Name must be 3 to 10 characters.");
            return;
        }
        setNameError("");
        setQuestions(shuffle(skill.questions).slice(0, 10));
        setAnswers({});
        setSubmitted(false);
        setExamStarted(true);
    };
    const handleSelect = (qIndex, optIndex) => {
        setAnswers((prev) => ({ ...prev, [qIndex]: optIndex }));
    };
    const submitExam = () => {
        if (Object.keys(answers).length < 10) {
            alert("Please answer all 10 questions before submitting.");
            return;
        }
        let correct = 0;
        questions.forEach((q, i) => {
            if (answers[i] === q.answer) correct++;
        });
        setScore(correct);
        setSubmitted(true);
    };
    const retake = () => {
        setQuestions(shuffle(skill.questions).slice(0, 10));
        setAnswers({});
        setSubmitted(false);
        setScore(0);
    };
    return (
        <section className="skill-details">
            <div className="container">
                <Link to="/skills" className="sd-back">← Back to Skills</Link>
                <div className="sd-hero reveal">
                    <div className="sd-hero-icon">{skill.icon}</div>
                    <div>
                        <h1>{skill.title}</h1>
                        <p>{skill.description}</p>
                    </div>
                </div>
                <div className="sd-topics reveal">
                    {skill.topics.map((t) => <span key={t}>{t}</span>)}
                </div>
                {skill.keyPoints && (
                    <div className="sd-keypoints reveal">
                        <h3>Key Points</h3>
                        <ul>
                            {skill.keyPoints.map((p, i) => <li key={i}>{p}</li>)}
                        </ul>
                    </div>
                )}
                {!examStarted && (
                    <div className="sd-start reveal">
                        <h2>Take the {skill.title} Exam</h2>
                        <p>10 questions · shuffled every attempt · instant result</p>
                        <div className="sd-input-row">
                            <input
                                type="text"
                                placeholder="Enter your name (3–10 characters)"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                maxLength={10}
                            />
                            <button className="sd-btn" onClick={startExam}>Start Exam</button>
                        </div>
                        {nameError && <p className="sd-error">{nameError}</p>}
                    </div>
                )}
                {examStarted && !submitted && (
                    <div className="sd-exam">
                        <div className="sd-exam-head">
                            <h2>{skill.title} Exam</h2>
                            <span>{Object.keys(answers).length}/10 answered</span>
                        </div>
                        {questions.map((q, qi) => (
                            <div key={qi} className="sd-question">
                                <p className="sd-q-text">{qi + 1}. {q.q}</p>
                                <div className="sd-options">
                                    {q.options.map((opt, oi) => (
                                        <label key={oi} className={`sd-option ${answers[qi] === oi ? "selected" : ""}`}>
                                            <input type="radio" name={`q${qi}`} checked={answers[qi] === oi} onChange={() => handleSelect(qi, oi)} />
                                            <span>{opt}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        ))}
                        <button className="sd-btn sd-submit" onClick={submitExam}>Submit Exam</button>
                    </div>
                )}
                {submitted && (
                    <div className="sd-result">
                        <h2>Result for {name}</h2>
                        <div className="sd-score">{score}/10</div>
                        <p className="sd-msg">
                            {score >= 8 ? "Excellent! 🎉" : score >= 5 ? "Good effort! Keep learning." : "Keep practicing — you'll get there!"}
                        </p>
                        <div className="sd-review">
                            {questions.map((q, qi) => (
                                <div key={qi} className={`sd-review-item ${answers[qi] === q.answer ? "correct" : "wrong"}`}>
                                    <p className="sd-q-text">{qi + 1}. {q.q}</p>
                                    <p>Your answer: <strong>{q.options[answers[qi]]}</strong></p>
                                    {answers[qi] !== q.answer && <p>Correct answer: <strong>{q.options[q.answer]}</strong></p>}
                                </div>
                            ))}
                        </div>
                        <button className="sd-btn" onClick={retake}>Retake Exam</button>
                    </div>
                )}
            </div>
        </section>
    );
}