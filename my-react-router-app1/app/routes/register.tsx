export default function Register() {
  return (
    <div>
      <form className="flex flex-col gap-4 w-full max-w-md mx-auto">
        <input className="" type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
