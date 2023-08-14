class MyApp extends React.Component {
    render() {
        return (
            <div>
                <Student name="Faizan" age={23} subjects={["Physics", "Chemistry", "Maths"]} marks={[80,90,85]}/>
                <Student name="Ravi" age={25} subjects={["Physics", "Chemistry", "Maths"]} marks={[45,65,35]}/>
            </div>
        )
    }
}

let myDiv = document.querySelector("#root");
let root = ReactDOM.createRoot(myDiv);
root.render(<MyApp />)