import mapIcon from '../assets/map-outline.svg';

function TravelCard() {
  return (
    <div className='h-auto border border-gray-200 rounded-xl w-full md:max-w-sm overflow-hidden
    transition-shadow hover:shadow-lg hover:-translate-y-1 cursor-pointer'>
      <div className="w-full">
        <img className='w-full h-52 sm:h-60 lg:h-72 object-cover rounded-t-xl' src="https://7d9e88a8-f178-4098-bea5-48d960920605.selcdn.net/6311e6de-da61-4882-ad6b-4f1c7f068fed/" alt="" />
      </div>

      <div className="p-4 flex flex-col gap-4 h-full">
        <div className="">
          <h3 className='font-bold line-clamp-1'>Title</h3>

          <p className='text-gray-400 text-xs'>28th Aug 2025</p>
        </div>

        <p className='text-sm text-gray-700 line-clamp-3'>content, story, description content, story, description content, story, description content, story, description content, story, description content, story, description</p>

        <div className="inline-flex items-center gap-1 bg-cyan-100 py-1 px-2 rounded-md w-max">
          <img className='w-5 h-auto' src={mapIcon} alt="mapIcon" />

          <p className='text-sm text-cyan-600'>Paris</p>
        </div>
      </div>
    </div>
  )
}

export default TravelCard
