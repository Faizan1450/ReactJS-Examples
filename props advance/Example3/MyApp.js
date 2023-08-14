class MyApp extends React.Component {
    render() {
        return (
            <div>
                <h2>Course Details</h2>
                <Course name="Java" titles={["Java SE", "Java EE", "Android"]} />
                <Course name="Front End Development" titles={["HTML", "CSS", "JavaScript", "React JS", "Node JS"]} />
            </div>
        )
    }
}

let myDiv = document.querySelector("#root");
let root = ReactDOM.createRoot(myDiv);
root.render(<MyApp />)