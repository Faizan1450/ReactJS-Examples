class MyApp extends React.Component {
    render() {
      let myHeading = <h1>React Rocks!!!</h1>;
      return myHeading;
    }
  }
  let myDiv = document.querySelector("#root");
  let root = ReactDOM.createRoot(myDiv);
  root.render(<MyApp />);