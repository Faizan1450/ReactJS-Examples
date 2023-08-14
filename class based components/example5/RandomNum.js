function getRandNum() {
    let myNums = [1, 2, 3, 4, 5, 6];
    let index = Math.floor(Math.random() * myNums.length);
    return myNums[index];
}

class RandomNum extends React.Component {
    render() {
        let randNum = getRandNum();
        let msg;
        if (randNum == 6) {
            msg = (
                <div>
                    <strong style={{ color: "green" }}>Congratulations! You won</strong>{" "}
                    <br />
                    <br />
                    <img
                        src="https://www.funimada.com/assets/images/cards/big/congrats-7.gif"
                        alt="Congratulations"
                        height="300px"
                        width="300px"
                    />
                </div>
            );
        } else {
            msg = (
                <small style={{ color: "red" }}>Sorry! Better luck next time</small>
            );
        }

        return (
            <div>
                <p>You got the number: {randNum}</p>
                {msg}
            </div>
        );
    }
}