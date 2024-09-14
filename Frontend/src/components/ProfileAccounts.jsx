import { ProfileAccountTransaction } from './ProfileAccountTransaction'

export function ProfileAccounts() {
  return (
    <>
      <h2 className="sr-only">Accounts</h2>

      <ProfileAccountTransaction amount="$2,082.79" balance="Available Balance">
        Argent Bank Checking (x8349)
      </ProfileAccountTransaction>

      <ProfileAccountTransaction amount="$10,928.42" balance="Available Balance">
        Argent Bank Savings (x6712)
      </ProfileAccountTransaction>

      <ProfileAccountTransaction amount="$184.30" balance="Current Balance">
        Argent Bank Credit Card (x8349)
      </ProfileAccountTransaction>
    </>
  )
}
