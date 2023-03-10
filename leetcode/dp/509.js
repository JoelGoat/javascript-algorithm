/**
 * 509. Fibonacci Number (Easy)
 *
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n == 0 || n == 1) return n
  const arr = [0, 1]
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2])
  }
  return arr[arr.length - 1]
}

var fib = function (n) {
  if (n == 0 || n == 1) return n
  return fib(n - 1) + fib(n - 2)
}
