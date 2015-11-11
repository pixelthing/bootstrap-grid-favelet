/* 
Bootstrap grid overlay favelet 
Craig Morey @pixelthing
A browser favelet to use on a uStyle web page to overlay the grid as defined by the bootstrap stylesheet
*/

function bootstrapGridInit() {

    // store the normal values for later
    if (typeof (bootstrapGridObj) == 'undefined') {
        bootstrapGridObj = {}
    }

    // if we're running, use click to remove everything
    if (bootstrapGridObj.running == true) {
        bootstrapGridClose();
        return;
    }

    // show that the grid is on
    bootstrapGridObj.running = true;

    // set up the grid
    var gridContainer = document.createElement("div");
    gridContainer.id = 'bootstrap-grid-container';
    gridContainer.innerHTML = "\
  <div style='position:fixed !important;left: 0 !important;top: 0 !important;z-index:999999 !important;width:100% !important;height:100% !important;margin:0 !important;padding:0 !important;pointer-events:none'>\
    <div id='bootstrap-grid-column' class='container' style='height:100%;'>\
      <div id='bootstrap-grid-overlay' style='height:100% !important;margin:0 -15px !important;'>\
        <div class='col-xs-1' style='height:100% !important;min-height:100% !important;padding:0 !important;color:#c00 !important;background:rgba(255,0,0,0.1) !important;text-align:center !important;box-sizing:border-box !important;pointer-events:none !important;'><div style='height:100% !important;margin:0 15px;padding: 20px 0;background:rgba(255,0,0,0.1) !important;'>01</div></div>\
        <div class='col-xs-1' style='height:100% !important;min-height:100% !important;padding:0 !important;color:#00c !important;background:rgba(0,0,255,0.1) !important;text-align:center !important;box-sizing:border-box !important;pointer-events:none !important;'><div style='height:100% !important;margin:0 15px;padding: 20px 0;background:rgba(0,0,255,0.1) !important;'>02</div></div>\
        <div class='col-xs-1' style='height:100% !important;min-height:100% !important;padding:0 !important;color:#c00 !important;background:rgba(255,0,0,0.1) !important;text-align:center !important;box-sizing:border-box !important;pointer-events:none !important;'><div style='height:100% !important;margin:0 15px;padding: 20px 0;background:rgba(255,0,0,0.1) !important;'>03</div></div>\
        <div class='col-xs-1' style='height:100% !important;min-height:100% !important;padding:0 !important;color:#00c !important;background:rgba(0,0,255,0.1) !important;text-align:center !important;box-sizing:border-box !important;pointer-events:none !important;'><div style='height:100% !important;margin:0 15px;padding: 20px 0;background:rgba(0,0,255,0.1) !important;'>04</div></div>\
        <div class='col-xs-1' style='height:100% !important;min-height:100% !important;padding:0 !important;color:#c00 !important;background:rgba(255,0,0,0.1) !important;text-align:center !important;box-sizing:border-box !important;pointer-events:none !important;'><div style='height:100% !important;margin:0 15px;padding: 20px 0;background:rgba(255,0,0,0.1) !important;'>05</div></div>\
        <div class='col-xs-1' style='height:100% !important;min-height:100% !important;padding:0 !important;color:#00c !important;background:rgba(0,0,255,0.1) !important;text-align:center !important;box-sizing:border-box !important;pointer-events:none !important;'><div style='height:100% !important;margin:0 15px;padding: 20px 0;background:rgba(0,0,255,0.1) !important;'>06</div></div>\
        <div class='col-xs-1' style='height:100% !important;min-height:100% !important;padding:0 !important;color:#c00 !important;background:rgba(255,0,0,0.1) !important;text-align:center !important;box-sizing:border-box !important;pointer-events:none !important;'><div style='height:100% !important;margin:0 15px;padding: 20px 0;background:rgba(255,0,0,0.1) !important;'>07</div></div>\
        <div class='col-xs-1' style='height:100% !important;min-height:100% !important;padding:0 !important;color:#00c !important;background:rgba(0,0,255,0.1) !important;text-align:center !important;box-sizing:border-box !important;pointer-events:none !important;'><div style='height:100% !important;margin:0 15px;padding: 20px 0;background:rgba(0,0,255,0.1) !important;'>08</div></div>\
        <div class='col-xs-1' style='height:100% !important;min-height:100% !important;padding:0 !important;color:#c00 !important;background:rgba(255,0,0,0.1) !important;text-align:center !important;box-sizing:border-box !important;pointer-events:none !important;'><div style='height:100% !important;margin:0 15px;padding: 20px 0;background:rgba(255,0,0,0.1) !important;'>09</div></div>\
        <div class='col-xs-1' style='height:100% !important;min-height:100% !important;padding:0 !important;color:#00c !important;background:rgba(0,0,255,0.1) !important;text-align:center !important;box-sizing:border-box !important;pointer-events:none !important;'><div style='height:100% !important;margin:0 15px;padding: 20px 0;background:rgba(0,0,255,0.1) !important;'>10</div></div>\
        <div class='col-xs-1' style='height:100% !important;min-height:100% !important;padding:0 !important;color:#c00 !important;background:rgba(255,0,0,0.1) !important;text-align:center !important;box-sizing:border-box !important;pointer-events:none !important;'><div style='height:100% !important;margin:0 15px;padding: 20px 0;background:rgba(255,0,0,0.1) !important;'>11</div></div>\
        <div class='col-xs-1' style='height:100% !important;min-height:100% !important;padding:0 !important;color:#00c !important;background:rgba(0,0,255,0.1) !important;text-align:center !important;box-sizing:border-box !important;pointer-events:none !important;'><div style='height:100% !important;margin:0 15px;padding: 20px 0;background:rgba(0,0,255,0.1) !important;'>12</div></div>\
      </div>\
    </div>\
  </div>";
    document.body.appendChild(gridContainer);

}

function bootstrapGridClose() {

    document.body.removeChild(document.getElementById('bootstrap-grid-container'));

    bootstrapGridObj.running = false;

}

// Run the whole thing

bootstrapGridInit();