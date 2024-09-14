export function Features({ img, alt, title, children }) {
  return (
    <div className="features--item">
      <img className="features--item__icon" src={img} alt={alt} />
      <h3 className="features--item__title">{title}</h3>
      <p>{children}</p>
    </div>
  )
}
