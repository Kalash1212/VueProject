export default {
    install (Vue) {
        if (this.installed) {
        return
        }
        this.installed = true
        Vue.prototype.$modal = {
            EventBus: new Vue(),

            show (id) {
                this.EventBus.$emit('show', id)
            },
            hide () {
                this.EventBus.$emit('hide')
            }
        }
    }
}
    