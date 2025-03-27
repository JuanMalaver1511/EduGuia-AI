import Header from "./components/Header";
import Chat from "./components/Chat";
import Footer from "./components/Footer";
import Interests from "./components/Interests";

export default function App() {
  return (
    <div className="container">
      <Header />
        <Chat />
      <Interests/>
      <Footer/>
    </div>
  );
}