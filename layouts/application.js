Ext.namespace('MyApp');

Ext.onReady(function() {
  MyApp.viewport = new Ext.Viewport({
    layout: 'border',
    
    items: [
      {
        title: 'Panel 1',
        region: 'center',
        
        layout: 'anchor',
        
        items: [
          {
            title: 'Panel B',
            html:  '<p>Panel B</p>',
            anchor: "50% -20"
          }
        ]
      },
      {
        title: 'Panel 2',
        region: 'west',
        width: 150,
        
        layout: 'accordion',
        
        items: [
          {
            title: 'Panel A',
            html:  '<p>Panel A</p>'
          },
          {
            title: 'Panel B',
            html:  '<p>Panel B</p>'
          },
          {
            title: 'Panel C',
            html:  '<p>Panel C</p>'
          }
        ]
      },
      {
        title: 'Panel 3',
        width: 150,
        region: 'east',
        
        layout: 'fit',
        
        items: [
          {
            html: '<p>Child</p>',
            style: 'border: 1px solid red;'
          }
        ]
      },
      {
        title: 'Panel 4',
        html:  '<p>Panel 4</p>',
        region: 'north',
        height: 120
      },
      {
        title: 'Panel 5',
        html:  '<p>Panel 5</p>',
        region: 'south'
      }
    ]
  });
});