import './Settings.css'
import { RiSettings3Fill } from "react-icons/ri";
const Settings = () => {
  return (
      <>
        <div className="settings">
          <div className="icon">
            <span><RiSettings3Fill/></span>
          </div>
          <h3 data-lang="chlang">Change the language</h3>
          <div className="languages">
            <span data-change="ar" >العربية</span>
            <span data-change="en"  className="active" >English</span>
            <span data-change="fr" >Français</span>
          </div>
          <h3 data-lang="theme" >switch theme</h3>
          <div className="mood">
            <i className="fa-solid fa-sun"></i>
            <span></span>
            <i classNameName="fa-solid fa-moon"></i>
          </div>
          <h3 data-lang="color" >pick color</h3>
          <div className="colors">
            <div className="color active" style={{background: "rgb(29, 153, 141)"}} ></div>
            <div className="color" style={{background: "rgb(244, 67, 54)"}}></div>
            <div className="color" style={{background: "rgb(0, 255, 0)"}}></div>
            <div className="color" style={{background: "rgb(205, 220, 57)"}}></div>
            <div className="color" style={{background: "rgb(25, 161, 227)"}}></div>
            <div className="color" style={{background: "rgb(118, 51, 237)"}}></div>
            <div className="color" style={{background: "rgb(255, 87, 34)"}}></div>
            <div className="color" style={{background: "rgb(233, 30, 99)"}}></div>
          </div>
        </div>
      </>
  )
}

export default Settings