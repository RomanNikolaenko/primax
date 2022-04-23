import MyComponent from '../../../../slices/SectionAdvantage';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/SectionAdvantage'
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
      mock: {"variation":"default","name":"Default","slice_type":"section_advantage","items":[{"lists":[{"type":"paragraph","text":"Fugiat id sunt voluptate reprehenderit nulla duis velit ut laboris adipisicing ad ullamco. Veniam ad sint tempor ad magna excepteur commodo fugiat nostrud ut ullamco fugiat eu. Nisi nostrud qui mollit minim id magna commodo amet Lorem ipsum nostrud veniam velit ipsum.","spans":[]}]},{"lists":[{"type":"paragraph","text":"Excepteur velit sit duis qui duis exercitation enim elit minim tempor. Lorem nisi laboris tempor dolore sunt non consequat qui voluptate occaecat ea.","spans":[]}]},{"lists":[{"type":"paragraph","text":"Pariatur ipsum est cillum consectetur fugiat ullamco exercitation commodo dolor reprehenderit culpa veniam eiusmod. Mollit occaecat dolore non excepteur dolor irure dolore. Excepteur enim commodo cupidatat esse commodo.","spans":[]}]},{"lists":[{"type":"paragraph","text":"Et dolor voluptate ut reprehenderit sint eu elit reprehenderit tempor adipisicing consectetur in et.","spans":[]}]},{"lists":[{"type":"paragraph","text":"Proident est est dolor ullamco elit ea tempor ad. Eiusmod enim aliquip minim ea magna aliqua. Labore anim do sunt sit adipisicing non magna consectetur nisi sunt nulla.","spans":[]}]},{"lists":[{"type":"paragraph","text":"Qui duis veniam et sint dolore aliquip quis deserunt enim incididunt irure sit laborum pariatur do.","spans":[]}]}],"primary":{"title":[{"type":"paragraph","text":"Voluptate culpa nostrud exercitation sint Lorem reprehenderit Lorem elit reprehenderit do pariatur.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
