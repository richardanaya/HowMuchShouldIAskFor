class Main extends React.Component {
  static childContextTypes = {
    router: React.PropTypes.object
  }

  static contextTypes = {
    router: React.PropTypes.func
  }

  render() {
    return (
      <div>
        <ReactRouter.RouteHandler/>
      </div>
    );
  }

  /*
   <nav className="grey darken-3">
   <div className="nav-wrapper">
   <a ref="menuButton" data-activates="slide-out" className="brand-logo">&nbsp;<span className="fa fa-bars"></span> How Much Should I Ask For?</a>
   <ul className="right hide-on-med-and-down">
   </ul>
   <ul id="slide-out" className="side-nav">
   <li><a onClick={this.goToLink.bind(this,"/")}>Calculate</a></li>
   <li><a onClick={this.goToLink.bind(this,"/negotiating")}>Negotiating</a></li>
   </ul>
   </div>
   </nav>
   */

  componentDidMount() {
    $(this.refs.menuButton.getDOMNode()).sideNav();
  }

  goToLink(route){
    this.context.router.transitionTo(route);
    $(this.refs.menuButton.getDOMNode()).sideNav("hide");
  }
}

module.exports = Main;
