import { BookOpen, GraduationCap, Landmark } from "lucide-react";

export default function Interests() {
    const interests = [
        {
            icon: <BookOpen size={40} className="icon" />,
            title: "Carreras Personalizadas",
            description: "Recomendaciones basadas en tus intereses y habilidades"
        },
        {
            icon: <Landmark size={40} className="icon" />,
            title: "Universidades Destacadas",
            description: "Información sobre precios, rankings y ubicaciones"
        },
        {
            icon: <GraduationCap size={40} className="icon" />,
            title: "Orientación Completa",
            description: "Guía paso a paso para tu futuro académico"
        }
    ];

    return (
        <div className="interests-container">
            {interests.map((item, index) => (
                <div key={index} className="interest-card">
                    <div className="icon-container">{item.icon}</div>
                    <h3 className="interest-title">{item.title}</h3>
                    <p className="interest-description">{item.description}</p>
                </div>
            ))}
        </div>
    );
}
