(function () {
  let Main = require('./components/main.jsx'); // Our custom react component
  let Calculate = require('./components/calculate.jsx');
  let Negotiating = require('./components/negotiating.jsx');

  var routes =
    <ReactRouter.Route handler={Main}>
      <ReactRouter.Route path="/" handler={Calculate}/>
      <ReactRouter.Route path="/negotiating" handler={Negotiating}/>
    </ReactRouter.Route>

  ReactRouter.run(routes, ReactRouter.HashLocation, (Root) => {
    React.render(<Root />, document.body);
  });
})();
