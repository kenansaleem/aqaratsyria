import "./SocialCards.css"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialCard = () => {
    return (
        <div className="d-flex gap-3 justify-content-center">
            <a href="/" className="facebook text-white"><FaFacebook size={20} /></a>
            <a href="/" className="twitter text-white"><FaTwitter size={20} /></a>
            <a href="/" className="instagram text-white"><FaInstagram size={20} /></a>
            <a href="/" className="linkedin text-white"><FaLinkedin size={20} /></a>
        </div>
    )
}

export default SocialCard

