import React from "https://esm.sh/react@19.1.0"
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client"

const Chai = (props) => {
    console.log(props );
    
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h1", {}, props.cost)
    ])
}

const App = () => {
    return React.createElement(
        "div",
        { class: "test" },
        [
            React.createElement("h1", {}, "Chai Variations by chai code"),
            React.createElement(Chai, {
                name: "Lemon Tea",
                cost: 50
            }),
            React.createElement(Chai, {
                name: "Masala Chai",
                cost: 30
            }),
            React.createElement(Chai, { 
                name: "Ginger Chai",
                cost: 100
            }),
            React.createElement(Chai, {
                name: "Black Tea",
                cost: 20
            }),
        ]
    )
}
const container = document.getElementById("root")
const root = ReactDOM.createRoot(container)
root.render(React.createElement(App))
export default App