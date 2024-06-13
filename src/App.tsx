import Footer from "./components/Footer";
import Header from "./components/Header";
import { ProductContextProvider } from "./context/productContext/productContext";
import Home from "./page/Home";

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <Header />
        <main className="AppBody">
          <Home />
        </main>
        <Footer />
      </ProductContextProvider>
    </div>
  );
}

export default App;
