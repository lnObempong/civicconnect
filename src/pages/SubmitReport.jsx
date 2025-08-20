import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Upload, MapPin, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MapSelector from "../components/MapSelector";

export default function SubmitReport({ onSubmit }) {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [region, setRegion] = useState("");
  const [photo, setPhoto] = useState(null);
  const [location, setLocation] = useState({ lat: null, lng: null, address: "" });
  const [submitted, setSubmitted] = useState(false);

  const regions = [
    "Greater Accra", "Ashanti", "Western", "Western North", "Central",
    "Eastern", "Volta", "Oti", "Northern", "Savannah", "North East",
    "Upper East", "Upper West", "Bono", "Bono East", "Ahafo"
  ];

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) setPhoto(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!region) return alert("Please select a region.");
    if (!location.lat || !location.lng) return alert("Please select a location on the map.");

    const report = {
      title,
      description,
      category,
      region,
      location,
      photo,
      date: new Date().toLocaleString()
    };

    onSubmit(report);
    setSubmitted(true);
    setTimeout(() => navigate("/dashboard"), 2000);
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const stepVariants = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -100, opacity: 0 }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <button
        onClick={() => navigate("/dashboard")}
        className="flex items-center gap-2 text-yellow-900 hover:text-yellow-700 mb-4"
      >
        <ArrowLeft size={18} /> Back to Dashboard
      </button>

      <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-2xl p-6 sm:p-8 relative overflow-hidden">
        <h1 className="text-3xl font-bold text-yellow-900 mb-2 text-center">
          Submit a Report
        </h1>
        <p className="text-gray-500 text-center mb-6">
          Help us improve your community by reporting issues.
        </p>

        {/* Progress Indicator */}
        <div className="flex justify-center mb-6">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`w-3 h-3 rounded-full mx-2 ${
                step === s ? "bg-yellow-900" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>

        {submitted ? (
          <div className="text-center py-10">
            <CheckCircle className="mx-auto text-green-600 mb-4" size={50} />
            <p className="text-lg font-semibold text-green-700">
              Report submitted successfully!
            </p>
            <p className="text-gray-500">Redirecting to dashboard...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="relative">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  variants={stepVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.4 }}
                  className="space-y-4"
                >
                  <input
                    type="text"
                    placeholder="Report Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-700"
                    required
                  />

                  <textarea
                    placeholder="Describe the issue..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-700"
                    rows="4"
                    required
                  />

                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-yellow-900 text-white px-6 py-3 rounded-lg w-full font-semibold hover:bg-yellow-700 transition"
                  >
                    Next
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  variants={stepVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.4 }}
                  className="space-y-4"
                >
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-700"
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="security">Security/crime</option>
                    <option value="sanitation">Sanitation</option>
                    <option value="electricity">Electricity</option>
                    <option value="pothole">Pothole</option>
                    <option value="education">Education/School</option>
                    <option value="health">Health</option>
                    <option value="environment">Environment</option>
                    <option value="water">Water</option>
                    <option value="galamsey">Galamsey</option>
                    <option value="other">Any Other</option>
                  </select>

                  <select
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-700"
                    required
                  >
                    <option value="">Select Region</option>
                    {regions.map((r, i) => (
                      <option key={i} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>

                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="bg-gray-300 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-400 transition"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-yellow-900 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition"
                    >
                      Next
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  variants={stepVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  {/* Photo Upload */}
                  <div className="border rounded-lg p-4 text-center">
                    <label className="block mb-2 font-semibold text-gray-700">
                      Upload a Photo (optional)
                    </label>
                    <div className="flex flex-col items-center">
                      <Upload className="text-yellow-800 mb-2" size={24} />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoChange}
                        className="hidden"
                        id="photo-upload"
                      />
                      <label
                        htmlFor="photo-upload"
                        className="cursor-pointer bg-yellow-900 text-white px-4 py-2 rounded-md hover:bg-yellow-700"
                      >
                        Choose File
                      </label>
                      {photo && (
                        <p className="text-sm text-green-600 mt-2">
                          Selected: {photo.name}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="bg-gray-300 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-400 transition"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-yellow-900 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition"
                    >
                      Next
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="step4"
                  variants={stepVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  {region ? (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-700 font-medium">
                        <MapPin size={18} /> Select location on the map
                      </div>
                      <div className="w-full h-64 sm:h-80 border rounded-lg overflow-hidden">
                        <MapSelector onLocationSelect={setLocation} selectedRegion={region} />
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-500 text-sm">Please select a region to load the map.</p>
                  )}

                  {location.address && (
                    <p className="text-gray-700 font-medium">
                      Selected Address: {location.address}
                    </p>
                  )}

                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="bg-gray-300 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-400 transition"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="bg-yellow-900 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition flex items-center gap-2"
                    >
                      <Upload size={18} /> Submit Report
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        )}
      </div>
    </div>
  );
}
