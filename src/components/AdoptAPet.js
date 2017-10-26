import React from 'react';
import {connect} from 'react-redux';

import {fetchPet} from './actions';

export class AdoptAPet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            c: {},
            d: {}
        }
    }

    componentWillMount() {
        fetch('http://localhost:8080/api/cat')
        .then((cats) => cats.json())
        .then((cat => this.props.dispatch(fetchPet('cat', cat))))

        fetch('http://localhost:8080/api/dog')
        .then((dogs) => dogs.json())
        .then((dog => this.props.dispatch(fetchPet('dog', dog))))
    }

    render() {



        return (<div>
                <article>
                    <header>{this.props.c.name} <img src={`${this.props.c.imageURL}`} alt="" height="100px;" /></header>
                    <ul>
                        <li>{this.props.c.gender}</li>
                        <li>{this.props.c.age}</li>
                        <li>{this.props.c.breed}</li>
                        <li>{this.props.c.story}</li>
                    </ul>
                </article>
                <article>
                    <header>{this.props.d.name} <img src={`${this.props.d.imageURL}`} alt="" height="100px;" /></header>
                        <ul>
                            <li>{this.props.d.gender}</li>
                            <li>{this.props.d.age}</li>
                            <li>{this.props.d.breed}</li>
                            <li>{this.props.d.story}</li>
                        </ul>                    
                    </article>
            </div>);
    }
};

const mapStateToProps = (state) => ({
    c: state.c,
    d: state.d
});
export default connect(mapStateToProps)(AdoptAPet);