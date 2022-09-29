import React, { Component } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack";
import { Container, Row } from "react-bootstrap";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import BlogsImg from "./BlogsImg";
import AddressImg from "./AddressImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;

class Contact extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <Header theme={theme} />
        <div className="basic-contact">
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <AddressImg theme={theme} />
              </div>
              <div className="contact-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: theme.text }}
                >
                  {ContactData["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {ContactData["description"]}
                </p>
                <h1
                  className="address-heading-text"
                  style={{ color: theme.text }}
                >
                  {addressSection["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {addressSection["subtitle"]}
                </p>
                <h1
                  className="address-heading-text"
                  style={{ color: theme.text }}
                >
                  {phoneSection["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {phoneSection["subtitle"]}
                </p>
                <SocialMedia theme={theme} />
                {/* <div className="resume-btn-div">
                  <Button
                    text="See My Resume"
                    newTab={true}
                    href={greeting.resumeLink}
                    theme={theme}
                  />
                </div> */}
              </div>
            </div>
          </Fade>
          <Fade bottom duration={1000} distance="40px">
            <div className="resume-heading-div">
              <div className="resume-section">
                <div className="resume-btn-div">
                  <Button
                    text="Download CV"
                    newTab={true}
                    href={require(`../../assests/pdf/${ContactData["resume_name"]}`)}
                    theme={theme}
                  >
                    <AiOutlineDownload />
                    &nbsp;Download CV
                  </Button>
                </div>
                <div className="resume">
                  <Document
                    file={require(`../../assests/pdf/${ContactData["resume_name"]}`)}
                    className="d-flex justify-content-center"
                  >
                    <Page pageNumber={1} scale={1.7} />
                  </Document>
                </div>
                <div className="resume-btn-div">
                  <Button
                    text="Download CV"
                    newTab={true}
                    href={require(`../../assests/pdf/${ContactData["resume_name"]}`)}
                    theme={theme}
                  >
                    <AiOutlineDownload />
                    &nbsp;Download CV
                  </Button>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
