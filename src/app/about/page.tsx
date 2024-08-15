import { faFacebook, faTwitter, faLinkedin, faGithub, faConnectdevelop } from "@fortawesome/free-brands-svg-icons";
import { faHourglass, faFlag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { mensagem, url_send_message } from "@portfolio/consts";
import Image from "next/image";


export default function Page() {
    const servicos: { id: number, nome: string, mensagem: string }[] = [
        {
          id: 0,
          nome: "Instalação de gesso",
          mensagem
        },
        {
          id: 1,
          nome: "Projeto de Iluminação",
          mensagem
        },
        {
          id: 2,
          nome: "Outros",
          mensagem
        }
      ];
      
    return (
        <>
            <section className="page">

                <div className="cover" data-image="/images/single-project/cover.jpg">
                    <div className="cover-top">
                        <div className="container">
                            <div className="row">
                                <div className="offset-lg-3 col-lg-6">
                                    <h1>Sobre nós</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <ol className="breadcrumb">
                                        <li><a href="index.html">Pagina Principal</a></li>
                                        <li className="active">Sobre nós</li>
                                    </ol>
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
                                                <Image priority={true} width={200} height={200} src="/images/1(1).jpg" alt="" className="imgfix_src_img" style={{ opacity: 1 }} />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                        <a href="/images/2(1).jpg" className="page-gallery imgfix_top_container"
                                            style={{ overflow: "hidden", position: "relative" }}>
                                            <div className="imgfix_wrapper_layer zoom"
                                                style={{ position: "relative", padding: "0", margin: "0", width: "100%", height: "100%", overflow: "hidden" }}>
                                                <Image priority={true} width={200} height={200} src="/images/2(1).jpg" alt="" className="imgfix_src_img" style={{ opacity: 1 }} />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="offset-lg-1 col-lg-6 col-md-12 col-sm-12 align-self-center"
                            data-scroll-reveal="enter right move 30px over 0.6s after 0.3s" data-scroll-reveal-id="1"
                            data-scroll-reveal-initialized="true" data-scroll-reveal-complete="true">
                            <Image priority={true} width={800} height={700} src="/images/3(1).jpg" className="img-fluid float-right" alt="Title" />
                        </div>
                    </div>
                </div>
            </section>

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
                                    <a className="dark-btn" href={url_send_message.replaceAll("{mensagem}", servicos[0].mensagem)}>
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
                                    <a className="dark-btn" href={url_send_message.replaceAll("{mensagem}", servicos[1].mensagem)}>
                                        <span className="show-btn">SOLICITAR SERVIÇO</span>
                                        <span className="hide-btn">SOLICITAR SERVIÇO</span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="parallax-item">
                                    <FontAwesomeIcon icon={faFlag}></FontAwesomeIcon>
                                    <h5 className="feature-title">Outros</h5>
                                    <p>Forneçemos outros serviços como: Reparos e Manutenção de Forros, Sancas de Gesso e Molduras Decorativas, Divisórias e Revestimentos de Gesso, Consultoria, etc.</p>
                                    <a className="dark-btn" href={url_send_message.replaceAll("{mensagem}", servicos[2].mensagem)}>
                                        <span className="show-btn">SOLICITAR SERVIÇO</span>
                                        <span className="hide-btn">SOLICITAR SERVIÇO</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
                                    <Image priority={true} width={150} height={150} src="/images/person-1.jpg" alt="" />
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
                                    <Image priority={true} width={150} height={150} src="/images/person-2.jpg" alt="" />
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
                                    <Image priority={true} width={150} height={150} src="/images/person-1.jpg" alt="" />
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
        </>
    )
}