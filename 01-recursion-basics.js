let count = 0
function recursionBasics() {
  // Count:1 to n
  if (count > 3) return // Base Condition

  console.log(count)
  count++

  recursionBasics() // Recursive Case
}

module.exports = recursionBasics
