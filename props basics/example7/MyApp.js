class MyApp extends React.Component {
    render() {
        return (
            <Greetings who="Faizan" from="Sachin" />
        )
    }
}

ReactDOM.createRoot(document.querySelector("#root")).render(<MyApp />);