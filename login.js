const remote = require('electron').remote
const electron = require('electron')
const {app, BrowserWindow, Menu} = electron
const path = require('path')
const url = require('url')
window.onload = function() {
 let dashWindow
  document.getElementById('but').addEventListener('click', () =>{
     // Add the add button click evesnt
     var username = document.getElementById('username');
     var password = document.getElementById('password');
 
     // logic
     if (username.value == "admin" && password.value == "123456"){
        dashWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
      }))
     }

  })
}



