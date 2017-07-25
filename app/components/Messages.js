var React = require("react");
var Router = require('react-router');


var Messages = React.createClass({  
    
    componentDidMount: function() {
        console.log(this.props.params.user)
        
    $.ajax({
            method: "GET",
            url: "/messages",
            data: {
                sender: "tomCat",
                receiver: "odyMon"
            },
        }).then(function(chatLog){
            var concat = chatLog[0].concat(chatLog[1]);
            console.log(concat[0].id)
            var sortedConcat = concat.sort(function(a, b) {
                return parseFloat(a.id) - parseFloat(b.id);
            });
            console.log(sortedConcat)
        });
    },

    render: function() {

    return(
    <div>
        <div className="container navContainer">
            <nav className="navbar navbar-default">
                <div className="container-fluid">

                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    </button>
                    <h3 className="navbar-brand" href="/home">Hobby Hookup</h3>
                </div>

                <form className="navbar-form navbar-left">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Search"></input>
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
                <div className="nav navbar-nav navbar-right">
                    <div className="dropdown">
                        <button className="dropbtn btn btn-lg btn-default"> 
                        <span className="glyphicon glyphicon-list"></span> 
                        </button>
                        <div className="dropdown-content">
                        <a href="#">Profile</a>
                        <a href="#">Inbox</a>
                        <a href="#">Update</a>
                        <a href="#">Logout</a>
                        </div>
                    </div>
                </div>
            </div>
            </nav>  
        </div>
                    
        <h2> Messages </h2>
        <div className="row">
            <div className="col-sm-8 col-sm-offset-2">
                    <div id="chat-window" className="panel panel-default">
       
                        <div id="chat-panel" className="panel-heading">
                            <h4> Chat with Name </h4>
                        </div>
                        <div className="panel-footer">
                            <div className="input-group">
                                <input id="chat-user" type="hidden"></input>
                                <input id="chat-input" type="text" className="form-control input-sm chat_input" placeholder="Type your message here..."></input> <span className="input-group-btn">
                                    <button id="chat-send" className="btn btn-sm btn-snack" style={{color:'white'}}>Send</button>
                                </span> 
                            </div>
                        </div>
                        <div id="chat-panel" className="panel-body">
                            <div className="row">
                                <div id="chat-panel" className="panel-body">
                                    <div className="col-sm-2 col-md-2">
                                       <img src="http://placehold.it/100x100" alt="" className="img-circle img-responsive" />
                                    </div>
                                    <div className="col-sm-10 col-md-10">
                                       <p> Message will go here Message will go here Message will go here Message will go here</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="chat-panel" className="panel-body">
                            <div className="row">
                                <div id="chat-panel" className="panel-body">
                                    <div className="col-sm-2 col-md-2">
                                       <img src="http://placehold.it/100x100" alt="" className="img-circle img-responsive" />
                                    </div>
                                    <div className="col-sm-10 col-md-10">
                                       <p> Message will go here Message will go here Message will go here Message will go here</p>
                                    </div>
                                </div>
                            </div>
                        </div>                       
                    </div>
                </div>
        </div>
        <div id="copyright">
            <ul><li>&copy; Hobby Hookup</li></ul>
        </div>
    </div>
    );
    }
});

module.exports = Messages;