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
        if(this.refs.newFName.value == false || this.refs.newLName.value == false){
            alert(languageJSON.alert);
        }else {
            this.props.user.firstName = this.refs.newFName.value;
            this.props.user.lastName = this.refs.newLName.value;
            var self = this;
            $.ajax({
                url: "http://localhost:8080/users/update/" + this.props.user.accountNumber,
                type: 'PUT',
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(this.props.user),
                success: function (result) {
                    result.sort((a,b) => (a.accountNumber) - (b.accountNumber));
                    //self.setState({display: false});

                },
                error: function (xhr, ajaxOptions, thrownError) {
                    toastr.error(xhr.responseJSON.message);
                }
            });
        }
    },

    renderNormal:function(){
        if (this.state.display==false) return null;
        else return (
            <tr>
                <td className="td">{this.props.user.accountNumber}</td>
                <td className="td">{this.props.user.firstName}</td>
                <td className="td">{this.props.user.lastName}</td>
                <td>
                    <button className="btn btn-info" onClick={this.handleEdit}>{languageJSON.edit}</button> &nbsp;
                    <button className="btn btn-danger" onClick={this.handleDelete}>{languageJSON.delete}</button>
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
                    <button  className="td"className="btn btn-success" onClick={this.save}>{languageJSON.save}</button> &nbsp;
                    <button className="td" className="btn btn-danger" onClick={this.cancel}>{languageJSON.canc}</button>

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
            data.sort((a,b) => (a.accountNumber) - (b.accountNumber));

            self.setState({newUserList: data});

        });
    },

    getInitialState: function () {
        return {newUserList: [],
            language: "en"};
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



            data.sort((a,b) => (a.accountNumber) - (b.accountNumber));

            self.setState({newUserList: data});

        });
    },


    newUser:function(){
        var self = this;

        if(this.refs.newUserFName.value == false || this.refs.newUserLName.value == false){
         alert(languageJSON.alert);

        }else{

        var data = {
            firstName: this.refs.newUserFName.value,
            lastName: this.refs.newUserLName.value,};

        $.ajax({
            url: "http://localhost:8080/users/create",
            type: 'POST',
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(data),
            success: function(result) {
                result.sort((a,b) => (a.accountNumber) - (b.accountNumber));
                self.setState({newUserList: result})
                window.document.getElementById("newFName").value = "";
                window.document.getElementById("newLName").value = "";
            },
            error: function(xhr, ajaxOptions, thrownError) {
                toastr.error(xhr.responseJSON.message);
            }
        });

    }}
    ,
    changeLanguage: function(event){
        this.setState({language: event.target.value});
    },
    render: function () {
        languageJSON = changeLanguage(this.state.language);
        console.log(changeLanguage(this.state.language));
        console.log(languageJSON);
        let rows = [];
        this.state.newUserList.forEach(function (user) {
            rows.push(<Users user={user}/>);
        });
        //var rows[] = this.props.rows;
        return (
            <div className="container w-80">

                <h1>{languageJSON.title}</h1>
                <form className="">
                    <div className="radio-button" onChange={this.setSearch.bind(this)}>
                        <label className="radio-button" htmlFor="SearchAll"> {languageJSON.fullName} <input type="radio" value="SearchAll" id="SearchAll" name="searchType" defaultChecked/>&nbsp;&nbsp;</label>
                        <label className="radio-button" htmlFor="SearchFirst"> {languageJSON.fName} <input type="radio" value="SearchFirst" id="SearchFirst" name="searchType"/>&nbsp;&nbsp;</label>
                        <label className="radio-button" htmlFor="SearchLast"> {languageJSON.lName} <input type="radio" value="SearchLast" id="SearchLast" name="searchType"/>&nbsp;&nbsp;</label>
                        <select id="selectBox" className="form-control-sm float-right" onChange={this.changeLanguage} defaultValue={this.state.language}>
                            <option value="ar">عربى</option>
                            <option value="bg">български</option>
                            <option value="en">English</option>
                            <option value="es">Español</option>
                            <option value="fr">français</option>
                            <option value="hi">हिंदी</option>
                            <option value="it">italiano</option>
                            <option value="jp">日本語</option>
                            <option value="ko">중국말</option>
                            <option value="po">Polskie</option>
                            <option value="pt">Português</option>
                            <option value="ro">Română</option>
                            <option value="ru">русский</option>
                            <option value="sw">Kiswahili</option>
                            <option value="zh">中文</option>
                        </select>
                    </div>
                    <br/>
                    <input type="text" placeholder={languageJSON.search}  id="search" className="form-control" ref="searchBar" onKeyUp={this.search}/>
                </form>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>{languageJSON.accNo}</th>
                        <th>{languageJSON.fName}</th>
                        <th>{languageJSON.lName}</th>
                        <th><i className="fas fa-cog fa-spin"/> {languageJSON.config}</th>
                    </tr>
                    </thead>
                    <tbody>{rows}
                    <tr>
                        <td><i className="fas fa-asterisk text-muted" /></td>
                        <td className="td"><input id="newFName" ref="newUserFName"/></td>
                        <td className="td"><input id="newLName" ref="newUserLName"/></td>
                        <td>
                            <button className="btn btn-primary" onClick={this.newUser}>{languageJSON.add}</button>
                        </td>
                    </tr>
                    </tbody>

                </table>
            </div>);
    },

});

ReactDOM.render(<UsersTable />, document.getElementById('root') );