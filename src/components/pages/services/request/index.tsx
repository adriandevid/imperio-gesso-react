"use client";

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createRequest } from "@portfolio/app/actions/services/request";
import useForm from "@portfolio/hooks/form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";

export class CreateServiceRequest {
    serviceId: number = 0;
    name: string = ""
    email: string = ""
    phone: string = ""
}

export default function ServiceRequestClient({ service }: { service: any }) {
    const { validateForm, form, changeFieldForm, errors } = useForm(new CreateServiceRequest());

    const [state, formAction] = useFormState(createRequest, {} as any);
    const { pending } = useFormStatus();
    const router = useRouter();

    console.log(state);

    useEffect(function () {
        console.log(state)
    }, [state])
    
    useEffect(function () {
        if(pending) {
            // _setUseLoading(true);
        } else {
            // _setUseLoading(false);
        }
    }, [pending])

    return (
        <form action={formAction} method="POST">
            <div className="flex flex-wrap">
                <div className="flex flex-col gap-2 w-full">
                    <div className="w-full mb-4">
                        <label htmlFor="link">Serviço: </label>
                        <input className="mb-0" type="text" name="link" defaultValue={service.title} disabled></input>
                    </div>
                </div>
                <div className="w-full mb-4">
                    <label htmlFor="nome">Nome: </label>
                    <input className="mb-0" name="nome" type="text" placeholder="Seu nome" onChange={(e) => changeFieldForm("name", e.target.value)} />
                    {errors.name && (<label className={`border-red-400 text-red-400 text-[12px]  visible pt-0`}>{errors.name.message}</label>)}
                </div>
                <div className="flex gap-2 w-full mb-4">
                    <div className="w-full">
                        <label htmlFor="email">Email: </label>
                        <input name="email" className="flex-1 mb-0" type="text" placeholder="E-Mail" onChange={(e) => changeFieldForm("email", e.target.value)} />
                        {errors.email && (<label className={`border-red-400 text-red-400 text-[12px]  visible pt-0`}>{errors.email.message}</label>)}
                    </div>
                    <div className="w-full">
                        <label htmlFor="telefone">Telefone: </label>
                        <input name="telefone" className="flex-1 mb-0" type="text" placeholder="Telefone" onChange={(e) => changeFieldForm("phone", e.target.value)} />
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
                    <button className="dark-btn float-right" type="submit" onClick={(e: any) => {
                        e.preventDefault();

                        form.serviceId = service.id;

                        if (validateForm()) {
                            document.forms[0].requestSubmit();
                        }
                    }}>
                        <span className="show-btn">Solicitar</span>
                        <span className="hide-btn">Solicitar</span>
                    </button>
                </div>
            </div>
        </form>
    )
}