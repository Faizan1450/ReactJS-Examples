class Course extends React.Component {
    render() {
        let { name, titles } = this.props;

        return (
            <div>
                <h2>Course Name: {name}</h2>
                <section> Titles:
                    <ul>
                        {/* Using Map */}
                        {titles.map(e => <li>{e}</li>)}
                    </ul>
                </section>
            </div >
        );
    }
}