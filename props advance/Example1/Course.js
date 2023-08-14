class Course extends React.Component {
    render() {
        let {name, titles} = this.props;
        let subjects = [];
        titles.forEach(e => {
            subjects.push(<li>{e}</li>)
        });

        // Improved Way
        // let subjects = titles.map(e => {
        //     return <li>{e}</li>
        // });

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