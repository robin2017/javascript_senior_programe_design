/**
 * Created by robin on 2017/10/14.
 */

var supportsTraversals = document.implementation.hasFeature("Traversal","2.0")
var supportsNodeIterator = (typeof document.createNodeIterator == "function")
var supportsTreeWarker = (typeof document.createTreeWalker == "function")

console.log(supportsTraversals)
console.log(supportsNodeIterator)
console.log(supportsTreeWarker)