import { useField } from "formik";

export function CheckboxForm({ children, ...props }) {
  const [field, meta] = useField({ ...props, type: 'checkbox' })

  return (
    <div className="input-remember">
      <input {...field} {...props} type='checkbox' />
      <label>{children}</label>
      {(meta.touched && meta.error)
        ? <div className="input-error">{meta.error}</div>
        : null
      }
    </div>
  )
}
