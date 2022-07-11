

const mroTabPicker = (() => {
  const _tabPicker = () => {
    let tmp = HtmlService.createTemplateFromFile('tablist')
    let cbos = _createCheckBoxes()
    tmp.cboxes = cbos
    let thePage = tmp.evaluate()

    SpreadsheetApp.getUi().showSidebar(thePage)
  }
  const _createCheckBoxes=()=> {
    let ss = SpreadsheetApp.getActiveSpreadsheet()
    let tabs = ss.getSheets()
    let tmp = []
    let cbo = tabs.map(function (tab) {

      if (tab.isSheetHidden()) {
        return ('<input type="checkbox" name="theTabs" value="' + tab.getName() + '" checked>' + tab.getName() + '<br>')
      }
      else {
        return ('<input type="checkbox" name="theTabs" value="' + tab.getName() + '">' + tab.getName() + '<br>')
      }
    }).join(' ')

    return cbo
  }

  const  _toggleEm=(data)=> {
    let ss = SpreadsheetApp.getActiveSpreadsheet()
    data.forEach(function (row) {
      let sht = ss.getSheetByName(row[0])
      _toggle(sht, row[1])
    })
  }

  const _toggle=(sheet, state)=> {
    switch (state) {
      case true:
        sheet.hideSheet()
        break
      case false:
        sheet.showSheet()
        break
    }
  }

  return{
    tabPicker: _tabPicker,
    toggleEm: _toggleEm
  }

})()

//need a global to call the namespace
var mroTabPicker1 = mroTabPicker

//get css and js into the web page
function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}