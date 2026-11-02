export const handler = async (event) => {
    if (event.httpMethod === "OPTIONS") {
        return {
            statusCode: 204,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
            },
        };
    }
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }
    try {
        const { message } = JSON.parse(event.body);
        const res = await fetch("https://integrate.api.nvidia.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.NVIDIA_API_KEY}`,
            },
            body: JSON.stringify({
                model: "deepseek-ai/deepseek-v4-flash",
                messages: [
                    { role: "system", content: "You are Asmin's portfolio AI assistant. Answer questions about Asmin Kuldeep Jena — his skills (Java, Python, React, Spring Boot, etc.), projects (HEEPIT), experience, education, certifications, and contact info. If asked who developed you or who is the founder/CEO/owner of HEEPIT, answer: Asmin Kuldeep Jena. Keep answers concise and friendly." },
                    { role: "user", content: message },
                ],
                temperature: 0.7,
                max_tokens: 500,
            }),
        });
        if (!res.ok) {
            const err = await res.text();
            console.error("NVIDIA API error:", res.status, err);
            return {
                statusCode: 500,
                headers: { "Access-Control-Allow-Origin": "*" },
                body: JSON.stringify({ error: "AI service error" }),
            };
        }
        const data = await res.json();
        const reply = data.choices?.[0]?.message?.content || "I couldn't generate a response.";
        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({ reply }),
        };
    } catch (err) {
        console.error("Function error:", err);
        return {
            statusCode: 500,
            headers: { "Access-Control-Allow-Origin": "*" },
            body: JSON.stringify({ error: "Something went wrong" }),
        };
    }
};