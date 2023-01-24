import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [first, setfirst] = useState("");
  const handler = () => {
    setfirst(() => {
      throw new Error("意図的なエラーです");
    });
  };
  return (
    <>
      <Component {...pageProps} />
      <button onClick={handler}>ぼたん</button>
    </>
  );
}
