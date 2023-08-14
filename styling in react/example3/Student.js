class Student extends React.Component {
    render() {
        let { subjects, marks } = this.props;
        let totalMarks = marks.reduce((total, num) => total + num);
        let studentStyling = {
            backgroundColor: "cyan",
            borderRadius: "20px",
            border: "1px solid black",
            margin: "20px",
            padding: "20px",
            fontFamily: "'Poppins', sans-serif",
            display: "inline-block",
        };
        return (
            <div style={studentStyling}>
                <h2>Student Details:</h2>
                <p>Name: {this.props.name}</p>
                <p>Age: {this.props.Age}</p>
                <p>Subjects: </p>
                <ul>
                    {subjects.map((e) => (
                        <li>{e}</li>
                    ))}
                </ul>
                <p>Marks: </p>
                <ul>
                    {marks.map((e) => (
                        <li>{e}</li>
                    ))}
                </ul>
                <p>
                    Total Marks: <b>{totalMarks}</b>
                </p>
                <p>
                    Result: <b>{totalMarks >= 150 ? "Pass" : "Fail"}</b>
                </p>
            </div>
        );
    }
}
