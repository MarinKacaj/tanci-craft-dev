import React from "react";
import Helmet from "react-helmet";

const capitalizedTextStyle = {
  textTransform: 'capitalize',
}

const creditsStyle = {
  color: 'inherit';
  textDecoration: 'none';
  cursor: 'text';
}

const Terms = () => (
  <div>
    <Helmet title="Terms" />
    <h1>Terms</h1>
    <h2>Welcome to Tanci Craft</h2>
    <p>
      These terms and conditions outline the rules and regulations for the use
      of Tanci Craft's Website.
    </p>
    <span style={capitalizedTextStyle}>Tanci Craft</span> is located at:
    <br />
  </div>
);

export default Terms;
