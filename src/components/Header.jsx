
import Food2 from "../assets/imgs/food2.jpg"
function Header() {
return  <header className="main_header">
<div className="text-container">
  <h1 className="header-title">
    Look for <span>Banger</span> Food
  </h1>
  <p className="header-description">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, saepe? Fuga, unde tempora? Aliquam voluptatibus dignissimos a repellat dicta sed.
  </p>
  <div className="header-input-container">
    <input type="text" placeholder='Find a recipe ...' />
    <button>
      Search
    </button>
  </div>
</div>
<div>
  <img src={Food2} alt="" className='main_img' />
</div>
</header>
}

export default Header