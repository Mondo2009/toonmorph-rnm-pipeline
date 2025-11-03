export default function Subscribe() {
  return (
    <div className="max-w-lg mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Subscription</h1>
      <div className="card space-y-2">
        <div className="text-white/80">Plan</div>
        <div className="text-xl font-bold">$10 / month</div>
        <div className="text-white/70 text-sm">Includes 30 minutes of renders per month.</div>
        <button className="tm-button" type="button" onClick={()=>alert('Stripe not wired in demo')}>Checkout</button>
      </div>
    </div>
  );
}
