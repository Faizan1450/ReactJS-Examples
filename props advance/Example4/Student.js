class Student extends React.Component {
    render() {
        let { subjects, marks } = this.props;
        let totalMarks = marks.reduce((total, num) => total + num);
        return (
            <div>
                <h2>Student Details:</h2>
                <p>Name: {this.props.name}</p>
                <p>Age: {this.props.Age}</p>
                <p>Subjects: </p>
                <ul>
                    {subjects.map(e => <li>{e}</li>)}
                </ul>
                <p>Marks: </p>
                <ul>
                    {marks.map(e => <li>{e}</li>)}
                </ul>
                <p>Total Marks: <b>{totalMarks}</b></p>
                <p>Result: <b>{totalMarks >= 150 ? "Pass" : "Fail"}</b></p>
            </div >
        );
    }
}