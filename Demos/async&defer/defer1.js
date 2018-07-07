console.log(Date.now(), 'defer')
var script = document.createElement('script')
script.src = 'http://lib.sinaapp.com/js/jquery/1.9.1/jquery-1.9.1.min.js'
script.async = true
console.log('defer async?', script.async)
document.body.appendChild(script)