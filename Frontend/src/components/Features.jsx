export function Features({ img, alt, title, children }) {
  return (
    <div className="feature-item">
      <img className="feature-icon" src={img} alt={alt} />
      <h3 className="feature-item-title">{title}</h3>
      <p>{children}</p>
    </div>
  )
}
