class MyApp extends React.Component {
    render() {
        return (
            <div>
                <Student
                    name="Faizan"
                    age={23}
                    subjects={["Maths", "Physics", "Chemistry"]}
                    marks={[70, 80, 90]}
                    isPass={true}
                    address={{ Hno: 135, landmark: "Jahangirabad", city: "Bhopal", pincode: 462008 }}
                />
                <Student
                    name="Fardeen"
                    age={22}
                    subjects={["English", "Hindi", "Urdu"]}
                    marks={[80, 70, 90]}
                    isPass={true}
                    address={{ Hno: 135, landmark: "Jahangirabad", city: "Bhopal", pincode: 462008 }}
                />
            </div>
        );
    }
}

ReactDOM.createRoot(document.querySelector("#root")).render(<MyApp />);