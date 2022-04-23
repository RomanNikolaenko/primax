import MyComponent from '../../../../slices/SectionEveryone';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/SectionEveryone'
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
      mock: {"variation":"default","name":"Default","slice_type":"section_everyone","items":[],"primary":{"title":[{"type":"paragraph","text":"Deserunt cupidatat laborum laborum sint quis amet deserunt enim nostrud.","spans":[]}],"subTitle":[{"type":"paragraph","text":"Consequat tempor proident voluptate magna aute qui culpa cillum in et in veniam dolore officia. Aliqua exercitation nulla dolor nulla cillum aliquip excepteur ex veniam. Cillum et culpa fugiat ut sit Lorem eu labore dolor nulla laboris irure aliqua aute ullamco.","spans":[]}],"linkBg":{"link_type":"Web","url":"http://google.com"},"linkBgTitle":"architect strategic communities","linkBorder":{"link_type":"Web","url":"http://twitter.com"},"linkBorderTitle":"architect scalable e-markets","img":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1504198070170-4ca53bb1c1fa?w=900&h=500&fit=crop"}},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
