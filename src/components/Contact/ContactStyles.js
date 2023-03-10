import styled from 'styled-components';

const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #F6F6F6;
  padding: 80px 0;

  @media ${props => props.theme.breakpoints.md}{
    padding: 60px 0;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
`;

const ContactTitle = styled.h2`
  font-size: 36px;
  line-height: 48px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 24px;

  @media ${props => props.theme.breakpoints.md}{
    font-size: 32px;
    line-height: 40px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 28px;
    line-height: 36px;
  }
`;

const ContactForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  margin-bottom: 8px;
`;

const FormInput = styled.input`
  padding: 12px 16px;
  border: none;
  border-radius: 4px;
  margin-bottom: 16px;
  background-color: #FFFFFF;

  &:focus{
    outline: none;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
  }
`;

const FormTextarea = styled.textarea`
  padding: 12px 16px;
  border: none;
  border-radius: 4px;
  margin-bottom: 16px;
  background-color: #FFFFFF;

  &:focus{
    outline: none;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
  }
`;

const FormButton = styled.button`
  background-color: #2F80ED;
  color: #FFFFFF;
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  border: none;
  border-radius: 4px;
  padding: 12px 24px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover{
    background-color: #2566C7;
  }
`;

