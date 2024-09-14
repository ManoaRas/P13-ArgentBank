export function ProfileAccountTransaction({ amount, balance, children }) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{children}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{balance}</p>
      </div>

      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  )
}
