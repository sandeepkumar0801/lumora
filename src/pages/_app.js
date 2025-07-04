import { EnquiryFormProvider } from "@/context/EnquiryFormContext";
import { BrochureFormProvider } from "@/context/BrochureFormContext";
import "@/styles/globals.css";
import Head from "next/head";
import WhatsAppFloat from "@/components/WhatsAppFloat";

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
          <WhatsAppFloat />
        </BrochureFormProvider>
      </EnquiryFormProvider>
    </>
  );
}
