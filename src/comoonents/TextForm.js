import React, { useState } from 'react'



export default function TextForm(props) {
    const handleUpChange = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showalert("coverted to uppercase", "Success");
    };

    const handleLoChange = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showalert("coverted to lowercase", "Success")
    };

    const handleClearText = () => {
        let newtext = "";
        setText(newtext);
    };

    const handleOnChange = (event) => (
        setText(event.target.value)
    )
    const handleCopyText = () => {
        navigator.clipboard.writeText(text).then(() => {
            props.showalert("Text copied to clipboard", "success");
        }).catch(err => {
            props.showalert("Failed to copy text", "error");
        });
    };
    const [text, setText] = useState('');
    return (
        <>

            <div>
                <h1>{props.heading}</h1>
                <div className="container mt-3">
                    <div className="form-group">
                        <label htmlFor="exampleTextarea">Example Textarea</label>
                        <textarea
                            className="form-control"
                            id="exampleTextarea"
                            rows="5"
                            style={{ backgroundColor: props.mode === "dark" ? "grey" : "White" }}
                            value={text}
                            onChange={handleOnChange}
                        ></textarea>
                        <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleUpChange}>Covert to Uppercase</button>
                        <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleLoChange}>Covert to lowercase</button>
                        <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleClearText}>Clear text</button>
                        <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleCopyText}>Copy text</button>
                    </div>

                </div>
            </div>
            <h1>text summary</h1>
            <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} count</p>
            <h1>priveiw</h1>
            <p>{text}</p>
        </>
    )
}
