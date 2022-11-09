import './Landing.css'
// Images & pdf
import personel from '../../../assets/images/personel.png'
import cv from '../../../assets/pdf/cv.pdf'
// Icons
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiMailFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
const Landing = () => {
	return (
		<>
			<div className="landing">
				<div className="container">
					<div className="info">
						<h1 data-lang="name" >hi i'm <span>ishak</span> <span>djilali benfredj</span></h1>
						<h2 data-lang="job" >web developer (Front-end) <br/> & youtuber</h2>
						<div className="social-media">
							<a href="/"><FaFacebook /></a>
							<a href="/"><FaInstagram /></a>
							<a href="/"><FaLinkedin /></a>
							<a href="/"><RiMailFill /></a>
							<a href="/"><FaYoutube /></a>
						</div>
						<div className="links">
							<a data-lang="download" download href={cv}>Download CV</a>
							<a data-lang="contactme"  href="/">Contact Me</a>
						</div>
					</div>
					<div className="img">
						<img src={personel} alt="" />
					</div>
				</div>
			</div>
		</>
	)
}

export default Landing