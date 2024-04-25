import * as Yup from "yup"

export const userSchema=Yup.object({
    name: Yup.string().min(3).required("Please enter Your Name"),
    email: Yup.string().email().required("Please enter your email"),
    phone: Yup.number().min(5).required("please enter your Phone Number"),
    message: Yup.string().min(3).required("Please Type Your Message"),
})