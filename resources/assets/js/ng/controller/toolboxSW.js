'use strict';
angular.module('kenrobot')
	.controller('toolboxSW', function($scope) {
		$scope.swToolboxMenu = {
			"toolboxTitles": [{
				"title": "make-swtoolbox-functions",
				"contentId": "functions"
			}, {
				"title": "make-swtoolbox-variables",
				"contentId": "variables"
			}, {
				"title": "make-swtoolbox-code",
				"contentId": "codes"
			}, {
				"title": "make-swtoolbox-mathematics",
				"contentId": "maths"
			}, {
				"title": "make-swtoolbox-text",
				"contentId": "texts"
			}, {
				"title": "make-swtoolbox-control",
				"contentId": "controls"
			}, {
				"title": "make-swtoolbox-logic",
				"contentId": "logics"
			}, {
				"title": "make-swtoolbox-classes",
				"contentId": "classes"
			}],
			"components": [{
				"items": [{
					"name": "hts221Temperature"
				}, {
					"name": "hts221Humidity"
				}, {
					"name": "buzzer"
				}, {
					"name": "continuousServoStart"
				}, {
					"name": "continuousServoStop"
				}, {
					"name": "lcdTurnOnOff"
				}, {
					"name": "lcdWrite"
				}, {
					"name": "lcdWritePosition"
				}, {
					"name": "lcdClear"
				}, {
					"name": "led"
				}, {
					"name": "rgbLedSimple"
				}, {
					"name": "rgbLed"
				}, {
					"name": "rgbLedFade"
				}, {
					"name": "clockRTCInit"
				}, {
					"name": "clockRTC"
				}, {
					"name": "clockRTCAdvanced"
				}, {
					"name": "oscillator"
				}, {
					"name": "oscillatorStart"
				}, {
					"name": "oscillatorStop"
				}, {
					"name": "readSensor"
				}, {
					"name": "servoNormal"
				}, {
					"name": "serialReceive"
				}, {
					"name": "serialSend-v1"
				}],
				"advancedItems": [{
					"name": "hwVariable"
				}, {
					"name": "buzzerAdvanced"
				}, {
					"name": "continuousServoStartAdvanced-v1"
				}, {
					"name": "continuousServoStopAdvanced"
				}, {
					"name": "lcdTurnOnOffAdvanced"
				}, {
					"name": "lcdWriteAdvanced"
				}, {
					"name": "ledAdvanced"
				}, {
					"name": "rgbLedAdvanced"
				}, {
					"name": "oscillatorAdvanced"
				}, {
					"name": "oscillatorStartAdvanced"
				}, {
					"name": "oscillatorStopAdvanced"
				}, {
					"name": "digitalReadAdvanced"
				}, {
					"name": "analogReadAdvanced"
				}, {
					"name": "analogWrite"
				}, {
					"name": "digitalWrite"
				}, {
					"name": "servoNormalAdvanced"
				}, {
					"name": "lcdWritePositionAdvanced-v1"
				}],
				"functions": [{
					"name": "voidFunction"
				}, {
					"name": "invokeFunction"
				}, {
					"name": "returnFunction"
				}, {
					"name": "invokeReturnFunction"
				}]
			}],
			"toolboxContents": [{
				"title": "make-swtoolbox-classes",
				"titleId": "classes",
				"items": [{
					"name": "class"
				}, {
					"name": "invokeClass"
				}, {
					"name": "constructorClass"
				}, {
					"name": "invokeClassFunction"
				}, {
					"name": "invokeClassReturnFunction"
				}, {
					"name": "setClassVariable"
				}, {
					"name": "selectClassVariable"
				}],
				"advancedItems": [{
					"name": "classChildren"
				}, {
					"name": "constructorClassArguments"
				}, {
					"name": "invokeArgumentsClass"
				}, {
					"name": "public"
				}, {
					"name": "protected"
				}, {
					"name": "private"
				}, {
					"name": "invokeClassFunctionWithArguments"
				}, {
					"name": "invokeClassReturnFunctionWithArguments"
				}, {
					"name": "arrayClassVariable"
				}, {
					"name": "setClassArrayVariable"
				}]
			}, {
				"title": "make-swtoolbox-functions",
				"titleId": "functions",
				"items": [{
					"name": "voidFunction"
				}, {
					"name": "invokeFunction"
				}, {
					"name": "returnFunction"
				}, {
					"name": "invokeReturnFunction"
				}],
				"advancedItems": [{
					"name": "voidFunctionWithArguments"
				}, {
					"name": "invokeFunctionWithArguments"
				}, {
					"name": "returnFunctionWithArguments"
				}, {
					"name": "invokeReturnFunctionWithArguments"
				}, {
					"name": "argument"
				}, {
					"name": "arguments"
				}, {
					"name": "return"
				}]
			}, {
				"title": "make-swtoolbox-variables",
				"titleId": "variables",
				"items": [{
					"name": "declareVariable"
				}, {
					"name": "selectVariable"
				}, {
					"name": "setVariable"
				}, {
					"name": "arrayVariable"
				}, {
					"name": "setArrayVariable"
				}],
				"advancedItems": [{
					"name": "arrayVariableAdvanced"
				}, {
					"name": "setArrayVariableAdvanced"
				}, {
					"name": "declareVariableAdvanced"
				}]
			}, {
				"title": "make-swtoolbox-code",
				"titleId": "codes",
				"items": [{
					"name": "comment"
				}, {
					"name": "code"
				}]
			}, {
				"title": "make-swtoolbox-mathematics",
				"titleId": "maths",
				"items": [{
					"name": "number"
				}, {
					"name": "numberArray"
				}, {
					"name": "basicOperations"
				}, {
					"name": "map"
				}, {
					"name": "randomSeed"
				}, {
					"name": "random"
				}],
				"advancedItems": [{
					"name": "mathOperations"
				}, {
					"name": "numberArrayAdvanced"
				}, {
					"name": "mapAdvanced"
				}, {
					"name": "numConversion"
				}]
			}, {
				"title": "make-swtoolbox-text",
				"titleId": "texts",
				"items": [{
					"name": "string"
				}, {
					"name": "stringArray"
				}, {
					"name": "length"
				}, {
					"name": "stringCreate"
				}, {
					"name": "stringSum"
				}],
				"advancedItems": [{
					"name": "stringArrayAdvanced"
				}, {
					"name": "char"
				}]
			}, {
				"title": "make-swtoolbox-control",
				"titleId": "controls",
				"items": [{
					"name": "wait"
				}, {
					"name": "millis"
				}, {
					"name": "if"
				}, {
					"name": "elseif"
				}, {
					"name": "else"
				}, {
					"name": "switch"
				}, {
					"name": "case"
				}, {
					"name": "caseDefault"
				}, {
					"name": "for-v1"
				}, {
					"name": "while"
				}, {
					"name": "continue"
				}, {
					"name": "break"
				}],
				"advancedItems": [{
					"name": "waitAdvanced"
				}, {
					"name": "ifAdvanced"
				}, {
					"name": "elseifAdvanced"
				}, {
					"name": "else"
				}, {
					"name": "forAdvanced-v1"
				}, {
					"name": "switchAdvanced"
				}, {
					"name": "case"
				}, {
					"name": "caseDefault"
				}, {
					"name": "whileAdvanced"
				}, {
					"name": "continue"
				}, {
					"name": "break"
				}]
			}, {
				"title": "",
				"titleId": "",
				"items": [{
					"name": ""
				}],
				"advancedItems": [{
					"name": ""
				}]
			}, {
				"title": "make-swtoolbox-logic",
				"titleId": "logics",
				"items": [{
					"name": "boolean"
				}, {
					"name": "boolArray"
				}, {
					"name": "not"
				}, {
					"name": "equalityOperations"
				}, {
					"name": "logicOperations"
				}]
			}]
		};
	});