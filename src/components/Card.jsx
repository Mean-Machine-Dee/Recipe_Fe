import Food from "../assets/imgs/food.jpg"
import Food2 from "../assets/imgs/food2.jpg"
export default function Card({recipe}){
   const {img,name,tag,numberOfMinutes} = recipe
   console.log(name,tag,img)
    return (
        <div className="card">
    <img src={img == "food" ? Food : Food2} alt="" />
    <div className="card-content">
      <h3>{name}</h3>
      <div className="card-info">
      <div className="tag">
        <p>{tag}</p>
      </div>
      <p className="time -text">{numberOfMinutes}</p>
    </div>
    </div>
  </div>
    )
    
}