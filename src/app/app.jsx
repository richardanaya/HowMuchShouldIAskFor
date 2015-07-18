(function () {
  let Main = require('./components/main.jsx');
  let Calculate = require('./components/calculate.jsx');

  var routes =
    <ReactRouter.Route handler={Main}>
      <ReactRouter.Route path="/" handler={Calculate}/>
    </ReactRouter.Route>

  ReactRouter.run(routes, ReactRouter.HashLocation, (Root) => {
    React.render(<Root />, document.body);
  });
})();
