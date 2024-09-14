export function ProfileAccountTransaction({ amount, balance, children }) {
  return (
    <section className="profile--account">
      <div className="profile--account--content">
        <h3 className="profile--account__title">{children}</h3>
        <p className="profile--account__amount">{amount}</p>
        <p className="profile--account__balance">{balance}</p>
      </div>

      <div className="profile--account--content cta">
        <button className="profile--account__button">View transactions</button>
      </div>
    </section>
  )
}
