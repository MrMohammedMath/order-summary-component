export default function OrderSummary() {
    return (
        <article className="order-summary">
            <img src="./images/illustration-hero.svg" alt="hero" className="order-summary.img" />

            <section className="order-summary.details">
                <h1 className="order-summary.details.title">Order Summary</h1>

                <p className="order-summary.details.paragraph">You can now listen to millions of songs, audiobooks, and podcasts on any
                    device anywhere you like!</p>

                <section className="order-summary.details.plan">
                    <img src="./images/icon-music.svg" alt="music" className="order-summary.details.plan.icon" />

                    <div className="order-summary.details.plan.info">
                        <h2 className="order-summary.details.plan.info.title">Annual Plan</h2>
                        <span className="order-summary.details.plan.info.price">$59.99/year</span>
                    </div>

                    <button className="order-summary.details.plan.change">Change</button>
                </section>

                <button className="order-summary.details.pay">Proceed to Payment</button>

                <button className="order-summary.details.cancel">Cancel Order</button>
            </section>
        </article>
    );
}