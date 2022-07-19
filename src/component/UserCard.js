import { useEffect, useState } from 'react'
import '../styles/UserCard.css'
import InfoUser from './InfoUser'
function UserCard() {
    const Users = [
        {
            id:'1',
            name: 'Thomas',
            commentaire: "qu'est-ce qu'un développeur fait quand il s'ennuie ? Il fichier",
            connaissance: false,
            star: 3,
            smiley: 4
        },
        {
            name: 'Maxime',
            commentaire: "toc toc, qui est la ? *très longue attente* c'est internet explorer",
            connaissance: true,
            star: 2,
            smiley: 4
        },
        {
            id:'2',
            name: 'Naomie',
            commentaire: "qu'est-ce qui est jaune et qui attend ? Jonathan",
            connaissance: false,
            star: 1,
            smiley: 1
        },
        {
            id:'3',
            name: 'Kim',
            commentaire: "exponentiel et logarithme sont au restaurant, qui paye l'addition ? Exponentiel car logarithme ne paie rien (népérien)",
            connaissance: true,
            star: 5,
            smiley: 4
        },
        {
            id:'4',
            name: 'Laetitia',
            commentaire: "Pour être à jour, il faut se mettre à l'apache",
            connaissance: false,
            star: 4,
            smiley: 4
        }
    ]
    const [count, setCount]= useState(4)
    useEffect(()=>{
        Users.push(
        {id: count, 
        name: "test",
        commentaire: "",
        connaissance: false,
        star: 0,
        smiley: 0})
        console.log(Users)
        console.log(count)
    },[count])
    return (
        <div className='main'>
            <ul>
                {Users.map((user, index) => (
                    <InfoUser 
                        key={index}
                        indexation={index}
                        nom={user.name} 
                        commentaire={user.commentaire}
                        star={user.star}
                        smiley={user.smiley}
                        connaissance={user.connaissance}
                    />

                ))}
            </ul>
            <button onClick={()=>setCount(count+1)}>cliquez</button>
            <div className='espacement'></div>
        </div>
    )
}
export default UserCard