((PLUGIN_ID) => {
    'use strict';
    
    // Get Kintone UI Component
    const Kuc = Kucs['1.19.0'];

    kintone.events.on('app.record.index.show', event => {
      // existing elements
      const header = kintone.app.getHeaderMenuSpaceElement();
      
      console.log(header)

      const bulkUpdateButton = new Kuc.Button({
        text: '',
        type: 'normal',
        content: `<div>
                    <span>Bulk Update</span>
                  </div>`,
        className: 'bulk-update-button',
        id: 'bulk-update-button',
        visible: true,
        disabled: false
      });
      header.appendChild(bulkUpdateButton);
    });

    
})(kintone.$PLUGIN_ID);