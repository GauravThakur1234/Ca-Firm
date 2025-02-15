import React from 'react'

const People = () => {
	const team = [
        {
            avatar: "/CA.jpeg",
            name: "ChanderKant",
            title: "Chartered Accountant",
        },
		
        {
            avatar: "./ashok.jpg",
            name: "Ashok Kumar",
            title: "Founder",
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/86.jpg",
            name: "Poonam",
            title: "Co-Founder",
        },
    ]

  return (
	<section className="py-14">
	<div className="max-w-screen-xl mx-auto px-4 md:px-8">
		<div className="max-w-xl">
			<h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
				Meet our CA
			</h3>
			<p className="text-gray-600 mt-3">
				He is graguated from ICAI, and has been working in this field for more than 10 years. He has a great knowledge of tax and finance.
			</p>
		</div>
		<div className="mt-12">
			<ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
				{
					team.map((item, idx) => (
						<li key={idx} className="flex gap-4 items-center">
							<div className="flex-none w-24 h-24">
								<img
									src={item.avatar}
									className="w-full h-full rounded-full"
									alt=""
								/>
							</div>
							<div>
								<h4 className="text-gray-700 font-semibold sm:text-lg">{item.name}</h4>
								<p className="text-indigo-600">{item.title}</p>
							</div>
						</li>
					))
				}
			</ul>
		</div>
	</div>
</section>
  )
}

export default People