import React from "react";

function Footer() {
  const copyYear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright &copy; {copyYear}</p>
    </footer>
  );
}

export default Footer;
