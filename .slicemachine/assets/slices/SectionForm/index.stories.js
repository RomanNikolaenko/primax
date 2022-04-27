import MyComponent from '../../../../slices/SectionForm';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/SectionForm'
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
      mock: {"variation":"default","name":"Default","slice_type":"section_form","items":[],"primary":{"title":[{"type":"paragraph","text":"Dolore aliquip Lorem minim commodo excepteur mollit anim culpa mollit commodo dolore. Et mollit aliqua esse duis do.","spans":[]}],"cabinetModeTitle":[{"type":"paragraph","text":"Cillum incididunt ut pariatur ad velit velit ea esse culpa consequat et cupidatat proident est proident.","spans":[]}],"radioTitle1":"strategize global communities","radioTitle2":"enable distributed e-business","aboutYouTitle":[{"type":"paragraph","text":"Adipisicing voluptate id aliqua minim officia irure ex irure esse consectetur est officia mollit reprehenderit.","spans":[]}],"name":"target efficient channels","nameError":"streamline bricks-and-clicks schemas","surname":"target wireless e-services","surnameError":"evolve value-added networks","email":"mesh virtual networks","emailError":"drive transparent platforms","phone":"iterate user-centric schemas","phoneError":"grow granular channels","message":"matrix ubiquitous infrastructures","privacyPolicy":[{"type":"paragraph","text":"Laboris elit consectetur enim. Veniam voluptate irure consequat cupidatat eiusmod anim labore quis aute.","spans":[]}],"submitTitle":"morph next-generation schemas"},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
