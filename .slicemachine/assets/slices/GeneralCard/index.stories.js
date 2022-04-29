import MyComponent from '../../../../slices/GeneralCard';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/GeneralCard'
}


export const _Default = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default","name":"Default","slice_type":"general_card","items":[],"primary":{"title":"engage cutting-edge markets","type":"morph interactive markets","url":"reintermediate customized architectures","description":"reintermediate open-source channels","img":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?w=900&h=500&fit=crop"}},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
