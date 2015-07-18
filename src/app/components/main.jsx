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
}

module.exports = Main;
