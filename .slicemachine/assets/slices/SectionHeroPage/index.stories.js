import MyComponent from '../../../../slices/SectionHeroPage';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/SectionHeroPage'
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
      mock: {"variation":"default","name":"Default","slice_type":"section_hero_page","items":[],"primary":{"background":{"dimensions":{"width":1920,"height":1080},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587614295999-6c1c13675117?w=1920&h=1080&fit=crop"},"title":[{"type":"paragraph","text":"Incididunt officia exercitation officia laborum in. Esse veniam amet voluptate est dolore eu duis sint amet proident nulla sit. Enim duis officia duis dolor anim veniam ullamco eiusmod velit aliquip tempor.","spans":[]}],"subTitle":[{"type":"paragraph","text":"Sint culpa et sit cillum reprehenderit veniam eiusmod nisi Lorem do amet anim elit. Cupidatat duis reprehenderit commodo do occaecat incididunt pariatur proident ad sunt nostrud anim amet magna. Commodo dolor nisi ex exercitation duis est elit mollit cillum veniam ea elit tempor est in.","spans":[]}],"linkBg":{"link_type":"Web","url":"https://prismic.io"},"linkBgTitle":"aggregate B2C deliverables","linkBorder":{"link_type":"Web","url":"http://twitter.com"},"linkBorderTitle":"incentivize integrated web-readiness"},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
