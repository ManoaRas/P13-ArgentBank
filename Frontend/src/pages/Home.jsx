import banner from '../assets/images/banktree.png'
import chat from '../assets/icons/chat.png'
import money from '../assets/icons/money.png'
import security from '../assets/icons/security.png'

import { Features } from '../components/Features'

export function Home() {
  return (
    <main className="main">
      <div className="home">
        <img alt="Argent Bank tree" src={banner} className='home__banner' />

        <section className="home__content">
          <h2 className="sr-only">Promoted Content</h2>
					<p className="home__content__subtitle">No fees.</p>
					<p className="home__content__subtitle">No minimum deposit.</p>
					<p className="home__content__subtitle">High interest rates.</p>
					<p className="home__content__text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>

      <section className="features">
        <h2 className="sr-only">Features</h2>

				<Features title="You are our #1 priority" img={chat} alt="Chat icon">
          Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.
        </Features>

				<Features title="More savings means higher rates" img={money} alt="Money icon">
          The more you save with us, the higher your interest rate will be!
        </Features>

				<Features title="Security you can trust" img={security} alt="Security icon">
          We use top of the line encryption to make sure your data and money is always safe.
        </Features>
      </section>
    </main>
  )
}
