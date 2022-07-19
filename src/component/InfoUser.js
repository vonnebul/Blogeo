import Rating from './Rating'
import '../styles/InfoUser.css'

function PremierEvent(nom){
	console.log(`regarde je viens de cliquer sur le message de`,nom )	

}


function InfoUser({ indexation, nom, commentaire, connaissance, smiley, star}){
    return ( 
            <li className={indexation % 2 === 0 ? "blue_card" : "white_card"} onClick={PremierEvent(nom)}>
                                
                {nom}<br />
                {commentaire}<br />
                <p><Rating ratingValue="smiley" value={smiley} /></p>
                <p><Rating ratingValue="star" value={star} /></p>
                <p  >{connaissance ? <span className='right'>Suivi</span> : <span className='right'>Suivez le</span>}</p>
            </li>
            )
}

export default InfoUser