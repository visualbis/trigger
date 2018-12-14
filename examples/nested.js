webpackJsonp([2],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
throw new Error("Cannot find module \"babel-runtime/helpers/classCallCheck\"");
throw new Error("Cannot find module \"babel-runtime/helpers/possibleConstructorReturn\"");
throw new Error("Cannot find module \"babel-runtime/helpers/inherits\"");
throw new Error("Cannot find module \"react\"");
throw new Error("Cannot find module \"react-dom\"");
throw new Error("Cannot find module \"rc-trigger\"");
throw new Error("Cannot find module \"rc-trigger/assets/index.less\"");



/* eslint no-console:0 */






var builtinPlacements = {
  left: {
    points: ['cr', 'cl']
  },
  right: {
    points: ['cl', 'cr']
  },
  top: {
    points: ['bc', 'tc']
  },
  bottom: {
    points: ['tc', 'bc']
  },
  topLeft: {
    points: ['bl', 'tl']
  },
  topRight: {
    points: ['br', 'tr']
  },
  bottomRight: {
    points: ['tr', 'br']
  },
  bottomLeft: {
    points: ['tl', 'bl']
  }
};

var popupBorderStyle = {
  border: '1px solid red',
  padding: 10
};

function saveRef(name, component) {
  this[name] = component;
}

var Test = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(Test, _React$Component);

  function Test(props) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Test);

    var _this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.call(this, props));

    _this.saveContainerRef = saveRef.bind(_this, 'containerInstance');
    return _this;
  }

  Test.prototype.render = function render() {
    var _this2 = this;

    var innerTrigger = __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
      'div',
      { style: popupBorderStyle },
      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('div', { ref: this.saveContainerRef }),
      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5_rc_trigger___default.a,
        {
          popupPlacement: 'bottom',
          action: ['click'],
          builtinPlacements: builtinPlacements,
          getPopupContainer: function getPopupContainer() {
            return _this2.containerInstance;
          },
          popup: __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
            'div',
            { style: popupBorderStyle },
            'I am inner Trigger Popup'
          )
        },
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
          'span',
          { href: '#', style: { margin: 20 } },
          'clickToShowInnerTrigger'
        )
      )
    );
    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5_rc_trigger___default.a,
          {
            popupPlacement: 'left',
            action: ['click'],
            builtinPlacements: builtinPlacements,
            popup: __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
              'div',
              { style: popupBorderStyle },
              'i am a click popup'
            )
          },
          __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
            'span',
            null,
            __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_5_rc_trigger___default.a,
              {
                popupPlacement: 'bottom',
                action: ['hover'],
                builtinPlacements: builtinPlacements,
                popup: __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
                  'div',
                  { style: popupBorderStyle },
                  'i am a hover popup'
                )
              },
              __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
                'span',
                { href: '#', style: { margin: 20 } },
                'trigger'
              )
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        'div',
        { style: { margin: 50 } },
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5_rc_trigger___default.a,
          {
            popupPlacement: 'right',
            action: ['hover'],
            builtinPlacements: builtinPlacements,
            popup: innerTrigger
          },
          __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
            'span',
            { href: '#', style: { margin: 20 } },
            'trigger'
          )
        )
      )
    );
  };

  return Test;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_4_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
  'div',
  { style: { margin: 200 } },
  __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Test, null)
), document.getElementById('__react-content'));

/***/ })
],[0]);
//# sourceMappingURL=nested.js.map