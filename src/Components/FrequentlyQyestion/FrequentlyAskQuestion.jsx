
const FrequentlyAskQuestion = () => {
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
            
            <h2 className="text-5xl font-bold text-center ">FAQ</h2>
            <p className="text-center text-xl mb-5">Frequently Asked Question</p>
            <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300">
            <details>
                    <summary className="py-2 outline-none cursor-pointer focus:underline">What is Tutor Hub?</summary>
                    <div className="px-4 pb-4">
                        <p>Tutor Hub is an online platform that connects students with qualified tutors for personalized learning sessions across a wide range of subjects. It offers live one-on-one tutoring, group sessions, and study materials.</p>
                    </div>
                </details>
                <details>
                    <summary className="py-2 outline-none cursor-pointer focus:underline">How can I find a tutor on Tutor Hub?</summary>
                    <div className="px-4 pb-4">
                        <p>You can find a tutor by browsing the subject categories, using the search bar to filter by expertise, or viewing tutor profiles to see their qualifications, ratings, and availability.</p>
                    </div>
                </details>
                <details>
                    <summary className="py-2 outline-none cursor-pointer focus:underline">Is there a free trial or demo session available?</summary>
                    <div className="px-4 pb-4">
                        <p>Yes, many tutors on Tutor Hub offer a free trial or demo session to help students assess whether their teaching style fits their needs.

</p>
                    </div>
                </details>
                <details>
                    <summary className="py-2 outline-none cursor-pointer focus:underline">Can I reschedule or cancel a booked session?</summary>
                    <div className="px-4 pb-4">
                        <p>Yes, sessions can usually be rescheduled or canceled, but this depends on the tutor’s policy. It’s recommended to notify the tutor at least 24 hours in advance to avoid penalties or fees.

</p>
                    </div>
                </details>
                
            </div>
        </div>
    </section>
    );
};

export default FrequentlyAskQuestion;