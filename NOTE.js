/**
 * Need to add this code as a library and DON"T change the name
 * 
 * In the container spreadsheet this code must be added somewhere:
 * /
 function onOpen() {
  libTabPicker.onOpen();
}

//This is for a "normal" Library.Namespace.Method call
function callLibrary3(func, args){
    console.log("callLibrary from sheet scripts")
    var arr = func.split(".");

    var libName = arr[0];
    var nsName = arr[1];
    var nsFunc  = arr[2]

    args = args || [];

   return this[libName][nsName][nsFunc].apply(this, args);

}

