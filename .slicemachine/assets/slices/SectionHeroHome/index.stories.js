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
      mock: {"variation":"default","name":"Default","slice_type":"section_hero_home","items":[],"primary":{"title":[{"type":"paragraph","text":"Lorem reprehenderit do cupidatat irure minim enim aliquip ex amet ex occaecat minim amet. Amet in nostrud sit.","spans":[]}],"subTitle":[{"type":"paragraph","text":"Nisi id Lorem dolor laborum laborum ut magna nisi occaecat et ut labore irure. Id voluptate non excepteur sint incididunt dolore adipisicing ipsum ut.","spans":[]}],"linkBg":{"link_type":"Web","url":"https://prismic.io"},"linkBgTitle":"target end-to-end channels","linkBorder":{"link_type":"Web","url":"https://prismic.io"},"linkBorderTitle":"enhance value-added channels","img1":{"dimensions":{"width":696,"height":319},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=696&h=319&fit=crop"},"img2":{"dimensions":{"width":370,"height":240},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587840171670-8b850147754e?w=370&h=240&fit=crop"}},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
