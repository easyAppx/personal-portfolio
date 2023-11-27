import React, { Component } from "react";
import SocialMedia from "components/socialMedia/SocialMedia";
import Button from "components/button/Button";
import AddressImg from "./AddressImg";
import "./ContactComponent.css";
import { contactPageData } from "assets/portfolio";
import { darkTheme } from "theme";

const ContactData = contactPageData.contactSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;

class Contact extends Component {
  render() {
    const theme = darkTheme;
    return (
      <div className="contact-main">
        <div className="basic-contact">
          <div className="fade-in">
            <div className="address-heading-div">
              <div className="contact-heading-img-div">
                <AddressImg theme={theme} />
              </div>
              <div className="address-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: theme.textD }}
                >
                  {ContactData["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.text }}
                >
                  {ContactData["description"]}
                </p>
                <SocialMedia theme={theme} />
                <div className="resume-btn-div">
                  <Button
                    text="Drop a mail"
                    newTab={true}
                    href="mailto:obioraukwuani@gmail.com"
                    theme={theme}
                  />
                </div>
                <h1
                  className="address-heading-text"
                  style={{ color: theme.text }}
                >
                  {addressSection["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: "gray" }}
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
                  style={{ color: "gray" }}
                >
                  {phoneSection["subtitle"]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
