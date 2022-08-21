export function getLocalItem(key) {
  return localStorage.getItem(key);
}

export function setLocalItem(key, value) {
  return localStorage.setItem(key, value)
}

export function removeLocalItem(key) {
  return localStorage.removeItem(key)
}

export function clearLocalItems() {
  return localStorage.clear()
}