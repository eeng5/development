//  contains filtering/sorting/aggregator methods
import { Component } from "react";
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import DisplayList from './DisplayList';

class FilteredList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: "all",
            content: "all",
            sort: null,
            total: 0,
            checkout: false,
        };
    }

    // sets the state to the selected size, function passed to the onSelect event handler of HTML buttons
    onSelectFilterSize = event => {
        this.setState({
            number: event
        })
    };

    onSelectFilterContent = event => {
        this.setState({
            content: event
        })
    };

    onSelectSort = event => {
        this.setState({
            sort: event
        })
    };

    //creating a filtering condition
    matchesFilter = item => {
        // all items should be shown when no filter is selected
        if (this.state.number === "all") {
            if (this.state.content === "all") {
                return true
            } else if (this.state.content === item.content) {
                return true
            } else {
                return false
            }
        } else if (this.state.number === item.number) {
            if (this.state.content === "all") {
                return true
            } else if (this.state.content === item.content) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    }

    getTitle = () => {
        if (this.state.sort === "#highest") {
            return "highest to lowest"
        }
        return "lowest to highest"
    }

    incrementTotal = price => {
        var newTotal = (parseFloat(this.state.total) + parseFloat(price)).toFixed(2);
        this.setState({
            total: newTotal
        })
    }

    checkout = () => {
        this.setState({
            checkout: true
        })
    }

    render() {
        return (
            <div>
                <div className="d-flex justify-content-center flex-wrap">
                    <div style={{ margin: '2em' }}>
                        <Navbar bg="light" expand="lg" className="border-top border-left border-right rounded-top">
                            <Navbar.Brand href="#home">Number of Stickers:</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Link href="#all" eventKey="all" onSelect={this.onSelectFilterSize}>all</Nav.Link>
                                    <Nav.Link href="#one" eventKey="1" onSelect={this.onSelectFilterSize}>one</Nav.Link>
                                    <Nav.Link href="#three" eventKey="3" onSelect={this.onSelectFilterSize}>three</Nav.Link>
                                    <Nav.Link href="#four" eventKey="4" onSelect={this.onSelectFilterSize}>four</Nav.Link>
                                    <Nav.Link href="#nine" eventKey="9" onSelect={this.onSelectFilterSize}>nine</Nav.Link>
                                    <Nav.Link href="#twenty" eventKey="20" onSelect={this.onSelectFilterSize}>twenty</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                        <Navbar bg="light" expand="lg" className="border-left border-right">
                            <Navbar.Brand href="#home">Content:</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Link href="#all" eventKey="all" onSelect={this.onSelectFilterContent}>all</Nav.Link>
                                    <Nav.Link href="#nature" eventKey="nature" onSelect={this.onSelectFilterContent}>nature</Nav.Link>
                                    <Nav.Link href="#food" eventKey="food" onSelect={this.onSelectFilterContent}>food</Nav.Link>
                                    <Nav.Link href="#media" eventKey="media" onSelect={this.onSelectFilterContent}>media</Nav.Link>
                                    <Nav.Link href="#animals" eventKey="animals" onSelect={this.onSelectFilterContent}>animals</Nav.Link>
                                    <Nav.Link href="#music" eventKey="music" onSelect={this.onSelectFilterContent}>music</Nav.Link>
                                    <Nav.Link href="#random" eventKey="random" onSelect={this.onSelectFilterContent}>random</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                        <Navbar bg="light" expand="lg" className="border-left border-bottom border-right rounded-bottom">
                            <Navbar.Brand href="#home">Sort by Price:</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto">
                                    <NavDropdown title={this.getTitle()} id="collasible-nav-dropdown">
                                        <NavDropdown.Item href="#lowest" onSelect={this.onSelectSort}>lowest to highest</NavDropdown.Item>
                                        <NavDropdown.Item href="#highest" onSelect={this.onSelectSort}>highest to lowest</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                    <div style={{ background: '#f8f9fa', margin: '2em', padding: '1em' }} className="border rounded">
                        <h5>Shopping Cart</h5>
                        <br></br>
                        <p className="card-text">Total: ${this.state.total}</p>
                        <Button onClick={() => this.checkout()} variant="dark">Checkout</Button>
                        <div className="container">
                            {this.state.checkout ?
                                <div>
                                    <br></br>
                                    <div className="alert alert-success alert-dismissable">
                                        <button className="close" data-dismiss="alert" aria-hidden="true" onClick={() => window.location.reload()}>&times;</button>
                                Order received! Thank you for your purchase! &nbsp;
                            </div>
                                </div>
                                : null}
                        </div>
                    </div>
                </div>
                <DisplayList list={this.state.sort === "#highest" ? this.props.list.filter(this.matchesFilter).sort((item1, item2) => item2.price - item1.price) : this.props.list.filter(this.matchesFilter).sort((item1, item2) => item1.price - item2.price)} incrementTotal={(price) => { this.incrementTotal(price) }} />
            </div>
        );
    }
}

export default FilteredList