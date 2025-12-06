import locationIcon from '../assets/location-outline.svg';
import heartFilledIcon from '../assets/heart.svg';
import heartIcon from '../assets/heart-outline.svg'

function TravelCard() {
  return (
    <div className='h-auto border border-gray-200 rounded-xl w-full md:max-w-sm overflow-hidden
    transition-shadow hover:shadow-lg hover:-translate-y-1 cursor-pointer'>
      <div className="w-full relative">
        <img className='w-full h-52 sm:h-60 lg:h-72 object-cover rounded-t-xl' src="https://7d9e88a8-f178-4098-bea5-48d960920605.selcdn.net/6311e6de-da61-4882-ad6b-4f1c7f068fed/" alt="" />
        <button className="absolute right-2 top-2 bg-gray-100/50 border border-gray-200 p-1 rounded-md cursor-pointer hover:scale-105">
          <img src={heartIcon} alt="like" className="w-6 h-6" />
        </button>
      </div>

      <div className="p-4 flex flex-col gap-4 h-full">
        <div className="">
          <h3 className='font-bold line-clamp-1'>Title</h3>

          <p className='text-gray-400 text-xs'>28th Aug 2025</p>
        </div>

        <p className='text-sm text-gray-700 line-clamp-3'>content, story, description 
          content, story, description content, story, description content, story, 
          description content, story, description content, story, description</p>

        <div className="flex flex-wrap gap-2">
          <div className="inline-flex items-center gap-1 bg-cyan-100 py-1 px-2 rounded-md w-max">
            <img className='w-5 h-auto' src={locationIcon} alt="mapIcon" />

            <p className='text-sm text-cyan-600'>Paris</p>
          </div>

          <div className="inline-flex items-center gap-1 bg-cyan-100 py-1 px-2 rounded-md w-max">
            <img className='w-5 h-auto' src={locationIcon} alt="mapIcon" />

            <p className='text-sm text-cyan-600'>Paris</p>
          </div>

          <div className="inline-flex items-center gap-1 bg-cyan-100 py-1 px-2 rounded-md w-max">
            <img className='w-5 h-auto' src={locationIcon} alt="mapIcon" />

            <p className='text-sm text-cyan-600'>Paris</p>
          </div>

          <div className="inline-flex items-center gap-1 bg-cyan-100 py-1 px-2 rounded-md w-max">
            <img className='w-5 h-auto' src={locationIcon} alt="mapIcon" />

            <p className='text-sm text-cyan-600'>Paris</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TravelCard
