


const Buttonlist = () => {
  const list = ["All",'Games', 'sports', 'entertainment', 'dance', 'live shows', 'education', 'drama']
    return <div>
        {list.map(item => {
            return (
                <div className="inline-flex" >
                <h2>{item}</h2>
                </div>
            )
        })}
       
    </div>
}
export default Buttonlist;