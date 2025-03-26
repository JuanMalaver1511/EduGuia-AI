import Header from "./components/Header";
import Chat from "./components/Chat";
import Footer from "./components/Footer";
import Interests from "./components/Interests";

export default function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Chat />
      </div>
      <Interests/>
      <Footer/>
    </div>
  );
}