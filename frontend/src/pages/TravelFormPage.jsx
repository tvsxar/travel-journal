import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TravelForm from "../components/TravelForm";
import { createTravel, editTravel, fetchTravelById } from "../store/slices/travelSlice.js";
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function TravelFormPage() {
  const dispatch = useDispatch();
  const { currentTravel, travelLoading, travelError } = useSelector(state => state.travel);
  const navigate = useNavigate();

  const { id } = useParams();
  const isEditing = Boolean(id);

  const [travelData, setTravelData] = useState({
    title: '',
    story: '',
    visitedLocation: [],
    isFavourite: false,
    visitedDate: '',
    image: null
  })

  // Submit handler
  function handleSubmit(e) {
    e.preventDefault();

    // Create formData obj to send to API
    const formData = new FormData();
    formData.append('title', travelData.title);
    formData.append('story', travelData.story);
    formData.append('visitedLocation', JSON.stringify(travelData.visitedLocation));
    formData.append('isFavourite', travelData.isFavourite);
    formData.append('visitedDate', travelData.visitedDate);
    formData.append('image', travelData.image);

    if(isEditing) {
      dispatch(editTravel({travelId: id, travelData: formData}))
        .unwrap()
        .then(res => navigate('/travel/' + res._id));
    } else {
      dispatch(createTravel({travelData: formData}))
        .unwrap()
        .then(res => navigate('/travel/' + res._id));
    }
  }

  // Input handler
  function handleInput(e) {
    const { value, files, name } = e.target;

    setTravelData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }))
  }

  // Load travel if in editing mode
  useEffect(() => {
    if(isEditing) {
      if(!currentTravel || currentTravel._id !== id) {
        dispatch(fetchTravelById(id));
      } else {
        setTravelData({
        title: currentTravel.title,
        story: currentTravel.story,
        visitedLocation: currentTravel.visitedLocation,
        isFavourite: currentTravel.isFavourite,
        visitedDate: currentTravel.visitedDate,
        image: null
      })
      }

      
    }
  }, [id, dispatch, isEditing, currentTravel])

  // if travelLoading, show loading indicator
  if (travelLoading) {
    return (
      <div
        className="mx-auto flex min-h-screen items-center 
      justify-center p-4"
      >
        <p className="text-xl font-semibold text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <TravelForm
      travelError={travelError}
      travelData={travelData}
      handleInput={handleInput}
      handleSubmit={handleSubmit}
      isEditing={isEditing}
      setTravelData={setTravelData}
      />

      <Footer />
    </div>
  );
}

export default TravelFormPage;
