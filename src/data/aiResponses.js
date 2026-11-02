export const quickPrompts = ["What are your skills?", "Tell me about HEEPIT", "How can I contact you?", "What is your experience?"];
const priorityAnswers = [
    { keywords: ["ceo", "founder", "owner", "who made heepit", "who created heepit"], reply: "Asmin Kuldeep Jena is the Founder of HEEPIT (2026)." },
    { keywords: ["who developed you", "who made you", "who created you", "your developer", "who built you"], reply: "I was developed by Asmin Kuldeep Jena as part of his portfolio project." },
];
export const aiResponses = [
    { keywords: ["skill", "skills", "know", "technologies"], reply: "Asmin works with Java, Spring Boot, JDBC, React.js, JavaScript, HTML5, CSS3, MySQL, MongoDB, and GitHub. He's also familiar with Python, Tally, MS Office, and data analysis basics. You can explore each skill and even take a short exam on the Skills page!" },
    { keywords: ["project", "projects", "ecommerce", "e-commerce"], reply: "HEEPIT is Asmin's live e-commerce web interface, built with React.js, JavaScript, HTML5, CSS3, and Capacitor, deployed on Netlify. He's the founder of HEEPIT (2026). Visit the Projects page to see it live!" },
    { keywords: ["contact", "email", "reach", "linkedin", "github", "whatsapp", "instagram"], reply: "You can reach Asmin via the Contact page — email, LinkedIn, GitHub, Instagram, Facebook, or WhatsApp. The contact form is also there if you'd like to send a direct message." },
    { keywords: ["experience", "work", "job", "teacher", "teaching"], reply: "Asmin worked as a Computer Teacher at Bhavani International School (CBSE), Balasore, teaching Java, Python, AI basics, and digital tools. He also holds a Java Full Stack Development certification from Durga Software Solutions, Hyderabad." },
    { keywords: ["education", "study", "college", "bca", "degree"], reply: "Asmin completed his BCA from Academy of Business Administration (ABA) College, Balasore (2020–2023), CHSE from Remuna Junior College (2018–2020), and secondary education from SGSK High School (2018)." },
    { keywords: ["certification", "certificate", "certified"], reply: "Asmin holds certifications in Java Full Stack Development (Durga Software Solutions), Empowering Teachers with AI (DIKSHA), and Device & Network Security (DIKSHA). Check the Experience page for details." },
    { keywords: ["award", "achievement", "cyber"], reply: "Asmin received the CYBER MASTER Award from Bhavani International School in 2025. 🏆" },
    { keywords: ["location", "where", "live", "based", "address"], reply: "Asmin is based in Balasore, Odisha, India (PIN 756019). You can find the map link on the About page." },
    { keywords: ["hello", "hi", "hey", "namaste"], reply: "Hello! 👋 I'm Asmin's AI assistant. Ask me about his skills, projects, experience, or how to contact him." },
    { keywords: ["who", "about", "asmin", "yourself"], reply: "Asmin Kuldeep Jena is a Java Full Stack Developer and BCA graduate from Balasore, Odisha. He's the founder of HEEPIT and has experience in technical teaching and full-stack development." },
    { keywords: ["resume", "cv"], reply: "You can view Asmin's full profile across the About, Skills, Projects, and Experience pages. For a resume, reach out via the Contact page." },
    { keywords: ["thanks", "thank", "bye"], reply: "You're welcome! Feel free to explore the rest of the portfolio. 😊" },
];
export function getAIResponse(input) {
    const text = input.toLowerCase();
    for (const item of priorityAnswers) {
        if (item.keywords.some((k) => text.includes(k))) return item.reply;
    }
    for (const item of aiResponses) {
        if (item.keywords.some((k) => text.includes(k))) return item.reply;
    }
    return null;
}