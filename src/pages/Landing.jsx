export default function Landing() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to CivicConnect</h1>
      <p className="mb-6 text-lg text-gray-600">
        Report local issues and make your community better!
      </p>
      <a
        href="/login"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Get Started
      </a>
    </div>
  );
}
