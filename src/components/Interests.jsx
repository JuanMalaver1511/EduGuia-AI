import { useState } from "react";
import { BookOpen, GraduationCap, Landmark, Star, Rocket,Flame} from "lucide-react";

export default function Interests() {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const Icones = [
        {
            
        }
    ]
    const interests = [
        {
            icon: <BookOpen size={40} className="icon" />,
            iconOne: <Rocket size={40} className="icon" />,
            title: "Carreras Personalizadas",
            description: "Recomendaciones basadas en tus intereses y habilidades",

            details: (
                <div className="details-content">
                    <h4 className="carrer-name" >Ingenieria de Sistemas</h4>
                    <p className="description-carrer">Una de las mejores universidades en América Latina, con un alto nivel académico y una gran oferta educativa.</p>
                    <h4 className="carrer-name" >Ingenieria de Sistemas</h4>
                    <p className="description-carrer">Una de las mejores universidades en América Latina, con un alto nivel académico y una gran oferta educativa.</p>
                </div>
            )
        },
        {
            icon: <Landmark size={40} className="icon" />,
            iconOne: <Flame size={40} className="icon" />,
            title: "Universidades Destacadas",
            description: "Información sobre precios, rankings y ubicaciones",
            details: (
                <div className="details-content">
                    <h4 className="university-name">Universidad Nacional</h4>
                    <div className="stars">
                        {[...Array(5)].map((_, i) => <Star key={i} size={18} className="star-icon" />)}
                    </div>
                    <p className="description">Una de las mejores universidades en América Latina, con un alto nivel académico y una gran oferta educativa.</p>
                    <h4 className="university-name">Universidad Santo Tomas</h4>
                    <div className="stars">
                        {[...Array(5)].map((_, i) => <Star key={i} size={18} className="star-icon" />)}
                    </div>
                    <p className="description">Una de las mejores universidades en América Latina, con un alto nivel académico y una gran oferta educativa.</p>
                </div>
            )
        },
        {
            icon: <GraduationCap size={40} className="icon" />,
            title: "Orientación Completa",
            description: "Guía paso a paso para tu futuro académico",
            details: "Recibe asesoramiento sobre qué estudiar, dónde y cómo planificar tu futuro profesional."
        }
    ];

    return (
        <div className="interests-container">
            {interests.map((item, index) => (
                <div key={index} 
                className={`interest-card ${selectedIndex === index ? 'selectedCard' : ''}`} 
                onClick={() => setSelectedIndex(index === selectedIndex ? null : index)}>
                    <div className="icon-container">{item.icon}</div>
                    <h3 className="interest-title">{item.title}</h3>
                    <p className="interest-description">{item.description}</p>
                </div>
            ))}
                 <div className="details-container">
                {selectedIndex !== null && (
                    <div className="details-section">
                        <h3 className="details-title">{interests[selectedIndex].title}</h3>
                        <div>{interests[selectedIndex].iconOne}</div>
                        <p className="details-text">{interests[selectedIndex].details}</p>
                    </div>
                )}
            </div>
        </div>
    );
}