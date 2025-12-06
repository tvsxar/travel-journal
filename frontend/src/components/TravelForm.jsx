import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';

function TravelForm({travelData, handleInput, handleSubmit, isEditing, travelError, setTravelData}) {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  function handleDragOver(e) {
    e.preventDefault();
    setIsDragging(true);
  }

  function handleDragLeave() {
    setIsDragging(false);
  }

  function handleDrop(e) {
    e.preventDefault();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files[0];
    
    if(droppedFile) {
      setTravelData(prev => ({
        ...prev,
        image: droppedFile
      }))
    }
  }

  function openFileInput() {
    fileInputRef.current.click();
  }

  return (
    <div className="flex-1 py-12 px-4 sm:px-12 lg:px-25">
      <button onClick={() => navigate(-1)} 
      className="mb-8 text-gray-600 hover:text-gray-900 text-sm font-medium 
      inline-flex items-center gap-2 cursor-pointer">
        <span className="text-xl">←</span> Back
      </button>

      <h2 className="text-3xl font-bold mb-8 text-gray-900">
        {isEditing ? "Edit Travel Story" : "Add Travel Story"}
      </h2>

      <form onSubmit={handleSubmit}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Title */}
        <div className="flex flex-col gap-2">
          <label className="font-medium text-sm text-gray-700">Title</label>
          <input
            placeholder="Trip to France"
            value={travelData.title}
            name='title'
            onChange={handleInput}
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-cyan-400 outline-none"
            required
          />
        </div>

        {/* Date */}
        <div className="flex flex-col gap-2">
          <label className="font-medium text-sm text-gray-700">Date</label>
          <input
            type="date"
            name='visitedDate'
            value={travelData.visitedDate}
            onChange={handleInput}
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-cyan-400 outline-none"
            required
          />
        </div>

        {/* Place */}
        <div className="flex flex-col gap-2 lg:col-span-2">
          <label className="font-medium text-sm text-gray-700">Place</label>
          <input
            placeholder="Paris, Marseille, Strasbourg, etc."
            name='visitedLocation'
            value={travelData.visitedLocation}
            onChange={handleInput}
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-cyan-400 outline-none"
            required
          />
        </div>

        {/* Story */}
        <div className="flex flex-col gap-2 lg:col-span-2">
          <label className="font-medium text-sm text-gray-700">
            Story
          </label>
          <textarea
            rows="6"
            placeholder="Share your experience…"
            name='story'
            value={travelData.story}
            onChange={handleInput}
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-cyan-400 outline-none resize-none"
            required
          ></textarea>
        </div>

        {/* Drag & Drop Upload */}
        <div className="lg:col-span-2">
          <label className="font-medium text-sm text-gray-700 mb-2 block">
            Photo Upload
          </label>

          <div
            onClick={openFileInput}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-xl p-10 text-center transition cursor-pointer
            ${isDragging ? "border-cyan-400 bg-cyan-50" : "border-gray-300 hover:border-cyan-400"}`}
          >
            <p className="text-gray-500">
              {travelData.image ? "1 file selected" : "Drag & Drop or Click to Upload Photo"}
            </p>
          </div>

          <input 
          name="image" 
          type="file" 
          accept="image/*" 
          className="hidden" 
          required
          ref={fileInputRef}
          onChange={handleInput} />
        </div>

        {/* Submit */}
        <div className="lg:col-span-2 flex justify-end">
          <button
            type="submit"
            className="bg-cyan-600 hover:bg-cyan-700 text-white 
                  py-3 px-8 rounded-xl font-medium transition"
          >
            Save Travel
          </button>
        </div>
      </form>
    </div>
  );
}

export default TravelForm;
