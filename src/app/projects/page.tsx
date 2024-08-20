import { PrismaClient } from "@prisma/client";
import Image from "next/image";

export default async function Page(props: any) {
    const prisma = new PrismaClient();
    const services = await prisma.services.findMany();

    return (
        <section className="page">

            <div className="cover" data-image="/images/projects/cover.jpg">
                <div className="cover-top">
                    <div className="container">
                        <div className="row">
                            <div className="offset-lg-3 col-lg-6">
                                <h1>Projects</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <ol className="breadcrumb">
                                    <li><a href="index.html">Home</a></li>
                                    <li className="active">Projects</li>
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
                            <div className="project-grid">
                                <div className="row">
                                    {
                                        services.map(function (service) {
                                            return (
                                                <div className="col-lg-4 col-md-6 col-sm-12">
                                                    <a href="/projects/project" className="project-grid-item">
                                                        <div className="img" style={{ backgroundImage: `url(${service.image})`, backgroundPosition: "top", backgroundSize: "cover", height: "15rem", width: "100%", backgroundRepeat: "no-repeat" }}>
                                                        </div>
                                                        <div className="text">
                                                            <h3>{service.title}</h3>
                                                            <p>{service.description.substring(0, 200)}</p>
                                                        </div>
                                                    </a>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}