export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <input
        className="border px-3 py-2 mb-4 w-64"
        type="text"
        placeholder="Username"
      />
      <input
        className="border px-3 py-2 mb-4 w-64"
        type="password"
        placeholder="Password"
      />
      <button className="bg-green-500 text-white px-4 py-2 rounded">Login</button>
    </div>
  );
}
