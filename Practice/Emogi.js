class Emoji extends React.Component {
    render() {
        let { e1, e2, e3 } = this.props;
        let emoji = <p>{e1} {e2} {e3}</p>
        let msg;
        if (e1 == e2 && e1 == e3) {
            msg = <p>You Win</p>
        } else {
            msg = <p>You Lose</p>
        }

        return <div>{emoji}{msg}</div>
    }
}