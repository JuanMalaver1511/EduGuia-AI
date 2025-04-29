import { useState } from "react";
import { BookOpen, GraduationCap, Landmark, Star, Rocket,Flame, School} from "lucide-react";



export default function Interests() {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const interests = [
        {
            icon: <BookOpen size={40} className="icon" />,
            iconOne: <Rocket size={40} className="icon" />,
            title: "Carreras más populares",
            description: "Recomendaciones basadas en tus intereses y habilidades",

            details: (
                <div className="details-content">
                    <h4 className="carrer-name" >Medicina</h4>
                    <p className="description-carrer">Muy demandada por su alta empleabilidad y prestigio social. Además, muchas universidades colombianas tienen programas de medicina reconocidos en Latinoamérica.</p>
                    <h4 className="carrer-name" >Ingeniería de Sistemas</h4>
                    <p className="description-carrer">Con el crecimiento del sector tecnológico, esta carrera es muy buscada tanto por estudiantes como por empleadores.</p>
                    <h4 className="carrer-name" >Derecho</h4>
                    <p className="description-carrer">Siempre ha sido una de las carreras tradicionales más populares, debido a su amplio campo de acción en sectores públicos y privados.</p>
                    <h4 className="carrer-name" >Administración de Empresas</h4>
                    <p className="description-carrer">Es una carrera muy versátil y solicitada, ideal para quienes buscan liderar negocios o emprender.</p>
                    <h4 className="carrer-name" >Psicología</h4>
                    <p className="description-carrer">Cada vez más popular, sobre todo en áreas como la psicología clínica, organizacional y educativa.</p>
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
                    <h4 className="university-name">Universidad de los Andes (Bogotá, Cundinamarca)</h4>
                    <div className="stars">
                        {[...Array(5)].map((_, i) => <Star key={i} size={18} className="star-icon" />)}
                    </div>
                    <p className="description">Una de las mejores y más reconocidas de Colombia y América Latina, privada, con alta calidad en ingeniería, derecho, medicina, economía y más.</p>
                    <h4 className="university-name">Universidad Nacional de Colombia, sede Bogotá</h4>
                    <div className="stars">
                        {[...Array(5)].map((_, i) => <Star key={i} size={18} className="star-icon" />)}
                    </div>
                    <p className="description">Pública, de gran prestigio académico y con costos accesibles. Muy fuerte en ciencias, ingeniería, medicina, artes y humanidades.</p>

                    <h4 className="university-name">Pontificia Universidad Javeriana (Bogotá, Cundinamarca)</h4>
                    <div className="stars">
                        {[...Array(5)].map((_, i) => <Star key={i} size={18} className="star-icon" />)}
                    </div>
                    <p className="description">Privada, de tradición jesuita, reconocida por la excelencia en carreras como derecho, medicina, comunicación social, y arquitectura.</p>

                    <h4 className="university-name">Universidad Pedagógica y Tecnológica de Colombia (UPTC) (Tunja, Boyacá)</h4>
                    <div className="stars">
                        {[...Array(5)].map((_, i) => <Star key={i} size={18} className="star-icon" />)}
                    </div>
                    <p className="description">Pública, la más importante de Boyacá y de gran nivel en carreras de ingeniería, educación, ciencias agropecuarias y económicas.</p>
                </div>
            )
        },
        {
            icon: <GraduationCap size={40} className="icon" />,
            iconOne: <School size={40} className="icon" />,
            title: "Orientación Completa",
            description: "Guía paso a paso para tu futuro académico",
            details: (
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>Universidad de los Andes</strong> (Bogotá, Cundinamarca):{" "}
                  <a
                    href="https://www.uniandes.edu.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    uniandes.edu.co
                  </a>
                </li>
                <li>
                  <strong>Universidad Nacional de Colombia</strong> – Sede Bogotá:{" "}
                  <a
                    href="https://unal.edu.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    unal.edu.co
                  </a>
                </li>
                <li>
                  <strong>Pontificia Universidad Javeriana</strong> (Bogotá, Cundinamarca):{" "}
                  <a
                    href="https://www.javeriana.edu.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    javeriana.edu.co
                  </a>
                </li>
                <li>
                  <strong>UPTC</strong> – Universidad Pedagógica y Tecnológica de Colombia (Tunja, Boyacá):{" "}
                  <a
                    href="https://www.uptc.edu.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    uptc.edu.co
                  </a>
                </li>
                <li>
                  <strong>Universidad Militar Nueva Granada</strong> (Bogotá y Cajicá, Cundinamarca):{" "}
                  <a
                    href="https://www.umng.edu.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    umng.edu.co
                  </a>
                </li>
              </ul>
            )
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