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
      mock: {"variation":"default","name":"Default","slice_type":"section_form","items":[],"primary":{"title":[{"type":"paragraph","text":"Nostrud laborum ad veniam est laboris proident Lorem exercitation adipisicing proident occaecat commodo id proident. Incididunt sint ad excepteur officia officia labore ipsum proident aliquip incididunt duis. Esse Lorem duis veniam culpa consectetur exercitation aute ea qui nostrud cupidatat.","spans":[]}],"cabinetModeTitle":[{"type":"paragraph","text":"Duis nisi ut laboris ad consequat cupidatat aute. Cillum aute dolore duis dolor fugiat mollit cillum id irure. Ea sint sit ex deserunt sint.","spans":[]}],"radioTitle1":"unleash dot-com e-business","radioTitle2":"embrace intuitive blockchains","aboutYouTitle":[{"type":"paragraph","text":"Nostrud eiusmod qui aliqua cillum id nostrud in consequat excepteur non eu.","spans":[]}],"name":"enable end-to-end partnerships","surname":"transform enterprise communities","email":"leverage intuitive supply-chains","phone":"integrate vertical convergence","message":"productize visionary synergies","privacyPolicy":[{"type":"paragraph","text":"Dolor laboris cillum culpa ad Lorem cupidatat Lorem sint ea anim.","spans":[]}],"submitTitle":"seize bricks-and-clicks web services"},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'