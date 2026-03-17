import './Like.css';
import {useState} from 'react'

function Like() {
    const [liked, setLiked] = useState(false)
    const handleLikeClick = () => {
        setLiked(!liked)
        if (!liked) {
            alert("Curtiu")
        } else {
            alert("Descurtiu")
        }
    }

  return (
    <>
    <button className="like" type="button" onClick={handleLikeClick}>{liked ? '💚' : '🤍'}</button>
    </>
  )
}

export default Like;