sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.mtk.jingUI5_smarttable.controller.DetailView", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.mtk.jingUI5_smarttable.view.DetailView
		 */
		onInit: function () {
			var oRouter = this.getRouter();
			oRouter.getRoute("RouteDetailView").attachMatched(this._onRouteMatched, this);
		},

		onNavBack: function () {
			history.go(-1);
		},
		
		_onRouteMatched : function (oEvent) {
			var oArgs, oView;
			oArgs = oEvent.getParameter("arguments");
			oView = this.getView();

			oView.bindElement({
				path : "/Z_JING_C_SO('" + oArgs.salesOrder + "')",
				events : {
					change: this._onBindingChange.bind(this),
					dataRequested: function (oEvent) {
						oView.setBusy(true);
					},
					dataReceived: function (oEvent) {
						oView.setBusy(false);
					}
				}
			});
		},

		_onBindingChange : function (oEvent) {
			// No data for the binding
			if (!this.getView().getBindingContext()) {
				this.getRouter().getTargets().display("notFound");
			}
		},
		
		getRouter : function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.mtk.jingUI5_smarttable.view.DetailView
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.mtk.jingUI5_smarttable.view.DetailView
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.mtk.jingUI5_smarttable.view.DetailView
		 */
		//	onExit: function() {
		//
		//	}

	});

});