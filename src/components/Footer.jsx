import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Tejash Patel</h4>
      <h4>Copyright &copy; 2024 TC</h4>
      <div className="footerLinks">
        <a href="https://github.com/tejash2911" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/tejash2911/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="mailTo:tcpatel2911@gmail.com" target="_blank">
          <GrMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
