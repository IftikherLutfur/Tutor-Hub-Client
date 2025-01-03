import axios from "axios";
import { useState , useEffect} from "react";
const CustomerReviews = () => {


	const [review , setReview] = useState([]);

	useEffect(() => {
		axios.get('https://tutor-hub-server.vercel.app/getTutorReview')
		.then(res=>{
			setReview(res.data)
		})
	}, []);


	return (
		<div className="mx-5 my-5">
			<h1 className="text-center text-2xl mb-5 font-semibold ">What do users say about our services?</h1>

			<div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
				
				{review.map(rev=>
				<div key={rev._id} className="container flex flex-col w-full rounded-lg border-2 max-w-lg p-6 mx-auto  dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
					<div>
						<div>
						<h1 className="text-xl font-semibold text-center border-b-2 pb-2">{rev.name}</h1>
						</div>
						<div className="flex justify-between">
							<p>{rev.date}</p>
							<p>{rev.time}</p>
						</div>
					</div>
					<div className="flex gap-5 justify-between py-2">
						
					<div className="space-y-2 text-sm dark:text-gray-600">
						<p>{rev.message}.</p>
					</div>
						<div className="flex items-center space-x-2 dark:text-yellow-700">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
								<path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
							</svg>
							<span className="text-xl font-bold">4.5</span>
						</div>

					</div>
				</div>

				)}


			</div>

		</div>
	);
};

export default CustomerReviews;