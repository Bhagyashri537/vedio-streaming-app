


const Buttonlist = () => {
  const list = ["All",'Games', 'sports', 'entertainment', 'dance', 'live shows', 'education', 'drama', 'movies', 'drama', 'news', 'stories','netflix', 'cricket', 'shows']
    return <div>
        {list.map(item => {
            return (
                <div className="inline-flex p-2 pt-2 " >
                <h2 className="bg-gray-200 px-2 py-1 rounded-md shadow-sm cursor-pointer">{item}</h2>
                </div>
            )
        })}
       
    </div>
}
export default Buttonlist;