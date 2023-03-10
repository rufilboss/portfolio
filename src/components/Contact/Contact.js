const Contact = () => {
    return (
      <ContactSection>
        <ContactContainer>
          <ContactTitle>Get in touch</ContactTitle>
          <ContactForm>
            <FormLabel htmlFor="name">Name</FormLabel>
            <FormInput type="text" id="name" name="name" required/>
  
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput type="email" id="email" name="email" required/>
  
            <FormLabel htmlFor="message">Message</FormLabel>
            <FormTextarea id="message" name="message" rows="6" required/>
  
            <FormButton type="submit">Send message</FormButton>
          </ContactForm>
        </ContactContainer>
      </ContactSection>
    );
  };
  
  export default Contact;
  