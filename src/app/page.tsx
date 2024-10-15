import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
  import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
   <div>
    <Header></Header>
    <br/>
    <h1 className="text">This is Home Page</h1>
    <Hero></Hero>
    <Footer></Footer>

   </div>
  );
}
