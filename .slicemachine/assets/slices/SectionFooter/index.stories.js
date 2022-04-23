import MyComponent from '../../../../slices/SectionFooter';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/SectionFooter'
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
      mock: {"variation":"default","name":"Default","slice_type":"section_footer","items":[{"title":[{"type":"paragraph","text":"Veniam in mollit exercitation deserunt in pariatur minim.","spans":[]}],"link":{"link_type":"Web","url":"http://google.com"},"linkTitle":"deliver B2C infomediaries"},{"title":[{"type":"paragraph","text":"Excepteur non proident ullamco exercitation exercitation enim ipsum ipsum cupidatat commodo sunt voluptate et eu.","spans":[]}],"link":{"link_type":"Web","url":"https://prismic.io"},"linkTitle":"deliver dot-com niches"},{"title":[{"type":"paragraph","text":"Mollit minim aute id mollit minim do qui aliquip. Nulla cupidatat esse aute.","spans":[]}],"link":{"link_type":"Web","url":"https://slicemachine.dev"},"linkTitle":"matrix 24/365 blockchains"}],"primary":{},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
