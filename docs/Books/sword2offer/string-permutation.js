/**
 * @func Permutation: Print all possiblity of a string
 *                                            If origin str is 'abc', the function will print 'acb', 'bca', 'bac', etc.
 * @param {*} s : the origin string
 * @param {*} index : the replace index, change the s[index] with s[index:] one by one
 */
function Permutation(s, index) {
    if (!(s instanceof Array) || index >= s.length) {
        return
    }
    for(var i = index; i < s.length; i++) {
        if (i === index) {
            Permutation(s, index+1)
        }
        else {
            var temp = s[index]
            s[index] = s[i]
            s[i] = temp
            console.log(s)
            Permutation(s, index+1)
            temp = s[index]
            s[index] = s[i]
            s[i] = temp
        }
    }
}

var origin = 'abc'
Permutation(origin.split(''), index=0)