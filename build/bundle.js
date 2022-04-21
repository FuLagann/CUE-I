var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("UIEvent", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UIAction = exports.UIEvent = void 0;
    var UIEvent = /** @class */ (function () {
        function UIEvent() {
            this.subscribers = [];
        }
        UIEvent.prototype.Invoke = function (state) {
            if (state === void 0) { state = undefined; }
            this.subscribers.forEach(function (sub) { return sub(state); });
        };
        UIEvent.prototype.Subscribe = function (subscriber) {
            this.subscribers.push(subscriber);
        };
        UIEvent.prototype.Unsubscribe = function (subscriber) {
            var index = this.subscribers.indexOf(subscriber);
            if (index == -1) {
                return;
            }
            this.subscribers.splice(index, 1);
        };
        UIEvent.prototype.UnsubscribeAll = function () {
            this.subscribers.splice(0, this.subscribers.length);
        };
        return UIEvent;
    }());
    exports.UIEvent = UIEvent;
    var UIAction = /** @class */ (function (_super) {
        __extends(UIAction, _super);
        function UIAction() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return UIAction;
    }(UIEvent));
    exports.UIAction = UIAction;
});
define("UIElement", ["require", "exports", "UIEvent"], function (require, exports, UIEvent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UIElement = void 0;
    var UIElement = /** @class */ (function () {
        function UIElement() {
            this.LoadEvent = new UIEvent_1.UIAction();
        }
        UIElement.prototype.OnLoad = function () { this.LoadEvent.Invoke(); };
        return UIElement;
    }());
    exports.UIElement = UIElement;
});
define("load", ["require", "exports", "UIElement"], function (require, exports, UIElement_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    window.addEventListener("load", function () { SetupCanvas(); });
    window.addEventListener("resize", function () { SetupCanvas(); });
    SetupCanvas();
    function SetupCanvas() {
        // Set up the canvas
        var canvas = document.getElementById("main-canvas");
        if (!canvas) {
            console.log("Could not find canvas");
            return;
        }
        canvas.style.width = "".concat(window.innerWidth, "px");
        canvas.style.height = "".concat(window.innerHeight, "px");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        var context = canvas.getContext("2d");
        if (!context) {
            return;
        }
        context.fillStyle = "black";
        context.fillRect(10, 10, 200, 300);
        var a = new UIElement_1.UIElement();
        a.LoadEvent.Subscribe(test);
        a.LoadEvent.Subscribe(function () { console.log("???"); });
        a.OnLoad();
        a.LoadEvent.UnsubscribeAll();
        a.OnLoad();
    }
    function test() {
        console.log("SAFSDF");
    }
});
