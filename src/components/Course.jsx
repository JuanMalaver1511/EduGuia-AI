import { useState } from "react";
import { Trash } from "lucide-react";

export default function Cursos() {
    const [seleccionadas, setSeleccionadas] = useState([]);
    const [mensaje, setMensaje] = useState("");

    const materias = ["Matemáticas", "Física", "Química", "Historia", "Literatura", "Biología", "Programación", "Arte", "Inglés"];

    const handleClick = (materia) => {
        if (!seleccionadas.includes(materia)) {
            setSeleccionadas([...seleccionadas, materia]);
            setMensaje(`¡Qué bien que te guste ${materia}! Cuéntame más...`);
        }
    };

    const borrarSeleccionadas = () => {
        setSeleccionadas([]);
        setMensaje("");
    };

    return (
        <div>
            <div className="cursos-grid">
                {materias.map((materia) => (
                    <button 
                        key={materia} 
                        onClick={() => handleClick(materia)} 
                        className={seleccionadas.includes(materia) ? "selected" : ""}
                    >
                        {materia}
                    </button>
                ))}
            </div>
            <button onClick={borrarSeleccionadas} className="icon-button">
                    <Trash size={25} className="iconDelete" />
            </button>
            {mensaje && <div className="chat-box">{mensaje}</div>}
        </div>
    );
}