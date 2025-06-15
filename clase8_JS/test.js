// Short circuit con &&
function logUserData(user) {
    user && console.log(user);
}
  
// Short circuit con ||
function getElementStyle(element) {
    return element.style || {};
}

