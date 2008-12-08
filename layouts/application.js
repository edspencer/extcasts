Ext.ns('MyApp');

Ext.onReady(function() {
  MyApp.viewport = new Ext.Viewport({
    layout: 'border',
    items: [
      {
        region: 'center',
        
        layout: 'fit',
        items: [
          {
            title: 'Panel 1',
            html:  'Panel 1',
            style: 'border: 1px solid red;'
          }
        ]
      },
      {
        region: 'north',
        html:   '<p>North</p>'
      },
      {
        region: 'south',
        html:   '<p>South</p>',
        height: 50
      },
      {
        region: 'east',
        html:   '<p>East</p>',
        split:  true
      },
      {
        region: 'west',
        html:   '<p>West</p>',
        width:  120,
        split:  true,
        
        layout: 'accordion',
        items: [
          {
            title: 'Panel 1',
            html:  'Panel 1'
          },
          {
            title: 'Panel 2',
            html:  'Panel 2'
          },
          {
            title: 'Panel 3',
            html:  'Panel 3'
          }
        ]
      }
    ]
  });
});