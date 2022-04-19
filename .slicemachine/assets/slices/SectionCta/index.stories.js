import MyComponent from '../../../../slices/SectionCta';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/SectionCta'
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
      mock: {"variation":"default","name":"Default","slice_type":"section_cta","items":[],"primary":{"title":"synergize efficient methodologies","link":{"link_type":"Web","url":"https://slicemachine.dev"},"linkTitle":"optimize end-to-end paradigms"},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
