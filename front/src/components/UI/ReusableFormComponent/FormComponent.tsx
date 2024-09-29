"use client";
import React, { useState } from "react";
import { motion, spring } from "framer-motion";
import { Form, Formik } from "formik";
import { IFormikConstructor, IDataConstructor } from "./FormInterface";
import ImputForm from "./ImputForm/ImputForm";
import ButtonForm from "./ButtonForm/ButtonForm";
import TextArea from "./TextArea/TextArea";
import CheckboxContainer from "./CheckBoxContainer/CheckboxContainer";
import Select from "./SelectForm/Select";
import Image from "next/image";

const FormComponent: React.FC<IFormikConstructor> = ({
  iniValues,
  valiSchema,
  handlerSubmit,
  buttonsForm,
  dataContructor,
  additionalComponent,
}) => {
  const [showImage, setShowImage] = useState(false);
  const fieldsForm: IDataConstructor[] = dataContructor;

  const handleMouseEnter = () => setShowImage(true);
  const handleMouseLeave = () => setShowImage(false);

  return (
    <>
      <Formik
        initialValues={iniValues}
        validationSchema={valiSchema}
        onSubmit={handlerSubmit}
      >
        <Form className="flex flex-col items-center mx-auto p-5 w-full m-5  bg-transparent  justify-between">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 w-full ">
            {fieldsForm.length > 0 &&
              fieldsForm.map((field, i) => {
                if (field.FieldName === "productCode") {
                  return (
                    <div
                      key={i}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <ImputForm key={i} {...field} />
                      {showImage && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                          }}
                          className="absolute mt-2  rounded-lg"
                        >
                          <Image
                            src="/images/amazonid.jpeg"
                            alt="Amazon Order ID Example"
                            width={250}
                            height={250}
                            className="rounded-lg lg:h-auto lg:w-[300px]"
                          />
                        </motion.div>
                      )}
                    </div>
                  );
                } else {
                  switch (field.FieldType) {
                    case "checkboxContainer":
                      return <CheckboxContainer key={i} {...field} />;
                    case "textarea":
                      return <TextArea key={i} {...field} />;
                    case "select":
                      return (
                        <Select
                          key={i}
                          {...field}
                          selectOptions={field.selectOptions}
                        />
                      );
                    default:
                      return <ImputForm key={i} {...field} />;
                  }
                }
              })}
          </div>
          {additionalComponent && <div>{additionalComponent}</div>}

          <div className="flex gap-4 mt-4">
            {buttonsForm.map((data, i) => {
              return <ButtonForm key={i} name={data.name} type={data.type} />;
            })}
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default FormComponent;
