import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import GoogleReviews from "./components/GoogleReviews";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <Gallery />
      <GoogleReviews />
      <Contact />
      <a
  href="https://wa.me/918435666660?text=Hi, I'm interested in your glass services"
  target="_blank"
  className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-lg z-50 flex items-center justify-center"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className="w-6 h-6 fill-white"
  >
    <path d="M16 .4C7.3.4.3 7.4.3 16c0 2.8.7 5.5 2.1 7.9L0 32l8.3-2.2c2.3 1.3 4.9 2 7.7 2 8.7 0 15.7-7 15.7-15.6C31.7 7.4 24.7.4 16 .4zm0 28.6c-2.4 0-4.7-.6-6.7-1.8l-.5-.3-4.9 1.3 1.3-4.8-.3-.5c-1.3-2-2-4.3-2-6.8 0-7.2 5.9-13.1 13.1-13.1S29.1 8.9 29.1 16 23.2 29 16 29zm7.2-9.8c-.4-.2-2.5-1.2-2.9-1.3-.4-.2-.6-.2-.9.2-.2.4-1 1.3-1.2 1.5-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.1-.8.2-.2.4-.4.6-.7.2-.2.3-.4.4-.6.1-.2.1-.5 0-.7-.1-.2-.9-2.1-1.2-2.9-.3-.8-.6-.7-.9-.7h-.8c-.3 0-.7.1-1 .5-.4.4-1.4 1.3-1.4 3.2 0 1.9 1.4 3.8 1.6 4.1.2.2 2.8 4.3 6.8 6 .9.4 1.6.6 2.1.8.9.3 1.7.2 2.3.1.7-.1 2.5-1 2.8-1.9.3-.9.3-1.7.2-1.9-.1-.2-.4-.3-.8-.5z" />
  </svg>
</a>
    </>
  );
}

export default App;