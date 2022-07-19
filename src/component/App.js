import Banniere from "./Banniere";
import Affiche from "./Affiche"
import UserCard from "./UserCard";
import logo from '../assets/Blogeo.png'
import FormBlog from "./FormBlog";
import { useState } from "react";

function App() {
  const [input_name, setInputName]= useState('michel')
  return (
          <div>
            <Banniere>
              <img src={logo} alt="logo_blogeo" className="img_logo"/>
              <h1 className='titre'>Bienvenue sur Blogeo: {input_name}</h1>
            </Banniere>
              <UserCard/>
              <FormBlog input_name={input_name} setInputName={setInputName}/>
              <Affiche/>
          </div>
  )
}
export default App;
