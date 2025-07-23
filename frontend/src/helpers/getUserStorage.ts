export function getUserStorage() {
  return {
    agent: localStorage.getItem("agente") || null,
    desktop: localStorage.getItem("escritorio") || null,
  }
}
