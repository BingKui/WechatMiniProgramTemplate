// v-icon
Component({
    properties: {
        name: {
            type: String,
            value: '',
        },
        size: {
            type: Number,
            value: 40,
        },
        color: {
            type: String,
            value: '',
        },
    },
    methods: {
        clickAction () {
            this.triggerEvent('click');
        },
    }
})
