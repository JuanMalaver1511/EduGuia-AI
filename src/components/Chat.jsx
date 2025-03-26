import { useState } from "react";
import Message from "./Message";
import { BookOpen } from "lucide-react";
import Cursos from "./Course";
import { Send } from "lucide-react";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");
    
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: "Respuesta automática 🤖", sender: "bot" }]);
    }, 1000);
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
      </div>
      <div className="chat-input">
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Escribe tu pregunta aquí..."
        />
        <button onClick={sendMessage}>
        <Send size={25} className="iconSend" />
        </button>
      </div>
    </div>
  );
}
