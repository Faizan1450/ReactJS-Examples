class MyApp extends React.Component {
    render() {
        return (
            <div>
                <Greetings who="Faizan" from="Sachin" />
                <Greetings who="Faizan" />
                <Greetings from="Sachin" />
                <Greetings />
            </div>
        )
    }
}

let myDiv = document.querySelector("#root");
let root = ReactDOM.createRoot(myDiv);
root.render(<MyApp />)