import Image from "next/image";

export default function Page() {
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
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <a href="/projects/project" className="project-grid-item">
                                            <div className="img">
                                                <Image src="/images/projects/1.jpg" alt="" />
                                            </div>
                                            <div className="text">
                                                <h3>MODERN KITCHENS</h3>
                                                <p>Proin luctus odio et purus iaculis, et porta ex molestie. Curabitur
                                                    euismod nulla enim.</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <a href="/projects/project" className="project-grid-item">
                                            <div className="img">
                                                <Image src="/images/projects/2.jpg" alt="" />
                                            </div>
                                            <div className="text">
                                                <h3>MODERN BATHROOM</h3>
                                                <p>Curabitur nec imperdiet elit. Ut non erat imperdiet, condi men tum turpis
                                                    nec, sceleris que.</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <a href="/projects/project" className="project-grid-item">
                                            <div className="img">
                                                <Image src="/images/projects/3.jpg" alt="" />
                                            </div>
                                            <div className="text">
                                                <h3>DECORATIVE CHAIR</h3>
                                                <p>Aliquam at eros vitae elit vulputate venenatis sed id augue. Nuncmi nisl,
                                                    pulvinar.</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <a href="/projects/project" className="project-grid-item">
                                            <div className="img">
                                                <Image src="/images/projects/4.jpg" alt="" />
                                            </div>
                                            <div className="text">
                                                <h3>ROOMS CABINETRY</h3>
                                                <p>Nam mollis est diam, non viverra nisi porta eget. Morbi interdum in elit
                                                    et sodales.</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <a href="/projects/project" className="project-grid-item">
                                            <div className="img">
                                                <Image src="/images/projects/5.jpg" alt="" />
                                            </div>
                                            <div className="text">
                                                <h3>MODERN ROOMS</h3>
                                                <p>Fusce at pellentesque risus. Phasellus massa odio, mattis in imperdiet
                                                    quis, rutrum in.</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <a href="/projects/project" className="project-grid-item">
                                            <div className="img">
                                                <Image src="/images/projects/6.jpg" alt="" />
                                            </div>
                                            <div className="text">
                                                <h3>MINIMAL OFFICES</h3>
                                                <p>Proin luctus odio et purus iaculis, et porta ex molestie. Curabitur
                                                    euismod nulla enim.</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <a href="/projects/project" className="project-grid-item">
                                            <div className="img">
                                                <Image src="/images/projects/7.jpg" alt="" />
                                            </div>
                                            <div className="text">
                                                <h3>MODERN KITCHENS</h3>
                                                <p>Cras pulvinar fermentum elit, at mollis justo eleifend quis. Vivamus
                                                    felis ipsum.</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <a href="/projects/project" className="project-grid-item">
                                            <div className="img">
                                                <Image src="/images/projects/8.jpg" alt="" />
                                            </div>
                                            <div className="text">
                                                <h3>WORKING PLACES</h3>
                                                <p>Vestibulum pulvinar nunc scelerisque nisl elementum porttitor. Donec
                                                    tincidunt.</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <a href="/projects/project" className="project-grid-item">
                                            <div className="img">
                                                <Image src="/images/projects/9.jpg" alt="" />
                                            </div>
                                            <div className="text">
                                                <h3>MODERN BEDROOMS</h3>
                                                <p>Mauris elementum dui eget urna sagittis, eu rutrum purus dapibus. Fusce
                                                    dictum.</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}