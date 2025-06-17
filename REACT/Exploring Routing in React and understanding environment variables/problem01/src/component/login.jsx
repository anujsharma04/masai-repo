export default function Login() {
  return (
    <>
      <div>
        <h2 className="text-xl font-semibold">Login</h2>
        <form className="space-y-2 mt-4">
          <input
            type="text"
            placeholder="Username"
            className="border p-2 w-full"
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 w-full"
          />
          <button className="bg-blue-500 text-white p-2 rounded">Log In</button>
        </form>
      </div>
    </>
  );
}
