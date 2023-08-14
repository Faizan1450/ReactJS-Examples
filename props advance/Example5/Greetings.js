class Greetings extends React.Component {
    // Using default props
    static defaultProps = {who:"Everyone", from:"Team SCA"};
    render() {
        return <h2>Greeting to {this.props.who} from {this.props.from} </h2>
    }
}