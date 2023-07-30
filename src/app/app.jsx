import { AppRouter } from "../components/app.router/app.router";
import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";

function App() {
  return (
    <>
      <Header></Header>
      <AppRouter></AppRouter>
      <Footer></Footer>
    </>
  );
}

export default App;
