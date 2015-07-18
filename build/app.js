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
  }, {
    key: "componentDidMount",

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

    value: function componentDidMount() {
      $(this.refs.menuButton.getDOMNode()).sideNav();
    }
  }, {
    key: "goToLink",
    value: function goToLink(route) {
      this.context.router.transitionTo(route);
      $(this.refs.menuButton.getDOMNode()).sideNav("hide");
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlc1xcYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwiYzovVXNlcnMvUmljaGFyZC9zb3VyY2UvSG93TXVjaFNob3VsZElBc2tGb3Ivc3JjL2FwcC9hcHAuanN4IiwiYzovVXNlcnMvUmljaGFyZC9zb3VyY2UvSG93TXVjaFNob3VsZElBc2tGb3Ivc3JjL2FwcC9hY3Rpb25zL2NhbGN1bGF0ZUFjdGlvbnMuanMiLCJjOi9Vc2Vycy9SaWNoYXJkL3NvdXJjZS9Ib3dNdWNoU2hvdWxkSUFza0Zvci9zcmMvYXBwL2NvbXBvbmVudHMvY2FsY3VsYXRlLmpzeCIsImM6L1VzZXJzL1JpY2hhcmQvc291cmNlL0hvd011Y2hTaG91bGRJQXNrRm9yL3NyYy9hcHAvY29tcG9uZW50cy9tYWluLmpzeCIsImM6L1VzZXJzL1JpY2hhcmQvc291cmNlL0hvd011Y2hTaG91bGRJQXNrRm9yL3NyYy9hcHAvY29tcG9uZW50cy9uZWdvdGlhdGluZy5qc3giLCJjOi9Vc2Vycy9SaWNoYXJkL3NvdXJjZS9Ib3dNdWNoU2hvdWxkSUFza0Zvci9zcmMvYXBwL3N0b3Jlcy9jYWxjdWxhdGVTdG9yZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsQ0FBQyxZQUFZO0FBQ1gsTUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFDNUMsTUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLDRCQUE0QixDQUFDLENBQUM7QUFDdEQsTUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7O0FBRTFELE1BQUksTUFBTSxHQUNSO0FBQUMsZUFBVyxDQUFDLEtBQUs7TUFBQyxPQUFPLEVBQUUsSUFBSSxBQUFDO0lBQy9CLG9CQUFDLFdBQVcsQ0FBQyxLQUFLLElBQUMsSUFBSSxFQUFDLEdBQUcsRUFBQyxPQUFPLEVBQUUsU0FBUyxBQUFDLEdBQUU7SUFDakQsb0JBQUMs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QUFrQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQTtBQUNuRSx3QkFBUSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFBO2FBQ3BFLENBQUMsQ0FDTCxDQUFDO1NBQ0w7O3FCQXRMQyxTQUFTO0FBQVQsYUFBUyxHQURkLFNBQVMsQ0FDSixTQUFTLEtBQVQsU0FBUztXQUFULFNBQVM7R0FBUyxLQUFLOztBQXlMN0IsTUFBTSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uICgpIHtcclxuICBsZXQgTWFpbiA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9tYWluLmpzeCcpOyAvLyBPdXIgY3VzdG9tIHJlYWN0IGNvbXBvbmVudFxyXG4gIGxldCBDYWxjdWxhdGUgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvY2FsY3VsYXRlLmpzeCcpO1xyXG4gIGxldCBOZWdvdGlhdGluZyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9uZWdvdGlhdGluZy5qc3gnKTtcclxuXHJcbiAgdmFyIHJvdXRlcyA9XHJcbiAgICA8UmVhY3RSb3V0ZXIuUm91dGUgaGFuZGxlcj17TWFpbn0+XHJcbiAgICAgIDxSZWFjdFJvdXRlci5Sb3V0ZSBwYXRoPVwiL1wiIGhhbmRsZXI9e0NhbGN1bGF0ZX0vPlxyXG4gICAgICA8UmVhY3RSb3V0ZXIuUm91dGUgcGF0aD1cIi9uZWdvdGlhdGluZ1wiIGhhbmRsZXI9e05lZ290aWF0aW5nfS8+XHJcbiAgICA8L1JlYWN0Um91dGVyLlJvdXRlPlxyXG5cclxuICBSZWFjdFJvdXRlci5ydW4ocm91dGVzLCBSZWFjdFJvdXRlci5IYXNoTG9jYXRpb24sIChSb290KSA9PiB7XHJcbiAgICBSZWFjdC5yZW5kZXIoPFJvb3QgLz4sIGRvY3VtZW50LmJvZHkpO1xyXG4gIH0pO1xyXG59KSgpO1xyXG4iLCJleHBvcnRzLnVwZGF0ZVcyQW5udWFsU2FsYXJ5ID0gQWN0aW9uLmNyZWF0ZSgpO1xyXG5leHBvcnRzLnVwZGF0ZVcySG91cmx5U2FsYXJ5ID0gQWN0aW9uLmNyZWF0ZSgpO1xyXG5leHBvcnRzLnVwZGF0ZVRha2VIb21lQW5udWFsU2FsYXJ5ID0gQWN0aW9uLmNyZWF0ZSgpO1xyXG5leHBvcnRzLnVwZGF0ZVRha2VIb21lTW9udGhseVNhbGFyeSA9IEFjdGlvbi5jcmVhdGUoKTtcclxuZXhwb3J0cy51cGRhdGVDb250cmFjdEFubnVhbFNhbGFyeSA9IEFjdGlvbi5jcmVhdGUoKTtcclxuZXhwb3J0cy51cGRhdGVDb250cmFjdEhvdXJseVNhbGFyeSA9IEFjdGlvbi5jcmVhdGUoKTtcclxuZXhwb3J0cy51cGRhdGVQYXJhbWV0ZXJzID0gQWN0aW9uLmNyZWF0ZSgpOyIsImltcG9ydCBDYWxjdWxhdGVTdG9yZSBmcm9tIFwiLi4vc3RvcmVzL2NhbGN1bGF0ZVN0b3JlXCI7XHJcbmltcG9ydCBDYWxjdWxhdGVBY3Rpb25zIGZyb20gXCIuLi9hY3Rpb25zL2NhbGN1bGF0ZUFjdGlvbnNcIjtcclxuXHJcbmNsYXNzIENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgQ2FsY3VsYXRlU3RvcmUuaW5zdGFuY2Uuc3Vic2NyaWJlKHRoaXMub25DYWxjdWxhdGVTdGF0ZS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNhbGN1bGF0ZVN0YXRlKHN0YXRlKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZGF0YTpzdGF0ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25XMkhvdXJseUNoYW5nZShlKXtcclxuICAgICAgICBDYWxjdWxhdGVBY3Rpb25zLnVwZGF0ZVcySG91cmx5U2FsYXJ5KGUudGFyZ2V0LnZhbHVlfDApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVzJBbm51YWxDaGFuZ2UoZSl7XHJcbiAgICAgICAgQ2FsY3VsYXRlQWN0aW9ucy51cGRhdGVXMkFubnVhbFNhbGFyeShlLnRhcmdldC52YWx1ZXwwKTtcclxuICAgIH1cclxuXHJcbiAgICBvblRha2Vob21lQW5udWFsQ2hhbmdlKGUpe1xyXG4gICAgICAgIENhbGN1bGF0ZUFjdGlvbnMudXBkYXRlVGFrZUhvbWVBbm51YWxTYWxhcnkoZS50YXJnZXQudmFsdWV8MCk7XHJcbiAgICB9XHJcbiAgICBvblRha2Vob21lTW9udGhseUNoYW5nZShlKXtcclxuICAgICAgICBDYWxjdWxhdGVBY3Rpb25zLnVwZGF0ZVRha2VIb21lTW9udGhseVNhbGFyeShlLnRhcmdldC52YWx1ZXwwKTtcclxuICAgIH1cclxuICAgIG9uQ29udHJhY3RBbm51YWxDaGFuZ2UoZSl7XHJcbiAgICAgICAgQ2FsY3VsYXRlQWN0aW9ucy51cGRhdGVDb250cmFjdEFubnVhbFNhbGFyeShlLnRhcmdldC52YWx1ZXwwKTtcclxuICAgIH1cclxuICAgIG9uQ29udHJhY3RIb3VybHlDaGFuZ2UoZSl7XHJcbiAgICAgICAgQ2FsY3VsYXRlQWN0aW9ucy51cGRhdGVDb250cmFjdEhvdXJseVNhbGFyeShlLnRhcmdldC52YWx1ZXwwKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYoIXRoaXMuc3RhdGUpe3JldHVybiAoPGRpdi8+KX1cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImNvbCBzMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+SG93IHRvIHVzZT88L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5UaGlzIGlzIGEgZm9ybSBmb3IgZGlzY292ZXJpbmcgYSByb3VnaCBlc3RpbWF0ZSBvZiBob3cgbXVjaCBvbmUgc2hvdWxkIGNoYXJnZSBhcyBhIGNvbnRyYWN0b3IuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+RW50ZXIgaW4geW91ciBtb250aGx5IHRha2Vob21lPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5BZGp1c3QgdGF4IHJhdGUgdW50aWwgeW91ciB5ZWFybHkgVzIgc2FsYXJ5IGxvb2tzIHJpZ2h0PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5QbGF5IHdpdGggcGFyYW1ldGVycyB1bnRpbCB5b3VyIGNvbmRpdGlvbnMgYXJlIGFwcHJveGltYXRlZDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlNhbGFyeTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRoZXNlIGNvbHVtbnMgcmVwcmVzZW50IGVxdWl2YWxhbnQgc2l0dWF0aW9ucyBvZiBxdWFsaXR5IG9mIGxpdmluZy48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIiRcIiB0eXBlPVwidGV4dFwiICBvbkNoYW5nZT17dGhpcy5vblcyQW5udWFsQ2hhbmdlLmJpbmQodGhpcyl9IHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEuZ2V0KFwidzJBbm51YWxcIil8fFwiXCJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJhY3RpdmVcIj5XMiBBbm51YWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIiRcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLm9uVGFrZWhvbWVBbm51YWxDaGFuZ2UuYmluZCh0aGlzKX0gdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5nZXQoXCJ0YWtlaG9tZUFubnVhbGx5XCIpfHxcIlwifS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYWN0aXZlXCI+VGFrZWhvbWUgQW5udWFsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCIkXCIgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5vbkNvbnRyYWN0QW5udWFsQ2hhbmdlLmJpbmQodGhpcyl9IHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEuZ2V0KFwiY29udHJhY3RBbm51YWxcIil8fFwiXCJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJhY3RpdmVcIj5Db250cmFjdCBBbm51YWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiJFwiIHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMub25XMkhvdXJseUNoYW5nZS5iaW5kKHRoaXMpfSB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLmdldChcIncySG91cmx5XCIpfHxcIlwifS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYWN0aXZlXCI+VzIgSG91cmx5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCIkXCIgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5vblRha2Vob21lTW9udGhseUNoYW5nZS5iaW5kKHRoaXMpfSB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLmdldChcInRha2Vob21lTW9udGhseVwiKXx8XCJcIn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImFjdGl2ZVwiPlRha2Vob21lIE1vbnRobHk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIiRcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLm9uQ29udHJhY3RIb3VybHlDaGFuZ2UuYmluZCh0aGlzKX0gdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5nZXQoXCJjb250cmFjdEhvdXJseVwiKXx8XCJcIn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImFjdGl2ZVwiPkNvbnRyYWN0IEhvdXJseTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5QYXJhbWV0ZXJzPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiJFwiIHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eyhlKT0+e0NhbGN1bGF0ZUFjdGlvbnMudXBkYXRlUGFyYW1ldGVycyh0aGlzLnN0YXRlLmRhdGEuc2V0KFwiYmVuZWZpdHNcIixlLnRhcmdldC52YWx1ZXwwKSl9fSB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLmdldChcImJlbmVmaXRzXCIpfHxcIlwifS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYWN0aXZlXCI+QmVuZWZpdHM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIiVcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoZSk9PntDYWxjdWxhdGVBY3Rpb25zLnVwZGF0ZVBhcmFtZXRlcnModGhpcy5zdGF0ZS5kYXRhLnNldChcInRheFwiLGUudGFyZ2V0LnZhbHVlfDApKX19IHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEuZ2V0KFwidGF4XCIpfHxcIlwifS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYWN0aXZlXCI+VzIgVGF4IFJhdGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIiNcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoZSk9PntDYWxjdWxhdGVBY3Rpb25zLnVwZGF0ZVBhcmFtZXRlcnModGhpcy5zdGF0ZS5kYXRhLnNldChcInZhY2F0aW9uRGF5c1wiLGUudGFyZ2V0LnZhbHVlfDApKX19IHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEuZ2V0KFwidmFjYXRpb25EYXlzXCIpfHxcIlwifS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYWN0aXZlXCI+VW5wYWlkIFZhY2F0aW9uIERheXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCIlXCIgdHlwZT1cInRleHRcIiByZWFkT25seSB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLmdldChcInNlbGZFbXBsb3ltZW50VGF4XCIpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYWN0aXZlXCI+U2VsZiBFbXBsb3ltZW50IFRheDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiJVwiIHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eyhlKT0+e0NhbGN1bGF0ZUFjdGlvbnMudXBkYXRlUGFyYW1ldGVycyh0aGlzLnN0YXRlLmRhdGEuc2V0KFwicGVyY2VudFdvcmthYmxlWWVhclwiLGUudGFyZ2V0LnZhbHVlfDApKX19IHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEuZ2V0KFwicGVyY2VudFdvcmthYmxlWWVhclwiKXx8XCJcIn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImFjdGl2ZVwiPiUgb2YgWWVhciBXb3JrYWJsZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM0XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiI1wiIHR5cGU9XCJ0ZXh0XCIgcmVhZE9ubHkgdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5nZXQoXCJ3b3JrYWJsZURheXNcIil8fFwiXCJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJhY3RpdmVcIj5Xb3JrYWJsZSBEYXlzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM0XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM0XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50OyIsImNsYXNzIE1haW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHN0YXRpYyBjaGlsZENvbnRleHRUeXBlcyA9IHtcclxuICAgIHJvdXRlcjogUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcclxuICAgIHJvdXRlcjogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPFJlYWN0Um91dGVyLlJvdXRlSGFuZGxlci8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgIDxuYXYgY2xhc3NOYW1lPVwiZ3JleSBkYXJrZW4tM1wiPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi13cmFwcGVyXCI+XHJcbiAgIDxhIHJlZj1cIm1lbnVCdXR0b25cIiBkYXRhLWFjdGl2YXRlcz1cInNsaWRlLW91dFwiIGNsYXNzTmFtZT1cImJyYW5kLWxvZ29cIj4mbmJzcDs8c3BhbiBjbGFzc05hbWU9XCJmYSBmYS1iYXJzXCI+PC9zcGFuPiBIb3cgTXVjaCBTaG91bGQgSSBBc2sgRm9yPzwvYT5cclxuICAgPHVsIGNsYXNzTmFtZT1cInJpZ2h0IGhpZGUtb24tbWVkLWFuZC1kb3duXCI+XHJcbiAgIDwvdWw+XHJcbiAgIDx1bCBpZD1cInNsaWRlLW91dFwiIGNsYXNzTmFtZT1cInNpZGUtbmF2XCI+XHJcbiAgIDxsaT48YSBvbkNsaWNrPXt0aGlzLmdvVG9MaW5rLmJpbmQodGhpcyxcIi9cIil9PkNhbGN1bGF0ZTwvYT48L2xpPlxyXG4gICA8bGk+PGEgb25DbGljaz17dGhpcy5nb1RvTGluay5iaW5kKHRoaXMsXCIvbmVnb3RpYXRpbmdcIil9Pk5lZ290aWF0aW5nPC9hPjwvbGk+XHJcbiAgIDwvdWw+XHJcbiAgIDwvZGl2PlxyXG4gICA8L25hdj5cclxuICAgKi9cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAkKHRoaXMucmVmcy5tZW51QnV0dG9uLmdldERPTU5vZGUoKSkuc2lkZU5hdigpO1xyXG4gIH1cclxuXHJcbiAgZ29Ub0xpbmsocm91dGUpe1xyXG4gICAgdGhpcy5jb250ZXh0LnJvdXRlci50cmFuc2l0aW9uVG8ocm91dGUpO1xyXG4gICAgJCh0aGlzLnJlZnMubWVudUJ1dHRvbi5nZXRET01Ob2RlKCkpLnNpZGVOYXYoXCJoaWRlXCIpO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBNYWluO1xyXG4iLCJjbGFzcyBDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJwYWdlXCI+XHJcbiAgICAgICAgICAgIE1lZXQgaGFsZiB3YXkuXHJcbiAgICAgICAgPC9kaXY+KVxyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudDsiLCJsZXQgQ2FsY3VsYXRlQWN0aW9ucyA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvY2FsY3VsYXRlQWN0aW9ucycpO1xyXG5cclxuQFNpbmdsZXRvblxyXG5jbGFzcyBEYXRhU3RvcmUgZXh0ZW5kcyBTdG9yZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihJbW11dGFibGUuZnJvbUpTKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwidzJcIixcclxuICAgICAgICAgICAgICAgIHcyQW5udWFsOiA1MDAwMCxcclxuICAgICAgICAgICAgICAgIHcySG91cmx5OiAwLFxyXG4gICAgICAgICAgICAgICAgYmVuZWZpdHM6IDAsXHJcbiAgICAgICAgICAgICAgICBjb250cmFjdEFubnVhbDogMCxcclxuICAgICAgICAgICAgICAgIGNvbnRyYWN0SG91cmx5OiAwLFxyXG4gICAgICAgICAgICAgICAgdGFrZWhvbWVBbm51YWxseTogMCxcclxuICAgICAgICAgICAgICAgIHRha2Vob21lTW9udGhseTogMCxcclxuICAgICAgICAgICAgICAgIHBlcmNlbnRXb3JrYWJsZVllYXI6IDEwMCxcclxuICAgICAgICAgICAgICAgIHdvcmthYmxlRGF5czogMzY1LFxyXG4gICAgICAgICAgICAgICAgaG91cnNQZXJEYXk6IDgsXHJcbiAgICAgICAgICAgICAgICB0YXg6IDI1LFxyXG4gICAgICAgICAgICAgICAgc2VsZkVtcGxveW1lbnRUYXg6IDcuMyxcclxuICAgICAgICAgICAgICAgIHZhY2F0aW9uRGF5czogMzBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICkpO1xyXG4gICAgICAgIENhbGN1bGF0ZUFjdGlvbnMudXBkYXRlQ29udHJhY3RBbm51YWxTYWxhcnkuc3Vic2NyaWJlKHRoaXMudXBkYXRlQ29udHJhY3RBbm51YWxTYWxhcnkuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgQ2FsY3VsYXRlQWN0aW9ucy51cGRhdGVDb250cmFjdEhvdXJseVNhbGFyeS5zdWJzY3JpYmUodGhpcy51cGRhdGVDb250cmFjdEhvdXJseVNhbGFyeS5iaW5kKHRoaXMpKTtcclxuICAgICAgICBDYWxjdWxhdGVBY3Rpb25zLnVwZGF0ZVBhcmFtZXRlcnMuc3Vic2NyaWJlKHRoaXMudXBkYXRlUGFyYW1ldGVycy5iaW5kKHRoaXMpKTtcclxuICAgICAgICBDYWxjdWxhdGVBY3Rpb25zLnVwZGF0ZVRha2VIb21lQW5udWFsU2FsYXJ5LnN1YnNjcmliZSh0aGlzLnVwZGF0ZVRha2VIb21lQW5udWFsU2FsYXJ5LmJpbmQodGhpcykpO1xyXG4gICAgICAgIENhbGN1bGF0ZUFjdGlvbnMudXBkYXRlVGFrZUhvbWVNb250aGx5U2FsYXJ5LnN1YnNjcmliZSh0aGlzLnVwZGF0ZVRha2VIb21lTW9udGhseVNhbGFyeS5iaW5kKHRoaXMpKTtcclxuICAgICAgICBDYWxjdWxhdGVBY3Rpb25zLnVwZGF0ZVcySG91cmx5U2FsYXJ5LnN1YnNjcmliZSh0aGlzLnVwZGF0ZVcySG91cmx5U2FsYXJ5LmJpbmQodGhpcykpO1xyXG4gICAgICAgIENhbGN1bGF0ZUFjdGlvbnMudXBkYXRlVzJBbm51YWxTYWxhcnkuc3Vic2NyaWJlKHRoaXMudXBkYXRlVzJBbm51YWxTYWxhcnkuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVXMkFubnVhbFNhbGFyeSg1MDAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlcnMgPSB7XHJcbiAgICAgICAgXCJjb250cmFjdGFubnVhbFwiOnRoaXMudXBkYXRlQ29udHJhY3RBbm51YWxTYWxhcnkuYmluZCh0aGlzKSxcclxuICAgICAgICBcImNvbnRyYWN0aG91cmx5XCI6dGhpcy51cGRhdGVDb250cmFjdEhvdXJseVNhbGFyeS5iaW5kKHRoaXMpLFxyXG4gICAgICAgIFwidGFrZWhvbWVhbm51YWxseVwiOnRoaXMudXBkYXRlVGFrZUhvbWVBbm51YWxTYWxhcnkuYmluZCh0aGlzKSxcclxuICAgICAgICBcInRha2Vob21lbW9udGhseVwiOnRoaXMudXBkYXRlVGFrZUhvbWVNb250aGx5U2FsYXJ5LmJpbmQodGhpcyksXHJcbiAgICAgICAgXCJ3MmFubnVhbGx5XCI6dGhpcy51cGRhdGVXMkFubnVhbFNhbGFyeS5iaW5kKHRoaXMpLFxyXG4gICAgICAgIFwidzJob3VybHlcIjp0aGlzLnVwZGF0ZVcySG91cmx5U2FsYXJ5LmJpbmQodGhpcylcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVQYXJhbWV0ZXJzKHN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVyc1t0aGlzLnN0YXRlLmdldChcIm1ldGhvZFwiKV0oKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVDb250cmFjdEFubnVhbFNhbGFyeSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ2FsY3MoXCJjb250cmFjdGFubnVhbFwiLCh3RGF5cywgaHJQZXJEYXksIHRheCwgc2VsZkVtcGxveW1lbnRUYXgsIGJlbmVmaXRzKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBjb250cmFjdEFubnVhbCA9IHZhbHVlIT09dW5kZWZpbmVkP3ZhbHVlOnRoaXMuc3RhdGUuZ2V0KFwiY29udHJhY3RBbm51YWxcIik7XHJcbiAgICAgICAgICAgIHZhciBjb250cmFjdEhvdXJseSA9IHZhbHVlL3dEYXlzL2hyUGVyRGF5XHJcbiAgICAgICAgICAgIHZhciB0YWtlaG9tZUFubnVhbGx5ID0gY29udHJhY3RBbm51YWwqKDEtdGF4LzEwMC1zZWxmRW1wbG95bWVudFRheC8xMDApXHJcbiAgICAgICAgICAgIHZhciB0YWtlaG9tZU1vbnRobHkgPSB0YWtlaG9tZUFubnVhbGx5LzEyO1xyXG4gICAgICAgICAgICB2YXIgdzJBbm51YWwgPSB0YWtlaG9tZUFubnVhbGx5LygxLXRheC8xMDApO1xyXG4gICAgICAgICAgICB2YXIgdzJIb3VybHkgPSB3MkFubnVhbC8oMzY1KjUvNykvaHJQZXJEYXk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB3MkhvdXJseTogdzJIb3VybHksXHJcbiAgICAgICAgICAgICAgICB3MkFubnVhbDogdzJBbm51YWwsXHJcbiAgICAgICAgICAgICAgICB0YWtlaG9tZUFubnVhbGx5OiB0YWtlaG9tZUFubnVhbGx5LFxyXG4gICAgICAgICAgICAgICAgdGFrZWhvbWVNb250aGx5OiB0YWtlaG9tZU1vbnRobHksXHJcbiAgICAgICAgICAgICAgICBjb250cmFjdEFubnVhbDogY29udHJhY3RBbm51YWwsXHJcbiAgICAgICAgICAgICAgICBjb250cmFjdEhvdXJseTogY29udHJhY3RIb3VybHlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUNvbnRyYWN0SG91cmx5U2FsYXJ5KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDYWxjcyhcImNvbnRyYWN0aG91cmx5XCIsKHdEYXlzLCBoclBlckRheSwgdGF4LCBzZWxmRW1wbG95bWVudFRheCwgYmVuZWZpdHMpID0+IHtcclxuICAgICAgICAgICAgdmFyIGNvbnRyYWN0SG91cmx5ID0gdmFsdWUhPT11bmRlZmluZWQ/dmFsdWU6dGhpcy5zdGF0ZS5nZXQoXCJjb250cmFjdEhvdXJseVwiKTtcclxuICAgICAgICAgICAgdmFyIGNvbnRyYWN0QW5udWFsID0gdmFsdWUqd0RheXMqaHJQZXJEYXlcclxuICAgICAgICAgICAgdmFyIHRha2Vob21lQW5udWFsbHkgPSBjb250cmFjdEFubnVhbCooMS10YXgvMTAwLXNlbGZFbXBsb3ltZW50VGF4LzEwMClcclxuICAgICAgICAgICAgdmFyIHRha2Vob21lTW9udGhseSA9IHRha2Vob21lQW5udWFsbHkvMTI7XHJcbiAgICAgICAgICAgIHZhciB3MkFubnVhbCA9IHRha2Vob21lQW5udWFsbHkvKDEtdGF4LzEwMCk7XHJcbiAgICAgICAgICAgIHZhciB3MkhvdXJseSA9IHcyQW5udWFsLygzNjUqNS83KS9oclBlckRheTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHcySG91cmx5OiB3MkhvdXJseSxcclxuICAgICAgICAgICAgICAgIHcyQW5udWFsOiB3MkFubnVhbCxcclxuICAgICAgICAgICAgICAgIHRha2Vob21lQW5udWFsbHk6IHRha2Vob21lQW5udWFsbHksXHJcbiAgICAgICAgICAgICAgICB0YWtlaG9tZU1vbnRobHk6IHRha2Vob21lTW9udGhseSxcclxuICAgICAgICAgICAgICAgIGNvbnRyYWN0QW5udWFsOiBjb250cmFjdEFubnVhbCxcclxuICAgICAgICAgICAgICAgIGNvbnRyYWN0SG91cmx5OiBjb250cmFjdEhvdXJseVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVGFrZUhvbWVBbm51YWxTYWxhcnkodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNhbGNzKFwidGFrZWhvbWVhbm51YWxseVwiLCh3RGF5cywgaHJQZXJEYXksIHRheCwgc2VsZkVtcGxveW1lbnRUYXgsIGJlbmVmaXRzKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciB0YWtlaG9tZUFubnVhbGx5ID0gdmFsdWUhPT11bmRlZmluZWQ/dmFsdWU6dGhpcy5zdGF0ZS5nZXQoXCJ0YWtlaG9tZUFubnVhbGx5XCIpO1xyXG4gICAgICAgICAgICB2YXIgdGFrZWhvbWVNb250aGx5ID0gdGFrZWhvbWVBbm51YWxseS8xMjtcclxuICAgICAgICAgICAgdmFyIHcyQW5udWFsID0gdGFrZWhvbWVBbm51YWxseS8oMS10YXgvMTAwKTtcclxuICAgICAgICAgICAgdmFyIHcySG91cmx5ID0gdzJBbm51YWwvKDM2NSo1LzcpL2hyUGVyRGF5O1xyXG4gICAgICAgICAgICB2YXIgY29udHJhY3RBbm51YWwgPSAodGFrZWhvbWVBbm51YWxseStiZW5lZml0cykgLyAoMSAtIHRheCAvIDEwMCAtIHNlbGZFbXBsb3ltZW50VGF4IC8gMTAwKVxyXG4gICAgICAgICAgICB2YXIgY29udHJhY3RIb3VybHkgPSBjb250cmFjdEFubnVhbCAvIHdEYXlzIC8gaHJQZXJEYXk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB3MkhvdXJseTogdzJIb3VybHksXHJcbiAgICAgICAgICAgICAgICB3MkFubnVhbDogdzJBbm51YWwsXHJcbiAgICAgICAgICAgICAgICB0YWtlaG9tZUFubnVhbGx5OiB0YWtlaG9tZUFubnVhbGx5LFxyXG4gICAgICAgICAgICAgICAgdGFrZWhvbWVNb250aGx5OiB0YWtlaG9tZU1vbnRobHksXHJcbiAgICAgICAgICAgICAgICBjb250cmFjdEFubnVhbDogY29udHJhY3RBbm51YWwsXHJcbiAgICAgICAgICAgICAgICBjb250cmFjdEhvdXJseTogY29udHJhY3RIb3VybHlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVRha2VIb21lTW9udGhseVNhbGFyeSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ2FsY3MoXCJ0YWtlaG9tZW1vbnRobHlcIiwod0RheXMsIGhyUGVyRGF5LCB0YXgsIHNlbGZFbXBsb3ltZW50VGF4LCBiZW5lZml0cykgPT4ge1xyXG4gICAgICAgICAgICB2YXIgdGFrZWhvbWVNb250aGx5ID0gdmFsdWUhPT11bmRlZmluZWQ/dmFsdWU6dGhpcy5zdGF0ZS5nZXQoXCJ0YWtlaG9tZU1vbnRobHlcIik7XHJcbiAgICAgICAgICAgIHZhciB0YWtlaG9tZUFubnVhbGx5ID0gdGFrZWhvbWVNb250aGx5KjEyO1xyXG4gICAgICAgICAgICB2YXIgdzJBbm51YWwgPSB0YWtlaG9tZUFubnVhbGx5LygxLXRheC8xMDApO1xyXG4gICAgICAgICAgICB2YXIgdzJIb3VybHkgPSB3MkFubnVhbC8oMzY1KjUvNykvaHJQZXJEYXk7XHJcbiAgICAgICAgICAgIHZhciBjb250cmFjdEFubnVhbCA9ICh0YWtlaG9tZUFubnVhbGx5K2JlbmVmaXRzKSAvICgxIC0gdGF4IC8gMTAwIC0gc2VsZkVtcGxveW1lbnRUYXggLyAxMDApXHJcbiAgICAgICAgICAgIHZhciBjb250cmFjdEhvdXJseSA9IGNvbnRyYWN0QW5udWFsIC8gd0RheXMgLyBoclBlckRheTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHcySG91cmx5OiB3MkhvdXJseSxcclxuICAgICAgICAgICAgICAgIHcyQW5udWFsOiB3MkFubnVhbCxcclxuICAgICAgICAgICAgICAgIHRha2Vob21lQW5udWFsbHk6IHRha2Vob21lQW5udWFsbHksXHJcbiAgICAgICAgICAgICAgICB0YWtlaG9tZU1vbnRobHk6IHRha2Vob21lTW9udGhseSxcclxuICAgICAgICAgICAgICAgIGNvbnRyYWN0QW5udWFsOiBjb250cmFjdEFubnVhbCxcclxuICAgICAgICAgICAgICAgIGNvbnRyYWN0SG91cmx5OiBjb250cmFjdEhvdXJseVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVzJBbm51YWxTYWxhcnkodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNhbGNzKFwidzJhbm51YWxseVwiLCh3RGF5cywgaHJQZXJEYXksIHRheCwgc2VsZkVtcGxveW1lbnRUYXgsIGJlbmVmaXRzKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciB3MkFubnVhbCA9IHZhbHVlIT09dW5kZWZpbmVkP3ZhbHVlOnRoaXMuc3RhdGUuZ2V0KFwidzJBbm51YWxcIik7XHJcbiAgICAgICAgICAgIHZhciB3MkhvdXJseSA9IHcyQW5udWFsLygzNjUqNS83KS9oclBlckRheTtcclxuICAgICAgICAgICAgdmFyIHRha2Vob21lQW5udWFsbHkgPSB3MkFubnVhbCAqICgxIC0gdGF4IC8gMTAwKTtcclxuICAgICAgICAgICAgdmFyIHRha2Vob21lTW9udGhseSA9IHRha2Vob21lQW5udWFsbHkgLyAxMjtcclxuICAgICAgICAgICAgdmFyIGNvbnRyYWN0QW5udWFsID0gKHRha2Vob21lQW5udWFsbHkrYmVuZWZpdHMpIC8gKDEgLSB0YXggLyAxMDAgLSBzZWxmRW1wbG95bWVudFRheCAvIDEwMClcclxuICAgICAgICAgICAgdmFyIGNvbnRyYWN0SG91cmx5ID0gY29udHJhY3RBbm51YWwgLyB3RGF5cyAvIGhyUGVyRGF5O1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdzJIb3VybHk6IHcySG91cmx5LFxyXG4gICAgICAgICAgICAgICAgdzJBbm51YWw6IHcyQW5udWFsLFxyXG4gICAgICAgICAgICAgICAgdGFrZWhvbWVBbm51YWxseTogdGFrZWhvbWVBbm51YWxseSxcclxuICAgICAgICAgICAgICAgIHRha2Vob21lTW9udGhseTogdGFrZWhvbWVNb250aGx5LFxyXG4gICAgICAgICAgICAgICAgY29udHJhY3RBbm51YWw6IGNvbnRyYWN0QW5udWFsLFxyXG4gICAgICAgICAgICAgICAgY29udHJhY3RIb3VybHk6IGNvbnRyYWN0SG91cmx5XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVXMkhvdXJseVNhbGFyeSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ2FsY3MoXCJ3MmhvdXJseVwiLCh3RGF5cywgaHJQZXJEYXksIHRheCwgc2VsZkVtcGxveW1lbnRUYXgsIGJlbmVmaXRzKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciB3MkhvdXJseSA9IHZhbHVlIT09dW5kZWZpbmVkP3ZhbHVlOnRoaXMuc3RhdGUuZ2V0KFwidzJIb3VybHlcIik7XHJcbiAgICAgICAgICAgIHZhciB3MkFubnVhbCA9IHcySG91cmx5ICogKDM2NSo1LzcpICogaHJQZXJEYXk7XHJcbiAgICAgICAgICAgIHZhciB0YWtlaG9tZUFubnVhbGx5ID0gTWF0aC5jZWlsKHcyQW5udWFsICogKDEgLSB0YXggLyAxMDApKTtcclxuICAgICAgICAgICAgdmFyIHRha2Vob21lTW9udGhseSA9IE1hdGguY2VpbHRha2Vob21lQW5udWFsbHkgLyAxMjtcclxuICAgICAgICAgICAgdmFyIGNvbnRyYWN0QW5udWFsID0gKHRha2Vob21lQW5udWFsbHkrYmVuZWZpdHMpIC8gKDEgLSB0YXggLyAxMDAgLSBzZWxmRW1wbG95bWVudFRheCAvIDEwMClcclxuICAgICAgICAgICAgdmFyIGNvbnRyYWN0SG91cmx5ID0gTWF0aC5jZWlsKGNvbnRyYWN0QW5udWFsIC8gd0RheXMgLyBoclBlckRheSk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB3MkhvdXJseTogdzJIb3VybHksXHJcbiAgICAgICAgICAgICAgICB3MkFubnVhbDogdzJBbm51YWwsXHJcbiAgICAgICAgICAgICAgICB0YWtlaG9tZUFubnVhbGx5OiB0YWtlaG9tZUFubnVhbGx5LFxyXG4gICAgICAgICAgICAgICAgdGFrZWhvbWVNb250aGx5OiB0YWtlaG9tZU1vbnRobHksXHJcbiAgICAgICAgICAgICAgICBjb250cmFjdEFubnVhbDogY29udHJhY3RBbm51YWwsXHJcbiAgICAgICAgICAgICAgICBjb250cmFjdEhvdXJseTogY29udHJhY3RIb3VybHlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUNhbGNzKG1ldGhvZCxjYWxjKXtcclxuICAgICAgICB2YXIgd0RheXMgPSAzNjU7XHJcbiAgICAgICAgd0RheXMgKj0gNSAvIDc7XHJcbiAgICAgICAgd0RheXMgLT0gdGhpcy5zdGF0ZS5nZXQoXCJ2YWNhdGlvbkRheXNcIilcclxuICAgICAgICB3RGF5cyA9IE1hdGguY2VpbCh3RGF5cyp0aGlzLnN0YXRlLmdldChcInBlcmNlbnRXb3JrYWJsZVllYXJcIikvMTAwKTtcclxuXHJcbiAgICAgICAgdmFyIGhyUGVyRGF5ID0gdGhpcy5zdGF0ZS5nZXQoXCJob3Vyc1BlckRheVwiKTtcclxuICAgICAgICB2YXIgdGF4ID0gdGhpcy5zdGF0ZS5nZXQoXCJ0YXhcIik7XHJcbiAgICAgICAgdmFyIHNlbGZFbXBsb3ltZW50VGF4ID0gdGhpcy5zdGF0ZS5nZXQoXCJzZWxmRW1wbG95bWVudFRheFwiKTtcclxuXHJcbiAgICAgICAgdmFyIF9fcmV0ID0gY2FsYyh3RGF5cywgaHJQZXJEYXksIHRheCwgc2VsZkVtcGxveW1lbnRUYXgsIHRoaXMuc3RhdGUuZ2V0KFwiYmVuZWZpdHNcIikpO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLndpdGhNdXRhdGlvbnMoKG5ld1N0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBuZXdTdGF0ZS5zZXQoXCJtZXRob2RcIiwgbWV0aG9kKVxyXG4gICAgICAgICAgICAgICAgbmV3U3RhdGUuc2V0KFwid29ya2FibGVEYXlzXCIsIHdEYXlzKVxyXG4gICAgICAgICAgICAgICAgbmV3U3RhdGUuc2V0KFwidzJBbm51YWxcIiwgTWF0aC5jZWlsKF9fcmV0LncyQW5udWFsKSlcclxuICAgICAgICAgICAgICAgIG5ld1N0YXRlLnNldChcIncySG91cmx5XCIsIE1hdGguY2VpbChfX3JldC53MkhvdXJseSkpXHJcbiAgICAgICAgICAgICAgICBuZXdTdGF0ZS5zZXQoXCJjb250cmFjdEFubnVhbFwiLCBNYXRoLmNlaWwoX19yZXQuY29udHJhY3RBbm51YWwpKVxyXG4gICAgICAgICAgICAgICAgbmV3U3RhdGUuc2V0KFwiY29udHJhY3RIb3VybHlcIiwgTWF0aC5jZWlsKF9fcmV0LmNvbnRyYWN0SG91cmx5KSlcclxuICAgICAgICAgICAgICAgIG5ld1N0YXRlLnNldChcInRha2Vob21lQW5udWFsbHlcIiwgTWF0aC5jZWlsKF9fcmV0LnRha2Vob21lQW5udWFsbHkpKVxyXG4gICAgICAgICAgICAgICAgbmV3U3RhdGUuc2V0KFwidGFrZWhvbWVNb250aGx5XCIsIE1hdGguY2VpbChfX3JldC50YWtlaG9tZU1vbnRobHkpKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRGF0YVN0b3JlOyJdfQ==
