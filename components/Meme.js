import React from "react"

export default function Meme() {
    return (
        <main>
            <div className="form">
                <div>
                    <label className="form--label">Top text</label>
                    <input
                        type="form"
                        placeholder="top text"
                        className="form--input"
                    />
                </div>
                <div>
                    <label className="form--label">Top text</label>
                    <input
                        type="form"
                        placeholder="bottom text"
                        className="form--input"
                    />
                </div>
                <button
                    className="form--button"
                >
                    Get a new meme image 🖼
                </button>
            </div>
        </main>
    )
}