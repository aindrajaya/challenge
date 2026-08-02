export const PostComponent = (props) => {
  //Panggil variable Props dari Komponent App yang terdapat data User
  let users = props.users;
  return(
    <ul>
      {users.map((user, id) => (
        <li className="p-4 md:w-1/3">
          <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <h2 className="text-gray-900 text-lg title-font font-medium">@{user.username}</h2>
            </div>
            <div className="flex-grow">
              <p className="leading-relaxed text-base">Name: {user.name}</p>
              <p className="leading-relaxed text-base">Email: {user.email}</p>
              <a className="mt-3 text-green-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </li>
       ))} 
    </ul>
  )
} 