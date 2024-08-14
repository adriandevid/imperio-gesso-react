'use client';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import Script from "next/script";
import { faFacebook, faTwitter, faLinkedin, faGooglePlus, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <time dateTime="2016-10-25" suppressHydrationWarning /> */}
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Império Decorações</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.css" />
        {/* <link rel="stylesheet" href="/js/fontawesome/css/all.css" /> */}
      </head>

      <body>
        <div className="preloader-wrapper">
            <div className="loader"></div>
        </div>
      
        <header className="header-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="main-nav">
                  <a href="/" className="logo">
                    <img src="/images/logo.svg" alt="Império" />
                  </a>

                  <ul className="nav">
                    <li><a href="/">Home</a></li>
                    <li className="submenu">
                      <a href="javascript:;">Projetos</a>
                      <ul>
                        <li><a href="/projects">Todos</a></li>
                        <li><a href="project-list.html">Project List</a></li>
                        <li><a href="/projects/project">Project Single</a></li>
                      </ul>
                    </li>
                    <li className="submenu">
                      <a href="javascript:;">Pages</a>
                      <ul>
                        <li><a href="about-me.html">About Me</a></li>
                        <li><a href="about-us.html">About Us</a></li>
                        <li><a href="/gallery">Gallery</a></li>
                        <li><a href="faq.html">FAQs</a></li>
                      </ul>
                    </li>
                    <li className="submenu">
                      <a href="javascript:;">Blog</a>
                      <ul>
                        <li><a href="blog-list.html">Blog List</a></li>
                        <li><a href="blog-single.html">Blog Single</a></li>
                      </ul>
                    </li>
                    <li><a className="contact-btn" href="contact.html">Contact</a></li>
                  </ul>
                  <a className="menu-trigger">
                    <span>Menu</span>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </header>

        {children}

        <footer>
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-12 col-sm-12">
                <img src="/images/footer-logo.svg" className="logo" alt="" />
                <div className="text">Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper.</div>
                <ul className="social">
                  <li><a href="#"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faGooglePlus}></FontAwesomeIcon></a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a></li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                <h5>Helpful Links</h5>
                <ul className="footer-nav">
                  <li><a href="#"><span>About Us</span></a></li>
                  <li><a href="#"><span>Features</span></a></li>
                  <li><a href="#"><span>FAQ’s</span></a></li>
                  <li><a href="#"><span>Blog</span></a></li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                <h5>Support</h5>
                <ul className="footer-nav">
                  <li><a href="#"><span>Privacy Policy</span></a></li>
                  <li><a href="#"><span>Terms of Use</span></a></li>
                  <li><a href="#"><span>Support Center</span></a></li>
                  <li><a href="#"><span>Contact</span></a></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12">
                <h5>Contact Us</h5>
                <div className="address">
                  <p>455 West Orchard Street<br />Kings Mountain, NC 28086</p>
                  <p>Phone: (272) 211-7370</p>
                  <p><span>E-Mail: </span><a href="#">support@yourbrand.com</a></p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <p className="copyright">© 2021 inox. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </footer>
        <Script src="https://code.jquery.com/jquery-3.7.1.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/js/all.min.js"></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.2.0/jquery.magnific-popup.min.js" ></Script>
        <Script src="https://unpkg.com/scrollreveal"></Script>
        <Script src="https://cdn.jsdelivr.net/parallax.js/1.4.2/parallax.min.js"></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.0/jquery.waypoints.min.js"></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/Counter-Up/1.0.0/jquery.counterup.min.js"></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" ></Script>

        <Script src="/libs/imgfixmaster/js/imgfix.min.js"></Script>

        <Script src="/js/index.js" ></Script>
      </body>

    </html>
  );
}
