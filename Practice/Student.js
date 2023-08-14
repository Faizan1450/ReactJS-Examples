class Student extends React.Component {
    render() {
        let { name, age, subjects, marks } = this.props;
        let totalMarks = 0;
        marks = marks.map(e => {
            totalMarks += e;
            return <li>{e}</li>;
        })
        return (
            <div>
                <h2>Students Details</h2>
                <p>Student Name: {name}</p>
                <p>Student Age: {age}</p>
                <section>Student Subject: 
                    <ul>
                        {subjects.map(e => 
                            <li>{e}</li>
                        )}
                    </ul>
                </section>
                <section>Student Marks: <ul>{marks}</ul></section>
                <p>Total Marks {totalMarks}</p>
                <p>Final Result: {totalMarks >= 150 ? "Pass" : "Fail"}</p>
            </div>
        )
    }
}