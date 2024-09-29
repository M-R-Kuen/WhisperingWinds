import { ErrorMessage, Field } from "formik";
import React from "react";
import { IDataConstructor } from "../FormInterface";

const ImputForm: React.FC<IDataConstructor> = ({
  LabelText,
  FieldType,
  FieldName,
  FieldPH,
}) => {
  return (
    <div className="flex flex-col  w-full gap-1 ">
      <label className="text-lg firaRegular uppercase text-white">
        {LabelText}
      </label>

      <Field
        type={FieldType}
        name={FieldName}
        placeholder={FieldPH}
        className={`firaRegular border border-black ${
          FieldType === "file" ? "text-black" : "p-1 text-black rounded"
        }`}
      ></Field>
      <span className="font-Medium text-red-600 bg-slate/70 rounded">
        <ErrorMessage name={FieldName} />
      </span>
    </div>
  );
};

export default ImputForm;
