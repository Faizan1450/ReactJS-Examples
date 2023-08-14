class MyApp extends React.Component {
    render() {
        return (
            <div>
                <Student name="Faizan" age="23" subjects={["Physics", "Chemistry", "Maths"]} marks={[80, 75, 90]} />
                <Student name="Faizan" age="23" subjects={["Physics", "Chemistry", "Maths"]} marks={[33, 65, 40]} />
            </div>
        )
    }
}

let myDiv = document.querySelector("#root");
let root = ReactDOM.createRoot(myDiv);
root.render(<MyApp />);