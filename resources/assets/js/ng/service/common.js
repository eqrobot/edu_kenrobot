'use strict';

/**
 * @ngdoc service
 * @name kenrobot.common
 * @description
 * # common
 * Service in the kenrobot.
 */
angular.module('kenrobot')
    .service('common', function($http, $filter, $rootScope, $translate) {

        var exports = {};
        var settings = {};

        exports.bloqsSchemas = {
            "arrayClassVariable": {
                "type": "output",
                "name": "arrayClassVariable",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }],
                "bloqClass": "bloq-array-class-variable",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-array-class-variable-variable"
                    }, {
                        "id": "VAR",
                        "alias": "dynamicDropdown",
                        "options": "softwareVars"
                    }, {
                        "alias": "text",
                        "value": "["
                    }, {
                        "id": "POSITION",
                        "alias": "numberInput",
                        "value": 0
                    }, {
                        "alias": "text",
                        "value": "]"
                    }, {
                        "alias": "text",
                        "value": "bloq-invoke-class-function-class"
                    }, {
                        "id": "CLASS",
                        "alias": "dynamicDropdown",
                        "options": "objects"
                    }]
                ],
                "code": "{CLASS}.{VAR}[{POSITION}]",
                "returnType": {
                    "type": "fromDynamicDropdown",
                    "idDropdown": "VAR",
                    "pointer": "true",
                    "options": "softwareVars"
                }
            },
            "classChildren": {
                "type": "statement-input",
                "name": "classChildren",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--root",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-class-children",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-class"
                    }, {
                        "id": "NAME",
                        "alias": "varInput",
                        "placeholder": "bloq-class-default"
                    }, {
                        "alias": "text",
                        "value": "bloq-class-inheritance-type"
                    }, {
                        "id": "TYPE",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-class-inheritance-public",
                            "value": "public"
                        }, {
                            "label": "bloq-class-inheritance-protected",
                            "value": "protected"
                        }, {
                            "label": "bloq-class-inheritance-private",
                            "value": "private"
                        }]
                    }, {
                        "alias": "text",
                        "value": "bloq-class-from"
                    }, {
                        "id": "PARENT",
                        "alias": "dynamicDropdown",
                        "options": "classes"
                    }]
                ],
                "createDynamicContent": "classes",
                "code": "class {NAME} : public {PARENT}{{STATEMENTS}};",
                "hCode": "class {NAME}: public {PARENT}{{STATEMENTS}};",
                "cppCode": "",
                "returnType": {
                    "type": "simple",
                    "value": "class"
                }
            },
            "constructorClassArguments": {
                "type": "statement-input",
                "name": "constructorClassArguments",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--root",
                    "accept": "connector--top"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "42382ae7-3182-46e1-a781-d6379cbc03e0"
                }],
                "bloqClass": "bloq-constructor-arguments",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-constructor-arguments"
                    }, {
                        "bloqInputId": "ARGS",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "42382ae7-3182-46e1-a781-d6379cbc03e0"
                    }]
                ],
                "code": "{CLASS-OUTSIDE} ({ARGS}){{STATEMENTS}};",
                "hCode": "{CLASS-OUTSIDE} ({ARGS});",
                "cppCode": "{CLASS-OUTSIDE} :: {CLASS-OUTSIDE} ({ARGS}){{STATEMENTS}};"
            },
            "invokeArgumentsClass": {
                "type": "statement",
                "name": "invokeArgumentsClass",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "01a2c4f3-b96e-496b-9915-68fc7be318db"
                }],
                "bloqClass": "bloq-invoke-arguments-class",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-invoke-arguments-class"
                    }, {
                        "id": "CLASS",
                        "alias": "dynamicDropdown",
                        "options": "classes"
                    }, {
                        "alias": "text",
                        "value": "bloq-invoke-arguments-class-name"
                    }, {
                        "id": "NAME",
                        "alias": "varInput",
                        "value": ""
                    }, {
                        "alias": "text",
                        "value": "bloq-invoke-arguments-args"
                    }, {
                        "bloqInputId": "ARGS",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "01a2c4f3-b96e-496b-9915-68fc7be318db"
                    }]
                ],
                "createDynamicContent": "objects",
                "code": "{CLASS} {NAME}({ARGS});",
                "returnType": {
                    "type": "simple",
                    "value": "var"
                }
            },
            "invokeClassFunctionWithArguments": {
                "type": "statement",
                "name": "invokeClassFunctionWithArguments",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "0dd5f3d0-45c5-4bec-a51c-9cb94c626e3c"
                }],
                "bloqClass": "bloq-invoke-class-function-args",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-invoke-class-function-exec"
                    }, {
                        "id": "FUNCTION",
                        "alias": "dynamicDropdown",
                        "options": "voidFunctions"
                    }, {
                        "alias": "text",
                        "value": "bloq-invoke-class-function-class"
                    }, {
                        "id": "CLASS",
                        "alias": "dynamicDropdown",
                        "options": "objects"
                    }, {
                        "alias": "text",
                        "value": "bloq-invoke-class-function-args"
                    }, {
                        "bloqInputId": "ARGS",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "0dd5f3d0-45c5-4bec-a51c-9cb94c626e3c"
                    }]
                ],
                "code": "{CLASS}.{FUNCTION}({ARGS});",
                "dynamicDropdown": {
                    "idDropdown": "FUNCTION",
                    "options": "voidFunctions"
                }
            },
            "invokeClassReturnFunctionWithArguments": {
                "type": "output",
                "name": "invokeClassReturnFunctionWithArguments",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "2643d8b6-fd55-4a1a-bee6-dbd0ca831a90"
                }],
                "bloqClass": "bloq-invoke-class-return-function",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-invoke-class-return-function-args-exec"
                    }, {
                        "id": "FUNCTION",
                        "alias": "dynamicDropdown",
                        "options": "returnFunctions"
                    }, {
                        "alias": "text",
                        "value": "bloq-invoke-class-return-function-args-class"
                    }, {
                        "id": "CLASS",
                        "alias": "dynamicDropdown",
                        "options": "objects"
                    }, {
                        "alias": "text",
                        "value": "bloq-invoke-class-return-function-args-args"
                    }, {
                        "bloqInputId": "ARGS",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "2643d8b6-fd55-4a1a-bee6-dbd0ca831a90"
                    }]
                ],
                "code": "{CLASS}.{FUNCTION}({ARGS});",
                "returnType": {
                    "type": "fromDynamicDropdown",
                    "idDropdown": "FUNCTION",
                    "options": "returnFunctions"
                }
            },
            "private": {
                "type": "statement-input",
                "name": "private",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--root",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-private",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-private"
                    }]
                ],
                "code": "private : {STATEMENTS}",
                "hCode": "private : {STATEMENTS}",
                "cppCode": ""
            },
            "protected": {
                "type": "statement-input",
                "name": "protected",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--root",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-protected",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-protected"
                    }]
                ],
                "code": "protected : {STATEMENTS}",
                "hCode": "protected : {STATEMENTS}",
                "cppCode": ""
            },
            "public": {
                "type": "statement-input",
                "name": "public",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--root",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-public",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-public"
                    }]
                ],
                "code": "public : {STATEMENTS}",
                "hCode": "public : {STATEMENTS}",
                "cppCode": ""
            },
            "setClassArrayVariable": {
                "type": "statement",
                "name": "setClassArrayVariable",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": {
                        "type": "fromDynamicDropdown",
                        "idDropdown": "NAME",
                        "pointer": "true",
                        "options": "softwareVars"
                    },
                    "name": "48ad30b4-1ee6-43a2-9c8f-d787da5ff807"
                }],
                "bloqClass": "bloq-set-class-variableArray",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-set-class-variableArray-variable"
                    }, {
                        "id": "NAME",
                        "alias": "dynamicDropdown",
                        "options": "softwareVars"
                    }, {
                        "alias": "text",
                        "value": "["
                    }, {
                        "id": "ITERATOR",
                        "alias": "numberInput",
                        "value": 0
                    }, {
                        "alias": "text",
                        "value": "]"
                    }, {
                        "alias": "text",
                        "value": "bloq-invoke-class-function-class"
                    }, {
                        "id": "CLASS",
                        "alias": "dynamicDropdown",
                        "options": "objects"
                    }, {
                        "alias": "text",
                        "value": "="
                    }, {
                        "bloqInputId": "VALUE",
                        "alias": "bloqInput",
                        "acceptType": {
                            "type": "fromDynamicDropdown",
                            "idDropdown": "NAME",
                            "pointer": "true",
                            "options": "softwareVars"
                        },
                        "name": "48ad30b4-1ee6-43a2-9c8f-d787da5ff807"
                    }]
                ],
                "code": "{CLASS}.{NAME}[{ITERATOR}] = {VALUE};"
            },
            "class": {
                "type": "statement-input",
                "name": "class",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--root",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-class",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-class"
                    }, {
                        "id": "NAME",
                        "alias": "varInput",
                        "placeholder": "bloq-class-default"
                    }]
                ],
                "createDynamicContent": "classes",
                "code": "class {NAME}{{STATEMENTS}};",
                "hCode": "class {NAME}{{STATEMENTS}};",
                "cppCode": "",
                "returnType": {
                    "type": "simple",
                    "value": "class"
                }
            },
            "constructorClass": {
                "type": "statement-input",
                "name": "constructorClass",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--root",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-constructor",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-constructor"
                    }]
                ],
                "code": "{CLASS-OUTSIDE}(){{STATEMENTS}};",
                "hCode": "{CLASS-OUTSIDE} ();",
                "cppCode": "{CLASS-OUTSIDE} :: {CLASS-OUTSIDE} (){{STATEMENTS}};"
            },
            "includeLib": {
                "type": "statement",
                "name": "includeLib",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-include-lib",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-include-lib-exec"
                    }, {
                        "id": "LIB",
                        "alias": "dynamicDropdown",
                        "options": "libraries"
                    }]
                ],
                "code": "#include \"{LIB}\";"
            },
            "invokeClass": {
                "type": "statement",
                "name": "invokeClass",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-invoke-class",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-invoke-class"
                    }, {
                        "id": "CLASS",
                        "alias": "dynamicDropdown",
                        "options": "classes"
                    }, {
                        "alias": "text",
                        "value": "bloq-invoke-class-name"
                    }, {
                        "id": "NAME",
                        "alias": "varInput",
                        "value": ""
                    }, {
                        "alias": "text",
                        "value": "bloq-invoke-class-function-class"
                    }, {
                        "id": "CLASS",
                        "alias": "dynamicDropdown",
                        "options": "classes"
                    }]
                ],
                "createDynamicContent": "objects",
                "code": "{CLASS} {NAME};",
                "returnType": {
                    "type": "simple",
                    "value": "var"
                }
            },
            "invokeClassFunction": {
                "type": "statement",
                "name": "invokeClassFunction",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-invoke-class-function",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-invoke-class-function-exec"
                    }, {
                        "id": "FUNCTION",
                        "alias": "dynamicDropdown",
                        "options": "voidFunctions"
                    }, {
                        "alias": "text",
                        "value": "bloq-invoke-class-function-class"
                    }, {
                        "id": "CLASS",
                        "alias": "dynamicDropdown",
                        "options": "objects"
                    }]
                ],
                "code": "{CLASS}.{FUNCTION}();",
                "dynamicDropdown": {
                    "idDropdown": "FUNCTION",
                    "options": "voidFunctions"
                }
            },
            "invokeClassReturnFunction": {
                "type": "output",
                "name": "invokeClassReturnFunction",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }],
                "bloqClass": "bloq-invoke-class-return-function",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-invoke-class-return-function-exec"
                    }, {
                        "id": "FUNCTION",
                        "alias": "dynamicDropdown",
                        "options": "returnFunctions"
                    }, {
                        "alias": "text",
                        "value": "bloq-invoke-class-function-class"
                    }, {
                        "id": "CLASS",
                        "alias": "dynamicDropdown",
                        "options": "objects"
                    }]
                ],
                "code": "{CLASS}.{FUNCTION}()",
                "returnType": {
                    "type": "fromDynamicDropdown",
                    "idDropdown": "FUNCTION",
                    "options": "returnFunctions"
                }
            },
            "selectClassVariable": {
                "type": "output",
                "name": "selectClassVariable",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }],
                "bloqClass": "bloq-select-class-variable",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-select-class-variable-variable"
                    }, {
                        "id": "VAR",
                        "alias": "dynamicDropdown",
                        "options": "softwareVars"
                    }, {
                        "alias": "text",
                        "value": "bloq-invoke-class-function-class"
                    }, {
                        "id": "CLASS",
                        "alias": "dynamicDropdown",
                        "options": "objects"
                    }]
                ],
                "code": "{CLASS}.{VAR}",
                "returnType": {
                    "type": "fromDynamicDropdown",
                    "idDropdown": "VAR",
                    "options": "softwareVars"
                }
            },
            "setClassVariable": {
                "type": "statement",
                "name": "setClassVariable",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": {
                        "type": "fromDynamicDropdown",
                        "idDropdown": "NAME",
                        "options": "softwareVars"
                    },
                    "name": "0658b542-93f9-4b77-b3c7-89e599c96a4a"
                }],
                "bloqClass": "bloq-set-class-variable",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-set-class-variable-variable"
                    }, {
                        "id": "NAME",
                        "alias": "dynamicDropdown",
                        "options": "softwareVars"
                    }, {
                        "alias": "text",
                        "value": "bloq-invoke-class-function-class"
                    }, {
                        "id": "CLASS",
                        "alias": "dynamicDropdown",
                        "options": "objects"
                    }, {
                        "alias": "text",
                        "value": "="
                    }, {
                        "bloqInputId": "VALUE",
                        "alias": "bloqInput",
                        "acceptType": {
                            "type": "fromDynamicDropdown",
                            "idDropdown": "NAME",
                            "options": "softwareVars"
                        },
                        "name": "0658b542-93f9-4b77-b3c7-89e599c96a4a"
                    }]
                ],
                "code": "{CLASS}.{NAME} = {VALUE};"
            },
            "code": {
                "type": "statement",
                "name": "code",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-code",
                "content": [
                    [{
                        "id": "CODE",
                        "alias": "multilineCodeInput",
                        "value": "",
                        "placeholder": "bloq-code-writeYourCode"
                    }]
                ],
                "code": "{CODE}\n"
            },
            "comment": {
                "type": "statement",
                "name": "comment",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-comment",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-comment-comment"
                    }, {
                        "id": "COMMENT",
                        "alias": "multilineCommentInput",
                        "placeholder": "bloq-comment-default"
                    }]
                ],
                "code": "/*\n{COMMENT}\n*/"
            },
            "enableInterrupt": {
                "type": "statement",
                "name": "enableInterrupt",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-enable-interrupt",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-enable-interrupt"
                    }, {
                        "id": "FUNC",
                        "alias": "dynamicDropdown",
                        "options": "voidFunctions"
                    }, {
                        "alias": "text",
                        "value": "bloq-enable-interrupt-pin"
                    }, {
                        "id": "PIN",
                        "alias": "dynamicDropdown",
                        "options": "varComponents"
                    }, {
                        "id": "STATE",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-enable-interrupt-rising",
                            "value": "RISING"
                        }, {
                            "label": "bloq-enable-interrupt-falling",
                            "value": "FALLING"
                        }, {
                            "label": "bloq-enable-interrupt-change",
                            "value": "CHANGE"
                        }]
                    }]
                ],
                "code": "enableInterrupt({PIN}, {FUNC}, {STATE});"
            },
            "convert": {
                "type": "output",
                "name": "convert",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "number",
                    "name": "abac3818-8c8c-4f82-867b-65622edab02d"
                }],
                "bloqClass": "bloq-convert",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-convert-convert"
                    }, {
                        "bloqInputId": "NUMBER",
                        "alias": "bloqInput",
                        "acceptType": "number",
                        "name": "abac3818-8c8c-4f82-867b-65622edab02d"
                    }, {
                        "alias": "text",
                        "value": "bloq-convert-to"
                    }, {
                        "id": "TYPE",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-convert-dec",
                            "value": "DEC"
                        }, {
                            "label": "bloq-convert-hex",
                            "value": "HEX"
                        }, {
                            "label": "bloq-convert-oct",
                            "value": "OCT"
                        }, {
                            "label": "bloq-convert-bin",
                            "value": "BIN"
                        }]
                    }]
                ],
                "code": "({NUMBER},{TYPE});",
                "returnType": {
                    "type": "simple",
                    "value": "float"
                }
            },
            "serialSend": {
                "type": "statement",
                "name": "serialSend",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "53f29b0f-436c-4aa7-9649-fa56803ec3b8"
                }],
                "bloqClass": "bloq-serial-send",
                "content": [
                    [{
                        "id": "SERIAL",
                        "alias": "dynamicDropdown",
                        "options": "serialElements"
                    }, {
                        "alias": "text",
                        "value": "bloq-serial-send-send"
                    }, {
                        "bloqInputId": "DATA",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "53f29b0f-436c-4aa7-9649-fa56803ec3b8"
                    }, {
                        "id": "FUNCTION",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-serial-send-println",
                            "value": "println"
                        }, {
                            "label": "bloq-serial-send-print",
                            "value": "print"
                        }]
                    }]
                ],
                "code": "{SERIAL}.{FUNCTION}({DATA});"
            },
            "serialReceive": {
                "type": "output",
                "name": "serialReceive",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }],
                "bloqClass": "bloq-serial-receiver",
                "content": [
                    [{
                        "id": "SERIAL",
                        "alias": "dynamicDropdown",
                        "options": "serialElements"
                    }, {
                        "alias": "text",
                        "value": "bloq-serial-receiver-receive"
                    }]
                ],
                "code": "{SERIAL}.readString()",
                "returnType": {
                    "type": "simple",
                    "value": "String"
                }
            },
            "serialSend-v1": {
                "type": "statement",
                "name": "serialSend-v1",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "f8471331-86fc-4e8e-9293-8ddd1bca79a5"
                }],
                "bloqClass": "bloq-serial-send",
                "content": [
                    [{
                        "id": "SERIAL",
                        "alias": "dynamicDropdown",
                        "options": "serialElements"
                    }, {
                        "alias": "text",
                        "value": "bloq-serial-send-send"
                    }, {
                        "bloqInputId": "DATA",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "f8471331-86fc-4e8e-9293-8ddd1bca79a5"
                    }, {
                        "id": "LN",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-serial-send-println",
                            "value": "println"
                        }, {
                            "label": "bloq-serial-send-print",
                            "value": "print"
                        }]
                    }]
                ],
                "code": "{SERIAL}.{LN}({DATA});"
            },
            "rgbLed": {
                "type": "statement",
                "name": "rgbLed",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-rgbLed",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-rgbLed"
                    }, {
                        "id": "LED",
                        "alias": "dynamicDropdown",
                        "options": "rgbs"
                    }, {
                        "alias": "text",
                        "value": "bloq-rgbLed-red"
                    }, {
                        "id": "RED",
                        "alias": "numberInput",
                        "value": 0
                    }, {
                        "alias": "text",
                        "value": "bloq-rgbLed-green"
                    }, {
                        "id": "GREEN",
                        "alias": "numberInput",
                        "value": 0
                    }, {
                        "alias": "text",
                        "value": "bloq-rgbLed-blue"
                    }, {
                        "id": "BLUE",
                        "alias": "numberInput",
                        "value": 0
                    }]
                ],
                "code": "{LED}.setRGBcolor({RED},{GREEN},{BLUE});"
            },
            "rgbLedFade": {
                "type": "statement",
                "name": "rgbLedFade",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-rgbLed-fade",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-rgbLed-fade"
                    }, {
                        "id": "LED",
                        "alias": "dynamicDropdown",
                        "options": "rgbs"
                    }, {
                        "alias": "text",
                        "value": "bloq-rgbLed-fade-red"
                    }, {
                        "id": "RED",
                        "alias": "numberInput",
                        "value": 0
                    }, {
                        "alias": "text",
                        "value": "bloq-rgbLed-fade-green"
                    }, {
                        "id": "GREEN",
                        "alias": "numberInput",
                        "value": 0
                    }, {
                        "alias": "text",
                        "value": "bloq-rgbLed-fade-blue"
                    }, {
                        "id": "BLUE",
                        "alias": "numberInput",
                        "value": 0
                    }]
                ],
                "code": "{LED}.crossFade({RED},{GREEN},{BLUE});"
            },
            "rgbLedSimple": {
                "type": "statement",
                "name": "rgbLedSimple",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-rgbLed-simple",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-rgbLed-simple"
                    }, {
                        "id": "LED",
                        "alias": "dynamicDropdown",
                        "options": "rgbs"
                    }, {
                        "alias": "text",
                        "value": "bloq-rgbLed-simple-color"
                    }, {
                        "id": "COLOR",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-rgbLed-simple-white",
                            "value": "255,255,255"
                        }, {
                            "label": "bloq-rgbLed-simple-yellow",
                            "value": "255,255,0"
                        }, {
                            "label": "bloq-rgbLed-simple-orange",
                            "value": "200,50,0"
                        }, {
                            "label": "bloq-rgbLed-simple-red",
                            "value": "255,0,0"
                        }, {
                            "label": "bloq-rgbLed-simple-green",
                            "value": "0,255,0"
                        }, {
                            "label": "bloq-rgbLed-simple-dark-green",
                            "value": "0,60,102"
                        }, {
                            "label": "bloq-rgbLed-simple-blue",
                            "value": "40,40,255"
                        }, {
                            "label": "bloq-rgbLed-simple-dark-blue",
                            "value": "0,0,255"
                        }, {
                            "label": "bloq-rgbLed-simple-pink",
                            "value": "255,0,255"
                        }]
                    }]
                ],
                "code": "{LED}.setRGBcolor({COLOR});"
            },
            "rgbLedAdvanced": {
                "type": "statement",
                "name": "rgbLedAdvanced",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "03fafc3a-a1f9-4422-a3ce-ca9e554e1476"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "937f2ffe-5fb2-4c93-a032-da86f0d8f3ab"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "09b65f04-37b9-4a60-b9a6-e063eef8334e"
                }],
                "bloqClass": "bloq-rgbLed-advanced",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-rgbLed"
                    }, {
                        "id": "LED",
                        "alias": "dynamicDropdown",
                        "options": "rgbs"
                    }, {
                        "alias": "text",
                        "value": "bloq-rgbLed-red"
                    }, {
                        "bloqInputId": "RED",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "03fafc3a-a1f9-4422-a3ce-ca9e554e1476"
                    }, {
                        "alias": "text",
                        "value": "bloq-rgbLed-green"
                    }, {
                        "bloqInputId": "GREEN",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "937f2ffe-5fb2-4c93-a032-da86f0d8f3ab"
                    }, {
                        "alias": "text",
                        "value": "bloq-rgbLed-blue"
                    }, {
                        "bloqInputId": "BLUE",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "09b65f04-37b9-4a60-b9a6-e063eef8334e"
                    }]
                ],
                "code": "{LED}.setRGBcolor({RED},{GREEN},{BLUE});"
            },
            "analogReadAdvanced": {
                "type": "output",
                "name": "analogReadAdvanced",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "8b0e7306-5424-4483-bb25-991cc88ee22c"
                }],
                "bloqClass": "bloq-analog-read-advanced",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-analog-read-advanced-readpin"
                    }, {
                        "bloqInputId": "PIN",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "8b0e7306-5424-4483-bb25-991cc88ee22c"
                    }]
                ],
                "code": "'{PIN}'.indexOf('A') !== -1 ? 'analogRead({PIN})'.replace(/\"/g, '') : 'analogRead({PIN})'",
                "returnType": {
                    "type": "simple",
                    "value": "float"
                }
            },
            "analogWrite": {
                "type": "statement",
                "name": "analogWrite",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "5dbec0d7-2c71-4943-bdda-091ec3248cd7"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "786457fd-727b-4a52-ac76-ac47a96c097a"
                }],
                "bloqClass": "bloq-pin-writte-advanced",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-pin-analog-write"
                    }, {
                        "bloqInputId": "PIN",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "5dbec0d7-2c71-4943-bdda-091ec3248cd7"
                    }, {
                        "alias": "text",
                        "value": "bloq-pin-analog-write-data"
                    }, {
                        "bloqInputId": "DATA",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "786457fd-727b-4a52-ac76-ac47a96c097a"
                    }]
                ],
                "code": "'{PIN}'.indexOf('A') !== -1 ? 'analogWrite({PIN},{DATA});'.replace(/\"/g, '') : 'analogWrite({PIN},{DATA});'"
            },
            "buzzerAdvanced": {
                "type": "statement",
                "name": "buzzerAdvanced",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "b57fc0e6-15ae-49b6-965b-42460821a5f2"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "4b4393d0-ce5e-45e6-b83e-a45f9530d5a2"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "b38394fc-9676-494a-b44a-94f658cd9319"
                }],
                "bloqClass": "bloq-buzzer-advance",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-buzzer-advance-sound"
                    }, {
                        "bloqInputId": "BUZZER",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "b57fc0e6-15ae-49b6-965b-42460821a5f2"
                    }, {
                        "alias": "text",
                        "value": "bloq-buzzer-advance-note"
                    }, {
                        "bloqInputId": "NOTE",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "4b4393d0-ce5e-45e6-b83e-a45f9530d5a2"
                    }, {
                        "alias": "text",
                        "value": "bloq-buzzer-advance-for"
                    }, {
                        "bloqInputId": "SECONDS",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "b38394fc-9676-494a-b44a-94f658cd9319"
                    }, {
                        "alias": "text",
                        "value": "bloq-buzzer-advance-ms"
                    }]
                ],
                "code": "tone({BUZZER},{NOTE},{SECONDS});\ndelay({SECONDS});"
            },
            "continuousServoStartAdvanced-v1": {
                "type": "statement",
                "name": "continuousServoStartAdvanced-v1",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "1484b139-1fe7-4eaa-b015-49989cbd89d3"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "5b0354c0-8e85-4755-9e03-95525f1057a9"
                }],
                "bloqClass": "bloq-continuous-servo-start-advanced",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-continuous-servo-start-advanced-turn"
                    }, {
                        "bloqInputId": "SERVO",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "1484b139-1fe7-4eaa-b015-49989cbd89d3"
                    }, {
                        "alias": "text",
                        "value": "bloq-continuous-servo-start-advanced-direction"
                    }, {
                        "bloqInputId": "DIRECTION",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "5b0354c0-8e85-4755-9e03-95525f1057a9"
                    }]
                ],
                "code": "{SERVO}.write({DIRECTION});"
            },
            "continuousServoStopAdvanced": {
                "type": "statement",
                "name": "continuousServoStopAdvanced",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "584cafc9-1451-42fb-a56b-a219a4db672e"
                }],
                "bloqClass": "bloq-continuous-servo-stop-advanced",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-continuous-servo-stop-advanced-stop"
                    }, {
                        "bloqInputId": "SERVO",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "584cafc9-1451-42fb-a56b-a219a4db672e"
                    }]
                ],
                "code": "{SERVO}.write(90);"
            },
            "digitalReadAdvanced": {
                "type": "output",
                "name": "digitalReadAdvanced",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "c585be5f-5bdf-476d-b3c1-ebb0f8886cb8"
                }],
                "bloqClass": "bloq-digital-read-advanced",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-digital-read-advanced-readpin"
                    }, {
                        "bloqInputId": "PIN",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "c585be5f-5bdf-476d-b3c1-ebb0f8886cb8"
                    }]
                ],
                "code": "digitalRead({PIN})",
                "returnType": {
                    "type": "simple",
                    "value": "float"
                }
            },
            "digitalWrite": {
                "type": "statement",
                "name": "digitalWrite",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "06703099-aea8-4ef9-a648-a32f89051e5c"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "c68c77de-ef1c-4f54-88a3-a8566d882b7b"
                }],
                "bloqClass": "bloq-pin-writte-advanced",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-pin-digital-write"
                    }, {
                        "bloqInputId": "PIN",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "06703099-aea8-4ef9-a648-a32f89051e5c"
                    }, {
                        "alias": "text",
                        "value": "bloq-pin-digital-write-data"
                    }, {
                        "bloqInputId": "DATA",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "c68c77de-ef1c-4f54-88a3-a8566d882b7b"
                    }]
                ],
                "code": "digitalWrite({PIN},{DATA});"
            },
            "lcdTurnOnOffAdvanced": {
                "type": "statement",
                "name": "lcdTurnOnOffAdvanced",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "6e9f7268-0bf0-45f2-97d8-428034412094"
                }],
                "bloqClass": "bloq-lcd-turn-on-off-advanced",
                "content": [
                    [{
                        "id": "STATE",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-lcd-turn-on-off-advanced-turnon",
                            "value": "HIGH"
                        }, {
                            "label": "bloq-lcd-turn-on-off-advanced-turnoff",
                            "value": "LOW"
                        }]
                    }, {
                        "alias": "text",
                        "value": "bloq-lcd-turn-on-off-advanced-lcdLigth"
                    }, {
                        "bloqInputId": "LCD",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "6e9f7268-0bf0-45f2-97d8-428034412094"
                    }]
                ],
                "code": "{LCD}.setBacklight({STATE});"
            },
            "lcdWriteAdvanced": {
                "type": "statement",
                "name": "lcdWriteAdvanced",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "0ff787be-1b73-4c85-84e0-f38651e4a29d"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "087df5f7-1ad4-4fcf-923b-3c8866b13512"
                }],
                "bloqClass": "bloq-lcd-writte-advanced",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-lcd-writte-advanced-write"
                    }, {
                        "bloqInputId": "TEXT",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "0ff787be-1b73-4c85-84e0-f38651e4a29d"
                    }, {
                        "alias": "text",
                        "value": "bloq-lcd-writte-advanced-inLCD"
                    }, {
                        "bloqInputId": "LCD",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "087df5f7-1ad4-4fcf-923b-3c8866b13512"
                    }]
                ],
                "code": "{LCD}.print({TEXT});"
            },
            "lcdWritePositionAdvanced-v1": {
                "type": "statement",
                "name": "lcdWritePositionAdvanced-v1",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "5b8ac541-9ef8-48fa-b798-04ef13c0ef83"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "ff3bf8e8-5438-4a0d-822a-346d8838af7d"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "7ed6194c-1253-4ac3-a1cd-c5a1b0334e8a"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "c0f6dffb-bbb6-4906-bb65-313ee54e26b9"
                }],
                "bloqClass": "bloq-lcd-writte",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-lcd-writte-write"
                    }, {
                        "bloqInputId": "TEXT",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "5b8ac541-9ef8-48fa-b798-04ef13c0ef83"
                    }, {
                        "alias": "text",
                        "value": "bloq-lcd-writte-inLCD"
                    }, {
                        "bloqInputId": "LCD",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "ff3bf8e8-5438-4a0d-822a-346d8838af7d"
                    }, {
                        "alias": "text",
                        "value": "bloq-lcd-writte-advanced-inPosition"
                    }, {
                        "bloqInputId": "COLUMN",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "7ed6194c-1253-4ac3-a1cd-c5a1b0334e8a"
                    }, {
                        "bloqInputId": "ROW",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "c0f6dffb-bbb6-4906-bb65-313ee54e26b9"
                    }]
                ],
                "code": "{LCD}.setCursor({COLUMN},{ROW});{LCD}.print({TEXT});"
            },
            "ledAdvanced": {
                "type": "statement",
                "name": "ledAdvanced",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "9050f447-06fe-4956-bd2b-a440ce757f52"
                }],
                "bloqClass": "bloq-led-advanced",
                "content": [
                    [{
                        "id": "STATE",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-led-advanced-turnon",
                            "value": "HIGH"
                        }, {
                            "label": "bloq-led-advanced-turnoff",
                            "value": "LOW"
                        }]
                    }, {
                        "alias": "text",
                        "value": "bloq-led-advanced-theLED"
                    }, {
                        "bloqInputId": "LED",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "9050f447-06fe-4956-bd2b-a440ce757f52"
                    }]
                ],
                "code": "digitalWrite({LED},{STATE});"
            },
            "oscillatorAdvanced": {
                "type": "statement",
                "name": "oscillatorAdvanced",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "7df60b80-3437-452c-a01c-b2eb70f38a9a"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "85c20ede-0585-478b-bddf-b5ce72e632f9"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "990e249d-9108-4fbf-86c5-1d5200572995"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "8a83d1fa-74d9-4993-afd1-0c14796e169a"
                }],
                "bloqClass": "bloq-oscillator-advanced",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-oscillator-advanced-oscillate"
                    }, {
                        "bloqInputId": "OSCILLATOR",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "7df60b80-3437-452c-a01c-b2eb70f38a9a"
                    }, {
                        "alias": "text",
                        "value": "bloq-oscillator-advanced-around"
                    }, {
                        "bloqInputId": "PHASE",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "85c20ede-0585-478b-bddf-b5ce72e632f9"
                    }, {
                        "alias": "text",
                        "value": "bloq-oscillator-advanced-amplitude"
                    }, {
                        "bloqInputId": "AMPLITUDE",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "990e249d-9108-4fbf-86c5-1d5200572995"
                    }, {
                        "alias": "text",
                        "value": "bloq-oscillator-advanced-speed"
                    }, {
                        "bloqInputId": "SPEED",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "8a83d1fa-74d9-4993-afd1-0c14796e169a"
                    }]
                ],
                "code": "{OSCILLATOR}.SetO({PHASE});\n{OSCILLATOR}.SetA({AMPLITUDE});\n{OSCILLATOR}.SetT({SPEED});\n{OSCILLATOR}.refresh();"
            },
            "oscillatorStartAdvanced": {
                "type": "statement",
                "name": "oscillatorStartAdvanced",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "b0e8f5b3-a867-424d-ba93-22ff7406bd26"
                }],
                "bloqClass": "bloq-oscillator-start-advanced",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-oscillator-start-advanced-oscillator"
                    }, {
                        "bloqInputId": "OSCILLATOR",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "b0e8f5b3-a867-424d-ba93-22ff7406bd26"
                    }]
                ],
                "code": "{OSCILLATOR}.start()"
            },
            "oscillatorStopAdvanced": {
                "type": "statement",
                "name": "oscillatorStopAdvanced",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "b489257c-fc38-493b-93b2-b3311db488b4"
                }],
                "bloqClass": "bloq-oscillator-stop-advanced",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-oscillator-stop-advanced-stop"
                    }, {
                        "bloqInputId": "OSCILLATOR",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "b489257c-fc38-493b-93b2-b3311db488b4"
                    }]
                ],
                "code": "{OSCILLATOR}.stop()"
            },
            "servoNormalAdvanced": {
                "type": "statement",
                "name": "servoNormalAdvanced",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "78baf27b-134e-493c-87cf-c89193802711"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "90672fb5-8f1f-45d2-82de-9415185c2b44"
                }],
                "bloqClass": "bloq-servo-advanced",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-servo-advanced-move"
                    }, {
                        "bloqInputId": "SERVO",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "78baf27b-134e-493c-87cf-c89193802711"
                    }, {
                        "alias": "text",
                        "value": "bloq-servo-advanced-to"
                    }, {
                        "bloqInputId": "POSITION",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "90672fb5-8f1f-45d2-82de-9415185c2b44"
                    }, {
                        "alias": "text",
                        "value": "bloq-servo-advanced-degrees"
                    }]
                ],
                "code": "{SERVO}.write({POSITION});"
            },
            "buzzer": {
                "type": "statement",
                "name": "buzzer",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-buzzer",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-buzzer-sound"
                    }, {
                        "id": "BUZZER",
                        "alias": "dynamicDropdown",
                        "options": "buzzers"
                    }, {
                        "alias": "text",
                        "value": "bloq-buzzer-note"
                    }, {
                        "id": "NOTE",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-buzzer-do",
                            "value": "261"
                        }, {
                            "label": "bloq-buzzer-re",
                            "value": "293"
                        }, {
                            "label": "bloq-buzzer-mi",
                            "value": "329"
                        }, {
                            "label": "bloq-buzzer-fa",
                            "value": "349"
                        }, {
                            "label": "bloq-buzzer-sol",
                            "value": "392"
                        }, {
                            "label": "bloq-buzzer-la",
                            "value": "440"
                        }, {
                            "label": "bloq-buzzer-si",
                            "value": "494"
                        }]
                    }, {
                        "alias": "text",
                        "value": "bloq-buzzer-for"
                    }, {
                        "id": "SECONDS",
                        "alias": "numberInput",
                        "value": 2000
                    }, {
                        "alias": "text",
                        "value": "bloq-buzzer-ms"
                    }]
                ],
                "code": "tone({BUZZER},{NOTE},{SECONDS});\ndelay({SECONDS});"
            },
            "continuousServoStart": {
                "type": "statement",
                "name": "continuousServoStart",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-continuous-servo-start",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-continuous-servo-start-turn"
                    }, {
                        "id": "SERVO",
                        "alias": "dynamicDropdown",
                        "options": "continuousServos"
                    }, {
                        "alias": "text",
                        "value": "bloq-continuous-servo-start-direction"
                    }, {
                        "id": "DIRECTION",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-continuous-servo-start-clockwise",
                            "value": "180"
                        }, {
                            "label": "bloq-continuous-servo-start-counterclockwise",
                            "value": "0"
                        }]
                    }]
                ],
                "code": "{SERVO}.write({DIRECTION});"
            },
            "continuousServoStop": {
                "type": "statement",
                "name": "continuousServoStop",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-continuous-servo-stop",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-continuous-servo-stop-stop"
                    }, {
                        "id": "SERVO",
                        "alias": "dynamicDropdown",
                        "options": "continuousServos"
                    }]
                ],
                "code": "{SERVO}.write(90);"
            },
            "continuousServoStartAdvanced": {
                "type": "statement",
                "name": "continuousServoStartAdvanced",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-continuous-servo-start-advanced",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-continuous-servo-start-advanced-turn"
                    }, {
                        "continuousServoStartAdvancedInputId": "SERVO",
                        "alias": "continuousServoStartAdvancedInput",
                        "acceptType": "all"
                    }, {
                        "alias": "text",
                        "value": "bloq-continuous-servo-start-advanced-direction"
                    }, {
                        "id": "DIRECTION",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-continuous-servo-start-advanced-clockwise",
                            "value": "0"
                        }, {
                            "label": "bloq-continuous-servo-start-advanced-counterclockwise",
                            "value": "180"
                        }]
                    }]
                ],
                "code": "{SERVO}.write({DIRECTION});"
            },
            "lcdWritePositionAdvanced": {
                "type": "statement",
                "name": "lcdWritePositionAdvanced",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "fe2d7071-a756-4d39-aae0-79b5fb3fd462"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "d99d1f3b-b502-4a4e-b7af-d1ce23f9f858"
                }],
                "bloqClass": "bloq-lcd-writte deprecated",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-lcd-writte-write"
                    }, {
                        "bloqInputId": "TEXT",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "fe2d7071-a756-4d39-aae0-79b5fb3fd462"
                    }, {
                        "alias": "text",
                        "value": "bloq-lcd-writte-inLCD"
                    }, {
                        "bloqInputId": "LCD",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "d99d1f3b-b502-4a4e-b7af-d1ce23f9f858"
                    }, {
                        "alias": "text",
                        "value": "bloq-lcd-writte-advanced-inPosition"
                    }, {
                        "id": "COLUMN",
                        "alias": "numberInput",
                        "value": 0
                    }, {
                        "id": "ROW",
                        "alias": "numberInput",
                        "value": 0
                    }]
                ],
                "code": "{LCD}.setCursor({COLUMN},{ROW});{LCD}.print({TEXT});"
            },
            "pinReadAdvanced": {
                "type": "output",
                "name": "pinReadAdvanced",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "2466a0f2-393c-4351-9f40-1e2e95ae7876"
                }],
                "bloqClass": "bloq-pin-read-advanced",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-pin-read-advanced-readpin"
                    }, {
                        "bloqInputId": "PIN",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "2466a0f2-393c-4351-9f40-1e2e95ae7876"
                    }]
                ],
                "code": "'{PIN}'.indexOf('A') !== -1 ? 'analogRead({PIN})' : 'digitalRead({PIN})'",
                "returnType": {
                    "type": "simple",
                    "value": "bool"
                }
            },
            "pinWriteAdvanced": {
                "type": "statement",
                "name": "pinWriteAdvanced",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "eaf1d520-9081-4eb2-bf6a-4c3c594637cc"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "5b7e464a-ea36-4922-bd01-1fd8c27c1039"
                }],
                "bloqClass": "bloq-pin-writte-advanced",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-pin-writte-advanced-writepin"
                    }, {
                        "bloqInputId": "PIN",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "eaf1d520-9081-4eb2-bf6a-4c3c594637cc"
                    }, {
                        "alias": "text",
                        "value": "bloq-pin-writte-advanced-data"
                    }, {
                        "bloqInputId": "DATA",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "5b7e464a-ea36-4922-bd01-1fd8c27c1039"
                    }]
                ],
                "code": "'{PIN}'.indexOf('A') === 0 ? 'analogWrite({PIN},{DATA});' : 'digitalWrite({PIN},{DATA});'"
            },
            "readSensorAdvanced": {
                "type": "output",
                "name": "readSensorAdvanced",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "f759cd4d-42d0-455e-b0eb-6fa48b818886"
                }],
                "bloqClass": "bloq-read-advanced",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-read-advanced-read"
                    }, {
                        "bloqInputId": "PIN",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "f759cd4d-42d0-455e-b0eb-6fa48b818886"
                    }]
                ],
                "code": "{SENSOR.type}",
                "returnType": {
                    "type": "fromDynamicDropdown",
                    "idDropdown": "SENSOR",
                    "options": "sensors"
                }
            },
            "hts221Humidity": {
                "type": "output",
                "name": "hts221Humidity",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }],
                "bloqClass": "bloq-hts221-humidity",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-hts221-humidity"
                    }, {
                        "id": "SENSOR",
                        "alias": "dynamicDropdown",
                        "options": "hts221"
                    }]
                ],
                "code": "{SENSOR}.getHumidity()",
                "returnType": {
                    "type": "simple",
                    "value": "float"
                }
            },
            "hts221Temperature": {
                "type": "output",
                "name": "hts221Temperature",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }],
                "bloqClass": "bloq-hts221-temperature",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-hts221-temperature"
                    }, {
                        "id": "SENSOR",
                        "alias": "dynamicDropdown",
                        "options": "hts221"
                    }]
                ],
                "code": "{SENSOR}.getTemperature()",
                "returnType": {
                    "type": "simple",
                    "value": "float"
                }
            },
            "lcdClear": {
                "type": "statement",
                "name": "lcdClear",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-lcd-clear",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-lcd-clear"
                    }, {
                        "id": "LCD",
                        "alias": "dynamicDropdown",
                        "options": "lcds"
                    }]
                ],
                "code": "{LCD}.clear();"
            },
            "lcdTurnOnOff": {
                "type": "statement",
                "name": "lcdTurnOnOff",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-lcd-turn-on-off",
                "content": [
                    [{
                        "id": "STATE",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-lcd-turn-on-off-turnon",
                            "value": "HIGH"
                        }, {
                            "label": "bloq-lcd-turn-on-off-turnoff",
                            "value": "LOW"
                        }]
                    }, {
                        "alias": "text",
                        "value": "bloq-lcd-turn-on-off-lcdLigth"
                    }, {
                        "id": "LCD",
                        "alias": "dynamicDropdown",
                        "options": "lcds"
                    }]
                ],
                "code": "{LCD}.setBacklight({STATE});"
            },
            "lcdWrite": {
                "type": "statement",
                "name": "lcdWrite",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-lcd-writte",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-lcd-writte-write"
                    }, {
                        "id": "TEXT",
                        "alias": "stringInput",
                        "placeholder": "bloq-lcd-default"
                    }, {
                        "alias": "text",
                        "value": "bloq-lcd-writte-inLCD"
                    }, {
                        "id": "LCD",
                        "alias": "dynamicDropdown",
                        "options": "lcds"
                    }]
                ],
                "code": "{LCD}.print(\"{TEXT}\");"
            },
            "lcdWritePosition": {
                "type": "statement",
                "name": "lcdWritePosition",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-lcd-writte",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-lcd-writte-write"
                    }, {
                        "id": "TEXT",
                        "alias": "stringInput",
                        "placeholder": "bloq-lcd-default"
                    }, {
                        "alias": "text",
                        "value": "bloq-lcd-writte-inLCD"
                    }, {
                        "id": "LCD",
                        "alias": "dynamicDropdown",
                        "options": "lcds"
                    }, {
                        "alias": "text",
                        "value": "bloq-lcd-writte-advanced-inPosition"
                    }, {
                        "id": "COLUMN",
                        "alias": "numberInput",
                        "value": 0
                    }, {
                        "id": "ROW",
                        "alias": "numberInput",
                        "value": 0
                    }]
                ],
                "code": "{LCD}.setCursor({COLUMN},{ROW});{LCD}.print(\"{TEXT}\");"
            },
            "led": {
                "type": "statement",
                "name": "led",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-led",
                "content": [
                    [{
                        "id": "STATE",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-led-turnon",
                            "value": "HIGH"
                        }, {
                            "label": "bloq-led-turnoff",
                            "value": "LOW"
                        }]
                    }, {
                        "alias": "text",
                        "value": "bloq-led-theLED"
                    }, {
                        "id": "LED",
                        "alias": "dynamicDropdown",
                        "options": "leds"
                    }]
                ],
                "code": "digitalWrite({LED},{STATE});"
            },
            "oscillator": {
                "type": "statement",
                "name": "oscillator",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-oscillator",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-oscillator-oscillate"
                    }, {
                        "id": "OSCILLATOR",
                        "alias": "dynamicDropdown",
                        "options": "oscillators"
                    }, {
                        "alias": "text",
                        "value": "bloq-oscillator-around"
                    }, {
                        "id": "PHASE",
                        "alias": "numberInput",
                        "value": 90
                    }, {
                        "alias": "text",
                        "value": "bloq-oscillator-amplitude"
                    }, {
                        "id": "AMPLITUDE",
                        "alias": "numberInput",
                        "value": 90
                    }, {
                        "alias": "text",
                        "value": "bloq-oscillator-speed"
                    }, {
                        "id": "SPEED",
                        "alias": "numberInput",
                        "value": 2000
                    }]
                ],
                "code": "{OSCILLATOR}.SetO({PHASE});{OSCILLATOR}.SetA({AMPLITUDE});{OSCILLATOR}.SetT({SPEED});{OSCILLATOR}.refresh();"
            },
            "oscillatorStart": {
                "type": "statement",
                "name": "oscillatorStart",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-oscillator-start",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-oscillator-start-oscillator"
                    }, {
                        "id": "OSCILLATOR",
                        "alias": "dynamicDropdown",
                        "options": "oscillators"
                    }]
                ],
                "code": "{OSCILLATOR}.Play();"
            },
            "oscillatorStop": {
                "type": "statement",
                "name": "oscillatorStop",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-oscillator-stop",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-oscillator-stop-stop"
                    }, {
                        "id": "OSCILLATOR",
                        "alias": "dynamicDropdown",
                        "options": "oscillators"
                    }]
                ],
                "code": "{OSCILLATOR}.Stop();"
            },
            "oscillatorTimes": {
                "type": "statement",
                "name": "oscillatorTimes",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-oscillator",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-oscillator-oscillate"
                    }, {
                        "id": "OSCILLATOR",
                        "alias": "dynamicDropdown",
                        "options": "oscillators"
                    }, {
                        "alias": "text",
                        "value": "bloq-oscillator-around"
                    }, {
                        "id": "PHASE",
                        "alias": "numberInput",
                        "value": 90
                    }, {
                        "alias": "text",
                        "value": "bloq-oscillator-amplitude"
                    }, {
                        "id": "AMPLITUDE",
                        "alias": "numberInput",
                        "value": 90
                    }, {
                        "alias": "text",
                        "value": "bloq-oscillator-speed"
                    }, {
                        "id": "SPEED",
                        "alias": "numberInput",
                        "value": 2000
                    }, {
                        "id": "TIMES",
                        "alias": "numberInput",
                        "value": 2
                    }, {
                        "alias": "text",
                        "value": "bloq-oscillator-times"
                    }]
                ],
                "code": "oscillate({OSCILLATOR}, {AMPLITUDE}, {PHASE}, {SPEED}, {TIMES});"
            },
            "readSensor": {
                "type": "output",
                "name": "readSensor",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }],
                "bloqClass": "bloq-read-sensor",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-read-read"
                    }, {
                        "id": "SENSOR",
                        "alias": "dynamicDropdown",
                        "options": "sensors"
                    }]
                ],
                "code": "{SENSOR.type}",
                "returnType": {
                    "type": "fromDynamicDropdown",
                    "idDropdown": "SENSOR",
                    "options": "sensors"
                }
            },
            "clockRTC": {
                "type": "output",
                "name": "clockRTC",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }],
                "bloqClass": "bloq-rtc",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-rtc"
                    }, {
                        "id": "RTC_FUNC",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-rtc-date",
                            "value": "getDate"
                        }, {
                            "label": "bloq-rtc-time",
                            "value": "getTime"
                        }]
                    }, {
                        "alias": "text",
                        "value": "bloq-rtc-using"
                    }, {
                        "id": "RTC",
                        "alias": "dynamicDropdown",
                        "options": "clocks"
                    }]
                ],
                "code": "{RTC}.{RTC_FUNC}()",
                "returnType": {
                    "type": "simple",
                    "value": "String"
                }
            },
            "clockRTCAdvanced": {
                "type": "output",
                "name": "clockRTCAdvanced",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }],
                "bloqClass": "bloq-rtc-advanced",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-rtc-advanced"
                    }, {
                        "id": "FUNCTION",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-rtc-hour",
                            "value": "getHour"
                        }, {
                            "label": "bloq-rtc-minute",
                            "value": "getMinute"
                        }, {
                            "label": "bloq-rtc-second",
                            "value": "getSecond"
                        }, {
                            "label": "bloq-rtc-day",
                            "value": "getDay"
                        }, {
                            "label": "bloq-rtc-month",
                            "value": "getMonth"
                        }, {
                            "label": "bloq-rtc-year",
                            "value": "getYear"
                        }]
                    }, {
                        "alias": "text",
                        "value": "bloq-rtc-using-advanced"
                    }, {
                        "id": "RTC",
                        "alias": "dynamicDropdown",
                        "options": "clocks"
                    }]
                ],
                "code": "{RTC}.{FUNCTION}()",
                "returnType": {
                    "type": "simple",
                    "value": "int"
                }
            },
            "clockRTCInit": {
                "type": "statement",
                "name": "clockRTCInit",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-rtc-init",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-rtc-init"
                    }, {
                        "id": "RTC",
                        "alias": "dynamicDropdown",
                        "options": "clocks"
                    }]
                ],
                "code": "{RTC}.adjust(DateTime(__DATE__, __TIME__));"
            },
            "servoNormal": {
                "type": "statement",
                "name": "servoNormal",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-servo",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-servo-move"
                    }, {
                        "id": "SERVO",
                        "alias": "dynamicDropdown",
                        "options": "servos"
                    }, {
                        "alias": "text",
                        "value": "bloq-servo-to"
                    }, {
                        "id": "POSITION",
                        "alias": "numberInput",
                        "value": 90
                    }, {
                        "alias": "text",
                        "value": "bloq-servo-degrees"
                    }]
                ],
                "code": "{SERVO}.write({POSITION});"
            },
            "elseifAdvanced": {
                "type": "statement-input",
                "name": "elseifAdvanced",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--root",
                    "accept": "connector--top"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "c12a4ad0-21ef-4938-adac-32ac49bae0cc"
                }],
                "bloqClass": "bloq-else-if",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-else-if-if"
                    }, {
                        "bloqInputId": "VAR",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "c12a4ad0-21ef-4938-adac-32ac49bae0cc"
                    }, {
                        "alias": "text",
                        "value": "bloq-else-if-else"
                    }]
                ],
                "code": "else if ({VAR}){{STATEMENTS}}"
            },
            "forAdvanced-v1": {
                "type": "statement-input",
                "name": "forAdvanced-v1",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--root",
                    "accept": "connector--top"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "0baa13b5-5a96-4f16-85d8-c70557f55f76"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "4a2c2c67-d8c8-4b12-b8a4-e4cccdb90ebf"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "d20a2f18-ac40-4ae9-8b8b-6d911558c202"
                }],
                "bloqClass": "bloq-for",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-for-count"
                    }, {
                        "bloqInputId": "VAR",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "0baa13b5-5a96-4f16-85d8-c70557f55f76"
                    }, {
                        "alias": "text",
                        "value": "bloq-for-from"
                    }, {
                        "bloqInputId": "INIT",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "4a2c2c67-d8c8-4b12-b8a4-e4cccdb90ebf"
                    }, {
                        "alias": "text",
                        "value": "bloq-for-to"
                    }, {
                        "bloqInputId": "FINAL",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "d20a2f18-ac40-4ae9-8b8b-6d911558c202"
                    }, {
                        "id": "MODE",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-for-add",
                            "value": "+"
                        }, {
                            "label": "bloq-for-subtract",
                            "value": "-"
                        }]
                    }, {
                        "id": "ADD",
                        "alias": "numberInput",
                        "value": 1
                    }, {
                        "alias": "text",
                        "value": "bloq-for-exec"
                    }]
                ],
                "code": "'for({VAR}={INIT};{VAR}' + ('{MODE}' === '+'?'<=':'>=' ) + '{FINAL};{VAR}{MODE}={ADD}){{STATEMENTS}}'"
            },
            "ifAdvanced": {
                "type": "statement-input",
                "name": "ifAdvanced",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--root",
                    "accept": "connector--top"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "7e633448-49e7-4aa6-b195-cd98e5b4f4c7"
                }],
                "bloqClass": "bloq-if",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-if-if"
                    }, {
                        "bloqInputId": "CONDITION",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "7e633448-49e7-4aa6-b195-cd98e5b4f4c7"
                    }, {
                        "alias": "text",
                        "value": "bloq-if-exec"
                    }]
                ],
                "code": "if({CONDITION}){{STATEMENTS}}"
            },
            "switchAdvanced": {
                "type": "statement-input",
                "name": "switchAdvanced",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--root",
                    "accept": "connector--top"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "72840f88-a613-4981-94a5-edfa5c0213d3"
                }],
                "bloqClass": "bloq-switch",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-switch-check"
                    }, {
                        "bloqInputId": "VAR",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "72840f88-a613-4981-94a5-edfa5c0213d3"
                    }]
                ],
                "code": "switch (int({VAR})) {{STATEMENTS}}"
            },
            "waitAdvanced": {
                "type": "statement",
                "name": "waitAdvanced",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "78693039-07c0-4fd0-ad39-90adad25ae37"
                }],
                "bloqClass": "bloq-wait",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-wait-wait"
                    }, {
                        "bloqInputId": "TIME",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "78693039-07c0-4fd0-ad39-90adad25ae37"
                    }]
                ],
                "code": "delay({TIME});"
            },
            "whileAdvanced": {
                "type": "statement-input",
                "name": "whileAdvanced",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--root",
                    "accept": "connector--top"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "15828cfc-31af-41ce-bcb1-8c660c96f38d"
                }],
                "bloqClass": "bloq-while",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-while-while"
                    }, {
                        "bloqInputId": "CONDITION",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "15828cfc-31af-41ce-bcb1-8c660c96f38d"
                    }, {
                        "alias": "text",
                        "value": "bloq-while-exec"
                    }]
                ],
                "code": "while ({CONDITION}){{STATEMENTS}}"
            },
            "break": {
                "type": "statement",
                "name": "break",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-break",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-break-stopLoop"
                    }]
                ],
                "code": "break;"
            },
            "case": {
                "type": "statement-input",
                "name": "case",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--root",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-case",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-case-ifSameTo"
                    }, {
                        "id": "VAR",
                        "alias": "numberInput",
                        "value": 0
                    }, {
                        "alias": "text",
                        "value": "bloq-case-exec"
                    }]
                ],
                "code": "case {VAR}:{{STATEMENTS}break;}"
            },
            "caseDefault": {
                "type": "statement-input",
                "name": "caseDefault",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--root",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-case-default",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-case-default-inOtherCase"
                    }]
                ],
                "code": "default:{{STATEMENTS}break;}"
            },
            "continue": {
                "type": "statement",
                "name": "continue",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-continue",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-continue-continue"
                    }]
                ],
                "code": "continue;"
            },
            "for": {
                "type": "statement-input",
                "name": "for",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--root",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-for deprecated",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-for-count"
                    }, {
                        "id": "VAR",
                        "alias": "dynamicDropdown",
                        "options": "softwareVars"
                    }, {
                        "alias": "text",
                        "value": "bloq-for-from"
                    }, {
                        "id": "INIT",
                        "alias": "numberInput",
                        "value": 0
                    }, {
                        "alias": "text",
                        "value": "bloq-for-to"
                    }, {
                        "id": "FINAL",
                        "alias": "numberInput",
                        "value": 10
                    }, {
                        "id": "MODE",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-for-add",
                            "value": "++"
                        }, {
                            "label": "bloq-for-subtract",
                            "value": "--"
                        }]
                    }, {
                        "alias": "text",
                        "value": "bloq-for-exec"
                    }]
                ],
                "code": "for({VAR}={INIT};{VAR}<{FINAL};{VAR}{MODE}){{STATEMENTS}}"
            },
            "forAdvanced": {
                "type": "statement-input",
                "name": "forAdvanced",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--root",
                    "accept": "connector--top"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "3650a7b0-9197-4174-ae0d-1fa697709c86"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "14485090-f479-4153-bd3e-12a082f29136"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "4993aee6-8cc2-4101-b32f-d3accacb92a0"
                }],
                "bloqClass": "bloq-for deprecated",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-for-count"
                    }, {
                        "bloqInputId": "VAR",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "3650a7b0-9197-4174-ae0d-1fa697709c86"
                    }, {
                        "alias": "text",
                        "value": "bloq-for-from"
                    }, {
                        "bloqInputId": "INIT",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "14485090-f479-4153-bd3e-12a082f29136"
                    }, {
                        "alias": "text",
                        "value": "bloq-for-to"
                    }, {
                        "bloqInputId": "FINAL",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "4993aee6-8cc2-4101-b32f-d3accacb92a0"
                    }, {
                        "id": "MODE",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-for-add",
                            "value": "++"
                        }, {
                            "label": "bloq-for-subtract",
                            "value": "--"
                        }]
                    }, {
                        "alias": "text",
                        "value": "bloq-for-exec"
                    }]
                ],
                "code": "for({VAR}={INIT};{VAR}<{FINAL};{VAR}{MODE}){{STATEMENTS}}"
            },
            "else": {
                "type": "statement-input",
                "name": "else",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--root",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-else",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-else-else"
                    }]
                ],
                "code": "else {{STATEMENTS}}"
            },
            "elseif": {
                "type": "statement-input",
                "name": "elseif",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--root",
                    "accept": "connector--top"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "49b5ddd1-3c08-4252-b580-92dc049016e5"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "e7c6d463-9101-4c25-9376-95429065c9b6"
                }],
                "bloqClass": "bloq-else-if",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-else-if-if"
                    }, {
                        "bloqInputId": "ARG1",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "49b5ddd1-3c08-4252-b580-92dc049016e5"
                    }, {
                        "id": "OPERATOR",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "=",
                            "value": "=="
                        }, {
                            "label": "!=",
                            "value": "!="
                        }, {
                            "label": ">",
                            "value": ">"
                        }, {
                            "label": ">=",
                            "value": ">="
                        }, {
                            "label": "<",
                            "value": "<"
                        }, {
                            "label": "<=",
                            "value": "<="
                        }]
                    }, {
                        "bloqInputId": "ARG2",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "e7c6d463-9101-4c25-9376-95429065c9b6"
                    }, {
                        "alias": "text",
                        "value": "bloq-else-if-else"
                    }]
                ],
                "code": "else if ({ARG1} {OPERATOR} {ARG2}){{STATEMENTS}}"
            },
            "for-v1": {
                "type": "statement-input",
                "name": "for-v1",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--root",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-for",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-for-count"
                    }, {
                        "id": "VAR",
                        "alias": "dynamicDropdown",
                        "options": "softwareVars"
                    }, {
                        "alias": "text",
                        "value": "bloq-for-from"
                    }, {
                        "id": "INIT",
                        "alias": "numberInput",
                        "value": 0
                    }, {
                        "alias": "text",
                        "value": "bloq-for-to"
                    }, {
                        "id": "FINAL",
                        "alias": "numberInput",
                        "value": 10
                    }, {
                        "id": "MODE",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-for-add",
                            "value": "+"
                        }, {
                            "label": "bloq-for-subtract",
                            "value": "-"
                        }]
                    }, {
                        "id": "ADD",
                        "alias": "numberInput",
                        "value": 1
                    }, {
                        "alias": "text",
                        "value": "bloq-for-exec"
                    }]
                ],
                "code": "'for({VAR}={INIT};{VAR}' + ('{MODE}' === '+'?'<=':'>=' ) + '{FINAL};{VAR}{MODE}={ADD}){{STATEMENTS}}'"
            },
            "if": {
                "type": "statement-input",
                "name": "if",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--root",
                    "accept": "connector--top"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "eddef98f-062a-4a63-9798-c557032f429e"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "82e0bc04-84bf-4aa7-96d7-49ed2d9417e5"
                }],
                "bloqClass": "bloq-if",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-if-if"
                    }, {
                        "bloqInputId": "ARG1",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "eddef98f-062a-4a63-9798-c557032f429e"
                    }, {
                        "id": "OPERATOR",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "=",
                            "value": "=="
                        }, {
                            "label": "!=",
                            "value": "!="
                        }, {
                            "label": ">",
                            "value": ">"
                        }, {
                            "label": ">=",
                            "value": ">="
                        }, {
                            "label": "<",
                            "value": "<"
                        }, {
                            "label": "<=",
                            "value": "<="
                        }]
                    }, {
                        "bloqInputId": "ARG2",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "82e0bc04-84bf-4aa7-96d7-49ed2d9417e5"
                    }, {
                        "alias": "text",
                        "value": "bloq-if-exec"
                    }]
                ],
                "code": "if({ARG1} {OPERATOR} {ARG2}){{STATEMENTS}}"
            },
            "millis": {
                "type": "output",
                "name": "millis",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }],
                "bloqClass": "bloq-millis",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-millis"
                    }]
                ],
                "code": "millis()",
                "returnType": {
                    "type": "simple",
                    "value": "float"
                }
            },
            "switch": {
                "type": "statement-input",
                "name": "switch",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--root",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-switch",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-switch-check"
                    }, {
                        "id": "VAR",
                        "alias": "dynamicDropdown",
                        "options": "softwareVars"
                    }]
                ],
                "code": "switch (int({VAR})) {{STATEMENTS}}"
            },
            "wait": {
                "type": "statement",
                "name": "wait",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-wait",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-wait-wait"
                    }, {
                        "id": "TIME",
                        "alias": "numberInput",
                        "value": 2000
                    }, {
                        "alias": "text",
                        "value": "bloq-wait-ms"
                    }]
                ],
                "code": "delay({TIME});"
            },
            "while": {
                "type": "statement-input",
                "name": "while",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--root",
                    "accept": "connector--top"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "0c389214-9287-46b5-8b16-6be02393a13e"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "9966db62-ea4f-4197-bfcf-2bb65235eeab"
                }],
                "bloqClass": "bloq-while",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-while-while"
                    }, {
                        "bloqInputId": "ARG1",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "0c389214-9287-46b5-8b16-6be02393a13e"
                    }, {
                        "id": "OPERATOR",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "=",
                            "value": "=="
                        }, {
                            "label": "!=",
                            "value": "!="
                        }, {
                            "label": ">",
                            "value": ">"
                        }, {
                            "label": ">=",
                            "value": ">="
                        }, {
                            "label": "<",
                            "value": "<"
                        }, {
                            "label": "<=",
                            "value": "<="
                        }]
                    }, {
                        "bloqInputId": "ARG2",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "9966db62-ea4f-4197-bfcf-2bb65235eeab"
                    }, {
                        "alias": "text",
                        "value": "bloq-while-exec"
                    }]
                ],
                "code": "while ({ARG1} {OPERATOR} {ARG2}){{STATEMENTS}}"
            },
            "numConversion": {
                "type": "output",
                "name": "numConversion",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "2389f662-73ff-4bd9-a38b-4fec891cee9e"
                }],
                "bloqClass": "bloq-num-conversion",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-num-conversion"
                    }, {
                        "bloqInputId": "NUMBER",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "2389f662-73ff-4bd9-a38b-4fec891cee9e"
                    }, {
                        "alias": "text",
                        "value": "bloq-num-conversion-to"
                    }, {
                        "id": "TYPE",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-num-conversion-int",
                            "value": "int"
                        }, {
                            "label": "bloq-num-conversion-float",
                            "value": "float"
                        }]
                    }]
                ],
                "code": "({TYPE}) {NUMBER}",
                "returnType": {
                    "type": "fromDropdown",
                    "idDropdown": "TYPE"
                }
            },
            "stringToInt": {
                "type": "output",
                "name": "stringToInt",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "String",
                    "name": "9157f06b-78ef-4953-9600-166240c36f10"
                }],
                "bloqClass": "bloq-string-to-int",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-string-to-int"
                    }, {
                        "bloqInputId": "VAR",
                        "alias": "bloqInput",
                        "acceptType": "String",
                        "name": "9157f06b-78ef-4953-9600-166240c36f10"
                    }]
                ],
                "code": "{VAR}.toInt()",
                "returnType": {
                    "type": "simple",
                    "value": "int"
                }
            },
            "evolutionDistance": {
                "type": "output",
                "name": "evolutionDistance",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }],
                "bloqClass": "bloq-evolution-distance",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-evolution-distance"
                    }]
                ],
                "code": "evolution.getDistance()",
                "returnType": {
                    "type": "simple",
                    "value": "float"
                }
            },
            "evolutionHeadAdvance": {
                "type": "statement",
                "name": "evolutionHeadAdvance",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "float",
                    "name": "00b8635c-bc51-4a73-8b03-8be09116fbc8"
                }],
                "bloqClass": "bloq-evolution-head",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-evolution-head-advance"
                    }, {
                        "bloqInputId": "DEGREES",
                        "alias": "bloqInput",
                        "acceptType": "float",
                        "name": "00b8635c-bc51-4a73-8b03-8be09116fbc8"
                    }, {
                        "alias": "text",
                        "value": "bloq-evolution-head-advance-deg"
                    }, {
                        "id": "SIDE",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-evolution-head-advance-left",
                            "value": "HEAD_LEFT"
                        }, {
                            "label": "bloq-evolution-head-advance-right",
                            "value": "HEAD_RIGHT"
                        }]
                    }]
                ],
                "code": "'{SIDE}' === 'HEAD_LEFT'? 'evolution.turnHead({DEGREES});' : 'evolution.turnHead(-{DEGREES});'"
            },
            "evolutionIfLightAdvanced": {
                "type": "statement-input",
                "name": "evolutionIfLightAdvanced",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--root",
                    "accept": "connector--top"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "number",
                    "name": "2dc9ba11-18ae-4bd0-a813-dda4a93320a8"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "number",
                    "name": "59fb7984-3f6d-431f-b3cb-e720460ebf45"
                }],
                "bloqClass": "bloq-evolution-if-light-advanced",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-evolution-if-light-advanced"
                    }, {
                        "id": "OPERATORLEFT",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "=",
                            "value": "=="
                        }, {
                            "label": "!=",
                            "value": "!="
                        }, {
                            "label": ">",
                            "value": ">"
                        }, {
                            "label": ">=",
                            "value": ">="
                        }, {
                            "label": "<",
                            "value": "<"
                        }, {
                            "label": "<=",
                            "value": "<="
                        }]
                    }, {
                        "id": "LIGHTLEFT",
                        "alias": "bloqInput",
                        "acceptType": "number",
                        "name": "2dc9ba11-18ae-4bd0-a813-dda4a93320a8"
                    }, {
                        "alias": "text",
                        "value": "bloq-evolution-if-light-advanced-and"
                    }, {
                        "id": "OPERATORRIGHT",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "=",
                            "value": "=="
                        }, {
                            "label": "!=",
                            "value": "!="
                        }, {
                            "label": ">",
                            "value": ">"
                        }, {
                            "label": ">=",
                            "value": ">="
                        }, {
                            "label": "<",
                            "value": "<"
                        }, {
                            "label": "<=",
                            "value": "<="
                        }]
                    }, {
                        "id": "LIGHTRIGHT",
                        "alias": "bloqInput",
                        "acceptType": "number",
                        "name": "59fb7984-3f6d-431f-b3cb-e720460ebf45"
                    }, {
                        "alias": "text",
                        "value": "bloq-evolution-if-light-advanced-then"
                    }]
                ],
                "code": "if(evolution.getLight(LEFT) {OPERATORLEFT} {LIGHTLEFT} && evolution.getLight(RIGHT) {OPERATORRIGHT} {LIGHTRIGHT}){{STATEMENTS}}"
            },
            "evolutionLight": {
                "type": "output",
                "name": "evolutionLight",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }],
                "bloqClass": "bloq-evolution-light",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-evolution-light"
                    }, {
                        "id": "SIDE",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-evolution-light-left",
                            "value": "LEFT"
                        }, {
                            "label": "bloq-evolution-light-right",
                            "value": "RIGHT"
                        }]
                    }, {
                        "alias": "text",
                        "value": "bloq-evolution-light-evolution"
                    }]
                ],
                "code": "evolution.getLight({SIDE})",
                "returnType": {
                    "type": "simple",
                    "value": "int"
                }
            },
            "evolutionLine": {
                "type": "output",
                "name": "evolutionLine",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }],
                "bloqClass": "bloq-evolution-line",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-evolution-line"
                    }, {
                        "id": "SIDE",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-evolution-line-left",
                            "value": "LEFT"
                        }, {
                            "label": "bloq-evolution-line-right",
                            "value": "RIGHT"
                        }]
                    }, {
                        "alias": "text",
                        "value": "bloq-evolution-line-evolution"
                    }]
                ],
                "code": "evolution.getLine({SIDE})",
                "returnType": {
                    "type": "simple",
                    "value": "int"
                }
            },
            "evolutionBuzzer": {
                "type": "statement",
                "name": "evolutionBuzzer",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-evolution-buzzer",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-evolution-buzzer"
                    }, {
                        "id": "NOTE",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-evolution-buzzer-do",
                            "value": "note_C4"
                        }, {
                            "label": "bloq-evolution-buzzer-re",
                            "value": "note_D4"
                        }, {
                            "label": "bloq-evolution-buzzer-mi",
                            "value": "note_E4"
                        }, {
                            "label": "bloq-evolution-buzzer-fa",
                            "value": "note_F4"
                        }, {
                            "label": "bloq-evolution-buzzer-sol",
                            "value": "note_G4"
                        }, {
                            "label": "bloq-evolution-buzzer-la",
                            "value": "note_A4"
                        }, {
                            "label": "bloq-evolution-buzzer-si",
                            "value": "note_B4"
                        }]
                    }, {
                        "alias": "text",
                        "value": "bloq-evolution-buzzer-for"
                    }, {
                        "id": "SECONDS",
                        "alias": "numberInput",
                        "value": 1000
                    }, {
                        "alias": "text",
                        "value": "bloq-evolution-buzzer-ms"
                    }]
                ],
                "code": "evolution._tone({NOTE},{SECONDS});"
            },
            "evolutionHead": {
                "type": "statement",
                "name": "evolutionHead",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-evolution-head",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-evolution-head"
                    }, {
                        "id": "SIDE",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-evolution-head-center",
                            "value": "HEAD_CENTER"
                        }, {
                            "label": "bloq-evolution-head-left",
                            "value": "HEAD_LEFT"
                        }, {
                            "label": "bloq-evolution-head-right",
                            "value": "HEAD_RIGHT"
                        }]
                    }]
                ],
                "code": "evolution.turnHead({SIDE});"
            },
            "evolutionHome": {
                "type": "statement",
                "name": "evolutionHome",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-evolution-rest",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-evolution-rest"
                    }]
                ],
                "code": "evolution.home();"
            },
            "evolutionIfDistance": {
                "type": "statement-input",
                "name": "evolutionIfDistance",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--root",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-evolution-if-distance",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-evolution-if-distance"
                    }, {
                        "id": "OPERATOR",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-evolution-if-distance-less",
                            "value": "<"
                        }, {
                            "label": "bloq-evolution-if-distance-more",
                            "value": ">"
                        }]
                    }, {
                        "alias": "text",
                        "value": "bloq-evolution-if-distance-than"
                    }, {
                        "id": "DISTANCE",
                        "alias": "numberInput",
                        "value": 15
                    }, {
                        "alias": "text",
                        "value": "bloq-evolution-if-distance-then"
                    }]
                ],
                "code": "if(evolution.getDistance() {OPERATOR} {DISTANCE}){{STATEMENTS}}"
            },
            "evolutionIfLight": {
                "type": "statement-input",
                "name": "evolutionIfLight",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--root",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-evolution-if-light",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-evolution-if-light"
                    }, {
                        "id": "RANGELEFT",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-evolution-if-light-high",
                            "value": "HIGH_LIGHT"
                        }, {
                            "label": "bloq-evolution-if-light-medium",
                            "value": "MEDIUM_LIGHT"
                        }, {
                            "label": "bloq-evolution-if-light-low",
                            "value": "LOW_LIGHT"
                        }]
                    }, {
                        "alias": "text",
                        "value": "bloq-evolution-if-light-and"
                    }, {
                        "id": "RANGERIGHT",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-evolution-if-light-high",
                            "value": "HIGH_LIGHT"
                        }, {
                            "label": "bloq-evolution-if-light-medium",
                            "value": "MEDIUM_LIGHT"
                        }, {
                            "label": "bloq-evolution-if-light-low",
                            "value": "LOW_LIGHT"
                        }]
                    }, {
                        "alias": "text",
                        "value": "bloq-evolution-if-light-then"
                    }]
                ],
                "code": "if(evolution.getLightRange(LEFT,RANGELEFT) && evolution.getLightRange(RIGHT,RANGERIGHT)){{STATEMENTS}}"
            },
            "evolutionIfLine": {
                "type": "statement-input",
                "name": "evolutionIfLine",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--root",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-evolution-if-line",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-evolution-if-line"
                    }, {
                        "id": "LINELEFT",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-evolution-if-line-white",
                            "value": "0"
                        }, {
                            "label": "bloq-evolution-if-line-black",
                            "value": "1"
                        }]
                    }, {
                        "alias": "text",
                        "value": "bloq-evolution-if-line-and"
                    }, {
                        "id": "LINERIGHT",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-evolution-if-line-white",
                            "value": "0"
                        }, {
                            "label": "bloq-evolution-if-line-black",
                            "value": "1"
                        }]
                    }, {
                        "alias": "text",
                        "value": "bloq-evolution-if-line-then"
                    }]
                ],
                "code": "if(evolution.getLine(LEFT) == {LINELEFT} && evolution.getLine(RIGHT) == {LINERIGHT}){{STATEMENTS}}"
            },
            "evolutionMovementsSimple": {
                "type": "statement",
                "name": "evolutionMovementsSimple",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-evolution-movements-simple",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-evolution-movements-simple"
                    }, {
                        "id": "MOVEMENT",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-evolution-movements-simple-fordward",
                            "value": "fordward"
                        }, {
                            "label": "bloq-evolution-movements-simple-backward",
                            "value": "backward"
                        }, {
                            "label": "bloq-evolution-movements-simple-right",
                            "value": "right"
                        }, {
                            "label": "bloq-evolution-movements-simple-left",
                            "value": "left"
                        }]
                    }]
                ],
                "code": "evolution.{MOVEMENT}();"
            },
            "argument": {
                "type": "output",
                "name": "argument",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }],
                "bloqClass": "bloq-argument",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-argument-var"
                    }, {
                        "id": "TYPE",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-argument-int",
                            "value": "int"
                        }, {
                            "label": "bloq-argument-float",
                            "value": "float"
                        }, {
                            "label": "bloq-argument-string",
                            "value": "String"
                        }, {
                            "label": "bloq-argument-char",
                            "value": "char"
                        }, {
                            "label": "bloq-argument-bool",
                            "value": "bool"
                        }]
                    }, {
                        "id": "VARNAME",
                        "alias": "varInput",
                        "value": ""
                    }]
                ],
                "createDynamicContent": "softwareVars",
                "code": "{TYPE} {VARNAME}",
                "returnType": {
                    "type": "fromDropdown",
                    "idDropdown": "TYPE",
                    "options": "softwareVars"
                }
            },
            "arguments": {
                "type": "output",
                "name": "arguments",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "d7e20b5c-3939-4e96-93dc-30aebf2b64c9"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "99234802-2fbc-4866-b413-f1af75abfdf6"
                }],
                "bloqClass": "bloq-arguments",
                "content": [
                    [{
                        "bloqInputId": "ARG1",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "d7e20b5c-3939-4e96-93dc-30aebf2b64c9"
                    }, {
                        "alias": "text",
                        "value": ","
                    }, {
                        "bloqInputId": "ARG2",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "99234802-2fbc-4866-b413-f1af75abfdf6"
                    }]
                ],
                "createDynamicContent": "softwareVars",
                "code": "{ARG1},{ARG2}",
                "returnType": {
                    "type": "simple",
                    "value": "var"
                }
            },
            "invokeFunctionWithArguments": {
                "type": "statement",
                "name": "invokeFunctionWithArguments",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "fe804f29-2a6b-4e0e-a02b-8c2ae96e4472"
                }],
                "bloqClass": "bloq-invoke-function-with-arguments",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-invoke-function-exec"
                    }, {
                        "id": "FUNCTION",
                        "alias": "dynamicDropdown",
                        "options": "voidFunctions"
                    }, {
                        "alias": "text",
                        "value": "bloq-invoke-function-args"
                    }, {
                        "bloqInputId": "ARGS",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "fe804f29-2a6b-4e0e-a02b-8c2ae96e4472"
                    }]
                ],
                "code": "{FUNCTION}({ARGS});",
                "dynamicDropdown": {
                    "idDropdown": "FUNCTION",
                    "options": "voidFunctions"
                }
            },
            "invokeReturnFunctionWithArguments": {
                "type": "output",
                "name": "invokeReturnFunctionWithArguments",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "51828a12-4317-4316-9d88-12f2d127f447"
                }],
                "bloqClass": "bloq-invoke-return-function-with-arguments",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-invoke-return-function-exec"
                    }, {
                        "id": "FUNCTION",
                        "alias": "dynamicDropdown",
                        "options": "returnFunctions"
                    }, {
                        "alias": "text",
                        "value": "bloq-invoke-function-args"
                    }, {
                        "bloqInputId": "ARGS",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "51828a12-4317-4316-9d88-12f2d127f447"
                    }]
                ],
                "code": "{FUNCTION}({ARGS})",
                "returnType": {
                    "type": "fromDynamicDropdown",
                    "idDropdown": "FUNCTION",
                    "options": "returnFunctions"
                }
            },
            "return": {
                "type": "statement",
                "name": "return",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "71c95139-77d4-42d0-8646-88e432b48cd5"
                }],
                "bloqClass": "bloq-return",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-return-return"
                    }, {
                        "bloqInputId": "RETURN",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "71c95139-77d4-42d0-8646-88e432b48cd5"
                    }]
                ],
                "code": "return {RETURN};"
            },
            "returnFunctionWithArguments": {
                "type": "statement-input",
                "name": "returnFunctionWithArguments",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--root",
                    "accept": "connector--top"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "10f62c3e-5a74-42b1-bd7b-b62e7ba82246"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "e4eaed75-8741-45ea-8dd0-bbd9776295dd"
                }],
                "bloqClass": "bloq-return-function-with-arguments",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-return-function-with-arguments-declare"
                    }, {
                        "id": "FUNCNAME",
                        "alias": "varInput",
                        "placeholder": "bloq-functions-default"
                    }, {
                        "alias": "text",
                        "value": "bloq-return-function-with-arguments-count"
                    }, {
                        "bloqInputId": "ARGS",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "10f62c3e-5a74-42b1-bd7b-b62e7ba82246"
                    }, {
                        "position": "DOWN",
                        "alias": "text",
                        "value": "bloq-return-function-with-arguments-return"
                    }, {
                        "position": "DOWN",
                        "bloqInputId": "RETURN",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "e4eaed75-8741-45ea-8dd0-bbd9776295dd"
                    }]
                ],
                "createDynamicContent": "returnFunctions",
                "returnType": {
                    "type": "fromInput",
                    "bloqInputId": "RETURN"
                },
                "arguments": {
                    "type": "fromInput",
                    "bloqInputId": "ARGS"
                },
                "code": "{RETURN.connectionType} {FUNCNAME} ({ARGS}) {{STATEMENTS}return {RETURN};}"
            },
            "voidFunctionWithArguments": {
                "type": "statement-input",
                "name": "voidFunctionWithArguments",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--root",
                    "accept": "connector--top"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "e9864451-638d-4c6e-bd6b-69bd4af0cb68"
                }],
                "bloqClass": "bloq-void-function-with-arguments",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-void-function-with-arguments-declare"
                    }, {
                        "id": "FUNCNAME",
                        "alias": "varInput",
                        "placeholder": "bloq-functions-default"
                    }, {
                        "alias": "text",
                        "value": "bloq-void-function-with-arguments-count"
                    }, {
                        "bloqInputId": "ARGS",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "e9864451-638d-4c6e-bd6b-69bd4af0cb68"
                    }]
                ],
                "createDynamicContent": "voidFunctions",
                "returnType": {
                    "type": "simple",
                    "value": "void"
                },
                "arguments": {
                    "type": "fromInput",
                    "bloqInputId": "ARGS"
                },
                "code": "void {FUNCNAME} ({ARGS}){{STATEMENTS}}"
            },
            "invokeFunction": {
                "type": "statement",
                "name": "invokeFunction",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-invoke-function",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-invoke-function-exec"
                    }, {
                        "id": "FUNCTION",
                        "alias": "dynamicDropdown",
                        "options": "voidFunctions"
                    }]
                ],
                "code": "{FUNCTION}();",
                "dynamicDropdown": {
                    "idDropdown": "FUNCTION",
                    "options": "voidFunctions"
                }
            },
            "invokeReturnFunction": {
                "type": "output",
                "name": "invokeReturnFunction",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }],
                "bloqClass": "bloq-invoke-return-function",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-invoke-return-function-exec"
                    }, {
                        "id": "FUNCTION",
                        "alias": "dynamicDropdown",
                        "options": "returnFunctions"
                    }]
                ],
                "code": "{FUNCTION}()",
                "returnType": {
                    "type": "fromDynamicDropdown",
                    "idDropdown": "FUNCTION",
                    "options": "returnFunctions"
                }
            },
            "returnFunction": {
                "type": "statement-input",
                "name": "returnFunction",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--root",
                    "accept": "connector--top"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "10711311-e515-493b-ba2b-22899b993034"
                }],
                "bloqClass": "bloq-return-function",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-return-function-declare"
                    }, {
                        "id": "FUNCNAME",
                        "alias": "varInput",
                        "placeholder": "bloq-functions-default"
                    }, {
                        "position": "DOWN",
                        "alias": "text",
                        "value": "bloq-return-function-return"
                    }, {
                        "position": "DOWN",
                        "bloqInputId": "RETURN",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "10711311-e515-493b-ba2b-22899b993034"
                    }]
                ],
                "createDynamicContent": "returnFunctions",
                "returnType": {
                    "type": "fromInput",
                    "bloqInputId": "RETURN"
                },
                "code": "{RETURN.connectionType} {FUNCNAME} () {{STATEMENTS}return {RETURN};}"
            },
            "voidFunction": {
                "type": "statement-input",
                "name": "voidFunction",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--root",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-void-function",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-void-function-declare"
                    }, {
                        "id": "FUNCNAME",
                        "alias": "varInput",
                        "placeholder": "bloq-functions-default"
                    }]
                ],
                "createDynamicContent": "voidFunctions",
                "returnType": {
                    "type": "simple",
                    "value": "void"
                },
                "code": "void {FUNCNAME} (){{STATEMENTS}}"
            },
            "group": {
                "name": "group",
                "type": "group",
                "connectors": [{
                    "type": "connector--empty"
                }, {
                    "type": "connector--empty"
                }, {
                    "type": "connector--root",
                    "accept": "connector--top"
                }]
            },
            "boolArrayAdvanced": {
                "type": "output",
                "name": "boolArrayAdvanced",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "095bbc44-adce-4b5f-92f8-498acfaface8"
                }],
                "bloqClass": "bloq-boolArray-advanced",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-boolArray-advanced-arraySize"
                    }, {
                        "bloqInputId": "VALUE",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "095bbc44-adce-4b5f-92f8-498acfaface8"
                    }, {
                        "alias": "text",
                        "value": "bloq-boolArray-advanced-boolType"
                    }]
                ],
                "code": "(bool *)malloc({VALUE}*sizeof(bool))",
                "returnType": {
                    "type": "simple",
                    "value": "bool *"
                }
            },
            "boolArray": {
                "type": "output",
                "name": "boolArray",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }],
                "bloqClass": "bloq-boolArray",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-boolArray-arraySize"
                    }, {
                        "id": "VALUE",
                        "alias": "numberInput",
                        "value": 0
                    }, {
                        "alias": "text",
                        "value": "bloq-boolArray-boolType"
                    }]
                ],
                "code": "(bool *)malloc({VALUE}*sizeof(bool))",
                "returnType": {
                    "type": "simple",
                    "value": "bool *"
                }
            },
            "boolean": {
                "type": "output",
                "name": "boolean",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }],
                "bloqClass": "bloq-boolean",
                "content": [
                    [{
                        "id": "STATE",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-boolean-true",
                            "value": "true"
                        }, {
                            "label": "bloq-boolean-false",
                            "value": "false"
                        }]
                    }]
                ],
                "code": "{STATE}",
                "returnType": {
                    "type": "simple",
                    "value": "bool"
                }
            },
            "equalityOperations": {
                "type": "output",
                "name": "equalityOperations",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "45df525f-c5f8-4378-be11-21e53c913d7b"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "bb79d863-80a5-48aa-902f-daa72c5ffe0e"
                }],
                "bloqClass": "bloq-equality-operations",
                "content": [
                    [{
                        "bloqInputId": "ARG1",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "45df525f-c5f8-4378-be11-21e53c913d7b"
                    }, {
                        "id": "OPERATOR",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "=",
                            "value": "=="
                        }, {
                            "label": "!=",
                            "value": "!="
                        }, {
                            "label": ">",
                            "value": ">"
                        }, {
                            "label": ">=",
                            "value": ">="
                        }, {
                            "label": "<",
                            "value": "<"
                        }, {
                            "label": "<=",
                            "value": "<="
                        }]
                    }, {
                        "bloqInputId": "ARG2",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "bb79d863-80a5-48aa-902f-daa72c5ffe0e"
                    }]
                ],
                "code": "{ARG1} {OPERATOR} {ARG2}",
                "returnType": {
                    "type": "simple",
                    "value": "bool"
                }
            },
            "logicOperations": {
                "type": "output",
                "name": "logicOperations",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "db2684c7-f6ea-4e41-8376-a43e112857d8"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "591531ad-b0e8-408f-b16d-7e765cb5d842"
                }],
                "bloqClass": "bloq-logic-operations",
                "content": [
                    [{
                        "bloqInputId": "ARG1",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "db2684c7-f6ea-4e41-8376-a43e112857d8"
                    }, {
                        "id": "OPERATOR",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-logic-operations-and",
                            "value": "&&"
                        }, {
                            "label": "bloq-logic-operations-or",
                            "value": "||"
                        }]
                    }, {
                        "bloqInputId": "ARG2",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "591531ad-b0e8-408f-b16d-7e765cb5d842"
                    }]
                ],
                "code": "{ARG1} {OPERATOR} {ARG2}",
                "returnType": {
                    "type": "simple",
                    "value": "bool"
                }
            },
            "not": {
                "type": "output",
                "name": "not",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "9f07b94b-133e-4172-a6b9-0d4426e80a71"
                }],
                "bloqClass": "bloq-not",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-not-not"
                    }, {
                        "bloqInputId": "CONDITION",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "9f07b94b-133e-4172-a6b9-0d4426e80a71"
                    }]
                ],
                "code": "!{CONDITION}",
                "returnType": {
                    "type": "simple",
                    "value": "bool"
                }
            },
            "loopBloq": {
                "name": "loopBloq",
                "type": "group",
                "connectors": [{
                    "type": "connector--empty"
                }, {
                    "type": "connector--empty"
                }, {
                    "type": "connector--root",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-loop",
                "headerText": "bloq-loop-header",
                "descriptionText": "bloq-loop-description",
                "content": [],
                "code": "void loop(){{STATEMENTS}}"
            },
            "setupBloq": {
                "name": "setupBloq",
                "type": "group",
                "connectors": [{
                    "type": "connector--empty"
                }, {
                    "type": "connector--empty"
                }, {
                    "type": "connector--root",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-setup",
                "headerText": "bloq-setup-header",
                "descriptionText": "bloq-setup-description",
                "content": [],
                "code": "void setup(){{STATEMENTS}}"
            },
            "varsBloq": {
                "name": "varsBloq",
                "type": "group",
                "connectors": [{
                    "type": "connector--empty"
                }, {
                    "type": "connector--empty"
                }, {
                    "type": "connector--root",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-vars",
                "headerText": "bloq-var-header",
                "descriptionText": "bloq-var-description",
                "content": [],
                "code": "{STATEMENTS}"
            },
            "mapAdvanced": {
                "type": "output",
                "name": "mapAdvanced",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "float",
                    "name": "59514d4c-e29d-4f7e-892b-4eadfb199ce7"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "float",
                    "name": "3e2e1b8f-2c0f-49ed-9a59-6abac5294fb4"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "float",
                    "name": "9a94702d-a6f9-4768-9518-cd49f6f110a8"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "float",
                    "name": "761ab971-9454-436c-979c-d7528c6667d7"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "float",
                    "name": "de6ccaba-271c-4103-8a86-4d01ad1c3169"
                }],
                "bloqClass": "bloq-map-advanced",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-map-advanced-map"
                    }, {
                        "bloqInputId": "VAR",
                        "alias": "bloqInput",
                        "acceptType": "float",
                        "name": "59514d4c-e29d-4f7e-892b-4eadfb199ce7"
                    }, {
                        "alias": "text",
                        "value": "bloq-map-advanced-value"
                    }, {
                        "bloqInputId": "INITMIN",
                        "alias": "bloqInput",
                        "acceptType": "float",
                        "name": "3e2e1b8f-2c0f-49ed-9a59-6abac5294fb4"
                    }, {
                        "alias": "text",
                        "value": "-"
                    }, {
                        "bloqInputId": "INITMAX",
                        "alias": "bloqInput",
                        "acceptType": "float",
                        "name": "9a94702d-a6f9-4768-9518-cd49f6f110a8"
                    }, {
                        "alias": "text",
                        "value": "bloq-map-advanced-and"
                    }, {
                        "bloqInputId": "FINMIN",
                        "alias": "bloqInput",
                        "acceptType": "float",
                        "name": "761ab971-9454-436c-979c-d7528c6667d7"
                    }, {
                        "alias": "text",
                        "value": "-"
                    }, {
                        "bloqInputId": "FINMAX",
                        "alias": "bloqInput",
                        "acceptType": "float",
                        "name": "de6ccaba-271c-4103-8a86-4d01ad1c3169"
                    }, {
                        "alias": "text",
                        "value": "]"
                    }]
                ],
                "code": "map({VAR},{INITMIN},{INITMAX},{FINMIN},{FINMAX})",
                "returnType": {
                    "type": "simple",
                    "value": "float"
                }
            },
            "mathOperations": {
                "type": "output",
                "name": "mathOperations",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "f3efdecb-5b6c-4311-831b-95d25e3a040d"
                }],
                "bloqClass": "bloq-math-operations",
                "content": [
                    [{
                        "id": "OPERATOR",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-math-operations-sqrt",
                            "value": "sqrt"
                        }, {
                            "label": "bloq-math-operations-abs",
                            "value": "abs"
                        }, {
                            "label": "ln",
                            "value": "log"
                        }, {
                            "label": "log10",
                            "value": "log10"
                        }, {
                            "label": "e^",
                            "value": "exp"
                        }]
                    }, {
                        "bloqInputId": "ARG",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "f3efdecb-5b6c-4311-831b-95d25e3a040d"
                    }]
                ],
                "code": "{OPERATOR}({ARG})",
                "returnType": {
                    "type": "simple",
                    "value": "float"
                }
            },
            "numberArrayAdvanced": {
                "type": "output",
                "name": "numberArrayAdvanced",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "c4a2264e-ce23-43de-9cdc-c5033629c07c"
                }],
                "bloqClass": "bloq-numberArray-advanced",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-numberArray-advanced-arraySize"
                    }, {
                        "bloqInputId": "VALUE",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "c4a2264e-ce23-43de-9cdc-c5033629c07c"
                    }, {
                        "alias": "text",
                        "value": "bloq-numberArray-advanced-type"
                    }, {
                        "id": "TYPE",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-numberArray-advanced-float",
                            "value": "float *"
                        }, {
                            "label": "bloq-numberArray-advanced-int",
                            "value": "int *"
                        }]
                    }]
                ],
                "code": "({TYPE})malloc({VALUE}*sizeof({TYPE.withoutAsterisk}))",
                "returnType": {
                    "type": "fromDropdown",
                    "idDropdown": "TYPE",
                    "options": "softwareVars"
                }
            },
            "basicOperations": {
                "type": "output",
                "name": "basicOperations",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "a8e477d9-6623-498b-b65d-a73bdfd7575c"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "5b96efbe-61d9-4c74-a6cd-98164f7374e7"
                }],
                "bloqClass": "bloq-basic-operations",
                "content": [
                    [{
                        "bloqInputId": "ARG1",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "a8e477d9-6623-498b-b65d-a73bdfd7575c"
                    }, {
                        "id": "OPERATOR",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "+",
                            "value": "+"
                        }, {
                            "label": "-",
                            "value": "-"
                        }, {
                            "label": "x",
                            "value": "*"
                        }, {
                            "label": "/",
                            "value": "/"
                        }, {
                            "label": "^",
                            "value": "^"
                        }, {
                            "label": "%",
                            "value": "%"
                        }]
                    }, {
                        "bloqInputId": "ARG2",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "5b96efbe-61d9-4c74-a6cd-98164f7374e7"
                    }]
                ],
                "code": "'{OPERATOR}' === '^'? 'pow({ARG1},{ARG2})' : '({ARG1} {OPERATOR} {ARG2})'",
                "returnType": {
                    "type": "simple",
                    "value": "float"
                }
            },
            "map": {
                "type": "output",
                "name": "map",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "float",
                    "name": "06c5572f-cdc4-45c1-847e-820eea610df5"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "float",
                    "name": "a38f4793-0c7b-4b8b-94fd-38cb78b8a77d"
                }],
                "bloqClass": "bloq-map",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-map-map"
                    }, {
                        "bloqInputId": "VAR",
                        "alias": "bloqInput",
                        "acceptType": "float",
                        "name": "06c5572f-cdc4-45c1-847e-820eea610df5"
                    }, {
                        "alias": "text",
                        "value": "bloq-map-value"
                    }, {
                        "bloqInputId": "MAXVAL",
                        "alias": "bloqInput",
                        "acceptType": "float",
                        "name": "a38f4793-0c7b-4b8b-94fd-38cb78b8a77d"
                    }, {
                        "alias": "text",
                        "value": "]"
                    }]
                ],
                "code": "map({VAR},0,1023,0,{MAXVAL})",
                "returnType": {
                    "type": "simple",
                    "value": "float"
                }
            },
            "number": {
                "type": "output",
                "name": "number",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }],
                "bloqClass": "bloq-number",
                "content": [
                    [{
                        "id": "VALUE",
                        "alias": "numberInput",
                        "value": 0
                    }]
                ],
                "code": "{VALUE}",
                "returnType": {
                    "type": "simple",
                    "value": "float"
                }
            },
            "numberArray": {
                "type": "output",
                "name": "numberArray",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }],
                "bloqClass": "bloq-numberArray",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-numberArray-arraySize"
                    }, {
                        "id": "VALUE",
                        "alias": "numberInput",
                        "value": 3
                    }, {
                        "alias": "text",
                        "value": "bloq-numberArray-floatType"
                    }]
                ],
                "code": "(float*)malloc({VALUE}*sizeof(float))",
                "returnType": {
                    "type": "simple",
                    "value": "float *"
                }
            },
            "random": {
                "type": "output",
                "name": "random",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "float",
                    "name": "dee023ca-cbbc-4054-a515-fa0b52d87027"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "float",
                    "name": "1563871d-15b3-4456-9d54-2cb7dc0a60ec"
                }],
                "bloqClass": "bloq-random",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-random-random"
                    }, {
                        "bloqInputId": "ARG1",
                        "alias": "bloqInput",
                        "acceptType": "float",
                        "name": "dee023ca-cbbc-4054-a515-fa0b52d87027"
                    }, {
                        "alias": "text",
                        "value": "bloq-random-and"
                    }, {
                        "bloqInputId": "ARG2",
                        "alias": "bloqInput",
                        "acceptType": "float",
                        "name": "1563871d-15b3-4456-9d54-2cb7dc0a60ec"
                    }]
                ],
                "code": "random({ARG1},{ARG2}+1)",
                "returnType": {
                    "type": "simple",
                    "value": "float"
                }
            },
            "randomSeed": {
                "type": "statement",
                "name": "randomSeed",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-random-seed",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-random-seed"
                    }]
                ],
                "code": "randomSeed(micros());",
                "returnType": {
                    "type": "simple",
                    "value": "float"
                }
            },
            "output": {
                "type": "output",
                "name": "output",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }]
            },
            "statement": {
                "type": "statement",
                "name": "statement",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }]
            },
            "statement-input": {
                "type": "statement-input",
                "name": "statement-input",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--root",
                    "accept": "connector--top"
                }]
            },
            "char": {
                "type": "output",
                "name": "char",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }],
                "bloqClass": "bloq-string",
                "content": [
                    [{
                        "alias": "text",
                        "value": "'"
                    }, {
                        "id": "TEXT",
                        "alias": "charInput",
                        "placeholder": "bloq-char"
                    }, {
                        "alias": "text",
                        "value": "'"
                    }]
                ],
                "code": "'{TEXT}'",
                "returnType": {
                    "type": "simple",
                    "value": "char"
                }
            },
            "stringArrayAdvanced": {
                "type": "output",
                "name": "stringArrayAdvanced",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "f6a2e865-4d05-4736-9136-b3b4ce753dc3"
                }],
                "bloqClass": "bloq-stringArray-advanced",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-stringArray-advanced-arraySize"
                    }, {
                        "bloqInputId": "VALUE",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "f6a2e865-4d05-4736-9136-b3b4ce753dc3"
                    }, {
                        "alias": "text",
                        "value": "bloq-stringArray-advanced-type"
                    }, {
                        "id": "TYPE",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-stringArray-advanced-string",
                            "value": "String *"
                        }, {
                            "label": "bloq-stringArray-advanced-char",
                            "value": "char *"
                        }]
                    }]
                ],
                "code": "({TYPE})malloc({VALUE}*sizeof({TYPE.withoutAsterisk}))",
                "returnType": {
                    "type": "fromDropdown",
                    "idDropdown": "TYPE",
                    "options": "softwareVars"
                }
            },
            "length": {
                "type": "output",
                "name": "length",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "String",
                    "name": "6c5e3f13-3984-4864-a5f0-18b7c7b1f91d"
                }],
                "bloqClass": "bloq-length",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-length-length"
                    }, {
                        "bloqInputId": "TEXT",
                        "alias": "bloqInput",
                        "acceptType": "String",
                        "name": "6c5e3f13-3984-4864-a5f0-18b7c7b1f91d"
                    }]
                ],
                "code": "{TEXT}.length()",
                "returnType": {
                    "type": "simple",
                    "value": "float"
                }
            },
            "string": {
                "type": "output",
                "name": "string",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }],
                "bloqClass": "bloq-string",
                "content": [
                    [{
                        "alias": "text",
                        "value": "\""
                    }, {
                        "id": "TEXT",
                        "alias": "stringInput",
                        "placeholder": "bloq-string-string"
                    }, {
                        "alias": "text",
                        "value": "\""
                    }]
                ],
                "code": "\"{TEXT}\"",
                "returnType": {
                    "type": "simple",
                    "value": "String"
                }
            },
            "stringArray": {
                "type": "output",
                "name": "stringArray",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }],
                "bloqClass": "bloq-stringArray",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-stringArray-arraySize"
                    }, {
                        "id": "VALUE",
                        "alias": "numberInput",
                        "value": 3
                    }, {
                        "alias": "text",
                        "value": "bloq-stringArray-stringType"
                    }]
                ],
                "code": "(String *)malloc({VALUE}*sizeof(String))",
                "returnType": {
                    "type": "simple",
                    "value": "String *"
                }
            },
            "stringCreate": {
                "type": "output",
                "name": "stringCreate",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "25ce044c-89da-433d-9a95-9b361825d16d"
                }],
                "bloqClass": "bloq-string-create",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-string-create-create"
                    }, {
                        "bloqInputId": "TEXT",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "25ce044c-89da-433d-9a95-9b361825d16d"
                    }]
                ],
                "code": "String({TEXT})",
                "returnType": {
                    "type": "simple",
                    "value": "String"
                }
            },
            "stringSum": {
                "type": "output",
                "name": "stringSum",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "String",
                    "name": "2ab1835b-8c76-426b-a9f7-942f1d2698c9"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "String",
                    "name": "d3791943-f904-4e2e-ba3f-ff26a0b23165"
                }],
                "bloqClass": "bloq-string-sum",
                "content": [
                    [{
                        "bloqInputId": "ARG1",
                        "alias": "bloqInput",
                        "acceptType": "String",
                        "name": "2ab1835b-8c76-426b-a9f7-942f1d2698c9"
                    }, {
                        "alias": "text",
                        "value": "+"
                    }, {
                        "bloqInputId": "ARG2",
                        "alias": "bloqInput",
                        "acceptType": "String",
                        "name": "d3791943-f904-4e2e-ba3f-ff26a0b23165"
                    }]
                ],
                "code": "String({ARG1})+String({ARG2})",
                "returnType": {
                    "type": "simple",
                    "value": "String"
                }
            },
            "arrayVariableAdvanced": {
                "type": "output",
                "name": "arrayVariableAdvanced",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "ffd52cf5-42da-4f8a-aab2-d9b9a4f4e349"
                }],
                "bloqClass": "bloq-array-variable",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-array-variable-variable"
                    }, {
                        "id": "VAR",
                        "alias": "dynamicDropdown",
                        "options": "softwareVars"
                    }, {
                        "alias": "text",
                        "value": "["
                    }, {
                        "bloqInputId": "POSITION",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "ffd52cf5-42da-4f8a-aab2-d9b9a4f4e349"
                    }, {
                        "alias": "text",
                        "value": "]"
                    }]
                ],
                "code": "{VAR}[{POSITION}]",
                "returnType": {
                    "type": "fromDynamicDropdown",
                    "idDropdown": "VAR",
                    "pointer": "true",
                    "options": "softwareVars"
                }
            },
            "declareVariableAdvanced": {
                "type": "statement",
                "name": "declareVariableAdvanced",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "5acbea42-4537-40d4-adbb-04e00cd31ef0"
                }],
                "bloqClass": "bloq-declare-variable",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-declare-variable-declare"
                    }, {
                        "id": "NAME",
                        "alias": "varInput",
                        "value": ""
                    }, {
                        "alias": "text",
                        "value": "bloq-declare-variable-declare-type"
                    }, {
                        "id": "TYPE",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-declare-variable-declare-type-int",
                            "value": "int"
                        }, {
                            "label": "bloq-declare-variable-declare-type-float",
                            "value": "float"
                        }, {
                            "label": "bloq-declare-variable-declare-type-text",
                            "value": "String"
                        }, {
                            "label": "bloq-declare-variable-declare-type-char",
                            "value": "char"
                        }, {
                            "label": "bloq-declare-variable-declare-type-bool",
                            "value": "bool"
                        }]
                    }, {
                        "alias": "text",
                        "value": "="
                    }, {
                        "bloqInputId": "VALUE",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "5acbea42-4537-40d4-adbb-04e00cd31ef0"
                    }]
                ],
                "returnType": {
                    "type": "fromDropdown",
                    "idDropdown": "TYPE"
                },
                "createDynamicContent": "softwareVars",
                "code": "{TYPE} {NAME} = {VALUE};"
            },
            "hwVariable": {
                "type": "output",
                "name": "hwVariable",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }],
                "bloqClass": "bloq-hw-variable-advanced",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-hw-variable-advanced-variable"
                    }, {
                        "id": "COMPONENT",
                        "alias": "dynamicDropdown",
                        "options": "varComponents"
                    }]
                ],
                "code": "{COMPONENT}",
                "returnType": {
                    "type": "fromDynamicDropdown",
                    "idDropdown": "COMPONENT",
                    "options": "varComponents"
                }
            },
            "setArrayVariableAdvanced": {
                "type": "statement",
                "name": "setArrayVariableAdvanced",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "e9510b5d-42e8-4e6c-8410-532e170d7b49"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "5bb90cb1-09df-441f-aac5-d936db4f3a49"
                }],
                "bloqClass": "bloq-set-variableArray",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-set-variableArray-variable"
                    }, {
                        "id": "NAME",
                        "alias": "dynamicDropdown",
                        "options": "softwareVars"
                    }, {
                        "alias": "text",
                        "value": "["
                    }, {
                        "bloqInputId": "ITERATOR",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "e9510b5d-42e8-4e6c-8410-532e170d7b49"
                    }, {
                        "alias": "text",
                        "value": "]"
                    }, {
                        "alias": "text",
                        "value": "="
                    }, {
                        "bloqInputId": "VALUE",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "5bb90cb1-09df-441f-aac5-d936db4f3a49"
                    }]
                ],
                "code": "{NAME}[{ITERATOR}] = {VALUE};"
            },
            "arrayVariable": {
                "type": "output",
                "name": "arrayVariable",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }],
                "bloqClass": "bloq-array-variable",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-array-variable-variable"
                    }, {
                        "id": "VAR",
                        "alias": "dynamicDropdown",
                        "options": "softwareVars"
                    }, {
                        "alias": "text",
                        "value": "["
                    }, {
                        "id": "POSITION",
                        "alias": "numberInput",
                        "value": 0
                    }, {
                        "alias": "text",
                        "value": "]"
                    }]
                ],
                "code": "{VAR}[{POSITION}]",
                "returnType": {
                    "type": "fromDynamicDropdown",
                    "idDropdown": "VAR",
                    "pointer": "true",
                    "options": "softwareVars"
                }
            },
            "declareVariable": {
                "type": "statement",
                "name": "declareVariable",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": "all",
                    "name": "30694572-fbd8-41c3-b005-58b61c5d5de0"
                }],
                "bloqClass": "bloq-declare-variable",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-declare-variable-declare"
                    }, {
                        "id": "NAME",
                        "alias": "varInput",
                        "value": ""
                    }, {
                        "alias": "text",
                        "value": "="
                    }, {
                        "bloqInputId": "VALUE",
                        "alias": "bloqInput",
                        "acceptType": "all",
                        "name": "30694572-fbd8-41c3-b005-58b61c5d5de0"
                    }]
                ],
                "returnType": {
                    "type": "fromInput",
                    "bloqInputId": "VALUE"
                },
                "createDynamicContent": "softwareVars",
                "code": "{VALUE.connectionType} {NAME} = {VALUE};"
            },
            "swVariable": {
                "type": "output",
                "name": "swVariable",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }],
                "bloqClass": "bloq-sw-variable-advanced",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-sw-variable-advanced-variable"
                    }, {
                        "id": "VALUE",
                        "alias": "dynamicDropdown",
                        "options": "softwareVars"
                    }]
                ],
                "code": "{VALUE}",
                "returnType": {
                    "type": "fromDynamicDropdown",
                    "idDropdown": "VAR",
                    "options": "softwareVars"
                }
            },
            "selectVariable": {
                "type": "output",
                "name": "selectVariable",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }],
                "bloqClass": "bloq-select-variable",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-select-variable-variable"
                    }, {
                        "id": "VAR",
                        "alias": "dynamicDropdown",
                        "options": "softwareVars"
                    }]
                ],
                "code": "{VAR}",
                "returnType": {
                    "type": "fromDynamicDropdown",
                    "idDropdown": "VAR",
                    "options": "softwareVars"
                }
            },
            "setArrayVariable": {
                "type": "statement",
                "name": "setArrayVariable",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": {
                        "type": "fromDynamicDropdown",
                        "idDropdown": "NAME",
                        "pointer": "true",
                        "options": "softwareVars"
                    },
                    "name": "e6031a11-ad01-470b-ae8d-ffb05b1f5384"
                }],
                "bloqClass": "bloq-set-variableArray",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-set-variableArray-variable"
                    }, {
                        "id": "NAME",
                        "alias": "dynamicDropdown",
                        "options": "softwareVars"
                    }, {
                        "alias": "text",
                        "value": "["
                    }, {
                        "id": "ITERATOR",
                        "alias": "numberInput",
                        "value": 0
                    }, {
                        "alias": "text",
                        "value": "]"
                    }, {
                        "alias": "text",
                        "value": "="
                    }, {
                        "bloqInputId": "VALUE",
                        "alias": "bloqInput",
                        "acceptType": {
                            "type": "fromDynamicDropdown",
                            "idDropdown": "NAME",
                            "pointer": "true",
                            "options": "softwareVars"
                        },
                        "name": "e6031a11-ad01-470b-ae8d-ffb05b1f5384"
                    }]
                ],
                "code": "{NAME}[{ITERATOR}] = {VALUE};"
            },
            "setVariable": {
                "type": "statement",
                "name": "setVariable",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--input",
                    "accept": "connector--output",
                    "acceptType": {
                        "type": "fromDynamicDropdown",
                        "idDropdown": "NAME",
                        "options": "softwareVars"
                    },
                    "name": "464bec0a-cfec-4ccf-a376-ba30ca1387ff"
                }],
                "bloqClass": "bloq-set-variable",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-set-variable-variable"
                    }, {
                        "id": "NAME",
                        "alias": "dynamicDropdown",
                        "options": "softwareVars"
                    }, {
                        "alias": "text",
                        "value": "="
                    }, {
                        "bloqInputId": "VALUE",
                        "alias": "bloqInput",
                        "acceptType": {
                            "type": "fromDynamicDropdown",
                            "idDropdown": "NAME",
                            "options": "softwareVars"
                        },
                        "name": "464bec0a-cfec-4ccf-a376-ba30ca1387ff"
                    }]
                ],
                "code": "{NAME} = {VALUE};"
            },
            "zowiButtons": {
                "type": "output",
                "name": "zowiButtons",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }],
                "bloqClass": "bloq-zowi-buttons",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-zowi-buttons"
                    }, {
                        "id": "BUTTON",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-zowi-buttons-A",
                            "value": "PIN_AButton"
                        }, {
                            "label": "bloq-zowi-buttons-B",
                            "value": "PIN_BButton"
                        }]
                    }]
                ],
                "code": "digitalRead({BUTTON})",
                "returnType": {
                    "type": "simple",
                    "value": "float"
                }
            },
            "zowiDistance": {
                "type": "output",
                "name": "zowiDistance",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }],
                "bloqClass": "bloq-zowi-distance",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-zowi-distance"
                    }]
                ],
                "code": "zowi.getDistance()",
                "returnType": {
                    "type": "simple",
                    "value": "float"
                }
            },
            "zowiMovementsFront": {
                "type": "statement",
                "name": "zowiMovementsFront",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-zowi-movements-front",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-zowi-movements"
                    }, {
                        "alias": "text",
                        "value": "bloq-zowi-movements-walk"
                    }, {
                        "id": "DIR",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-zowi-movements-forward",
                            "value": "FORWARD"
                        }, {
                            "label": "bloq-zowi-movements-backward",
                            "value": "BACKWARD"
                        }]
                    }, {
                        "id": "STEPS",
                        "alias": "numberInput",
                        "value": 4
                    }, {
                        "alias": "text",
                        "value": "bloq-zowi-movements-speed"
                    }, {
                        "id": "SPEED",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-zowi-movements-speed-small",
                            "value": "LOW_SPEED"
                        }, {
                            "label": "bloq-zowi-movements-speed-medium",
                            "value": "MEDIUM_SPEED"
                        }, {
                            "label": "bloq-zowi-movements-speed-high",
                            "value": "HIGH_SPEED"
                        }]
                    }, {
                        "alias": "text",
                        "value": "bloq-zowi-movements-endtext"
                    }]
                ],
                "code": "zowi.walk({STEPS},{SPEED},{DIR});"
            },
            "zowiMovementsHeightFront": {
                "type": "statement",
                "name": "zowiMovementsHeightFront",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-zowi-movements-height-front",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-zowi-movements-height"
                    }, {
                        "alias": "text",
                        "value": "bloq-zowi-movements-height-flapping"
                    }, {
                        "id": "DIR",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-zowi-movements-height-forward",
                            "value": "FORWARD"
                        }, {
                            "label": "bloq-zowi-movements-height-backward",
                            "value": "BACKWARD"
                        }]
                    }, {
                        "id": "STEPS",
                        "alias": "numberInput",
                        "value": 1
                    }, {
                        "alias": "text",
                        "value": "bloq-zowi-movements-height-speed"
                    }, {
                        "id": "SPEED",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-zowi-movements-speed-small",
                            "value": "LOW_SPEED"
                        }, {
                            "label": "bloq-zowi-movements-speed-medium",
                            "value": "MEDIUM_SPEED"
                        }, {
                            "label": "bloq-zowi-movements-speed-high",
                            "value": "HIGH_SPEED"
                        }]
                    }, {
                        "alias": "text",
                        "value": "bloq-zowi-movements-height-height"
                    }, {
                        "id": "HEIGHT",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-zowi-movements-height-small",
                            "value": "SMALL_HEIGHT"
                        }, {
                            "label": "bloq-zowi-movements-height-medium",
                            "value": "MEDIUM_HEIGHT"
                        }, {
                            "label": "bloq-zowi-movements-height-big",
                            "value": "BIG_HEIGHT"
                        }]
                    }, {
                        "alias": "text",
                        "value": "bloq-zowi-movements-height-endtext"
                    }]
                ],
                "code": "zowi.flapping({STEPS},{SPEED},{HEIGHT},{DIR});"
            },
            "zowiMovementsHeightSides": {
                "type": "statement",
                "name": "zowiMovementsHeightSides",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-zowi-movements-height-sides",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-zowi-movements-height"
                    }, {
                        "id": "MOVEMENT",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-zowi-movements-height-moonwalker",
                            "value": "moonwalker"
                        }, {
                            "label": "bloq-zowi-movements-height-crusaito",
                            "value": "crusaito"
                        }]
                    }, {
                        "id": "DIR",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-zowi-movements-height-left",
                            "value": "LEFT"
                        }, {
                            "label": "bloq-zowi-movements-height-right",
                            "value": "RIGHT"
                        }]
                    }, {
                        "id": "STEPS",
                        "alias": "numberInput",
                        "value": 1
                    }, {
                        "alias": "text",
                        "value": "bloq-zowi-movements-height-speed"
                    }, {
                        "id": "SPEED",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-zowi-movements-speed-small",
                            "value": "LOW_SPEED"
                        }, {
                            "label": "bloq-zowi-movements-speed-medium",
                            "value": "MEDIUM_SPEED"
                        }, {
                            "label": "bloq-zowi-movements-speed-high",
                            "value": "HIGH_SPEED"
                        }]
                    }, {
                        "alias": "text",
                        "value": "bloq-zowi-movements-height-height"
                    }, {
                        "id": "HEIGHT",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-zowi-movements-height-small",
                            "value": "SMALL_HEIGHT"
                        }, {
                            "label": "bloq-zowi-movements-height-medium",
                            "value": "MEDIUM_HEIGHT"
                        }, {
                            "label": "bloq-zowi-movements-height-big",
                            "value": "BIG_HEIGHT"
                        }]
                    }, {
                        "alias": "text",
                        "value": "bloq-zowi-movements-height-endtext"
                    }]
                ],
                "code": "zowi.{MOVEMENT}({STEPS},{SPEED},{HEIGHT},{DIR});"
            },
            "zowiMovementsNoDir-v1": {
                "type": "statement",
                "name": "zowiMovementsNoDir-v1",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-zowi-movements-no-dir-v1",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-zowi-movements-no-dir"
                    }, {
                        "id": "MOVEMENT",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-zowi-movements-no-dir-updown",
                            "value": "updown"
                        }, {
                            "label": "bloq-zowi-movements-no-dir-swing",
                            "value": "swing"
                        }, {
                            "label": "bloq-zowi-movements-no-dir-tiptoeSwing",
                            "value": "tiptoeSwing"
                        }, {
                            "label": "bloq-zowi-movements-no-dir-jitter",
                            "value": "jitter"
                        }, {
                            "label": "bloq-zowi-movements-no-dir-ascendingTurn",
                            "value": "ascendingTurn"
                        }]
                    }, {
                        "id": "STEPS",
                        "alias": "numberInput",
                        "value": 4
                    }, {
                        "alias": "text",
                        "value": "bloq-zowi-movements-no-dir-speed"
                    }, {
                        "id": "SPEED",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-zowi-movements-speed-small",
                            "value": "LOW_SPEED"
                        }, {
                            "label": "bloq-zowi-movements-speed-medium",
                            "value": "MEDIUM_SPEED"
                        }, {
                            "label": "bloq-zowi-movements-speed-high",
                            "value": "HIGH_SPEED"
                        }]
                    }, {
                        "alias": "text",
                        "value": "bloq-zowi-movements-no-dir-height"
                    }, {
                        "id": "HEIGHT",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-zowi-movements-height-small",
                            "value": "SMALL_HEIGHT"
                        }, {
                            "label": "bloq-zowi-movements-height-medium",
                            "value": "MEDIUM_HEIGHT"
                        }, {
                            "label": "bloq-zowi-movements-height-big",
                            "value": "BIG_HEIGHT"
                        }]
                    }, {
                        "alias": "text",
                        "value": "bloq-zowi-movements-no-dir-endtext"
                    }]
                ],
                "code": "zowi.{MOVEMENT}({STEPS},{SPEED},{HEIGHT});"
            },
            "zowiMovementsSides": {
                "type": "statement",
                "name": "zowiMovementsSides",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-zowi-movements-sides",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-zowi-movements"
                    }, {
                        "id": "MOVEMENT",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-zowi-movements-turn",
                            "value": "turn"
                        }, {
                            "label": "bloq-zowi-movements-shakeLeg",
                            "value": "shakeLeg"
                        }, {
                            "label": "bloq-zowi-movements-bend",
                            "value": "bend"
                        }]
                    }, {
                        "id": "DIR",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-zowi-movements-left",
                            "value": "LEFT"
                        }, {
                            "label": "bloq-zowi-movements-right",
                            "value": "RIGHT"
                        }]
                    }, {
                        "id": "STEPS",
                        "alias": "numberInput",
                        "value": 4
                    }, {
                        "alias": "text",
                        "value": "bloq-zowi-movements-speed"
                    }, {
                        "id": "SPEED",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-zowi-movements-speed-small",
                            "value": "LOW_SPEED"
                        }, {
                            "label": "bloq-zowi-movements-speed-medium",
                            "value": "MEDIUM_SPEED"
                        }, {
                            "label": "bloq-zowi-movements-speed-high",
                            "value": "HIGH_SPEED"
                        }]
                    }, {
                        "alias": "text",
                        "value": "bloq-zowi-movements-endtext"
                    }]
                ],
                "code": "zowi.{MOVEMENT}({STEPS},{SPEED},{DIR});"
            },
            "zowiSound": {
                "type": "output",
                "name": "zowiSound",
                "connectors": [{
                    "type": "connector--output",
                    "accept": "connector--input"
                }],
                "bloqClass": "bloq-zowi-sound",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-zowi-sound"
                    }]
                ],
                "code": "zowi.getNoise()",
                "returnType": {
                    "type": "simple",
                    "value": "float"
                }
            },
            "zowiMovements": {
                "type": "statement",
                "name": "zowiMovements",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-zowi-movements",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-zowi-movements"
                    }, {
                        "id": "MOVEMENT",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-zowi-movements-walk",
                            "value": "walk"
                        }, {
                            "label": "bloq-zowi-movements-turn",
                            "value": "turn"
                        }, {
                            "label": "bloq-zowi-movements-shakeLeg",
                            "value": "shakeLeg"
                        }, {
                            "label": "bloq-zowi-movements-bend",
                            "value": "bend"
                        }]
                    }, {
                        "id": "DIR",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-zowi-movements-forward",
                            "value": "FORWARD"
                        }, {
                            "label": "bloq-zowi-movements-backward",
                            "value": "BACKWARD"
                        }, {
                            "label": "bloq-zowi-movements-left",
                            "value": "LEFT"
                        }, {
                            "label": "bloq-zowi-movements-right",
                            "value": "RIGHT"
                        }]
                    }, {
                        "id": "STEPS",
                        "alias": "numberInput",
                        "value": 4
                    }, {
                        "alias": "text",
                        "value": "bloq-zowi-movements-speed"
                    }, {
                        "id": "SPEED",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-zowi-movements-speed-small",
                            "value": "LOW_SPEED"
                        }, {
                            "label": "bloq-zowi-movements-speed-medium",
                            "value": "MEDIUM_SPEED"
                        }, {
                            "label": "bloq-zowi-movements-speed-high",
                            "value": "HIGH_SPEED"
                        }]
                    }, {
                        "alias": "text",
                        "value": "bloq-zowi-movements-endtext"
                    }]
                ],
                "code": "zowi.{MOVEMENT}({STEPS},{SPEED},{DIR});"
            },
            "zowiMovementsHeight": {
                "type": "statement",
                "name": "zowiMovementsHeight",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-zowi-movements-height",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-zowi-movements-height"
                    }, {
                        "id": "MOVEMENT",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-zowi-movements-height-moonwalker",
                            "value": "moonwalker"
                        }, {
                            "label": "bloq-zowi-movements-height-crusaito",
                            "value": "crusaito"
                        }, {
                            "label": "bloq-zowi-movements-height-flapping",
                            "value": "flapping"
                        }]
                    }, {
                        "id": "DIR",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-zowi-movements-height-forward",
                            "value": "FORWARD"
                        }, {
                            "label": "bloq-zowi-movements-height-backward",
                            "value": "BACKWARD"
                        }, {
                            "label": "bloq-zowi-movements-height-left",
                            "value": "LEFT"
                        }, {
                            "label": "bloq-zowi-movements-height-right",
                            "value": "RIGHT"
                        }]
                    }, {
                        "id": "STEPS",
                        "alias": "numberInput",
                        "value": 1
                    }, {
                        "alias": "text",
                        "value": "bloq-zowi-movements-height-speed"
                    }, {
                        "id": "SPEED",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-zowi-movements-speed-small",
                            "value": "LOW_SPEED"
                        }, {
                            "label": "bloq-zowi-movements-speed-medium",
                            "value": "MEDIUM_SPEED"
                        }, {
                            "label": "bloq-zowi-movements-speed-high",
                            "value": "HIGH_SPEED"
                        }]
                    }, {
                        "alias": "text",
                        "value": "bloq-zowi-movements-height-height"
                    }, {
                        "id": "HEIGHT",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-zowi-movements-height-small",
                            "value": "SMALL_HEIGHT"
                        }, {
                            "label": "bloq-zowi-movements-height-medium",
                            "value": "MEDIUM_HEIGHT"
                        }, {
                            "label": "bloq-zowi-movements-height-big",
                            "value": "BIG_HEIGHT"
                        }]
                    }, {
                        "alias": "text",
                        "value": "bloq-zowi-movements-height-endtext"
                    }]
                ],
                "code": "zowi.{MOVEMENT}({STEPS},{SPEED},{HEIGHT},{DIR});"
            },
            "zowiMovementsNoDir": {
                "type": "statement",
                "name": "zowiMovementsNoDir",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-zowi-movements-no-dir",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-zowi-movements-no-dir"
                    }, {
                        "id": "MOVEMENT",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-zowi-movements-no-dir-updown",
                            "value": "updown"
                        }, {
                            "label": "bloq-zowi-movements-no-dir-swing",
                            "value": "swing"
                        }, {
                            "label": "bloq-zowi-movements-no-dir-tiptoeSwing",
                            "value": "tiptoeSwing"
                        }, {
                            "label": "bloq-zowi-movements-no-dir-jitter",
                            "value": "jitter"
                        }, {
                            "label": "bloq-zowi-movements-no-dir-ascendingTurn",
                            "value": "ascendingTurn"
                        }, {
                            "label": "bloq-zowi-movements-no-dir-jump",
                            "value": "jump"
                        }]
                    }, {
                        "id": "STEPS",
                        "alias": "numberInput",
                        "value": 4
                    }, {
                        "alias": "text",
                        "value": "bloq-zowi-movements-no-dir-speed"
                    }, {
                        "id": "SPEED",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-zowi-movements-speed-small",
                            "value": "LOW_SPEED"
                        }, {
                            "label": "bloq-zowi-movements-speed-medium",
                            "value": "MEDIUM_SPEED"
                        }, {
                            "label": "bloq-zowi-movements-speed-high",
                            "value": "HIGH_SPEED"
                        }]
                    }, {
                        "alias": "text",
                        "value": "bloq-zowi-movements-no-dir-height"
                    }, {
                        "id": "HEIGHT",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-zowi-movements-height-small",
                            "value": "SMALL_HEIGHT"
                        }, {
                            "label": "bloq-zowi-movements-height-medium",
                            "value": "MEDIUM_HEIGHT"
                        }, {
                            "label": "bloq-zowi-movements-height-big",
                            "value": "BIG_HEIGHT"
                        }]
                    }, {
                        "alias": "text",
                        "value": "bloq-zowi-movements-no-dir-endtext"
                    }]
                ],
                "code": "zowi.{MOVEMENT}({STEPS},{SPEED},{HEIGHT});"
            },
            "zowiGestures": {
                "type": "statement",
                "name": "zowiGestures",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-zowi-gestures",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-zowi-gestures"
                    }, {
                        "id": "GESTURE",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-zowi-gestures-ZowiHappy",
                            "value": "ZowiHappy"
                        }, {
                            "label": "bloq-zowi-gestures-ZowiSuperHappy",
                            "value": "ZowiSuperHappy"
                        }, {
                            "label": "bloq-zowi-gestures-ZowiSad",
                            "value": "ZowiSad"
                        }, {
                            "label": "bloq-zowi-gestures-ZowiSleeping",
                            "value": "ZowiSleeping"
                        }, {
                            "label": "bloq-zowi-gestures-ZowiFart",
                            "value": "ZowiFart"
                        }, {
                            "label": "bloq-zowi-gestures-ZowiConfused",
                            "value": "ZowiConfused"
                        }, {
                            "label": "bloq-zowi-gestures-ZowiLove",
                            "value": "ZowiLove"
                        }, {
                            "label": "bloq-zowi-gestures-ZowiAngry",
                            "value": "ZowiAngry"
                        }, {
                            "label": "bloq-zowi-gestures-ZowiFretful",
                            "value": "ZowiFretful"
                        }, {
                            "label": "bloq-zowi-gestures-ZowiVictory",
                            "value": "ZowiVictory"
                        }, {
                            "label": "bloq-zowi-gestures-ZowiFail",
                            "value": "ZowiFail"
                        }]
                    }]
                ],
                "code": "zowi.playGesture({GESTURE});"
            },
            "zowiHome": {
                "type": "statement",
                "name": "zowiHome",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-zowi-rest",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-zowi-rest"
                    }]
                ],
                "code": "zowi.home();"
            },
            "zowiIfButtons": {
                "type": "statement-input",
                "name": "zowiIfButtons",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--root",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-zowi-if-buttons",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-zowi-if-buttons"
                    }, {
                        "id": "BUTTON",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-zowi-if-buttons-A",
                            "value": "PIN_AButton"
                        }, {
                            "label": "bloq-zowi-if-buttons-B",
                            "value": "PIN_BButton"
                        }]
                    }, {
                        "alias": "text",
                        "value": "bloq-zowi-if-buttons-then"
                    }]
                ],
                "code": "if(digitalRead({BUTTON}) == 1){{STATEMENTS}}"
            },
            "zowiIfDistance": {
                "type": "statement-input",
                "name": "zowiIfDistance",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--root",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-zowi-if-distance",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-zowi-if-distance"
                    }, {
                        "id": "OPERATOR",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-zowi-if-distance-less",
                            "value": "<"
                        }, {
                            "label": "bloq-zowi-if-distance-more",
                            "value": ">"
                        }]
                    }, {
                        "alias": "text",
                        "value": "bloq-zowi-if-distance-than"
                    }, {
                        "id": "DISTANCE",
                        "alias": "numberInput",
                        "value": 15
                    }, {
                        "alias": "text",
                        "value": "bloq-zowi-if-distance-then"
                    }]
                ],
                "code": "if(zowi.getDistance() {OPERATOR} {DISTANCE}){{STATEMENTS}}"
            },
            "zowiIfSound": {
                "type": "statement-input",
                "name": "zowiIfSound",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }, {
                    "type": "connector--root",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-zowi-if-sound",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-zowi-if-sound"
                    }]
                ],
                "code": " if(zowi.getNoise() >= 650){{STATEMENTS}}"
            },
            "zowiMouth": {
                "type": "statement",
                "name": "zowiMouth",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-zowi-mouth",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-zowi-mouth"
                    }, {
                        "id": "GESTURE",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-zowi-mouth-smile",
                            "value": "smile_code"
                        }, {
                            "label": "bloq-zowi-mouth-sad",
                            "value": "sad_code"
                        }, {
                            "label": "bloq-zowi-mouth-happy",
                            "value": "happyOpen_code"
                        }, {
                            "label": "bloq-zowi-mouth-confused",
                            "value": "confused_code"
                        }, {
                            "label": "bloq-zowi-mouth-bigSurprise",
                            "value": "bigSurprise_code"
                        }, {
                            "label": "bloq-zowi-mouth-tongueOut",
                            "value": "tongueOut_code"
                        }]
                    }, {
                        "alias": "text",
                        "value": "bloq-zowi-mouth-mouth"
                    }]
                ],
                "code": "zowi.putMouth({GESTURE}, false);"
            },
            "zowiMovementsSimple": {
                "type": "statement",
                "name": "zowiMovementsSimple",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-zowi-movements-simple",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-zowi-movements-simple"
                    }, {
                        "id": "MOVEMENT",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-zowi-movements-simple-walk",
                            "value": "walk"
                        }, {
                            "label": "bloq-zowi-movements-simple-turn",
                            "value": "turn"
                        }, {
                            "label": "bloq-zowi-movements-simple-shakeLeg",
                            "value": "shakeLeg"
                        }, {
                            "label": "bloq-zowi-movements-simple-bend",
                            "value": "bend"
                        }, {
                            "label": "bloq-zowi-movements-simple-moonwalker",
                            "value": "moonwalker"
                        }, {
                            "label": "bloq-zowi-movements-simple-crusaito",
                            "value": "crusaito"
                        }, {
                            "label": "bloq-zowi-movements-simple-flapping",
                            "value": "flapping"
                        }, {
                            "label": "bloq-zowi-movements-simple-updown",
                            "value": "updown"
                        }, {
                            "label": "bloq-zowi-movements-simple-swing",
                            "value": "swing"
                        }, {
                            "label": "bloq-zowi-movements-simple-tiptoeSwing",
                            "value": "tiptoeSwing"
                        }, {
                            "label": "bloq-zowi-movements-simple-jitter",
                            "value": "jitter"
                        }, {
                            "label": "bloq-zowi-movements-simple-ascendingTurn",
                            "value": "ascendingTurn"
                        }, {
                            "label": "bloq-zowi-movements-simple-jump",
                            "value": "jump"
                        }]
                    }, {
                        "id": "STEPS",
                        "alias": "numberInput",
                        "value": 4
                    }, {
                        "alias": "text",
                        "value": "bloq-zowi-movements-simple-steps"
                    }]
                ],
                "code": "zowi.{MOVEMENT}({STEPS});"
            },
            "zowiSounds": {
                "type": "statement",
                "name": "zowiSounds",
                "connectors": [{
                    "type": "connector--top",
                    "accept": "connector--bottom"
                }, {
                    "type": "connector--bottom",
                    "accept": "connector--top"
                }],
                "bloqClass": "bloq-zowi-sounds",
                "content": [
                    [{
                        "alias": "text",
                        "value": "bloq-zowi-sounds"
                    }, {
                        "id": "SOUND",
                        "alias": "staticDropdown",
                        "options": [{
                            "label": "bloq-zowi-sounds-surprise",
                            "value": "S_surprise"
                        }, {
                            "label": "bloq-zowi-sounds-OhOoh",
                            "value": "S_OhOoh"
                        }, {
                            "label": "bloq-zowi-sounds-cuddly",
                            "value": "S_cuddly"
                        }, {
                            "label": "bloq-zowi-sounds-sleeping",
                            "value": "S_sleeping"
                        }, {
                            "label": "bloq-zowi-sounds-happy",
                            "value": "S_happy"
                        }, {
                            "label": "bloq-zowi-sounds-sad",
                            "value": "S_sad"
                        }, {
                            "label": "bloq-zowi-sounds-confused",
                            "value": "S_confused"
                        }, {
                            "label": "bloq-zowi-sounds-fart1-v1",
                            "value": "S_fart1"
                        }]
                    }]
                ],
                "code": "zowi.sing({SOUND});"
            }
        };

        exports.hardware = {
            "boards": [{
                "name": "bq ZUM",
                "id": "bqZUM",
                "mcu": "bt328",
                "pinSize": {
                    "digital": {
                        "w": 9,
                        "h": 37
                    },
                    "analog": {
                        "w": 9,
                        "h": 37
                    },
                    "serial": {
                        "w": 15,
                        "h": 35
                    }
                },
                "pins": {
                    "digital": [{
                        "x": 0.435,
                        "y": 0.175,
                        "name": "13",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53bd00"
                    }, {
                        "x": 0.470,
                        "y": 0.175,
                        "name": "12",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53bd01"
                    }, {
                        "x": 0.507,
                        "y": 0.175,
                        "name": "11",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53bd02"
                    }, {
                        "x": 0.539,
                        "y": 0.175,
                        "name": "10",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53bd03"
                    }, {
                        "x": 0.575,
                        "y": 0.175,
                        "name": "9",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53bd04"
                    }, {
                        "x": 0.609,
                        "y": 0.175,
                        "name": "8",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53bd05"
                    }, {
                        "x": 0.662,
                        "y": 0.175,
                        "name": "7",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53bd06"
                    }, {
                        "x": 0.698,
                        "y": 0.175,
                        "name": "6",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53bd07"
                    }, {
                        "x": 0.733,
                        "y": 0.175,
                        "name": "5",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53bd08"
                    }, {
                        "x": 0.767,
                        "y": 0.175,
                        "name": "4",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53bd09"
                    }, {
                        "x": 0.802,
                        "y": 0.175,
                        "name": "3",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53bd10"
                    }, {
                        "x": 0.837,
                        "y": 0.175,
                        "name": "2",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53bd11"
                    }, {
                        "x": 0.871,
                        "y": 0.175,
                        "name": "1",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53bd12"
                    }, {
                        "x": 0.907,
                        "y": 0.175,
                        "name": "0",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53bd13"
                    }],
                    "analog": [{
                        "x": 0.844,
                        "y": 0.785,
                        "name": "A5",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53ba00"
                    }, {
                        "x": 0.81,
                        "y": 0.785,
                        "name": "A4",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53ba01"
                    }, {
                        "x": 0.775,
                        "y": 0.785,
                        "name": "A3",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53ba02"
                    }, {
                        "x": 0.741,
                        "y": 0.785,
                        "name": "A2",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53ba03"
                    }, {
                        "x": 0.705,
                        "y": 0.785,
                        "name": "A1",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53ba04"
                    }, {
                        "x": 0.67,
                        "y": 0.785,
                        "name": "A0",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53ba05"
                    }],
                    "serial": [{
                        "x": 0.078,
                        "y": 0.505,
                        "name": "serial",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53bc05"
                    }]
                }
            }, {
                "name": "Freaduino UNO",
                "id": "FreaduinoUNO",
                "mcu": "uno",
                "pinSize": {
                    "digital": {
                        "w": 9,
                        "h": 37
                    },
                    "analog": {
                        "w": 9,
                        "h": 37
                    },
                    "serial": {
                        "w": 25,
                        "h": 37
                    }
                },
                "pins": {
                    "digital": [{
                        "x": 0.476,
                        "y": 0.172,
                        "name": "13",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53fd00"
                    }, {
                        "x": 0.507,
                        "y": 0.172,
                        "name": "12",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53fd01"
                    }, {
                        "x": 0.541,
                        "y": 0.172,
                        "name": "11",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53fd02"
                    }, {
                        "x": 0.575,
                        "y": 0.172,
                        "name": "10",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53fd03"
                    }, {
                        "x": 0.607,
                        "y": 0.172,
                        "name": "9",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53fd04"
                    }, {
                        "x": 0.639,
                        "y": 0.172,
                        "name": "8",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53fd05"
                    }, {
                        "x": 0.672,
                        "y": 0.172,
                        "name": "7",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53fd06"
                    }, {
                        "x": 0.702,
                        "y": 0.172,
                        "name": "6",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53fd07"
                    }, {
                        "x": 0.738,
                        "y": 0.172,
                        "name": "5",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53fd08"
                    }, {
                        "x": 0.77,
                        "y": 0.172,
                        "name": "4",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53fd09"
                    }, {
                        "x": 0.807,
                        "y": 0.172,
                        "name": "3",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53fd10"
                    }, {
                        "x": 0.838,
                        "y": 0.172,
                        "name": "2",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53fd11"
                    }, {
                        "x": 0.87,
                        "y": 0.172,
                        "name": "1",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53fd12"
                    }, {
                        "x": 0.904,
                        "y": 0.172,
                        "name": "0",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53fd13"
                    }],
                    "analog": [{
                        "x": 0.658,
                        "y": 0.79,
                        "name": "A0",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53fa00"
                    }, {
                        "x": 0.69,
                        "y": 0.79,
                        "name": "A1",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53fa01"
                    }, {
                        "x": 0.725,
                        "y": 0.79,
                        "name": "A2",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53fa02"
                    }, {
                        "x": 0.755,
                        "y": 0.79,
                        "name": "A3",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53fa03"
                    }, {
                        "x": 0.787,
                        "y": 0.79,
                        "name": "A4",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53fa04"
                    }, {
                        "x": 0.82,
                        "y": 0.79,
                        "name": "A5",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53fa05"
                    }],
                    "serial": [{
                        "x": 0.058,
                        "y": 0.218,
                        "name": "serial",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53fc05"
                    }]
                }
            }, {
                "name": "Arduino UNO",
                "id": "ArduinoUNO",
                "mcu": "uno",
                "pinSize": {
                    "digital": {
                        "w": 9,
                        "h": 15
                    },
                    "analog": {
                        "w": 9,
                        "h": 15
                    },
                    "serial": {
                        "w": 33,
                        "h": 66
                    }
                },
                "pins": {
                    "digital": [{
                        "x": 0.478,
                        "y": 0.098,
                        "name": "13",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53ad01"
                    }, {
                        "x": 0.508,
                        "y": 0.098,
                        "name": "12",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53ad02"
                    }, {
                        "x": 0.545,
                        "y": 0.098,
                        "name": "11",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53ad03"
                    }, {
                        "x": 0.58,
                        "y": 0.098,
                        "name": "10",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53ad04"
                    }, {
                        "x": 0.615,
                        "y": 0.098,
                        "name": "9",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53ad05"
                    }, {
                        "x": 0.649,
                        "y": 0.098,
                        "name": "8",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53ad06"
                    }, {
                        "x": 0.695,
                        "y": 0.098,
                        "name": "7",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53ad07"
                    }, {
                        "x": 0.73,
                        "y": 0.098,
                        "name": "6",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53ad08"
                    }, {
                        "x": 0.765,
                        "y": 0.098,
                        "name": "5",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53ad09"
                    }, {
                        "x": 0.795,
                        "y": 0.098,
                        "name": "4",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53ad10"
                    }, {
                        "x": 0.832,
                        "y": 0.098,
                        "name": "3",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53ad11"
                    }, {
                        "x": 0.869,
                        "y": 0.098,
                        "name": "2",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53ad12"
                    }, {
                        "x": 0.9,
                        "y": 0.098,
                        "name": "1",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53ad13"
                    }, {
                        "x": 0.935,
                        "y": 0.098,
                        "name": "0",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53ad13"
                    }],
                    "analog": [{
                        "x": 0.763,
                        "y": 0.92,
                        "name": "A0",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53aa00"
                    }, {
                        "x": 0.795,
                        "y": 0.92,
                        "name": "A1",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53aa01"
                    }, {
                        "x": 0.83,
                        "y": 0.92,
                        "name": "A2",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53aa02"
                    }, {
                        "x": 0.862,
                        "y": 0.92,
                        "name": "A3",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53aa03"
                    }, {
                        "x": 0.895,
                        "y": 0.92,
                        "name": "A4",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53aa04"
                    }, {
                        "x": 0.935,
                        "y": 0.92,
                        "name": "A5",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53aa05"
                    }],
                    "serial": [{
                        "x": 0.045,
                        "y": 0.315,
                        "name": "serial",
                        "uid": "6be0dd9d-2e52-4b7d-9dfc-c9edad53ac05"
                    }]
                }
            }],
            "components": {
                "leds": [{
                    "id": "led",
                    "width": 55,
                    "height": 83,
                    "pins": {
                        "digital": ["s"]
                    }
                }],
                "rgbs": [{
                    "id": "RGBled",
                    "width": 67,
                    "height": 79,
                    "pins": {
                        "digital": ["r", "g", "b"]
                    }
                }],
                "sensors": [{
                    "id": "us",
                    "type": "US",
                    "width": 120,
                    "height": 79,
                    "pins": {
                        "digital": ["trigger", "echo"]
                    }
                }, {
                    "id": "button",
                    "type": "digital",
                    "width": 90,
                    "height": 73,
                    "pins": {
                        "digital": ["s"]
                    }
                }, {
                    "id": "limitswitch",
                    "type": "digital",
                    "width": 100,
                    "height": 92,
                    "pins": {
                        "digital": ["s"]
                    }
                }, {
                    "id": "encoder",
                    "type": "encoder",
                    "width": 74,
                    "height": 84,
                    "pin": {
                        "sb": "2",
                        "sa": "3"
                    },
                    "pins": {
                        "digital": ["k", "sa", "sb"]
                    }
                }, {
                    "id": "sound",
                    "type": "digital",
                    "width": 100,
                    "height": 102,
                    "pins": {
                        "digital": ["s"]
                    }
                }, {
                    "id": "buttons",
                    "type": "ButtonPad",
                    "width": 165,
                    "height": 120,
                    "pins": {
                        "analog": ["s"]
                    }
                }, {
                    "id": "irs",
                    "type": "digital",
                    "width": 90,
                    "height": 77,
                    "pins": {
                        "digital": ["s"]
                    }
                }, {
                    "id": "irs2",
                    "type": "LineFollower",
                    "width": 97,
                    "height": 88,
                    "pins": {
                        "digital": ["s1", "s2"]
                    }
                }, {
                    "id": "joystick",
                    "type": "Joystick",
                    "width": 100,
                    "height": 102,
                    "pins": {
                        "analog": ["x", "y"],
                        "digital": ["k"]
                    }
                }, {
                    "id": "ldrs",
                    "type": "analog",
                    "width": 90,
                    "height": 65,
                    "pins": {
                        "analog": ["s"]
                    }
                }, {
                    "id": "pot",
                    "type": "analog",
                    "width": 74,
                    "height": 101,
                    "pins": {
                        "analog": ["s"]
                    }
                }],
                "clocks": [{
                    "id": "rtc",
                    "type": "analog",
                    "width": 128,
                    "height": 93,
                    "pin": {
                        "sda": "a4",
                        "scl": "a5"
                    },
                    "pins": {
                        "analog": ["sda", "scl"]
                    }
                }],
                "hts221": [{
                    "id": "hts221",
                    "type": "digital",
                    "width": 107,
                    "height": 113,
                    "pin": {
                        "sda": "a4",
                        "scl": "a5"
                    },
                    "pins": {
                        "analog": ["sda", "scl"]
                    }
                }],
                "buzzers": [{
                    "id": "buzz",
                    "type": "digital",
                    "width": 85,
                    "height": 80,
                    "pins": {
                        "digital": ["s"]
                    }
                }],
                "servos": [{
                    "id": "servo",
                    "width": 125,
                    "height": 106,
                    "pins": {
                        "digital": ["s"]
                    },
                    "oscillator": "false"
                }],
                "continuousServos": [{
                    "id": "servocont",
                    "width": 125,
                    "height": 106,
                    "pins": {
                        "digital": ["s"]
                    }
                }],
                "oscillators": [{}],
                "lcds": [{
                    "id": "lcd",
                    "width": 170,
                    "height": 93,
                    "pin": {
                        "sda": "a4",
                        "scl": "a5"
                    },
                    "pins": {
                        "analog": ["sda", "scl"]
                    }
                }],
                "serialElements": [{
                    "id": "bt",
                    "baudRate": "9600",
                    "width": 115,
                    "height": 88,
                    "pins": {
                        "digital": ["rx", "tx"]
                    }
                }, {
                    "id": "sp",
                    "baudRate": "9600",
                    "width": 115,
                    "height": 71,
                    "pin": {
                        "s": "serial"
                    },
                    "pins": {
                        "serial": ["s"]
                    }
                }]
            },
            "robots": [{
                "id": "zowi",
                "name": "Zowi",
                "width": 75,
                "height": 86
            }]
        };

        exports.version = "1.0.1";
        exports.bloqsVersion = "0.1.4";
        exports.translate = $filter('translate');

        settings.language = "en-GB";
        $translate.use(settings.language);

        exports.translateTo = function(lang) {
          settings.language = lang;

          //do save setting

          $translate.use(lang);
        };

        return exports;
    });