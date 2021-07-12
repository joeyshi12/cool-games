(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+ZV/":
    /*!*****************************************!*\
      !*** ./src/app/sketches/snake/snake.ts ***!
      \*****************************************/

    /*! exports provided: Direction, Snake */

    /***/
    function ZV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Direction", function () {
        return Direction;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Snake", function () {
        return Snake;
      });
      /* harmony import */


      var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./config */
      "D31l");

      var Direction;

      (function (Direction) {
        Direction[Direction["neutral"] = 0] = "neutral";
        Direction[Direction["left"] = 1] = "left";
        Direction[Direction["right"] = 2] = "right";
        Direction[Direction["up"] = 3] = "up";
        Direction[Direction["down"] = 4] = "down";
      })(Direction || (Direction = {}));

      var Snake = /*#__PURE__*/function () {
        function Snake(p5) {
          _classCallCheck(this, Snake);

          this.p5 = p5;
          this.direction = Direction.neutral;
          this.positionsX = [5, 4, 3];
          this.positionsY = [10, 10, 10];
          this.size = 3;
          this.isDead = false;
        }

        _createClass(Snake, [{
          key: "draw",
          value: function draw() {
            this.p5.push();
            this.p5.fill(0, 255, 0);

            for (var i = 0; i < this.size; i++) {
              this.p5.square(this.positionsX[i] * _config__WEBPACK_IMPORTED_MODULE_0__["Config"].unitLength, this.positionsY[i] * _config__WEBPACK_IMPORTED_MODULE_0__["Config"].unitLength, _config__WEBPACK_IMPORTED_MODULE_0__["Config"].unitLength);
            }

            this.p5.pop();
          }
        }, {
          key: "update",
          value: function update() {
            if (this.hasCollided()) {
              this.isDead = true;
              return;
            }

            if (this.direction === Direction.up) {
              this.positionsX.unshift(this.positionsX[0]);
              this.positionsY.unshift(this.positionsY[0] - 1);
            } else if (this.direction === Direction.down) {
              this.positionsX.unshift(this.positionsX[0]);
              this.positionsY.unshift(this.positionsY[0] + 1);
            } else if (this.direction === Direction.left) {
              this.positionsX.unshift(this.positionsX[0] - 1);
              this.positionsY.unshift(this.positionsY[0]);
            } else {
              this.positionsX.unshift(this.positionsX[0] + 1);
              this.positionsY.unshift(this.positionsY[0]);
            }

            this.positionsX.pop();
            this.positionsY.pop();
          }
        }, {
          key: "grow",
          value: function grow() {
            this.positionsX.push(2 * this.positionsX[this.size - 1] - this.positionsX[this.size - 2]);
            this.positionsY.push(2 * this.positionsY[this.size - 1] - this.positionsY[this.size - 2]);
            this.size++;
          }
        }, {
          key: "hasCollided",
          value: function hasCollided() {
            if (this.isDead) {
              return true;
            }

            var notWithinBoundsX = this.positionsX[0] === 0 || this.positionsX[0] === _config__WEBPACK_IMPORTED_MODULE_0__["Config"].cols - 1;
            var notWithinBoundsY = this.positionsY[0] === 0 || this.positionsY[0] === _config__WEBPACK_IMPORTED_MODULE_0__["Config"].rows - 1;

            if (notWithinBoundsX || notWithinBoundsY) {
              return true;
            }

            for (var i = 1; i < this.size; i++) {
              if (this.positionsX[0] === this.positionsX[i] && this.positionsY[0] === this.positionsY[i]) {
                return true;
              }
            }

            return false;
          }
        }, {
          key: "getSize",
          value: function getSize() {
            return this.size;
          }
        }, {
          key: "getIsDead",
          value: function getIsDead() {
            return this.isDead;
          }
        }, {
          key: "setDirection",
          value: function setDirection(direction) {
            this.direction = direction;
          }
        }]);

        return Snake;
      }();
      /***/

    },

    /***/
    "+nqH":
    /*!*****************************************!*\
      !*** ./src/app/sketches/pong/config.ts ***!
      \*****************************************/

    /*! exports provided: Config */

    /***/
    function nqH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Config", function () {
        return Config;
      });

      var Config = {
        width: 650,
        height: 450,
        margin: 40,
        maxBounceAngle: 2 * Math.PI / 5
      };
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/joey/Downloads/cool-games/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1q77":
    /*!*********************************************************!*\
      !*** ./src/app/sketches/platformer/pages/start-menu.ts ***!
      \*********************************************************/

    /*! exports provided: StartMenu */

    /***/
    function q77(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StartMenu", function () {
        return StartMenu;
      });
      /* harmony import */


      var _page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./page */
      "76Wm");
      /* harmony import */


      var _util_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../util/global */
      "DQkd");
      /* harmony import */


      var _options_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./options-menu */
      "P1XG");
      /* harmony import */


      var _game_run__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./game-run */
      "T4ms");

      var StartMenu = /*#__PURE__*/function (_page__WEBPACK_IMPORT) {
        _inherits(StartMenu, _page__WEBPACK_IMPORT);

        var _super = _createSuper(StartMenu);

        function StartMenu(p5, manager) {
          var _this;

          _classCallCheck(this, StartMenu);

          _this = _super.call(this, p5, manager);

          _this.setButton('start', _util_global__WEBPACK_IMPORTED_MODULE_1__["Global"].width / 2 - 25, _util_global__WEBPACK_IMPORTED_MODULE_1__["Global"].height / 2 - 16);

          _this.setButton('options', _util_global__WEBPACK_IMPORTED_MODULE_1__["Global"].width / 2 - 35, _util_global__WEBPACK_IMPORTED_MODULE_1__["Global"].height / 2 + 16);

          return _this;
        }

        _createClass(StartMenu, [{
          key: "mouseMoveListener",
          value: function mouseMoveListener() {
            this.updateButtons();
          }
        }, {
          key: "mouseClickListener",
          value: function mouseClickListener() {
            if (this.isButtonSelected('start')) {
              this.manager.playSound('click');
              this.manager.setPage(new _game_run__WEBPACK_IMPORTED_MODULE_3__["GameRun"](this.p5, this.manager));
            } else if (this.isButtonSelected('options')) {
              this.manager.playSound('click');
              this.manager.setPage(new _options_menu__WEBPACK_IMPORTED_MODULE_2__["OptionsMenu"](this.p5, this.manager));
            }
          }
        }, {
          key: "keyPressListener",
          value: function keyPressListener() {}
        }, {
          key: "keyReleaseListener",
          value: function keyReleaseListener() {}
        }, {
          key: "draw",
          value: function draw() {
            this.p5.fill(255, 0, 0);
            this.p5.rect(0, 0, 100, 100);
            this.p5.push();
            this.p5.background(24, 24, 24);
            this.p5.fill(255);
            this.p5.textSize(32);
            this.p5.text('Platformer', _util_global__WEBPACK_IMPORTED_MODULE_1__["Global"].width / 2 - 80, 180);
            this.p5.pop();
            this.drawButton('start');
            this.drawButton('options');
          }
        }, {
          key: "update",
          value: function update() {}
        }]);

        return StartMenu;
      }(_page__WEBPACK_IMPORTED_MODULE_0__["Page"]);
      /***/

    },

    /***/
    "2L61":
    /*!*******************************************************!*\
      !*** ./src/app/sketches/platformer/entities/ghost.ts ***!
      \*******************************************************/

    /*! exports provided: Ghost */

    /***/
    function L61(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ghost", function () {
        return Ghost;
      });
      /* harmony import */


      var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./entity */
      "Z9KH");
      /* harmony import */


      var _util_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../util/global */
      "DQkd");

      var Ghost = /*#__PURE__*/function (_entity__WEBPACK_IMPO) {
        _inherits(Ghost, _entity__WEBPACK_IMPO);

        var _super2 = _createSuper(Ghost);

        function Ghost(p5, x, y, target, sprite) {
          var _this2;

          _classCallCheck(this, Ghost);

          _this2 = _super2.call(this, p5, x, y, 0, 0, 36, 36);
          _this2.SPEED = 2;
          _this2.RANGE = 320;
          _this2.UPDATE_BUFFER = 20;
          _this2.p5 = p5;
          _this2.target = target;
          _this2.angle = Math.random() * 2 * Math.PI;
          _this2.updateTimer = 20;
          _this2.triggered = false;
          _this2.sprite = sprite;
          return _this2;
        }

        _createClass(Ghost, [{
          key: "update",
          value: function update() {
            var dx = this.target.getX() - this.x;
            var dy = this.target.getY() - this.y;
            var r = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));

            if (r < this.RANGE) {
              this.triggered = true;
            }

            if (this.triggered) {
              var tx = dx / r;
              var ty = dy / r;

              if (this.updateTimer > 0) {
                this.updateTimer--;
              } else {
                this.vx = this.SPEED * tx + Math.random() - 0.5;
                this.vy = this.SPEED * ty + Math.random() - 0.5;
                this.updateTimer = this.UPDATE_BUFFER;
              }
            }

            this.angle = (this.angle + 0.1) % (2 * Math.PI);
            this.x += this.vx + 0.7 * Math.cos(this.angle);
            this.y += this.vy + 0.7 * Math.sin(this.angle);
          }
        }, {
          key: "draw",
          value: function draw() {
            // drawing for debugging purposes
            // this.drawHitBox();
            var _util_global__WEBPACK = _util_global__WEBPACK_IMPORTED_MODULE_1__["Global"].camera.shift(this.x, this.y),
                _util_global__WEBPACK2 = _slicedToArray(_util_global__WEBPACK, 2),
                x = _util_global__WEBPACK2[0],
                y = _util_global__WEBPACK2[1];

            this.p5.push();

            if (this.vx > 0) {
              this.p5.scale(-1, 1);
              this.p5.image(this.sprite, -x - this.width, y, this.width + 3 * Math.cos(this.angle), this.height);
            } else {
              this.p5.image(this.sprite, x, y, this.width + 3 * Math.cos(this.angle), this.height);
            }

            this.p5.pop();
          }
        }]);

        return Ghost;
      }(_entity__WEBPACK_IMPORTED_MODULE_0__["Entity"]);
      /***/

    },

    /***/
    "76Wm":
    /*!***************************************************!*\
      !*** ./src/app/sketches/platformer/pages/page.ts ***!
      \***************************************************/

    /*! exports provided: Page */

    /***/
    function Wm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Page", function () {
        return Page;
      });

      var Button = /*#__PURE__*/function () {
        function Button(p5, text, x, y) {
          _classCallCheck(this, Button);

          this.p5 = p5;
          this.text = text;
          this.x = x;
          this.y = y;
          this.width = 10 * text.length;
          this.height = 20;
          this.isFocused = false;
        }

        _createClass(Button, [{
          key: "updateIsFocused",
          value: function updateIsFocused() {
            if (this.x < this.p5.mouseX && this.p5.mouseX < this.x + this.width) {
              if (this.y < this.p5.mouseY && this.p5.mouseY < this.y + this.height) {
                this.isFocused = true;
                return;
              }
            }

            this.isFocused = false;
          }
        }, {
          key: "draw",
          value: function draw() {
            this.p5.push();

            if (this.isFocused) {
              this.p5.textSize(22);
              this.p5.fill(255);
              this.p5.text(this.text, this.x - this.text.length / 2, this.y + this.height);
            } else {
              this.p5.textSize(20);
              this.p5.fill(255);
              this.p5.text(this.text, this.x, this.y + this.height);
            }

            this.p5.pop();
          }
        }, {
          key: "getIsFocused",
          value: function getIsFocused() {
            return this.isFocused;
          }
        }]);

        return Button;
      }();

      var Page = /*#__PURE__*/function () {
        function Page(p5, manager) {
          _classCallCheck(this, Page);

          this.p5 = p5;
          this.manager = manager;
          this.buttonMap = new Map();
        }

        _createClass(Page, [{
          key: "isButtonSelected",
          value: function isButtonSelected(id) {
            if (!this.buttonMap.has(id)) {
              return false;
            }

            var button = this.buttonMap.get(id);

            if (!button) {
              return false;
            }

            if (button.getIsFocused()) {
              this.manager.playSound('click');
              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "updateButtons",
          value: function updateButtons() {
            var _iterator = _createForOfIteratorHelper(this.buttonMap.values()),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var button = _step.value;
                button.updateIsFocused();
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }, {
          key: "drawButton",
          value: function drawButton(id) {
            if (!this.buttonMap.has(id)) {
              return;
            }

            var button = this.buttonMap.get(id);

            if (!button) {
              return;
            }

            return button.draw();
          }
        }, {
          key: "setButton",
          value: function setButton(text, x, y) {
            this.buttonMap.set(text, new Button(this.p5, text, x, y));
          }
        }]);

        return Page;
      }();
      /***/

    },

    /***/
    "9HVg":
    /*!********************************************************!*\
      !*** ./src/app/sketches/platformer/entities/player.ts ***!
      \********************************************************/

    /*! exports provided: Player */

    /***/
    function HVg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Player", function () {
        return Player;
      });
      /* harmony import */


      var _util_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../util/global */
      "DQkd");
      /* harmony import */


      var _util_animator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../util/animator */
      "OrCf");
      /* harmony import */


      var _entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./entity */
      "Z9KH");

      var Player = /*#__PURE__*/function (_entity__WEBPACK_IMPO2) {
        _inherits(Player, _entity__WEBPACK_IMPO2);

        var _super3 = _createSuper(Player);

        function Player(p5, x, y, manager) {
          var _this3;

          _classCallCheck(this, Player);

          _this3 = _super3.call(this, p5, x, y, 0, 0, 26, 22);
          _this3.ACCELERATION = 0.8;
          _this3.GRAVITY = 0.4;
          _this3.MAX_SPEED = 4.2;
          _this3.ANIMATION_BUFFER = 6;
          _this3.JUMP_VELOCITY = 9.4;

          _this3.playJumpSound = function () {
            manager.playSound('jump');
          };

          _this3.playLandSound = function () {
            manager.playSound('land');
          };

          _this3.direction = 0;
          _this3.animator = new _util_animator__WEBPACK_IMPORTED_MODULE_1__["Animator"]([[7, 18], [7, 19], [7, 20], [7, 21], [7, 22], [7, 23]], manager.getSpriteSheet(), 1);
          _this3.animTimer = _this3.ANIMATION_BUFFER;
          _this3.isGrounded = true;
          _this3.isFacingRight = true;
          _this3.isDead = false;
          return _this3;
        }

        _createClass(Player, [{
          key: "draw",
          value: function draw() {
            // drawing for debugging purposes
            // this.drawCollisionBox();
            var _util_global__WEBPACK3 = _util_global__WEBPACK_IMPORTED_MODULE_0__["Global"].camera.shift(this.x, this.y),
                _util_global__WEBPACK4 = _slicedToArray(_util_global__WEBPACK3, 2),
                x = _util_global__WEBPACK4[0],
                y = _util_global__WEBPACK4[1];

            this.p5.push();

            if (this.isFacingRight) {
              this.p5.image(this.animator.getCurrentImage(), x, y - 8, 30, 30);
            } else {
              this.p5.scale(-1, 1);
              this.p5.image(this.animator.getCurrentImage(), -x - this.width, y - 8, 30, 30);
            }

            this.p5.pop();
          }
        }, {
          key: "update",
          value: function update(map) {
            this.updateAnimation();
            this.updateVelocity();
            this.handleCollisions(map);

            var _this$nextPosition = this.nextPosition();

            var _this$nextPosition2 = _slicedToArray(_this$nextPosition, 2);

            this.x = _this$nextPosition2[0];
            this.y = _this$nextPosition2[1];
          }
        }, {
          key: "jump",
          value: function jump() {
            if (this.isGrounded) {
              this.playJumpSound();
              this.vy = -this.JUMP_VELOCITY;
              this.isGrounded = false;
            }
          }
        }, {
          key: "dropFromPlatform",
          value: function dropFromPlatform(map) {
            if (this.isGrounded) {
              var bottomTileRow = Math.floor(this.y / _util_global__WEBPACK_IMPORTED_MODULE_0__["Global"].unitLength) + 1;
              var leftTileCol = Math.floor(this.x / _util_global__WEBPACK_IMPORTED_MODULE_0__["Global"].unitLength);
              var rightTileCol = Math.floor((this.x + this.width) / _util_global__WEBPACK_IMPORTED_MODULE_0__["Global"].unitLength);

              if (!(map.isSolidAt(bottomTileRow, leftTileCol) || map.isSolidAt(bottomTileRow, rightTileCol))) {
                this.y += 1;
              }
            }
          }
        }, {
          key: "handleCollisions",
          value: function handleCollisions(map) {
            this.handleGroundCollision(map);
            this.handleCeilingCollision(map);
            this.handleLeftCollision(map);
            this.handleRightCollision(map);
          }
        }, {
          key: "handleGroundCollision",
          value: function handleGroundCollision(map) {
            if (this.vy < 0) {
              this.isGrounded = false;
              return;
            }

            var bottomTileRow = Math.floor((this.y + this.height) / _util_global__WEBPACK_IMPORTED_MODULE_0__["Global"].unitLength) + 1;
            var leftTileCol = Math.floor(this.x / _util_global__WEBPACK_IMPORTED_MODULE_0__["Global"].unitLength);
            var rightTileCol = Math.floor((this.x + this.width) / _util_global__WEBPACK_IMPORTED_MODULE_0__["Global"].unitLength);
            var isCollidingWithBottomTile = this.y + this.vy + this.height >= bottomTileRow * _util_global__WEBPACK_IMPORTED_MODULE_0__["Global"].unitLength - 1;
            var isBottomLeftGround = map.isSolidAt(bottomTileRow, leftTileCol) || map.isPlatformAt(bottomTileRow, leftTileCol);
            var isBottomRightGround = map.isSolidAt(bottomTileRow, rightTileCol) || map.isPlatformAt(bottomTileRow, rightTileCol); // drawing for debugging purposes
            // map.drawTile(5 * 48 + 8, bottomTileRow, leftTileCol);
            // map.drawTile(5 * 48 + 8, bottomTileRow, rightTileCol);

            if (isCollidingWithBottomTile && (isBottomLeftGround || isBottomRightGround)) {
              if (!this.isGrounded) {
                this.playLandSound();
                this.isGrounded = true;
              }

              this.y = bottomTileRow * _util_global__WEBPACK_IMPORTED_MODULE_0__["Global"].unitLength - this.height - 1;
              this.vy = 0;
            } else {
              this.isGrounded = false;
            }
          }
        }, {
          key: "handleCeilingCollision",
          value: function handleCeilingCollision(map) {
            var topTileRow = Math.floor(this.y / _util_global__WEBPACK_IMPORTED_MODULE_0__["Global"].unitLength) - 1;
            var leftTileCol = Math.floor(this.x / _util_global__WEBPACK_IMPORTED_MODULE_0__["Global"].unitLength);
            var rightTileCol = Math.floor((this.x + this.width) / _util_global__WEBPACK_IMPORTED_MODULE_0__["Global"].unitLength);
            var isCollidingWithTopTile = this.y + this.vy <= (topTileRow + 1) * _util_global__WEBPACK_IMPORTED_MODULE_0__["Global"].unitLength + 1;
            var isBottomLeftCeiling = map.isSolidAt(topTileRow, leftTileCol);
            var isBottomRightCeiling = map.isSolidAt(topTileRow, rightTileCol); // drawing for debugging purposes
            // map.drawTile(5 * 48 + 8, bottomTileRow, leftTileCol);
            // map.drawTile(5 * 48 + 8, bottomTileRow, rightTileCol);

            if (isCollidingWithTopTile && (isBottomLeftCeiling || isBottomRightCeiling)) {
              this.y = (topTileRow + 1) * _util_global__WEBPACK_IMPORTED_MODULE_0__["Global"].unitLength + 1;
              this.vy = 1;
            }
          }
        }, {
          key: "handleLeftCollision",
          value: function handleLeftCollision(map) {
            var _this$nextPosition3 = this.nextPosition(),
                _this$nextPosition4 = _slicedToArray(_this$nextPosition3, 2),
                x = _this$nextPosition4[0],
                y = _this$nextPosition4[1];

            var leftTileCol = Math.floor((x + this.width / 2) / _util_global__WEBPACK_IMPORTED_MODULE_0__["Global"].unitLength) - 1;
            var topTileRow = Math.floor(y / _util_global__WEBPACK_IMPORTED_MODULE_0__["Global"].unitLength);
            var bottomTileRow = Math.floor((y + this.height) / _util_global__WEBPACK_IMPORTED_MODULE_0__["Global"].unitLength);
            var isCollidingWithLeftTile = x <= (leftTileCol + 1) * _util_global__WEBPACK_IMPORTED_MODULE_0__["Global"].unitLength; // drawing for debugging purposes
            // map.drawTile(5 * 48 + 8, bottomTileRow, leftTileCol);
            // map.drawTile(5 * 48 + 8, topTileRow, leftTileCol);

            if (isCollidingWithLeftTile && (map.isSolidAt(bottomTileRow, leftTileCol) || map.isSolidAt(topTileRow, leftTileCol))) {
              this.x = (leftTileCol + 1) * _util_global__WEBPACK_IMPORTED_MODULE_0__["Global"].unitLength;

              if (this.vx < 0) {
                this.vx = 0;
              }
            }
          }
        }, {
          key: "handleRightCollision",
          value: function handleRightCollision(map) {
            var _this$nextPosition5 = this.nextPosition(),
                _this$nextPosition6 = _slicedToArray(_this$nextPosition5, 2),
                x = _this$nextPosition6[0],
                y = _this$nextPosition6[1];

            var rightTileCol = Math.floor((x + this.width / 2) / _util_global__WEBPACK_IMPORTED_MODULE_0__["Global"].unitLength) + 1;
            var topTileRow = Math.floor(y / _util_global__WEBPACK_IMPORTED_MODULE_0__["Global"].unitLength);
            var bottomTileRow = Math.floor((y + this.height) / _util_global__WEBPACK_IMPORTED_MODULE_0__["Global"].unitLength);
            var isCollidingWithRightTile = x + this.width >= rightTileCol * _util_global__WEBPACK_IMPORTED_MODULE_0__["Global"].unitLength - 1; // drawing for debugging purposes
            // map.drawTile(5 * 48 + 8, bottomTileRow, rightTileCol);
            // map.drawTile(5 * 48 + 8, topTileRow, rightTileCol);

            if (isCollidingWithRightTile && (map.isSolidAt(bottomTileRow, rightTileCol) || map.isSolidAt(topTileRow, rightTileCol))) {
              this.x = rightTileCol * _util_global__WEBPACK_IMPORTED_MODULE_0__["Global"].unitLength - this.width - 1;

              if (this.vx > 0) {
                this.vx = 0;
              }
            }
          }
        }, {
          key: "updateVelocity",
          value: function updateVelocity() {
            if (!this.isGrounded) {
              this.vy += this.GRAVITY;
            }

            this.updateHorizontalVelocity();
          }
        }, {
          key: "updateHorizontalVelocity",
          value: function updateHorizontalVelocity() {
            if (this.direction === 0 || this.isDead) {
              if (this.vx > 0) {
                this.vx = Math.max(0, this.vx - this.ACCELERATION);
              } else if (this.vx < 0) {
                this.vx = Math.min(0, this.vx + this.ACCELERATION);
              }
            } else {
              if (this.direction === 1) {
                this.vx = Math.min(this.MAX_SPEED, this.vx + this.ACCELERATION);
              } else {
                this.vx = Math.max(-this.MAX_SPEED, this.vx - this.ACCELERATION);
              }
            }
          }
        }, {
          key: "updateAnimation",
          value: function updateAnimation() {
            if (this.isDead) {
              this.animator.setAnimIdx(5);
            } else {
              if (this.isGrounded) {
                if (this.animTimer > 0) {
                  this.animTimer--;
                } else {
                  this.animTimer = this.ANIMATION_BUFFER;

                  if (this.vx === 0) {
                    this.animator.setAnimIdx(0);
                  } else {
                    this.animator.setAnimIdx((this.animator.getAnimIdx() + 1) % 4);
                  }
                }
              } else {
                this.animator.setAnimIdx(4);
              }
            }
          }
        }, {
          key: "drawCollisionBox",
          value: function drawCollisionBox() {
            var _util_global__WEBPACK5 = _util_global__WEBPACK_IMPORTED_MODULE_0__["Global"].camera.shift(this.x, this.y),
                _util_global__WEBPACK6 = _slicedToArray(_util_global__WEBPACK5, 2),
                x = _util_global__WEBPACK6[0],
                y = _util_global__WEBPACK6[1];

            this.p5.push();
            this.p5.fill(255);
            this.p5.rect(x, y, this.width, this.height);
            this.p5.pop();
          }
        }, {
          key: "getDirection",
          value: function getDirection() {
            return this.direction;
          }
        }, {
          key: "getIsDead",
          value: function getIsDead() {
            return this.isDead;
          }
        }, {
          key: "setDirection",
          value: function setDirection(direction) {
            this.direction = direction;

            if (direction !== 0) {
              this.isFacingRight = direction === 1;
            }
          }
        }, {
          key: "setIsDead",
          value: function setIsDead(isDead) {
            this.isDead = isDead;
          }
        }]);

        return Player;
      }(_entity__WEBPACK_IMPORTED_MODULE_2__["Entity"]);
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "Bpjv":
    /*!*******************************************************!*\
      !*** ./src/app/components/canvas/canvas.component.ts ***!
      \*******************************************************/

    /*! exports provided: CanvasComponent */

    /***/
    function Bpjv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CanvasComponent", function () {
        return CanvasComponent;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var p5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! p5 */
      "I335");
      /* harmony import */


      var p5__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(p5__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _sketches_platformer_platformer_sketch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../sketches/platformer/platformer-sketch */
      "lwCd");
      /* harmony import */


      var _sketches_pong_pong_sketch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../sketches/pong/pong-sketch */
      "otMh");
      /* harmony import */


      var _sketches_snake_snake_sketch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../sketches/snake/snake-sketch */
      "Y3/s");
      /* harmony import */


      var _sketches_sketch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../sketches/sketch */
      "PGSK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CanvasComponent = /*#__PURE__*/function () {
        function CanvasComponent(route, router) {
          var _this4 = this;

          _classCallCheck(this, CanvasComponent);

          this.route = route;
          this.sketchHolderId = _sketches_sketch__WEBPACK_IMPORTED_MODULE_5__["sketchHolderId"];
          router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]) {
              if (_this4.canvas !== undefined) {
                _this4.canvas.remove();

                delete _this4.canvas;
              }

              _this4.canvas = undefined;

              _this4._createCanvas();
            }
          });
        }

        _createClass(CanvasComponent, [{
          key: "_createCanvas",
          value: function _createCanvas() {
            var _this5 = this;

            this.canvas = new p5__WEBPACK_IMPORTED_MODULE_1__(function (p5) {
              var sketch = _this5._createSketch(p5);

              p5.preload = function () {
                sketch.preload();
              };

              p5.setup = function () {
                sketch.setup();
              };

              p5.mouseMoved = function () {
                sketch.mouseMoveListener();
              };

              p5.mouseClicked = function () {
                sketch.mouseClickListener();
              };

              p5.keyPressed = function () {
                sketch.keyPressListener();
              };

              p5.keyReleased = function () {
                sketch.keyReleaseListener();
              };

              p5.draw = function () {
                sketch.draw();
                sketch.update();
              };
            });
          }
        }, {
          key: "_createSketch",
          value: function _createSketch(p5) {
            switch (this.route.snapshot.params.id) {
              case _sketches_sketch__WEBPACK_IMPORTED_MODULE_5__["SketchName"].platformer:
                return new _sketches_platformer_platformer_sketch__WEBPACK_IMPORTED_MODULE_2__["PlatformerSketch"](p5);

              case _sketches_sketch__WEBPACK_IMPORTED_MODULE_5__["SketchName"].pong:
                return new _sketches_pong_pong_sketch__WEBPACK_IMPORTED_MODULE_3__["PongSketch"](p5);

              case _sketches_sketch__WEBPACK_IMPORTED_MODULE_5__["SketchName"].snake:
                return new _sketches_snake_snake_sketch__WEBPACK_IMPORTED_MODULE_4__["SnakeSketch"](p5);

              default:
                throw Error("Invalid sketch name received");
            }
          }
        }]);

        return CanvasComponent;
      }();

      CanvasComponent.ɵfac = function CanvasComponent_Factory(t) {
        return new (t || CanvasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]));
      };

      CanvasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: CanvasComponent,
        selectors: [["main-canvas"]],
        decls: 1,
        vars: 1,
        consts: [[3, "id"]],
        template: function CanvasComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("id", ctx.sketchHolderId);
          }
        },
        styles: ["#sketch-holder[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 10vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbnZhcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixhQUFhO0FBQ2YiLCJmaWxlIjoiY2FudmFzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2tldGNoLWhvbGRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxMHZoO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "D31l":
    /*!******************************************!*\
      !*** ./src/app/sketches/snake/config.ts ***!
      \******************************************/

    /*! exports provided: Config */

    /***/
    function D31l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Config", function () {
        return Config;
      });

      var Config = {
        rows: 24,
        cols: 24,
        unitLength: 20
      };
      /***/
    },

    /***/
    "DQkd":
    /*!****************************************************!*\
      !*** ./src/app/sketches/platformer/util/global.ts ***!
      \****************************************************/

    /*! exports provided: Global */

    /***/
    function DQkd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Global", function () {
        return Global;
      });
      /* harmony import */


      var _camera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./camera */
      "qK8h");
      /* harmony import */


      var _map_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./map-data */
      "IamB");

      var cameraWidth = 700;
      var cameraHeight = 450;
      var solids = new Set([18, 19, 20, 66, 68, 210, 211, 114, 115, 116, 16, 768, 769, 770, 816, 818, 864, 865, 866]);
      var platforms = new Set([309, 310, 311, 581, 582, 583, 730, 731, 732]); // tslint:disable-next-line:max-line-length

      var tileArray0 = [0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 581, 583, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 581, 582, 582, 583, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 727, 727, 727, 727, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 535, 535, 535, 535, 0, 70, 309, 310, 311, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 875, 829, 875, 875, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 875, 875, 875, 875, 0, 70, 0, 0, 0, 0, 309, 310, 311, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 535, 535, 535, 535, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 875, 875, 829, 875, 0, 70, 0, 0, 0, 0, 581, 582, 582, 582, 582, 582, 582, 582, 582, 582, 583, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 875, 875, 875, 875, 0, 70, 0, 0, 0, 0, 629, 875, 875, 875, 875, 875, 875, 875, 875, 875, 629, 0, 0, 0, 309, 310, 311, 0, 0, 0, 0, 0, 0, 0, 730, 731, 732, 0, 70, 0, 535, 535, 535, 535, 0, 70, 0, 0, 0, 0, 629, 875, 875, 875, 727, 727, 727, 875, 875, 875, 629, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 778, 779, 780, 0, 70, 0, 727, 727, 727, 727, 0, 70, 0, 259, 0, 0, 629, 875, 875, 727, 727, 727, 727, 727, 875, 875, 629, 0, 0, 0, 0, 0, 0, 0, 309, 310, 0, 0, 0, 0, 781, 435, 781, 0, 70, 0, 727, 727, 432, 727, 0, 70, 0, 307, 0, 0, 629, 727, 727, 727, 727, 485, 727, 727, 727, 727, 629, 0, 336, 0, 673, 96, 673, 673, 0, 0, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // tslint:disable-next-line:max-line-length

      var tileArray1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 581, 582, 583, 0, 154, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 629, 432, 631, 0, 154, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 260, 0, 0, 154, 0, 0, 0, 0, 0, 18, 19, 19, 19, 19, 19, 19, 19, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 308, 0, 0, 154, 0, 0, 0, 0, 0, 66, 0, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 18, 19, 19, 19, 20, 0, 0, 0, 0, 66, 0, 0, 0, 0, 0, 0, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 66, 0, 0, 67, 68, 0, 0, 0, 0, 66, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 66, 0, 0, 0, 68, 0, 0, 0, 0, 66, 0, 0, 0, 67, 0, 0, 0, 0, 0, 0, 309, 310, 311, 0, 0, 0, 0, 154, 309, 310, 311, 0, 0, 0, 0, 154, 309, 310, 311, 0, 66, 67, 0, 0, 68, 0, 0, 0, 0, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 66, 0, 0, 0, 68, 22, 22, 22, 22, 66, 0, 0, 0, 0, 0, 0, 0, 0, 311, 0, 0, 0, 0, 0, 309, 310, 311, 154, 0, 0, 0, 0, 309, 310, 311, 154, 0, 0, 0, 0, 66, 0, 0, 0, 210, 19, 19, 19, 19, 211, 0, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 449, 0, 0, 0, 0, 0, 154, 0, 0, 50, 50, 49, 0, 0, 154, 0, 0, 0, 0, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 211, 0, 0, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // tslint:disable-next-line:max-line-length

      var tileArray2 = [0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 67, 0, 0, 0, 0, 0, 67, 0, 0, 162, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 116, 0, 0, 0, 0, 154, 0, 0, 0, 0, 99, 96, 96, 0, 0, 0, 0, 0, 66, 0, 0, 67, 0, 0, 0, 0, 0, 162, 116, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 309, 310, 311, 154, 0, 18, 19, 19, 19, 19, 19, 0, 0, 0, 0, 0, 66, 0, 67, 0, 0, 0, 67, 0, 162, 116, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 0, 66, 0, 0, 0, 0, 0, 19, 20, 309, 310, 311, 114, 115, 115, 115, 115, 115, 115, 115, 116, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 0, 66, 0, 0, 67, 0, 0, 0, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 19, 19, 19, 19, 19, 19, 19, 211, 0, 0, 0, 0, 0, 0, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 309, 310, 311, 0, 0, 0, 66, 67, 0, 0, 0, 0, 0, 0, 67, 0, 0, 0, 0, 0, 67, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 0, 0, 0, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 0, 0, 0, 0, 0, 0, 309, 310, 311, 0, 0, 0, 309, 310, 311, 0, 0, 0, 0, 0, 0, 0, 0, 0, 114, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 0, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 309, 310, 311, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 19, 19, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 66, 0, 0, 210, 19, 19, 20, 0, 0, 0, 0, 0, 0, 0, 0, 210, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 211, 0, 0, 0, 0, 0, 210, 19, 19, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 210, 19, 19, 19, 19, 67, 0, 0, 0, 0, 0, 0, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // tslint:disable-next-line:max-line-length

      var tileArray3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 118, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 768, 769, 769, 769, 769, 770, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 816, 770, 0, 0, 0, 818, 0, 0, 96, 49, 0, 49, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 864, 866, 0, 0, 0, 818, 0, 0, 19, 19, 19, 20, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 818, 0, 0, 0, 1, 1, 68, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 449, 0, 818, 0, 0, 0, 0, 0, 68, 0, 53, 0, 0, 0, 118, 117, 49, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 768, 769, 865, 865, 865, 866, 0, 0, 0, 0, 0, 210, 19, 19, 19, 19, 19, 19, 19, 19, 20, 0, 0, 0, 0, 0, 70, 0, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 68, 0, 0, 0, 0, 0, 70, 0, 66, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 68, 49, 0, 96, 0, 0, 118, 117, 66, 0, 0, 0, 0, 0, 0, 0, 1, 0, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 163, 0, 210, 19, 19, 19, 19, 19, 19, 19, 211, 0, 162, 115, 115, 115, 115, 115, 115, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 114, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 116, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 19, 19, 20, 0, 0, 309, 310, 311, 0, 0, 0, 0, 0, 0, 0, 309, 310, 311, 0, 0, 0, 0, 0, 0, 0, 309, 310, 311, 0, 0, 0, 0, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 0, 0, 0, 0, 0, 0, 0, 309, 310, 311, 0, 0, 0, 0, 0, 0, 0, 309, 310, 311, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 0, 0, 309, 310, 311, 0, 0, 0, 0, 0, 0, 0, 309, 310, 311, 0, 0, 0, 0, 0, 0, 0, 309, 310, 311, 0, 0, 0, 0, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 0, 0, 0, 0, 0, 0, 0, 309, 310, 311, 0, 0, 0, 0, 0, 0, 0, 309, 310, 311, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 673, 0, 673, 673, 673, 0, 0, 0, 0, 0, 0, 0, 673, 0, 0, 0, 673, 0, 0, 0, 0, 0, 0, 0, 673, 673, 0, 0, 0, 210, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      var startingMapData = new _map_data__WEBPACK_IMPORTED_MODULE_1__["MapData"](tileArray1, 20, 40, [[475, 390]]);
      startingMapData.setLeftMap(new _map_data__WEBPACK_IMPORTED_MODULE_1__["MapData"](tileArray0, 20, 40, []));
      startingMapData.setRightMap(new _map_data__WEBPACK_IMPORTED_MODULE_1__["MapData"](tileArray2, 20, 40, []));
      var rightMap = startingMapData.getRightMap();

      if (rightMap === null) {
        throw Error('RightMap does not exist');
      } else {
        rightMap.setRightMap(new _map_data__WEBPACK_IMPORTED_MODULE_1__["MapData"](tileArray3, 30, 30, [[300, 700], [600, 700], [900, 700]]));
      }

      var Global = {
        width: cameraWidth,
        height: cameraHeight,
        solidSet: solids,
        platformSet: platforms,
        unitLength: 32,
        mapData: startingMapData,
        camera: new _camera__WEBPACK_IMPORTED_MODULE_0__["Camera"](cameraWidth / 2, cameraHeight / 2, 0, 40 * 32, 0, 20 * 32)
      };
      /***/
    },

    /***/
    "EfD9":
    /*!****************************************!*\
      !*** ./src/app/sketches/snake/food.ts ***!
      \****************************************/

    /*! exports provided: Food */

    /***/
    function EfD9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Food", function () {
        return Food;
      });
      /* harmony import */


      var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./config */
      "D31l");

      var Food = /*#__PURE__*/function () {
        function Food(p5) {
          _classCallCheck(this, Food);

          this.p5 = p5;
          this.x = 14;
          this.y = 10;
        }

        _createClass(Food, [{
          key: "draw",
          value: function draw() {
            this.p5.image(this.image, this.x * _config__WEBPACK_IMPORTED_MODULE_0__["Config"].unitLength, this.y * _config__WEBPACK_IMPORTED_MODULE_0__["Config"].unitLength, _config__WEBPACK_IMPORTED_MODULE_0__["Config"].unitLength, _config__WEBPACK_IMPORTED_MODULE_0__["Config"].unitLength);
          }
        }, {
          key: "randomMove",
          value: function randomMove() {
            this.x = Math.floor(Math.random() * (_config__WEBPACK_IMPORTED_MODULE_0__["Config"].cols - 4) + 2);
            this.y = Math.floor(Math.random() * (_config__WEBPACK_IMPORTED_MODULE_0__["Config"].rows - 4) + 2);
          }
        }, {
          key: "getPosition",
          value: function getPosition() {
            return [this.x, this.y];
          }
        }, {
          key: "setImage",
          value: function setImage(image) {
            this.image = image;
          }
        }]);

        return Food;
      }();
      /***/

    },

    /***/
    "F6rN":
    /*!***************************************!*\
      !*** ./src/app/sketches/pong/ball.ts ***!
      \***************************************/

    /*! exports provided: Ball */

    /***/
    function F6rN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ball", function () {
        return Ball;
      });
      /* harmony import */


      var p5_lib_addons_p5_sound__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! p5/lib/addons/p5.sound */
      "5heZ");
      /* harmony import */


      var p5_lib_addons_p5_sound__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(p5_lib_addons_p5_sound__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./config */
      "+nqH");

      var Ball = /*#__PURE__*/function () {
        function Ball(p5) {
          _classCallCheck(this, Ball);

          this.p5 = p5;
          this.x = _config__WEBPACK_IMPORTED_MODULE_1__["Config"].width / 2;
          this.y = _config__WEBPACK_IMPORTED_MODULE_1__["Config"].height / 2;
          this.tx = -1;
          this.ty = 0;
        }

        _createClass(Ball, [{
          key: "update",
          value: function update() {
            this.x += Ball.speed * this.tx;
            this.y += Ball.speed * this.ty;
            this.handleWallBounce();
          }
        }, {
          key: "handleWallBounce",
          value: function handleWallBounce() {
            if (this.y <= 0) {
              this.ty = Math.abs(this.ty);
            } else if (this.y + Ball.diameter >= _config__WEBPACK_IMPORTED_MODULE_1__["Config"].height) {
              this.ty = -Math.abs(this.ty);
            }
          }
        }, {
          key: "draw",
          value: function draw() {
            this.p5.circle(this.x, this.y, Ball.diameter);
          }
        }, {
          key: "getX",
          value: function getX() {
            return this.x;
          }
        }, {
          key: "getY",
          value: function getY() {
            return this.y;
          }
        }, {
          key: "getHorizontalDirection",
          value: function getHorizontalDirection() {
            return this.tx;
          }
        }, {
          key: "setPosition",
          value: function setPosition(x, y) {
            var _ref = [x, y];
            this.x = _ref[0];
            this.y = _ref[1];
          }
        }, {
          key: "setDirection",
          value: function setDirection(tx, ty) {
            var _ref2 = [tx, ty];
            this.tx = _ref2[0];
            this.ty = _ref2[1];
          }
        }]);

        return Ball;
      }();

      Ball.diameter = 6;
      Ball.speed = 10;
      /***/
    },

    /***/
    "IamB":
    /*!******************************************************!*\
      !*** ./src/app/sketches/platformer/util/map-data.ts ***!
      \******************************************************/

    /*! exports provided: MapData */

    /***/
    function IamB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapData", function () {
        return MapData;
      });

      var MapData = /*#__PURE__*/function () {
        function MapData(tiles, numRows, numCols, initialGhostPositions) {
          var leftMap = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
          var rightMap = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;

          _classCallCheck(this, MapData);

          this.tiles = tiles;
          this.numRows = numRows;
          this.numCols = numCols;
          this.initialGhostPositions = initialGhostPositions;
          this.leftMap = leftMap;
          this.rightMap = rightMap;
        }

        _createClass(MapData, [{
          key: "isIdxWithinBounds",
          value: function isIdxWithinBounds(i, j) {
            return 0 <= i && i < this.numRows && 0 <= j && j < this.numCols;
          }
        }, {
          key: "getTile",
          value: function getTile(i, j) {
            if (!this.isIdxWithinBounds(i, j)) {
              throw new Error('index out of bounds');
            } else {
              return this.tiles[i * this.numCols + j];
            }
          }
        }, {
          key: "getNumRows",
          value: function getNumRows() {
            return this.numRows;
          }
        }, {
          key: "getNumCols",
          value: function getNumCols() {
            return this.numCols;
          }
        }, {
          key: "getInitialGhostPositions",
          value: function getInitialGhostPositions() {
            return this.initialGhostPositions;
          }
        }, {
          key: "getLeftMap",
          value: function getLeftMap() {
            return this.leftMap;
          }
        }, {
          key: "getRightMap",
          value: function getRightMap() {
            return this.rightMap;
          }
        }, {
          key: "setLeftMap",
          value: function setLeftMap(map) {
            this.leftMap = map;
            map.rightMap = this;
          }
        }, {
          key: "setRightMap",
          value: function setRightMap(map) {
            this.rightMap = map;
            map.leftMap = this;
          }
        }]);

        return MapData;
      }();
      /***/

    },

    /***/
    "OrCf":
    /*!******************************************************!*\
      !*** ./src/app/sketches/platformer/util/animator.ts ***!
      \******************************************************/

    /*! exports provided: Animator */

    /***/
    function OrCf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Animator", function () {
        return Animator;
      });

      var Animator = /*#__PURE__*/function () {
        function Animator(idxSeq, spriteSheet) {
          var paddingLeft = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
          var paddingRight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
          var paddingTop = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
          var paddingBottom = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

          _classCallCheck(this, Animator);

          this.animIdx = 0;
          this.imageSeq = this.parseImages(idxSeq, spriteSheet, paddingLeft, paddingRight, paddingTop, paddingBottom);
        }

        _createClass(Animator, [{
          key: "parseImages",
          value: function parseImages(idxSeq, spriteSheet, paddingLeft, paddingRight, paddingTop, paddingBottom) {
            var imageSeq = [];

            var _iterator2 = _createForOfIteratorHelper(idxSeq),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _step2$value = _slicedToArray(_step2.value, 2),
                    i = _step2$value[0],
                    j = _step2$value[1];

                imageSeq.push(spriteSheet.get(j * 16 + paddingLeft, i * 16 + paddingTop, 16 - paddingRight, 16 - paddingBottom));
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            return imageSeq;
          }
        }, {
          key: "getCurrentImage",
          value: function getCurrentImage() {
            return this.imageSeq[this.animIdx];
          }
        }, {
          key: "getAnimIdx",
          value: function getAnimIdx() {
            return this.animIdx;
          }
        }, {
          key: "setAnimIdx",
          value: function setAnimIdx(idx) {
            this.animIdx = idx;
          }
        }]);

        return Animator;
      }();
      /***/

    },

    /***/
    "P1XG":
    /*!***********************************************************!*\
      !*** ./src/app/sketches/platformer/pages/options-menu.ts ***!
      \***********************************************************/

    /*! exports provided: OptionsMenu */

    /***/
    function P1XG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OptionsMenu", function () {
        return OptionsMenu;
      });
      /* harmony import */


      var _page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./page */
      "76Wm");
      /* harmony import */


      var _start_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./start-menu */
      "1q77");
      /* harmony import */


      var _util_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../util/global */
      "DQkd");

      var OptionsMenu = /*#__PURE__*/function (_page__WEBPACK_IMPORT2) {
        _inherits(OptionsMenu, _page__WEBPACK_IMPORT2);

        var _super4 = _createSuper(OptionsMenu);

        function OptionsMenu(p5, manager) {
          var _this6;

          _classCallCheck(this, OptionsMenu);

          _this6 = _super4.call(this, p5, manager);

          _this6.setButton('left', _util_global__WEBPACK_IMPORTED_MODULE_2__["Global"].width / 2 - 60, _util_global__WEBPACK_IMPORTED_MODULE_2__["Global"].height / 2 - 100);

          _this6.setButton('right', _util_global__WEBPACK_IMPORTED_MODULE_2__["Global"].width / 2 - 60, _util_global__WEBPACK_IMPORTED_MODULE_2__["Global"].height / 2 - 60);

          _this6.setButton('jump', _util_global__WEBPACK_IMPORTED_MODULE_2__["Global"].width / 2 - 60, _util_global__WEBPACK_IMPORTED_MODULE_2__["Global"].height / 2 - 20);

          _this6.setButton('drop', _util_global__WEBPACK_IMPORTED_MODULE_2__["Global"].width / 2 - 60, _util_global__WEBPACK_IMPORTED_MODULE_2__["Global"].height / 2 + 20);

          _this6.setButton('pause', _util_global__WEBPACK_IMPORTED_MODULE_2__["Global"].width / 2 - 60, _util_global__WEBPACK_IMPORTED_MODULE_2__["Global"].height / 2 + 60);

          _this6.setButton('back', _util_global__WEBPACK_IMPORTED_MODULE_2__["Global"].width / 2 - 60, _util_global__WEBPACK_IMPORTED_MODULE_2__["Global"].height / 2 + 100);

          return _this6;
        }

        _createClass(OptionsMenu, [{
          key: "mouseMoveListener",
          value: function mouseMoveListener() {
            this.updateButtons();
          }
        }, {
          key: "mouseClickListener",
          value: function mouseClickListener() {
            if (this.isButtonSelected('left')) {
              this.selectedControl = 'lef';
            } else if (this.isButtonSelected('right')) {
              this.selectedControl = 'right';
            } else if (this.isButtonSelected('jump')) {
              this.selectedControl = 'jump';
            } else if (this.isButtonSelected('drop')) {
              this.selectedControl = 'drop';
            } else if (this.isButtonSelected('pause')) {
              this.selectedControl = 'pause';
            } else if (this.isButtonSelected('back')) {
              this.manager.setPage(new _start_menu__WEBPACK_IMPORTED_MODULE_1__["StartMenu"](this.p5, this.manager));
            }
          }
        }, {
          key: "keyPressListener",
          value: function keyPressListener() {
            if (this.selectedControl) {
              this.manager.setKeyBinding(this.selectedControl, this.p5.key.toUpperCase());
            }

            this.selectedControl = undefined;
          }
        }, {
          key: "keyReleaseListener",
          value: function keyReleaseListener() {}
        }, {
          key: "update",
          value: function update() {}
        }, {
          key: "draw",
          value: function draw() {
            this.p5.push();
            this.p5.background(24, 24, 24);
            this.p5.textSize(20);
            this.p5.fill(255, 255, 255);
            this.p5.push();
            this.p5.textSize(32);
            this.p5.text('Controls', _util_global__WEBPACK_IMPORTED_MODULE_2__["Global"].width / 2 - 64, 100);
            this.p5.pop();
            this.drawMoveRow('left', this.manager.getKeyBinding('left'), 0);
            this.drawMoveRow('right', this.manager.getKeyBinding('right'), 1);
            this.drawMoveRow('jump', this.manager.getKeyBinding('jump'), 2);
            this.drawMoveRow('drop', this.manager.getKeyBinding('drop'), 3);
            this.drawMoveRow('pause', this.manager.getKeyBinding('pause'), 4);
            this.drawButton('back');
          }
        }, {
          key: "drawMoveRow",
          value: function drawMoveRow(control, key, row) {
            this.drawButton(control);
            this.p5.push();

            if (this.selectedControl === control) {
              this.p5.fill(255, 255, 0);
            }

            this.p5.text(key, _util_global__WEBPACK_IMPORTED_MODULE_2__["Global"].width / 2 + 30, _util_global__WEBPACK_IMPORTED_MODULE_2__["Global"].height / 2 - 80 + 40 * row);
            this.p5.pop();
          }
        }]);

        return OptionsMenu;
      }(_page__WEBPACK_IMPORTED_MODULE_0__["Page"]);
      /***/

    },

    /***/
    "PGSK":
    /*!************************************!*\
      !*** ./src/app/sketches/sketch.ts ***!
      \************************************/

    /*! exports provided: SketchName, sketchHolderId */

    /***/
    function PGSK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SketchName", function () {
        return SketchName;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sketchHolderId", function () {
        return sketchHolderId;
      });

      var SketchName;

      (function (SketchName) {
        SketchName["platformer"] = "platformer";
        SketchName["pong"] = "pong";
        SketchName["snake"] = "snake";
      })(SketchName || (SketchName = {}));

      var sketchHolderId = "sketch-holder";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _sketches_sketch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./sketches/sketch */
      "PGSK");
      /* harmony import */


      var _messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./messages */
      "zzOR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_sketch_details_sketch_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/sketch-details/sketch-details.component */
      "k1G3");

      function AppComponent_sketch_details_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "sketch-details", 8);
        }

        if (rf & 2) {
          var name_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", name_r1)("sketchMetadata", ctx_r0.getSketchMetadata(name_r1));
        }
      }

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent() {
          _classCallCheck(this, AppComponent);

          this.messages = new _messages__WEBPACK_IMPORTED_MODULE_1__["Messages"]();
          this.sketchNames = [_sketches_sketch__WEBPACK_IMPORTED_MODULE_0__["SketchName"].platformer, _sketches_sketch__WEBPACK_IMPORTED_MODULE_0__["SketchName"].pong, _sketches_sketch__WEBPACK_IMPORTED_MODULE_0__["SketchName"].snake];
        }

        _createClass(AppComponent, [{
          key: "getSketchMetadata",
          value: function getSketchMetadata(sketchName) {
            switch (sketchName) {
              case _sketches_sketch__WEBPACK_IMPORTED_MODULE_0__["SketchName"].platformer:
                return {
                  id: sketchName,
                  displayName: this.messages.platformer,
                  description: this.messages.platformerDescription
                };

              case _sketches_sketch__WEBPACK_IMPORTED_MODULE_0__["SketchName"].pong:
                return {
                  id: sketchName,
                  displayName: this.messages.pong,
                  description: this.messages.pongDescription
                };

              case _sketches_sketch__WEBPACK_IMPORTED_MODULE_0__["SketchName"].snake:
                return {
                  id: sketchName,
                  displayName: this.messages.snake,
                  description: this.messages.snakeDescription
                };

              default:
                throw new Error("Invalid sketch name received");
            }
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 10,
        vars: 2,
        consts: [[1, "main-container"], [1, "header"], ["src", "favicon.ico", "alt", ""], [1, "title"], [1, "content"], [1, "menu-container"], ["class", "game-details", 3, "routerLink", "sketchMetadata", 4, "ngFor", "ngForOf"], [1, "canvas-container"], [1, "game-details", 3, "routerLink", "sketchMetadata"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AppComponent_sketch_details_7_Template, 1, 2, "sketch-details", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.messages.coolGames);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.sketchNames);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _components_sketch_details_sketch_details_component__WEBPACK_IMPORTED_MODULE_5__["SketchDetailsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]],
        styles: [".main-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  height: 5rem;\n  padding: 1rem 2rem;\n  align-items: center;\n  background: #1E2832;\n}\n\n.title[_ngcontent-%COMP%] {\n  color: white;\n  font-family: Verdana, serif;\n}\n\n.menu-container[_ngcontent-%COMP%] {\n  height: 90%;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 2rem;\n}\n\n.canvas-container[_ngcontent-%COMP%] {\n  margin-left: 4%\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtBQUNmOztBQUVBO0VBQ0U7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNXJlbTtcbiAgcGFkZGluZzogMXJlbSAycmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjMUUyODMyO1xufVxuXG4udGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBzZXJpZjtcbn1cblxuLm1lbnUtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA5MCU7XG59XG5cbi5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMnJlbTtcbn1cblxuLmNhbnZhcy1jb250YWluZXIge1xuICBtYXJnaW4tbGVmdDogNCVcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "T4ms":
    /*!*******************************************************!*\
      !*** ./src/app/sketches/platformer/pages/game-run.ts ***!
      \*******************************************************/

    /*! exports provided: GameRun */

    /***/
    function T4ms(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GameRun", function () {
        return GameRun;
      });
      /* harmony import */


      var _page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./page */
      "76Wm");
      /* harmony import */


      var _util_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../util/global */
      "DQkd");
      /* harmony import */


      var _entities_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../entities/player */
      "9HVg");
      /* harmony import */


      var _util_game_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../util/game-map */
      "x2Ws");
      /* harmony import */


      var _start_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./start-menu */
      "1q77");
      /* harmony import */


      var _entities_ghost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../entities/ghost */
      "2L61");

      var GameRun = /*#__PURE__*/function (_page__WEBPACK_IMPORT3) {
        _inherits(GameRun, _page__WEBPACK_IMPORT3);

        var _super5 = _createSuper(GameRun);

        function GameRun(p5, manager) {
          var _this7;

          _classCallCheck(this, GameRun);

          _this7 = _super5.call(this, p5, manager);
          _this7.isPaused = false;
          _this7.player = new _entities_player__WEBPACK_IMPORTED_MODULE_2__["Player"](p5, 60, 15 * _util_global__WEBPACK_IMPORTED_MODULE_1__["Global"].unitLength + 9, manager);
          _this7.map = new _util_game_map__WEBPACK_IMPORTED_MODULE_3__["GameMap"](p5, _util_global__WEBPACK_IMPORTED_MODULE_1__["Global"].mapData, manager.getSpriteSheet());

          _this7.respawnGhosts();

          _this7.setButton('reset', _util_global__WEBPACK_IMPORTED_MODULE_1__["Global"].width / 2 - 25, 140);

          _this7.setButton('exit', _util_global__WEBPACK_IMPORTED_MODULE_1__["Global"].width / 2 - 20, 170);

          _util_global__WEBPACK_IMPORTED_MODULE_1__["Global"].camera.update(_this7.player.getX(), _this7.player.getY());

          return _this7;
        }

        _createClass(GameRun, [{
          key: "mouseMoveListener",
          value: function mouseMoveListener() {
            this.updateButtons();
          }
        }, {
          key: "mouseClickListener",
          value: function mouseClickListener() {
            if (this.isPaused) {
              if (this.isButtonSelected('reset')) {
                this.reset();
              } else if (this.isButtonSelected('exit')) {
                this.manager.setPage(new _start_menu__WEBPACK_IMPORTED_MODULE_4__["StartMenu"](this.p5, this.manager));
              }
            }
          }
        }, {
          key: "keyPressListener",
          value: function keyPressListener() {
            if (this.p5.key.toUpperCase() === 'ESCAPE') {
              if (!this.isPaused) {
                this.manager.playSound('pause');
              }

              this.isPaused = !this.isPaused;
            } else if (!this.player.getIsDead()) {
              this.handlePlayerMovement();
            }
          }
        }, {
          key: "keyReleaseListener",
          value: function keyReleaseListener() {
            switch (this.p5.key.toUpperCase()) {
              case this.manager.getKeyBinding('left'):
                if (this.player.getDirection() === -1) {
                  this.player.setDirection(0);
                }

                break;

              case this.manager.getKeyBinding('right'):
                if (this.player.getDirection() === 1) {
                  this.player.setDirection(0);
                }

                break;

              case this.manager.getKeyBinding('jump'):
                if (this.player.getVelY() < 0) {
                  this.player.setVelY(this.player.getVelY() * 0.5);
                }

            }
          }
        }, {
          key: "draw",
          value: function draw() {
            if (this.isPaused) {
              this.drawPauseMenu();
            } else {
              this.p5.push();
              this.p5.background(71, 45, 60);
              this.map.draw();
              this.player.draw();
              this.ghosts.forEach(function (ghost) {
                return ghost.draw();
              });
              this.p5.pop();
            }
          }
        }, {
          key: "update",
          value: function update() {
            var _this8 = this;

            if (this.isPaused) {
              return;
            }

            this.player.update(this.map);
            this.ghosts.forEach(function (ghost) {
              ghost.update();

              if (_this8.player.isCollidingWith(ghost)) {
                _this8.player.setIsDead(true);
              }
            });
            this.handleMapTransition();

            _util_global__WEBPACK_IMPORTED_MODULE_1__["Global"].camera.update(this.player.getX(), this.player.getY());
          }
        }, {
          key: "handlePlayerMovement",
          value: function handlePlayerMovement() {
            switch (this.p5.key.toUpperCase()) {
              case this.manager.getKeyBinding('left'):
                this.player.setDirection(-1);
                break;

              case this.manager.getKeyBinding('right'):
                this.player.setDirection(1);
                break;

              case this.manager.getKeyBinding('jump'):
                this.player.jump();
                break;

              case this.manager.getKeyBinding('drop'):
                this.player.dropFromPlatform(this.map);
                break;
            }
          }
        }, {
          key: "handleMapTransition",
          value: function handleMapTransition() {
            var centerX = this.player.getX() + this.player.getWidth() / 2;

            if (centerX < 0) {
              if (this.map.getData().getLeftMap() === null) {
                this.player.setX(this.player.getX() - this.player.getVelX());
                return;
              }

              this.map.setDataToLeftMap();
              this.player.setX(this.map.getData().getNumCols() * _util_global__WEBPACK_IMPORTED_MODULE_1__["Global"].unitLength - this.player.getWidth() / 2);
              this.respawnGhosts();

              _util_global__WEBPACK_IMPORTED_MODULE_1__["Global"].camera.adjustBoundary(0, this.map.getData().getNumCols() * _util_global__WEBPACK_IMPORTED_MODULE_1__["Global"].unitLength, 0, this.map.getData().getNumRows() * _util_global__WEBPACK_IMPORTED_MODULE_1__["Global"].unitLength);
            } else if (centerX > this.map.getData().getNumCols() * _util_global__WEBPACK_IMPORTED_MODULE_1__["Global"].unitLength) {
              if (this.map.getData().getRightMap() === null) {
                this.player.setX(this.player.getX() - this.player.getVelX());
                return;
              }

              this.map.setDataToRightMap();
              this.player.setX(-this.player.getWidth() / 2);
              this.respawnGhosts();

              _util_global__WEBPACK_IMPORTED_MODULE_1__["Global"].camera.adjustBoundary(0, this.map.getData().getNumCols() * _util_global__WEBPACK_IMPORTED_MODULE_1__["Global"].unitLength, 0, this.map.getData().getNumRows() * _util_global__WEBPACK_IMPORTED_MODULE_1__["Global"].unitLength);
            }
          }
        }, {
          key: "drawPauseMenu",
          value: function drawPauseMenu() {
            this.p5.push();
            this.p5.fill(255);
            this.p5.rect(_util_global__WEBPACK_IMPORTED_MODULE_1__["Global"].width / 2 - 75, 70, 150, 150);
            this.p5.fill(0);
            this.p5.rect(_util_global__WEBPACK_IMPORTED_MODULE_1__["Global"].width / 2 - 70, 75, 140, 140);
            this.p5.stroke(1);
            this.p5.textSize(32);
            this.p5.fill(255);
            this.p5.text('Paused', _util_global__WEBPACK_IMPORTED_MODULE_1__["Global"].width / 2 - 48, 120);
            this.p5.pop();
            this.drawButton('reset');
            this.drawButton('exit');
          }
        }, {
          key: "reset",
          value: function reset() {
            this.isPaused = false;
            this.player.setIsDead(false);
            this.player.setX(60);
            this.player.setY(15 * _util_global__WEBPACK_IMPORTED_MODULE_1__["Global"].unitLength + 9);
            this.map = new _util_game_map__WEBPACK_IMPORTED_MODULE_3__["GameMap"](this.p5, _util_global__WEBPACK_IMPORTED_MODULE_1__["Global"].mapData, this.manager.getSpriteSheet());

            _util_global__WEBPACK_IMPORTED_MODULE_1__["Global"].camera.adjustBoundary(0, this.map.getData().getNumCols() * _util_global__WEBPACK_IMPORTED_MODULE_1__["Global"].unitLength, 0, this.map.getData().getNumRows() * _util_global__WEBPACK_IMPORTED_MODULE_1__["Global"].unitLength);

            this.respawnGhosts();
          }
        }, {
          key: "respawnGhosts",
          value: function respawnGhosts() {
            var _this9 = this;

            this.ghosts = this.map.getData().getInitialGhostPositions().map(function (_ref3) {
              var _ref4 = _slicedToArray(_ref3, 2),
                  x = _ref4[0],
                  y = _ref4[1];

              return new _entities_ghost__WEBPACK_IMPORTED_MODULE_5__["Ghost"](_this9.p5, x, y, _this9.player, _this9.manager.getSpriteSheet().get(26 * 16 + 1, 6 * 16, 14, 16));
            });
          }
        }]);

        return GameRun;
      }(_page__WEBPACK_IMPORTED_MODULE_0__["Page"]);
      /***/

    },

    /***/
    "Y3/s":
    /*!************************************************!*\
      !*** ./src/app/sketches/snake/snake-sketch.ts ***!
      \************************************************/

    /*! exports provided: SnakeSketch */

    /***/
    function Y3S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SnakeSketch", function () {
        return SnakeSketch;
      });
      /* harmony import */


      var _snake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./snake */
      "+ZV/");
      /* harmony import */


      var _food__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./food */
      "EfD9");
      /* harmony import */


      var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./config */
      "D31l");
      /* harmony import */


      var _sketch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../sketch */
      "PGSK");

      var SnakeSketch = /*#__PURE__*/function () {
        function SnakeSketch(p5) {
          _classCallCheck(this, SnakeSketch);

          this.p5 = p5;
          this.width = _config__WEBPACK_IMPORTED_MODULE_2__["Config"].cols * _config__WEBPACK_IMPORTED_MODULE_2__["Config"].unitLength;
          this.height = _config__WEBPACK_IMPORTED_MODULE_2__["Config"].rows * _config__WEBPACK_IMPORTED_MODULE_2__["Config"].unitLength;
          this.snake = new _snake__WEBPACK_IMPORTED_MODULE_0__["Snake"](p5);
          this.food = new _food__WEBPACK_IMPORTED_MODULE_1__["Food"](p5);
        }

        _createClass(SnakeSketch, [{
          key: "preload",
          value: function preload() {
            this.food.setImage(this.p5.loadImage('/assets/snake/apple.png'));
          }
        }, {
          key: "setup",
          value: function setup() {
            var canvas = this.p5.createCanvas(this.width, this.height);
            canvas.parent(_sketch__WEBPACK_IMPORTED_MODULE_3__["sketchHolderId"]);
            this.p5.frameRate(18);
          }
        }, {
          key: "mouseMoveListener",
          value: function mouseMoveListener() {}
        }, {
          key: "mouseClickListener",
          value: function mouseClickListener() {}
        }, {
          key: "keyPressListener",
          value: function keyPressListener() {
            var key = this.p5.key.toUpperCase();
            var dx = this.snake.positionsX[0] - this.snake.positionsX[1];
            var dy = this.snake.positionsY[0] - this.snake.positionsY[1];

            if (key === 'W' && dy <= 0) {
              this.snake.setDirection(_snake__WEBPACK_IMPORTED_MODULE_0__["Direction"].up);
            } else if (key === 'S' && dy >= 0) {
              this.snake.setDirection(_snake__WEBPACK_IMPORTED_MODULE_0__["Direction"].down);
            } else if (key === 'A' && dx <= 0) {
              this.snake.setDirection(_snake__WEBPACK_IMPORTED_MODULE_0__["Direction"].left);
            } else if (key === 'D' && dx >= 0) {
              this.snake.setDirection(_snake__WEBPACK_IMPORTED_MODULE_0__["Direction"].right);
            }
          }
        }, {
          key: "keyReleaseListener",
          value: function keyReleaseListener() {}
        }, {
          key: "update",
          value: function update() {
            this.snake.update();

            var _this$food$getPositio = this.food.getPosition(),
                _this$food$getPositio2 = _slicedToArray(_this$food$getPositio, 2),
                foodX = _this$food$getPositio2[0],
                foodY = _this$food$getPositio2[1];

            if (this.snake.positionsX[0] === foodX && this.snake.positionsY[0] === foodY) {
              this.handleEatFood();
            }
          }
        }, {
          key: "draw",
          value: function draw() {
            this.p5.background(255);
            this.food.draw();
            this.snake.draw();
            this.drawBorders();

            if (this.snake.getIsDead()) {
              this.drawGameOverMessage();
            }
          }
        }, {
          key: "handleEatFood",
          value: function handleEatFood() {
            var _this$food$getPositio3 = this.food.getPosition(),
                _this$food$getPositio4 = _slicedToArray(_this$food$getPositio3, 2),
                foodX = _this$food$getPositio4[0],
                foodY = _this$food$getPositio4[1];

            this.snake.grow();
            this.food.randomMove();

            while (true) {
              var appleMisplaced = false;

              for (var i = 0; i < this.snake.getSize(); i++) {
                var _this$food$getPositio5 = this.food.getPosition();

                var _this$food$getPositio6 = _slicedToArray(_this$food$getPositio5, 2);

                foodX = _this$food$getPositio6[0];
                foodY = _this$food$getPositio6[1];

                if (this.snake.positionsX[i] === foodX && this.snake.positionsY[i] === foodY) {
                  appleMisplaced = true;
                  break;
                }
              }

              if (!appleMisplaced) {
                break;
              }

              this.food.randomMove();
            }
          }
        }, {
          key: "drawBorders",
          value: function drawBorders() {
            this.p5.push();
            this.p5.noFill();
            this.p5.strokeWeight(2 * _config__WEBPACK_IMPORTED_MODULE_2__["Config"].unitLength);
            this.p5.rect(0, 0, this.width, this.height);
            this.p5.pop();
          }
        }, {
          key: "drawGameOverMessage",
          value: function drawGameOverMessage() {
            this.p5.push();
            this.p5.fill(0);
            this.p5.textSize(30);
            this.p5.text('yuo died', 64, 80);
            this.p5.text('score: ' + (this.snake.getSize() - 3), 64, 120);
            this.p5.text('ctrl+r to restart', 64, 160);
            this.p5.pop();
          }
        }]);

        return SnakeSketch;
      }();
      /***/

    },

    /***/
    "Z9KH":
    /*!********************************************************!*\
      !*** ./src/app/sketches/platformer/entities/entity.ts ***!
      \********************************************************/

    /*! exports provided: Entity */

    /***/
    function Z9KH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Entity", function () {
        return Entity;
      });

      var Entity = /*#__PURE__*/function () {
        function Entity(p5, x, y, vx, vy, width, height) {
          _classCallCheck(this, Entity);

          this.p5 = p5;
          var _ref5 = [x, y];
          this.x = _ref5[0];
          this.y = _ref5[1];
          var _ref6 = [vx, vy];
          this.vx = _ref6[0];
          this.vy = _ref6[1];
          this.width = width;
          this.height = height;
        }

        _createClass(Entity, [{
          key: "isCollidingWith",
          value: function isCollidingWith(entity) {
            if (this.x + this.width < entity.x || this.x > entity.x + entity.width) {
              return false;
            }

            return !(this.y + this.height < entity.y || this.y > entity.y + entity.height);
          }
        }, {
          key: "nextPosition",
          value: function nextPosition() {
            return [this.x + this.vx, this.y + this.vy];
          }
        }, {
          key: "getX",
          value: function getX() {
            return this.x;
          }
        }, {
          key: "getY",
          value: function getY() {
            return this.y;
          }
        }, {
          key: "getVelX",
          value: function getVelX() {
            return this.vx;
          }
        }, {
          key: "getVelY",
          value: function getVelY() {
            return this.vy;
          }
        }, {
          key: "getWidth",
          value: function getWidth() {
            return this.width;
          }
        }, {
          key: "getHeight",
          value: function getHeight() {
            return this.height;
          }
        }, {
          key: "setX",
          value: function setX(x) {
            this.x = x;
          }
        }, {
          key: "setY",
          value: function setY(y) {
            this.y = y;
          }
        }, {
          key: "setVelY",
          value: function setVelY(vy) {
            this.vy = vy;
          }
        }]);

        return Entity;
      }();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _components_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/canvas/canvas.component */
      "Bpjv");
      /* harmony import */


      var _components_sketch_details_sketch_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/sketch-details/sketch-details.component */
      "k1G3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _components_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_3__["CanvasComponent"], _components_sketch_details_sketch_details_component__WEBPACK_IMPORTED_MODULE_4__["SketchDetailsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]]
        });
      })();
      /***/

    },

    /***/
    "gHId":
    /*!*****************************************!*\
      !*** ./src/app/sketches/pong/paddle.ts ***!
      \*****************************************/

    /*! exports provided: Paddle */

    /***/
    function gHId(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Paddle", function () {
        return Paddle;
      });
      /* harmony import */


      var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./config */
      "+nqH");
      /* harmony import */


      var _ball__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ball */
      "F6rN");

      var Paddle = /*#__PURE__*/function () {
        function Paddle(p5, x, ball) {
          var isAutomatic = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

          _classCallCheck(this, Paddle);

          this.p5 = p5;
          this.x = x;
          this.y = (_config__WEBPACK_IMPORTED_MODULE_0__["Config"].height - Paddle.height) / 2;
          this.ball = ball;
          this.isAutomatic = isAutomatic;
          this.direction = 0;
        }

        _createClass(Paddle, [{
          key: "update",
          value: function update() {
            if (this.isAutomatic) {
              this.handleAutomaticControl();
            }

            this.y = Math.min(_config__WEBPACK_IMPORTED_MODULE_0__["Config"].height - Paddle.height, Math.max(0, this.y + Paddle.speed * this.direction));
            this.notifyBalls();
          }
        }, {
          key: "draw",
          value: function draw() {
            this.p5.rect(this.x, this.y, Paddle.width, Paddle.height);
          }
        }, {
          key: "keyPressListener",
          value: function keyPressListener() {
            var key = this.p5.key.toUpperCase();

            if (!this.isAutomatic) {
              if (key === 'W') {
                this.setDirection(-1);
              } else if (key === 'S') {
                this.setDirection(1);
              }
            }
          }
        }, {
          key: "keyReleaseListener",
          value: function keyReleaseListener() {
            var key = this.p5.key.toUpperCase();

            if (!this.isAutomatic) {
              if (key === 'W' && this.getDirection() === -1) {
                this.setDirection(0);
              } else if (key === 'S' && this.getDirection() === 1) {
                this.setDirection(0);
              }
            }
          }
        }, {
          key: "handleAutomaticControl",
          value: function handleAutomaticControl() {
            var isBallNotApproaching = (this.x - this.ball.getX()) * this.ball.getHorizontalDirection() < 0;
            var dy = this.getY() + Paddle.height / 2 - this.ball.getY();

            if (-Paddle.speed / 2 < dy && dy < Paddle.speed / 2 || isBallNotApproaching) {
              this.setDirection(0);
            } else if (dy > Paddle.speed / 2) {
              this.setDirection(-1);
            } else {
              this.setDirection(1);
            }
          }
        }, {
          key: "notifyBalls",
          value: function notifyBalls() {
            if (this.contains(this.ball.getX(), this.ball.getY())) {
              if (this.bounceSound) {
                this.bounceSound.play();
              }

              this.ball.setPosition(this.ball.getX() - _ball__WEBPACK_IMPORTED_MODULE_1__["Ball"].speed * this.ball.getHorizontalDirection(), this.ball.getY());
              var t = 2 * (this.ball.getY() - this.getY() - Paddle.height / 2) / Paddle.height;
              var angle = Math.atan(t * _config__WEBPACK_IMPORTED_MODULE_0__["Config"].maxBounceAngle);
              this.ball.setDirection(-Math.sign(this.ball.getHorizontalDirection()) * Math.cos(angle), Math.sin(angle));
            }
          }
        }, {
          key: "contains",
          value: function contains(x, y) {
            var withinRangeX = this.x <= x && x <= this.x + Paddle.width;
            var withinRangeY = this.y <= y && y <= this.y + Paddle.height;
            return withinRangeX && withinRangeY;
          }
        }, {
          key: "getY",
          value: function getY() {
            return this.y;
          }
        }, {
          key: "getDirection",
          value: function getDirection() {
            return this.direction;
          }
        }, {
          key: "setDirection",
          value: function setDirection(dir) {
            this.direction = dir;
          }
        }, {
          key: "setBounceSound",
          value: function setBounceSound(bounceSound) {
            this.bounceSound = bounceSound;
          }
        }]);

        return Paddle;
      }();

      Paddle.width = 12;
      Paddle.height = 80;
      Paddle.speed = 6;
      /***/
    },

    /***/
    "k1G3":
    /*!***********************************************************************!*\
      !*** ./src/app/components/sketch-details/sketch-details.component.ts ***!
      \***********************************************************************/

    /*! exports provided: SketchDetailsComponent */

    /***/
    function k1G3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SketchDetailsComponent", function () {
        return SketchDetailsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function SketchDetailsComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.sketchMetadata.displayName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.sketchMetadata.description);
        }
      }

      var SketchDetailsComponent = /*#__PURE__*/function () {
        function SketchDetailsComponent() {
          _classCallCheck(this, SketchDetailsComponent);
        }

        _createClass(SketchDetailsComponent, [{
          key: "imagePath",
          get: function get() {
            if (this.sketchMetadata !== undefined) {
              return '/assets/' + this.sketchMetadata.id + '/' + this.sketchMetadata.id + '.png';
            } else {
              return "";
            }
          }
        }]);

        return SketchDetailsComponent;
      }();

      SketchDetailsComponent.ɵfac = function SketchDetailsComponent_Factory(t) {
        return new (t || SketchDetailsComponent)();
      };

      SketchDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SketchDetailsComponent,
        selectors: [["sketch-details"]],
        inputs: {
          sketchMetadata: "sketchMetadata"
        },
        decls: 1,
        vars: 1,
        consts: [["class", "sketch-details-container", 4, "ngIf"], [1, "sketch-details-container"], ["alt", "", 1, "sketch-image", 3, "src"], [1, "details"]],
        template: function SketchDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SketchDetailsComponent_div_0_Template, 7, 3, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sketchMetadata);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: [".sketch-details-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 32rem;\n  height: 12rem;\n  margin-bottom: 2rem;\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n  transition: 0.3s;\n}\n\n.sketch-details-container[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);\n  cursor: pointer;\n}\n\n.sketch-image[_ngcontent-%COMP%] {\n  width: 40%;\n  height: 100%;\n}\n\n.details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin-left: 2rem;\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNrZXRjaC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVDQUF1QztFQUN2QyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsVUFBVTtBQUNaIiwiZmlsZSI6InNrZXRjaC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2tldGNoLWRldGFpbHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDMycmVtO1xuICBoZWlnaHQ6IDEycmVtO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMik7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5za2V0Y2gtZGV0YWlscy1jb250YWluZXI6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuNSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNrZXRjaC1pbWFnZSB7XG4gIHdpZHRoOiA0MCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmRldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xuICB3aWR0aDogNTAlO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "lwCd":
    /*!**********************************************************!*\
      !*** ./src/app/sketches/platformer/platformer-sketch.ts ***!
      \**********************************************************/

    /*! exports provided: PlatformerSketch */

    /***/
    function lwCd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlatformerSketch", function () {
        return PlatformerSketch;
      });
      /* harmony import */


      var p5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! p5 */
      "I335");
      /* harmony import */


      var p5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(p5__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var p5_lib_addons_p5_sound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! p5/lib/addons/p5.sound */
      "5heZ");
      /* harmony import */


      var p5_lib_addons_p5_sound__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(p5_lib_addons_p5_sound__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _util_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./util/global */
      "DQkd");
      /* harmony import */


      var _pages_start_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pages/start-menu */
      "1q77");
      /* harmony import */


      var _sketch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../sketch */
      "PGSK");

      var PlatformerSketch = /*#__PURE__*/function () {
        function PlatformerSketch(p5) {
          _classCallCheck(this, PlatformerSketch);

          this.p5 = p5;
          this.controlMap = new Map([['left', 'A'], ['right', 'D'], ['jump', 'W'], ['drop', 'S'], ['pause', 'ESCAPE']]);
        }

        _createClass(PlatformerSketch, [{
          key: "preload",
          value: function preload() {
            this.fontFace = this.p5.loadFont('assets/platformer/inconsolata.otf');
            this.spriteSheet = this.p5.loadImage('/assets/platformer/spritesheet.png');
            this.soundMap = new Map([['click', new p5__WEBPACK_IMPORTED_MODULE_0__["SoundFile"]('/assets/platformer/click.mp3')], ['pause', new p5__WEBPACK_IMPORTED_MODULE_0__["SoundFile"]('/assets/platformer/pause.mp3')], ['jump', new p5__WEBPACK_IMPORTED_MODULE_0__["SoundFile"]('/assets/platformer/jump.mp3')], ['land', new p5__WEBPACK_IMPORTED_MODULE_0__["SoundFile"]('/assets/platformer/land.mp3')]]);
          }
        }, {
          key: "setup",
          value: function setup() {
            var canvas = this.p5.createCanvas(_util_global__WEBPACK_IMPORTED_MODULE_2__["Global"].width, _util_global__WEBPACK_IMPORTED_MODULE_2__["Global"].height);
            canvas.parent(_sketch__WEBPACK_IMPORTED_MODULE_4__["sketchHolderId"]);
            this.p5.textFont(this.fontFace);
            this.p5.frameRate(60);
            this.page = new _pages_start_menu__WEBPACK_IMPORTED_MODULE_3__["StartMenu"](this.p5, this);
          }
        }, {
          key: "mouseMoveListener",
          value: function mouseMoveListener() {
            this.page.mouseMoveListener();
          }
        }, {
          key: "mouseClickListener",
          value: function mouseClickListener() {
            this.page.mouseClickListener();
          }
        }, {
          key: "keyPressListener",
          value: function keyPressListener() {
            this.page.keyPressListener();
          }
        }, {
          key: "keyReleaseListener",
          value: function keyReleaseListener() {
            this.page.keyReleaseListener();
          }
        }, {
          key: "draw",
          value: function draw() {
            this.page.draw();
          }
        }, {
          key: "update",
          value: function update() {
            this.page.update();
          }
        }, {
          key: "playSound",
          value: function playSound(id) {
            if (!this.soundMap) {
              return;
            }

            var sound = this.soundMap.get(id);

            if (!sound) {
              return;
            }

            sound.play();
          }
        }, {
          key: "getPage",
          value: function getPage() {
            return this.page;
          }
        }, {
          key: "getKeyBinding",
          value: function getKeyBinding(control) {
            var key = this.controlMap.get(control);

            if (!key) {
              throw new Error('no such control exists');
            }

            return key;
          }
        }, {
          key: "getSpriteSheet",
          value: function getSpriteSheet() {
            return this.spriteSheet;
          }
        }, {
          key: "setPage",
          value: function setPage(page) {
            this.page = page;
          }
        }, {
          key: "setKeyBinding",
          value: function setKeyBinding(control, newKey) {
            this.controlMap.set(control, newKey);
          }
        }]);

        return PlatformerSketch;
      }();
      /***/

    },

    /***/
    "otMh":
    /*!**********************************************!*\
      !*** ./src/app/sketches/pong/pong-sketch.ts ***!
      \**********************************************/

    /*! exports provided: PongSketch */

    /***/
    function otMh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PongSketch", function () {
        return PongSketch;
      });
      /* harmony import */


      var p5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! p5 */
      "I335");
      /* harmony import */


      var p5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(p5__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var p5_lib_addons_p5_sound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! p5/lib/addons/p5.sound */
      "5heZ");
      /* harmony import */


      var p5_lib_addons_p5_sound__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(p5_lib_addons_p5_sound__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./config */
      "+nqH");
      /* harmony import */


      var _paddle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./paddle */
      "gHId");
      /* harmony import */


      var _ball__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./ball */
      "F6rN");
      /* harmony import */


      var _sketch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../sketch */
      "PGSK");

      var PongSketch = /*#__PURE__*/function () {
        function PongSketch(p5) {
          _classCallCheck(this, PongSketch);

          this.p5 = p5;
          this.width = _config__WEBPACK_IMPORTED_MODULE_2__["Config"].width;
          this.height = _config__WEBPACK_IMPORTED_MODULE_2__["Config"].height;
          this.ball = new _ball__WEBPACK_IMPORTED_MODULE_4__["Ball"](p5);
          this.player = new _paddle__WEBPACK_IMPORTED_MODULE_3__["Paddle"](p5, _config__WEBPACK_IMPORTED_MODULE_2__["Config"].margin, this.ball, false);
          this.opponent = new _paddle__WEBPACK_IMPORTED_MODULE_3__["Paddle"](p5, _config__WEBPACK_IMPORTED_MODULE_2__["Config"].width - _config__WEBPACK_IMPORTED_MODULE_2__["Config"].margin - _paddle__WEBPACK_IMPORTED_MODULE_3__["Paddle"].width, this.ball);
          this.tally = [0, 0];
          this.countDown = 0;
        }

        _createClass(PongSketch, [{
          key: "preload",
          value: function preload() {
            var soundFile = new p5__WEBPACK_IMPORTED_MODULE_0__["SoundFile"]('/assets/pong/bounce_sound.wav');
            soundFile.setVolume(0.2);
            this.player.setBounceSound(soundFile);
            this.opponent.setBounceSound(soundFile);
          }
        }, {
          key: "setup",
          value: function setup() {
            var canvas = this.p5.createCanvas(this.width, this.height);
            canvas.parent(_sketch__WEBPACK_IMPORTED_MODULE_5__["sketchHolderId"]);
          }
        }, {
          key: "update",
          value: function update() {
            this.handleGameOver();
            this.player.update();
            this.opponent.update();
            this.ball.update();
          }
        }, {
          key: "draw",
          value: function draw() {
            this.p5.push();
            this.drawBackground();
            this.ball.draw();
            this.player.draw();
            this.opponent.draw();

            if (this.countDown > 0) {
              this.p5.push();
              this.p5.fill(255);
              this.p5.textSize(32);
              this.p5.text(this.countDown, _config__WEBPACK_IMPORTED_MODULE_2__["Config"].width / 2 - 9, _config__WEBPACK_IMPORTED_MODULE_2__["Config"].height / 2 - 20);
              this.p5.pop();
            }

            this.p5.pop();
          }
        }, {
          key: "mouseClickListener",
          value: function mouseClickListener() {}
        }, {
          key: "mouseMoveListener",
          value: function mouseMoveListener() {}
        }, {
          key: "keyPressListener",
          value: function keyPressListener() {
            this.player.keyPressListener();
          }
        }, {
          key: "keyReleaseListener",
          value: function keyReleaseListener() {
            this.player.keyReleaseListener();
          }
        }, {
          key: "drawBackground",
          value: function drawBackground() {
            this.p5.push();
            this.p5.background(0);
            this.p5.fill(255);
            this.p5.line(_config__WEBPACK_IMPORTED_MODULE_2__["Config"].width / 2, 0, _config__WEBPACK_IMPORTED_MODULE_2__["Config"].width / 2, _config__WEBPACK_IMPORTED_MODULE_2__["Config"].height);
            this.p5.textSize(32);
            this.p5.text(this.tally[0], 160, 50);
            this.p5.text(this.tally[1], _config__WEBPACK_IMPORTED_MODULE_2__["Config"].width - 180, 50);
            this.p5.pop();
          }
        }, {
          key: "handleGameOver",
          value: function handleGameOver() {
            var _this10 = this;

            if (this.ball.getX() >= 0 && this.ball.getX() + _ball__WEBPACK_IMPORTED_MODULE_4__["Ball"].diameter <= _config__WEBPACK_IMPORTED_MODULE_2__["Config"].width) {
              return;
            }

            if (this.ball.getX() < 0) {
              this.ball.setDirection(1, 0);
              this.tally[1] += 1;
            } else {
              this.ball.setDirection(-1, 0);
              this.tally[0] += 1;
            }

            var nextTx = this.ball.getHorizontalDirection();
            this.ball.setDirection(0, 0);
            this.ball.setPosition(_config__WEBPACK_IMPORTED_MODULE_2__["Config"].width / 2, _config__WEBPACK_IMPORTED_MODULE_2__["Config"].height / 2);
            this.countDown = 3;
            setTimeout(function () {
              _this10.countDown--;
              setTimeout(function () {
                _this10.countDown--;
                setTimeout(function () {
                  _this10.countDown--;

                  _this10.ball.setDirection(nextTx, 0);
                }, 600);
              }, 600);
            }, 600);
          }
        }]);

        return PongSketch;
      }();
      /***/

    },

    /***/
    "qK8h":
    /*!****************************************************!*\
      !*** ./src/app/sketches/platformer/util/camera.ts ***!
      \****************************************************/

    /*! exports provided: Camera */

    /***/
    function qK8h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Camera", function () {
        return Camera;
      });

      var Camera = /*#__PURE__*/function () {
        function Camera(centerX, centerY, leftBound, rightBound, topBound, bottomBound) {
          _classCallCheck(this, Camera);

          this.centerX = centerX;
          this.centerY = centerY;
          this.leftBound = leftBound;
          this.rightBound = rightBound;
          this.topBound = topBound;
          this.bottomBound = bottomBound;
          this.x = centerX;
          this.y = centerY;
        }

        _createClass(Camera, [{
          key: "update",
          value: function update(focusX, focusY) {
            this.x = Math.min(this.rightBound - 2 * this.centerX, Math.max(this.leftBound, focusX - this.centerX));
            this.y = Math.min(this.bottomBound - 2 * this.centerY, Math.max(this.topBound, focusY - this.centerY));
          }
        }, {
          key: "adjustBoundary",
          value: function adjustBoundary(leftBound, rightBound, topBound, bottomBound) {
            this.leftBound = leftBound;
            this.rightBound = rightBound;
            this.topBound = topBound;
            this.bottomBound = bottomBound;
          }
        }, {
          key: "shift",
          value: function shift(x, y) {
            return [x - this.x, y - this.y];
          }
        }]);

        return Camera;
      }();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/canvas/canvas.component */
      "Bpjv");
      /* harmony import */


      var _sketches_sketch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sketches/sketch */
      "PGSK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        redirectTo: '/' + _sketches_sketch__WEBPACK_IMPORTED_MODULE_2__["SketchName"].platformer,
        pathMatch: 'full'
      }, {
        path: ':id',
        component: _components_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_1__["CanvasComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "x2Ws":
    /*!******************************************************!*\
      !*** ./src/app/sketches/platformer/util/game-map.ts ***!
      \******************************************************/

    /*! exports provided: GameMap */

    /***/
    function x2Ws(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GameMap", function () {
        return GameMap;
      });
      /* harmony import */


      var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./global */
      "DQkd");

      var GameMap = /*#__PURE__*/function () {
        function GameMap(p5, data, spriteSheet) {
          _classCallCheck(this, GameMap);

          this.p5 = p5;
          this.data = data;
          this.spriteSheet = spriteSheet;
        }

        _createClass(GameMap, [{
          key: "draw",
          value: function draw() {
            for (var i = 0; i < this.data.getNumRows(); i++) {
              for (var j = 0; j < this.data.getNumCols(); j++) {
                this.drawTile(this.data.getTile(i, j), i, j);
              }
            }
          }
        }, {
          key: "drawTile",
          value: function drawTile(tile, i, j) {
            var _global__WEBPACK_IMPO = _global__WEBPACK_IMPORTED_MODULE_0__["Global"].camera.shift(j * _global__WEBPACK_IMPORTED_MODULE_0__["Global"].unitLength, i * _global__WEBPACK_IMPORTED_MODULE_0__["Global"].unitLength),
                _global__WEBPACK_IMPO2 = _slicedToArray(_global__WEBPACK_IMPO, 2),
                x = _global__WEBPACK_IMPO2[0],
                y = _global__WEBPACK_IMPO2[1];

            var sx = tile % 48 * 16 + 0.5;
            var sy = Math.floor(tile / 48) * 16 + 0.5;
            this.p5.image(this.spriteSheet, x, y, _global__WEBPACK_IMPORTED_MODULE_0__["Global"].unitLength, _global__WEBPACK_IMPORTED_MODULE_0__["Global"].unitLength, sx, sy, 15, 15);
          }
        }, {
          key: "respawnEnemies",
          value: function respawnEnemies() {
            console.log('reviving enemies');
          }
        }, {
          key: "isSolidAt",
          value: function isSolidAt(i, j) {
            if (!this.data.isIdxWithinBounds(i, j)) {
              return false;
            }

            return _global__WEBPACK_IMPORTED_MODULE_0__["Global"].solidSet.has(this.data.getTile(i, j));
          }
        }, {
          key: "isPlatformAt",
          value: function isPlatformAt(i, j) {
            if (!this.data.isIdxWithinBounds(i, j)) {
              return false;
            }

            return _global__WEBPACK_IMPORTED_MODULE_0__["Global"].platformSet.has(this.data.getTile(i, j));
          }
        }, {
          key: "getData",
          value: function getData() {
            return this.data;
          }
        }, {
          key: "setDataToLeftMap",
          value: function setDataToLeftMap() {
            var mapData = this.data.getLeftMap();

            if (mapData == null) {
              throw new Error('Left map data does not exist');
            }

            this.data = mapData;
          }
        }, {
          key: "setDataToRightMap",
          value: function setDataToRightMap() {
            var mapData = this.data.getRightMap();

            if (mapData == null) {
              throw new Error('Right map data does not exist');
            }

            this.data = mapData;
          }
        }]);

        return GameMap;
      }();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    },

    /***/
    "zzOR":
    /*!*****************************!*\
      !*** ./src/app/messages.ts ***!
      \*****************************/

    /*! exports provided: Messages */

    /***/
    function zzOR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Messages", function () {
        return Messages;
      });

      var Messages = function Messages() {
        _classCallCheck(this, Messages);

        this.coolGames = "Cool Games";
        this.platformer = "Platformer";
        this.platformerDescription = "A prototype for a side-scrolling platform game.";
        this.pong = "Pong";
        this.pongDescription = "The classic arcade Pong game.";
        this.snake = "Snake";
        this.snakeDescription = "The classic arcade snake game.";
      };
      /***/

    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map