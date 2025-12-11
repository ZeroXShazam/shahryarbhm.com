import React from "react";
import "./LoaderLogo.css";
import { greeting } from "../../portfolio.js";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="logo">
        <span style={{ color: theme.text }}> &lt;</span>
        <span className="logo-name" style={{ color: theme.text }}>
          {greeting.logo_name}
        </span>
        <span style={{ color: theme.text }}>/&gt;</span>
      </div>
    );
  }
}

export default LogoLoader;
