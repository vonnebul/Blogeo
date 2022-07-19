import '../styles/Affiche.css'

function Affiche() {
	const numéro = "06.12.34.56.78"
	const site = "https://www.lessonsharing.fr"
	return (
		<footer>
			<div className='blogeoAffiche'>
				<h4>Compléments d'informations</h4>
				<ul className='liste'>
					<li>numéro : {numéro}</li>
					<li>site officiel : <a href={site} target="_blank" rel="noreferrer">{site}</a></li>
					<li>all right reserved</li>
				</ul>
			</div>
		</footer>
	)
}

export default Affiche