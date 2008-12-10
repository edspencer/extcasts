Ext.onReady(function() {
  var w = new CustomWindow({
    title: 'My Window',
    layout: 'border',
    
    keys: [
      {
        key: 'a',
        handler: function() {
          alert('You pressed a!');
        }
      },
      {
        key: 'b',
        alt: true,
        handler: function() {
          alert('You pressed b!');
        }
      }
    ],
    
    items: [
      {
        html: '<p>My Content</p>',
        region: 'center'
      },
      {
        html: '<p>North</p>',
        region: 'north'
      }
    ]
  });
  
  
  w.show();
});