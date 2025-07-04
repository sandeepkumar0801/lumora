import { EnquiryFormProvider } from "@/context/EnquiryFormContext";
import { BrochureFormProvider } from "@/context/BrochureFormContext";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Lumora - Home</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <EnquiryFormProvider>
        <BrochureFormProvider>
          <Component {...pageProps} />
        </BrochureFormProvider>
      </EnquiryFormProvider>
    </>
  );
}
