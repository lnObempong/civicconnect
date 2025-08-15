export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-gray-700 mb-4">
          Have any questions, suggestions, or feedback? We'd love to hear from you!
        </p>
        <div className="text-gray-700 space-y-2">
          <p><strong>Email:</strong> <a href="mailto:leonardobempng@gmail.com" className="text-green-600">leonardobempng@gmail.com</a></p>
          <p><strong>Phone:</strong> <a href="tel:+233246446344" className="text-green-600">+233 246 446 344</a></p>
        </div>
      </div>
    </div>
  );
}
