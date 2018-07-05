const SELECTSTYLE = {fontFamily: 'FontAwesome, Helvetica Neue, sans-serif'};

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
                <th scope="row" className="td">{this.props.user.accountNumber}</th>
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
                <th scope="row">{this.props.user.accountNumber}</th>
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
            <div className="container">
                <h1><i className="fa fa-address-book"/> {languageJSON.title}</h1>
                <form className="form-group">
                    <div className="radio-button mbody" onChange={this.setSearch.bind(this)}>
                        <label className="form-check-label" htmlFor="SearchAll"> {languageJSON.fullName} <input type="radio" value="SearchAll" id="SearchAll" name="searchType" defaultChecked/>&nbsp;&nbsp;</label>
                        <label className="form-check-label" htmlFor="SearchFirst"> {languageJSON.fName} <input type="radio" value="SearchFirst" id="SearchFirst" name="searchType"/>&nbsp;&nbsp;</label>
                        <label className="form-check-label" htmlFor="SearchLast"> {languageJSON.lName} <input type="radio" value="SearchLast" id="SearchLast" name="searchType"/>&nbsp;&nbsp;</label>
                        <select style={SELECTSTYLE} id="selectBox" className="form-control-sm float-right" onChange={this.changeLanguage} defaultValue={this.state.language}>
                            <option value="am">&#xf1ab; &nbsp; አማርኛ</option>
                            <option value="ar">&#xf1ab; &nbsp;عربى </option>
                            <option value="bg">&#xf1ab; &nbsp; български</option>
                            <option value="ca">&#xf1ab; &nbsp; català</option>
                            <option value="cz">&#xf1ab; &nbsp; čeština</option>
                            <option value="da">&#xf1ab; &nbsp; dansk</option>
                            <option value="de">&#xf1ab; &nbsp; Deutsche</option>
                            <option value="el">&#xf1ab; &nbsp; Ελληνικά</option>
                            <option value="en">&#xf1ab; &nbsp; English</option>
                            <option value="eo">&#xf1ab; &nbsp; Esperanto</option>
                            <option value="es">&#xf1ab; &nbsp; Español</option>
                            <option value="et">&#xf1ab; &nbsp; eesti keel</option>
                            <option value="eu">&#xf1ab; &nbsp; Euskal</option>
                            <option value="fi">&#xf1ab; &nbsp; Suomi</option>
                            <option value="fr">&#xf1ab; &nbsp; français</option>
                            <option value="fy">&#xf1ab; &nbsp; frisian</option>
                            <option value="sg">&#xf1ab; &nbsp; gàidhlig</option>
                            <option value="gl">&#xf1ab; &nbsp; Galego</option>
                            <option value="hi">&#xf1ab; &nbsp; िंदी</option>
                            <option value="hr">&#xf1ab; &nbsp; Hrvatska</option>
                            <option value="hu">&#xf1ab; &nbsp; Magyar</option>
                            <option value="is">&#xf1ab; &nbsp; íslensku</option>
                            <option value="it">&#xf1ab; &nbsp; italiano</option>
                            <option value="iw">&#xf1ab; &nbsp; עִברִית </option>
                            <option value="jp">&#xf1ab; &nbsp; 日本語</option>
                            <option value="ka">&#xf1ab; &nbsp; ქართული</option>
                            <option value="ko">&#xf1ab; &nbsp; 중국말</option>
                            <option value="la">&#xf1ab; &nbsp; Latine</option>
                            <option value="lt">&#xf1ab; &nbsp; latviešu</option>
                            <option value="lv">&#xf1ab; &nbsp; latviešu</option>
                            <option value="mn">&#xf1ab; &nbsp; Чех</option>
                            <option value="ms">&#xf1ab; &nbsp; Melayu</option>
                            <option value="nl">&#xf1ab; &nbsp; Nederlands</option>
                            <option value="no">&#xf1ab; &nbsp; norsk</option>
                            <option value="po">&#xf1ab; &nbsp; Polskie</option>
                            <option value="pt">&#xf1ab; &nbsp; Português</option>
                            <option value="ro">&#xf1ab; &nbsp; Română</option>
                            <option value="ru">&#xf1ab; &nbsp; русский</option>
                            <option value="sv">&#xf1ab; &nbsp; svenska</option>
                            <option value="sw">&#xf1ab; &nbsp; Kiswahili</option>
                            <option value="wl">&#xf1ab; &nbsp; Cymraeg</option>
                            <option value="zh">&#xf1ab; &nbsp; 中文</option>
                        </select>
                    </div>
                    <br/>
                    <input type="text" placeholder={languageJSON.search}  id="search" className="form-control" ref="searchBar" onKeyUp={this.search}/>
                </form>
                <table className="table table-striped table-hover">
                    <thead>
                    <tr>
                        <th scope="col">{languageJSON.accNo}</th>
                        <th scope="col">{languageJSON.fName}</th>
                        <th scope="col">{languageJSON.lName}</th>
                        <th scope="col"><i className="fas fa-cog fa-spin"/> {languageJSON.config}</th>
                    </tr>
                    </thead>
                    <tbody>{rows}
                    <tr>
                        <td scope="row"><i className="fas fa-asterisk text-muted" /></td>
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