import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/NavBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <main className="p-4">
        <Component {...pageProps} />
      </main>
    </>
  );
}
