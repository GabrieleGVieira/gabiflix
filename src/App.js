import Menu from "./components/Menu"
import BannerMain from "./components/BannerMain";
import VideoCardGroup from "./components/Carousel"
import Footer from "./components/Footer";
import dados from "./data/dados.json"

function App() {
  return (
    <div className="App">
      <Menu />
      <BannerMain
        videoTitle={dados.categorias[0].videos[0].titulo}
        url={dados.categorias[0].videos[0].url}
        videoDescription={"testes"}
      />
      <VideoCardGroup ignoreFirstVideo category={dados.categorias[0]} />
      <Footer />
    </div>
  );
}

export default App;
