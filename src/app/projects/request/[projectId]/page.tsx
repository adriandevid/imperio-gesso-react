import { faWhatsapp, faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";
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
        <section className="page">
            {/* <div className="cover" data-image="/images/projects/cover.jpg">
                <div className="cover-top">
                    <div className="container">
                        <div className="row">
                            <div className="offset-lg-3 col-lg-6">
                                <h1>Solicite um Serviço</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <ol className="breadcrumb">
                                    <li><a href="/">Página Principal</a></li>
                                    <li><a href="/projects">Projetos</a></li>
                                    <li className="active">Solicitar</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="page-bottom">

                <div className="contact-bottom mt-10">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <Image width={40} height={40} src="/images/favicon.png" alt="favicon"></Image>
                                <h5 className="margin-bottom-30 mt-2 font-bold">Formulário de Solicitação de Serviços</h5>
                                <div className="contact-text">
                                    <p>Bem-vindo ao nosso Formulário de Solicitação de Serviços! Este documento foi criado para facilitar a sua experiência ao solicitar nossos serviços de forma rápida e eficiente. Ao preencher o formulário abaixo, você nos fornecerá as informações necessárias para que possamos entender suas necessidades e oferecer a melhor solução possível.</p>
                                </div>
                            </div>

                            <div className="col-lg-8 col-md-6 col-sm-12">
                                <div className="contact-form">
                                    <div className="flex flex-wrap">
                                        <div className="flex flex-col gap-2 w-full">
                                            <div className="w-full">
                                                <label htmlFor="link">Serviço: </label>
                                                <input type="text" name="link" defaultValue={service.title} disabled></input>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <label htmlFor="nome">Nome: </label>
                                            <input name="nome" type="text" placeholder="Seu nome" />
                                        </div>
                                        <div className="flex gap-2 w-full">
                                            <div className="w-full">
                                                <label htmlFor="email">Email: </label>
                                                <input name="email" className="flex-1" type="text" placeholder="E-Mail" />
                                            </div>
                                            <div className="w-full">
                                                <label htmlFor="telefone">Telefone: </label>
                                                <input name="telefone" className="flex-1" type="text" placeholder="Telefone" />
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <label htmlFor="link">Descrição: </label>
                                            <textarea className="!mb-[0]" name="link" defaultValue={service.description} disabled></textarea>
                                        </div>
                                        <div className="flex w-full justify-end gap-2 mt-2">
                                            <Link href={"https://wa.me/5579998152202?text=Tenho%20interesse%20em%20comprar%20seu%20carro"}>
                                                <button className="dark-btn float-right border-green-400">
                                                    <span className="show-btn !text-green-400"><FontAwesomeIcon icon={faWhatsapp} fontSize={15}></FontAwesomeIcon> Solicitar Via Whatsapp</span>
                                                    <span className="hide-btn !bg-green-400"><FontAwesomeIcon icon={faWhatsapp} fontSize={15}></FontAwesomeIcon> Solicitar Via Whatsapp</span>
                                                </button>
                                            </Link>
                                            <button className="dark-btn float-right" type="submit">
                                                <span className="show-btn">Solicitar</span>
                                                <span className="hide-btn">Solicitar</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="container mt-10">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="contact">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="contact-item">
                                            <div className="icon">
                                                <i className="fa fa-location-arrow"></i>
                                            </div>
                                            <p>455 West Orchard Street Kings <br />Mountain, NC 28086</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="contact-item">
                                            <div className="icon">
                                                <i className="fa fa-phone"></i>
                                            </div>
                                            <a href="tel:(272)211-7370">(272) 211-7370</a>
                                            <a href="tel:(272)211-7370">(272) 211-7370</a>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="contact-item">
                                            <div className="icon">
                                                <i className="fa fa-envelope"></i>
                                            </div>
                                            <a href="mailto:support@yourbrand.com">support@yourbrand.com</a>
                                            <a href="mailto:info@yourbrand.com">info@yourbrand.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    )
}