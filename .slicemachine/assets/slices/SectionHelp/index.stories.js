import MyComponent from '../../../../slices/SectionHelp';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/SectionHelp'
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
      mock: {"variation":"default","name":"Default","slice_type":"section_help","items":[{"img":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1579931794097-0ad001e51edb?w=900&h=500&fit=crop"},"title":"enable world-class metrics","listItem1":"orchestrate visionary portals","listItem2":"embrace innovative niches","listItem3":"synthesize end-to-end infomediaries","listItem4":"disintermediate efficient experiences","listItem5":"extend integrated paradigms","link":{"link_type":"Web","url":"https://slicemachine.dev"},"linkTitle":"envisioneer innovative web-readiness","flag":false},{"img":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1560457079-9a6532ccb118?w=900&h=500&fit=crop"},"title":"monetize revolutionary bandwidth","listItem1":"cultivate proactive experiences","listItem2":"grow enterprise ROI","listItem3":"deploy efficient partnerships","listItem4":"engineer cross-platform eyeballs","listItem5":"facilitate bleeding-edge communities","link":{"link_type":"Web","url":"https://slicemachine.dev"},"linkTitle":"empower revolutionary solutions","flag":false}],"primary":{"title1":"empower extensible vortals","title2":"generate 24/7 users","title3":"harness 24/7 infrastructures","title4":"benchmark virtual applications"},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
