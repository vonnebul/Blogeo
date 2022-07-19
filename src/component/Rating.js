function Rating(props) {
    const {ratingValue, value} = props
    const range = [1,2,3,4,5]
    const type = ratingValue === "star" ? '★' : '😂'


    return <div>
            {range.map((element)=>
             value >= element ? <span key={element.toString()}> {type} </span> : null
            )}
    </div>    }
    
export default Rating