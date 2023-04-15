import ContactForm from "@/components/Contact/ContactForm";
import Head from "next/head";

const ContactPage = () => {
    return <>
        <Head>
            <title>contact me</title>
            <meta name="description" content="send me your messages" />
        </Head>
        <ContactForm />
    </>
}

export default ContactPage;