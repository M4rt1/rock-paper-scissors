import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/Board.css';

class Board extends React.Component {
    constructor() {
        super();
        this.state = {
            turn: 0,
            userPoints: 0,
            computerPoints: 0,
            computerVal: 'Waiting...',
            userVal: 'Waiting...',
            result: 'START the Game'
        }
        this.resetGame = this.resetGame.bind(this);
        this.handleRockClick = this.handleRockClick.bind(this);
        this.handlePaperClick = this.handlePaperClick.bind(this);
        this.handleScissorsClick = this.handleScissorsClick.bind(this);
    }

    resetGame() {
        this.setState({
            turn: 0,
            userPoints: 0,
            computerPoints: 0,
            computerVal: 'Waiting...',
            userVal: 'Waiting...',
            result: 'Reseted!'
        })
    }

    handleRockClick() {
        const options = ['Rock', 'Paper', 'Scissors'];
        const compVal = options[Math.floor(Math.random() * options.length)];
        if (compVal === 'Rock') {
            this.setState((prevState) => {
                return {
                    userPoints: prevState.userPoints,
                    computerPoints: prevState.computerPoints,
                    turn: prevState.turn + 1,
                    computerVal: compVal,
                    userVal: 'Rock',
                    result: 'Draw!'
                }
            })
        } else if (compVal === 'Paper') {
            this.setState((prevState) => {
                return {
                    userPoints: prevState.userPoints,
                    computerPoints: prevState.computerPoints + 1,
                    turn: prevState.turn + 1,
                    computerVal: compVal,
                    userVal: 'Rock',
                    result: 'Computer wins!'
                }
            })
        } else {
            this.setState((prevState) => {
                return {
                    userPoints: prevState.userPoints + 1,
                    computerPoints: prevState.computerPoints,
                    turn: prevState.turn + 1,
                    computerVal: compVal,
                    userVal: 'Rock',
                    result: 'You win!'
                }
            })
        }
    }

    handlePaperClick() {
        const options = ['Rock', 'Paper', 'Scissors'];
        const compVal = options[Math.floor(Math.random() * options.length)];
        if (compVal === 'Rock') {
            this.setState((prevState) => {
                return {
                    userPoints: prevState.userPoints + 1,
                    computerPoints: prevState.computerPoints,
                    turn: prevState.turn + 1,
                    computerVal: compVal,
                    userVal: 'Paper',
                    result: 'You win!'
                }
            })
        } else if (compVal === 'Paper') {
            this.setState((prevState) => {
                return {
                    userPoints: prevState.userPoints,
                    computerPoints: prevState.computerPoints,
                    turn: prevState.turn + 1,
                    computerVal: compVal,
                    userVal: 'Paper',
                    result: 'Draw!'
                }
            })
        } else {
            this.setState((prevState) => {
                return {
                    userPoints: prevState.userPoints,
                    computerPoints: prevState.computerPoints + 1,
                    turn: prevState.turn + 1,
                    computerVal: compVal,
                    userVal: 'Paper',
                    result: 'Computer wins!'
                }
            })
        }
    }

    handleScissorsClick() {
        const options = ['Rock', 'Paper', 'Scissors'];
        const compVal = options[Math.floor(Math.random() * options.length)];
        if (compVal === 'Rock') {
            this.setState((prevState) => {
                return {
                    userPoints: prevState.userPoints,
                    computerPoints: prevState.computerPoints + 1,
                    turn: prevState.turn + 1,
                    computerVal: compVal,
                    userVal: 'Scissors',
                    result: 'Computer wins!'
                }
            })
        } else if (compVal === 'Paper') {
            this.setState((prevState) => {
                return {
                    userPoints: prevState.userPoints + 1,
                    computerPoints: prevState.computerPoints,
                    turn: prevState.turn + 1,
                    computerVal: compVal,
                    userVal: 'Scissors',
                    result: 'You win!'
                }
            })
        } else {
            this.setState((prevState) => {
                return {
                    userPoints: prevState.userPoints,
                    computerPoints: prevState.computerPoints,
                    turn: prevState.turn + 1,
                    computerVal: compVal,
                    userVal: 'Scissors',
                    result: 'Draw!'
                }
            })
        }

    }

    render() {
        return (
            <div>
                <Container id='container'>
                    <Row>
                        <Col id='col'>
                            <h1 className='header'>{`Player ${this.state.userPoints} - ${this.state.computerPoints} Computer`}</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col id='col'>
                            <h2 className='header-2'>Player<hr /> <p className='val'>{this.state.userVal}</p></h2>
                        </Col>
                        <Col id='col'>
                            <h2 className='header-2'>Computer<hr /> <p className='val'>{this.state.computerVal}</p></h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col id='col'>
                            <h1 className='result-header'>{this.state.result}</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col id='col'>
                            <h4>{`Turns Played: ${this.state.turn}`}</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col id='col'>
                            <Button onClick={this.handleRockClick} id='rps-button'>Rock</Button>
                            <Button onClick={this.handlePaperClick} id='rps-button'>Paper</Button>
                            <Button onClick={this.handleScissorsClick} id='rps-button'>Scissors</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col id='col'>
                            <Button onClick={this.resetGame} variant='danger' id='reset-button'>RESET</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Board;