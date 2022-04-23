import MyComponent from '../../../../slices/SectionHelp';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/SectionHelp'
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
      mock: {"variation":"default","name":"Default","slice_type":"section_help","items":[],"primary":{"title":[{"type":"paragraph","text":"Officia voluptate consectetur veniam officia ut. Cupidatat pariatur incididunt non adipisicing aute aute exercitation consequat nostrud magna. Sint anim ut nisi sint consequat amet quis sunt.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
