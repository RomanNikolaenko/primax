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
      mock: {"variation":"default","name":"Default","slice_type":"section_cta","items":[],"primary":{"title":[{"type":"paragraph","text":"Occaecat cupidatat qui sunt minim officia officia deserunt mollit est id laborum officia. Aliqua cupidatat laborum eiusmod.","spans":[]}],"link":{"link_type":"Web","url":"https://slicemachine.dev"},"linkTitle":"incubate leading-edge models"},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
