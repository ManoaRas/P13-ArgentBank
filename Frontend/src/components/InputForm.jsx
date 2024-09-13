import { useField } from "formik";

export function InputForm({ label, ...props }) {
  const [field, meta] = useField(props)

  return (
    <div className="input-wrapper">
      <label htmlFor={props.name}>{label}</label>
      <input {...field} {...props} />
      {(meta.touched && meta.error)
        ? (<div className="input-error">{meta.error}</div>)
        : null
      }
    </div>
  )
}
