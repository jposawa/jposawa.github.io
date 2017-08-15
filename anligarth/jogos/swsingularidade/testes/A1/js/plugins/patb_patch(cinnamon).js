/*
 * Place this snippet right below DoubleX RMMV Popularized ATB Core
 * All credits go to Cinnamon who provided this compatibility fix
 * This fix applies to:
 * 1. Yanfly Engine Plugins - Battle Engine Extension - Visual HP Gauge
 */

if (Imported.YEP_X_VisualHpGauge) {

Scene_Battle.prototype.close_patb_windows = function() { // Rewrite
    // Rewritten to stop deactivating the enemy window upon battle end
    var windows = [this._actorWindow, this._skillWindow];
    windows = windows.concat([this._itemWindow, this._actorCommandWindow]);
    windows.concat([this._partyCommandWindow]).forEach(function(window) {
        window.hide();
        window.deactivate();
        window.close();
    });
    this._enemyWindow.hide();
    this._enemyWindow.close();
    //
}; // Scene_Battle.prototype.close_patb_windows

}; // if (Imported.YEP_X_VisualHpGauge)