export default function Footer() {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Todos los derechos reservados  </p>
                <p>Visitanos en <a href="https://weboriginnexustech.vercel.app/"> NexusTech.</a></p>
            <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
        </footer>
    );
}