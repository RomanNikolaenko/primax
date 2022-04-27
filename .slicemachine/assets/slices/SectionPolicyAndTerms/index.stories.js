import MyComponent from '../../../../slices/SectionPolicyAndTerms';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/SectionPolicyAndTerms'
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
      mock: {"variation":"default","name":"Default","slice_type":"section_policy_and_terms","items":[],"primary":{"text":[{"type":"paragraph","text":"Deserunt laborum ex esse eiusmod culpa reprehenderit dolor in ipsum ullamco qui excepteur.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
