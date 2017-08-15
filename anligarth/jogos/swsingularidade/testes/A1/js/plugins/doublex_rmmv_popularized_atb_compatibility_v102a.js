/*============================================================================
 *    ## Plugin Info                                                          
 *----------------------------------------------------------------------------
 *    # Plugin Name                                                           
 *      DoubleX RMMV Popularized ATB Compatibility                            
 *----------------------------------------------------------------------------
 *    # Terms Of Use                                                          
 *      You shall keep this plugin's Plugin Info part's contents intact       
 *      You shalln't claim that this plugin's written by anyone other than    
 *      DoubleX or his aliases                                                
 *      None of the above applies to DoubleX or his aliases                   
 *----------------------------------------------------------------------------
 *    # Prerequisites                                                         
 *      Plugins:                                                              
 *      1. DoubleX RMMV Popularized ATB Core                                  
 *      Abilities:                                                            
 *      1. Nothing special                                                    
 *----------------------------------------------------------------------------
 *    # Links                                                                 
 *      This plugin:                                                          
 *      1. http://pastebin.com/SXpV9Zwt                                       
 *      Video:                                                                
 *      1. https://www.youtube.com/watch?v=aoBI3DaE3g8                        
 *----------------------------------------------------------------------------
 *    # Instructions                                                          
 *      1. Place this plugin below all DoubleX RMMV Popularized ATB addons    
 *----------------------------------------------------------------------------
 *    # Author                                                                
 *      DoubleX                                                               
 *----------------------------------------------------------------------------
 *    # Changelog                                                             
 *      v1.02a(GMT 1400 13-8-2017):                                           
 *      1. Compatible with                                                    
 *         Yanfly Engine Plugins - Target Extension - Selection Control       
 *      v1.01b(GMT 0400 11-8-2017):                                           
 *      1. Fixed the wrong actor window position bug when using skills/items  
 *         on party members                                                   
 *      v1.01a(GMT 0500 10-8-2017):                                           
 *      1. Compatible with MOG_BattleHud                                      
 *      v1.00e(GMT 1200 5-8-2017):                                            
 *      1. Fixed the next action incorrectly highlighting all members in the  
 *         same party/troop after using an party/troop targeting skill/item   
 *      v1.00d(GMT 1500 11-8-2016):                                           
 *      1. In sync with the latest DoubleX RMMV Popularized ATB Core version  
 *      v1.00c(GMT 1400 9-8-2016):                                           
 *      1. Fixed skills/items not needing selections not working when         
 *         Select Help Window in Yanfly Engine Plugins - Battle Engine Core is
 *         set as false                                                       
 *      v1.00b(GMT 0400 16-7-2016):                                           
 *      1. PATB Hotkey supports selecting inputable actors via touch input    
 *         when Yanfly Engine Plugins - Battle Engine Core is used with       
 *         Visual Actor Select being set as true as well                      
 *         Mouse Over applies to PATB Hotkey as well                          
 *      v1.00a(GMT 1600 12-4-2016):                                           
 *      1. 1st version of this plugin finished                                
 *============================================================================*/
/*:
 * @plugindesc Fixes DoubleX RMMV Popularized ATB compatibility issues
 * @author DoubleX
 *
 * @help
 *============================================================================
 *    ## Addressed Plugins                                                    
 *----------------------------------------------------------------------------
 *    # (v1.02a+)Yanfly Engine Plugins - Target Extension - Selection Control 
 *      1. The enemy window freezes when the current inputable actor becomes  
 *         not inputable                                                      
 *         - The original status window will also be shown if MOG_BattleHud is
 *           used as well
 *         - Reference tag: YEP_X_SelectionControl_StopUnlockingEnemyWindow   
 *         - (With MOG_BattleHud)Extended                                     
 *           Scene_Battle.prototype.close_patb_selection_windows to stop      
 *           closing the enemy window nor showing the status window upon the  
 *           aforementioned event                                             
 *         - (Without MOG_BattleHud)Extended                                  
 *           Scene_Battle.prototype.close_patb_selection_windows to stop      
 *           closing the enemy window upon the aforementioned event           
 *    # (v1.01a+)MOG_BattleHud:                                               
 *      1. The ATB bar doesn't gather any DoubleX RMMV Popularized ATB data   
 *         - Reference tag: MOG_BattleHud_PATB_Data                           
 *         - Rewritten Battle_Hud.prototype.update_at to support cooldown too 
 *         - Extended Battle_Hud.prototype.at, Battle_Hud.prototype.max_at,   
 *           Battle_Hud.prototype.cast_at, Battle_Hud.prototype.cast_max_at   
 *           and Battle_Hud.prototype.is_casting to support atb and charge    
 *         - Added Battle_Hud.prototype.cooldown_at,                          
 *           Battle_Hud.prototype.cooldown_max_at,                            
 *           Battle_Hud.prototype.is_cooling_down and                         
 *           Battle_Hud.prototype.is_max_cooldown to support cooldown         
 *      2. (v1.01b+) The actor window isn't fully shown                       
 *         - Reference tag: MOG_BattleHud_Actor_Window                        
 *         - Removed Scene_Battle.prototype.update_patb_window_positions to   
 *           let MOG_BattleHud handle the actor window position               
 *    # Yanfly Engine Plugins - Battle Engine Core:                           
 *      1. All battler actions are recreated upon starting actor inputs       
 *         - Reference tag: YEP_BattleEngineCore_StopRecreateAction           
 *         - Stopped calling BattleManager.createActions when patb's effective
 *      2. Valid actions don't execute at all                                 
 *         - Reference tag: YEP_BattleEngineCore_HandleNewPhases              
 *         - Extended BattleManager.can_update_patb_process to handle new     
 *           phases added by Yanfly Engine Plugins - Battle Engine Core       
 *      3. The battler's atb's reset right after executing 1 action already   
 *         - Reference tag: YEP_BattleEngineCore_StopAllActsEnd               
 *         - Stopped calling Game_Battler.prototype.on_all_patb_acts_end when 
 *           the battler still has actions                                    
 *      4. Skills/Items targeting all/random allies/enemies are confirmed     
 *         before the target selection's complete                             
 *         - Reference tag: YEP_BattleEngineCore_StopConfirmAllRandomSelection
 *         - Removed all Game_Action.prototype.confirm_patb_item contents     
 *         - (v1.00c+) Stopped this fix when Select Help Window is false      
 *      5. Right now wait_cond_code full and force run atb are still          
 *         functioning as act                                                 
 *         - Due to BattleManager.can_update_patb_process to handle new phases
 *           added by Yanfly Engine Plugins - Battle Engine Core              
 *      6. (v1.00e+) Subsequent actions of an all-selection one all wrongly   
 *         mark all party/troop members                                       
 *         - Reference tag: YEP_BattleEngineCore_StopWrongAllSelections       
 *         - Extended Scene_Battle.prototype.select_next_patb_command to stop 
 *           marking actions as all selections                                
 *============================================================================
 */

"use strict";
var DoubleX_RMMV = DoubleX_RMMV || {};
DoubleX_RMMV["PATB Compatibility"] = "v1.02a";

/*============================================================================
 *    ## Plugin Implementations                                               
 *       You need not edit this part as it's about how this plugin works      
 *----------------------------------------------------------------------------
 *    # Plugin Support Info:                                                  
 *      1. Prerequisites                                                      
 *         - Basic knowledge of how DoubleX RMMV Popularized ATB and each     
 *           addressed plugin works                                           
 *         - Some Javascript coding proficiency to fully comprehend this      
 *           plugin                                                           
 *      2. Function documentation                                             
 *         - The 1st part describes why this function's rewritten/extended for
 *           rewritten/extended functions or what the function does for new   
 *           functions                                                        
 *         - The 2nd part describes what the arguments of the function are    
 *         - The 3rd part informs which version rewritten, extended or created
 *           this function                                                    
 *         - The 4th part informs whether the function's rewritten or new     
 *         - The 5th part informs whether the function's a real or potential  
 *           hotspot                                                          
 *         - The 6th part describes how this function works for new functions 
 *           only, and describes the parts added, removed or rewritten for    
 *           rewritten or extended functions only                             
 *         Example:                                                           
 * /*----------------------------------------------------------------------
 *  *    Why rewrite/extended/What this function does                      
 *  *----------------------------------------------------------------------*/ 
/* // arguments: What these arguments are                                     
 * function_name = function(arguments) { // Version X+; Rewrite/New; Hotspot  
 *     // Added/Removed/Rewritten to do something/How this function works     
 *     function_name_code;                                                    
 *     //                                                                     
 * } // function_name                                                         
 *----------------------------------------------------------------------------*/

if (DoubleX_RMMV["PATB Core"]) {

/*----------------------------------------------------------------------------*/

if (Imported.YEP_BattleEngineCore) {

/*----------------------------------------------------------------------------
 *    # Edit class: BattleManager                                             
 *----------------------------------------------------------------------------*/

BattleManager.createActionsPatbCompatibility = BattleManager.createActions;
BattleManager.createActions = function() {
    // Rewritten to stop recreating battler actions when starting actor inputs
    if (!$gameSystem.is_patb()) { this.createActionsPatbCompatibility(); }
    // YEP_BattleEngineCore_StopRecreateAction
}; // BattleManager.createActions

BattleManager.can_update_patb_process_compatibility = 
BattleManager.can_update_patb_process;
BattleManager.can_update_patb_process = function() { // Hotspot
	// Added to let BattleManager.update handle all phases when executing action
	if (this._phase == 'actionList' || this._phase == 'actionTargetList') {
	    this.update();
	    return false;
	} else if (this._phase == 'phaseChange') {
	    this.update();
	    return false;
	}
	// YEP_BattleEngineCore_HandleNewPhases
    return this.can_update_patb_process_compatibility();
}; // BattleManager.can_update_patb_process

/*----------------------------------------------------------------------------
 *    # Edit class: Game_Battler                                              
 *----------------------------------------------------------------------------*/

Game_Battler.prototype.on_all_patb_acts_end_comnpatibility = 
Game_Battler.prototype.on_all_patb_acts_end;
Game_Battler.prototype.on_all_patb_acts_end = function() {
    // Added to stop resetting the battler's atb when there's still actions
    if (this.currentAction()) { return; }
    // YEP_BattleEngineCore_StopAllActsEnd
    this.on_all_patb_acts_end_comnpatibility();
}; // Game_Battler.prototype.on_all_patb_acts_end 

/*----------------------------------------------------------------------------
 *    # (v1.00e+)Edit class: Scene_Battle                                     
 *----------------------------------------------------------------------------*/

Scene_Battle.prototype.select_next_patb_command_comnpatibility = 
Scene_Battle.prototype.select_next_patb_command;
Scene_Battle.prototype.select_next_patb_command = function() { // v1.00b+
    this.select_next_patb_command_comnpatibility();
    // Added to ensure that subsequent actions won't be marked as all selections
    BattleManager.stopAllSelection();
    // YEP_BattleEngineCore_StopWrongAllSelections
}; // Scene_Battle.prototype.select_next_patb_command

if (Imported.YEP_X_SelectionControl) {

Scene_Battle.prototype.close_patb_selection_windows_comnpatibility = 
Scene_Battle.prototype.close_patb_selection_windows;

if (Imported.MOG_BattleHud) {

Scene_Battle.prototype.close_patb_selection_windows = function() { // v1.02a+
    console.info("Scene_Battle.prototype.close_patb_selection_windows");
    // Added to save the last statuses before stopping it from being closed
    var is_enemy_window_active = this._enemyWindow.active;
    this._enemyWindow.deactivate();
    // YEP_X_SelectionControl_StopUnlockingEnemyWindow
    this.close_patb_selection_windows_comnpatibility();
    // Added to load the last statuses after stopping it from being closed
    if (is_enemy_window_active) this._enemyWindow.activate();
    this._statusWindow.close();
    this._statusWindow.hide();
    // YEP_X_SelectionControl_StopUnlockingEnemyWindow
}; // Scene_Battle.prototype.close_patb_selection_windows

} else {

Scene_Battle.prototype.close_patb_selection_windows = function() { // v1.02a+
    // Added to save the last active status before stopping it from being closed
    var is_enemy_window_active = this._enemyWindow.active;
    this._enemyWindow.deactivate();
    // YEP_X_SelectionControl_StopUnlockingEnemyWindow
    this.close_patb_selection_windows_comnpatibility();
    // Added to load the last active status after stopping it from being closed
    if (is_enemy_window_active) this._enemyWindow.activate();
    // YEP_X_SelectionControl_StopUnlockingEnemyWindow
}; // Scene_Battle.prototype.close_patb_selection_windows

} // if (Imported.MOG_BattleHud)

} // if (Imported.YEP_X_SelectionControl)

if (DoubleX_RMMV["PATB Hotkey"]) {

/*----------------------------------------------------------------------------
 *    # (v1.00b+)Edit class: Window_ActorCommand.                             
 *----------------------------------------------------------------------------*/

Window_ActorCommand.prototype.processTouch = function() { // New; Hotspot
    this.process_patb_hotkey_touch();
    Window_Selectable.prototype.processTouch.call(this);
}; // Window_ActorCommand.prototype.processTouch

Window_ActorCommand.prototype.process_patb_hotkey_touch = function() {
// New; Hotspot
    if (!this.isOpenAndActive() || !$gameSystem.is_patb()) { return; }
    this.process_patb_hotkey_touch_select();
    this.process_patb_hotkey_touch_trigger();
}; // Window_ActorCommand.prototype.process_patb_hotkey_touch

Window_ActorCommand.prototype.process_patb_hotkey_touch_select = function() {
// New; Hotspot
    if (!Yanfly.Param.BECSelectMouseOver) { return; }
    var index = this.getMouseOverActor();
    if (index < 0) { return; }
    var mem = $gameParty.battleMembers()[index];
    if (mem.isSelected()) { return; }
    SoundManager.playCursor();
    $gameParty.select(mem);
}; // Window_ActorCommand.prototype.process_patb_hotkey_touch_select

Window_ActorCommand.prototype.process_patb_hotkey_touch_trigger = function() {
// New; Hotspot
    if (!eval(Yanfly.Param.BECActorSelect)) { return; }
    if (!TouchInput.isTriggered() || this.isTouchedInsideFrame()) { return; }
    var i = this.getClickedActor();
    if (i < 0) { return; }
    return this.callHandler($gameSystem.patb["hotkey_actor_" + i.toString()]);
}; // Window_ActorCommand.prototype.process_patb_hotkey_touch_trigger

Window_ActorCommand.prototype.getClickedActor = 
Window_BattleActor.prototype.getClickedActor;

Window_ActorCommand.prototype.isClickedActor = 
Window_BattleActor.prototype.isClickedActor;

Window_ActorCommand.prototype.getMouseOverActor = 
Window_BattleActor.prototype.getMouseOverActor;

Window_ActorCommand.prototype.isMouseOverActor = 
Window_BattleActor.prototype.isMouseOverActor;

} // if (DoubleX_RMMV["PATB Hotkey"])

} // if (Imported.YEP_BattleEngineCore)

if (Imported.MOG_BattleHud) {

/*----------------------------------------------------------------------------
 *    # (v1.01a+)Edit class: Battle_Hud                                       
 *----------------------------------------------------------------------------*/

Battle_Hud.prototype.update_at = function() {
    if (this._at_meter) {
        if (!this.at === -1) { return this._at_meter.visible = false; }
        this._at_meter.visible = true;
        if(!this._at_flow[0]) {
            // Rewritten to update the cooldown atb bars as well
            if (this.is_casting()) {
                if (this.is_max_cast()) {
                    return this.refresh_at_meter(this._at_meter, this.cast_at(), this.cast_max_at(), 3);
                }
                return this.refresh_at_meter(this._at_meter, this.cast_at(), this.cast_max_at(), 2);
            } else if (this.is_cooling_down()) {
                if (this.is_max_cooldown()) {
                    return this.refresh_at_meter(this._at_meter, this.cooldown_at(), this.cooldown_max_at(), 3);
                }
                return this.refresh_at_meter(this._at_meter, this.cooldown_at(), this.cooldown_max_at(), 2);
            } else if (this.is_max_at()) {
                return this.refresh_at_meter(this._at_meter, this.at(), this.max_at(), 1);
            }
            // MOG_BattleHud_PATB_Data
            return this.refresh_at_meter(this._at_meter, this.at(), this.max_at(), 0);
        }
        // Rewritten to update the cooldown atb bars as well
        if (this.is_casting()) {
            if (this.is_max_cast()) {
                this.refresh_at_meter_flow(this._at_meter, this.cast_at(), this.cast_max_at(), 3, this._at_flow[1]);
            } else {
                this.refresh_at_meter_flow(this._at_meter, this.cast_at(), this.cast_max_at(), 2, this._at_flow[1]);
            }
        } else if (this.is_cooling_down()) {
            if (this.is_max_cooldown()) {
                this.refresh_at_meter_flow(this._at_meter, this.cooldown_at(), this.cooldown_max_at(), 3, this._at_flow[1]);
            } else {
                this.refresh_at_meter_flow(this._at_meter, this.cooldown_at(), this.cooldown_max_at(), 2, this._at_flow[1]);
            }
        } else if (this.is_max_at()) {
            this.refresh_at_meter_flow(this._at_meter, this.at(), this.max_at(), 1, this._at_flow[1]);
        } else {
            this.refresh_at_meter_flow(this._at_meter, this.at(), this.max_at(), 0, this._at_flow[1]);
        }
        // MOG_BattleHud_PATB_Data
        this._at_flow[1] += 1.5;
        if (this._at_flow[1] > this._at_flow[3]) { this._at_flow[1] = 0; }
    }
}; // Battle_Hud.prototype.update_at

Battle_Hud.prototype.at_patb_compatibility = Battle_Hud.prototype.at;
Battle_Hud.prototype.at = function() {
    // Added to use the ATB value from PATB only if it's active
    if ($gameSystem.is_patb()) { return this._battler.patb_val.atb; }
    // MOG_BattleHud_PATB_Data
    return this.at_patb_compatibility();
}; // Battle_Hud.prototype.at

Battle_Hud.prototype.max_at_patb_compatibility = Battle_Hud.prototype.max_at;
Battle_Hud.prototype.max_at = function() {
    // Added to use the ATB value from PATB only if it's active
    if ($gameSystem.is_patb()) { return this._battler._max_patb_val; }
    // MOG_BattleHud_PATB_Data
    return this.max_at_patb_compatibility();
}; // Battle_Hud.prototype.max_at

Battle_Hud.prototype.cast_at_patb_compatibility = Battle_Hud.prototype.cast_at;
Battle_Hud.prototype.cast_at = function() {
    // Added to use the ATB value from PATB only if it's active
    if ($gameSystem.is_patb()) {
        if (!DoubleX_RMMV["PATB Charge"]) { return 0; }
        return this._battler.patb_val.charge;
    }
    // MOG_BattleHud_PATB_Data
    return this.cast_at_patb_compatibility();
}; // Battle_Hud.prototype.cast_at

Battle_Hud.prototype.cast_max_at_patb_compatibility = 
        Battle_Hud.prototype.cast_max_at;
Battle_Hud.prototype.cast_max_at = function() {
    // Added to use the ATB value from PATB only if it's active
    if ($gameSystem.is_patb()) { return this._battler._max_patb_val; }
    // MOG_BattleHud_PATB_Data
    return this.cast_max_at_patb_compatibility();
}; // Battle_Hud.prototype.cast_max_at

Battle_Hud.prototype.is_casting_patb_compatibility = 
        Battle_Hud.prototype.is_casting;
Battle_Hud.prototype.is_casting = function() {
    // Added to use the ATB value from PATB only if it's active
    if ($gameSystem.is_patb()) {
        if (!DoubleX_RMMV["PATB Charge"]) { return false; }
        return this._battler.is_patb_charge();
    }
    // MOG_BattleHud_PATB_Data
    return this.is_casting_patb_compatibility();
}; // Battle_Hud.prototype.is_casting

Battle_Hud.prototype.cooldown_at = function() { // New; Hotspot
    if (!$gameSystem.is_patb() || !DoubleX_RMMV["PATB Cooldown"]) { return 0; }
    return this._battler.patb_val.cooldown;
}; // Battle_Hud.prototype.cooldown_at

Battle_Hud.prototype.cooldown_max_at = function() { // New; Hotspot
    return $gameSystem.is_patb() ? this._battler._max_patb_val : 1;
}; // Battle_Hud.prototype.cooldown_max_at

Battle_Hud.prototype.is_cooling_down = function() { // New; Hotspot
    if ($gameSystem.is_patb() && DoubleX_RMMV["PATB Cooldown"]) {
        return this._battler.is_patb_cooldown();
    }
    return false;
}; // Battle_Hud.prototype.is_cooling_down

Battle_Hud.prototype.is_max_cooldown = function() { // New; Hotspot
	return this.cooldown_at() >= this.cooldown_max_at();
}; // Battle_Hud.prototype.is_max_cooldown

/*----------------------------------------------------------------------------
 *    # (v1.01b+)Edit class: Scene_Battle                                     
 *----------------------------------------------------------------------------*/

Scene_Battle.prototype.update_patb_window_positions = function() { // Rewrite
    // Removed to let MOG_BattleHud handle the actor window positions
    // MOG_BattleHud_Actor_Window
}; // Scene_Battle.prototype.update_patb_window_positions

} // if (Imported.MOG_BattleHud)

/*----------------------------------------------------------------------------*/

} else {
    alert("To use PATB Compatibility, place it below all other PATB plugins.");
}

/*============================================================================*/