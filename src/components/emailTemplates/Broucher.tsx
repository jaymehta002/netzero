import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  interface BrochureEmailProps {
    userName?: string;
    brochureTitle?: string;
  }
  
  const baseUrl = process.env.VERCEL_URL
    ? `${process.env.VERCEL_URL}`
    : "";
  
  export const BrochureEmail = ({
    userName,
    brochureTitle,
  }: BrochureEmailProps) => {
    const previewText = `Your free ${brochureTitle} is here!`;
  
    return (
      <Html>
        <Head />
        <Preview>{previewText}</Preview>
  
        <Body style={main}>
          <Container style={container}>
            <Section>
              <Img
                src={`${baseUrl}/logo.png`}
                width="40"
                height="40"
                alt="Your Company"
              />
            </Section>
            <Section style={{ paddingBottom: "20px" }}>
              <Row>
                <Text style={heading}>Hello {userName},</Text>
                <Text style={paragraph}>
                  Thank you for your interest in our {brochureTitle}. We&apos;re excited to share this valuable information with you!
                </Text>
                <Text style={paragraph}>
                  You can find your free brochure attached to this email. We hope you find it informative and useful.
                </Text>
                <Text style={{ ...paragraph, paddingBottom: "16px" }}>
                  If you have any questions or would like more information, please don&apos;t hesitate to reach out to us.
                </Text>
  
                <Button style={button} href={`${baseUrl}/contact`}>
                  Contact Us
                </Button>
              </Row>
            </Section>
  
            <Hr style={hr} />
  
            <Section>
              <Row>
                <Text style={{ ...paragraph, fontWeight: "700" }}>
                  Quick Links
                </Text>
                <Text>
                  <Link href={`${baseUrl}/about`} style={link}>
                    About Us
                  </Link>
                </Text>
                <Text>
                  <Link href={`${baseUrl}/services`} style={link}>
                    Our Services
                  </Link>
                </Text>
                <Text>
                  <Link href={`${baseUrl}/testimonials`} style={link}>
                    Client Testimonials
                  </Link>
                </Text>
                <Hr style={hr} />
                <Text style={footer}>
                  Your Company Name, Inc., Your Address, City, State, ZIP
                </Text>
              </Row>
            </Section>
          </Container>
        </Body>
      </Html>
    );
  };
  
  BrochureEmail.PreviewProps = {
    userName: "John",
    brochureTitle: "Ultimate Guide to Our Services",
  } as BrochureEmailProps;
  
  export default BrochureEmail;
  
  const main = {
    backgroundColor: "#ffffff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
    width: "580px",
    maxWidth: "100%",
  };
  
  const heading = {
    fontSize: "32px",
    lineHeight: "1.3",
    fontWeight: "700",
    color: "#484848",
  };
  
  const paragraph = {
    fontSize: "18px",
    lineHeight: "1.4",
    color: "#484848",
  };
  
  const button = {
    backgroundColor: "#059669",
    borderRadius: "3px",
    color: "#fff",
    fontSize: "18px",
    paddingTop: "19px",
    paddingBottom: "19px",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "block",
    width: "100%",
  };
  
  const link = {
    ...paragraph,
    color: "#007bff",
    display: "block",
  };
  
  const hr = {
    borderColor: "#cccccc",
    margin: "20px 0",
  };
  
  const footer = {
    color: "#9ca299",
    fontSize: "14px",
    marginBottom: "10px",
  };