import React, { useState } from "react";
import { useRouter } from "next/router";
import { Section, SectionTitle } from "../../styles/GlobalComponents";
 

const ContactPage = () => {
 const [submitterName, setSubmitterName] = useState("");
 const router = useRouter();
 const confirmationScreenVisible =
   router.query?.success && router.query.success === "true";
    const formVisible = !confirmationScreenVisible;

    const ConfirmationMessage = (
    <React.Fragment>
        <p>
        Thank you for submitting this form. I'll get back to you as soon as possible.
        </p>

        <button onClick={() => router.replace("/contact", undefined, { shallow: true })}> Submit Another Response </button>
    </React.Fragment>
    );
 
 const ContactForm = (
    <Section id="contact">
        <SectionTitle>Contact Me</SectionTitle>
        {/* <form
          name="contact-form"
          method="POST"
          action="contact/?success=true">
          <label htmlFor="name">Name *</label>
          <input
            id="name"
            name="name"
            required
            type="text"/>
          <label htmlFor="company">Company *</label>
          <input id="company" name="company" required type="text" />
          <label htmlFor="email">Email Address *</label>
          <input id="email" type="email" name="email" required />
          <label htmlFor="message">Message *</label>
          <textarea id="message" name="message" required></textarea>
          <button type="submit">Submit</button>
        </form> */}

    </Section>
      );
 
 return (
   <div>
        {formVisible ? ContactForm : ConfirmationMessage}
   </div>
 );
};
 
export default ContactPage;


