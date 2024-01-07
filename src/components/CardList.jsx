import Card from "./Card";

const recipes = [
    {
        id:1,
        name:"Shawarma",
        img:"food",
        tag:"Romantic Dinner",
        numberOfMinutes: 20
    },
    {
        id:2,
        name:"Family Dish",
        img:"food2",
        tag:"Family",
        numberOfMinutes: 150
    },
    {
        id:3,
        name:"Fish",
        img:"food",
        tag:"Fish",
        numberOfMinutes: 40
    },
    {
        id:4,
        name:"Kilimanjaro",
        img:"food2",
        tag:"Family",
        numberOfMinutes: 150
    }
]
export default function CardList(){
    return  <section className="cards">
    { recipes.map(recipe => (
        <Card key={recipe.id} recipe={recipe}/>
    ))}
  </section>
}