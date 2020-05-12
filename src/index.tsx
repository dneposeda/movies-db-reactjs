import React from "react";
import ReactDOM from "react-dom";
import TestFile from "./test-file";
import './styles/styles.scss';

const test = new TestFile();
console.log(test.copies);

const element = React.createElement('h1', {className: 'title'}, `I'm React.CreateElement`);
// ReactDOM.render(element, document.getElementById('root'));


class Test extends React.Component {
    render() { return <h1>Привет Component</h1>; }
}
// ReactDOM.render(<Test />, document.getElementById('b'));


class Test2 extends React.PureComponent {
    render() { return <h1>Привет, PureComponent</h1>; }
}
// ReactDOM.render(<Test2 />, document.getElementById('c'));


function Element2() {
    return (<h1>Hello function</h1>);
};
// ReactDOM.render(<Element2 />, document.getElementById('a'));


function All() {
    return (
        <ul>
            <li> { element } </li>
            <li> <Test2 /> </li>
            <li> <Element2 /> </li>
            <li> <Test /> </li>
        </ul>
    );
};
ReactDOM.render(<All />, document.getElementById('root'));
