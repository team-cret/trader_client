export function saveSession(sessionId) {
  window.localStorage.setItem("sessionId", sessionId);
}

export function getSession() {
  return window.localStorage.getItem("sessionId");
}
