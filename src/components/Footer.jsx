import React, { useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Footer = () => {
  const [bgStyle] = useState({ backgroundColor: "#f5f5f5" });

  return (
    <footer style={bgStyle} className="mt-auto py-3 text-center">
      {/* <strong> &copy; 2019 </strong>*/}
      <i className="fas fa-code"></i> by{" "}
      <a
        className="badge badge-dark"
        rel="noopener"
        href="https://github.com/shlomioved1234"
        aria-label="My GitHub"
      >
        Shlomi Oved
      </a>{" "}
      using <i className="fab fa-react"></i>
      <p>
        <small className="text-muted">
          {" "}


        </small>
      </p>
    </footer>
  );
};

export default Footer;
