import Navbar from "@/app/components/navbar";
import type { AppProps } from "next/app";
import "../app/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="h-full">
      <Component {...pageProps} />
      <Navbar />
    </div>
  );
}
