import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {  AlertTriangle } from "react-feather";
import "./all.sass";
import "../styles/cnm.css";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";

const TemplateWrapper = ({ children,location }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title + " - " + description}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
          sizes="128x128"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-64x64.png`}
          sizes="64x64"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
      </Helmet>
      <div className="bg-red-100 text-center p-3 py-6">
        <span className="font-semibold block text-red-600 flex items-center justify-center"><AlertTriangle className="p-1"/>Suspended on Twitter</span>
        <span className="text-gray-800">Twitter has suspended our account despite not breaking any Twitter Rules and clearly being marked a parody. Please support us by tweeting <a className="font-semibold text-black" href="https://twitter.com/TwitterSupport">@TwitterSupport</a> and follow my personal account <a className="font-semibold text-black" href="https://twitter.com/Berniewouldawon">@Berniewouldawon</a></span></div>
      <Navbar />
  {children}
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
