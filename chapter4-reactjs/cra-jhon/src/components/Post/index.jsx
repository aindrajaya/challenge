export const PostComponent = (props) => {
  //Panggil variable Props dari Komponent App yang terdapat data User
  let users = props.data;
  return(
    <ul>
      {users.map((user) => (
        <li className="p-4 md:w-1/3">
          <div className="flex flex-col h-full p-8 bg-gray-100 rounded-lg">
            <div className="flex items-center mb-3">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 text-white bg-green-500 rounded-full">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <h2 className="text-lg font-medium text-gray-900 title-font">@{user.username}</h2>
            </div>
            <div className="flex-grow">
              <p className="text-base leading-relaxed">Name: {user.name}</p>
              <p className="text-base leading-relaxed">Email: {user.email}</p>
              <a className="inline-flex items-center mt-3 text-green-500">Learn More
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