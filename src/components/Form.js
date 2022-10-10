import React from 'react'

export default function Form () {
    return (
        <main>
            <form className="form">
                <input
                type="text"
                className="form-input"
                placeholder="Top text"
                />
                <input
                type="text"
                className="form-text"
                placeholder="Bottom text"
                />
                <button className="form-button" type="submit">Get a new meme image  🖼</button>
        </form>
        </main>

    )
}