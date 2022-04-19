import MyComponent from '../../../../slices/SectionHeader';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/SectionHeader'
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
      mock: {"variation":"default","name":"Default","slice_type":"section_header","items":[],"primary":{"linkIn":{"link_type":"Web","url":"https://prismic.io"},"linkInTitle":"innovate one-to-one eyeballs","linkAuth":{"link_type":"Web","url":"https://slicemachine.dev"},"linkAuthTitle":"benchmark sexy methodologies","select":"ru"},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
