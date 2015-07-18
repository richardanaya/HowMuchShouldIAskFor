(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

(function () {
  var Main = require('./components/main.jsx'); // Our custom react component
  var Calculate = require('./components/calculate.jsx');
  var Negotiating = require('./components/negotiating.jsx');

  var routes = React.createElement(
    ReactRouter.Route,
    { handler: Main },
    React.createElement(ReactRouter.Route, { path: '/', handler: Calculate }),
    React.createElement(ReactRouter.Route, { path: '/negotiating', handler: Negotiating })
  );

  ReactRouter.run(routes, ReactRouter.HashLocation, function (Root) {
    React.render(React.createElement(Root, null), document.body);
  });
})();

},{"./components/calculate.jsx":3,"./components/main.jsx":4,"./components/negotiating.jsx":5}],2:[function(require,module,exports){
"use strict";

exports.updateW2AnnualSalary = Action.create();
exports.updateW2HourlySalary = Action.create();
exports.updateTakeHomeAnnualSalary = Action.create();
exports.updateTakeHomeMonthlySalary = Action.create();
exports.updateContractAnnualSalary = Action.create();
exports.updateContractHourlySalary = Action.create();
exports.updateParameters = Action.create();

},{}],3:[function(require,module,exports){
"use strict";

var _storesCalculateStore = require("../stores/calculateStore");

var _storesCalculateStore2 = babelHelpers.interopRequireDefault(_storesCalculateStore);

var _actionsCalculateActions = require("../actions/calculateActions");

var _actionsCalculateActions2 = babelHelpers.interopRequireDefault(_actionsCalculateActions);

var Component = (function (_React$Component) {
    babelHelpers.inherits(Component, _React$Component);

    function Component() {
        babelHelpers.classCallCheck(this, Component);

        babelHelpers.get(Object.getPrototypeOf(Component.prototype), "constructor", this).call(this);
    }

    babelHelpers.createClass(Component, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            _storesCalculateStore2["default"].instance.subscribe(this.onCalculateState.bind(this));
        }
    }, {
        key: "onCalculateState",
        value: function onCalculateState(state) {
            this.setState({
                data: state
            });
        }
    }, {
        key: "onW2HourlyChange",
        value: function onW2HourlyChange(e) {
            _actionsCalculateActions2["default"].updateW2HourlySalary(e.target.value | 0);
        }
    }, {
        key: "onW2AnnualChange",
        value: function onW2AnnualChange(e) {
            _actionsCalculateActions2["default"].updateW2AnnualSalary(e.target.value | 0);
        }
    }, {
        key: "onTakehomeAnnualChange",
        value: function onTakehomeAnnualChange(e) {
            _actionsCalculateActions2["default"].updateTakeHomeAnnualSalary(e.target.value | 0);
        }
    }, {
        key: "onTakehomeMonthlyChange",
        value: function onTakehomeMonthlyChange(e) {
            _actionsCalculateActions2["default"].updateTakeHomeMonthlySalary(e.target.value | 0);
        }
    }, {
        key: "onContractAnnualChange",
        value: function onContractAnnualChange(e) {
            _actionsCalculateActions2["default"].updateContractAnnualSalary(e.target.value | 0);
        }
    }, {
        key: "onContractHourlyChange",
        value: function onContractHourlyChange(e) {
            _actionsCalculateActions2["default"].updateContractHourlySalary(e.target.value | 0);
        }
    }, {
        key: "render",
        value: function render() {
            var _this = this;

            if (!this.state) {
                return React.createElement("div", null);
            }
            return React.createElement(
                "div",
                { className: "page" },
                React.createElement(
                    "form",
                    { className: "col s12" },
                    React.createElement(
                        "div",
                        { className: "row" },
                        React.createElement(
                            "h4",
                            null,
                            "How to use?"
                        ),
                        React.createElement(
                            "p",
                            null,
                            "This is a form for discovering a rough estimate of how much one should charge as a contractor."
                        ),
                        React.createElement(
                            "ol",
                            null,
                            React.createElement(
                                "li",
                                null,
                                "Enter in your monthly takehome"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Adjust tax rate until your yearly W2 salary looks right"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "Play with parameters until your conditions are approximated"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "row" },
                        React.createElement(
                            "h4",
                            null,
                            "Salary"
                        ),
                        React.createElement(
                            "p",
                            null,
                            "These columns represent equivalant situations of quality of living."
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "row" },
                        React.createElement(
                            "div",
                            { className: "input-field col s4" },
                            React.createElement("input", { placeholder: "$", type: "text", onChange: this.onW2AnnualChange.bind(this), value: this.state.data.get("w2Annual") || "" }),
                            React.createElement(
                                "label",
                                { className: "active" },
                                "W2 Annual"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "input-field col s4" },
                            React.createElement("input", { placeholder: "$", type: "text", onChange: this.onTakehomeAnnualChange.bind(this), value: this.state.data.get("takehomeAnnually") || "" }),
                            React.createElement(
                                "label",
                                { className: "active" },
                                "Takehome Annual"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "input-field col s4" },
                            React.createElement("input", { placeholder: "$", type: "text", onChange: this.onContractAnnualChange.bind(this), value: this.state.data.get("contractAnnual") || "" }),
                            React.createElement(
                                "label",
                                { className: "active" },
                                "Contract Annual"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "row" },
                        React.createElement(
                            "div",
                            { className: "input-field col s4" },
                            React.createElement("input", { placeholder: "$", type: "text", onChange: this.onW2HourlyChange.bind(this), value: this.state.data.get("w2Hourly") || "" }),
                            React.createElement(
                                "label",
                                { className: "active" },
                                "W2 Hourly"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "input-field col s4" },
                            React.createElement("input", { placeholder: "$", type: "text", onChange: this.onTakehomeMonthlyChange.bind(this), value: this.state.data.get("takehomeMonthly") || "" }),
                            React.createElement(
                                "label",
                                { className: "active" },
                                "Takehome Monthly"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "input-field col s4" },
                            React.createElement("input", { placeholder: "$", type: "text", onChange: this.onContractHourlyChange.bind(this), value: this.state.data.get("contractHourly") || "" }),
                            React.createElement(
                                "label",
                                { className: "active" },
                                "Contract Hourly"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "row" },
                        React.createElement(
                            "h4",
                            null,
                            "Parameters"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "row" },
                        React.createElement(
                            "div",
                            { className: "input-field col s4" },
                            React.createElement("input", { placeholder: "$", type: "text", onChange: function (e) {
                                    _actionsCalculateActions2["default"].updateParameters(_this.state.data.set("benefits", e.target.value | 0));
                                }, value: this.state.data.get("benefits") || "" }),
                            React.createElement(
                                "label",
                                { className: "active" },
                                "Benefits"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "input-field col s4" },
                            React.createElement("input", { placeholder: "%", type: "text", onChange: function (e) {
                                    _actionsCalculateActions2["default"].updateParameters(_this.state.data.set("tax", e.target.value | 0));
                                }, value: this.state.data.get("tax") || "" }),
                            React.createElement(
                                "label",
                                { className: "active" },
                                "W2 Tax Rate"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "input-field col s4" },
                            React.createElement("input", { placeholder: "#", type: "text", onChange: function (e) {
                                    _actionsCalculateActions2["default"].updateParameters(_this.state.data.set("vacationDays", e.target.value | 0));
                                }, value: this.state.data.get("vacationDays") || "" }),
                            React.createElement(
                                "label",
                                { className: "active" },
                                "Unpaid Vacation Days"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "row" },
                        React.createElement("div", { className: "input-field col s4" }),
                        React.createElement(
                            "div",
                            { className: "input-field col s4" },
                            React.createElement("input", { placeholder: "%", type: "text", readOnly: true, value: this.state.data.get("selfEmploymentTax") }),
                            React.createElement(
                                "label",
                                { className: "active" },
                                "Self Employment Tax"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "input-field col s4" },
                            React.createElement("input", { placeholder: "%", type: "text", onChange: function (e) {
                                    _actionsCalculateActions2["default"].updateParameters(_this.state.data.set("percentWorkableYear", e.target.value | 0));
                                }, value: this.state.data.get("percentWorkableYear") || "" }),
                            React.createElement(
                                "label",
                                { className: "active" },
                                "% of Year Workable"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "row" },
                        React.createElement("div", { className: "input-field col s4" }),
                        React.createElement("div", { className: "input-field col s4" }),
                        React.createElement(
                            "div",
                            { className: "input-field col s4" },
                            React.createElement("input", { placeholder: "#", type: "text", readOnly: true, value: this.state.data.get("workableDays") || "" }),
                            React.createElement(
                                "label",
                                { className: "active" },
                                "Workable Days"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "row" },
                        React.createElement("div", { className: "input-field col s4" }),
                        React.createElement("div", { className: "input-field col s4" }),
                        React.createElement("div", { className: "input-field col s4" })
                    ),
                    React.createElement(
                        "div",
                        { className: "row" },
                        React.createElement("div", { className: "input-field col s4" }),
                        React.createElement("div", { className: "input-field col s4" }),
                        React.createElement("div", { className: "input-field col s4" })
                    )
                ),
                React.createElement("form", null)
            );
        }
    }]);
    return Component;
})(React.Component);

module.exports = Component;

},{"../actions/calculateActions":2,"../stores/calculateStore":6}],4:[function(require,module,exports){
"use strict";

var Main = (function (_React$Component) {
  babelHelpers.inherits(Main, _React$Component);

  function Main() {
    babelHelpers.classCallCheck(this, Main);
    babelHelpers.get(Object.getPrototypeOf(Main.prototype), "constructor", this).apply(this, arguments);
  }

  babelHelpers.createClass(Main, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(ReactRouter.RouteHandler, null)
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
      componentDidMount() {
      $(this.refs.menuButton.getDOMNode()).sideNav();
    }
      goToLink(route){
      this.context.router.transitionTo(route);
      $(this.refs.menuButton.getDOMNode()).sideNav("hide");
    }
     */

  }], [{
    key: "childContextTypes",
    value: {
      router: React.PropTypes.object
    },
    enumerable: true
  }, {
    key: "contextTypes",
    value: {
      router: React.PropTypes.func
    },
    enumerable: true
  }]);
  return Main;
})(React.Component);

module.exports = Main;

},{}],5:[function(require,module,exports){
"use strict";

var Component = (function (_React$Component) {
    babelHelpers.inherits(Component, _React$Component);

    function Component() {
        babelHelpers.classCallCheck(this, Component);
        babelHelpers.get(Object.getPrototypeOf(Component.prototype), "constructor", this).apply(this, arguments);
    }

    babelHelpers.createClass(Component, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "page" },
                "Meet half way."
            );
        }
    }]);
    return Component;
})(React.Component);

module.exports = Component;

},{}],6:[function(require,module,exports){
"use strict";

var CalculateActions = require("../actions/calculateActions");

var DataStore = (function (_Store) {
    babelHelpers.inherits(DataStore, _Store);

    function DataStore() {
        babelHelpers.classCallCheck(this, _DataStore);

        babelHelpers.get(Object.getPrototypeOf(_DataStore.prototype), "constructor", this).call(this, Immutable.fromJS({
            method: "w2",
            w2Annual: 50000,
            w2Hourly: 0,
            benefits: 0,
            contractAnnual: 0,
            contractHourly: 0,
            takehomeAnnually: 0,
            takehomeMonthly: 0,
            percentWorkableYear: 100,
            workableDays: 365,
            hoursPerDay: 8,
            tax: 25,
            selfEmploymentTax: 7.3,
            vacationDays: 30
        }));
        this.updaters = {
            "contractannual": this.updateContractAnnualSalary.bind(this),
            "contracthourly": this.updateContractHourlySalary.bind(this),
            "takehomeannually": this.updateTakeHomeAnnualSalary.bind(this),
            "takehomemonthly": this.updateTakeHomeMonthlySalary.bind(this),
            "w2annually": this.updateW2AnnualSalary.bind(this),
            "w2hourly": this.updateW2HourlySalary.bind(this)
        };
        CalculateActions.updateContractAnnualSalary.subscribe(this.updateContractAnnualSalary.bind(this));
        CalculateActions.updateContractHourlySalary.subscribe(this.updateContractHourlySalary.bind(this));
        CalculateActions.updateParameters.subscribe(this.updateParameters.bind(this));
        CalculateActions.updateTakeHomeAnnualSalary.subscribe(this.updateTakeHomeAnnualSalary.bind(this));
        CalculateActions.updateTakeHomeMonthlySalary.subscribe(this.updateTakeHomeMonthlySalary.bind(this));
        CalculateActions.updateW2HourlySalary.subscribe(this.updateW2HourlySalary.bind(this));
        CalculateActions.updateW2AnnualSalary.subscribe(this.updateW2AnnualSalary.bind(this));
        this.updateW2AnnualSalary(50000);
    }

    babelHelpers.createClass(DataStore, [{
        key: "updateParameters",
        value: function updateParameters(state) {
            this.setState(state);
            this.updaters[this.state.get("method")]();
        }
    }, {
        key: "updateContractAnnualSalary",
        value: function updateContractAnnualSalary(value) {
            var _this = this;

            this.updateCalcs("contractannual", function (wDays, hrPerDay, tax, selfEmploymentTax, benefits) {
                var contractAnnual = value !== undefined ? value : _this.state.get("contractAnnual");
                var contractHourly = value / wDays / hrPerDay;
                var takehomeAnnually = contractAnnual * (1 - tax / 100 - selfEmploymentTax / 100);
                var takehomeMonthly = takehomeAnnually / 12;
                var w2Annual = takehomeAnnually / (1 - tax / 100);
                var w2Hourly = w2Annual / (365 * 5 / 7) / hrPerDay;
                return {
                    w2Hourly: w2Hourly,
                    w2Annual: w2Annual,
                    takehomeAnnually: takehomeAnnually,
                    takehomeMonthly: takehomeMonthly,
                    contractAnnual: contractAnnual,
                    contractHourly: contractHourly
                };
            });
        }
    }, {
        key: "updateContractHourlySalary",
        value: function updateContractHourlySalary(value) {
            var _this2 = this;

            this.updateCalcs("contracthourly", function (wDays, hrPerDay, tax, selfEmploymentTax, benefits) {
                var contractHourly = value !== undefined ? value : _this2.state.get("contractHourly");
                var contractAnnual = value * wDays * hrPerDay;
                var takehomeAnnually = contractAnnual * (1 - tax / 100 - selfEmploymentTax / 100);
                var takehomeMonthly = takehomeAnnually / 12;
                var w2Annual = takehomeAnnually / (1 - tax / 100);
                var w2Hourly = w2Annual / (365 * 5 / 7) / hrPerDay;
                return {
                    w2Hourly: w2Hourly,
                    w2Annual: w2Annual,
                    takehomeAnnually: takehomeAnnually,
                    takehomeMonthly: takehomeMonthly,
                    contractAnnual: contractAnnual,
                    contractHourly: contractHourly
                };
            });
        }
    }, {
        key: "updateTakeHomeAnnualSalary",
        value: function updateTakeHomeAnnualSalary(value) {
            var _this3 = this;

            this.updateCalcs("takehomeannually", function (wDays, hrPerDay, tax, selfEmploymentTax, benefits) {
                var takehomeAnnually = value !== undefined ? value : _this3.state.get("takehomeAnnually");
                var takehomeMonthly = takehomeAnnually / 12;
                var w2Annual = takehomeAnnually / (1 - tax / 100);
                var w2Hourly = w2Annual / (365 * 5 / 7) / hrPerDay;
                var contractAnnual = (takehomeAnnually + benefits) / (1 - tax / 100 - selfEmploymentTax / 100);
                var contractHourly = contractAnnual / wDays / hrPerDay;
                return {
                    w2Hourly: w2Hourly,
                    w2Annual: w2Annual,
                    takehomeAnnually: takehomeAnnually,
                    takehomeMonthly: takehomeMonthly,
                    contractAnnual: contractAnnual,
                    contractHourly: contractHourly
                };
            });
        }
    }, {
        key: "updateTakeHomeMonthlySalary",
        value: function updateTakeHomeMonthlySalary(value) {
            var _this4 = this;

            this.updateCalcs("takehomemonthly", function (wDays, hrPerDay, tax, selfEmploymentTax, benefits) {
                var takehomeMonthly = value !== undefined ? value : _this4.state.get("takehomeMonthly");
                var takehomeAnnually = takehomeMonthly * 12;
                var w2Annual = takehomeAnnually / (1 - tax / 100);
                var w2Hourly = w2Annual / (365 * 5 / 7) / hrPerDay;
                var contractAnnual = (takehomeAnnually + benefits) / (1 - tax / 100 - selfEmploymentTax / 100);
                var contractHourly = contractAnnual / wDays / hrPerDay;
                return {
                    w2Hourly: w2Hourly,
                    w2Annual: w2Annual,
                    takehomeAnnually: takehomeAnnually,
                    takehomeMonthly: takehomeMonthly,
                    contractAnnual: contractAnnual,
                    contractHourly: contractHourly
                };
            });
        }
    }, {
        key: "updateW2AnnualSalary",
        value: function updateW2AnnualSalary(value) {
            var _this5 = this;

            this.updateCalcs("w2annually", function (wDays, hrPerDay, tax, selfEmploymentTax, benefits) {
                var w2Annual = value !== undefined ? value : _this5.state.get("w2Annual");
                var w2Hourly = w2Annual / (365 * 5 / 7) / hrPerDay;
                var takehomeAnnually = w2Annual * (1 - tax / 100);
                var takehomeMonthly = takehomeAnnually / 12;
                var contractAnnual = (takehomeAnnually + benefits) / (1 - tax / 100 - selfEmploymentTax / 100);
                var contractHourly = contractAnnual / wDays / hrPerDay;
                return {
                    w2Hourly: w2Hourly,
                    w2Annual: w2Annual,
                    takehomeAnnually: takehomeAnnually,
                    takehomeMonthly: takehomeMonthly,
                    contractAnnual: contractAnnual,
                    contractHourly: contractHourly
                };
            });
        }
    }, {
        key: "updateW2HourlySalary",
        value: function updateW2HourlySalary(value) {
            var _this6 = this;

            this.updateCalcs("w2hourly", function (wDays, hrPerDay, tax, selfEmploymentTax, benefits) {
                var w2Hourly = value !== undefined ? value : _this6.state.get("w2Hourly");
                var w2Annual = w2Hourly * (365 * 5 / 7) * hrPerDay;
                var takehomeAnnually = Math.ceil(w2Annual * (1 - tax / 100));
                var takehomeMonthly = Math.ceiltakehomeAnnually / 12;
                var contractAnnual = (takehomeAnnually + benefits) / (1 - tax / 100 - selfEmploymentTax / 100);
                var contractHourly = Math.ceil(contractAnnual / wDays / hrPerDay);
                return {
                    w2Hourly: w2Hourly,
                    w2Annual: w2Annual,
                    takehomeAnnually: takehomeAnnually,
                    takehomeMonthly: takehomeMonthly,
                    contractAnnual: contractAnnual,
                    contractHourly: contractHourly
                };
            });
        }
    }, {
        key: "updateCalcs",
        value: function updateCalcs(method, calc) {
            var wDays = 365;
            wDays *= 5 / 7;
            wDays -= this.state.get("vacationDays");
            wDays = Math.ceil(wDays * this.state.get("percentWorkableYear") / 100);

            var hrPerDay = this.state.get("hoursPerDay");
            var tax = this.state.get("tax");
            var selfEmploymentTax = this.state.get("selfEmploymentTax");

            var __ret = calc(wDays, hrPerDay, tax, selfEmploymentTax, this.state.get("benefits"));

            this.setState(this.state.withMutations(function (newState) {
                newState.set("method", method);
                newState.set("workableDays", wDays);
                newState.set("w2Annual", Math.ceil(__ret.w2Annual));
                newState.set("w2Hourly", Math.ceil(__ret.w2Hourly));
                newState.set("contractAnnual", Math.ceil(__ret.contractAnnual));
                newState.set("contractHourly", Math.ceil(__ret.contractHourly));
                newState.set("takehomeAnnually", Math.ceil(__ret.takehomeAnnually));
                newState.set("takehomeMonthly", Math.ceil(__ret.takehomeMonthly));
            }));
        }
    }]);
    var _DataStore = DataStore;
    DataStore = Singleton(DataStore) || DataStore;
    return DataStore;
})(Store);

module.exports = DataStore;

},{"../actions/calculateActions":2}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlc1xcYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwiYzovVXNlcnMvUmljaGFyZC9zb3VyY2UvSG93TXVjaFNob3VsZElBc2tGb3Ivc3JjL2FwcC9hcHAuanN4IiwiYzovVXNlcnMvUmljaGFyZC9zb3VyY2UvSG93TXVjaFNob3VsZElBc2tGb3Ivc3JjL2FwcC9hY3Rpb25zL2NhbGN1bGF0ZUFjdGlvbnMuanMiLCJjOi9Vc2Vycy9SaWNoYXJkL3NvdXJjZS9Ib3dNdWNoU2hvdWxkSUFza0Zvci9zcmMvYXBwL2NvbXBvbmVudHMvY2FsY3VsYXRlLmpzeCIsImM6L1VzZXJzL1JpY2hhcmQvc291cmNlL0hvd011Y2hTaG91bGRJQXNrRm9yL3NyYy9hcHAvY29tcG9uZW50cy9tYWluLmpzeCIsImM6L1VzZXJzL1JpY2hhcmQvc291cmNlL0hvd011Y2hTaG91bGRJQXNrRm9yL3NyYy9hcHAvY29tcG9uZW50cy9uZWdvdGlhdGluZy5qc3giLCJjOi9Vc2Vycy9SaWNoYXJkL3NvdXJjZS9Ib3dNdWNoU2hvdWxkSUFza0Zvci9zcmMvYXBwL3N0b3Jlcy9jYWxjdWxhdGVTdG9yZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsQ0FBQyxZQUFZO0FBQ1gsTUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFDNUMsTUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLDRCQUE0QixDQUFDLENBQUM7QUFDdEQsTUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7O0FBRTFELE1BQUksTUFBTSxHQUNSO0FBQUMsZUFBVyxDQUFDLEtBQUs7TUFBQyxPQUFPLEVBQUUsSUFBSSxBQUFDO0lBQy9CLG9CQUFDLFdBQVcsQ0FBQyxLQUFLLElBQUMsSUFBSSxFQUFDLEdBQUcsRUFBQyxPQUFPLEVBQUUsU0FBUyxBQUFDLEdBQUU7SUFDakQsb0JBQUMs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LEdBQUcsU0FBUyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIihmdW5jdGlvbiAoKSB7XHJcbiAgbGV0IE1haW4gPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvbWFpbi5qc3gnKTsgLy8gT3VyIGN1c3RvbSByZWFjdCBjb21wb25lbnRcclxuICBsZXQgQ2FsY3VsYXRlID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2NhbGN1bGF0ZS5qc3gnKTtcclxuICBsZXQgTmVnb3RpYXRpbmcgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvbmVnb3RpYXRpbmcuanN4Jyk7XHJcblxyXG4gIHZhciByb3V0ZXMgPVxyXG4gICAgPFJlYWN0Um91dGVyLlJvdXRlIGhhbmRsZXI9e01haW59PlxyXG4gICAgICA8UmVhY3RSb3V0ZXIuUm91dGUgcGF0aD1cIi9cIiBoYW5kbGVyPXtDYWxjdWxhdGV9Lz5cclxuICAgICAgPFJlYWN0Um91dGVyLlJvdXRlIHBhdGg9XCIvbmVnb3RpYXRpbmdcIiBoYW5kbGVyPXtOZWdvdGlhdGluZ30vPlxyXG4gICAgPC9SZWFjdFJvdXRlci5Sb3V0ZT5cclxuXHJcbiAgUmVhY3RSb3V0ZXIucnVuKHJvdXRlcywgUmVhY3RSb3V0ZXIuSGFzaExvY2F0aW9uLCAoUm9vdCkgPT4ge1xyXG4gICAgUmVhY3QucmVuZGVyKDxSb290IC8+LCBkb2N1bWVudC5ib2R5KTtcclxuICB9KTtcclxufSkoKTtcclxuIiwiZXhwb3J0cy51cGRhdGVXMkFubnVhbFNhbGFyeSA9IEFjdGlvbi5jcmVhdGUoKTtcclxuZXhwb3J0cy51cGRhdGVXMkhvdXJseVNhbGFyeSA9IEFjdGlvbi5jcmVhdGUoKTtcclxuZXhwb3J0cy51cGRhdGVUYWtlSG9tZUFubnVhbFNhbGFyeSA9IEFjdGlvbi5jcmVhdGUoKTtcclxuZXhwb3J0cy51cGRhdGVUYWtlSG9tZU1vbnRobHlTYWxhcnkgPSBBY3Rpb24uY3JlYXRlKCk7XHJcbmV4cG9ydHMudXBkYXRlQ29udHJhY3RBbm51YWxTYWxhcnkgPSBBY3Rpb24uY3JlYXRlKCk7XHJcbmV4cG9ydHMudXBkYXRlQ29udHJhY3RIb3VybHlTYWxhcnkgPSBBY3Rpb24uY3JlYXRlKCk7XHJcbmV4cG9ydHMudXBkYXRlUGFyYW1ldGVycyA9IEFjdGlvbi5jcmVhdGUoKTsiLCJpbXBvcnQgQ2FsY3VsYXRlU3RvcmUgZnJvbSBcIi4uL3N0b3Jlcy9jYWxjdWxhdGVTdG9yZVwiO1xyXG5pbXBvcnQgQ2FsY3VsYXRlQWN0aW9ucyBmcm9tIFwiLi4vYWN0aW9ucy9jYWxjdWxhdGVBY3Rpb25zXCI7XHJcblxyXG5jbGFzcyBDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIENhbGN1bGF0ZVN0b3JlLmluc3RhbmNlLnN1YnNjcmliZSh0aGlzLm9uQ2FsY3VsYXRlU3RhdGUuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DYWxjdWxhdGVTdGF0ZShzdGF0ZSl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6c3RhdGVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uVzJIb3VybHlDaGFuZ2UoZSl7XHJcbiAgICAgICAgQ2FsY3VsYXRlQWN0aW9ucy51cGRhdGVXMkhvdXJseVNhbGFyeShlLnRhcmdldC52YWx1ZXwwKTtcclxuICAgIH1cclxuXHJcbiAgICBvblcyQW5udWFsQ2hhbmdlKGUpe1xyXG4gICAgICAgIENhbGN1bGF0ZUFjdGlvbnMudXBkYXRlVzJBbm51YWxTYWxhcnkoZS50YXJnZXQudmFsdWV8MCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25UYWtlaG9tZUFubnVhbENoYW5nZShlKXtcclxuICAgICAgICBDYWxjdWxhdGVBY3Rpb25zLnVwZGF0ZVRha2VIb21lQW5udWFsU2FsYXJ5KGUudGFyZ2V0LnZhbHVlfDApO1xyXG4gICAgfVxyXG4gICAgb25UYWtlaG9tZU1vbnRobHlDaGFuZ2UoZSl7XHJcbiAgICAgICAgQ2FsY3VsYXRlQWN0aW9ucy51cGRhdGVUYWtlSG9tZU1vbnRobHlTYWxhcnkoZS50YXJnZXQudmFsdWV8MCk7XHJcbiAgICB9XHJcbiAgICBvbkNvbnRyYWN0QW5udWFsQ2hhbmdlKGUpe1xyXG4gICAgICAgIENhbGN1bGF0ZUFjdGlvbnMudXBkYXRlQ29udHJhY3RBbm51YWxTYWxhcnkoZS50YXJnZXQudmFsdWV8MCk7XHJcbiAgICB9XHJcbiAgICBvbkNvbnRyYWN0SG91cmx5Q2hhbmdlKGUpe1xyXG4gICAgICAgIENhbGN1bGF0ZUFjdGlvbnMudXBkYXRlQ29udHJhY3RIb3VybHlTYWxhcnkoZS50YXJnZXQudmFsdWV8MCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmKCF0aGlzLnN0YXRlKXtyZXR1cm4gKDxkaXYvPil9XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlXCI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJjb2wgczEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkhvdyB0byB1c2U/PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGhpcyBpcyBhIGZvcm0gZm9yIGRpc2NvdmVyaW5nIGEgcm91Z2ggZXN0aW1hdGUgb2YgaG93IG11Y2ggb25lIHNob3VsZCBjaGFyZ2UgYXMgYSBjb250cmFjdG9yLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkVudGVyIGluIHlvdXIgbW9udGhseSB0YWtlaG9tZTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QWRqdXN0IHRheCByYXRlIHVudGlsIHlvdXIgeWVhcmx5IFcyIHNhbGFyeSBsb29rcyByaWdodDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+UGxheSB3aXRoIHBhcmFtZXRlcnMgdW50aWwgeW91ciBjb25kaXRpb25zIGFyZSBhcHByb3hpbWF0ZWQ8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5TYWxhcnk8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5UaGVzZSBjb2x1bW5zIHJlcHJlc2VudCBlcXVpdmFsYW50IHNpdHVhdGlvbnMgb2YgcXVhbGl0eSBvZiBsaXZpbmcuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCIkXCIgdHlwZT1cInRleHRcIiAgb25DaGFuZ2U9e3RoaXMub25XMkFubnVhbENoYW5nZS5iaW5kKHRoaXMpfSB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLmdldChcIncyQW5udWFsXCIpfHxcIlwifS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYWN0aXZlXCI+VzIgQW5udWFsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCIkXCIgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5vblRha2Vob21lQW5udWFsQ2hhbmdlLmJpbmQodGhpcyl9IHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEuZ2V0KFwidGFrZWhvbWVBbm51YWxseVwiKXx8XCJcIn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImFjdGl2ZVwiPlRha2Vob21lIEFubnVhbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiJFwiIHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMub25Db250cmFjdEFubnVhbENoYW5nZS5iaW5kKHRoaXMpfSB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLmdldChcImNvbnRyYWN0QW5udWFsXCIpfHxcIlwifS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYWN0aXZlXCI+Q29udHJhY3QgQW5udWFsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIiRcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLm9uVzJIb3VybHlDaGFuZ2UuYmluZCh0aGlzKX0gdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5nZXQoXCJ3MkhvdXJseVwiKXx8XCJcIn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImFjdGl2ZVwiPlcyIEhvdXJseTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiJFwiIHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMub25UYWtlaG9tZU1vbnRobHlDaGFuZ2UuYmluZCh0aGlzKX0gdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5nZXQoXCJ0YWtlaG9tZU1vbnRobHlcIil8fFwiXCJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJhY3RpdmVcIj5UYWtlaG9tZSBNb250aGx5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCIkXCIgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5vbkNvbnRyYWN0SG91cmx5Q2hhbmdlLmJpbmQodGhpcyl9IHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEuZ2V0KFwiY29udHJhY3RIb3VybHlcIil8fFwiXCJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJhY3RpdmVcIj5Db250cmFjdCBIb3VybHk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+UGFyYW1ldGVyczwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIiRcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoZSk9PntDYWxjdWxhdGVBY3Rpb25zLnVwZGF0ZVBhcmFtZXRlcnModGhpcy5zdGF0ZS5kYXRhLnNldChcImJlbmVmaXRzXCIsZS50YXJnZXQudmFsdWV8MCkpfX0gdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5nZXQoXCJiZW5lZml0c1wiKXx8XCJcIn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImFjdGl2ZVwiPkJlbmVmaXRzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCIlXCIgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17KGUpPT57Q2FsY3VsYXRlQWN0aW9ucy51cGRhdGVQYXJhbWV0ZXJzKHRoaXMuc3RhdGUuZGF0YS5zZXQoXCJ0YXhcIixlLnRhcmdldC52YWx1ZXwwKSl9fSB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLmdldChcInRheFwiKXx8XCJcIn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImFjdGl2ZVwiPlcyIFRheCBSYXRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCIjXCIgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17KGUpPT57Q2FsY3VsYXRlQWN0aW9ucy51cGRhdGVQYXJhbWV0ZXJzKHRoaXMuc3RhdGUuZGF0YS5zZXQoXCJ2YWNhdGlvbkRheXNcIixlLnRhcmdldC52YWx1ZXwwKSl9fSB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLmdldChcInZhY2F0aW9uRGF5c1wiKXx8XCJcIn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImFjdGl2ZVwiPlVucGFpZCBWYWNhdGlvbiBEYXlzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiJVwiIHR5cGU9XCJ0ZXh0XCIgcmVhZE9ubHkgdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5nZXQoXCJzZWxmRW1wbG95bWVudFRheFwiKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImFjdGl2ZVwiPlNlbGYgRW1wbG95bWVudCBUYXg8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIiVcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoZSk9PntDYWxjdWxhdGVBY3Rpb25zLnVwZGF0ZVBhcmFtZXRlcnModGhpcy5zdGF0ZS5kYXRhLnNldChcInBlcmNlbnRXb3JrYWJsZVllYXJcIixlLnRhcmdldC52YWx1ZXwwKSl9fSB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLmdldChcInBlcmNlbnRXb3JrYWJsZVllYXJcIil8fFwiXCJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJhY3RpdmVcIj4lIG9mIFllYXIgV29ya2FibGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM0XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIiNcIiB0eXBlPVwidGV4dFwiIHJlYWRPbmx5IHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEuZ2V0KFwid29ya2FibGVEYXlzXCIpfHxcIlwifS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYWN0aXZlXCI+V29ya2FibGUgRGF5czwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM0XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM0XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDxmb3JtPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudDsiLCJjbGFzcyBNYWluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBzdGF0aWMgY2hpbGRDb250ZXh0VHlwZXMgPSB7XHJcbiAgICByb3V0ZXI6IFJlYWN0LlByb3BUeXBlcy5vYmplY3RcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XHJcbiAgICByb3V0ZXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxSZWFjdFJvdXRlci5Sb3V0ZUhhbmRsZXIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICA8bmF2IGNsYXNzTmFtZT1cImdyZXkgZGFya2VuLTNcIj5cclxuICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtd3JhcHBlclwiPlxyXG4gICA8YSByZWY9XCJtZW51QnV0dG9uXCIgZGF0YS1hY3RpdmF0ZXM9XCJzbGlkZS1vdXRcIiBjbGFzc05hbWU9XCJicmFuZC1sb2dvXCI+Jm5ic3A7PHNwYW4gY2xhc3NOYW1lPVwiZmEgZmEtYmFyc1wiPjwvc3Bhbj4gSG93IE11Y2ggU2hvdWxkIEkgQXNrIEZvcj88L2E+XHJcbiAgIDx1bCBjbGFzc05hbWU9XCJyaWdodCBoaWRlLW9uLW1lZC1hbmQtZG93blwiPlxyXG4gICA8L3VsPlxyXG4gICA8dWwgaWQ9XCJzbGlkZS1vdXRcIiBjbGFzc05hbWU9XCJzaWRlLW5hdlwiPlxyXG4gICA8bGk+PGEgb25DbGljaz17dGhpcy5nb1RvTGluay5iaW5kKHRoaXMsXCIvXCIpfT5DYWxjdWxhdGU8L2E+PC9saT5cclxuICAgPGxpPjxhIG9uQ2xpY2s9e3RoaXMuZ29Ub0xpbmsuYmluZCh0aGlzLFwiL25lZ290aWF0aW5nXCIpfT5OZWdvdGlhdGluZzwvYT48L2xpPlxyXG4gICA8L3VsPlxyXG4gICA8L2Rpdj5cclxuICAgPC9uYXY+XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgJCh0aGlzLnJlZnMubWVudUJ1dHRvbi5nZXRET01Ob2RlKCkpLnNpZGVOYXYoKTtcclxuICB9XHJcblxyXG4gIGdvVG9MaW5rKHJvdXRlKXtcclxuICAgIHRoaXMuY29udGV4dC5yb3V0ZXIudHJhbnNpdGlvblRvKHJvdXRlKTtcclxuICAgICQodGhpcy5yZWZzLm1lbnVCdXR0b24uZ2V0RE9NTm9kZSgpKS5zaWRlTmF2KFwiaGlkZVwiKTtcclxuICB9XHJcbiAgICovXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTWFpbjtcclxuIiwiY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwicGFnZVwiPlxyXG4gICAgICAgICAgICBNZWV0IGhhbGYgd2F5LlxyXG4gICAgICAgIDwvZGl2PilcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQ7IiwibGV0IENhbGN1bGF0ZUFjdGlvbnMgPSByZXF1aXJlKCcuLi9hY3Rpb25zL2NhbGN1bGF0ZUFjdGlvbnMnKTtcclxuXHJcbkBTaW5nbGV0b25cclxuY2xhc3MgRGF0YVN0b3JlIGV4dGVuZHMgU3RvcmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoSW1tdXRhYmxlLmZyb21KUyhcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIncyXCIsXHJcbiAgICAgICAgICAgICAgICB3MkFubnVhbDogNTAwMDAsXHJcbiAgICAgICAgICAgICAgICB3MkhvdXJseTogMCxcclxuICAgICAgICAgICAgICAgIGJlbmVmaXRzOiAwLFxyXG4gICAgICAgICAgICAgICAgY29udHJhY3RBbm51YWw6IDAsXHJcbiAgICAgICAgICAgICAgICBjb250cmFjdEhvdXJseTogMCxcclxuICAgICAgICAgICAgICAgIHRha2Vob21lQW5udWFsbHk6IDAsXHJcbiAgICAgICAgICAgICAgICB0YWtlaG9tZU1vbnRobHk6IDAsXHJcbiAgICAgICAgICAgICAgICBwZXJjZW50V29ya2FibGVZZWFyOiAxMDAsXHJcbiAgICAgICAgICAgICAgICB3b3JrYWJsZURheXM6IDM2NSxcclxuICAgICAgICAgICAgICAgIGhvdXJzUGVyRGF5OiA4LFxyXG4gICAgICAgICAgICAgICAgdGF4OiAyNSxcclxuICAgICAgICAgICAgICAgIHNlbGZFbXBsb3ltZW50VGF4OiA3LjMsXHJcbiAgICAgICAgICAgICAgICB2YWNhdGlvbkRheXM6IDMwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApKTtcclxuICAgICAgICBDYWxjdWxhdGVBY3Rpb25zLnVwZGF0ZUNvbnRyYWN0QW5udWFsU2FsYXJ5LnN1YnNjcmliZSh0aGlzLnVwZGF0ZUNvbnRyYWN0QW5udWFsU2FsYXJ5LmJpbmQodGhpcykpO1xyXG4gICAgICAgIENhbGN1bGF0ZUFjdGlvbnMudXBkYXRlQ29udHJhY3RIb3VybHlTYWxhcnkuc3Vic2NyaWJlKHRoaXMudXBkYXRlQ29udHJhY3RIb3VybHlTYWxhcnkuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgQ2FsY3VsYXRlQWN0aW9ucy51cGRhdGVQYXJhbWV0ZXJzLnN1YnNjcmliZSh0aGlzLnVwZGF0ZVBhcmFtZXRlcnMuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgQ2FsY3VsYXRlQWN0aW9ucy51cGRhdGVUYWtlSG9tZUFubnVhbFNhbGFyeS5zdWJzY3JpYmUodGhpcy51cGRhdGVUYWtlSG9tZUFubnVhbFNhbGFyeS5iaW5kKHRoaXMpKTtcclxuICAgICAgICBDYWxjdWxhdGVBY3Rpb25zLnVwZGF0ZVRha2VIb21lTW9udGhseVNhbGFyeS5zdWJzY3JpYmUodGhpcy51cGRhdGVUYWtlSG9tZU1vbnRobHlTYWxhcnkuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgQ2FsY3VsYXRlQWN0aW9ucy51cGRhdGVXMkhvdXJseVNhbGFyeS5zdWJzY3JpYmUodGhpcy51cGRhdGVXMkhvdXJseVNhbGFyeS5iaW5kKHRoaXMpKTtcclxuICAgICAgICBDYWxjdWxhdGVBY3Rpb25zLnVwZGF0ZVcyQW5udWFsU2FsYXJ5LnN1YnNjcmliZSh0aGlzLnVwZGF0ZVcyQW5udWFsU2FsYXJ5LmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVzJBbm51YWxTYWxhcnkoNTAwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZXJzID0ge1xyXG4gICAgICAgIFwiY29udHJhY3Rhbm51YWxcIjp0aGlzLnVwZGF0ZUNvbnRyYWN0QW5udWFsU2FsYXJ5LmJpbmQodGhpcyksXHJcbiAgICAgICAgXCJjb250cmFjdGhvdXJseVwiOnRoaXMudXBkYXRlQ29udHJhY3RIb3VybHlTYWxhcnkuYmluZCh0aGlzKSxcclxuICAgICAgICBcInRha2Vob21lYW5udWFsbHlcIjp0aGlzLnVwZGF0ZVRha2VIb21lQW5udWFsU2FsYXJ5LmJpbmQodGhpcyksXHJcbiAgICAgICAgXCJ0YWtlaG9tZW1vbnRobHlcIjp0aGlzLnVwZGF0ZVRha2VIb21lTW9udGhseVNhbGFyeS5iaW5kKHRoaXMpLFxyXG4gICAgICAgIFwidzJhbm51YWxseVwiOnRoaXMudXBkYXRlVzJBbm51YWxTYWxhcnkuYmluZCh0aGlzKSxcclxuICAgICAgICBcIncyaG91cmx5XCI6dGhpcy51cGRhdGVXMkhvdXJseVNhbGFyeS5iaW5kKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlUGFyYW1ldGVycyhzdGF0ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlcnNbdGhpcy5zdGF0ZS5nZXQoXCJtZXRob2RcIildKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQ29udHJhY3RBbm51YWxTYWxhcnkodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNhbGNzKFwiY29udHJhY3Rhbm51YWxcIiwod0RheXMsIGhyUGVyRGF5LCB0YXgsIHNlbGZFbXBsb3ltZW50VGF4LCBiZW5lZml0cykgPT4ge1xyXG4gICAgICAgICAgICB2YXIgY29udHJhY3RBbm51YWwgPSB2YWx1ZSE9PXVuZGVmaW5lZD92YWx1ZTp0aGlzLnN0YXRlLmdldChcImNvbnRyYWN0QW5udWFsXCIpO1xyXG4gICAgICAgICAgICB2YXIgY29udHJhY3RIb3VybHkgPSB2YWx1ZS93RGF5cy9oclBlckRheVxyXG4gICAgICAgICAgICB2YXIgdGFrZWhvbWVBbm51YWxseSA9IGNvbnRyYWN0QW5udWFsKigxLXRheC8xMDAtc2VsZkVtcGxveW1lbnRUYXgvMTAwKVxyXG4gICAgICAgICAgICB2YXIgdGFrZWhvbWVNb250aGx5ID0gdGFrZWhvbWVBbm51YWxseS8xMjtcclxuICAgICAgICAgICAgdmFyIHcyQW5udWFsID0gdGFrZWhvbWVBbm51YWxseS8oMS10YXgvMTAwKTtcclxuICAgICAgICAgICAgdmFyIHcySG91cmx5ID0gdzJBbm51YWwvKDM2NSo1LzcpL2hyUGVyRGF5O1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdzJIb3VybHk6IHcySG91cmx5LFxyXG4gICAgICAgICAgICAgICAgdzJBbm51YWw6IHcyQW5udWFsLFxyXG4gICAgICAgICAgICAgICAgdGFrZWhvbWVBbm51YWxseTogdGFrZWhvbWVBbm51YWxseSxcclxuICAgICAgICAgICAgICAgIHRha2Vob21lTW9udGhseTogdGFrZWhvbWVNb250aGx5LFxyXG4gICAgICAgICAgICAgICAgY29udHJhY3RBbm51YWw6IGNvbnRyYWN0QW5udWFsLFxyXG4gICAgICAgICAgICAgICAgY29udHJhY3RIb3VybHk6IGNvbnRyYWN0SG91cmx5XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVDb250cmFjdEhvdXJseVNhbGFyeSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ2FsY3MoXCJjb250cmFjdGhvdXJseVwiLCh3RGF5cywgaHJQZXJEYXksIHRheCwgc2VsZkVtcGxveW1lbnRUYXgsIGJlbmVmaXRzKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBjb250cmFjdEhvdXJseSA9IHZhbHVlIT09dW5kZWZpbmVkP3ZhbHVlOnRoaXMuc3RhdGUuZ2V0KFwiY29udHJhY3RIb3VybHlcIik7XHJcbiAgICAgICAgICAgIHZhciBjb250cmFjdEFubnVhbCA9IHZhbHVlKndEYXlzKmhyUGVyRGF5XHJcbiAgICAgICAgICAgIHZhciB0YWtlaG9tZUFubnVhbGx5ID0gY29udHJhY3RBbm51YWwqKDEtdGF4LzEwMC1zZWxmRW1wbG95bWVudFRheC8xMDApXHJcbiAgICAgICAgICAgIHZhciB0YWtlaG9tZU1vbnRobHkgPSB0YWtlaG9tZUFubnVhbGx5LzEyO1xyXG4gICAgICAgICAgICB2YXIgdzJBbm51YWwgPSB0YWtlaG9tZUFubnVhbGx5LygxLXRheC8xMDApO1xyXG4gICAgICAgICAgICB2YXIgdzJIb3VybHkgPSB3MkFubnVhbC8oMzY1KjUvNykvaHJQZXJEYXk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB3MkhvdXJseTogdzJIb3VybHksXHJcbiAgICAgICAgICAgICAgICB3MkFubnVhbDogdzJBbm51YWwsXHJcbiAgICAgICAgICAgICAgICB0YWtlaG9tZUFubnVhbGx5OiB0YWtlaG9tZUFubnVhbGx5LFxyXG4gICAgICAgICAgICAgICAgdGFrZWhvbWVNb250aGx5OiB0YWtlaG9tZU1vbnRobHksXHJcbiAgICAgICAgICAgICAgICBjb250cmFjdEFubnVhbDogY29udHJhY3RBbm51YWwsXHJcbiAgICAgICAgICAgICAgICBjb250cmFjdEhvdXJseTogY29udHJhY3RIb3VybHlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVRha2VIb21lQW5udWFsU2FsYXJ5KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDYWxjcyhcInRha2Vob21lYW5udWFsbHlcIiwod0RheXMsIGhyUGVyRGF5LCB0YXgsIHNlbGZFbXBsb3ltZW50VGF4LCBiZW5lZml0cykgPT4ge1xyXG4gICAgICAgICAgICB2YXIgdGFrZWhvbWVBbm51YWxseSA9IHZhbHVlIT09dW5kZWZpbmVkP3ZhbHVlOnRoaXMuc3RhdGUuZ2V0KFwidGFrZWhvbWVBbm51YWxseVwiKTtcclxuICAgICAgICAgICAgdmFyIHRha2Vob21lTW9udGhseSA9IHRha2Vob21lQW5udWFsbHkvMTI7XHJcbiAgICAgICAgICAgIHZhciB3MkFubnVhbCA9IHRha2Vob21lQW5udWFsbHkvKDEtdGF4LzEwMCk7XHJcbiAgICAgICAgICAgIHZhciB3MkhvdXJseSA9IHcyQW5udWFsLygzNjUqNS83KS9oclBlckRheTtcclxuICAgICAgICAgICAgdmFyIGNvbnRyYWN0QW5udWFsID0gKHRha2Vob21lQW5udWFsbHkrYmVuZWZpdHMpIC8gKDEgLSB0YXggLyAxMDAgLSBzZWxmRW1wbG95bWVudFRheCAvIDEwMClcclxuICAgICAgICAgICAgdmFyIGNvbnRyYWN0SG91cmx5ID0gY29udHJhY3RBbm51YWwgLyB3RGF5cyAvIGhyUGVyRGF5O1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdzJIb3VybHk6IHcySG91cmx5LFxyXG4gICAgICAgICAgICAgICAgdzJBbm51YWw6IHcyQW5udWFsLFxyXG4gICAgICAgICAgICAgICAgdGFrZWhvbWVBbm51YWxseTogdGFrZWhvbWVBbm51YWxseSxcclxuICAgICAgICAgICAgICAgIHRha2Vob21lTW9udGhseTogdGFrZWhvbWVNb250aGx5LFxyXG4gICAgICAgICAgICAgICAgY29udHJhY3RBbm51YWw6IGNvbnRyYWN0QW5udWFsLFxyXG4gICAgICAgICAgICAgICAgY29udHJhY3RIb3VybHk6IGNvbnRyYWN0SG91cmx5XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVUYWtlSG9tZU1vbnRobHlTYWxhcnkodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNhbGNzKFwidGFrZWhvbWVtb250aGx5XCIsKHdEYXlzLCBoclBlckRheSwgdGF4LCBzZWxmRW1wbG95bWVudFRheCwgYmVuZWZpdHMpID0+IHtcclxuICAgICAgICAgICAgdmFyIHRha2Vob21lTW9udGhseSA9IHZhbHVlIT09dW5kZWZpbmVkP3ZhbHVlOnRoaXMuc3RhdGUuZ2V0KFwidGFrZWhvbWVNb250aGx5XCIpO1xyXG4gICAgICAgICAgICB2YXIgdGFrZWhvbWVBbm51YWxseSA9IHRha2Vob21lTW9udGhseSoxMjtcclxuICAgICAgICAgICAgdmFyIHcyQW5udWFsID0gdGFrZWhvbWVBbm51YWxseS8oMS10YXgvMTAwKTtcclxuICAgICAgICAgICAgdmFyIHcySG91cmx5ID0gdzJBbm51YWwvKDM2NSo1LzcpL2hyUGVyRGF5O1xyXG4gICAgICAgICAgICB2YXIgY29udHJhY3RBbm51YWwgPSAodGFrZWhvbWVBbm51YWxseStiZW5lZml0cykgLyAoMSAtIHRheCAvIDEwMCAtIHNlbGZFbXBsb3ltZW50VGF4IC8gMTAwKVxyXG4gICAgICAgICAgICB2YXIgY29udHJhY3RIb3VybHkgPSBjb250cmFjdEFubnVhbCAvIHdEYXlzIC8gaHJQZXJEYXk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB3MkhvdXJseTogdzJIb3VybHksXHJcbiAgICAgICAgICAgICAgICB3MkFubnVhbDogdzJBbm51YWwsXHJcbiAgICAgICAgICAgICAgICB0YWtlaG9tZUFubnVhbGx5OiB0YWtlaG9tZUFubnVhbGx5LFxyXG4gICAgICAgICAgICAgICAgdGFrZWhvbWVNb250aGx5OiB0YWtlaG9tZU1vbnRobHksXHJcbiAgICAgICAgICAgICAgICBjb250cmFjdEFubnVhbDogY29udHJhY3RBbm51YWwsXHJcbiAgICAgICAgICAgICAgICBjb250cmFjdEhvdXJseTogY29udHJhY3RIb3VybHlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVcyQW5udWFsU2FsYXJ5KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDYWxjcyhcIncyYW5udWFsbHlcIiwod0RheXMsIGhyUGVyRGF5LCB0YXgsIHNlbGZFbXBsb3ltZW50VGF4LCBiZW5lZml0cykgPT4ge1xyXG4gICAgICAgICAgICB2YXIgdzJBbm51YWwgPSB2YWx1ZSE9PXVuZGVmaW5lZD92YWx1ZTp0aGlzLnN0YXRlLmdldChcIncyQW5udWFsXCIpO1xyXG4gICAgICAgICAgICB2YXIgdzJIb3VybHkgPSB3MkFubnVhbC8oMzY1KjUvNykvaHJQZXJEYXk7XHJcbiAgICAgICAgICAgIHZhciB0YWtlaG9tZUFubnVhbGx5ID0gdzJBbm51YWwgKiAoMSAtIHRheCAvIDEwMCk7XHJcbiAgICAgICAgICAgIHZhciB0YWtlaG9tZU1vbnRobHkgPSB0YWtlaG9tZUFubnVhbGx5IC8gMTI7XHJcbiAgICAgICAgICAgIHZhciBjb250cmFjdEFubnVhbCA9ICh0YWtlaG9tZUFubnVhbGx5K2JlbmVmaXRzKSAvICgxIC0gdGF4IC8gMTAwIC0gc2VsZkVtcGxveW1lbnRUYXggLyAxMDApXHJcbiAgICAgICAgICAgIHZhciBjb250cmFjdEhvdXJseSA9IGNvbnRyYWN0QW5udWFsIC8gd0RheXMgLyBoclBlckRheTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHcySG91cmx5OiB3MkhvdXJseSxcclxuICAgICAgICAgICAgICAgIHcyQW5udWFsOiB3MkFubnVhbCxcclxuICAgICAgICAgICAgICAgIHRha2Vob21lQW5udWFsbHk6IHRha2Vob21lQW5udWFsbHksXHJcbiAgICAgICAgICAgICAgICB0YWtlaG9tZU1vbnRobHk6IHRha2Vob21lTW9udGhseSxcclxuICAgICAgICAgICAgICAgIGNvbnRyYWN0QW5udWFsOiBjb250cmFjdEFubnVhbCxcclxuICAgICAgICAgICAgICAgIGNvbnRyYWN0SG91cmx5OiBjb250cmFjdEhvdXJseVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVzJIb3VybHlTYWxhcnkodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNhbGNzKFwidzJob3VybHlcIiwod0RheXMsIGhyUGVyRGF5LCB0YXgsIHNlbGZFbXBsb3ltZW50VGF4LCBiZW5lZml0cykgPT4ge1xyXG4gICAgICAgICAgICB2YXIgdzJIb3VybHkgPSB2YWx1ZSE9PXVuZGVmaW5lZD92YWx1ZTp0aGlzLnN0YXRlLmdldChcIncySG91cmx5XCIpO1xyXG4gICAgICAgICAgICB2YXIgdzJBbm51YWwgPSB3MkhvdXJseSAqICgzNjUqNS83KSAqIGhyUGVyRGF5O1xyXG4gICAgICAgICAgICB2YXIgdGFrZWhvbWVBbm51YWxseSA9IE1hdGguY2VpbCh3MkFubnVhbCAqICgxIC0gdGF4IC8gMTAwKSk7XHJcbiAgICAgICAgICAgIHZhciB0YWtlaG9tZU1vbnRobHkgPSBNYXRoLmNlaWx0YWtlaG9tZUFubnVhbGx5IC8gMTI7XHJcbiAgICAgICAgICAgIHZhciBjb250cmFjdEFubnVhbCA9ICh0YWtlaG9tZUFubnVhbGx5K2JlbmVmaXRzKSAvICgxIC0gdGF4IC8gMTAwIC0gc2VsZkVtcGxveW1lbnRUYXggLyAxMDApXHJcbiAgICAgICAgICAgIHZhciBjb250cmFjdEhvdXJseSA9IE1hdGguY2VpbChjb250cmFjdEFubnVhbCAvIHdEYXlzIC8gaHJQZXJEYXkpO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdzJIb3VybHk6IHcySG91cmx5LFxyXG4gICAgICAgICAgICAgICAgdzJBbm51YWw6IHcyQW5udWFsLFxyXG4gICAgICAgICAgICAgICAgdGFrZWhvbWVBbm51YWxseTogdGFrZWhvbWVBbm51YWxseSxcclxuICAgICAgICAgICAgICAgIHRha2Vob21lTW9udGhseTogdGFrZWhvbWVNb250aGx5LFxyXG4gICAgICAgICAgICAgICAgY29udHJhY3RBbm51YWw6IGNvbnRyYWN0QW5udWFsLFxyXG4gICAgICAgICAgICAgICAgY29udHJhY3RIb3VybHk6IGNvbnRyYWN0SG91cmx5XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVDYWxjcyhtZXRob2QsY2FsYyl7XHJcbiAgICAgICAgdmFyIHdEYXlzID0gMzY1O1xyXG4gICAgICAgIHdEYXlzICo9IDUgLyA3O1xyXG4gICAgICAgIHdEYXlzIC09IHRoaXMuc3RhdGUuZ2V0KFwidmFjYXRpb25EYXlzXCIpXHJcbiAgICAgICAgd0RheXMgPSBNYXRoLmNlaWwod0RheXMqdGhpcy5zdGF0ZS5nZXQoXCJwZXJjZW50V29ya2FibGVZZWFyXCIpLzEwMCk7XHJcblxyXG4gICAgICAgIHZhciBoclBlckRheSA9IHRoaXMuc3RhdGUuZ2V0KFwiaG91cnNQZXJEYXlcIik7XHJcbiAgICAgICAgdmFyIHRheCA9IHRoaXMuc3RhdGUuZ2V0KFwidGF4XCIpO1xyXG4gICAgICAgIHZhciBzZWxmRW1wbG95bWVudFRheCA9IHRoaXMuc3RhdGUuZ2V0KFwic2VsZkVtcGxveW1lbnRUYXhcIik7XHJcblxyXG4gICAgICAgIHZhciBfX3JldCA9IGNhbGMod0RheXMsIGhyUGVyRGF5LCB0YXgsIHNlbGZFbXBsb3ltZW50VGF4LCB0aGlzLnN0YXRlLmdldChcImJlbmVmaXRzXCIpKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS53aXRoTXV0YXRpb25zKChuZXdTdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbmV3U3RhdGUuc2V0KFwibWV0aG9kXCIsIG1ldGhvZClcclxuICAgICAgICAgICAgICAgIG5ld1N0YXRlLnNldChcIndvcmthYmxlRGF5c1wiLCB3RGF5cylcclxuICAgICAgICAgICAgICAgIG5ld1N0YXRlLnNldChcIncyQW5udWFsXCIsIE1hdGguY2VpbChfX3JldC53MkFubnVhbCkpXHJcbiAgICAgICAgICAgICAgICBuZXdTdGF0ZS5zZXQoXCJ3MkhvdXJseVwiLCBNYXRoLmNlaWwoX19yZXQudzJIb3VybHkpKVxyXG4gICAgICAgICAgICAgICAgbmV3U3RhdGUuc2V0KFwiY29udHJhY3RBbm51YWxcIiwgTWF0aC5jZWlsKF9fcmV0LmNvbnRyYWN0QW5udWFsKSlcclxuICAgICAgICAgICAgICAgIG5ld1N0YXRlLnNldChcImNvbnRyYWN0SG91cmx5XCIsIE1hdGguY2VpbChfX3JldC5jb250cmFjdEhvdXJseSkpXHJcbiAgICAgICAgICAgICAgICBuZXdTdGF0ZS5zZXQoXCJ0YWtlaG9tZUFubnVhbGx5XCIsIE1hdGguY2VpbChfX3JldC50YWtlaG9tZUFubnVhbGx5KSlcclxuICAgICAgICAgICAgICAgIG5ld1N0YXRlLnNldChcInRha2Vob21lTW9udGhseVwiLCBNYXRoLmNlaWwoX19yZXQudGFrZWhvbWVNb250aGx5KSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IERhdGFTdG9yZTsiXX0=
