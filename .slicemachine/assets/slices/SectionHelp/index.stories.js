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
      mock: {"variation":"default","name":"Default","slice_type":"section_help","items":[{"img":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321599763-d66926c29613?w=900&h=500&fit=crop"},"title":"deliver back-end blockchains","listItem1":"incubate end-to-end paradigms","listItem2":"benchmark robust eyeballs","listItem3":"monetize cross-platform infomediaries","listItem4":"expedite cutting-edge methodologies","listItem5":"iterate customized e-commerce","link":{"link_type":"Web","url":"http://google.com"},"linkTitle":"transition out-of-the-box methodologies","flag":false},{"img":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1493119508027-2b584f234d6c?w=900&h=500&fit=crop"},"title":"drive ubiquitous content","listItem1":"visualize cross-media bandwidth","listItem2":"optimize impactful ROI","listItem3":"mesh wireless methodologies","listItem4":"whiteboard intuitive metrics","listItem5":"benchmark turn-key partnerships","link":{"link_type":"Web","url":"https://prismic.io"},"linkTitle":"utilize impactful applications","flag":true},{"img":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587653915936-5623ea0b949a?w=900&h=500&fit=crop"},"title":"grow global web-readiness","listItem1":"brand back-end markets","listItem2":"syndicate cross-platform niches","listItem3":"transform granular web-readiness","listItem4":"expedite sexy architectures","listItem5":"embrace integrated functionalities","link":{"link_type":"Web","url":"https://prismic.io"},"linkTitle":"transition magnetic functionalities","flag":false},{"img":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1504198070170-4ca53bb1c1fa?w=900&h=500&fit=crop"},"title":"repurpose strategic e-tailers","listItem1":"architect vertical paradigms","listItem2":"strategize turn-key portals","listItem3":"cultivate integrated communities","listItem4":"embrace open-source supply-chains","listItem5":"strategize impactful channels","link":{"link_type":"Web","url":"http://google.com"},"linkTitle":"harness open-source relationships","flag":true},{"img":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278038-6bebbd4d7b72?w=900&h=500&fit=crop"},"title":"optimize seamless mindshare","listItem1":"strategize intuitive mindshare","listItem2":"recontextualize transparent interfaces","listItem3":"repurpose distributed e-tailers","listItem4":"grow ubiquitous models","listItem5":"synergize sticky e-commerce","link":{"link_type":"Web","url":"http://google.com"},"linkTitle":"benchmark sexy e-markets","flag":false}],"primary":{"title":"grow bleeding-edge platforms"},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
