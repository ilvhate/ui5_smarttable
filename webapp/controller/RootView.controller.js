sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/odata/v2/ODataModel"
], function (Controller, ODataModel) {
	"use strict";

	return Controller.extend("com.mtk.jingUI5_smarttable.controller.RootView", {
		onInit: function () {
			//var oModel, oView;
			//oModel = new ODataModel("/sap/opu/odata/sap/Z_JING_C_SO_CDS/", true);
			//oModel.setCountSupported(false);
			//oView = this.getView();
			//oView.setModel(oModel);
		},
		onNavToDetail: function(oEvt){
			var oItem, oCtx;
			oItem = oEvt.getSource();
			oCtx = oItem.getBindingContext();
			this.getRouter().navTo("RouteDetailView", {salesOrder : oCtx.getProperty("SalesOrder")});
		},
		onBeforeExport: function (oEvt) {
			var mExcelSettings = oEvt.getParameter("exportSettings");
			// GW export
			if (mExcelSettings.url) {
				return;
			}
			// UI5 Client Export
			mExcelSettings.fileName = "SmartTable-Export"; // example to modify fileName

			// Sample customization
			if (mExcelSettings.workbook && mExcelSettings.workbook.columns) {
				mExcelSettings.workbook.columns.some(function (oColumnConfiguration) {
					// Customize output for GrossAmount column to match the text on the UI, instead of showing the currency
					if (oColumnConfiguration.property === "GrossAmountX") {
						oColumnConfiguration.unitProperty = "CurrencyCode"; // Decimal handling
						oColumnConfiguration.textAlign = "Right";
						oColumnConfiguration.displayUnit = false;
						oColumnConfiguration.type = "currency"; // Change type of column
						oColumnConfiguration.width = 12; // Set desired width
						return true;
					}
				});
			}

			// Disable Worker if Mockserver is used in explored
			mExcelSettings.worker = true;
		},
		getRouter: function(){
			return sap.ui.core.UIComponent.getRouterFor(this);
		}
	});
});