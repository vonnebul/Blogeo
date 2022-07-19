import { useState } from 'react'
import '../styles/FormBlog.css'
function valider(e){
    e.preventDefault() 
    /* en js la fonction preventDefault permet d'indiquer à l'utilisateur 
    que si l'événement n'est pas géré explicitement, 
     l'action par défaut ne devrait pas être executé comme elle l'est normalement */
     //alert(e.target['mon_nom'].value)
}

function FormBlog({input_name, setInputName}){
    const [input_commentaire, setInputCommentaire]= useState('')
    let InputErrorNumber = input_name.includes("_")
    return ( 
            <form className='form' onSubmit={valider}>
                <input type="text" name="mon_nom" onChange={(e)=> setInputName(e.target.value)}/>
                <input type="text" name="mon_commentaire" onChange={(e)=> setInputCommentaire(e.target.value)}/>
                {InputErrorNumber ? 
                <div>
                    Erreur il y a un/des chiffres dans votre nom
                </div>
                 : 
                 <button type="submit" onClick={()=> alert(input_name + " " + input_commentaire)}>Valider votre commentaire</button>
                }
            </form>
            )
}
export default FormBlog