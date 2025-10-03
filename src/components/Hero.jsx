
import ei from '../assets/ei.jpg'

const Hero = () => {
   return (
      <>

         <div className="bg-white flex flex-col md:flex-row items-center justify-between py-20 px-6 md:px-20">
            <div className="md:w-1/2 mb-10 md:mb-0">
               <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                  Your Path to  IELTS Success Starts Here
               </h1>
               <p className="text-lg md:text-xl text-blue-700 mb-6">
                  Practice anytime, track your progress, and get real-time feedback from experts.
               </p>
               <button className="bg-blue-400 text-white px-8 py-3 rounded-lg hover:bg-blue-500 transition">
                  Book Free Demo
               </button>
            </div>
            <div className="md:w-1/2">
               <img src={ei} alt="IELTS classroom" className="w-full rounded-xl shadow-lg" />
            </div>
         </div>

      </>
   )
}

export default Hero