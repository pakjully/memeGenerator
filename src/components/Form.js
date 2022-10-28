import React from 'react'
import memesData from '../memesData'


export function Form () {

    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getImage () {
        const meme = allMemeImages.data.memes;
        const memeArr = meme[Math.floor(Math.random()* meme.length)]
        const url = memeArr.url
        setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
    }))
    }

    function handleChange (event) {
        const {name, value} = event.target
        setMeme (prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    return (
        <main>
            <div className="form">
                <input
                type="text"
                className="form-input"
                placeholder="Top text"
                name="topText"
                value={meme.topText}
                onChange={handleChange}
                />
                <input
                type="text"
                className="form-text"
                placeholder="Bottom text"
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
                />
                 <button onClick={getImage} className="form-button" type="submit">Get a new meme image  🖼</button>
                 <div className="meme">
                     <img src={meme.randomImage} className="form-img"/>
                     <h2 className="meme-text top">{meme.topText}</h2>
                     <h2 className="meme-text bottom">{meme.bottomText}</h2>
                 </div>
            </div>
        </main>
    )
}