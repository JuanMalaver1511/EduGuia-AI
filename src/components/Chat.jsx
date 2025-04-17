import { useState } from "react";
import Message from "./Message";
import { BookOpen } from "lucide-react";
import Cursos from "./Course";
import { Send } from "lucide-react";

export default function Chat() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const sendMessage = async () => {
        if (input.trim() === "") return;

        setMessages([...messages, { text: input, sender: "user" }]);
        setInput("");
        setIsLoading(true);

        try {
            // Enviar solicitud a la API
            const response = await fetch(`https://aieducation.onrender.com/proms/${input.trim()}`);

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);
            // Agregar respuesta del bot
            setMessages(prev => [...prev, { text: data.response || "¡Hola! 👋 ¿En qué puedo ayudarte hoy? 😊 Selecciona las materias que te llaman la atención para que te pueda asesorar.", sender: "bot" }]);
        } catch (error) {
            console.error("Error al enviar el mensaje:", error);
            setMessages(prev => [...prev, { text: "Lo siento, hubo un error al procesar tu solicitud. Por favor, inténtalo de nuevo más tarde.", sender: "bot" }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="chat-container">
            <div className="iconContainer">
                <BookOpen size={40} className="iconChat" />
            </div>
            <h2>¡Bienvenido a EduGuía AI!</h2>
            <p>Cuéntame sobre tus intereses, habilidades y preferencias para ayudarte a encontrar tu camino académico ideal.</p>
            <Cursos></Cursos>
            <div className="chat-box">
                {messages.map((msg, index) => (
                    <Message key={index} text={msg.text} sender={msg.sender} />
                ))}
                {isLoading && <Message text="Pensando..." sender="bot" />}
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Escribe tu pregunta aquí..."
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                />
                <button onClick={sendMessage} disabled={isLoading}>
                    <Send size={25} className="iconSend" />
                </button>
            </div>
        </div>
    );
}