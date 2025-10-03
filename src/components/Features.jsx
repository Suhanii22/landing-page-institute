import React from 'react'
import all from '../assets/all.webp'



const Features = () => {
  return (
    <>


      <div className=' bg-gray-100 rounded-4xl w-[90%] pt-14 pb-20 mt-[100px] flex flex-col p-8 m-auto'>
        <div className=' mb-20 text-2xl font-bold text-center '>Courses Offered</div>
        <div className='flex gap-14 w-[100%]  overflow-x-auto  flex-nowrap hide-scrollbar'>


          <div className='flex gap-6 w-full overflow-x-auto flex-nowrap py-6 hide-scrollbar px-4'>
            <div className='rounded-3xl w-[220px] p-6 border border-gray-200 bg-white shadow-md hover:shadow-xl transition-all flex-shrink-0 flex flex-col justify-between cursor-pointer'>
              <span className='font-semibold text-lg'>IELTS General Training</span>
              <span className='pt-3 text-blue-500 font-medium hover:underline'>Know More</span>
            </div>

            <div className='rounded-3xl w-[220px] p-6 border border-gray-200 bg-white shadow-md hover:shadow-xl transition-all flex-shrink-0 flex flex-col justify-between cursor-pointer'>
              <span className='font-semibold text-lg'>IELTS Academic Training</span>
              <span className='pt-3 text-blue-500 font-medium hover:underline'>Know More</span>
            </div>

            <div className='rounded-3xl w-[220px] p-6 border border-gray-200 bg-white shadow-md hover:shadow-xl transition-all flex-shrink-0 flex flex-col justify-between cursor-pointer'>
              <span className='font-semibold text-lg'>Spoken English & Communication Skills</span>
              <span className='pt-3 text-blue-500 font-medium hover:underline'>Know More</span>
            </div>

            <div className='rounded-3xl w-[220px] p-6 border border-gray-200 bg-white shadow-md hover:shadow-xl transition-all flex-shrink-0 flex flex-col justify-between cursor-pointer'>
              <span className='font-semibold text-lg'>Mock Tests & Practice Sessions</span>
              <span className='pt-3 text-blue-500 font-medium hover:underline'>Know More</span>
            </div>

            <div className='rounded-3xl w-[220px] p-6 border border-gray-200 bg-white shadow-md hover:shadow-xl transition-all flex-shrink-0 flex flex-col justify-between cursor-pointer'>
              <span className='font-semibold text-lg'>Personalized Coaching</span>
              <span className='pt-3 text-blue-500 font-medium hover:underline'>Know More</span>
            </div>
          </div>

        </div>
      </div>








      <div>
        <img className='md:max-w-[700px] m-auto rounded-tl-[80px]' src={all} alt="" />
      </div>



      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">

        <div className="border rounded-xl p-6 shadow hover:shadow-lg transition duration-300">
          <div className="text-4xl mb-4">🎓</div>
          <h3 className="text-xl font-semibold mb-2">Experienced Faculty</h3>
          <p className="text-gray-600 text-sm">
            Certified trainers with years of experience helping students achieve Band 7+.
          </p>
        </div>


        <div className="border rounded-xl p-6 shadow hover:shadow-lg transition duration-300">
          <div className="text-4xl mb-4">📈</div>
          <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
          <p className="text-gray-600 text-sm">
            Hundreds of students successfully scoring 7.5+ in IELTS.
          </p>
        </div>


        <div className="border rounded-xl p-6 shadow hover:shadow-lg transition duration-300">
          <div className="text-4xl mb-4">⏰</div>
          <h3 className="text-xl font-semibold mb-2">Flexible Learning</h3>
          <p className="text-gray-600 text-sm">
            Online, offline, weekday & weekend batches to suit your schedule.
          </p>
        </div>


        <div className="border rounded-xl p-6 shadow hover:shadow-lg transition duration-300">
          <div className="text-4xl mb-4">📝</div>
          <h3 className="text-xl font-semibold mb-2">Mock Tests</h3>
          <p className="text-gray-600 text-sm">
            Real exam-like practice to boost confidence and time management skills.
          </p>
        </div>


        <div className="border rounded-xl p-6 shadow hover:shadow-lg transition duration-300">
          <div className="text-4xl mb-4">📚</div>
          <h3 className="text-xl font-semibold mb-2">Updated Study Material</h3>
          <p className="text-gray-600 text-sm">
            Latest IELTS material and strategies, regularly updated for best results.
          </p>
        </div>


        <div className="border rounded-xl p-6 shadow hover:shadow-lg transition duration-300">
          <div className="text-4xl mb-4">💡</div>
          <h3 className="text-xl font-semibold mb-2">Personalized Coaching</h3>
          <p className="text-gray-600 text-sm">
            Focus on your weak areas with one-on-one guidance from experts.
          </p>
        </div>
      </div>



    </>

  )
}

export default Features