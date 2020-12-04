// maps each product from App.js to an HTML element or Component for render
import { Component } from "react";
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class DisplayList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: "all",
            content: "all",
            sort: null,
        };
    }

    updateTotal = price => {
        this.props.incrementTotal(price);
    }

    render() {
        return (
            <div className="d-flex justify-content-around flex-wrap" > {
                this.props.list.map(item =>
                    <Card key={item.key} style={{ width: '18rem', margin: '2em' }}>
                        <Card.Img variant="top" src={item.image} />
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>
                                Number of stickers: {item.number}
                            </Card.Text>
                            <Card.Text>
                                Content: {item.content}
                            </Card.Text>
                            <Card.Text>
                                Price: ${item.price}
                            </Card.Text>
                            <Button onClick={() => this.updateTotal(item.price)} variant="dark">Add to Cart</Button>
                        </Card.Body>
                    </Card>
                )
            }</div>
        )
    }
}

export default DisplayList