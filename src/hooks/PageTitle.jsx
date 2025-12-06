import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageTitle = ({ baseTitle = "Paylinkly" }) => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.replace("/", "");

    // Route-to-title mapping
    const titles = {
      "": "Patient Merchant Services | Smart Merchant Solutions",
      about: "About Paylinkly - Reliably Payment Processing System",
      faqs: "Paylinkly FAQS - Payment Processing Answers",
      blogs: "Paylinkly Blogs - Payment Processing Insights",
      "privacy-policy": "Paylinkly Privacy Policy - Security Data Handling",
      "terms-of-service":
        "Paylinkly Terms Of Service - Payment Solutions User Agreement",
      "stop-and-prevent-fraud":
        "Stop & Prevent Online Payment Fraud | Reduce Chargebacks & Secure Customer Data – Paylinkly",
      "ach-payment-processing":
        "Accept ACH Payments with Paylinkly | Fast & Secure Transfers",
      "analytical-reports":
        "Reduce Chargebacks with Paylinkly Analytical Reports | Risk, Chargeback & Revenue Insights",
      "chargeback-representment":
        "Paylinkly Chargeback Representment | Recover Lost Revenue Fast",
      "chargeback-services":
        "Chargeback management services | Win chargeback disputes with PayLinkly",
      "credit-card-processing":
        "Small Business Credit Card Processing - Low Fees",
      "crypto-payment-processing":
        "Accept Bitcoin & Crypto Payments Instantly | Crypto Payment Gateway for Businesses | Paylinkly",
      "merchant-account-analysis":
        "Merchant Account Analysis for Online Payment Processing | Paylinkly",
      "mobile-credit-card-payments":
        "Retail Credit Card Processing | Accepts Payment Anywhere",
      "online-invoicing-system": "Online Invoicing System - Paylinkly",
      "real-time-chargeback-alerts":
        "Paylinkly Real-Time Chargeback Alerts | Prevent Revenue Loss",
      "reduce-manage-and-win-chargebacks":
        "Reduce, Manage, & Win Chargebacks with Paylinkly’s Solutions",
      "zero-cost-credit-card-processing":
        "Zero Credit Card Processing - No Hidden Fees",
      "e-check-payment-processing":
        "Accept eCheck Payments Online | Secure & Simple with Paylinkly",
      "online-payment-processing":
        "Online Payment Processing - Safe & Easy Transactions",
      "retail-credit-card-processing":
        "Retail Credit Card Processing For Small Businesses | Paylinkly",
      contact: "Paylinkly - Contact Form",
    };

    // Find title by route or use fallback
    const pageTitle =
      titles[path] ||
      `${baseTitle} | ${
        path.charAt(0).toUpperCase() + path.slice(1).replaceAll("-", " ")
      }`;

    document.title = pageTitle;
  }, [location]);

  return null; // This component doesn't render anything
};

export default PageTitle;
