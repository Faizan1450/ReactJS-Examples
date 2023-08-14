class MyApp extends React.Component {
    render() {
        return (
            <div>
                <RandomNum />
                <Greetings />
            </div>
        )
    }
}

let myDiv = document.querySelector("#root");
let root = ReactDOM.createRoot(myDiv);
root.render(<MyApp />);