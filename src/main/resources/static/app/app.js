let React = require( 'react' );
let ReactDOM = require( 'react-dom' );


let USERS = [
    { accountNumber: 1, firstName: "billy", lastName: "Bob" },
    { accountNumber: 2, firstName: "milly", lastName: "Bob" },
    { accountNumber: 3, firstName: "dilly", lastName: "Bob" },

];



let Users = React.createClass({
    render: function () {
        return (<tr>
            <td>{this.props.user.accountNumber}</td>
            <td>{this.props.user.firstName}</td>
            <td>{this.props.user.lastName}</td>
        </tr>);
    }
});


let UsersTable = React.createClass({
    render: function () {
        let rows = [];
        this.props.user.forEach(function (user) {
            rows.push(<Users user={user}/>);
        });
        return (<table>
            <thead>
            <tr>
                <th>AccNo</th><th>First Name</th><th>Last Name</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>);
    }
});


ReactDOM.render(
    <UsersTable users={USERS} />, document.getElementById('root')
);