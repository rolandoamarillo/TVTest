var APP_com_rolandoamarillo_test = (function () {
  'use strict';

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _newArrowCheck(innerThis, boundThis) {
    if (innerThis !== boundThis) {
      throw new TypeError("Cannot instantiate an arrow function");
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function () {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  var isMergeableObject = function isMergeableObject(value) {
    return isNonNullObject(value) && !isSpecial(value);
  };

  function isNonNullObject(value) {
    return !!value && typeof value === 'object';
  }

  function isSpecial(value) {
    var stringValue = Object.prototype.toString.call(value);
    return stringValue === '[object RegExp]' || stringValue === '[object Date]' || isReactElement(value);
  } // see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25


  var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
  var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

  function isReactElement(value) {
    return value.$$typeof === REACT_ELEMENT_TYPE;
  }

  function emptyTarget(val) {
    return Array.isArray(val) ? [] : {};
  }

  function cloneUnlessOtherwiseSpecified(value, options) {
    return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
  }

  function defaultArrayMerge(target, source, options) {
    return target.concat(source).map(function (element) {
      return cloneUnlessOtherwiseSpecified(element, options);
    });
  }

  function getMergeFunction(key, options) {
    if (!options.customMerge) {
      return deepmerge;
    }

    var customMerge = options.customMerge(key);
    return typeof customMerge === 'function' ? customMerge : deepmerge;
  }

  function getEnumerableOwnPropertySymbols(target) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function (symbol) {
      return target.propertyIsEnumerable(symbol);
    }) : [];
  }

  function getKeys(target) {
    return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
  }

  function propertyIsOnObject(object, property) {
    try {
      return property in object;
    } catch (_) {
      return false;
    }
  } // Protects from prototype poisoning and unexpected merging up the prototype chain.


  function propertyIsUnsafe(target, key) {
    return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
    && !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
    && Object.propertyIsEnumerable.call(target, key)); // and also unsafe if they're nonenumerable.
  }

  function mergeObject(target, source, options) {
    var destination = {};

    if (options.isMergeableObject(target)) {
      getKeys(target).forEach(function (key) {
        destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
      });
    }

    getKeys(source).forEach(function (key) {
      if (propertyIsUnsafe(target, key)) {
        return;
      }

      if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
        destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
      } else {
        destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
      }
    });
    return destination;
  }

  function deepmerge(target, source, options) {
    options = options || {};
    options.arrayMerge = options.arrayMerge || defaultArrayMerge;
    options.isMergeableObject = options.isMergeableObject || isMergeableObject; // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
    // implementations can use it. The caller may not replace it.

    options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
    var sourceIsArray = Array.isArray(source);
    var targetIsArray = Array.isArray(target);
    var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

    if (!sourceAndTargetTypesMatch) {
      return cloneUnlessOtherwiseSpecified(source, options);
    } else if (sourceIsArray) {
      return options.arrayMerge(target, source, options);
    } else {
      return mergeObject(target, source, options);
    }
  }

  deepmerge.all = function deepmergeAll(array, options) {
    if (!Array.isArray(array)) {
      throw new Error('first argument should be an array');
    }

    return array.reduce(function (prev, next) {
      return deepmerge(prev, next, options);
    }, {});
  };

  var deepmerge_1 = deepmerge;
  var cjs = deepmerge_1;

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 RDK Management
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var Lightning = window.lng;

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 RDK Management
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 RDK Management
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * Simple module for localization of strings.
   *
   * How to use:
   * 1. Create localization file with following JSON format:
   * {
   *   "en" :{
   *     "how": "How do you want your egg today?",
   *     "boiledEgg": "Boiled egg",
   *     "softBoiledEgg": "Soft-boiled egg",
   *     "choice": "How to choose the egg",
   *     "buyQuestion": "I'd like to buy {0} eggs, {1} dollars each."
   *   },
   *
   *   "it": {
   *     "how": "Come vuoi il tuo uovo oggi?",
   *     "boiledEgg": "Uovo sodo",
   *     "softBoiledEgg": "Uovo alla coque",
   *     "choice": "Come scegliere l'uovo",
   *     "buyQuestion": "Mi piacerebbe comprare {0} uova, {1} dollari ciascuna."
   *   }
   * }
   *
   * 2. Use Locale's module load method, specifying path to your localization file and set chosen language, e.g.:
   *    > Locale.load('static/locale/locale.json');
   *    > Locale.setLanguage('en');
   *
   * 3. Use localization strings:
   *    > console.log(Locale.tr.how);
   *    How do you want your egg today?
   *    > console.log(Locale.tr.boiledEgg);
   *    Boiled egg
   *
   * 4. String formatting
   *    > console.log(Locale.tr.buyQuestion.format(10, 0.5));
   *    I'd like to buy 10 eggs, 0.5 dollars each.
   */
  var Locale = /*#__PURE__*/function () {
    function Locale() {
      _classCallCheck(this, Locale);

      this.__enabled = false;
    }
    /**
     * Loads translation object from external json file.
     *
     * @param {String} path Path to resource.
     * @return {Promise}
     */


    _createClass(Locale, [{
      key: "load",
      value: function () {
        var _load = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(path) {
          var _this = this;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (this.__enabled) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return");

                case 2:
                  _context.next = 4;
                  return fetch(path).then(function (resp) {
                    _newArrowCheck(this, _this);

                    return resp.json();
                  }.bind(this)).then(function (resp) {
                    _newArrowCheck(this, _this);

                    this.loadFromObject(resp);
                  }.bind(this));

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function load(_x) {
          return _load.apply(this, arguments);
        }

        return load;
      }()
      /**
       * Sets language used by module.
       *
       * @param {String} lang
       */

    }, {
      key: "setLanguage",
      value: function setLanguage(lang) {
        this.__enabled = true;
        this.language = lang;
      }
      /**
       * Returns reference to translation object for current language.
       *
       * @return {Object}
       */

    }, {
      key: "loadFromObject",

      /**
       * Loads translation object from existing object (binds existing object).
       *
       * @param {Object} trObj
       */
      value: function loadFromObject(trObj) {
        this.__trObj = trObj;

        for (var _i = 0, _Object$values = Object.values(this.__trObj); _i < _Object$values.length; _i++) {
          var lang = _Object$values[_i];

          for (var _i2 = 0, _Object$keys = Object.keys(lang); _i2 < _Object$keys.length; _i2++) {
            var str = _Object$keys[_i2];
            lang[str] = new LocalizedString(lang[str]);
          }
        }
      }
    }, {
      key: "tr",
      get: function get() {
        return this.__trObj[this.language];
      }
    }]);

    return Locale;
  }();
  /**
   * Extended string class used for localization.
   */


  var LocalizedString = /*#__PURE__*/function (_String) {
    _inherits(LocalizedString, _String);

    var _super = _createSuper(LocalizedString);

    function LocalizedString() {
      _classCallCheck(this, LocalizedString);

      return _super.apply(this, arguments);
    }

    _createClass(LocalizedString, [{
      key: "format",

      /**
       * Returns formatted LocalizedString.
       * Replaces each placeholder value (e.g. {0}, {1}) with corresponding argument.
       *
       * E.g.:
       * > new LocalizedString('{0} and {1} and {0}').format('A', 'B');
       * A and B and A
       *
       * @param  {...any} args List of arguments for placeholders.
       */
      value: function format() {
        var _this2 = this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var sub = args.reduce(function (string, arg, index) {
          _newArrowCheck(this, _this2);

          return string.split("{".concat(index, "}")).join(arg);
        }.bind(this), this);
        return new LocalizedString(sub);
      }
    }]);

    return LocalizedString;
  }( /*#__PURE__*/_wrapNativeSuper(String));

  var Locale$1 = new Locale();

  var _this = undefined;

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 RDK Management
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var settings = {};
  var initSettings = function initSettings(appSettings, platformSettings) {
    _newArrowCheck(this, _this);

    settings['app'] = appSettings;
    settings['platform'] = platformSettings;
  }.bind(undefined); // todo: support key for nested settings with dot notation? e.g. stage.useImageworker from 'app' settings

  var Settings = {
    get: function get(type, key) {
      return settings[type] && settings[type][key];
    },
    has: function has(type, key) {
      return settings[type] && key in settings[type];
    }
  };

  var _this$1 = undefined;

  var prepLog = function prepLog(type, args) {
    _newArrowCheck(this, _this$1);

    var colors = {
      Info: 'green',
      Debug: 'gray',
      Warn: 'orange',
      Error: 'red'
    };
    args = Array.from(args);
    return ['%c' + (args.length > 1 && typeof args[0] === 'string' ? args.shift() : type), 'background-color: ' + colors[type] + '; color: white; padding: 2px 4px; border-radius: 2px', args];
  }.bind(undefined);

  var Log = {
    info: function info() {
      Settings.get('platform', 'log') && console.log.apply(console, prepLog('Info', arguments));
    },
    debug: function debug() {
      Settings.get('platform', 'log') && console.debug.apply(console, prepLog('Debug', arguments));
    },
    error: function error() {
      Settings.get('platform', 'log') && console.error.apply(console, prepLog('Error', arguments));
    },
    warn: function warn() {
      Settings.get('platform', 'log') && console.warn.apply(console, prepLog('Warn', arguments));
    }
  };

  var _this$2 = undefined;

  var sendMetric = function sendMetric(type, event, params) {
    _newArrowCheck(this, _this$2);

    Log.info('Sending metric', type, event, params);
  }.bind(undefined);

  var initMetrics = function initMetrics(config) {
    _newArrowCheck(this, _this$2);

    sendMetric = config.sendMetric;
  }.bind(undefined); // available metric per category

  var metrics = {
    app: ['launch', 'loaded', 'ready', 'close'],
    page: ['view', 'leave'],
    user: ['click', 'input'],
    media: ['abort', 'canplay', 'ended', 'pause', 'play', 'suspend', 'volumechange', 'waiting', 'seeking', 'seeked']
  }; // error metric function (added to each category)

  var errorMetric = function errorMetric(type, message, code, visible) {
    var params = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    params = _objectSpread2({
      params: params
    }, {
      message: message,
      code: code,
      visible: visible
    });
    sendMetric(type, 'error', params);
  };

  var Metric = function Metric(type, events) {
    var _this2 = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return events.reduce(function (obj, event) {
      _newArrowCheck(this, _this2);

      obj[event] = function (name) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        params = _objectSpread2(_objectSpread2(_objectSpread2({}, options), name ? {
          name: name
        } : {}), params);
        sendMetric(type, event, params);
      };

      return obj;
    }.bind(this), {
      error: function error(message, code, params) {
        errorMetric(type, message, code, params);
      },
      event: function event(name, params) {
        sendMetric(type, name, params);
      }
    });
  };

  var Metrics = function Metrics(types) {
    var _this3 = this;

    _newArrowCheck(this, _this$2);

    return Object.keys(types).reduce(function (obj, type) {
      var _this4 = this;

      _newArrowCheck(this, _this3);

      // media metric works a bit different!
      // it's a function that accepts a url and returns an object with the available metrics
      // url is automatically passed as a param in every metric
      type === 'media' ? obj[type] = function (url) {
        _newArrowCheck(this, _this4);

        return Metric(type, types[type], {
          url: url
        });
      }.bind(this) : obj[type] = Metric(type, types[type]);
      return obj;
    }.bind(this), {
      error: errorMetric,
      event: sendMetric
    });
  }.bind(undefined);

  var Metrics$1 = Metrics(metrics);

  var VersionLabel = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(VersionLabel, _Lightning$Component);

    var _super = _createSuper(VersionLabel);

    function VersionLabel() {
      _classCallCheck(this, VersionLabel);

      return _super.apply(this, arguments);
    }

    _createClass(VersionLabel, [{
      key: "version",
      set: function set(version) {
        this.tag('Text').text = "v".concat(version);
        this.tag('Text').loadTexture();
        this.w = this.tag('Text').renderWidth + 40;
      }
    }], [{
      key: "_template",
      value: function _template() {
        var _this = this;

        return {
          rect: true,
          color: 0xbb0078ac,
          h: 40,
          w: 100,
          x: function x(w) {
            _newArrowCheck(this, _this);

            return w - 50;
          }.bind(this),
          y: function y(h) {
            _newArrowCheck(this, _this);

            return h - 50;
          }.bind(this),
          mount: 1,
          Text: {
            w: function w(_w) {
              _newArrowCheck(this, _this);

              return _w;
            }.bind(this),
            h: function h(_h) {
              _newArrowCheck(this, _this);

              return _h;
            }.bind(this),
            y: 5,
            text: {
              fontSize: 22,
              textAlign: 'center'
            }
          }
        };
      }
    }]);

    return VersionLabel;
  }(Lightning.Component);

  var FpsIndicator = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(FpsIndicator, _Lightning$Component);

    var _super = _createSuper(FpsIndicator);

    function FpsIndicator() {
      _classCallCheck(this, FpsIndicator);

      return _super.apply(this, arguments);
    }

    _createClass(FpsIndicator, [{
      key: "_setup",
      value: function _setup() {
        var _this = this;

        this.config = _objectSpread2(_objectSpread2({}, {
          log: false,
          interval: 500,
          threshold: 1
        }), Settings.get('platform', 'showFps'));
        this.fps = 0;
        this.lastFps = this.fps - this.config.threshold;

        var fpsCalculator = function fpsCalculator() {
          _newArrowCheck(this, _this);

          this.fps = ~~(1 / this.stage.dt);
        }.bind(this);

        this.stage.on('frameStart', fpsCalculator);
        this.stage.off('framestart', fpsCalculator);
        this.interval = setInterval(this.showFps.bind(this), this.config.interval);
      }
    }, {
      key: "_firstActive",
      value: function _firstActive() {
        this.showFps();
      }
    }, {
      key: "_detach",
      value: function _detach() {
        clearInterval(this.interval);
      }
    }, {
      key: "showFps",
      value: function showFps() {
        if (Math.abs(this.lastFps - this.fps) <= this.config.threshold) return;
        this.lastFps = this.fps; // green

        var bgColor = 0xff008000; // orange

        if (this.fps <= 40 && this.fps > 20) bgColor = 0xffffa500; // red
        else if (this.fps <= 20) bgColor = 0xffff0000;
        this.tag('Background').setSmooth('color', bgColor);
        this.tag('Counter').text = "".concat(this.fps);
        this.config.log && Log.info('FPS', this.fps);
      }
    }], [{
      key: "_template",
      value: function _template() {
        var _this2 = this;

        return {
          rect: true,
          color: 0xffffffff,
          texture: Lightning.Tools.getRoundRect(80, 80, 40),
          h: 80,
          w: 80,
          x: 100,
          y: 100,
          mount: 1,
          Background: {
            x: 3,
            y: 3,
            texture: Lightning.Tools.getRoundRect(72, 72, 36),
            color: 0xff008000
          },
          Counter: {
            w: function w(_w) {
              _newArrowCheck(this, _this2);

              return _w;
            }.bind(this),
            h: function h(_h) {
              _newArrowCheck(this, _this2);

              return _h;
            }.bind(this),
            y: 10,
            text: {
              fontSize: 32,
              textAlign: 'center'
            }
          },
          Text: {
            w: function w(_w2) {
              _newArrowCheck(this, _this2);

              return _w2;
            }.bind(this),
            h: function h(_h2) {
              _newArrowCheck(this, _this2);

              return _h2;
            }.bind(this),
            y: 48,
            text: {
              fontSize: 15,
              textAlign: 'center',
              text: 'FPS'
            }
          }
        };
      }
    }]);

    return FpsIndicator;
  }(Lightning.Component);

  var defaultOptions = {
    stage: {
      w: 1920,
      h: 1080,
      clearColor: 0x00000000,
      canvas2d: false
    },
    debug: false,
    defaultFontFace: 'RobotoRegular',
    keys: {
      8: 'Back',
      13: 'Enter',
      27: 'Menu',
      37: 'Left',
      38: 'Up',
      39: 'Right',
      40: 'Down',
      174: 'ChannelDown',
      175: 'ChannelUp',
      178: 'Stop',
      250: 'PlayPause',
      191: 'Search',
      // Use "/" for keyboard
      409: 'Search'
    }
  };

  if (window.innerHeight === 720) {
    defaultOptions.stage['w'] = 1280;
    defaultOptions.stage['h'] = 720;
    defaultOptions.stage['precision'] = 0.6666666667;
  }

  function Application (App, appData, platformSettings) {
    return /*#__PURE__*/function (_Lightning$Applicatio) {
      _inherits(Application, _Lightning$Applicatio);

      var _super = _createSuper(Application);

      function Application(options) {
        var _this;

        _classCallCheck(this, Application);

        var config = cjs(defaultOptions, options);
        _this = _super.call(this, config);
        _this.config = config;
        return _this;
      }

      _createClass(Application, [{
        key: "_setup",
        value: function _setup() {
          var _this2 = this;

          Promise.all([this.loadFonts(App.config && App.config.fonts || App.getFonts && App.getFonts() || []), Locale$1.load(App.config && App.config.locale || App.getLocale && App.getLocale())]).then(function () {
            _newArrowCheck(this, _this2);

            Metrics$1.app.loaded();
            this.childList.a({
              ref: 'App',
              type: App,
              appData: appData,
              forceZIndexContext: !!platformSettings.showVersion || !!platformSettings.showFps
            });

            if (platformSettings.showVersion) {
              this.childList.a({
                ref: 'VersionLabel',
                type: VersionLabel,
                version: this.config.version
              });
            }

            if (platformSettings.showFps) {
              this.childList.a({
                ref: 'FpsCounter',
                type: FpsIndicator
              });
            }

            _get(_getPrototypeOf(Application.prototype), "_setup", this).call(this);
          }.bind(this)).catch(console.error);
        }
      }, {
        key: "_handleBack",
        value: function _handleBack() {
          this.closeApp();
        }
      }, {
        key: "_handleExit",
        value: function _handleExit() {
          this.closeApp();
        }
      }, {
        key: "closeApp",
        value: function closeApp() {
          if (platformSettings.onClose && typeof platformSettings.onClose === 'function') {
            platformSettings.onClose();
          } else {
            this.close();
          }
        }
      }, {
        key: "close",
        value: function close() {
          Log.info('Closing App');
          this.childList.remove(this.tag('App')); // force texture garbage collect

          this.stage.gc();
          this.destroy();
        }
      }, {
        key: "loadFonts",
        value: function loadFonts(fonts) {
          var _this3 = this;

          return new Promise(function (resolve, reject) {
            var _this4 = this;

            _newArrowCheck(this, _this3);

            fonts.map(function (_ref) {
              var _this5 = this;

              _newArrowCheck(this, _this4);

              var family = _ref.family,
                  url = _ref.url,
                  descriptors = _ref.descriptors;
              return function () {
                _newArrowCheck(this, _this5);

                var fontFace = new FontFace(family, 'url(' + url + ')', descriptors || {});
                document.fonts.add(fontFace);
                return fontFace.load();
              }.bind(this);
            }.bind(this)).reduce(function (promise, method) {
              var _this6 = this;

              _newArrowCheck(this, _this4);

              return promise.then(function () {
                _newArrowCheck(this, _this6);

                return method();
              }.bind(this));
            }.bind(this), Promise.resolve(null)).then(resolve).catch(reject);
          }.bind(this));
        }
      }, {
        key: "_getFocused",
        value: function _getFocused() {
          return this.tag('App');
        }
      }], [{
        key: "_template",
        value: function _template() {
          return {
            w: 1920,
            h: 1080,
            rect: true,
            color: 0x00000000
          };
        }
      }]);

      return Application;
    }(Lightning.Application);
  }

  var _this$3 = undefined;

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 RDK Management
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var basePath;

  var _proxyUrl;

  var initUtils = function initUtils(config) {
    _newArrowCheck(this, _this$3);

    basePath = _ensureUrlWithProtocol(makeFullStaticPath(window.location.pathname, config.path || '/'));

    if (config.proxyUrl) {
      _proxyUrl = _ensureUrlWithProtocol(config.proxyUrl);
    }
  }.bind(undefined);
  var Utils = {
    asset: function asset(relPath) {
      return basePath + relPath;
    },
    proxyUrl: function proxyUrl(url) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return _proxyUrl ? _proxyUrl + '?' + _makeQueryString(url, options) : url;
    },
    makeQueryString: function makeQueryString() {
      return _makeQueryString.apply(void 0, arguments);
    },
    // since imageworkers don't work without protocol
    ensureUrlWithProtocol: function ensureUrlWithProtocol() {
      return _ensureUrlWithProtocol.apply(void 0, arguments);
    }
  };

  var _ensureUrlWithProtocol = function _ensureUrlWithProtocol(url) {
    _newArrowCheck(this, _this$3);

    if (/^\/\//.test(url)) {
      return window.location.protocol + url;
    }

    if (!/^(?:https?:)/i.test(url)) {
      return window.location.origin + url;
    }

    return url;
  }.bind(undefined);
  var makeFullStaticPath = function makeFullStaticPath() {
    var pathname = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
    var path = arguments.length > 1 ? arguments[1] : undefined;
    // ensure path has traling slash
    path = path.charAt(path.length - 1) !== '/' ? path + '/' : path; // if path is URL, we assume it's already the full static path, so we just return it

    if (/^(?:https?:)?(?:\/\/)/.test(path)) {
      return path;
    }

    if (path.charAt(0) === '/') {
      return path;
    } else {
      // cleanup the pathname (i.e. remove possible index.html)
      pathname = cleanUpPathName(pathname); // remove possible leading dot from path

      path = path.charAt(0) === '.' ? path.substr(1) : path; // ensure path has leading slash

      path = path.charAt(0) !== '/' ? '/' + path : path;
      return pathname + path;
    }
  };
  var cleanUpPathName = function cleanUpPathName(pathname) {
    _newArrowCheck(this, _this$3);

    if (pathname.slice(-1) === '/') return pathname.slice(0, -1);
    var parts = pathname.split('/');
    if (parts[parts.length - 1].indexOf('.') > -1) parts.pop();
    return parts.join('/');
  }.bind(undefined);

  var _makeQueryString = function _makeQueryString(url) {
    var _this2 = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'url';
    // add operator as an option
    options.operator = 'metrological'; // Todo: make this configurable (via url?)
    // add type (= url or qr) as an option, with url as the value

    options[type] = url;
    return Object.keys(options).map(function (key) {
      _newArrowCheck(this, _this2);

      return encodeURIComponent(key) + '=' + encodeURIComponent('' + options[key]);
    }.bind(this)).join('&');
  };

  var ScaledImageTexture = /*#__PURE__*/function (_Lightning$textures$I) {
    _inherits(ScaledImageTexture, _Lightning$textures$I);

    var _super = _createSuper(ScaledImageTexture);

    function ScaledImageTexture(stage) {
      var _this;

      _classCallCheck(this, ScaledImageTexture);

      _this = _super.call(this, stage);
      _this._scalingOptions = undefined;
      return _this;
    }

    _createClass(ScaledImageTexture, [{
      key: "_getLookupId",
      value: function _getLookupId() {
        return "".concat(this._src, "-").concat(this._scalingOptions.type, "-").concat(this._scalingOptions.w, "-").concat(this._scalingOptions.h);
      }
    }, {
      key: "getNonDefaults",
      value: function getNonDefaults() {
        var obj = _get(_getPrototypeOf(ScaledImageTexture.prototype), "getNonDefaults", this).call(this);

        if (this._src) {
          obj.src = this._src;
        }

        return obj;
      }
    }, {
      key: "options",
      set: function set(options) {
        this.resizeMode = this._scalingOptions = options;
      }
    }]);

    return ScaledImageTexture;
  }(Lightning.textures.ImageTexture);

  var _this$4 = undefined;
  (function (imageUrl, options) {
    var _this2 = this;

    _newArrowCheck(this, _this$4);

    var imageServerUrl = Settings.get('platform', 'imageServerUrl'); // make and return ScaledImageTexture

    var make = function make(options) {
      _newArrowCheck(this, _this2);

      // local asset, wrap it in Utils.asset()
      if (!/^(?:https?:)?\/\//i.test(imageUrl)) {
        imageUrl = Utils.asset(imageUrl);
      } // only pass to image server if imageServerUrl is configured
      // and if the asset isn't local to the app (i.e. has same origin)


      if (imageServerUrl && imageUrl.indexOf(window.location.origin) === -1) {
        imageUrl = Utils.ensureUrlWithProtocol(imageServerUrl + '?' + Utils.makeQueryString(imageUrl, options));
      } else {
        // Lightning will handle the resizing and has only 2 flavours (cover and contain)
        if (options.type === 'crop') options.type = 'cover';else options.type = 'contain';
      }

      return {
        type: ScaledImageTexture,
        src: imageUrl,
        options: options
      };
    }.bind(this); // merge options with default


    var setOptions = function setOptions(options) {
      _newArrowCheck(this, _this2);

      return _objectSpread2(_objectSpread2({}, {
        type: 'contain',
        w: 0,
        h: 0
      }), options);
    }.bind(this); // if options are passed, return scaled image right away


    if (options) {
      return make(setOptions(options));
    } // otherwise return 'chained' functions


    return {
      // official api
      exact: function exact(w, h) {
        _newArrowCheck(this, _this2);

        return make(setOptions({
          type: 'exact',
          w: w,
          h: h
        }));
      }.bind(this),
      landscape: function landscape(w) {
        _newArrowCheck(this, _this2);

        return make(setOptions({
          type: 'landscape',
          w: w
        }));
      }.bind(this),
      // fixme: remove deprecated stuff in future release of SDK
      portrait: function portrait(w_but_actually_h, deprecated_h) {
        _newArrowCheck(this, _this2);

        if (typeof deprecated_h !== 'undefined' && deprecated_h !== null) {
          console.warn("The signature of the 'portrait()'-method has changed, soon it will only accept the height as a single argument (instead of 'portrait(width, height)')");
          w_but_actually_h = deprecated_h;
        }

        return make(setOptions({
          type: 'portrait',
          h: w_but_actually_h
        }));
      }.bind(this),
      cover: function cover(w, h) {
        _newArrowCheck(this, _this2);

        return make(setOptions({
          type: 'cover',
          w: w,
          h: h
        }));
      }.bind(this),
      contain: function contain(w, h) {
        _newArrowCheck(this, _this2);

        return make(setOptions({
          type: 'contain',
          w: w,
          h: h
        }));
      }.bind(this),
      original: function original() {
        _newArrowCheck(this, _this2);

        return make(setOptions({
          type: 'contain'
        }));
      }.bind(this),
      // todo: add positioning - i.e. top, bottom, center, left etc.
      // FIXME: remove deprecated api (summer of 2020)
      crop: function crop(w, h) {
        _newArrowCheck(this, _this2);

        console.warn("The 'crop()'-method is deprecated and will be removed. Please use 'cover()' instead");
        return make(setOptions({
          type: 'cover',
          w: w,
          h: h
        }));
      }.bind(this),
      fit: function fit(w, h) {
        _newArrowCheck(this, _this2);

        console.warn("The 'fit()'-method is deprecated and will be removed. Please use 'exact()' instead");
        return make(setOptions({
          type: 'exact',
          w: w,
          h: h
        }));
      }.bind(this),
      parent: function parent(w, h) {
        _newArrowCheck(this, _this2);

        console.warn("The 'parent()'-method is deprecated and will be removed. Please use 'exact()' instead");
        return make(setOptions({
          type: 'exact',
          w: w,
          h: h
        }));
      }.bind(this),
      height: function height(w, h) {
        _newArrowCheck(this, _this2);

        console.warn("The 'height()'-method is deprecated and will be removed. Please use 'portrait()' instead");
        return make(setOptions({
          type: 'portrait',
          w: w,
          h: h
        }));
      }.bind(this),
      width: function width(w, h) {
        _newArrowCheck(this, _this2);

        console.warn("The 'width()'-method is deprecated and will be removed. Please use 'landscape()' instead");
        return make(setOptions({
          type: 'landscape',
          w: w,
          h: h
        }));
      }.bind(this),
      auto: function auto(w, h) {
        _newArrowCheck(this, _this2);

        console.warn("The 'auto()'-method is deprecated and will be removed. Please use 'cover()' instead");
        return make(setOptions({
          type: 'contain',
          w: w,
          h: h
        }));
      }.bind(this)
    };
  }).bind(undefined);

  var _this$5 = undefined;

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 RDK Management
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var formatLocale = function formatLocale(locale) {
    _newArrowCheck(this, _this$5);

    if (locale && locale.length === 2) {
      return "".concat(locale.toLowerCase(), "-").concat(locale.toUpperCase());
    } else {
      return locale;
    }
  }.bind(undefined);

  var getLocale = function getLocale(defaultValue) {
    _newArrowCheck(this, _this$5);

    if ('language' in navigator) {
      var locale = formatLocale(navigator.language);
      return Promise.resolve(locale);
    } else {
      return Promise.resolve(defaultValue);
    }
  }.bind(undefined);
  var getLanguage = function getLanguage(defaultValue) {
    _newArrowCheck(this, _this$5);

    if ('language' in navigator) {
      var language = formatLocale(navigator.language).slice(0, 2);
      return Promise.resolve(language);
    } else {
      return Promise.resolve(defaultValue);
    }
  }.bind(undefined);
  var getCountryCode = function getCountryCode(defaultValue) {
    _newArrowCheck(this, _this$5);

    if ('language' in navigator) {
      var countryCode = formatLocale(navigator.language).slice(3, 5);
      return Promise.resolve(countryCode);
    } else {
      return Promise.resolve(defaultValue);
    }
  }.bind(undefined);
  var getLatLon = function getLatLon(defaultValue) {
    var _this2 = this;

    _newArrowCheck(this, _this$5);

    return new Promise(function (resolve) {
      var _this3 = this;

      _newArrowCheck(this, _this2);

      var geoLocationSuccess = function geoLocationSuccess(success) {
        _newArrowCheck(this, _this3);

        var coords = success && success.coords;
        return resolve([coords.latitude, coords.longitude]);
      }.bind(this);

      var geoLocationError = function geoLocationError(error) {
        _newArrowCheck(this, _this3);

        return resolve(defaultValue);
      }.bind(this);

      var geoLocationOptions = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };

      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(geoLocationSuccess, geoLocationError, geoLocationOptions);
      } else {
        return resolve(defaultValue);
      }
    }.bind(this));
  }.bind(undefined);

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 RDK Management
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var defaultProfile = {
    ageRating: 'adult',
    city: 'New York',
    countryCode: getCountryCode('US'),
    ip: '127.0.0.1',
    household: 'b2244e9d4c04826ccd5a7b2c2a50e7d4',
    language: getLanguage('en'),
    latlon: getLatLon([40.7128, 74.006]),
    locale: getLocale('en-US'),
    mac: '00:00:00:00:00:00',
    operator: 'Metrological',
    platform: 'Metrological',
    packages: [],
    uid: 'ee6723b8-7ab3-462c-8d93-dbf61227998e',
    stbType: 'Metrological'
  };

  var _this$6 = undefined;

  var getInfo = function getInfo(key) {
    _newArrowCheck(this, _this$6);

    var profile = _objectSpread2(_objectSpread2({}, defaultProfile), Settings.get('platform', 'profile'));

    return Promise.resolve(profile[key]);
  }.bind(undefined);

  var setInfo = function setInfo(key, params) {
    _newArrowCheck(this, _this$6);

    if (key in defaultProfile) defaultProfile[key] = params;
  }.bind(undefined);

  var initProfile = function initProfile(config) {
    _newArrowCheck(this, _this$6);

    getInfo = config.getInfo;
    setInfo = config.setInfo;
  }.bind(undefined);

  var getOrSet = function getOrSet(key, params) {
    _newArrowCheck(this, _this$6);

    return params ? setInfo(key, params) : getInfo(key);
  }.bind(undefined); // public API

  var _this$7 = undefined;
  var events = ['timeupdate', 'error', 'ended', 'loadeddata', 'canplay', 'play', 'playing', 'pause', 'loadstart', 'seeking', 'seeked', 'encrypted'];

  var mediaUrl = function mediaUrl(url) {
    _newArrowCheck(this, _this$7);

    return url;
  }.bind(undefined);

  var initMediaPlayer = function initMediaPlayer(config) {
    _newArrowCheck(this, _this$7);

    if (config.mediaUrl) {
      mediaUrl = config.mediaUrl;
    }
  }.bind(undefined);

  var Mediaplayer = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(Mediaplayer, _Lightning$Component);

    var _super = _createSuper(Mediaplayer);

    function Mediaplayer() {
      _classCallCheck(this, Mediaplayer);

      return _super.apply(this, arguments);
    }

    _createClass(Mediaplayer, [{
      key: "_construct",
      value: function _construct() {
        this._skipRenderToTexture = false;
        this._metrics = null;
        this._textureMode = Settings.get('platform', 'textureMode') || false;
        Log.info('Texture mode: ' + this._textureMode);
      }
    }, {
      key: "_init",
      value: function _init() {
        //re-use videotag if already there
        var videoEls = document.getElementsByTagName('video');
        if (videoEls && videoEls.length > 0) this.videoEl = videoEls[0];else {
          this.videoEl = document.createElement('video');
          this.videoEl.setAttribute('id', 'video-player');
          this.videoEl.style.position = 'absolute';
          this.videoEl.style.zIndex = '1';
          this.videoEl.style.display = 'none';
          this.videoEl.setAttribute('width', '100%');
          this.videoEl.setAttribute('height', '100%');
          this.videoEl.style.visibility = this.textureMode ? 'hidden' : 'visible';
          document.body.appendChild(this.videoEl);
        }

        if (this.textureMode && !this._skipRenderToTexture) {
          this._createVideoTexture();
        }

        this.eventHandlers = [];
      }
    }, {
      key: "_registerListeners",
      value: function _registerListeners() {
        var _this2 = this;

        events.forEach(function (event) {
          var _this3 = this;

          _newArrowCheck(this, _this2);

          var handler = function handler(e) {
            _newArrowCheck(this, _this3);

            if (this._metrics[event] && typeof this._metrics[event] === 'function') {
              this._metrics[event]({
                currentTime: this.videoEl.currentTime
              });
            }

            this.fire(event, {
              videoElement: this.videoEl,
              event: e
            });
          }.bind(this);

          this.eventHandlers.push(handler);
          this.videoEl.addEventListener(event, handler);
        }.bind(this));
      }
    }, {
      key: "_deregisterListeners",
      value: function _deregisterListeners() {
        var _this4 = this;

        Log.info('Deregistering event listeners MediaPlayer');
        events.forEach(function (event, index) {
          _newArrowCheck(this, _this4);

          this.videoEl.removeEventListener(event, this.eventHandlers[index]);
        }.bind(this));
        this.eventHandlers = [];
      }
    }, {
      key: "_attach",
      value: function _attach() {
        this._registerListeners();
      }
    }, {
      key: "_detach",
      value: function _detach() {
        this._deregisterListeners();

        this.close();
      }
    }, {
      key: "_createVideoTexture",
      value: function _createVideoTexture() {
        var stage = this.stage;
        var gl = stage.gl;
        var glTexture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, glTexture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        this.videoTexture.options = {
          source: glTexture,
          w: this.videoEl.width,
          h: this.videoEl.height
        };
      }
    }, {
      key: "_startUpdatingVideoTexture",
      value: function _startUpdatingVideoTexture() {
        var _this5 = this;

        if (this.textureMode && !this._skipRenderToTexture) {
          var stage = this.stage;

          if (!this._updateVideoTexture) {
            this._updateVideoTexture = function () {
              _newArrowCheck(this, _this5);

              if (this.videoTexture.options.source && this.videoEl.videoWidth && this.active) {
                var gl = stage.gl;
                var currentTime = new Date().getTime(); // When BR2_PACKAGE_GST1_PLUGINS_BAD_PLUGIN_DEBUGUTILS is not set in WPE, webkitDecodedFrameCount will not be available.
                // We'll fallback to fixed 30fps in this case.

                var frameCount = this.videoEl.webkitDecodedFrameCount;
                var mustUpdate = frameCount ? this._lastFrame !== frameCount : this._lastTime < currentTime - 30;

                if (mustUpdate) {
                  this._lastTime = currentTime;
                  this._lastFrame = frameCount;

                  try {
                    gl.bindTexture(gl.TEXTURE_2D, this.videoTexture.options.source);
                    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
                    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.videoEl);
                    this._lastFrame = this.videoEl.webkitDecodedFrameCount;
                    this.videoTextureView.visible = true;
                    this.videoTexture.options.w = this.videoEl.videoWidth;
                    this.videoTexture.options.h = this.videoEl.videoHeight;
                    var expectedAspectRatio = this.videoTextureView.w / this.videoTextureView.h;
                    var realAspectRatio = this.videoEl.videoWidth / this.videoEl.videoHeight;

                    if (expectedAspectRatio > realAspectRatio) {
                      this.videoTextureView.scaleX = realAspectRatio / expectedAspectRatio;
                      this.videoTextureView.scaleY = 1;
                    } else {
                      this.videoTextureView.scaleY = expectedAspectRatio / realAspectRatio;
                      this.videoTextureView.scaleX = 1;
                    }
                  } catch (e) {
                    Log.error('texImage2d video', e);

                    this._stopUpdatingVideoTexture();

                    this.videoTextureView.visible = false;
                  }

                  this.videoTexture.source.forceRenderUpdate();
                }
              }
            }.bind(this);
          }

          if (!this._updatingVideoTexture) {
            stage.on('frameStart', this._updateVideoTexture);
            this._updatingVideoTexture = true;
          }
        }
      }
    }, {
      key: "_stopUpdatingVideoTexture",
      value: function _stopUpdatingVideoTexture() {
        if (this.textureMode) {
          var stage = this.stage;
          stage.removeListener('frameStart', this._updateVideoTexture);
          this._updatingVideoTexture = false;
          this.videoTextureView.visible = false;

          if (this.videoTexture.options.source) {
            var gl = stage.gl;
            gl.bindTexture(gl.TEXTURE_2D, this.videoTexture.options.source);
            gl.clearColor(0, 0, 0, 1);
            gl.clear(gl.COLOR_BUFFER_BIT);
          }
        }
      }
    }, {
      key: "updateSettings",
      value: function updateSettings() {
        var _this6 = this;

        var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        // The Component that 'consumes' the media player.
        this._consumer = settings.consumer;

        if (this._consumer && this._consumer.getMediaplayerSettings) {
          // Allow consumer to add settings.
          settings = Object.assign(settings, this._consumer.getMediaplayerSettings());
        }

        if (!Lightning.Utils.equalValues(this._stream, settings.stream)) {
          if (settings.stream && settings.stream.keySystem) {
            navigator.requestMediaKeySystemAccess(settings.stream.keySystem.id, settings.stream.keySystem.config).then(function (keySystemAccess) {
              _newArrowCheck(this, _this6);

              return keySystemAccess.createMediaKeys();
            }.bind(this)).then(function (createdMediaKeys) {
              _newArrowCheck(this, _this6);

              return this.videoEl.setMediaKeys(createdMediaKeys);
            }.bind(this)).then(function () {
              _newArrowCheck(this, _this6);

              if (settings.stream && settings.stream.src) this.open(settings.stream.src);
            }.bind(this)).catch(function () {
              _newArrowCheck(this, _this6);

              console.error('Failed to set up MediaKeys');
            }.bind(this));
          } else if (settings.stream && settings.stream.src) {
            // This is here to be backwards compatible, will be removed
            // in future sdk release
            if (Settings.get('app', 'hls')) {
              if (!window.Hls) {
                window.Hls = /*#__PURE__*/function () {
                  function Hls() {
                    _classCallCheck(this, Hls);
                  }

                  _createClass(Hls, null, [{
                    key: "isSupported",
                    value: function isSupported() {
                      console.warn('hls-light not included');
                      return false;
                    }
                  }]);

                  return Hls;
                }();
              }

              if (window.Hls.isSupported()) {
                if (!this._hls) this._hls = new window.Hls({
                  liveDurationInfinity: true
                });

                this._hls.loadSource(settings.stream.src);

                this._hls.attachMedia(this.videoEl);

                this.videoEl.style.display = 'block';
              }
            } else {
              this.open(settings.stream.src);
            }
          } else {
            this.close();
          }

          this._stream = settings.stream;
        }

        this._setHide(settings.hide);

        this._setVideoArea(settings.videoPos);
      }
    }, {
      key: "_setHide",
      value: function _setHide(hide) {
        if (this.textureMode) {
          this.tag('Video').setSmooth('alpha', hide ? 0 : 1);
        } else {
          this.videoEl.style.visibility = hide ? 'hidden' : 'visible';
        }
      }
    }, {
      key: "open",
      value: function open(url) {
        var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
          hide: false,
          videoPosition: null
        };
        // prep the media url to play depending on platform (mediaPlayerplugin)
        url = mediaUrl(url);
        this._metrics = Metrics$1.media(url);
        Log.info('Playing stream', url);

        if (this.application.noVideo) {
          Log.info('noVideo option set, so ignoring: ' + url);
          return;
        }

        if (this.videoEl.getAttribute('src') === url) return this.reload();
        this.videoEl.setAttribute('src', url);
        this.videoEl.style.display = 'block';

        this._setHide(settings.hide);

        this._setVideoArea(settings.videoPosition || [0, 0, 1920, 1080]);
      }
    }, {
      key: "close",
      value: function close() {
        // We need to pause first in order to stop sound.
        this.videoEl.pause();
        this.videoEl.removeAttribute('src'); // force load to reset everything without errors

        this.videoEl.load();

        this._clearSrc();

        this.videoEl.style.display = 'none';
      }
    }, {
      key: "playPause",
      value: function playPause() {
        if (this.isPlaying()) {
          this.doPause();
        } else {
          this.doPlay();
        }
      }
    }, {
      key: "isPlaying",
      value: function isPlaying() {
        return this._getState() === 'Playing';
      }
    }, {
      key: "doPlay",
      value: function doPlay() {
        this.videoEl.play();
      }
    }, {
      key: "doPause",
      value: function doPause() {
        this.videoEl.pause();
      }
    }, {
      key: "reload",
      value: function reload() {
        var url = this.videoEl.getAttribute('src');
        this.close();
        this.videoEl.src = url;
      }
    }, {
      key: "getPosition",
      value: function getPosition() {
        return Promise.resolve(this.videoEl.currentTime);
      }
    }, {
      key: "setPosition",
      value: function setPosition(pos) {
        this.videoEl.currentTime = pos;
      }
    }, {
      key: "getDuration",
      value: function getDuration() {
        return Promise.resolve(this.videoEl.duration);
      }
    }, {
      key: "seek",
      value: function seek(time) {
        var absolute = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (absolute) {
          this.videoEl.currentTime = time;
        } else {
          this.videoEl.currentTime += time;
        }
      }
    }, {
      key: "_setVideoArea",
      value: function _setVideoArea(videoPos) {
        if (Lightning.Utils.equalValues(this._videoPos, videoPos)) {
          return;
        }

        this._videoPos = videoPos;

        if (this.textureMode) {
          this.videoTextureView.patch({
            smooth: {
              x: videoPos[0],
              y: videoPos[1],
              w: videoPos[2] - videoPos[0],
              h: videoPos[3] - videoPos[1]
            }
          });
        } else {
          var precision = this.stage.getRenderPrecision();
          this.videoEl.style.left = Math.round(videoPos[0] * precision) + 'px';
          this.videoEl.style.top = Math.round(videoPos[1] * precision) + 'px';
          this.videoEl.style.width = Math.round((videoPos[2] - videoPos[0]) * precision) + 'px';
          this.videoEl.style.height = Math.round((videoPos[3] - videoPos[1]) * precision) + 'px';
        }
      }
    }, {
      key: "_fireConsumer",
      value: function _fireConsumer(event, args) {
        if (this._consumer) {
          this._consumer.fire(event, args);
        }
      }
    }, {
      key: "_equalInitData",
      value: function _equalInitData(buf1, buf2) {
        if (!buf1 || !buf2) return false;
        if (buf1.byteLength != buf2.byteLength) return false;
        var dv1 = new Int8Array(buf1);
        var dv2 = new Int8Array(buf2);

        for (var i = 0; i != buf1.byteLength; i++) {
          if (dv1[i] != dv2[i]) return false;
        }

        return true;
      }
    }, {
      key: "error",
      value: function error(args) {
        this._fireConsumer('$mediaplayerError', args);

        this._setState('');

        return '';
      }
    }, {
      key: "loadeddata",
      value: function loadeddata(args) {
        this._fireConsumer('$mediaplayerLoadedData', args);
      }
    }, {
      key: "play",
      value: function play(args) {
        this._fireConsumer('$mediaplayerPlay', args);
      }
    }, {
      key: "playing",
      value: function playing(args) {
        this._fireConsumer('$mediaplayerPlaying', args);

        this._setState('Playing');
      }
    }, {
      key: "canplay",
      value: function canplay(args) {
        this.videoEl.play();

        this._fireConsumer('$mediaplayerStart', args);
      }
    }, {
      key: "loadstart",
      value: function loadstart(args) {
        this._fireConsumer('$mediaplayerLoad', args);
      }
    }, {
      key: "seeked",
      value: function seeked() {
        this._fireConsumer('$mediaplayerSeeked', {
          currentTime: this.videoEl.currentTime,
          duration: this.videoEl.duration || 1
        });
      }
    }, {
      key: "seeking",
      value: function seeking() {
        this._fireConsumer('$mediaplayerSeeking', {
          currentTime: this.videoEl.currentTime,
          duration: this.videoEl.duration || 1
        });
      }
    }, {
      key: "durationchange",
      value: function durationchange(args) {
        this._fireConsumer('$mediaplayerDurationChange', args);
      }
    }, {
      key: "encrypted",
      value: function encrypted(args) {
        var video = args.videoElement;
        var event = args.event; // FIXME: Double encrypted events need to be properly filtered by Gstreamer

        if (video.mediaKeys && !this._equalInitData(this._previousInitData, event.initData)) {
          this._previousInitData = event.initData;

          this._fireConsumer('$mediaplayerEncrypted', args);
        }
      }
    }, {
      key: "skipRenderToTexture",
      set: function set(v) {
        this._skipRenderToTexture = v;
      }
    }, {
      key: "textureMode",
      get: function get() {
        return this._textureMode;
      }
    }, {
      key: "videoView",
      get: function get() {
        return this.tag('Video');
      }
    }, {
      key: "muted",
      get: function get() {
        return this.videoEl.muted;
      },
      set: function set(v) {
        this.videoEl.muted = v;
      }
    }, {
      key: "loop",
      get: function get() {
        return this.videoEl.loop;
      },
      set: function set(v) {
        this.videoEl.loop = v;
      }
    }, {
      key: "videoTextureView",
      get: function get() {
        return this.tag('Video').tag('VideoTexture');
      }
    }, {
      key: "videoTexture",
      get: function get() {
        return this.videoTextureView.texture;
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Video: {
            VideoWrap: {
              VideoTexture: {
                visible: false,
                pivot: 0.5,
                texture: {
                  type: Lightning.textures.StaticTexture,
                  options: {}
                }
              }
            }
          }
        };
      }
    }, {
      key: "_states",
      value: function _states() {
        return [/*#__PURE__*/function (_this7) {
          _inherits(Playing, _this7);

          var _super2 = _createSuper(Playing);

          function Playing() {
            _classCallCheck(this, Playing);

            return _super2.apply(this, arguments);
          }

          _createClass(Playing, [{
            key: "$enter",
            value: function $enter() {
              this._startUpdatingVideoTexture();
            }
          }, {
            key: "$exit",
            value: function $exit() {
              this._stopUpdatingVideoTexture();
            }
          }, {
            key: "timeupdate",
            value: function timeupdate() {
              this._fireConsumer('$mediaplayerProgress', {
                currentTime: this.videoEl.currentTime,
                duration: this.videoEl.duration || 1
              });
            }
          }, {
            key: "ended",
            value: function ended(args) {
              this._fireConsumer('$mediaplayerEnded', args);

              this._setState('');
            }
          }, {
            key: "pause",
            value: function pause(args) {
              this._fireConsumer('$mediaplayerPause', args);

              this._setState('Playing.Paused');
            }
          }, {
            key: "_clearSrc",
            value: function _clearSrc() {
              this._fireConsumer('$mediaplayerStop', {});

              this._setState('');
            }
          }], [{
            key: "_states",
            value: function _states() {
              return [/*#__PURE__*/function (_this8) {
                _inherits(Paused, _this8);

                var _super3 = _createSuper(Paused);

                function Paused() {
                  _classCallCheck(this, Paused);

                  return _super3.apply(this, arguments);
                }

                return Paused;
              }(this)];
            }
          }]);

          return Playing;
        }(this)];
      }
    }]);

    return Mediaplayer;
  }(Lightning.Component);

  var localCookie = /*#__PURE__*/function () {
    function localCookie(e) {
      _classCallCheck(this, localCookie);

      return e = e || {}, this.forceCookies = e.forceCookies || !1, !0 === this._checkIfLocalStorageWorks() && !0 !== e.forceCookies ? {
        getItem: this._getItemLocalStorage,
        setItem: this._setItemLocalStorage,
        removeItem: this._removeItemLocalStorage,
        clear: this._clearLocalStorage
      } : {
        getItem: this._getItemCookie,
        setItem: this._setItemCookie,
        removeItem: this._removeItemCookie,
        clear: this._clearCookies
      };
    }

    _createClass(localCookie, [{
      key: "_checkIfLocalStorageWorks",
      value: function _checkIfLocalStorageWorks() {
        if ("undefined" == typeof localStorage) return !1;

        try {
          return localStorage.setItem("feature_test", "yes"), "yes" === localStorage.getItem("feature_test") && (localStorage.removeItem("feature_test"), !0);
        } catch (e) {
          return !1;
        }
      }
    }, {
      key: "_getItemLocalStorage",
      value: function _getItemLocalStorage(e) {
        return window.localStorage.getItem(e);
      }
    }, {
      key: "_setItemLocalStorage",
      value: function _setItemLocalStorage(e, t) {
        return window.localStorage.setItem(e, t);
      }
    }, {
      key: "_removeItemLocalStorage",
      value: function _removeItemLocalStorage(e) {
        return window.localStorage.removeItem(e);
      }
    }, {
      key: "_clearLocalStorage",
      value: function _clearLocalStorage() {
        return window.localStorage.clear();
      }
    }, {
      key: "_getItemCookie",
      value: function _getItemCookie(e) {
        var t = document.cookie.match(RegExp("(?:^|;\\s*)" + function (e) {
          return e.replace(/([.*+?\^${}()|\[\]\/\\])/g, "\\$1");
        }(e) + "=([^;]*)"));
        return t && "" === t[1] && (t[1] = null), t ? t[1] : null;
      }
    }, {
      key: "_setItemCookie",
      value: function _setItemCookie(e, t) {
        document.cookie = "".concat(e, "=").concat(t);
      }
    }, {
      key: "_removeItemCookie",
      value: function _removeItemCookie(e) {
        document.cookie = "".concat(e, "=;Max-Age=-99999999;");
      }
    }, {
      key: "_clearCookies",
      value: function _clearCookies() {
        var _this = this;

        document.cookie.split(";").forEach(function (e) {
          _newArrowCheck(this, _this);

          document.cookie = e.replace(/^ +/, "").replace(/=.*/, "=;expires=Max-Age=-99999999");
        }.bind(this));
      }
    }]);

    return localCookie;
  }();

  var _this$8 = undefined;
  var namespace;
  var lc;
  var initStorage = function initStorage() {
    _newArrowCheck(this, _this$8);

    namespace = Settings.get('platform', 'appId'); // todo: pass options (for example to force the use of cookies)

    lc = new localCookie();
  }.bind(undefined);

  var namespacedKey = function namespacedKey(key) {
    _newArrowCheck(this, _this$8);

    return namespace ? [namespace, key].join('.') : key;
  }.bind(undefined);

  var _this$9 = undefined;
  var Launch = (function (App, appSettings, platformSettings, appData) {
    _newArrowCheck(this, _this$9);

    initSettings(appSettings, platformSettings);
    initUtils(platformSettings);
    initStorage(); // Initialize plugins

    if (platformSettings.plugins) {
      platformSettings.plugins.profile && initProfile(platformSettings.plugins.profile);
      platformSettings.plugins.metrics && initMetrics(platformSettings.plugins.metrics);
      platformSettings.plugins.mediaPlayer && initMediaPlayer(platformSettings.plugins.mediaPlayer);
    }

    var app = Application(App, appData, platformSettings);
    return new app(appSettings);
  }).bind(undefined);

  var Player = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(Player, _Lightning$Component);

    var _super = _createSuper(Player);

    function Player() {
      _classCallCheck(this, Player);

      return _super.apply(this, arguments);
    }

    _createClass(Player, [{
      key: "_firstActive",
      value: function _firstActive() {
        this.tag('MediaPlayer').updateSettings({
          consumer: this
        });
        this.tag('MediaPlayer').open('http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4');
      } // Canplay

    }, {
      key: "$mediaPlayerCanplay",
      value: function $mediaPlayerCanplay() {
        console.log("Canplay");
      } // Playing

    }, {
      key: "$mediaplayerPlaying",
      value: function $mediaplayerPlaying() {
        console.log("Playing");
      } // Ended

    }, {
      key: "$mediaplayerEnded",
      value: function $mediaplayerEnded() {
        console.log("Ended");
        this.tag('MediaPlayer').seek(0);
      } // Timeupdate

    }, {
      key: "$mediaplayerTimeupdate",
      value: function $mediaplayerTimeupdate() {
        console.log("Timeupdate");
      } // Error

    }, {
      key: "$mediaplayerError",
      value: function $mediaplayerError() {
        console.log("Error");
      } // Loadeddata

    }, {
      key: "$mediaplayerLoadeddata",
      value: function $mediaplayerLoadeddata() {
        console.log("Loadeddata");
      } // Play

    }, {
      key: "$mediaplayerPlay",
      value: function $mediaplayerPlay() {
        console.log("Play");
      } // Pause

    }, {
      key: "$mediaplayerPause",
      value: function $mediaplayerPause() {
        console.log("Pause");
      } // Loadstart

    }, {
      key: "$mediaplayerLoadstart",
      value: function $mediaplayerLoadstart() {
        console.log("Loadstart");
      } // Seeking

    }, {
      key: "$mediaplayerSeeking",
      value: function $mediaplayerSeeking() {
        console.log("Seeking");
      } // Seeked

    }, {
      key: "$mediaplayerSeeked",
      value: function $mediaplayerSeeked() {
        console.log("Seeked");
      } // Encrypted

    }, {
      key: "$mediaplayerEncrypted",
      value: function $mediaplayerEncrypted() {
        console.log("Encrypted");
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          MediaPlayer: {
            type: Mediaplayer
          }
        };
      }
    }]);

    return Player;
  }(Lightning.Component);

  var Api = /*#__PURE__*/function () {
    function Api() {
      _classCallCheck(this, Api);
    }

    _createClass(Api, [{
      key: "getAppData",
      value: function getAppData() {
        var promises = [this._getMovies(), this._getTvShows()];
        return Promise.all(promises);
      }
    }, {
      key: "_getMovies",
      value: function _getMovies() {
        var _this = this;

        return fetch("./static/movies.json").then(function (response) {
          _newArrowCheck(this, _this);

          return response.json();
        }.bind(this)).then(function (data) {
          _newArrowCheck(this, _this);

          return {
            ref: "Movies",
            data: data
          };
        }.bind(this));
      }
    }, {
      key: "_getTvShows",
      value: function () {
        var _getTvShows2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var stream, data;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return fetch("./static/series.json");

                case 2:
                  stream = _context.sent;
                  _context.next = 5;
                  return stream.json();

                case 5:
                  data = _context.sent;
                  return _context.abrupt("return", {
                    ref: "TvShows",
                    data: data
                  });

                case 7:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function _getTvShows() {
          return _getTvShows2.apply(this, arguments);
        }

        return _getTvShows;
      }()
    }]);

    return Api;
  }();

  var Splash = /*#__PURE__*/function (_lng$Component) {
    _inherits(Splash, _lng$Component);

    var _super = _createSuper(Splash);

    function Splash() {
      _classCallCheck(this, Splash);

      return _super.apply(this, arguments);
    }

    _createClass(Splash, [{
      key: "_init",
      value: function _init() {
        this._setState("Loading");

        this._createAnimations();

        this._register();
      }
    }, {
      key: "_createAnimations",
      value: function _createAnimations() {
        this._reveal = this.animation({
          duration: 1.3,
          repeat: 0,
          delay: 1,
          actions: [{
            t: 'Background',
            p: 'y',
            v: {
              0.20: 0,
              1: -550
            }
          }, {
            t: 'GrayBackdrop',
            p: 'rotation',
            v: {
              0: -0.3,
              1: 0
            }
          }, {
            t: 'GrayBackdrop',
            p: 'scale',
            v: {
              0.6: 1.1,
              1: 1
            }
          }, {
            t: 'GrayBackdrop',
            p: 'y',
            v: {
              0: 1000,
              1: 0
            }
          }, {
            t: 'GrayBackdrop',
            p: 'x',
            v: {
              0: 200,
              1: 0
            }
          }, {
            t: 'Logo',
            p: 'y',
            v: {
              0: 714,
              1: -400
            }
          }, {
            t: 'Logo',
            p: 'rotation',
            v: {
              0: -0.3,
              1: -0
            }
          }]
        });
      }
    }, {
      key: "_register",
      value: function _register() {
        var _this = this;

        this._reveal.on("finish", function () {
          _newArrowCheck(this, _this);

          this.signal("animationFinished");
        }.bind(this));
      }
    }, {
      key: "startAnimation",
      value: function startAnimation() {
        this._start();
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Background: {
            src: Utils.asset("background.png")
          },
          GrayBackdrop: {
            src: Utils.asset("gradient.png"),
            scale: 1.1,
            w: 1920,
            h: 1080,
            y: 1000,
            x: 200,
            rotation: -0.3
          },
          Logo: {
            src: Utils.asset("movies-tv-logo.png"),
            y: 714,
            x: 1100,
            rotation: -0.3
          }
        };
      }
    }, {
      key: "_states",
      value: function _states() {
        return [/*#__PURE__*/function (_this2) {
          _inherits(Loading, _this2);

          var _super2 = _createSuper(Loading);

          function Loading() {
            _classCallCheck(this, Loading);

            return _super2.apply(this, arguments);
          }

          _createClass(Loading, [{
            key: "_start",
            value: function _start() {
              this._reveal.start();
            }
          }]);

          return Loading;
        }(this), /*#__PURE__*/function (_this3) {
          _inherits(Error, _this3);

          var _super3 = _createSuper(Error);

          function Error() {
            _classCallCheck(this, Error);

            return _super3.apply(this, arguments);
          }

          _createClass(Error, [{
            key: "$enter",
            value: function $enter() {// signal error & retry
            }
          }, {
            key: "$exit",
            value: function $exit() {// signal that we exit Error state
            }
          }]);

          return Error;
        }(this)];
      }
    }]);

    return Splash;
  }(lng.Component);

  var Loader = /*#__PURE__*/function (_lng$Component) {
    _inherits(Loader, _lng$Component);

    var _super = _createSuper(Loader);

    function Loader() {
      _classCallCheck(this, Loader);

      return _super.apply(this, arguments);
    }

    _createClass(Loader, [{
      key: "_init",
      value: function _init() {
        this._spinner = this.tag("Spinner").animation({
          duration: 2,
          repeat: -1,
          actions: [{
            p: "rotation",
            v: {
              0: 0,
              1: Math.PI * 2
            }
          }]
        });
      }
    }, {
      key: "_active",
      value: function _active() {
        this._spinner.start();
      }
    }, {
      key: "_inactive",
      value: function _inactive() {
        this._spinner.stop();
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          rect: true,
          w: 1920,
          h: 1080,
          color: 0xff000000,
          Spinner: {
            mount: 0.5,
            x: 960,
            y: 540,
            src: Utils.asset("spinner.png")
          }
        };
      }
    }]);

    return Loader;
  }(lng.Component);

  var MainSliderItem = /*#__PURE__*/function (_lng$Component) {
    _inherits(MainSliderItem, _lng$Component);

    var _super = _createSuper(MainSliderItem);

    function MainSliderItem() {
      _classCallCheck(this, MainSliderItem);

      return _super.apply(this, arguments);
    }

    _createClass(MainSliderItem, [{
      key: "_focus",
      value: function _focus() {
        this.setSmooth("scale", 1.1);
      }
    }, {
      key: "_unfocus",
      value: function _unfocus() {
        this.setSmooth("scale", 1);
      }
    }, {
      key: "item",
      set: function set(v) {
        this._item = v;
        this.patch({
          src: Utils.asset("".concat(v.path, "/posterS.jpg"))
        });
      },
      get: function get() {
        return this._item;
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          rect: true,
          color: 0xffffffff,
          w: 370,
          h: 556,
          scale: 1,
          transitions: {
            scale: {
              duration: 0.3,
              delay: 0.05
            }
          }
        };
      }
    }, {
      key: "_states",
      value: function _states() {
        return [];
      }
    }, {
      key: "width",
      get: function get() {
        return 385;
      }
    }, {
      key: "height",
      get: function get() {
        return 556;
      }
    }]);

    return MainSliderItem;
  }(lng.Component);

  var Slider = /*#__PURE__*/function (_lng$Component) {
    _inherits(Slider, _lng$Component);

    var _super = _createSuper(Slider);

    function Slider() {
      _classCallCheck(this, Slider);

      return _super.apply(this, arguments);
    }

    _createClass(Slider, [{
      key: "_init",
      value: function _init() {
        this._index = 0;
      }
    }, {
      key: "_focus",
      value: function _focus() {
        this.setSmooth("alpha", 1);

        this._setState("Expanded");

        this._setIndex();
      }
    }, {
      key: "_unfocus",
      value: function _unfocus() {
        this.setSmooth("alpha", 0.5);

        this._setState("Collapsed");
      }
    }, {
      key: "_handleLeft",
      value: function _handleLeft() {
        if (this._index > 0) {
          this._setIndex(this._index - 1);
        }
      }
    }, {
      key: "_handleRight",
      value: function _handleRight() {
        if (this._index < this.items.length - 1) {
          this._setIndex(this._index + 1);
        }
      }
    }, {
      key: "_handleEnter",
      value: function _handleEnter() {
        this.fireAncestors("$onItemSelect", {
          item: this.active.item
        });
      }
    }, {
      key: "_setIndex",
      value: function _setIndex() {
        var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._index;
        this._index = index;
        this.patch({
          Items: {
            smooth: {
              x: !index ? 0 : index * -440
            }
          }
        });
      }
    }, {
      key: "_getFocused",
      value: function _getFocused() {
        return this.active;
      }
    }, {
      key: "data",
      set: function set(v) {
        var _this = this;

        var label = v.label,
            data = v.data;
        this.patch({
          Title: {
            text: {
              text: label.toUpperCase()
            }
          },
          Items: {
            children: data.map(function (item, idx) {
              _newArrowCheck(this, _this);

              return {
                type: MainSliderItem,
                x: idx * 350,
                item: item,
                scale: 0.9
              };
            }.bind(this))
          }
        });
      }
    }, {
      key: "items",
      get: function get() {
        return this.tag("Items").children;
      }
    }, {
      key: "active",
      get: function get() {
        return this.items[this._index];
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          alpha: 0.5,
          Title: {
            text: {
              text: "",
              fontSize: 40,
              fontFace: "verdana"
            }
          },
          Items: {
            y: 100
          }
        };
      }
    }, {
      key: "_states",
      value: function _states() {
        return [/*#__PURE__*/function (_this2) {
          _inherits(Expanded, _this2);

          var _super2 = _createSuper(Expanded);

          function Expanded() {
            _classCallCheck(this, Expanded);

            return _super2.apply(this, arguments);
          }

          _createClass(Expanded, [{
            key: "$enter",
            value: function $enter() {
              var _this3 = this;

              this.setSmooth("alpha", 1);
              this.items.forEach(function (item, idx) {
                _newArrowCheck(this, _this3);

                item.patch({
                  smooth: {
                    x: [idx * 440, {
                      duration: 0.3,
                      delay: idx * 0.04
                    }],
                    scale: 1
                  }
                });
              }.bind(this));
            }
          }]);

          return Expanded;
        }(this), /*#__PURE__*/function (_this4) {
          _inherits(Collapsed, _this4);

          var _super3 = _createSuper(Collapsed);

          function Collapsed() {
            _classCallCheck(this, Collapsed);

            return _super3.apply(this, arguments);
          }

          _createClass(Collapsed, [{
            key: "$enter",
            value: function $enter() {
              var _this5 = this;

              this.setSmooth("alpha", 0.5);
              this.items.forEach(function (item, idx) {
                _newArrowCheck(this, _this5);

                item.patch({
                  smooth: {
                    x: [idx * 350, {
                      duration: 0.3,
                      delay: idx * 0.03
                    }],
                    scale: 0.9
                  }
                });
              }.bind(this));
            }
          }]);

          return Collapsed;
        }(this)];
      }
    }]);

    return Slider;
  }(lng.Component);

  var Browse = /*#__PURE__*/function (_lng$Component) {
    _inherits(Browse, _lng$Component);

    var _super = _createSuper(Browse);

    function Browse() {
      _classCallCheck(this, Browse);

      return _super.apply(this, arguments);
    }

    _createClass(Browse, [{
      key: "_init",
      value: function _init() {
        this._index = 0;
      }
    }, {
      key: "_getFocused",
      value: function _getFocused() {
        return this.active;
      }
    }, {
      key: "_handleUp",
      value: function _handleUp() {
        if (this._index > 0) {
          this.setIndex(this._index - 1);
        } else {
          return false;
        }
      }
    }, {
      key: "_handleDown",
      value: function _handleDown() {
        if (this._index < this.items.length - 1) {
          this.setIndex(this._index + 1);
        }
      }
    }, {
      key: "setIndex",
      value: function setIndex() {
        var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._index;
        this._index = index;
        this.patch({
          Sliders: {
            smooth: {
              y: !index ? 0 : index * -640
            }
          }
        });
      }
    }, {
      key: "data",
      set: function set(v) {
        var _this = this;

        this.patch({
          Sliders: {
            children: v.map(function (data, idx) {
              _newArrowCheck(this, _this);

              return {
                type: Slider,
                data: data,
                y: idx * 680
              };
            }.bind(this))
          }
        });
      }
    }, {
      key: "items",
      get: function get() {
        return this.tag("Sliders").children;
      }
    }, {
      key: "active",
      get: function get() {
        return this.items[this._index];
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Sliders: {}
        };
      }
    }]);

    return Browse;
  }(lng.Component);

  var Details = /*#__PURE__*/function (_lng$Component) {
    _inherits(Details, _lng$Component);

    var _super = _createSuper(Details);

    function Details() {
      _classCallCheck(this, Details);

      return _super.apply(this, arguments);
    }

    _createClass(Details, [{
      key: "_init",
      value: function _init() {
        var _this = this;

        this._blur = this.tag("Blur").content;
        this._events = {
          showDetails: function showDetails() {
            _newArrowCheck(this, _this);

            var amount = this.tag("Blur").amount;

            if (amount === 3) {
              this.tag("Details").patch({
                smooth: {
                  alpha: 1,
                  y: 150
                }
              });
            }
          }.bind(this)
        };

        this._register();
      }
    }, {
      key: "_register",
      value: function _register() {
        this.tag("Blur").transition("amount").on("finish", this._events.showDetails);
      }
    }, {
      key: "_updateDetails",
      value: function _updateDetails(_ref) {
        var path = _ref.path,
            cast = _ref.cast,
            title = _ref.title,
            year = _ref.year,
            info = _ref.info;
        this.patch({
          Details: {
            Poster: {
              src: Utils.asset("".concat(path, "/posterS.jpg"))
            },
            Metadata: {
              Title: {
                text: {
                  text: title
                }
              },
              Year: {
                text: {
                  text: "released: ".concat(year)
                }
              },
              Info: {
                text: {
                  text: info
                }
              }
            }
          }
        });
      }
    }, {
      key: "_focus",
      value: function _focus() {
        this.tag("Blur").patch({
          smooth: {
            amount: 3,
            alpha: 0.4
          }
        });
      }
    }, {
      key: "_unfocus",
      value: function _unfocus() {
        this.patch({
          Blur: {
            smooth: {
              amount: 0,
              alpha: 1
            }
          },
          Details: {
            smooth: {
              alpha: 0,
              y: 300
            }
          }
        });
      }
    }, {
      key: "asset",
      set: function set(v) {
        this._asset = v;

        this._updateDetails(v);
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          rect: true,
          w: 1920,
          h: 1080,
          color: 0xff000000,
          Blur: {
            type: lng.components.FastBlurComponent,
            amount: 0,
            w: 1920,
            h: 1080,
            transitions: {
              amount: {
                duration: 2.1,
                delay: 0.4
              },
              alpha: {
                duration: 1,
                delay: 2.5
              }
            }
          },
          Details: {
            x: 250,
            y: 300,
            flex: {
              direction: "row"
            },
            w: 1000,
            alpha: 0,
            Poster: {
              flexItem: {
                marginRight: 150
              }
            },
            Metadata: {
              flex: {
                direction: "column"
              },
              Title: {
                w: 900,
                text: {
                  fontFace: "RobotoRegular",
                  fontSize: 51,
                  lineHeight: 50
                }
              },
              Year: {
                w: 900,
                text: {
                  fontFace: "RobotoRegular",
                  fontSize: 28,
                  lineHeight: 50
                }
              },
              Info: {
                w: 700,
                text: {
                  fontFace: "RobotoRegular",
                  fontSize: 39,
                  lineHeight: 60
                }
              }
            }
          }
        };
      }
    }]);

    return Details;
  }(lng.Component);

  var Menu = /*#__PURE__*/function (_lng$Component) {
    _inherits(Menu, _lng$Component);

    var _super = _createSuper(Menu);

    function Menu() {
      _classCallCheck(this, Menu);

      return _super.apply(this, arguments);
    }

    _createClass(Menu, [{
      key: "_init",
      value: function _init() {
        this._index = 0;
        this.patch({
          Movies: {
            type: MenuItem,
            item: {
              label: "Movies",
              ref: "Movies"
            }
          }
        });
        var shows = this.stage.c({
          type: MenuItem,
          item: {
            label: "Series",
            ref: "TvShows"
          }
        });
        this.childList.add(shows);
      }
    }, {
      key: "_handleLeft",
      value: function _handleLeft() {
        if (this._index > 0) {
          this.setIndex(this._index - 1);
        }
      }
    }, {
      key: "_handleRight",
      value: function _handleRight() {
        if (this._index < this.items.length - 1) {
          this.setIndex(this._index + 1);
        }
      }
    }, {
      key: "setIndex",
      value: function setIndex(index) {
        this._index = index;
      }
    }, {
      key: "_getFocused",
      value: function _getFocused() {
        return this.active;
      }
    }, {
      key: "_handleEnter",
      value: function _handleEnter() {
        this.signal("select", {
          item: this.active.item
        });
      }
    }, {
      key: "items",
      get: function get() {
        return this.children;
      }
    }, {
      key: "active",
      get: function get() {
        return this.items[this._index];
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          flex: {
            direction: "row"
          }
        };
      }
    }]);

    return Menu;
  }(lng.Component);

  var MenuItem = /*#__PURE__*/function (_lng$Component2) {
    _inherits(MenuItem, _lng$Component2);

    var _super2 = _createSuper(MenuItem);

    function MenuItem() {
      _classCallCheck(this, MenuItem);

      return _super2.apply(this, arguments);
    }

    _createClass(MenuItem, [{
      key: "_focus",
      value: function _focus() {
        this.setSmooth("scale", 1.2);
      }
    }, {
      key: "_unfocus",
      value: function _unfocus() {
        this.setSmooth("scale", 1);
      }
    }, {
      key: "item",
      set: function set(v) {
        this._item = v;
        this.text.text = v.label;
      },
      get: function get() {
        return this._item;
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          text: {
            fontSize: 40,
            fontFace: "verdana"
          },
          flexItem: {
            marginRight: 30
          }
        };
      }
    }]);

    return MenuItem;
  }(lng.Component);

  var App = /*#__PURE__*/function (_Lightning$Component) {
    _inherits(App, _Lightning$Component);

    var _super = _createSuper(App);

    function App() {
      _classCallCheck(this, App);

      return _super.apply(this, arguments);
    }

    _createClass(App, [{
      key: "_construct",
      value: function _construct() {
        this._api = new Api();
      }
    }, {
      key: "_init",
      value: function _init() {
        this._setState("Splash");
      }
    }, {
      key: "$api",
      value: function $api() {
        return this._api;
      }
    }, {
      key: "$onItemSelect",
      value: function $onItemSelect(_ref) {
        var item = _ref.item;

        this._setState("Loading");

        this.tag("Details").asset = item;
      }
    }, {
      key: "_populate",
      value: function _populate(data) {
        var _this = this;

        data.forEach(function (props) {
          _newArrowCheck(this, _this);

          this.tag(props.ref).data = props.data;
        }.bind(this));
      }
    }, {
      key: "_handleUp",
      value: function _handleUp() {
        this._setState("Menu");
      }
    }], [{
      key: "getFonts",
      value: function getFonts() {
        return [{
          family: 'RobotoBold',
          url: Utils.asset('fonts/Roboto-Bold.ttf')
        }, {
          family: 'RobotoRegular',
          url: Utils.asset('fonts/Roboto-Regular.ttf')
        }];
      }
    }, {
      key: "_template",
      value: function _template() {
        return {
          Splash: {
            type: Splash,
            signals: {
              animationFinished: true
            },
            alpha: 0
          },
          Movies: {
            type: Browse,
            x: 100,
            y: 150,
            alpha: 0
          },
          TvShows: {
            type: Browse,
            x: 100,
            y: 150,
            alpha: 0
          },
          Menu: {
            type: Menu,
            x: 1550,
            y: -100,
            alpha: 0.5,
            signals: {
              select: true
            }
          },
          Details: {
            type: Details,
            signals: {
              detailsLoaded: "_loaded"
            },
            alpha: 0.001
          },
          Loader: {
            type: Loader,
            alpha: 0
          }
        };
      }
    }, {
      key: "_states",
      value: function _states() {
        return [/*#__PURE__*/function (_this2) {
          _inherits(Splash, _this2);

          var _super2 = _createSuper(Splash);

          function Splash() {
            _classCallCheck(this, Splash);

            return _super2.apply(this, arguments);
          }

          _createClass(Splash, [{
            key: "$enter",
            value: function $enter() {
              var _this3 = this;

              this.tag("Splash").setSmooth("alpha", 1);

              this._api.getAppData().then(function (data) {
                _newArrowCheck(this, _this3);

                this.tag("Splash").startAnimation();

                this._populate(data);
              }.bind(this));
            }
          }, {
            key: "animationFinished",
            value: function animationFinished() {
              this._setState("Movies");

              this.tag("Menu").setSmooth("y", 50);
            }
          }]);

          return Splash;
        }(this), /*#__PURE__*/function (_this4) {
          _inherits(Loading, _this4);

          var _super3 = _createSuper(Loading);

          function Loading() {
            _classCallCheck(this, Loading);

            return _super3.apply(this, arguments);
          }

          _createClass(Loading, [{
            key: "_captureKey",
            value: function _captureKey() {// capture
            }
          }, {
            key: "$enter",
            value: function $enter(_ref2) {
              var prevState = _ref2.prevState;
              this._appReturnState = prevState;
              this.tag("Loader").setSmooth("alpha", 1);
            }
          }, {
            key: "$exit",
            value: function $exit() {
              this.tag("Loader").setSmooth("alpha", 0);
            }
          }, {
            key: "_loaded",
            value: function _loaded() {
              var _this5 = this;

              setTimeout(function () {
                _newArrowCheck(this, _this5);

                this._setState("Details");
              }.bind(this), 2000);
            }
          }]);

          return Loading;
        }(this), /*#__PURE__*/function (_this6) {
          _inherits(Menu, _this6);

          var _super4 = _createSuper(Menu);

          function Menu() {
            _classCallCheck(this, Menu);

            return _super4.apply(this, arguments);
          }

          _createClass(Menu, [{
            key: "$enter",
            value: function $enter(_ref3) {
              var prevState = _ref3.prevState;
              this._menuReturnState = prevState;
              this.tag("Menu").setSmooth("alpha", 1);
            }
          }, {
            key: "$exit",
            value: function $exit() {
              this.tag("Menu").setSmooth("alpha", 0.5);
            }
          }, {
            key: "_getFocused",
            value: function _getFocused() {
              return this.tag("Menu");
            }
          }, {
            key: "_handleDown",
            value: function _handleDown() {
              this._setState(this._menuReturnState);
            }
          }, {
            key: "select",
            value: function select(_ref4) {
              var item = _ref4.item;
              var ref = item.ref;

              if (this.tag(ref)) {
                this.tag(this._menuReturnState).setSmooth("alpha", 0);

                this._setState(ref);
              }
            }
          }]);

          return Menu;
        }(this), /*#__PURE__*/function (_this7) {
          _inherits(Movies, _this7);

          var _super5 = _createSuper(Movies);

          function Movies() {
            _classCallCheck(this, Movies);

            return _super5.apply(this, arguments);
          }

          _createClass(Movies, [{
            key: "$enter",
            value: function $enter() {
              this.tag("Movies").setSmooth("alpha", 1);
            }
          }, {
            key: "$exit",
            value: function $exit(_ref5) {
              var newState = _ref5.newState;
              this.tag("Movies").setSmooth("alpha", newState === "Menu" ? 1 : 0);
            }
          }, {
            key: "_getFocused",
            value: function _getFocused() {
              return this.tag("Movies");
            }
          }]);

          return Movies;
        }(this), /*#__PURE__*/function (_this8) {
          _inherits(TvShows, _this8);

          var _super6 = _createSuper(TvShows);

          function TvShows() {
            _classCallCheck(this, TvShows);

            return _super6.apply(this, arguments);
          }

          _createClass(TvShows, [{
            key: "$enter",
            value: function $enter() {
              this.tag("TvShows").setSmooth("alpha", 1);
            }
          }, {
            key: "$exit",
            value: function $exit(_ref6) {
              var newState = _ref6.newState;
              this.tag("TvShows").setSmooth("alpha", newState === "Menu" ? 1 : 0);
            }
          }, {
            key: "_getFocused",
            value: function _getFocused() {
              return this.tag("TvShows");
            }
          }]);

          return TvShows;
        }(this), /*#__PURE__*/function (_this9) {
          _inherits(Details, _this9);

          var _super7 = _createSuper(Details);

          function Details() {
            _classCallCheck(this, Details);

            return _super7.apply(this, arguments);
          }

          _createClass(Details, [{
            key: "$enter",
            value: function $enter() {
              this.tag("Details").setSmooth("alpha", 1);
            }
          }, {
            key: "$exit",
            value: function $exit() {
              this.tag("Details").setSmooth("alpha", 0.001);
            }
          }, {
            key: "_handleBack",
            value: function _handleBack() {
              this._setState(this._appReturnState);
            }
          }, {
            key: "_getFocused",
            value: function _getFocused() {
              return this.tag("Details");
            }
          }]);

          return Details;
        }(this)];
      }
    }]);

    return App;
  }(Lightning.Component);

  /*
   * If not stated otherwise in this file or this component's LICENSE file the
   * following copyright and licenses apply:
   *
   * Copyright 2020 RDK Management
   *
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  function index () {
    return Launch.apply(void 0, [App].concat(Array.prototype.slice.call(arguments)));
  }

  return index;

}());
//# sourceMappingURL=appBundle.es5.js.map
