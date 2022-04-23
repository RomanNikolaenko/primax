import MyComponent from '../../../../slices/SectionResults';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/SectionResults'
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
      mock: {"variation":"default","name":"Default","slice_type":"section_results","items":[{"lists":[{"type":"paragraph","text":"Laborum laboris velit non.","spans":[]}]},{"lists":[{"type":"paragraph","text":"Eu dolore aliquip quis. Proident mollit veniam ex.","spans":[]}]},{"lists":[{"type":"paragraph","text":"Ea ea est sunt aliquip occaecat amet. Aliquip duis cupidatat consequat excepteur incididunt aliqua eiusmod nostrud.","spans":[]}]},{"lists":[{"type":"paragraph","text":"Ad sunt amet aute cillum. Occaecat fugiat voluptate sunt exercitation ea eu labore ex culpa sit dolor ex.","spans":[]}]},{"lists":[{"type":"paragraph","text":"Elit qui est aliqua non est do non incididunt est commodo deserunt. Tempor elit enim in magna sit est ipsum sint Lorem laboris id velit eiusmod.","spans":[]}]},{"lists":[{"type":"paragraph","text":"Magna reprehenderit dolor ex.","spans":[]}]}],"primary":{"title":[{"type":"paragraph","text":"Cillum deserunt officia reprehenderit labore aliqua veniam ea dolor labore Lorem eu adipisicing non. Id do amet minim pariatur sit.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
