/**
 * CustomWindow
 * @extends Ext.Window
 * My custom window
 */
CustomWindow = function(config) {
  var config = config || {};
 
  Ext.applyIf(config, {
    closable:  false,
    minWidth:  200,
    minHeight: 300,
    
    height:    250,
    width:     350,
    
    tools: [
      {
        id: 'refresh',
        handler: function() {alert('toolbar button clicked');}
      },
      {
        id: 'gear',
        handler: function() {alert('gear');}
      }
    ]
  });
 
  CustomWindow.superclass.constructor.call(this, config);
};
Ext.extend(CustomWindow, Ext.Window);

