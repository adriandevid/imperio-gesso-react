import Image from "next/image";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faAngleLeft, faAngleRight, faHourglass, faFlag } from '@fortawesome/free-solid-svg-icons'
// import { faConnectdevelop, faFacebook, faGithub, faGooglePlus, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faConnectdevelop, faFacebook, faTwitter, faLinkedin, faGithub, faGooglePlus } from "@fortawesome/free-brands-svg-icons";


export default function Home() {
  return (
    <>
      <div className="welcome" style={{ height: "1081px" }}>
        <div className="welcome-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="welcome-text">
                  <h1>Elegância em Cada Detalhe: Forros de Gesso Artesanais</h1>
                  <p>Transformando Ambientes com o Toque Familiar e a Qualidade que Você Confia. Especialistas em Forros de Gesso há Gerações.</p>
                  <a className="dark-btn" href="project-grid.html">
                    <span className="show-btn">EXPLORE A GALERIA</span>
                    <span className="hide-btn">EXPLORE A GALERIA</span>
                  </a>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="slider-position">&nbsp;</div>
              </div>
            </div>
          </div>
          <div className="slider-wrapper" style={{ left: "619.5px", width: "1035.5px", position: "absolute" }}>
            <div className="base">
              <div className="prev">
                <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
              </div>
              <div className="next">
                <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
              </div>
            </div>
            <div className="owl-carousel owl-loaded owl-drag">

              <div className="owl-stage-outer">
                <div className="owl-stage" style={{ transform: "translate3d(-1194px, 0px, 0px)", transition: "all", width: "4381px" }}>
                  <div className="owl-item cloned" style={{ width: "368.2px", marginRight: "30px", }}>
                    <div className="item">
                      <div className="img" style={{ backgroundImage: "url(/images/gesso/1.png)", backgroundPosition: "top", backgroundSize: "cover", height: "20rem", width: "100%", backgroundRepeat: "no-repeat" }}>
                      </div>
                      <div className="text">
                        <h5>Veneer Kitchen</h5>
                        <p>Mauris sagittis feugiat dui vel varius.</p>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item cloned" style={{ width: "368.2px", marginRight: "30px", }}>
                    <div className="item">
                      <div className="img" style={{ backgroundImage: "url(/images/gesso/4.jpg)", backgroundPosition: "top", backgroundSize: "cover", height: "20rem", width: "100%", backgroundRepeat: "no-repeat" }}>
                      </div>
                      <div className="text">
                        <h5>Driftwood</h5>
                        <p>Mauris sagittis feugiat dui vel varius.</p>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item cloned" style={{ width: "368.2px", marginRight: "30px", }}>
                    <div className="item">
                      <div className="img" style={{ backgroundImage: "url(/images/gesso/5.jpg)", backgroundPosition: "top", backgroundSize: "cover", height: "20rem", width: "100%", backgroundRepeat: "no-repeat" }}>
                      </div>
                      <div className="text">
                        <h5>Sawn Oak</h5>
                        <p>Mauris sagittis feugiat dui vel varius.</p>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item firstActiveItem active" style={{ width: "368.2px", marginRight: "30px", }}>
                    <div className="item">
                      <div className="img" style={{ backgroundImage: "url(/images/gesso/1.png)", backgroundPosition: "top", backgroundSize: "cover", height: "20rem", width: "100%", backgroundRepeat: "no-repeat" }}>
                      </div>
                      <div className="text">
                        <h5>Kitchen Units</h5>
                        <p>Mauris sagittis feugiat dui vel varius.</p>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item active" style={{ width: "368.2px", marginRight: "30px", }}>
                    <div className="item">
                      <div className="img" style={{ backgroundImage: "url(/images/gesso/2.jpg)", backgroundPosition: "top", backgroundSize: "cover", height: "20rem", width: "100%", backgroundRepeat: "no-repeat" }}>
                      </div>
                      <div className="text">
                        <h5>High Gloss Lacquer</h5>
                        <p>Mauris sagittis feugiat dui vel varius.</p>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item active" style={{ width: "368.2px", marginRight: "30px", }}>
                    <div className="item">
                      <div className="img" style={{ backgroundImage: "url(/images/gesso/3.jpg)", backgroundPosition: "top", backgroundSize: "cover", height: "20rem", width: "100%", backgroundRepeat: "no-repeat", }}>
                      </div>
                      <div className="text">
                        <h5>Veneer Kitchen</h5>
                        <p>Mauris sagittis feugiat dui vel varius.</p>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item" style={{ width: "368.2px", marginRight: "30px", }}>
                    <div className="item">
                      <div className="img" style={{ backgroundImage: "url(/images/gesso/4.jpg)", backgroundPosition: "top", backgroundSize: "cover", height: "20rem", width: "100%", backgroundRepeat: "no-repeat" }}>
                      </div>
                      <div className="text">
                        <h5>Driftwood</h5>
                        <p>Mauris sagittis feugiat dui vel varius.</p>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item" style={{ width: "368.2px", marginRight: "30px", }}>
                    <div className="item">
                      <div className="img" style={{ backgroundImage: "url(/images/gesso/5.jpg)", backgroundPosition: "top", backgroundSize: "cover", height: "20rem", width: "100%", backgroundRepeat: "no-repeat" }}>
                      </div>
                      <div className="text">
                        <h5>Sawn Oak</h5>
                        <p>Mauris sagittis feugiat dui vel varius.</p>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item firstActiveItem cloned" style={{ width: "368.2px", marginRight: "30px", }}>
                    <div className="item">
                      <div className="img" style={{ backgroundImage: "url(/images/gesso/1.png)", backgroundPosition: "top", backgroundSize: "cover", height: "20rem", width: "100%", backgroundRepeat: "no-repeat" }}>
                      </div>
                      <div className="text">
                        <h5>Kitchen Units</h5>
                        <p>Mauris sagittis feugiat dui vel varius.</p>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item cloned" style={{ width: "368.2px", marginRight: "30px", }}>
                    <div className="item">
                      <div className="img" style={{ backgroundImage: "url(/images/gesso/2.jpg)", backgroundPosition: "top", backgroundSize: "cover", height: "20rem", width: "100%", backgroundRepeat: "no-repeat" }}>
                      </div>
                      <div className="text">
                        <h5>High Gloss Lacquer</h5>
                        <p>Mauris sagittis feugiat dui vel varius.</p>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item cloned" style={{ width: "368.2px", marginRight: "30px", }}>
                    <div className="item">
                      <div className="img" style={{ backgroundImage: "url(/images/gesso/3.jpg)", backgroundPosition: "top", backgroundSize: "cover", height: "20rem", width: "100%", backgroundRepeat: "no-repeat", }}>
                      </div>
                      <div className="text">
                        <h5>Veneer Kitchen</h5>
                        <p>Mauris sagittis feugiat dui vel varius.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-nav disabled"><button type="button" role="presentation" className="owl-prev"><span
                aria-label="Previous">‹</span></button><button type="button" role="presentation"
                  className="owl-next"><span aria-label="Next">›</span></button></div>
              <div className="owl-dots"><button role="button" className="owl-dot active"><span></span></button><button
                role="button" className="owl-dot"><span></span></button></div>
            </div>
          </div>
        </div>
      </div>

      <section className="half-parallax">
        <div className="parallax-image"
          style={{ backgroundImage: "url(/images/parallax-1.jpg)", backgroundSize: "cover", backgroundPosition: "center center" }}>
        </div>
        <div className="parallax-items">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="parallax-item">
                  <FontAwesomeIcon icon={faHourglass}></FontAwesomeIcon>
                  <h5 className="feature-title">Instalação de Forros de Gesso</h5>
                  <p>Oferecemos serviços completos de instalação de forros de gesso, personalizados de acordo com o design e as necessidades de cada ambiente.
                  </p>
                  <a className="dark-btn" href="gallery.html">
                    <span className="show-btn">SOLICITAR SERVIÇO</span>
                    <span className="hide-btn">SOLICITAR SERVIÇO</span>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="parallax-item">
                  <FontAwesomeIcon icon={faConnectdevelop}></FontAwesomeIcon>
                  <h5 className="feature-title">Projetos de Iluminação Embutida</h5>
                  <p>Especializamos na integração de iluminação embutida em forros de gesso, criando efeitos visuais que valorizam e modernizam os ambientes.
                  </p>
                  <a className="dark-btn" href="gallery.html">
                    <span className="show-btn">SOLICITAR SERVIÇO</span>
                    <span className="hide-btn">SOLICITAR SERVIÇO</span>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="parallax-item">
                  <FontAwesomeIcon icon={faFlag}></FontAwesomeIcon>
                  <h5 className="feature-title">Outros</h5>
                  <p>Reparos e Manutenção de Forros, Sancas de Gesso e Molduras Decorativas, Divisórias e Revestimentos de Gesso, Consultoria.</p>
                  <a className="dark-btn" href="gallery.html">
                    <span className="show-btn">SOLICITAR SERVIÇO</span>
                    <span className="hide-btn">SOLICITAR SERVIÇO</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section padding-bottom-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12 col-sm-12 align-self-center mobile-bottom-fix">
              <div className="left-heading">
                <h2 className="section-title dotted">Sobre nós</h2>
              </div>
              <div className="left-text">
                <p className="dark">Uma História de Tradição e Excelência na Arte de Transformar Ambientes com Gesso.</p>
                <p className="margin-bottom-40">Na nossa empresa familiar, o cuidado com os detalhes e o compromisso com a qualidade são tradições que passamos de geração em geração. Com décadas de experiência no mercado, nos dedicamos a criar forros de gesso que não apenas embelezam, mas também elevam o nível de sofisticação dos ambientes. Cada projeto é tratado como uma obra de arte, onde a expertise artesanal se une à inovação para garantir resultados que superam as expectativas.</p>
                <ul className="margin-bottom-40">
                  <li>Compromisso com a Qualidade.</li>
                  <li>Atendimento Personalizado.</li>
                  <li>Inovação e Design Personalizado.</li>
                </ul>

                <div className="row page-gallery-wrapper">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <a href="/images/1(1).jpg" className="page-gallery imgfix_top_container"
                      style={{ overflow: "hidden", position: "relative" }}>
                      <div className="imgfix_wrapper_layer zoom"
                        style={{ position: "relative", padding: "0", margin: "0", width: "100%", height: "100%", overflow: "hidden" }}>
                        <img src="/images/1(1).jpg" alt="" className="imgfix_src_img" style={{ opacity: 1 }} />
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <a href="/images/2(1).jpg" className="page-gallery imgfix_top_container"
                      style={{ overflow: "hidden", position: "relative" }}>
                      <div className="imgfix_wrapper_layer zoom"
                        style={{ position: "relative", padding: "0", margin: "0", width: "100%", height: "100%", overflow: "hidden" }}>
                        <img src="/images/2(1).jpg" alt="" className="imgfix_src_img" style={{ opacity: 1 }} />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="offset-lg-1 col-lg-6 col-md-12 col-sm-12 align-self-center"
              data-scroll-reveal="enter right move 30px over 0.6s after 0.3s" data-scroll-reveal-id="1"
              data-scroll-reveal-initialized="true" data-scroll-reveal-complete="true">
              <img src="/images/3(1).jpg" className="img-fluid float-right" alt="Title" />
            </div>
          </div>
        </div>
      </section>

      <div className="parallax-counter"
        style={{
          backgroundImage: "url(/images/parallax-2.jpg)", backgroundSize: "cover", backgroundPosition: "center center"
        }}>
        <div className="parallax-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="count-item">
                  <strong>100</strong>
                  <span>Active<br />Customer</span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="count-item">
                  <strong>100</strong>
                  <span>Specialist<br />Staff</span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="count-item">
                  <strong>200</strong>
                  <span>Complated<br />Project</span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="count-item">
                  <strong>400</strong>
                  <span>Ongoing<br />Project</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="center-heading">
                <h2 className="section-title">Our Team</h2>
              </div>
            </div>
            <div className="offset-lg-3 col-lg-6">
              <div className="center-text">
                <p>Donec vulputate urna sed rutrum venenatis. Cras consequat magna quis arcu elementum, quis
                  congue risus.</p>
              </div>
            </div>
          </div>

          <div className="row">

            <div className="col-lg-4 col-md-6 col-sm-12 position-relative">
              <div className="person-item">
                <div className="img">
                  <img src="/images/person-1.jpg" alt="" />
                </div>
                <div className="content">
                  <div className="text">
                    <h5 className="user-name">Fletch Skinner</h5>
                    <span>DESIGNER</span>
                    <ul className="social">
                      <li><a href="#"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a></li>
                      <li><a href="#"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a></li>
                      <li><a href="#"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a></li>
                      <li><a href="#"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 position-relative">
              <div className="person-item active">
                <div className="img">
                  <img src="/images/person-2.jpg" alt="" />
                </div>
                <div className="content">
                  <div className="text">
                    <h5 className="user-name">Hanson Deck</h5>
                    <span>ARCHITECT</span>
                    <ul className="social">
                      <li><a href="#"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a></li>
                      <li><a href="#"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a></li>
                      <li><a href="#"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a></li>
                      <li><a href="#"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 position-relative">
              <div className="person-item">
                <div className="img">
                  <img src="/images/person-1.jpg" alt="" />
                </div>
                <div className="content">
                  <div className="text">
                    <h5 className="user-name">Natalya Under</h5>
                    <span>ART DIRECTOR</span>
                    <ul className="social">
                      <li><a href="#"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a></li>
                      <li><a href="#"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a></li>
                      <li><a href="#"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a></li>
                      <li><a href="#"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section white">
        <div className="container">

          <div className="row">
            <div className="col-lg-12">
              <div className="center-heading">
                <h2 className="section-title">Latest Blog Posts</h2>
              </div>
            </div>
            <div className="offset-lg-3 col-lg-6">
              <div className="center-text">
                <p>Donec vulputate urna sed rutrum venenatis. Cras consequat magna quis arcu elementum, quis congue risus.</p>
              </div>
            </div>
          </div>

          <div className="row">

            <div className="col-lg-4 col-md-6 col-sm-12">
              <a href="blog-single.html" className="blog-post-grid imgfix_top_container" style={{ overflow: "hidden" }}><div id="imgfix_wrapper_layer_0_0" className="imgfix_wrapper_layer" style={{ position: "relative", padding: "0", margin: "0", width: "100%", height: "100%", overflow: "hidden" }}>
                <img src="/images/1(3).jpg" alt="" className="imgfix_src_img" style={{ opacity: 1 }} />
                <div className="content">
                  <h3>Chief clubhouse for female executives opens in Boston</h3>
                  <div className="date">APR 09</div>
                </div>
              </div></a>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <a href="blog-single.html" className="blog-post-grid imgfix_top_container" style={{ overflow: "hidden" }}><div id="imgfix_wrapper_layer_0_1" className="imgfix_wrapper_layer" style={{ position: "relative", padding: "0", margin: "0", width: "100%", height: "100%", overflow: "hidden" }}>
                <img src="/images/2(3).jpg" alt="" className="imgfix_src_img" style={{ opacity: 1 }} />
                <div className="content">
                  <h3>A hotel in the heart of Copenhagen’s Latin Quarter</h3>
                  <div className="date">APR 09</div>
                </div>
              </div></a>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <a href="blog-single.html" className="blog-post-grid imgfix_top_container" style={{ overflow: "hidden" }}><div id="imgfix_wrapper_layer_0_2" className="imgfix_wrapper_layer" style={{ position: "relative", padding: "0", margin: "0", width: "100%", height: "100%", overflow: "hidden" }}>
                <img src="/images/3(3).jpg" alt="" className="imgfix_src_img" style={{ opacity: 1 }} />
                <div className="content">
                  <h3>Skandium’s eco townhouse for LDF18 with Montana</h3>
                  <div className="date">APR 09</div>
                </div>
              </div></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
