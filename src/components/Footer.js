import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

function Footer() {
    return(
        <>
            <footer className='footer'>
                <section className='footer-links'>
                    <a href='https://www.instagram.com/papertundra/'><FaInstagram /></a>
                    <a href='https://ie.linkedin.com/in/dottie-y-3a9b54263?trk=people-guest_people_search-card'><FaLinkedinIn /></a>
                    <a href='https://github.com/dottieyoung'><FaGithub /></a>
                </section>
                <small>©2025 Dottie Young</small>
            </footer>
        </>
    )
}

export default Footer