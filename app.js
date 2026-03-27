var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

//http://localhost:8080/javascript/React/kodbazis2026/10/
//

function App() {
    var _React$useState = React.useState([]),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        items = _React$useState2[0],
        setItems = _React$useState2[1];

    React.useEffect(function () {
        //fetch("https://localhost:7169/api/travels", {
		fetch("https://fejlesztooldal.runasp.net/api/travels",{
            method: "GET",
            headers: {
                "token": "dzAAeYvO*HUbppD7jh9Sc",
                "Content-Type": "application/json"
                //"value": ""
            }

        }).then(function (res) {
            return res.ok ? res.json() : [];
        }).then(function (tartalom) {
            return setItems(tartalom);
        });
    }, []);

    console.log(items);

    return React.createElement(
        "div",
        { className: "container" },
        React.createElement(
            "div",
            { className: "row m-5 border p-5" },
            React.createElement(ListaKomponens, { elemek: items })
        )
    );
}

var ListaKomponens = function ListaKomponens(_ref) {
    var elemek = _ref.elemek;
    return React.createElement(
        "ul",
        null,
        elemek.map(function (elem) {
            return React.createElement(
                "li",
                { key: elem.id, className: "list-group-item" },
                elem.name,
                React.createElement("img", { src: "https://fejlesztooldal.runasp.net/" + elem.travelPictureUrl })
            );
        })
    );
};

//const kell =


var root = ReactDOM.createRoot(document.getElementById("app-container"));
root.render(React.createElement(App));