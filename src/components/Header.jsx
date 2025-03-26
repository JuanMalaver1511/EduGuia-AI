import { School } from "lucide-react";


export default function Header() {
    return (
      <header className="header">
        <School  size={40} className="iconUniver" />
        <div>
          <h1>Tu Futuro Académico</h1>
          <p>Descubre carreras y universidades perfectas para ti</p>
        </div>
      </header>
    );
}