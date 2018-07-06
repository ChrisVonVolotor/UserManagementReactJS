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
            alert(languageJSON.alertText);
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
                    <button className="btn btn-info" onClick={this.handleEdit}>{languageJSON.editButton}</button> &nbsp;
                    <button className="btn btn-danger" onClick={this.handleDelete}>{languageJSON.deleteButton}</button>
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
                    <button  className="td"className="btn btn-success" onClick={this.save}>{languageJSON.saveButton}</button> &nbsp;
                    <button className="td" className="btn btn-danger" onClick={this.cancel}>{languageJSON.cancelButton}</button>

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
         alert(languageJSON.alertText);

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
    changePageLanguage: function(event){
        this.setState({language: event.target.value});





    },
    render: function () {
        languageJSON = changeLanguage(this.state.language);
        console.log("Lang:" + this.state.language);
        console.log(languageJSON);
        let rows = [];
        this.state.newUserList.forEach(function (user) {
            rows.push(<Users user={user}/>);
        });
        //var rows[] = this.props.rows;
        return (
            <div className="container">
                <h1><i className="fa fa-address-book"/> {languageJSON.titleText}</h1>
                <form className="form-group">
                    <div className="radio-button mbody" onChange={this.setSearch.bind(this)}>
                        <label className="form-check-label" htmlFor="SearchAll"> {languageJSON.fullName} <input type="radio" value="SearchAll" id="SearchAll" name="searchType" defaultChecked/>&nbsp;&nbsp;</label>
                        <label className="form-check-label" htmlFor="SearchFirst"> {languageJSON.fName} <input type="radio" value="SearchFirst" id="SearchFirst" name="searchType"/>&nbsp;&nbsp;</label>
                        <label className="form-check-label" htmlFor="SearchLast"> {languageJSON.lName} <input type="radio" value="SearchLast" id="SearchLast" name="searchType"/>&nbsp;&nbsp;</label>
                        <select style={SELECTSTYLE} id="selectBox" className="form-control-sm float-right" onChange={this.changePageLanguage} defaultValue={this.state.language}>
                            <option value="az">&#xf1ab; &nbsp; Azerbaijan</option>
                            <option value="sq">&#xf1ab; &nbsp; Albanian</option>
                            <option value="am">&#xf1ab; &nbsp; Amharic</option>
                            <option value="en">&#xf1ab; &nbsp; English</option>
                            <option value="ar">&#xf1ab; &nbsp; Arabic</option>
                            <option value="hy">&#xf1ab; &nbsp; Armenian</option>
                            <option value="af">&#xf1ab; &nbsp; Afrikaans</option>
                            <option value="eu">&#xf1ab; &nbsp; Basque</option>
                            <option value="ba">&#xf1ab; &nbsp; Bashkir</option>
                            <option value="be">&#xf1ab; &nbsp; Belarusian</option>
                            <option value="bn">&#xf1ab; &nbsp; Bengali</option>
                            <option value="my">&#xf1ab; &nbsp; Burmese</option>
                            <option value="bg">&#xf1ab; &nbsp; Bulgarian</option>
                            <option value="bs">&#xf1ab; &nbsp; Bosnian</option>
                            <option value="cy">&#xf1ab; &nbsp; Welsh</option>
                            <option value="hu">&#xf1ab; &nbsp; Hungarian	</option>
                            <option value="vi">&#xf1ab; &nbsp; Vietnamese</option>
                            <option value="ht">&#xf1ab; &nbsp; Haitian (Creole)</option>
                            <option value="gl">&#xf1ab; &nbsp; Galician</option>
                            <option value="nl">&#xf1ab; &nbsp; Dutch</option>
                            <option value="mrj">&#xf1ab; &nbsp; Hill Mari</option>
                            <option value="el">&#xf1ab; &nbsp; Greek</option>
                            <option value="ka">&#xf1ab; &nbsp; Georgian</option>
                            <option value="gu">&#xf1ab; &nbsp; Gujarati</option>
                            <option value="da">&#xf1ab; &nbsp; Danish	</option>
                            <option value="he">&#xf1ab; &nbsp; Hebrew</option>
                            <option value="yi">&#xf1ab; &nbsp; Yiddish</option>
                            <option value="id">&#xf1ab; &nbsp; Indonesian</option>
                            <option value="ga">&#xf1ab; &nbsp; Irish</option>
                            <option value="it">&#xf1ab; &nbsp; Italian</option>
                            <option value="is">&#xf1ab; &nbsp; Icelandic</option>
                            <option value="es">&#xf1ab; &nbsp; Spanish</option>
                            <option value="kk">&#xf1ab; &nbsp; Kazakh</option>
                            <option value="kn">&#xf1ab; &nbsp; Kannada</option>
                            <option value="ca">&#xf1ab; &nbsp; Catalan</option>
                            <option value="ky">&#xf1ab; &nbsp; Kyrgyz</option>
                            <option value="zh">&#xf1ab; &nbsp; Chinese</option>
                            <option value="ko">&#xf1ab; &nbsp; Korean</option>
                            <option value="xh">&#xf1ab; &nbsp; Xhosa</option>
                            <option value="km">&#xf1ab; &nbsp; Khmer</option>
                            <option value="lo">&#xf1ab; &nbsp; Laotian</option>
                            <option value="la">&#xf1ab; &nbsp; Latin</option>
                            <option value="lv">&#xf1ab; &nbsp; Latvian</option>
                            <option value="lt">&#xf1ab; &nbsp; Lithuanian</option>
                            <option value="lb">&#xf1ab; &nbsp; Luxembourgish</option>
                            <option value="mg">&#xf1ab; &nbsp; Malagasy</option>
                            <option value="ms">&#xf1ab; &nbsp; Malay</option>
                            <option value="ml">&#xf1ab; &nbsp; Malayalam</option>
                            <option value="mt">&#xf1ab; &nbsp; Maltese</option>
                            <option value="mk">&#xf1ab; &nbsp; Macedonian</option>
                            <option value="mi">&#xf1ab; &nbsp; Maori</option>
                            <option value="mr">&#xf1ab; &nbsp; Marathi</option>
                            <option value="mhr">&#xf1ab; &nbsp; Mari</option>
                            <option value="mn">&#xf1ab; &nbsp; Mongolian</option>
                            <option value="de">&#xf1ab; &nbsp; German</option>
                            <option value="ne">&#xf1ab; &nbsp; Nepali</option>
                            <option value="no">&#xf1ab; &nbsp; Norwegian	</option>
                            <option value="pa">&#xf1ab; &nbsp; Punjabi</option>
                            <option value="pap">&#xf1ab; &nbsp; Papiamento</option>
                            <option value="fa">&#xf1ab; &nbsp; Persian</option>
                            <option value="pl">&#xf1ab; &nbsp; Polish</option>
                            <option value="pt">&#xf1ab; &nbsp; Portuguese</option>
                            <option value="ro">&#xf1ab; &nbsp; Romanian</option>
                            <option value="ru">&#xf1ab; &nbsp; Russian</option>
                            <option value="ceb">&#xf1ab; &nbsp; Cebuano</option>
                            <option value="sr">&#xf1ab; &nbsp; Serbian</option>
                            <option value="si">&#xf1ab; &nbsp; Sinhala</option>
                            <option value="sk">&#xf1ab; &nbsp; Slovakian</option>
                            <option value="sl">&#xf1ab; &nbsp; Slovenian</option>
                            <option value="sw">&#xf1ab; &nbsp; Swahili</option>
                            <option value="su">&#xf1ab; &nbsp; Sundanese</option>
                            <option value="tg">&#xf1ab; &nbsp; Tajik</option>
                            <option value="th">&#xf1ab; &nbsp; Thai</option>
                            <option value="tl">&#xf1ab; &nbsp; Tagalog</option>
                            <option value="ta">&#xf1ab; &nbsp; Tamil</option>
                            <option value="tt">&#xf1ab; &nbsp; Tatar</option>
                            <option value="te">&#xf1ab; &nbsp; Telugu</option>
                            <option value="tr">&#xf1ab; &nbsp; Turkish</option>
                            <option value="udm">&#xf1ab; &nbsp; Udmurt</option>
                            <option value="uz">&#xf1ab; &nbsp; Uzbek</option>
                            <option value="uk">&#xf1ab; &nbsp; Ukrainian</option>
                            <option value="ur">&#xf1ab; &nbsp; Urdu</option>
                            <option value="fi">&#xf1ab; &nbsp; Finnish</option>
                            <option value="fr">&#xf1ab; &nbsp; French</option>
                            <option value="hi">&#xf1ab; &nbsp; Hindi</option>
                            <option value="hr">&#xf1ab; &nbsp; Croatian</option>
                            <option value="cs">&#xf1ab; &nbsp; Czech</option>
                            <option value="sv">&#xf1ab; &nbsp; Swedish</option>
                            <option value="gd">&#xf1ab; &nbsp; Scottish</option>                            <option value="am">&#xf1ab; &nbsp; አማርኛ</option>
                            <option value="et">&#xf1ab; &nbsp; Estonian</option>
                            <option value="eo">&#xf1ab; &nbsp; Esperanto</option>
                            <option value="jv">&#xf1ab; &nbsp; Javanese</option>
                            <option value="ja">&#xf1ab; &nbsp; Japanese</option>
                        </select>
                    </div>
                    <br/>
                    <input type="text" placeholder={languageJSON.searchBar}  id="search" className="form-control" ref="searchBar" onKeyUp={this.search}/>
                </form>
                <table className="table table-striped table-hover">
                    <thead>
                    <tr>
                        <th scope="col">{languageJSON.accountNo}</th>
                        <th scope="col">{languageJSON.fName}</th>
                        <th scope="col">{languageJSON.lName}</th>
                        <th scope="col"><i className="fas fa-cog fa-spin"/> {languageJSON.configuration}</th>
                    </tr>
                    </thead>
                    <tbody>{rows}
                    <tr>
                        <td scope="row"><i className="fas fa-asterisk text-muted" /></td>
                        <td className="td"><input id="newFName" ref="newUserFName"/></td>
                        <td className="td"><input id="newLName" ref="newUserLName"/></td>
                        <td>
                            <button className="btn btn-primary" onClick={this.newUser}>{languageJSON.addButton}</button>
                        </td>
                    </tr>
                    </tbody>

                </table>
            </div>);
    },

});

ReactDOM.render(<UsersTable />, document.getElementById('root') );