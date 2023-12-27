"use client";
import { Formik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import style from "./_submit.module.scss";
import boy from "@/../../public/images/boy.jpg";
import { useState } from "react";

const Submit = () => {
  return (
    <section className={style.submit}>
      <div className="container">
        <h3>Contact Us</h3>
        <div className="row">
          <div className="col-md-6 col-lg-5">
            <div className={style.submittext}>
              {/* <form action="">
                <div className={style.input}>
                  <input type="text" placeholder="Name" />
                </div>
                <div className={style.input}>
                  <input type="text" placeholder="Phone Number*" />
                </div>
                <div className={style.input}>
                  <input type="text" placeholder="E-mail*" />
                </div>
                <div className={style.input}>
                  <input type="text" placeholder="Interested In" />
                </div>
                <div className={style.input}>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Message*"
                  ></textarea>
                </div>
                <button type="submit">
                  Send Email{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="9"
                    viewBox="0 0 18 9"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.115234 4.62476C0.115234 4.34861 0.339092 4.12476 0.615234 4.12476L16.6152 4.12476C16.8914 4.12476 17.1152 4.34861 17.1152 4.62476C17.1152 4.9009 16.8914 5.12476 16.6152 5.12476L0.615234 5.12476C0.339092 5.12476 0.115234 4.9009 0.115234 4.62476Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.7617 0.771202C12.9569 0.57594 13.2735 0.57594 13.4688 0.771202L17.3223 4.62476L13.4688 8.47831C13.2735 8.67357 12.9569 8.67357 12.7617 8.47831C12.5664 8.28305 12.5664 7.96647 12.7617 7.7712L15.9081 4.62476L12.7617 1.47831C12.5664 1.28305 12.5664 0.966465 12.7617 0.771202Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </form>
          */}

              <Formik
                initialValues={{
                  name: "",
                  email: "",
                }}
                validationSchema={Yup.object({
                  name: Yup.string().required("Zdes vse xuevo"),
                  email: Yup.string()
                    .email()
                    .required("nelza tak ostavit email"),
                })}

                onSubmit={(values, {resetForm, setSubmitting}) => {
                  console.log(values);
                  setTimeout(() => {
                    resetForm();
                    setSubmitting(false);
                  }, 2000)
                }}
              >
                {({
                  values,
                  errors,
                  handleChange,
                  handleSubmit,
                  handleReset,
                  dirty,
                  touched,
                  isSubmitting
                }) => {
                  return(
                    <form onSubmit={handleSubmit}> 
                    <div className={style.input}>
                      <input
                        id="name"
                        type="text"
                        placeholder="Name"
                        value={values.name}
                        onChange={handleChange}
                      />
                      {
                        errors.name && touched.name && (
                          <div className={style.feedback}>
                            {errors.name}
                          </div>
                        )
                      }
                    </div>
                    <div className={style.input}>
                      <input
                        id="email"
                        type="email"
                        placeholder="enter your email"
                        value={values.email}
                        onChange={handleChange}
                      />
                      {
                        errors.email && touched.email && (
                          <div className={style.feedback}>
                            {errors.email}
                          </div>
                        )
                      }
                    </div>
                    <button type="submit" >
                      Send Email{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="9"
                        viewBox="0 0 18 9"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0.115234 4.62476C0.115234 4.34861 0.339092 4.12476 0.615234 4.12476L16.6152 4.12476C16.8914 4.12476 17.1152 4.34861 17.1152 4.62476C17.1152 4.9009 16.8914 5.12476 16.6152 5.12476L0.615234 5.12476C0.339092 5.12476 0.115234 4.9009 0.115234 4.62476Z"
                          fill="white"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.7617 0.771202C12.9569 0.57594 13.2735 0.57594 13.4688 0.771202L17.3223 4.62476L13.4688 8.47831C13.2735 8.67357 12.9569 8.67357 12.7617 8.47831C12.5664 8.28305 12.5664 7.96647 12.7617 7.7712L15.9081 4.62476L12.7617 1.47831C12.5664 1.28305 12.5664 0.966465 12.7617 0.771202Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </form>
                  )
                }}
              </Formik>
            </div>
          </div>
          <div className="col-md-6  col-lg-7 d-none d-md-block">
            <div className={style.image}>
              <Image src={boy} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Submit;
