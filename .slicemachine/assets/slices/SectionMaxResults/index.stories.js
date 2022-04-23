import MyComponent from '../../../../slices/SectionMaxResults';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/SectionMaxResults'
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
      mock: {"variation":"default","name":"Default","slice_type":"section_max_results","items":[{"lists":[{"type":"paragraph","text":"Nulla nostrud fugiat ea cupidatat tempor excepteur sint voluptate qui veniam eu.","spans":[]}]},{"lists":[{"type":"paragraph","text":"Mollit esse elit in consequat amet.","spans":[]}]},{"lists":[{"type":"paragraph","text":"Ea occaecat ipsum dolore velit culpa minim qui magna cupidatat eu quis sint proident ex laboris.","spans":[]}]},{"lists":[{"type":"paragraph","text":"Elit ullamco ut eu quis reprehenderit eiusmod ipsum laboris culpa sit laborum. Sit qui culpa laboris elit nulla sit aliqua aute eiusmod tempor aute in ad occaecat anim. Non reprehenderit nulla irure nostrud veniam irure ullamco mollit in laboris.","spans":[]}]}],"primary":{"img":{"dimensions":{"width":308,"height":195},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?w=308&h=195&fit=crop"},"title":[{"type":"paragraph","text":"Eiusmod culpa sunt consectetur consequat cillum non. Dolor pariatur commodo ullamco ea deserunt ex.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
