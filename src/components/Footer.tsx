const Footer = () => {
  return (
    <>
    
  


    <footer className="footer sm:footer-horizontal text-base-content p-10 bg-black/70">
        <aside>
            <div className="text-white text-2xl font-semibold">
            <span className="text-4xl">{'{'}</span> Yoshi
            <span className="text-[#00BFA6]">Wave </span>
            <span className="text-4xl">{'}'}</span>
            </div>        
            <p>
            Building Smart, Seamless Software Experiences
            </p>
        </aside>
        <nav>
            <h6 className="footer-title">Follow Us On</h6>
            <a
              className="link link-hover"
              href="https://www.linkedin.com/company/yoshiwave"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
           
        </nav>
        <nav>
            <h6 className="footer-title">Contact</h6>
            
            <a href="mailto:contact@yoshiwave.com" className="link link-hover">
                contact@yoshiwave.com
            </a>

            <a href="tel:+94768566498" className="link link-hover">
                +94 768 566 498
            </a>
        </nav>

        <nav>
  <h6 className="footer-title">Our Team</h6>
  <a
    href="https://forms.zohopublic.com/yoshithakaveesh83gm1/form/Careers/formperma/HqWrQmWfOSJ-AtEkXO33PZVyx2dTJby751CGM3REM3A"
    className="link link-hover"
    target="_blank"
    rel="noopener noreferrer"
  >
    Careers
  </a>
</nav>


    </footer>
        <div className="footer flex justify-center text-center sm:footer-horizontal text-base-content p-5 bg-black/70" >
            <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </div>
    

    </>
  )
}
export default Footer