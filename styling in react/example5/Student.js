class Student extends React.Component {
    render() {
        let { subjects, marks } = this.props;
        let totalMarks = marks.reduce((total, num) => total + num);
        let studentStyling = {
            backgroundColor: "lightgreen",
            borderRadius: "20px",
            border: "1px solid black",
            margin: "20px",
            padding: "20px",
            fontFamily: "'Poppins', sans-serif",
            display: "inline-block",
        };
        // USE VARIABLES TO APPLY STYLING
        let isPass = totalMarks >= 150;
        let passStyle = {
            backgroundColor: "limegreen",
            padding: "5px",
            borderRadius: "5px"
        }
        let failStyle = {
            backgroundColor: "red",
            padding: "5px",
            borderRadius: "5px"
        }
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
                    <span style={isPass ? passStyle : failStyle}>
                        Result: {isPass ? "Pass" : "Fail"}
                    </span>
                </p>
            </div>
        );
    }
}
