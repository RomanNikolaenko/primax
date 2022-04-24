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
      mock: {"variation":"default","name":"Default","slice_type":"section_hero_home","items":[],"primary":{"title":[{"type":"paragraph","text":"Incididunt nisi nisi consequat fugiat culpa ex. Proident qui id aliquip consequat sint veniam sint velit commodo enim ea velit velit laborum.","spans":[]}],"subTitle":[{"type":"paragraph","text":"Nostrud excepteur ad anim minim sunt labore incididunt non occaecat officia quis. Commodo qui cupidatat proident dolore sit labore enim velit tempor duis sit aute.","spans":[]}],"linkBg":{"link_type":"Web","url":"http://twitter.com"},"linkBgTitle":"drive magnetic architectures","linkBorder":{"link_type":"Web","url":"https://slicemachine.dev"},"linkBorderTitle":"cultivate global infrastructures","img1":{"dimensions":{"width":696,"height":319},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=696&h=319&fit=crop"},"img2":{"dimensions":{"width":370,"height":240},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1504198070170-4ca53bb1c1fa?w=370&h=240&fit=crop"},"imgBlock1":{"dimensions":{"width":25,"height":25},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=25&h=25&fit=crop"},"blockTitle1":"enable front-end vortals","blockSubtitle1":"aggregate bleeding-edge convergence","imgBlock2":{"dimensions":{"width":31,"height":31},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587840171670-8b850147754e?w=31&h=31&fit=crop"},"blockTitle2":"leverage holistic users","blockSubtitle2":"reinvent bleeding-edge paradigms","imgBlock3":{"dimensions":{"width":23,"height":23},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?w=23&h=23&fit=crop"},"blockTitle3":"incentivize virtual metrics","blockSubtitle3":"unleash robust convergence","imgBlock4":{"dimensions":{"width":23,"height":21},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278038-6bebbd4d7b72?w=23&h=21&fit=crop"},"blockTitle4":"enable interactive markets","blockSubtitle4":"deliver front-end eyeballs"},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
