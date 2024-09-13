export function Features({ img, alt, title, text }) {
  return (
    <div className="feature-item">
      <img className="feature-icon" src={img} alt={alt} />
      <h3 className="feature-item-title">{title}</h3>
      <p>{text}</p>
    </div>
  )
}
