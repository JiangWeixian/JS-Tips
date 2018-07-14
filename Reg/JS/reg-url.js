var regex = /([a-zA-z]+)(?::\/{2,3})([\w\.]+)(?::(\d+))(\/[^?#]+)(?:\?([^#]*))(?:\#(.*))/
/**
 * ([a-zA-z]+) protocol
 * (?::\/{2,3}) // or ///
 * ([\w\.]+) blog.csdn.net
 * (?::(\d+)) 9090
 * (\/[^?#]+) /article/details/2341450
 * (?:\?([^#]*)) sss
 * (?:\#(.*)) dsds
 */
var match = regex.exec('https://blog.csdn.net:9090/Damon_King/article/details/2341450?sss#dsds')
console.log(match)