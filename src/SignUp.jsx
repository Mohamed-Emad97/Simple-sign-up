import {Formik, Field, Form, ErrorMessage} from "formik";
import * as Yup from "yup";

export default function SignUp() {
  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;  // Must Contain 1-Upper Case Letter , 1 Lower Case Letter , 1 Numeric digit 

  return (
    <>
        <main>
            <section>
                <h1 className="text-center my-2">
                    Sign Up Form
                </h1>
                <div className="d-flex align-items-center justify-content-center flex-column gap-3 mt-5">
                  <Formik
                    initialValues={{
                      firstName: ``,
                      lastName: ``,
                      email: ``,
                      password: ``,
                      confirmPassword: ``,
                    }}

                    validationSchema={
                      Yup.object({
                        firstName: Yup.string().min(2, 'Too Short!')
                        .max(50, 'Too Long!').required("Required Field"),
                        lastName: Yup.string().min(2, 'Too Short!')
                        .max(50, 'Too Long!').required("Required Field"),
                        email: Yup.string().email('Invalid email address').required('Please Enter Your Email'),
                        password: Yup.string().matches(passwordRules,{ message: "Please create a stronger password" }).required("Please Enter Your Password"),
                        confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match").required("Please Re-Entering Password"),
                      })
                    }

                    onSubmit={(values, {setSubmitting}) => {
                      document.getElementById("submited").innerHTML = `Welcome ${values.firstName} ${values.lastName}`
                      setSubmitting(false);
                    }}
                  >
                    <Form>
                      <Field className="form-control w-50 input-style" name="firstName" type="text" placeholder="First Name" />
                      <ErrorMessage component="label" className="alert alert-danger w-50" name="firstName"/>
                      <Field className="form-control w-50 input-style" name="lastName" type="text" placeholder="Last Name" />
                      <ErrorMessage component="label" className="alert alert-danger w-50" name="lastName"/>
                      <Field className="form-control w-50 input-style" name="email" type="email" placeholder="Enter Your Email" />
                      <ErrorMessage component="label" className="alert alert-danger w-50" name="email"/>
                      <Field className="form-control w-50 input-style" name="password" type="password" placeholder="Enter Your Password" />
                      <ErrorMessage component="label" className="alert alert-danger w-50" name="password"/>
                      <Field className="form-control w-50 input-style" name="confirmPassword" type="password" placeholder="Confirm Password" />
                      <ErrorMessage component="label" className="alert alert-danger w-50" name="confirmPassword"/>
                      <button type="submit" className="btn btn-light p-3 px-2 rounded-3 w-25 fw-bolder text-black-50">Sign up</button>
                    </Form>
                  </Formik>

                  <div id="submited" className="fw-bolder text-white">
                  </div>
                </div>
            </section>
        </main>
    </>
  )
}
