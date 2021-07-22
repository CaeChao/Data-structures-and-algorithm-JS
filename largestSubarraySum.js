const arr = [-2, -3, 4, -1, -2, 1, 5, -3];
let start = 0
let end = 0
function subArraySum(arr) {
  let maxSoFar = 0
  let maxEnding = 0
  let s = 0
  for (let i = 0; i < arr.length; i++) {
    maxEnding += arr[i]
    if (maxSoFar < maxEnding) {
      maxSoFar = maxEnding
      start = s
      end = i
    }

    if (maxEnding < 0) { 
      maxEnding = 0
      s = i + 1
    }
  }
  return maxSoFar
}
console.log("Maximum contiguous sum is " + subArraySum(arr))
console.log("start Index " + start)
console.log("end Index " + end)
