
import Image from "next/image";

export default function Page() {
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
                                            <div className="page-single-img">
                                                    <Image priority={true} width={600} height={600} src="/images/single-project/1.jpg" className="img-fluid float-left" alt="" />
                                                    <a href="https://www.youtube.com/watch?v=dPZTh2NKTm4" className="play">
                                                        <i className="fa fa-play"></i>
                                                    </a>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 align-self-center">
                                            <div className="page-single-text">
                                                <h5 className="title">MODERN ROOMS</h5>
                                                <h6 className="sub-title">Automate & Simplify The Whole Process</h6>
                                                <p>Duis aute irure dolor reprehenderit in voluptate velit essle cillum dolore eu
                                                    fugiat nulla pariatur. Excepteur sint ocaec at cupdatat proident suntin
                                                    culpa qui officia.</p>
                                                <div className="info-list">
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                            <strong>Location: </strong>
                                                            <span>New York</span>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                            <strong>Year: </strong>
                                                            <span>2021</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="count">
                                                    <div className="row">
                                                        <div className="col-lg-4 col-md-4 col-sm-12 count-item">
                                                            <strong>96</strong>
                                                            <span>Active Users</span>
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-sm-12  count-item">
                                                            <strong>190</strong>
                                                            <span>Active Team</span>
                                                        </div>
                                                        <div className="col-lg-4 col-md-4 col-sm-12 count-item">
                                                            <strong>12</strong>
                                                            <span>Active Staff</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row page-gallery-wrapper">
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                            <a href="/images/single-project/1.jpg" className="page-gallery"
                                                style={{ overflow: "hidden", position: "relative" }}>
                                                <div className="imgfix_wrapper_layer zoom"
                                                    style={{ position: "relative", padding: "0", margin: "0", width: "100%", height: "100%", overflow: "hidden"}}>

                                                    <Image priority={true} width={200} height={200} src="/images/single-project/1.jpg" alt="" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                            <a href="/images/single-project/2.jpg" className="page-gallery"
                                                style={{ overflow: "hidden", position: "relative"}}>
                                                <div className="imgfix_wrapper_layer zoom"
                                                    style={{ position: "relative", padding: "0", margin: "0", width: "100%", height: "100%", overflow: "hidden" }}>

                                                    <Image priority={true} width={200} height={200} src="/images/single-project/2.jpg" alt="" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                            <a href="/images/single-project/3.jpg" className="page-gallery"
                                                style={{ overflow: "hidden", position: "relative"}}>
                                                <div className="imgfix_wrapper_layer zoom"
                                                    style={{ position: "relative", padding: "0", margin: "0", width: "100%", height: "100%", overflow: "hidden" }}>

                                                    <Image priority={true} width={200} height={200} src="/images/single-project/3.jpg" alt="" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                            <a href="/images/single-project/4.jpg" className="page-gallery"
                                                style={{ overflow: "hidden", position: "relative"}}>
                                                <div className="imgfix_wrapper_layer zoom"
                                                    style={{ position: "relative", padding: "0", margin: "0", width: "100%", height: "100%", overflow: "hidden" }}>

                                                    <Image priority={true} width={200} height={200} src="/images/single-project/4.jpg" alt="" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                            <a href="/images/single-project/5.jpg" className="page-gallery"
                                                style={{ overflow: "hidden", position: "relative"}}>
                                                <div className="imgfix_wrapper_layer zoom"
                                                    style={{ position: "relative", padding: "0", margin: "0", width: "100%", height: "100%", overflow: "hidden" }}>

                                                    <Image priority={true} width={200} height={200} src="/images/single-project/5.jpg" alt="" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                            <a href="/images/single-project/6.jpg" className="page-gallery"
                                                style={{ overflow: "hidden", position: "relative"}}>
                                                <div className="imgfix_wrapper_layer zoom"
                                                    style={{ position: "relative", padding: "0", margin: "0", width: "100%", height: "100%", overflow: "hidden" }}>

                                                    <Image priority={true} width={200} height={200} src="/images/single-project/6.jpg" alt="" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                            <a href="/images/single-project/7.jpg" className="page-gallery"
                                                style={{ overflow: "hidden", position: "relative"}}>
                                                <div className="imgfix_wrapper_layer zoom"
                                                    style={{ position: "relative", padding: "0", margin: "0", width: "100%", height: "100%", overflow: "hidden" }}>

                                                    <Image priority={true} width={200} height={200} src="/images/single-project/7.jpg" alt="" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                            <a href="/images/single-project/8.jpg" className="page-gallery"
                                                style={{ overflow: "hidden", position: "relative"}}>
                                                <div className="imgfix_wrapper_layer zoom"
                                                    style={{ position: "relative", padding: "0", margin: "0", width: "100%", height: "100%", overflow: "hidden" }}>

                                                    <Image priority={true} width={200} height={200} src="/images/single-project/8.jpg" alt="" />
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