class Course extends React.Component {
    render() {
        let { name, titles } = this.props;

        // Using Map
        let subjects = titles.map(e => <li>{e}</li>);

        return (
            <div>
                <h2>Course Name: {name}</h2>
                <section> Titles:
                    <ul>
                        {subjects}
                    </ul>
                </section>
            </div >
        );
    }
}