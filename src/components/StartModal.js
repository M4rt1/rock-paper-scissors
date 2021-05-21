import { Modal, Button } from 'react-bootstrap';

function StartModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Rock-Paper-Scissors Game
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Here are some tips.</h4>
                <p>
                    To play simply check your move by pressing Rock/Paper/Scissors button. At the top you'll see current score, below that you'll see your and computer move. If you want to restart click RESET button. Have fun!
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default StartModal;