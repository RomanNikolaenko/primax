import MyComponent from '../../../../slices/SectionHeroHome';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/SectionHeroHome'
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
      mock: {"variation":"default","name":"Default","slice_type":"section_hero_home","items":[],"primary":{"title":"evolve holistic methodologies","subtitle":"expedite plug-and-play systems","linkBg":{"link_type":"Web","url":"http://twitter.com"},"linkBgTitle":"redefine virtual platforms","linkBorder":{"link_type":"Web","url":"http://google.com"},"linkBorderTitle":"e-enable 24/365 blockchains","imgDesc":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=900&h=500&fit=crop"},"imgMob":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&h=500&fit=crop"}},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'