export function LoginPage() {
  return (
    <main>
      <h2>Login / Register</h2>
      <p>Role will be decided post-login (customer/worker/agent/admin/root admin).</p>
      <form className="card form">
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="password" />
        <button type="button">Continue</button>
      </form>
    </main>
  );
}
