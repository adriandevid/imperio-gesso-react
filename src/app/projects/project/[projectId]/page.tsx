
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

export default async function Page({ params }: { params: { projectId: string } }) {

    const prisma = new PrismaClient();

    const services = await prisma.services.findMany({
        take: 8
    });
    const service = await prisma.services.findFirstOrThrow({
        where: {
            id: parseInt(params.projectId)
        }
    });

    return (
        <>
            <section className="page">

                <div className="cover" data-image="/images/single-project/cover.jpg">
                    <div className="cover-top">
                        <div className="container">
                            <div className="row">
                                <div className="offset-lg-3 col-lg-6">
                                    <h1>MODERN ROOMS</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <ol className="breadcrumb">
                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="project-grid.html">Project</a></li>
                                        <li className="active">Project Single</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="page-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="page-single">
                                    <div className="row margin-bottom-90">
                                        <div className="col-lg-6 col-md-12 col-sm-12 align-self-center">
                                            <div className="page-single-img ">
                                                <Image priority={true} quality={100} width={600} height={600} src={service.image} className="img-fluid float-left zoom" alt="" />
                                                {/* <a href="https://www.youtube.com/watch?v=dPZTh2NKTm4" className="play">
                                                    <i className="fa fa-play"></i>
                                                </a> */}
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 align-self-center">
                                            <div className="page-single-text">
                                                <h4 className="title">{service.title}</h4>
                                                {
                                                    service.subtitle != undefined ?
                                                        <h6 className="sub-title">Automate & Simplify The Whole Process</h6> :
                                                        <></>
                                                }
                                                <p>{service.description}</p>
                                                <div>
                                                    <p className="!mb-2 !text-[14px]"><strong>publicação: </strong></p>
                                                    <div className="info-list">
                                                        <div className="row">
                                                            <div className="col-lg-6 col-md-6 col-sm-12 gap-2 flex">
                                                                <strong>Localização: </strong>
                                                                <span>Sergipe - Brasil</span>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 flex gap-2">
                                                                <strong>Ano: </strong>
                                                                <span>2021</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="count">
                                                    <div className="row">
                                                        <div className="col-lg-4 col-md-4 col-sm-12 count-item">
                                                            <strong>96</strong>
                                                            <span>Horas de trabalho (média)</span>
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-sm-12  count-item">
                                                            <strong>190</strong>
                                                            <span>Quantidade de pessoas envolvidas</span>
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-sm-12 count-item">
                                                            <strong>12</strong>
                                                            <span>Tempo de Preparação e Limpeza (média)</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex w-full justify-end gap-2 mt-5">
                                                    <Link target="__blank" href={"https://wa.me/5579998152202?text=Tenho%20interesse%20em%20comprar%20seu%20carro"}>
                                                        <button className="dark-btn float-right border-green-400" type="submit">
                                                            <span className="show-btn !text-green-400"><FontAwesomeIcon icon={faWhatsapp} fontSize={15}></FontAwesomeIcon> Solicitar Via Whatsapp</span>
                                                            <span className="hide-btn !bg-green-400"><FontAwesomeIcon icon={faWhatsapp} fontSize={15}></FontAwesomeIcon> Solicitar Via Whatsapp</span>
                                                        </button>
                                                    </Link>
                                                    <Link target="__blank" replace={true} href={`/projects/request/${service.id}`}>
                                                        <button className="dark-btn float-right" type="submit">
                                                            <span className="show-btn">Solicitar</span>
                                                            <span className="hide-btn">Solicitar</span>
                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row page-gallery-wrapper">
                                        {
                                            services.map(function (service) {
                                                return (
                                                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                                        <a href={`/projects/project/${service.id}`} className="page-gallery"
                                                            style={{ overflow: "hidden", position: "relative" }}>
                                                            <div className="imgfix_wrapper_layer zoom"
                                                                style={{ position: "relative", padding: "0", margin: "0", width: "100%", height: "100%", overflow: "hidden" }}>

                                                                <div className="img" style={{ backgroundImage: `url(${service.image})`, backgroundPosition: "top", backgroundSize: "cover", height: "15rem", width: "100%", backgroundRepeat: "no-repeat" }}>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                )
                                            })
                                        }
                                        {/* <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                            <a href="/images/single-project/2.jpg" className="page-gallery"
                                                style={{ overflow: "hidden", position: "relative" }}>
                                                <div className="imgfix_wrapper_layer zoom"
                                                    style={{ position: "relative", padding: "0", margin: "0", width: "100%", height: "100%", overflow: "hidden" }}>

                                                    <Image priority={true} width={200} height={200} src="/images/single-project/2.jpg" alt="" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                            <a href="/images/single-project/3.jpg" className="page-gallery"
                                                style={{ overflow: "hidden", position: "relative" }}>
                                                <div className="imgfix_wrapper_layer zoom"
                                                    style={{ position: "relative", padding: "0", margin: "0", width: "100%", height: "100%", overflow: "hidden" }}>

                                                    <Image priority={true} width={200} height={200} src="/images/single-project/3.jpg" alt="" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                            <a href="/images/single-project/4.jpg" className="page-gallery"
                                                style={{ overflow: "hidden", position: "relative" }}>
                                                <div className="imgfix_wrapper_layer zoom"
                                                    style={{ position: "relative", padding: "0", margin: "0", width: "100%", height: "100%", overflow: "hidden" }}>

                                                    <Image priority={true} width={200} height={200} src="/images/single-project/4.jpg" alt="" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                            <a href="/images/single-project/5.jpg" className="page-gallery"
                                                style={{ overflow: "hidden", position: "relative" }}>
                                                <div className="imgfix_wrapper_layer zoom"
                                                    style={{ position: "relative", padding: "0", margin: "0", width: "100%", height: "100%", overflow: "hidden" }}>

                                                    <Image priority={true} width={200} height={200} src="/images/single-project/5.jpg" alt="" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                            <a href="/images/single-project/6.jpg" className="page-gallery"
                                                style={{ overflow: "hidden", position: "relative" }}>
                                                <div className="imgfix_wrapper_layer zoom"
                                                    style={{ position: "relative", padding: "0", margin: "0", width: "100%", height: "100%", overflow: "hidden" }}>

                                                    <Image priority={true} width={200} height={200} src="/images/single-project/6.jpg" alt="" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                            <a href="/images/single-project/7.jpg" className="page-gallery"
                                                style={{ overflow: "hidden", position: "relative" }}>
                                                <div className="imgfix_wrapper_layer zoom"
                                                    style={{ position: "relative", padding: "0", margin: "0", width: "100%", height: "100%", overflow: "hidden" }}>

                                                    <Image priority={true} width={200} height={200} src="/images/single-project/7.jpg" alt="" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                            <a href="/images/single-project/8.jpg" className="page-gallery"
                                                style={{ overflow: "hidden", position: "relative" }}>
                                                <div className="imgfix_wrapper_layer zoom"
                                                    style={{ position: "relative", padding: "0", margin: "0", width: "100%", height: "100%", overflow: "hidden" }}>

                                                    <Image priority={true} width={200} height={200} src="/images/single-project/8.jpg" alt="" />
                                                </div>
                                            </a>
                                        </div> */}
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
                                <h2 className="section-title">Smilar Projects</h2>
                            </div>
                        </div>
                        <div className="offset-lg-3 col-lg-6">
                            <div className="center-text">
                                <p>Donec vulputate urna sed rutrum venenatis. Cras consequat magna quis arcu elementum, quis
                                    congue risus.</p>
                            </div>
                        </div>
                    </div>


                    <div className="row project-grid">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <a href="project-single.html" className="project-grid-item">
                                <div className="img">
                                    <Image priority={true} width={200} height={200} src="/images/single-project/1.jpg" alt="" />
                                </div>
                                <div className="text">
                                    <h3>MODERN KITCHENS</h3>
                                    <p>Proin luctus odio et purus iaculis, et porta ex molestie. Curabitur euismod nulla enim.
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <a href="project-single.html" className="project-grid-item">
                                <div className="img">
                                    <Image priority={true} width={200} height={200} src="/images/single-project/2.jpg" alt="" />
                                </div>
                                <div className="text">
                                    <h3>MODERN BATHROOM</h3>
                                    <p>Curabitur nec imperdiet elit. Ut non erat imperdiet, condi men tum turpis nec, sceleris
                                        que.</p>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <a href="project-single.html" className="project-grid-item">
                                <div className="img">
                                    <Image priority={true} width={200} height={200} src="/images/single-project/3.jpg" alt="" />
                                </div>
                                <div className="text">
                                    <h3>DECORATIVE CHAIR</h3>
                                    <p>Aliquam at eros vitae elit vulputate venenatis sed id augue. Nuncmi nisl, pulvinar.</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}