/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/mtk/jingUI5_smarttable/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/mtk/jingUI5_smarttable/test/integration/pages/RootView",
	"com/mtk/jingUI5_smarttable/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.mtk.jingUI5_smarttable.view.",
		autoWait: true
	});
});