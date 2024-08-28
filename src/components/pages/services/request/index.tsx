"use client";

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createRequest } from "@portfolio/app/actions/services/request";
import useForm from "@portfolio/hooks/form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import Image from "next/image";
import { faArrowAltCircleLeft, faCheckCircle, faClose } from "@fortawesome/free-solid-svg-icons";

export class CreateServiceRequest {
    serviceId: number = 0;
    name: string = ""
    email: string = ""
    phone: string = ""
}

export default function ServiceRequestClient({ service }: { service: any }) {
    const isLoading = (isLoad: boolean) => {
        if (isLoad) {
            $(".preloader-wrapper").css("display", "flex");
            $(".preloader-wrapper").css("opacity", "1");
            $(".preloader-wrapper").css("visibility", "visible");
        } else {
            $(".preloader-wrapper").css("visibility", "hidden").fadeOut();

            $(".preloader-wrapper").animate({
                'opacity': '0'
            }, 600, function(){ });
        }
    }
    const { validateForm, form, changeFieldForm, errors } = useForm(new CreateServiceRequest());
    const [isVisible, setIsVisibleModal] = useState<boolean>(false);
    const [state, formAction] = useFormState(createRequest, {} as any);
    const { pending } = useFormStatus();
    const router = useRouter();

    useEffect(function () {
        if (state.id != undefined) {
            isLoading(false);
            setIsVisibleModal(true);

            setTimeout(function () {
                setIsVisibleModal(false);
            }, 5000)
        }
    }, [state])



    return (
        <form action={formAction} method="POST">
            <div className={`fixed bg-white py-[1.7rem] px-[2rem] gap-2 shadow-md top-5 left-[50%] flex items-center justify-start rounded-lg border-solid !border-b-4  !border-b-green-400 transition-all duration-1000 ease-in-out ${
            isVisible
                ? "!opacity-100 !translate-y-full"
                : "opacity-0 -translate-y-full "
            }`}>
                <Image priority={true} quality={100} width={50} height={50} src="/gifs/icons8-check.gif" alt="" style={{ opacity: "1" }} />
                <p className="!mb-0">Solicitado com sucesso!</p>
            </div>
            <div className="flex flex-wrap">
                <input name="serviceId" value={service.id} hidden />
                <div className="flex flex-col gap-2 w-full">
                    <div className="w-full mb-4">
                        <label htmlFor="link">Serviço: </label>
                        <input className="mb-0" type="text" name="link" defaultValue={service.title} disabled></input>
                    </div>
                </div>
                <div className="w-full mb-4">
                    <label htmlFor="name_people">Nome: </label>
                    <input className="mb-0" name="name_people" type="text" placeholder="Seu nome" onChange={(e) => changeFieldForm("name", e.target.value)} />
                    {errors.name && (<label className={`border-red-400 text-red-400 text-[12px]  visible pt-0`}>{errors.name.message}</label>)}
                </div>
                <div className="flex gap-2 w-full mb-4">
                    <div className="w-full">
                        <label htmlFor="email">Email: </label>
                        <input name="email" className="flex-1 mb-0" type="text" placeholder="E-Mail" onChange={(e) => changeFieldForm("email", e.target.value)} />
                        {errors.email && (<label className={`border-red-400 text-red-400 text-[12px]  visible pt-0`}>{errors.email.message}</label>)}
                    </div>
                    <div className="w-full">
                        <label htmlFor="phone">Telefone: </label>
                        <input name="phone" className="flex-1 mb-0" type="text" placeholder="Telefone" onChange={(e) => changeFieldForm("phone", e.target.value)} />
                        {errors.phone && (<label className={`border-red-400 text-red-400 text-[12px]  visible pt-0`}>{errors.phone.message}</label>)}
                    </div>
                </div>
                <div className="w-full ">
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
                    {/* <button className="dark-btn" type="button">
                        <span className="show-btn !bg-white !text-[#1F2128] flex items-center justify-center gap-2"><FontAwesomeIcon icon={faArrowAltCircleLeft} fontSize={15} /> voltar</span>
                        <span className="hide-btn !bg-white !text-[#1F2128] flex items-center justify-center gap-2"><FontAwesomeIcon icon={faArrowAltCircleLeft} fontSize={15} /> voltar</span>
                    </button> */}
                    <button className="dark-btn float-right" type="submit" onClick={(e: any) => {
                        e.preventDefault();

                        form.serviceId = service.id;

                        if (validateForm()) {
                            isLoading(true);
                            document.forms[0].requestSubmit();
                        }
                    }}>
                        <span className="show-btn flex items-center justify-center gap-2"><FontAwesomeIcon icon={faCheckCircle} fontSize={15} /> Solicitar</span>
                        <span className="hide-btn flex items-center justify-center gap-2"><FontAwesomeIcon icon={faCheckCircle} fontSize={15} /> Solicitar</span>
                    </button>
                </div>
            </div>
        </form>
    )
}