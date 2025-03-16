import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Body } from "./Body";
import "./../styles/styles.css";

export function Landing() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Body />
      </main>
      <Footer />
    </>
  );
}
