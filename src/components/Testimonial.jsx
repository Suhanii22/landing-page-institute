import React from 'react'

const Testimonial = () => {
    return (
        <section class=" bg-gray-100 py-12">
            <div class="max-w-6xl mx-auto text-center">
                <h2 class="text-3xl font-bold mb-8">What Our Students Say</h2>
                <div class="  flex flex-col md:flex-row gap-6 justify-center items-center">


                    <div class="bg-white p-6 rounded-xl shadow-md w-80">
                        <p class="text-gray-700 mb-4">
                            "Thanks to this course, I improved my IELTS score from 6.0 to 7.5! The trainers are amazing."
                        </p>
                        <h3 class="font-semibold">– Priya S.</h3>
                        <span class="text-sm text-gray-500">India</span>
                    </div>


                    <div class="bg-white p-6 rounded-xl shadow-md w-80">
                        <p class="text-gray-700 mb-4">
                            "The practice tests and feedback helped me feel confident on exam day. Highly recommended!"
                        </p>
                        <h3 class="font-semibold">– Ahmed K.</h3>
                        <span class="text-sm text-gray-500">UAE</span>
                    </div>

                    <div class="bg-white p-6 rounded-xl shadow-md w-80">
                        <p class="text-gray-700 mb-4">
                            "Great teaching methods! The tips and tricks made a big difference in my writing and speaking."
                        </p>
                        <h3 class="font-semibold">– Maria L.</h3>
                        <span class="text-sm text-gray-500">UK</span>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Testimonial