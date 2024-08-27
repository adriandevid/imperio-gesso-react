import { Dispatch, SetStateAction, useEffect, useState } from "react";

export interface IFormResult<TForm> {
    form: TForm,
    isSubmit: boolean,
    errors: any,
    _setIsSubmit: Dispatch<SetStateAction<boolean>>,
    _setForm: Dispatch<SetStateAction<TForm>>,
    validateForm: () => boolean,
    resetForm: () => void,
    changeFieldForm: (name: string, value: any) => void
}

export default function useForm<TForm>(form_data: TForm) : IFormResult<TForm> {
    const [form, _setForm] = useState<TForm | any>(form_data);
    const [errors, setErrors] = useState<any>({});

    const [isSubmit, _setIsSubmit] = useState<boolean>(false);

    const validateField = (name: string) => {
        Object.entries(form).forEach(element => {
            if(name == element[0]) {
                if (element[1] == undefined || element[1] == "") {
                    const key = element[0];
                    
                    errors[key] = {
                        message: "Campo requerido!"
                    };
                } else {
                    const key = element[0];
                    errors[key] = undefined;
                }
                
                return;
            }
        });

        setErrors({
            ...errors
        })
    }

    const validateForm  = () => {
        var isSubmitValid = true;
        
        Object.entries(form).forEach(element => {
            if (element[1] == undefined || element[1] == "") {
                const key = element[0];

                form[key] = "";
                isSubmitValid = false;

                errors[key] = {
                    message: "Campo requerido!"
                };
            } else {
                const key = element[0];
                errors[key] = undefined;
            }
        });

        setErrors({
            ...errors
        })

        _setForm({
            ...form
        })

        return isSubmitValid;
    }

    const resetForm = () => {
        var formForFormat: any = form;

        Object.keys(form).filter(function (key) {
            formForFormat[key] = undefined;
        })
        _setForm({
            ...formForFormat
        });
    }

    const changeFieldForm = (name: string, value: any) => {
        form[name] = value;
        
        _setForm({
            ...form
        })

        validateField(name);
        
        _setIsSubmit(false);
    }

    return {
        form,
        errors,
        isSubmit,
        _setIsSubmit,
        validateForm,
        changeFieldForm,
        _setForm,
        resetForm
    }
}