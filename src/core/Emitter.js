export class Emitter {
    constructor() {
        this.listeners = {}
    }
    // dispatch, fire, trigger
    // Уведомляем слушатели если они есть
    emit(event, ...args) {
        if (!Array.isArray(this.listeners[event])) {
            return false
        }
        this.listeners[event].forEach(listener => {
            listener(...args)
        })
        return true
    }
    // on, listen
    // "Подписыватель" - добавляем нового слушателя
    subsrcibe(event, fn) {
        this.listeners[event] = this.listeners[event] || []
        this.listeners[event].push(fn)
        return () => {
            this.listeners[event] = this.listeners[event].filter(listener => listener !== fn)
        }
    }
}