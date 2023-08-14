class Student extends React.Component {
    render() {
        let { Hno, landmark, city, pincode } = this.props.address;
        return (
            <div>
                <h2>Student Details</h2>
                <p>Name: {this.props.name}</p>
                <p>Age: {this.props.age}</p>
                <p>Address: {Hno}, {landmark}, {city}, {pincode}</p>
                <p>Subjects: {this.props.subjects.join(", ")}</p>
                <p>marks: {this.props.marks.join(", ")}</p>
                <p>IsPass: {String(this.props.isPass)}</p>
            </div>
        )
    }
}