/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var toDo1 = [\"Take out the trash\", \"Clean floors\", \"Weeding\", \"Wash up\"];\nvar due1 = [\"23/06/2020\", \"23/06/2020\", \"24/06/2020\", \"27/06/2020\"];\nvar priority1 = [\"High\", \"Low\", \"Medium\", \"Medium\"];\nvar notes1 = [\"Trash goes out on a Tuesday.\", \"N/A\", \"N/A\", \"N/A\"];\nvar toDo2 = [\"Watch movie\", \"Review old words\"];\nvar toDo3 = [\"Complete next Odin Project lesson\"];\nvar due2 = [\"26/06/2020\", \"04/07/2020\"];\nvar due3 = [\"30/06/2020\"];\nvar priority2 = [\"High\", \"Low\"];\nvar priority3 = [\"High\"];\nvar notes2 = [\"Ne Zha\", \"N/A\"];\nvar notes3 = [\"To Do List Website\"];\nvar toDo = [toDo1, toDo2, toDo3];\nvar due = [due1, due2, due3];\nvar priority = [priority1, priority2, priority3];\nvar notes = [notes1, notes2, notes3];\nvar currentButton = document.getElementById(\"Project1Button\");\nvar toDoName;\nvar toDoDate;\nvar toDoPriority;\nvar toDoNotes;\nvar newCheckbox;\nvar newText;\n\nfunction clickedProjectButton(button) {\n  if (button.id == \"NewProjectButton\") {\n    var newProjectName = prompt(\"New Project's Name:\");\n\n    if (newProjectName === null) {\n      return;\n    }\n\n    var numberOfButtons = document.getElementById(\"tabs\").childElementCount;\n    var newTab = document.createElement(\"button\");\n    newTab.id = \"Project\" + numberOfButtons + \"Button\";\n    newTab.classList.add(\"tab\");\n    var text = document.createTextNode(newProjectName);\n    newTab.appendChild(text);\n    button.parentNode.insertBefore(newTab, button);\n    removeProjectButtonClickEvents();\n    addProjectButtonClickEvents();\n    currentButton = document.querySelector(\".active\");\n  } else {\n    if (!(currentButton == null)) {\n      currentButton.classList.remove(\"active\");\n    }\n\n    currentButton = button;\n    currentButton.classList.add(\"active\");\n    document.querySelectorAll(\"li\").forEach(function (li) {\n      li.parentNode.removeChild(li);\n    });\n    var index = Number(button.id.replace(/\\D/g, \"\")) - 1;\n\n    for (var i = 0; i < toDo[index].length; i++) {\n      var toDoHolder = document.createElement(\"li\");\n      var toDoText = document.createTextNode(toDo[index][i]);\n      toDoHolder.appendChild(toDoText);\n      document.getElementById(\"toDoColumn\").appendChild(toDoHolder);\n      var dateHolder = document.createElement(\"li\");\n      var dateText = document.createTextNode(due[index][i]);\n      dateHolder.appendChild(dateText);\n      document.getElementById(\"datesColumn\").appendChild(dateHolder);\n      var priorityHolder = document.createElement(\"li\");\n      var priorityText = document.createTextNode(priority[index][i]);\n      priorityHolder.appendChild(priorityText);\n      document.getElementById(\"priorityColumn\").appendChild(priorityHolder);\n      var notesHolder = document.createElement(\"li\");\n      var notesText = document.createTextNode(notes[index][i]);\n      notesHolder.appendChild(notesText);\n      document.getElementById(\"notesColumn\").appendChild(notesHolder);\n    }\n  }\n}\n\nfunction removeProjectButtonClickEvents() {\n  var buttons = [];\n\n  for (var i = 0; i < document.getElementById(\"tabs\").childElementCount; i++) {\n    buttons.push(document.getElementById(\"tabs\").getElementsByTagName(\"button\")[i]);\n    document.getElementById(\"tabs\").getElementsByTagName(\"button\")[i].id = \"Project\" + String(Number(i + 1)) + \"Button\";\n\n    if (i == document.getElementById(\"tabs\").childElementCount - 1) {\n      document.getElementById(\"tabs\").getElementsByTagName(\"button\")[i].id = \"NewProjectButton\";\n    }\n  }\n\n  buttons.forEach(function (button) {\n    button.parentNode.replaceChild(button.cloneNode(true), button);\n  });\n}\n\nfunction addProjectButtonClickEvents() {\n  var buttons = [];\n\n  for (var i = 0; i < document.getElementById(\"tabs\").childElementCount; i++) {\n    buttons.push(document.getElementById(\"tabs\").getElementsByTagName(\"button\")[i]);\n  }\n\n  buttons.forEach(function (button) {\n    button.addEventListener(\"click\", function () {\n      clickedProjectButton(button);\n    });\n  });\n}\n\nfunction clickedDeleteProjectButton() {\n  if (!(document.querySelector(\".active\") == null)) {\n    var check = confirm(\"Delete Project: \" + document.querySelector(\".active\").innerHTML + \"?\");\n\n    if (check == true) {\n      document.querySelectorAll(\"li\").forEach(function (li) {\n        li.parentNode.removeChild(li);\n      });\n\n      var _currentButton = document.querySelector(\".active\");\n\n      var currentProjectNumber = Array.prototype.indexOf.call(document.getElementById(\"tabs\").children, _currentButton);\n      toDo.splice(currentProjectNumber, 1);\n      due.splice(currentProjectNumber, 1);\n      priority.splice(currentProjectNumber, 1);\n      notes.splice(currentProjectNumber, 1);\n\n      _currentButton.parentNode.removeChild(_currentButton);\n\n      removeProjectButtonClickEvents();\n      addProjectButtonClickEvents();\n    }\n  }\n}\n\nfunction cancelToDoButtonClicked() {\n  document.getElementById(\"newToDoName\").value = \"\";\n  document.getElementById(\"newToDoDate\").value = \"\";\n  document.getElementById(\"priorityHigh\").checked = false;\n  document.getElementById(\"priorityMedium\").checked = false;\n  document.getElementById(\"priorityLow\").checked = false;\n  document.getElementById(\"newToDoNotes\").value = \"\";\n  document.getElementById(\"newToDoForm\").style.display = \"none\";\n}\n\nfunction addToDoButtonClicked() {\n  toDoName = document.getElementById(\"newToDoName\").value;\n\n  if (toDoName == \"\") {\n    toDoName = \"N/A\";\n  }\n\n  toDoDate = document.getElementById(\"newToDoDate\").value;\n\n  if (toDoDate == \"\") {\n    toDoDate = \"N/A\";\n  }\n\n  toDoPriority = \"Low\";\n\n  if (document.getElementById(\"priorityHigh\").checked == true) {\n    toDoPriority = \"High\";\n  }\n\n  if (document.getElementById(\"priorityMedium\").checked == true) {\n    toDoPriority = \"Medium\";\n  }\n\n  if (document.getElementById(\"priorityLow\").checked == true) {\n    toDoPriority = \"Low\";\n  }\n\n  toDoNotes = document.getElementById(\"newToDoNotes\").value;\n\n  if (toDoNotes == \"\") {\n    toDoNotes = \"N/A\";\n  }\n\n  var currentProject = document.querySelector(\".active\");\n  var index = Number(currentProject.id.replace(/\\D/g, \"\")) - 1;\n  var checkExists = toDo[index];\n\n  if (checkExists == undefined) {\n    toDo[index] = [];\n    due[index] = [];\n    priority[index] = [];\n    notes[index] = [];\n  }\n\n  toDo[index].push(toDoName);\n  due[index].push(toDoDate);\n  priority[index].push(toDoPriority);\n  notes[index].push(toDoNotes);\n  clickedProjectButton(currentProject);\n  cancelToDoButtonClicked();\n}\n\nfunction clickedNewToDoButton() {\n  if (!(document.querySelector(\".active\") == null)) {\n    document.getElementById(\"newToDoForm\").style.display = \"block\";\n  }\n}\n\nfunction clickedDeleteToDoButton() {\n  if (!(document.querySelector(\".active\") == null)) {\n    var currentProjectName = document.querySelector(\".active\");\n    var index = Number(currentProjectName.id.replace(/\\D/g, \"\")) - 1;\n    var checkUp = toDo[index];\n\n    if (!(checkUp == undefined) && !(checkUp.length == 0)) {\n      for (var i = 0; i < toDo[index].length; i++) {\n        newCheckbox = document.createElement(\"input\");\n        newCheckbox.type = \"checkbox\";\n        newCheckbox.name = i;\n        newCheckbox.value = toDo[index][i];\n        newText = document.createTextNode(toDo[index][i]);\n        document.getElementById(\"checkboxHolder\").appendChild(newCheckbox);\n        document.getElementById(\"checkboxHolder\").appendChild(newText);\n        document.getElementById(\"checkboxHolder\").appendChild(document.createElement(\"div\"));\n      }\n\n      document.getElementById(\"deleteToDoForm\").style.display = \"block\";\n    }\n  }\n}\n\nfunction confirmDeleteButtonClicked() {\n  var currentProject = document.querySelector(\".active\");\n  var index = Number(currentProject.id.replace(/\\D/g, \"\")) - 1;\n  var checkedBoxesArray = [];\n  var checkboxes = document.querySelectorAll(\"input[type=checkbox]:checked\");\n\n  for (var i = 0; i < checkboxes.length; i++) {\n    checkedBoxesArray.push(Number(checkboxes[i].name));\n  }\n\n  for (var j = checkedBoxesArray.length - 1; j >= 0; j--) {\n    toDo[index].splice(checkedBoxesArray[j], 1);\n    due[index].splice(checkedBoxesArray[j], 1);\n    priority[index].splice(checkedBoxesArray[j], 1);\n    notes[index].splice(checkedBoxesArray[j], 1);\n  }\n\n  document.getElementById(\"checkboxHolder\").innerHTML = \"\";\n  document.getElementById(\"deleteToDoForm\").style.display = \"none\";\n  clickedProjectButton(currentProject);\n}\n\ndocument.getElementById(\"newToDoButton\").addEventListener(\"click\", function () {\n  clickedNewToDoButton();\n});\ndocument.getElementById(\"deleteToDoButton\").addEventListener(\"click\", function () {\n  clickedDeleteToDoButton();\n});\ndocument.getElementById(\"deleteProjectButton\").addEventListener(\"click\", function () {\n  clickedDeleteProjectButton();\n});\ndocument.getElementById(\"addToDoButton\").addEventListener(\"click\", function () {\n  addToDoButtonClicked();\n});\ndocument.getElementById(\"cancelToDoButton\").addEventListener(\"click\", function () {\n  cancelToDoButtonClicked();\n});\ndocument.getElementById(\"confirmDeleteButton\").addEventListener(\"click\", function () {\n  confirmDeleteButtonClicked();\n});\naddProjectButtonClickEvents();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });