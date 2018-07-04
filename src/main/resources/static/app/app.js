
var Users = React.createClass({
    getInitialState: function() {
        return {display: true,
            editing:false};
    },
    handleDelete() {
        var self = this;
        $.ajax({
            url: "http://localhost:8080/users/delete/" + this.props.user.accountNumber,
            type: 'POST',
            success: function(result) {
                self.setState({display: false});
            },
            error: function(xhr, ajaxOptions, thrownError) {
                toastr.error(xhr.responseJSON.message);
            }
        });
    },
    handleEdit: function(){
        this.setState({editing: true});

    },
    cancel:function(){
        this.setState({editing: false});
    },
    save: function(){
        this.setState({editing: false});
        this.props.user.firstName = this.refs.newFName.value;
        this.props.user.lastName = this.refs.newLName.value;
        var self = this;
        $.ajax({
            url: "http://localhost:8080/users/update/" + this.props.user.accountNumber,
            type: 'PUT',
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(this.props.user),
            success: function(result) {
                //self.setState({display: false});

            },
            error: function(xhr, ajaxOptions, thrownError) {
                toastr.error(xhr.responseJSON.message);
            }
        });
    },

    renderNormal:function(){
        if (this.state.display==false) return null;
        else return (
            <tr>
                <td className="td">{this.props.user.accountNumber}</td>
                <td className="td">{this.props.user.firstName}</td>
                <td className="td">{this.props.user.lastName}</td>
                <td>
                    <button className="btn btn-info" onClick={this.handleEdit}>Edit</button>
                    <button className="btn btn-danger" onClick={this.handleDelete}>Delete</button>
                </td>
            </tr>);
    },


    renderForm: function() {
        if (this.state.display==false) return null;
        else return (
            <tr>
                <td>{this.props.user.accountNumber}</td>
                <td className="td"><input ref="newFName" defaultValue={this.props.user.firstName}/></td>
                <td className="td"><input ref="newLName" defaultValue={this.props.user.lastName}/></td>
                <td>
                    <button  className="td"className="btn btn-success" onClick={this.save}>Save</button>
                    <button className="td" className="btn btn-danger" onClick={this.cancel}>Cancel</button>

                </td>
            </tr>);
    },

    render:function () {
        if(this.state.editing){
            return this.renderForm();
        }else{
            return this.renderNormal();
        }

    }


});




var UsersTable = React.createClass({
    loadUsersFromServer: function () {
        var self = this;
        $.ajax({
            url: "http://localhost:8080/users/all"
        }).then(function (data) {
            self.setState({newUserList: data});

        });
    },

    getInitialState: function () {
        return {newUserList: []};
    },

    componentDidMount: function () {
        this.loadUsersFromServer();
    },

    setSearch: function(){
        console.log(event.target.value);
        this.setState({searchType: event.target.value});
    },

    search:function(){
        console.log(this.refs.searchBar.value);
        if (this.refs.searchBar.value == false){
            var url="http://localhost:8080/users/all";
        }else{
            if (this.state.searchType == "searchAll"){
                var url = "http://localhost:8080/users/search/" + this.refs.searchBar.value;

            }
            else if(this.state.searchType == ("SearchFirst")){
                var url = "http://localhost:8080/users/search/firstname/" + this.refs.searchBar.value;

            }
            else if(this.state.searchType == ("SearchLast")){
                var url = "http://localhost:8080/users/search/lastname/" + this.refs.searchBar.value;

            }else{
                var url = "http://localhost:8080/users/search/" + this.refs.searchBar.value;
            }

        }

        var self = this;
        $.ajax({
            url: url
        }).then(function (data) {
            self.setState({newUserList: data});

        });
    },


    newUser:function(){
        var self = this;

        var data = {
            firstName: this.refs.newUserFName.value,
            lastName: this.refs.newUserLName.value,};

        $.ajax({
            url: "http://localhost:8080/users/create",
            type: 'POST',
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(data),
            success: function(result) {
                self.setState({newUserList: result})
                window.document.getElementById("newFName").value = "";
                window.document.getElementById("newLName").value = "";
            },
            error: function(xhr, ajaxOptions, thrownError) {
                toastr.error(xhr.responseJSON.message);
            }
        });

    },
    render: function () {




        let rows = [];
        this.state.newUserList.forEach(function (user) {
            rows.push(<Users user={user}/>);
        });
        //var rows[] = this.props.rows;
        return (
            <div className="container">
                <h1>User Manager</h1>
                <form className="">
                    <div className="radio-button" onChange={this.setSearch.bind(this)}>
                        <label className="radio-button" htmlFor="SearchAll"> Full Name <input type="radio" value="SearchAll" id="SearchAll" name="searchType" defaultChecked/>&nbsp;&nbsp;</label>
                        <label className="radio-button" htmlFor="SearchFirst"> First Name <input type="radio" value="SearchFirst" id="SearchFirst" name="searchType"/>&nbsp;&nbsp;</label>
                        <label className="radio-button" htmlFor="SearchLast"> Last Name <input type="radio" value="SearchLast" id="SearchLast" name="searchType"/>&nbsp;&nbsp;</label>
                    </div>
                    <input type="text" placeholder="Search" id="search" className="form-control" ref="searchBar" onKeyUp={this.search}/>
                </form>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Account No</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Config</th>
                    </tr>
                    </thead>
                    <tbody>{rows}
                    <tr>
                        <td>*</td>
                        <td className="td"><input id="newFName" ref="newUserFName"/></td>
                        <td className="td"><input id="newLName" ref="newUserLName"/></td>
                        <td>
                            <button  className="td" className="btn btn-primary" onClick={this.newUser}>Add</button>
                        </td>
                    </tr>
                    </tbody>

                </table>
            </div>);
    },

});


ReactDOM.render(<UsersTable />, document.getElementById('root') );
