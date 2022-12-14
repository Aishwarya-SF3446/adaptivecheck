/**
 * Adaptive Grid sample
 */

var grid = new ej.grids.Grid({
  dataSource: [
    {
      fieldData: {
        Activated: 1,
        "Contact's Name": 'Bill Smith',
        'First Name': 'Bill',
        LastActivityTS: '01/01/2000 00:00:00',
        Name: 'Smith',
        ReverseName: 'Smith Bill',
        StatusButton: 7,
        UserPhoto: 'sdsaasd',
        __KeyIDpk: '8F1366D5-7774-B04A-83D1-A76BC1E2FDE1',
        c_license: '',
      },
      modId: '2476',
      portalData: {},
      recordId: '2557',
    },
    {
      fieldData: {
        Activated: 1,
        "Contact's Name": 'Demo User',
        'First Name': 'Demo',
        LastActivityTS: '12/13/2021 13:39:00',
        Name: 'User',
        ReverseName: 'User Demo',
        StatusButton: 6,
        UserPhoto: 'xxx',
        __KeyIDpk: 'B0843200-9BEA-5D48-80FA-726F6CC26849',
        c_license: 'Gukjg',
      },
      modId: '653',
      portalData: {},
      recordId: '3143',
    },
    {
      fieldData: {
        Activated: 0,
        "Contact's Name": 'Paul Carson',
        'First Name': 'Paul',
        LastActivityTS: '01/01/2000 00:00:00',
        Name: 'Carson',
        ReverseName: 'Carson Paul',
        StatusButton: 0,
        UserPhoto: 'fsdsdfdsf',
        __KeyIDpk: '6FDEFC45-C474-45F9-A3DF-A4E555A6C658',
        c_license: '',
      },
      modId: '7',
      portalData: {},
      recordId: '3350',
    },
    {
      fieldData: {
        Activated: 1,
        "Contact's Name": 'Alexandre Cyr',
        'First Name': 'Alexandre',
        LastActivityTS: '10/04/2018 11:43:00',
        Name: 'Cyr',
        ReverseName: 'Molson Bob',
        StatusButton: 0,
        UserPhoto: 'xxx',
        __KeyIDpk: 'BFD868FF-3152-5541-A615-D1CEB7500ED3',
        c_license: 'CH741585',
      },
      modId: '2418',
      portalData: {},
      recordId: '2554',
    },
    {
      fieldData: {
        Activated: -1,
        "Contact's Name": 'John Smith',
        'First Name': 'Johns',
        LastActivityTS: '01/01/2000 00:00:00',
        Name: 'Smith',
        ReverseName: 'Smith Johns',
        StatusButton: 0,
        UserPhoto: 'fgjhgfd',
        __KeyIDpk: '7E919A42-F301-B047-9E6B-6CD121F6825A',
        c_license: '',
      },
      modId: '2405',
      portalData: {},
      recordId: '2742',
    },
  ],
  rowRenderingMode: 'Vertical',
  enableAdaptiveUI: true,
  height: '100%',
  columns: [
    { field: 'fieldData.UserPhoto', headerText: 'photo', width: 180 },
    { field: 'fieldData.ReverseName', headerText: 'Name', width: 180},
    { field: 'fieldData.StatusButton', headerText: 'Name', width: 180},
  ],
  load: function () {
    if (!ej.base.Browser.isDevice) {
      grid.adaptiveDlgTarget =
        document.getElementsByClassName('e-mobile-content')[0];
    }
  },
});
if (ej.base.Browser.isDevice) {
  grid.appendTo('#adaptivedevice');
  document.getElementsByClassName('e-mobile-layout')[0].style.display = 'none';
} else {
  grid.appendTo('#adaptivebrowser');
}

// enable/disable vertical row direction
var directionChange = new ej.buttons.CheckBox({
  change: function (e) {
    if (e.checked) {
      grid.rowRenderingMode = 'Horizontal';
    } else {
      grid.rowRenderingMode = 'Vertical';
    }
  },
});
directionChange.appendTo('#fullscreen');
