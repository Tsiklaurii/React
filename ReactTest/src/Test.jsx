import React from 'react'

const Test = () => {
    // ფუნქციური კომპონენტი
    function UseCard({ name, age, city }) {
        return (
            <div>
                <h1>My name is {name}</h1>
                <h2>Age: {age}</h2>
                <h3>This is my city: {city}</h3>
            </div>
        )
    }

    function Button({ text, onClick }) {
        return <button onClick={onClick}>{text}</button>
    }

    // კლასური კომპონენტი
    class Welcome extends React.Component {
        render() {
            return <h1>Hello my name is {this.props.name}</h1>
        }
    }
    return (
        <div>
            <UseCard name="Nino" age="10" city="Tbilisi" />

            <Button text="Click me" onClick={() => alert("hello")} />
            <Button text="Console" onClick={() => console.log("hello")} />
                
            <Welcome name="Nino" />
        </div>

    )
}

export default Test