const people = [
    {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
    // More people...
]

export default function Example() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <p className="mt-2 max-w-lg text-pretty text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
                Company's Team
            </p>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                <ul
                    role="list"
                    className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
                >
                    {people.map((person) => (
                        <li key={person.name}>
                            <img alt="" src={person.imageUrl} className="mx-auto size-24 rounded-full" />
                            <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-gray-900">{person.name}</h3>
                            <p className="text-sm/6 text-gray-600">{person.role}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
