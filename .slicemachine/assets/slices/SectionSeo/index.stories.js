import MyComponent from '../../../../slices/SectionSeo';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/SectionSeo'
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
      mock: {"variation":"default","name":"Default","slice_type":"section_seo","items":[],"primary":{"text":[{"type":"paragraph","text":"Incididunt incididunt veniam officia culpa consectetur duis commodo dolore aliqua exercitation mollit aute dolor excepteur et.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
