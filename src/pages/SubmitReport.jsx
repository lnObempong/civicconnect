export default function SubmitReport() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Submit a Report</h2>
      <form className="flex flex-col w-96">
        <input className="border px-3 py-2 mb-4" type="text" placeholder="Title" />
        <textarea className="border px-3 py-2 mb-4" placeholder="Description"></textarea>
        <input className="border px-3 py-2 mb-4" type="text" placeholder="Location" />
        <button className="bg-green-500 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
}
