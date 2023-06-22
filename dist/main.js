"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["main"],{

/***/ "./modules/addScore.js":
/*!*****************************!*\
  !*** ./modules/addScore.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const addScore = (scores) => {
  // Create elements
  const divContainer = document.createElement('div');
  const pName = document.createElement('p');
  const pScore = document.createElement('p');

  // Add classes and content
  divContainer.classList.add('scores');
  pName.textContent = `${scores.user}: `;
  pScore.textContent = scores.score;

  // Append elements
  divContainer.appendChild(pName);
  divContainer.appendChild(pScore);
  document.getElementById('scores-container').appendChild(divContainer);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addScore);

/***/ }),

/***/ "./modules/constructor.js":
/*!********************************!*\
  !*** ./modules/constructor.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Score)
/* harmony export */ });
function Score(name, score) {
  this.user = name;
  this.score = score;
}


/***/ }),

/***/ "./modules/elements.js":
/*!*****************************!*\
  !*** ./modules/elements.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   form: () => (/* binding */ form),
/* harmony export */   inputName: () => (/* binding */ inputName),
/* harmony export */   inputScore: () => (/* binding */ inputScore),
/* harmony export */   refreshButton: () => (/* binding */ refreshButton)
/* harmony export */ });
const inputName = document.getElementById('name');
const inputScore = document.getElementById('score');
const form = document.querySelector('form');
const refreshButton = document.getElementById('refresh-button');



/***/ }),

/***/ "./modules/newScores.js":
/*!******************************!*\
  !*** ./modules/newScores.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor.js */ "./modules/constructor.js");
/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements.js */ "./modules/elements.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.js */ "./modules/storage.js");
/* harmony import */ var _addScore_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addScore.js */ "./modules/addScore.js");





const newScore = async (event) => {
  // If the name and score inputs are not empty.
  if (!_elements_js__WEBPACK_IMPORTED_MODULE_1__.inputName.validity.valueMissing && !_elements_js__WEBPACK_IMPORTED_MODULE_1__.inputScore.validity.valueMissing) {
    event.preventDefault();
    // Creates a new object.
    const myScore = new _constructor_js__WEBPACK_IMPORTED_MODULE_0__["default"](_elements_js__WEBPACK_IMPORTED_MODULE_1__.inputName.value, _elements_js__WEBPACK_IMPORTED_MODULE_1__.inputScore.value);
    // Adds the score to the table.
    (0,_addScore_js__WEBPACK_IMPORTED_MODULE_3__["default"])(myScore);
    try {
      // Save the updated array in the API
      await (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.storage)({ score: myScore.score, user: myScore.user });

      // Resets the form.
      _elements_js__WEBPACK_IMPORTED_MODULE_1__.form.reset();
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newScore);

/***/ }),

/***/ "./modules/storage.js":
/*!****************************!*\
  !*** ./modules/storage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createScores: () => (/* binding */ createScores),
/* harmony export */   storage: () => (/* binding */ storage)
/* harmony export */ });
const createScores = async () => {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Z3iGcEUE1HlerNd8QYix/scores/', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    if (!response.ok) {
      throw new Error('Error at getting the scores');
    }

    // eslint-disable-next-line no-return-await
    return await response.json();
  } catch (error) {
    throw new Error(`${error}`);
  }
};

const storage = async (scores) => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Z3iGcEUE1HlerNd8QYix/scores/', {
    method: 'POST',
    body: JSON.stringify({
      user: scores.user,
      score: scores.score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error at adding the score');
      }
      return response.json();
    })
    .catch((error) => {
      throw new Error(`${error}`);
    });
};



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 2000 1500%27%3E%3Cdefs%3E%3CradialGradient id=%27a%27 gradientUnits=%27objectBoundingBox%27%3E%3Cstop offset=%270%27 stop-color=%27%23FFA702%27/%3E%3Cstop offset=%271%27 stop-color=%27%23930D29%27/%3E%3C/radialGradient%3E%3ClinearGradient id=%27b%27 gradientUnits=%27userSpaceOnUse%27 x1=%270%27 y1=%27750%27 x2=%271550%27 y2=%27750%27%3E%3Cstop offset=%270%27 stop-color=%27%23c95a16%27/%3E%3Cstop offset=%271%27 stop-color=%27%23930D29%27/%3E%3C/linearGradient%3E%3Cpath id=%27s%27 fill=%27url%28%23b%29%27 d=%27M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z%27/%3E%3Cg id=%27g%27%3E%3Cuse href=%27%23s%27 transform=%27scale%280.12%29 rotate%2860%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.2%29 rotate%2810%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.25%29 rotate%2840%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.3%29 rotate%28-20%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.4%29 rotate%28-30%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.5%29 rotate%2820%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.6%29 rotate%2860%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.7%29 rotate%2810%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.835%29 rotate%28-40%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.9%29 rotate%2840%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.05%29 rotate%2825%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.2%29 rotate%288%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.333%29 rotate%28-60%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.45%29 rotate%28-30%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.6%29 rotate%2810%29%27/%3E%3C/g%3E%3C/defs%3E%3Cg %3E%3Cg transform=%27%27%3E%3Ccircle fill=%27url%28%23a%29%27 r=%273000%27/%3E%3Cg opacity=%270.5%27%3E%3Ccircle fill=%27url%28%23a%29%27 r=%272000%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271800%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271700%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271651%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271450%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271250%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271175%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27900%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27750%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27500%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27380%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27250%27/%3E%3C/g%3E%3Cg transform=%27%27%3E%3Cuse href=%27%23g%27 transform=%27rotate%2810%29%27/%3E%3Cuse href=%27%23g%27 transform=%27rotate%28120%29%27/%3E%3Cuse href=%27%23g%27 transform=%27rotate%28240%29%27/%3E%3C/g%3E%3Ccircle fill-opacity=%270.1%27 fill=%27url%28%23a%29%27 r=%273000%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E */ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 2000 1500%27%3E%3Cdefs%3E%3CradialGradient id=%27a%27 gradientUnits=%27objectBoundingBox%27%3E%3Cstop offset=%270%27 stop-color=%27%23FFA702%27/%3E%3Cstop offset=%271%27 stop-color=%27%23930D29%27/%3E%3C/radialGradient%3E%3ClinearGradient id=%27b%27 gradientUnits=%27userSpaceOnUse%27 x1=%270%27 y1=%27750%27 x2=%271550%27 y2=%27750%27%3E%3Cstop offset=%270%27 stop-color=%27%23c95a16%27/%3E%3Cstop offset=%271%27 stop-color=%27%23930D29%27/%3E%3C/linearGradient%3E%3Cpath id=%27s%27 fill=%27url%28%23b%29%27 d=%27M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z%27/%3E%3Cg id=%27g%27%3E%3Cuse href=%27%23s%27 transform=%27scale%280.12%29 rotate%2860%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.2%29 rotate%2810%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.25%29 rotate%2840%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.3%29 rotate%28-20%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.4%29 rotate%28-30%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.5%29 rotate%2820%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.6%29 rotate%2860%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.7%29 rotate%2810%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.835%29 rotate%28-40%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.9%29 rotate%2840%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.05%29 rotate%2825%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.2%29 rotate%288%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.333%29 rotate%28-60%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.45%29 rotate%28-30%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.6%29 rotate%2810%29%27/%3E%3C/g%3E%3C/defs%3E%3Cg %3E%3Cg transform=%27%27%3E%3Ccircle fill=%27url%28%23a%29%27 r=%273000%27/%3E%3Cg opacity=%270.5%27%3E%3Ccircle fill=%27url%28%23a%29%27 r=%272000%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271800%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271700%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271651%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271450%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271250%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271175%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27900%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27750%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27500%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27380%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27250%27/%3E%3C/g%3E%3Cg transform=%27%27%3E%3Cuse href=%27%23g%27 transform=%27rotate%2810%29%27/%3E%3Cuse href=%27%23g%27 transform=%27rotate%28120%29%27/%3E%3Cuse href=%27%23g%27 transform=%27rotate%28240%29%27/%3E%3C/g%3E%3Ccircle fill-opacity=%270.1%27 fill=%27url%28%23a%29%27 r=%273000%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Diphylleia&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  font-family: 'Diphylleia', serif;
}

body {
  min-height: 100vh;
  background-color: #930d29;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-attachment: fixed;
  background-size: cover;
}

h1 {
  text-align: center;
  padding: 30px 0;
}

h3 {
  margin-bottom: 25px;
}

button:hover {
  cursor: pointer;
  box-shadow: 0 0 5px 2px black;
}

#score-section,
#recent-scores {
  display: flex;
  justify-content: space-evenly;
}

#left-container,
#right-container,
form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

#score-section {
  flex-direction: column;
  gap: 50px;
  align-items: center;
  padding: 30px 10px;
  box-shadow: 0 0 0 5px #020202;
  min-height: 100vh;
}

.scores {
  display: flex;
  padding: 10px 10px;
  gap: 10px;
  font-weight: bolder;
}

.scores:nth-child(even) {
  background-color: #af0734;
}

#left-container {
  width: 90%;
  max-width: 400px;
}

#scores-container {
  border: 2px solid black;
  border-radius: 10px;
}

#recent-scores {
  justify-content: space-between;
  margin-bottom: 20px;
}

#right-container {
  justify-content: flex-start;
  align-items: flex-start;
}

form {
  gap: 20px;
}

form input {
  padding: 5px 10px;
  font-weight: bolder;
  outline: none;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.8);
  border: 2px solid black;
}

#submit-button,
#refresh-button {
  align-self: flex-end;
  padding: 10px 20px;
  border-radius: 10px 0 10px 10px;
  border: 2px solid black;
  font-weight: bolder;
  background: none;
  transition: all 0.5s ease-in-out;
}

@media only screen and (min-width: 768px) {
  h1 {
    font-size: 2.3em;
  }

  #score-section {
    flex-direction: row;
    align-items: flex-start;
    font-size: 1.3em;
  }

  form input,
  #submit-button,
  #refresh-button {
    font-size: 1em;
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,gCAAgC;AAClC;;AAEA;EACE,iBAAiB;EACjB,yBAAyB;EACzB,yDAAoxF;EACpxF,4BAA4B;EAC5B,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,6BAA6B;AAC/B;;AAEA;;EAEE,aAAa;EACb,6BAA6B;AAC/B;;AAEA;;;EAGE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;AAC/B;;AAEA;EACE,sBAAsB;EACtB,SAAS;EACT,mBAAmB;EACnB,kBAAkB;EAClB,6BAA6B;EAC7B,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,2BAA2B;EAC3B,uBAAuB;AACzB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,aAAa;EACb,kBAAkB;EAClB,0CAA0C;EAC1C,uBAAuB;AACzB;;AAEA;;EAEE,oBAAoB;EACpB,kBAAkB;EAClB,+BAA+B;EAC/B,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;EAChB,gCAAgC;AAClC;;AAEA;EACE;IACE,gBAAgB;EAClB;;EAEA;IACE,mBAAmB;IACnB,uBAAuB;IACvB,gBAAgB;EAClB;;EAEA;;;IAGE,cAAc;EAChB;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Diphylleia&display=swap');\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: 'Diphylleia', serif;\r\n}\r\n\r\nbody {\r\n  min-height: 100vh;\r\n  background-color: #930d29;\r\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3CradialGradient id='a' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%23FFA702'/%3E%3Cstop offset='1' stop-color='%23930D29'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'%3E%3Cstop offset='0' stop-color='%23c95a16'/%3E%3Cstop offset='1' stop-color='%23930D29'/%3E%3C/linearGradient%3E%3Cpath id='s' fill='url(%23b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z'/%3E%3Cg id='g'%3E%3Cuse href='%23s' transform='scale(0.12) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.2) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.25) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(0.3) rotate(-20)'/%3E%3Cuse href='%23s' transform='scale(0.4) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(0.5) rotate(20)'/%3E%3Cuse href='%23s' transform='scale(0.6) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.7) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.835) rotate(-40)'/%3E%3Cuse href='%23s' transform='scale(0.9) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(1.05) rotate(25)'/%3E%3Cuse href='%23s' transform='scale(1.2) rotate(8)'/%3E%3Cuse href='%23s' transform='scale(1.333) rotate(-60)'/%3E%3Cuse href='%23s' transform='scale(1.45) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(1.6) rotate(10)'/%3E%3C/g%3E%3C/defs%3E%3Cg %3E%3Cg transform=''%3E%3Ccircle fill='url(%23a)' r='3000'/%3E%3Cg opacity='0.5'%3E%3Ccircle fill='url(%23a)' r='2000'/%3E%3Ccircle fill='url(%23a)' r='1800'/%3E%3Ccircle fill='url(%23a)' r='1700'/%3E%3Ccircle fill='url(%23a)' r='1651'/%3E%3Ccircle fill='url(%23a)' r='1450'/%3E%3Ccircle fill='url(%23a)' r='1250'/%3E%3Ccircle fill='url(%23a)' r='1175'/%3E%3Ccircle fill='url(%23a)' r='900'/%3E%3Ccircle fill='url(%23a)' r='750'/%3E%3Ccircle fill='url(%23a)' r='500'/%3E%3Ccircle fill='url(%23a)' r='380'/%3E%3Ccircle fill='url(%23a)' r='250'/%3E%3C/g%3E%3Cg transform=''%3E%3Cuse href='%23g' transform='rotate(10)'/%3E%3Cuse href='%23g' transform='rotate(120)'/%3E%3Cuse href='%23g' transform='rotate(240)'/%3E%3C/g%3E%3Ccircle fill-opacity='0.1' fill='url(%23a)' r='3000'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  padding: 30px 0;\r\n}\r\n\r\nh3 {\r\n  margin-bottom: 25px;\r\n}\r\n\r\nbutton:hover {\r\n  cursor: pointer;\r\n  box-shadow: 0 0 5px 2px black;\r\n}\r\n\r\n#score-section,\r\n#recent-scores {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n#left-container,\r\n#right-container,\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n}\r\n\r\n#score-section {\r\n  flex-direction: column;\r\n  gap: 50px;\r\n  align-items: center;\r\n  padding: 30px 10px;\r\n  box-shadow: 0 0 0 5px #020202;\r\n  min-height: 100vh;\r\n}\r\n\r\n.scores {\r\n  display: flex;\r\n  padding: 10px 10px;\r\n  gap: 10px;\r\n  font-weight: bolder;\r\n}\r\n\r\n.scores:nth-child(even) {\r\n  background-color: #af0734;\r\n}\r\n\r\n#left-container {\r\n  width: 90%;\r\n  max-width: 400px;\r\n}\r\n\r\n#scores-container {\r\n  border: 2px solid black;\r\n  border-radius: 10px;\r\n}\r\n\r\n#recent-scores {\r\n  justify-content: space-between;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n#right-container {\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n}\r\n\r\nform {\r\n  gap: 20px;\r\n}\r\n\r\nform input {\r\n  padding: 5px 10px;\r\n  font-weight: bolder;\r\n  outline: none;\r\n  border-radius: 5px;\r\n  background-color: rgba(255, 255, 255, 0.8);\r\n  border: 2px solid black;\r\n}\r\n\r\n#submit-button,\r\n#refresh-button {\r\n  align-self: flex-end;\r\n  padding: 10px 20px;\r\n  border-radius: 10px 0 10px 10px;\r\n  border: 2px solid black;\r\n  font-weight: bolder;\r\n  background: none;\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n  h1 {\r\n    font-size: 2.3em;\r\n  }\r\n\r\n  #score-section {\r\n    flex-direction: row;\r\n    align-items: flex-start;\r\n    font-size: 1.3em;\r\n  }\r\n\r\n  form input,\r\n  #submit-button,\r\n  #refresh-button {\r\n    font-size: 1em;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _modules_elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/elements.js */ "./modules/elements.js");
/* harmony import */ var _modules_newScores_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/newScores.js */ "./modules/newScores.js");
/* harmony import */ var _modules_storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/storage.js */ "./modules/storage.js");
/* harmony import */ var _modules_addScore_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/addScore.js */ "./modules/addScore.js");
/* harmony import */ var _assets_puntuacion_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/puntuacion.png */ "./src/assets/puntuacion.png");


// eslint-disable-next-line import/no-named-as-default





// Add web icon
const link = document.createElement('link');
link.href = _assets_puntuacion_png__WEBPACK_IMPORTED_MODULE_5__;
link.rel = 'icon';
document.querySelector('head').appendChild(link);

// Display the scores in the table.
const loadScores = async () => {
  try {
    const scores = await (0,_modules_storage_js__WEBPACK_IMPORTED_MODULE_3__.createScores)();

    scores.result.forEach((obj) => {
      (0,_modules_addScore_js__WEBPACK_IMPORTED_MODULE_4__["default"])(obj);
    });
  } catch (error) {
    throw new Error(`${error}`);
  }
};

loadScores();

_modules_elements_js__WEBPACK_IMPORTED_MODULE_1__.refreshButton.addEventListener('click', () => {
  document.getElementById('scores-container').innerHTML = '';
  loadScores();
});
_modules_elements_js__WEBPACK_IMPORTED_MODULE_1__.form.addEventListener('submit', _modules_newScores_js__WEBPACK_IMPORTED_MODULE_2__["default"]);

/***/ }),

/***/ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 2000 1500%27%3E%3Cdefs%3E%3CradialGradient id=%27a%27 gradientUnits=%27objectBoundingBox%27%3E%3Cstop offset=%270%27 stop-color=%27%23FFA702%27/%3E%3Cstop offset=%271%27 stop-color=%27%23930D29%27/%3E%3C/radialGradient%3E%3ClinearGradient id=%27b%27 gradientUnits=%27userSpaceOnUse%27 x1=%270%27 y1=%27750%27 x2=%271550%27 y2=%27750%27%3E%3Cstop offset=%270%27 stop-color=%27%23c95a16%27/%3E%3Cstop offset=%271%27 stop-color=%27%23930D29%27/%3E%3C/linearGradient%3E%3Cpath id=%27s%27 fill=%27url%28%23b%29%27 d=%27M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z%27/%3E%3Cg id=%27g%27%3E%3Cuse href=%27%23s%27 transform=%27scale%280.12%29 rotate%2860%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.2%29 rotate%2810%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.25%29 rotate%2840%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.3%29 rotate%28-20%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.4%29 rotate%28-30%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.5%29 rotate%2820%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.6%29 rotate%2860%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.7%29 rotate%2810%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.835%29 rotate%28-40%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.9%29 rotate%2840%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.05%29 rotate%2825%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.2%29 rotate%288%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.333%29 rotate%28-60%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.45%29 rotate%28-30%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.6%29 rotate%2810%29%27/%3E%3C/g%3E%3C/defs%3E%3Cg %3E%3Cg transform=%27%27%3E%3Ccircle fill=%27url%28%23a%29%27 r=%273000%27/%3E%3Cg opacity=%270.5%27%3E%3Ccircle fill=%27url%28%23a%29%27 r=%272000%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271800%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271700%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271651%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271450%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271250%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271175%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27900%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27750%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27500%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27380%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27250%27/%3E%3C/g%3E%3Cg transform=%27%27%3E%3Cuse href=%27%23g%27 transform=%27rotate%2810%29%27/%3E%3Cuse href=%27%23g%27 transform=%27rotate%28120%29%27/%3E%3Cuse href=%27%23g%27 transform=%27rotate%28240%29%27/%3E%3C/g%3E%3Ccircle fill-opacity=%270.1%27 fill=%27url%28%23a%29%27 r=%273000%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 2000 1500%27%3E%3Cdefs%3E%3CradialGradient id=%27a%27 gradientUnits=%27objectBoundingBox%27%3E%3Cstop offset=%270%27 stop-color=%27%23FFA702%27/%3E%3Cstop offset=%271%27 stop-color=%27%23930D29%27/%3E%3C/radialGradient%3E%3ClinearGradient id=%27b%27 gradientUnits=%27userSpaceOnUse%27 x1=%270%27 y1=%27750%27 x2=%271550%27 y2=%27750%27%3E%3Cstop offset=%270%27 stop-color=%27%23c95a16%27/%3E%3Cstop offset=%271%27 stop-color=%27%23930D29%27/%3E%3C/linearGradient%3E%3Cpath id=%27s%27 fill=%27url%28%23b%29%27 d=%27M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z%27/%3E%3Cg id=%27g%27%3E%3Cuse href=%27%23s%27 transform=%27scale%280.12%29 rotate%2860%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.2%29 rotate%2810%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.25%29 rotate%2840%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.3%29 rotate%28-20%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.4%29 rotate%28-30%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.5%29 rotate%2820%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.6%29 rotate%2860%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.7%29 rotate%2810%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.835%29 rotate%28-40%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.9%29 rotate%2840%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.05%29 rotate%2825%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.2%29 rotate%288%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.333%29 rotate%28-60%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.45%29 rotate%28-30%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.6%29 rotate%2810%29%27/%3E%3C/g%3E%3C/defs%3E%3Cg %3E%3Cg transform=%27%27%3E%3Ccircle fill=%27url%28%23a%29%27 r=%273000%27/%3E%3Cg opacity=%270.5%27%3E%3Ccircle fill=%27url%28%23a%29%27 r=%272000%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271800%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271700%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271651%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271450%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271250%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271175%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27900%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27750%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27500%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27380%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27250%27/%3E%3C/g%3E%3Cg transform=%27%27%3E%3Cuse href=%27%23g%27 transform=%27rotate%2810%29%27/%3E%3Cuse href=%27%23g%27 transform=%27rotate%28120%29%27/%3E%3Cuse href=%27%23g%27 transform=%27rotate%28240%29%27/%3E%3C/g%3E%3Ccircle fill-opacity=%270.1%27 fill=%27url%28%23a%29%27 r=%273000%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 2000 1500%27%3E%3Cdefs%3E%3CradialGradient id=%27a%27 gradientUnits=%27objectBoundingBox%27%3E%3Cstop offset=%270%27 stop-color=%27%23FFA702%27/%3E%3Cstop offset=%271%27 stop-color=%27%23930D29%27/%3E%3C/radialGradient%3E%3ClinearGradient id=%27b%27 gradientUnits=%27userSpaceOnUse%27 x1=%270%27 y1=%27750%27 x2=%271550%27 y2=%27750%27%3E%3Cstop offset=%270%27 stop-color=%27%23c95a16%27/%3E%3Cstop offset=%271%27 stop-color=%27%23930D29%27/%3E%3C/linearGradient%3E%3Cpath id=%27s%27 fill=%27url%28%23b%29%27 d=%27M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z%27/%3E%3Cg id=%27g%27%3E%3Cuse href=%27%23s%27 transform=%27scale%280.12%29 rotate%2860%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.2%29 rotate%2810%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.25%29 rotate%2840%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.3%29 rotate%28-20%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.4%29 rotate%28-30%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.5%29 rotate%2820%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.6%29 rotate%2860%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.7%29 rotate%2810%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.835%29 rotate%28-40%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%280.9%29 rotate%2840%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.05%29 rotate%2825%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.2%29 rotate%288%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.333%29 rotate%28-60%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.45%29 rotate%28-30%29%27/%3E%3Cuse href=%27%23s%27 transform=%27scale%281.6%29 rotate%2810%29%27/%3E%3C/g%3E%3C/defs%3E%3Cg %3E%3Cg transform=%27%27%3E%3Ccircle fill=%27url%28%23a%29%27 r=%273000%27/%3E%3Cg opacity=%270.5%27%3E%3Ccircle fill=%27url%28%23a%29%27 r=%272000%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271800%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271700%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271651%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271450%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271250%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%271175%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27900%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27750%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27500%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27380%27/%3E%3Ccircle fill=%27url%28%23a%29%27 r=%27250%27/%3E%3C/g%3E%3Cg transform=%27%27%3E%3Cuse href=%27%23g%27 transform=%27rotate%2810%29%27/%3E%3Cuse href=%27%23g%27 transform=%27rotate%28120%29%27/%3E%3Cuse href=%27%23g%27 transform=%27rotate%28240%29%27/%3E%3C/g%3E%3Ccircle fill-opacity=%270.1%27 fill=%27url%28%23a%29%27 r=%273000%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

/***/ }),

/***/ "./src/assets/puntuacion.png":
/*!***********************************!*\
  !*** ./src/assets/puntuacion.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8d41a333880f92334acb.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDRCxzREFBSSw0QkFBNEIsNkRBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbW9kdWxlcy9hZGRTY29yZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbW9kdWxlcy9jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbW9kdWxlcy9lbGVtZW50cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbW9kdWxlcy9uZXdTY29yZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL21vZHVsZXMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhZGRTY29yZSA9IChzY29yZXMpID0+IHtcclxuICAvLyBDcmVhdGUgZWxlbWVudHNcclxuICBjb25zdCBkaXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBwTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBjb25zdCBwU2NvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblxyXG4gIC8vIEFkZCBjbGFzc2VzIGFuZCBjb250ZW50XHJcbiAgZGl2Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Njb3JlcycpO1xyXG4gIHBOYW1lLnRleHRDb250ZW50ID0gYCR7c2NvcmVzLnVzZXJ9OiBgO1xyXG4gIHBTY29yZS50ZXh0Q29udGVudCA9IHNjb3Jlcy5zY29yZTtcclxuXHJcbiAgLy8gQXBwZW5kIGVsZW1lbnRzXHJcbiAgZGl2Q29udGFpbmVyLmFwcGVuZENoaWxkKHBOYW1lKTtcclxuICBkaXZDb250YWluZXIuYXBwZW5kQ2hpbGQocFNjb3JlKTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NvcmVzLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGRpdkNvbnRhaW5lcik7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGRTY29yZTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY29yZShuYW1lLCBzY29yZSkge1xuICB0aGlzLnVzZXIgPSBuYW1lO1xuICB0aGlzLnNjb3JlID0gc2NvcmU7XG59XG4iLCJjb25zdCBpbnB1dE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpO1xyXG5jb25zdCBpbnB1dFNjb3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njb3JlJyk7XHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XHJcbmNvbnN0IHJlZnJlc2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVmcmVzaC1idXR0b24nKTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgaW5wdXROYW1lLCBpbnB1dFNjb3JlLFxyXG4gIGZvcm0sIHJlZnJlc2hCdXR0b24sXHJcbn07IiwiaW1wb3J0IFNjb3JlIGZyb20gJy4vY29uc3RydWN0b3IuanMnO1xyXG5pbXBvcnQgeyBmb3JtLCBpbnB1dE5hbWUsIGlucHV0U2NvcmUgfSBmcm9tICcuL2VsZW1lbnRzLmpzJztcclxuaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZS5qcyc7XHJcbmltcG9ydCBhZGRTY29yZSBmcm9tICcuL2FkZFNjb3JlLmpzJztcclxuXHJcbmNvbnN0IG5ld1Njb3JlID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgLy8gSWYgdGhlIG5hbWUgYW5kIHNjb3JlIGlucHV0cyBhcmUgbm90IGVtcHR5LlxyXG4gIGlmICghaW5wdXROYW1lLnZhbGlkaXR5LnZhbHVlTWlzc2luZyAmJiAhaW5wdXRTY29yZS52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBDcmVhdGVzIGEgbmV3IG9iamVjdC5cclxuICAgIGNvbnN0IG15U2NvcmUgPSBuZXcgU2NvcmUoaW5wdXROYW1lLnZhbHVlLCBpbnB1dFNjb3JlLnZhbHVlKTtcclxuICAgIC8vIEFkZHMgdGhlIHNjb3JlIHRvIHRoZSB0YWJsZS5cclxuICAgIGFkZFNjb3JlKG15U2NvcmUpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gU2F2ZSB0aGUgdXBkYXRlZCBhcnJheSBpbiB0aGUgQVBJXHJcbiAgICAgIGF3YWl0IHN0b3JhZ2UoeyBzY29yZTogbXlTY29yZS5zY29yZSwgdXNlcjogbXlTY29yZS51c2VyIH0pO1xyXG5cclxuICAgICAgLy8gUmVzZXRzIHRoZSBmb3JtLlxyXG4gICAgICBmb3JtLnJlc2V0KCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7ZXJyb3J9YCk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3U2NvcmU7IiwiY29uc3QgY3JlYXRlU2NvcmVzID0gYXN5bmMgKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL3VzLWNlbnRyYWwxLWpzLWNhcHN0b25lLWJhY2tlbmQuY2xvdWRmdW5jdGlvbnMubmV0L2FwaS9nYW1lcy9aM2lHY0VVRTFIbGVyTmQ4UVlpeC9zY29yZXMvJywge1xyXG4gICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvciBhdCBnZXR0aW5nIHRoZSBzY29yZXMnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmV0dXJuLWF3YWl0XHJcbiAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYCR7ZXJyb3J9YCk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3Qgc3RvcmFnZSA9IGFzeW5jIChzY29yZXMpID0+IHtcclxuICBmZXRjaCgnaHR0cHM6Ly91cy1jZW50cmFsMS1qcy1jYXBzdG9uZS1iYWNrZW5kLmNsb3VkZnVuY3Rpb25zLm5ldC9hcGkvZ2FtZXMvWjNpR2NFVUUxSGxlck5kOFFZaXgvc2NvcmVzLycsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICB1c2VyOiBzY29yZXMudXNlcixcclxuICAgICAgc2NvcmU6IHNjb3Jlcy5zY29yZSxcclxuICAgIH0pLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxyXG4gICAgfSxcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yIGF0IGFkZGluZyB0aGUgc2NvcmUnKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2Vycm9yfWApO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBjcmVhdGVTY29yZXMsIHN0b3JhZ2UgfTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0lMjdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyNyB2aWV3Qm94PSUyNzAgMCAyMDAwIDE1MDAlMjclM0UlM0NkZWZzJTNFJTNDcmFkaWFsR3JhZGllbnQgaWQ9JTI3YSUyNyBncmFkaWVudFVuaXRzPSUyN29iamVjdEJvdW5kaW5nQm94JTI3JTNFJTNDc3RvcCBvZmZzZXQ9JTI3MCUyNyBzdG9wLWNvbG9yPSUyNyUyM0ZGQTcwMiUyNy8lM0UlM0NzdG9wIG9mZnNldD0lMjcxJTI3IHN0b3AtY29sb3I9JTI3JTIzOTMwRDI5JTI3LyUzRSUzQy9yYWRpYWxHcmFkaWVudCUzRSUzQ2xpbmVhckdyYWRpZW50IGlkPSUyN2IlMjcgZ3JhZGllbnRVbml0cz0lMjd1c2VyU3BhY2VPblVzZSUyNyB4MT0lMjcwJTI3IHkxPSUyNzc1MCUyNyB4Mj0lMjcxNTUwJTI3IHkyPSUyNzc1MCUyNyUzRSUzQ3N0b3Agb2Zmc2V0PSUyNzAlMjcgc3RvcC1jb2xvcj0lMjclMjNjOTVhMTYlMjcvJTNFJTNDc3RvcCBvZmZzZXQ9JTI3MSUyNyBzdG9wLWNvbG9yPSUyNyUyMzkzMEQyOSUyNy8lM0UlM0MvbGluZWFyR3JhZGllbnQlM0UlM0NwYXRoIGlkPSUyN3MlMjcgZmlsbD0lMjd1cmwlMjglMjNiJTI5JTI3IGQ9JTI3TTE1NDkuMiA1MS42Yy01LjQgOTkuMS0yMC4yIDE5Ny42LTQ0LjIgMjkzLjZjLTI0LjEgOTYtNTcuNCAxODkuNC05OS4zIDI3OC42Yy00MS45IDg5LjItOTIuNCAxNzQuMS0xNTAuMyAyNTMuM2MtNTggNzkuMi0xMjMuNCAxNTIuNi0xOTUuMSAyMTljLTcxLjcgNjYuNC0xNDkuNiAxMjUuOC0yMzIuMiAxNzcuMmMtODIuNyA1MS40LTE3MC4xIDk0LjctMjYwLjcgMTI5LjFjLTkwLjYgMzQuNC0xODQuNCA2MC0yNzkuNSA3Ni4zQzE5Mi42IDE0OTUgOTYuMSAxNTAyIDAgMTUwMGM5Ni4xLTIuMSAxOTEuOC0xMy4zIDI4NS40LTMzLjZjOTMuNi0yMC4yIDE4NS00OS41IDI3Mi41LTg3LjJjODcuNi0zNy43IDE3MS4zLTgzLjggMjQ5LjYtMTM3LjNjNzguNC01My41IDE1MS41LTExNC41IDIxNy45LTE4MS43YzY2LjUtNjcuMiAxMjYuNC0xNDAuNyAxNzguNi0yMTguOWM1Mi4zLTc4LjMgOTYuOS0xNjEuNCAxMzMtMjQ3LjljMzYuMS04Ni41IDYzLjgtMTc2LjIgODIuNi0yNjcuNmMxOC44LTkxLjQgMjguNi0xODQuNCAyOS42LTI3Ny40YzAuMy0yNy42IDIzLjItNDguNyA1MC44LTQ4LjRzNDkuNSAyMS44IDQ5LjIgNDkuNWMwIDAuNyAwIDEuMy0wLjEgMkwxNTQ5LjIgNTEuNnolMjcvJTNFJTNDZyBpZD0lMjdnJTI3JTNFJTNDdXNlIGhyZWY9JTI3JTIzcyUyNyB0cmFuc2Zvcm09JTI3c2NhbGUlMjgwLjEyJTI5IHJvdGF0ZSUyODYwJTI5JTI3LyUzRSUzQ3VzZSBocmVmPSUyNyUyM3MlMjcgdHJhbnNmb3JtPSUyN3NjYWxlJTI4MC4yJTI5IHJvdGF0ZSUyODEwJTI5JTI3LyUzRSUzQ3VzZSBocmVmPSUyNyUyM3MlMjcgdHJhbnNmb3JtPSUyN3NjYWxlJTI4MC4yNSUyOSByb3RhdGUlMjg0MCUyOSUyNy8lM0UlM0N1c2UgaHJlZj0lMjclMjNzJTI3IHRyYW5zZm9ybT0lMjdzY2FsZSUyODAuMyUyOSByb3RhdGUlMjgtMjAlMjklMjcvJTNFJTNDdXNlIGhyZWY9JTI3JTIzcyUyNyB0cmFuc2Zvcm09JTI3c2NhbGUlMjgwLjQlMjkgcm90YXRlJTI4LTMwJTI5JTI3LyUzRSUzQ3VzZSBocmVmPSUyNyUyM3MlMjcgdHJhbnNmb3JtPSUyN3NjYWxlJTI4MC41JTI5IHJvdGF0ZSUyODIwJTI5JTI3LyUzRSUzQ3VzZSBocmVmPSUyNyUyM3MlMjcgdHJhbnNmb3JtPSUyN3NjYWxlJTI4MC42JTI5IHJvdGF0ZSUyODYwJTI5JTI3LyUzRSUzQ3VzZSBocmVmPSUyNyUyM3MlMjcgdHJhbnNmb3JtPSUyN3NjYWxlJTI4MC43JTI5IHJvdGF0ZSUyODEwJTI5JTI3LyUzRSUzQ3VzZSBocmVmPSUyNyUyM3MlMjcgdHJhbnNmb3JtPSUyN3NjYWxlJTI4MC44MzUlMjkgcm90YXRlJTI4LTQwJTI5JTI3LyUzRSUzQ3VzZSBocmVmPSUyNyUyM3MlMjcgdHJhbnNmb3JtPSUyN3NjYWxlJTI4MC45JTI5IHJvdGF0ZSUyODQwJTI5JTI3LyUzRSUzQ3VzZSBocmVmPSUyNyUyM3MlMjcgdHJhbnNmb3JtPSUyN3NjYWxlJTI4MS4wNSUyOSByb3RhdGUlMjgyNSUyOSUyNy8lM0UlM0N1c2UgaHJlZj0lMjclMjNzJTI3IHRyYW5zZm9ybT0lMjdzY2FsZSUyODEuMiUyOSByb3RhdGUlMjg4JTI5JTI3LyUzRSUzQ3VzZSBocmVmPSUyNyUyM3MlMjcgdHJhbnNmb3JtPSUyN3NjYWxlJTI4MS4zMzMlMjkgcm90YXRlJTI4LTYwJTI5JTI3LyUzRSUzQ3VzZSBocmVmPSUyNyUyM3MlMjcgdHJhbnNmb3JtPSUyN3NjYWxlJTI4MS40NSUyOSByb3RhdGUlMjgtMzAlMjklMjcvJTNFJTNDdXNlIGhyZWY9JTI3JTIzcyUyNyB0cmFuc2Zvcm09JTI3c2NhbGUlMjgxLjYlMjkgcm90YXRlJTI4MTAlMjklMjcvJTNFJTNDL2clM0UlM0MvZGVmcyUzRSUzQ2cgJTNFJTNDZyB0cmFuc2Zvcm09JTI3JTI3JTNFJTNDY2lyY2xlIGZpbGw9JTI3dXJsJTI4JTIzYSUyOSUyNyByPSUyNzMwMDAlMjcvJTNFJTNDZyBvcGFjaXR5PSUyNzAuNSUyNyUzRSUzQ2NpcmNsZSBmaWxsPSUyN3VybCUyOCUyM2ElMjklMjcgcj0lMjcyMDAwJTI3LyUzRSUzQ2NpcmNsZSBmaWxsPSUyN3VybCUyOCUyM2ElMjklMjcgcj0lMjcxODAwJTI3LyUzRSUzQ2NpcmNsZSBmaWxsPSUyN3VybCUyOCUyM2ElMjklMjcgcj0lMjcxNzAwJTI3LyUzRSUzQ2NpcmNsZSBmaWxsPSUyN3VybCUyOCUyM2ElMjklMjcgcj0lMjcxNjUxJTI3LyUzRSUzQ2NpcmNsZSBmaWxsPSUyN3VybCUyOCUyM2ElMjklMjcgcj0lMjcxNDUwJTI3LyUzRSUzQ2NpcmNsZSBmaWxsPSUyN3VybCUyOCUyM2ElMjklMjcgcj0lMjcxMjUwJTI3LyUzRSUzQ2NpcmNsZSBmaWxsPSUyN3VybCUyOCUyM2ElMjklMjcgcj0lMjcxMTc1JTI3LyUzRSUzQ2NpcmNsZSBmaWxsPSUyN3VybCUyOCUyM2ElMjklMjcgcj0lMjc5MDAlMjcvJTNFJTNDY2lyY2xlIGZpbGw9JTI3dXJsJTI4JTIzYSUyOSUyNyByPSUyNzc1MCUyNy8lM0UlM0NjaXJjbGUgZmlsbD0lMjd1cmwlMjglMjNhJTI5JTI3IHI9JTI3NTAwJTI3LyUzRSUzQ2NpcmNsZSBmaWxsPSUyN3VybCUyOCUyM2ElMjklMjcgcj0lMjczODAlMjcvJTNFJTNDY2lyY2xlIGZpbGw9JTI3dXJsJTI4JTIzYSUyOSUyNyByPSUyNzI1MCUyNy8lM0UlM0MvZyUzRSUzQ2cgdHJhbnNmb3JtPSUyNyUyNyUzRSUzQ3VzZSBocmVmPSUyNyUyM2clMjcgdHJhbnNmb3JtPSUyN3JvdGF0ZSUyODEwJTI5JTI3LyUzRSUzQ3VzZSBocmVmPSUyNyUyM2clMjcgdHJhbnNmb3JtPSUyN3JvdGF0ZSUyODEyMCUyOSUyNy8lM0UlM0N1c2UgaHJlZj0lMjclMjNnJTI3IHRyYW5zZm9ybT0lMjdyb3RhdGUlMjgyNDAlMjklMjcvJTNFJTNDL2clM0UlM0NjaXJjbGUgZmlsbC1vcGFjaXR5PSUyNzAuMSUyNyBmaWxsPSUyN3VybCUyOCUyM2ElMjklMjcgcj0lMjczMDAwJTI3LyUzRSUzQy9nJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EaXBoeWxsZWlhJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiAnRGlwaHlsbGVpYScsIHNlcmlmO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTMwZDI5O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbmgxIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMzBweCAwO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMCAwIDVweCAycHggYmxhY2s7XHJcbn1cclxuXHJcbiNzY29yZS1zZWN0aW9uLFxyXG4jcmVjZW50LXNjb3JlcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufVxyXG5cclxuI2xlZnQtY29udGFpbmVyLFxyXG4jcmlnaHQtY29udGFpbmVyLFxyXG5mb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbiNzY29yZS1zZWN0aW9uIHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogNTBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDMwcHggMTBweDtcclxuICBib3gtc2hhZG93OiAwIDAgMCA1cHggIzAyMDIwMjtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLnNjb3JlcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuXHJcbi5zY29yZXM6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWYwNzM0O1xyXG59XHJcblxyXG4jbGVmdC1jb250YWluZXIge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuI3Njb3Jlcy1jb250YWluZXIge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbiNyZWNlbnQtc2NvcmVzIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuI3JpZ2h0LWNvbnRhaW5lciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG5mb3JtIHtcclxuICBnYXA6IDIwcHg7XHJcbn1cclxuXHJcbmZvcm0gaW5wdXQge1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4jc3VibWl0LWJ1dHRvbixcclxuI3JlZnJlc2gtYnV0dG9uIHtcclxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCAwIDEwcHggMTBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6IDIuM2VtO1xyXG4gIH1cclxuXHJcbiAgI3Njb3JlLXNlY3Rpb24ge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgZm9udC1zaXplOiAxLjNlbTtcclxuICB9XHJcblxyXG4gIGZvcm0gaW5wdXQsXHJcbiAgI3N1Ym1pdC1idXR0b24sXHJcbiAgI3JlZnJlc2gtYnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gIH1cclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLHlEQUFveEY7RUFDcHhGLDRCQUE0QjtFQUM1QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZiw2QkFBNkI7QUFDL0I7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTs7O0VBR0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsMENBQTBDO0VBQzFDLHVCQUF1QjtBQUN6Qjs7QUFFQTs7RUFFRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0VBQ2xCOztFQUVBOzs7SUFHRSxjQUFjO0VBQ2hCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGlwaHlsbGVpYSZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBmb250LWZhbWlseTogJ0RpcGh5bGxlaWEnLCBzZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5MzBkMjk7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjAwMCAxNTAwJyUzRSUzQ2RlZnMlM0UlM0NyYWRpYWxHcmFkaWVudCBpZD0nYScgZ3JhZGllbnRVbml0cz0nb2JqZWN0Qm91bmRpbmdCb3gnJTNFJTNDc3RvcCBvZmZzZXQ9JzAnIHN0b3AtY29sb3I9JyUyM0ZGQTcwMicvJTNFJTNDc3RvcCBvZmZzZXQ9JzEnIHN0b3AtY29sb3I9JyUyMzkzMEQyOScvJTNFJTNDL3JhZGlhbEdyYWRpZW50JTNFJTNDbGluZWFyR3JhZGllbnQgaWQ9J2InIGdyYWRpZW50VW5pdHM9J3VzZXJTcGFjZU9uVXNlJyB4MT0nMCcgeTE9Jzc1MCcgeDI9JzE1NTAnIHkyPSc3NTAnJTNFJTNDc3RvcCBvZmZzZXQ9JzAnIHN0b3AtY29sb3I9JyUyM2M5NWExNicvJTNFJTNDc3RvcCBvZmZzZXQ9JzEnIHN0b3AtY29sb3I9JyUyMzkzMEQyOScvJTNFJTNDL2xpbmVhckdyYWRpZW50JTNFJTNDcGF0aCBpZD0ncycgZmlsbD0ndXJsKCUyM2IpJyBkPSdNMTU0OS4yIDUxLjZjLTUuNCA5OS4xLTIwLjIgMTk3LjYtNDQuMiAyOTMuNmMtMjQuMSA5Ni01Ny40IDE4OS40LTk5LjMgMjc4LjZjLTQxLjkgODkuMi05Mi40IDE3NC4xLTE1MC4zIDI1My4zYy01OCA3OS4yLTEyMy40IDE1Mi42LTE5NS4xIDIxOWMtNzEuNyA2Ni40LTE0OS42IDEyNS44LTIzMi4yIDE3Ny4yYy04Mi43IDUxLjQtMTcwLjEgOTQuNy0yNjAuNyAxMjkuMWMtOTAuNiAzNC40LTE4NC40IDYwLTI3OS41IDc2LjNDMTkyLjYgMTQ5NSA5Ni4xIDE1MDIgMCAxNTAwYzk2LjEtMi4xIDE5MS44LTEzLjMgMjg1LjQtMzMuNmM5My42LTIwLjIgMTg1LTQ5LjUgMjcyLjUtODcuMmM4Ny42LTM3LjcgMTcxLjMtODMuOCAyNDkuNi0xMzcuM2M3OC40LTUzLjUgMTUxLjUtMTE0LjUgMjE3LjktMTgxLjdjNjYuNS02Ny4yIDEyNi40LTE0MC43IDE3OC42LTIxOC45YzUyLjMtNzguMyA5Ni45LTE2MS40IDEzMy0yNDcuOWMzNi4xLTg2LjUgNjMuOC0xNzYuMiA4Mi42LTI2Ny42YzE4LjgtOTEuNCAyOC42LTE4NC40IDI5LjYtMjc3LjRjMC4zLTI3LjYgMjMuMi00OC43IDUwLjgtNDguNHM0OS41IDIxLjggNDkuMiA0OS41YzAgMC43IDAgMS4zLTAuMSAyTDE1NDkuMiA1MS42eicvJTNFJTNDZyBpZD0nZyclM0UlM0N1c2UgaHJlZj0nJTIzcycgdHJhbnNmb3JtPSdzY2FsZSgwLjEyKSByb3RhdGUoNjApJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgdHJhbnNmb3JtPSdzY2FsZSgwLjIpIHJvdGF0ZSgxMCknLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB0cmFuc2Zvcm09J3NjYWxlKDAuMjUpIHJvdGF0ZSg0MCknLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB0cmFuc2Zvcm09J3NjYWxlKDAuMykgcm90YXRlKC0yMCknLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB0cmFuc2Zvcm09J3NjYWxlKDAuNCkgcm90YXRlKC0zMCknLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB0cmFuc2Zvcm09J3NjYWxlKDAuNSkgcm90YXRlKDIwKScvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHRyYW5zZm9ybT0nc2NhbGUoMC42KSByb3RhdGUoNjApJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgdHJhbnNmb3JtPSdzY2FsZSgwLjcpIHJvdGF0ZSgxMCknLyUzRSUzQ3VzZSBocmVmPSclMjNzJyB0cmFuc2Zvcm09J3NjYWxlKDAuODM1KSByb3RhdGUoLTQwKScvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHRyYW5zZm9ybT0nc2NhbGUoMC45KSByb3RhdGUoNDApJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgdHJhbnNmb3JtPSdzY2FsZSgxLjA1KSByb3RhdGUoMjUpJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgdHJhbnNmb3JtPSdzY2FsZSgxLjIpIHJvdGF0ZSg4KScvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHRyYW5zZm9ybT0nc2NhbGUoMS4zMzMpIHJvdGF0ZSgtNjApJy8lM0UlM0N1c2UgaHJlZj0nJTIzcycgdHJhbnNmb3JtPSdzY2FsZSgxLjQ1KSByb3RhdGUoLTMwKScvJTNFJTNDdXNlIGhyZWY9JyUyM3MnIHRyYW5zZm9ybT0nc2NhbGUoMS42KSByb3RhdGUoMTApJy8lM0UlM0MvZyUzRSUzQy9kZWZzJTNFJTNDZyAlM0UlM0NnIHRyYW5zZm9ybT0nJyUzRSUzQ2NpcmNsZSBmaWxsPSd1cmwoJTIzYSknIHI9JzMwMDAnLyUzRSUzQ2cgb3BhY2l0eT0nMC41JyUzRSUzQ2NpcmNsZSBmaWxsPSd1cmwoJTIzYSknIHI9JzIwMDAnLyUzRSUzQ2NpcmNsZSBmaWxsPSd1cmwoJTIzYSknIHI9JzE4MDAnLyUzRSUzQ2NpcmNsZSBmaWxsPSd1cmwoJTIzYSknIHI9JzE3MDAnLyUzRSUzQ2NpcmNsZSBmaWxsPSd1cmwoJTIzYSknIHI9JzE2NTEnLyUzRSUzQ2NpcmNsZSBmaWxsPSd1cmwoJTIzYSknIHI9JzE0NTAnLyUzRSUzQ2NpcmNsZSBmaWxsPSd1cmwoJTIzYSknIHI9JzEyNTAnLyUzRSUzQ2NpcmNsZSBmaWxsPSd1cmwoJTIzYSknIHI9JzExNzUnLyUzRSUzQ2NpcmNsZSBmaWxsPSd1cmwoJTIzYSknIHI9JzkwMCcvJTNFJTNDY2lyY2xlIGZpbGw9J3VybCglMjNhKScgcj0nNzUwJy8lM0UlM0NjaXJjbGUgZmlsbD0ndXJsKCUyM2EpJyByPSc1MDAnLyUzRSUzQ2NpcmNsZSBmaWxsPSd1cmwoJTIzYSknIHI9JzM4MCcvJTNFJTNDY2lyY2xlIGZpbGw9J3VybCglMjNhKScgcj0nMjUwJy8lM0UlM0MvZyUzRSUzQ2cgdHJhbnNmb3JtPScnJTNFJTNDdXNlIGhyZWY9JyUyM2cnIHRyYW5zZm9ybT0ncm90YXRlKDEwKScvJTNFJTNDdXNlIGhyZWY9JyUyM2cnIHRyYW5zZm9ybT0ncm90YXRlKDEyMCknLyUzRSUzQ3VzZSBocmVmPSclMjNnJyB0cmFuc2Zvcm09J3JvdGF0ZSgyNDApJy8lM0UlM0MvZyUzRSUzQ2NpcmNsZSBmaWxsLW9wYWNpdHk9JzAuMScgZmlsbD0ndXJsKCUyM2EpJyByPSczMDAwJy8lM0UlM0MvZyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVxcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDMwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuaDMge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggMnB4IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4jc2NvcmUtc2VjdGlvbixcXHJcXG4jcmVjZW50LXNjb3JlcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxufVxcclxcblxcclxcbiNsZWZ0LWNvbnRhaW5lcixcXHJcXG4jcmlnaHQtY29udGFpbmVyLFxcclxcbmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuXFxyXFxuI3Njb3JlLXNlY3Rpb24ge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogNTBweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAzMHB4IDEwcHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMCA1cHggIzAyMDIwMjtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmVzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmVzOm50aC1jaGlsZChldmVuKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWYwNzM0O1xcclxcbn1cXHJcXG5cXHJcXG4jbGVmdC1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIG1heC13aWR0aDogNDAwcHg7XFxyXFxufVxcclxcblxcclxcbiNzY29yZXMtY29udGFpbmVyIHtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3JlY2VudC1zY29yZXMge1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3JpZ2h0LWNvbnRhaW5lciB7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbmZvcm0gaW5wdXQge1xcclxcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0LWJ1dHRvbixcXHJcXG4jcmVmcmVzaC1idXR0b24ge1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDAgMTBweCAxMHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICBoMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi4zZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjc2NvcmUtc2VjdGlvbiB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBmb250LXNpemU6IDEuM2VtO1xcclxcbiAgfVxcclxcblxcclxcbiAgZm9ybSBpbnB1dCxcXHJcXG4gICNzdWJtaXQtYnV0dG9uLFxcclxcbiAgI3JlZnJlc2gtYnV0dG9uIHtcXHJcXG4gICAgZm9udC1zaXplOiAxZW07XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgeyBmb3JtLCByZWZyZXNoQnV0dG9uIH0gZnJvbSAnLi4vbW9kdWxlcy9lbGVtZW50cy5qcyc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLW5hbWVkLWFzLWRlZmF1bHRcbmltcG9ydCBuZXdTY29yZSBmcm9tICcuLi9tb2R1bGVzL25ld1Njb3Jlcy5qcyc7XG5pbXBvcnQgeyBjcmVhdGVTY29yZXMgfSBmcm9tICcuLi9tb2R1bGVzL3N0b3JhZ2UuanMnO1xuaW1wb3J0IGFkZFNjb3JlIGZyb20gJy4uL21vZHVsZXMvYWRkU2NvcmUuanMnO1xuaW1wb3J0IHdlYkljb24gZnJvbSAnLi9hc3NldHMvcHVudHVhY2lvbi5wbmcnO1xuXG4vLyBBZGQgd2ViIGljb25cbmNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG5saW5rLmhyZWYgPSB3ZWJJY29uO1xubGluay5yZWwgPSAnaWNvbic7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJykuYXBwZW5kQ2hpbGQobGluayk7XG5cbi8vIERpc3BsYXkgdGhlIHNjb3JlcyBpbiB0aGUgdGFibGUuXG5jb25zdCBsb2FkU2NvcmVzID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHNjb3JlcyA9IGF3YWl0IGNyZWF0ZVNjb3JlcygpO1xuXG4gICAgc2NvcmVzLnJlc3VsdC5mb3JFYWNoKChvYmopID0+IHtcbiAgICAgIGFkZFNjb3JlKG9iaik7XG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGAke2Vycm9yfWApO1xuICB9XG59O1xuXG5sb2FkU2NvcmVzKCk7XG5cbnJlZnJlc2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY29yZXMtY29udGFpbmVyJykuaW5uZXJIVE1MID0gJyc7XG4gIGxvYWRTY29yZXMoKTtcbn0pO1xuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBuZXdTY29yZSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9