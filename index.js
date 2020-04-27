function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log("hello".toUpperCase())
}

function logWhisper(string) {
  console.log("HELLO".toLowerCase())
}

var uppercase = "HELLO!"

uppercase.toUpperCase() === uppercase

var lowercase = 'hello!'

lowercase.toLowercase() === lowercase

var mixedCase = "Hi there!"

mixedCase.toLowerCase() === mixedCase

mixedCase.toUpperCase() === mixedCase

function sayHiToGrandma(string) {
  if (string.toLowerCase() === lowercase) {
    return "I can't hear you"
  } else if (string.toUpperCase() === uppercase) {
    return "YES INDEED!"
  } else ("I love you, Grandma." === "I love you, Grandma.")
    return "I love you, too."
  }
