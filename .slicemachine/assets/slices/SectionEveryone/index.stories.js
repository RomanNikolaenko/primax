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
      mock: {"variation":"default","name":"Default","slice_type":"section_everyone","items":[],"primary":{"title":"benchmark cross-platform action-items","subtitle":"incubate world-class web services","linkBg":{"link_type":"Web","url":"http://google.com"},"linkBgTitle":"implement next-generation convergence","linkBorder":{"link_type":"Web","url":"http://google.com"},"linkBorderTitle":"unleash bricks-and-clicks markets","img":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=900&h=500&fit=crop"}},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'