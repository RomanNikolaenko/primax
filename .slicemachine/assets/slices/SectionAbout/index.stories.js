import MyComponent from '../../../../slices/SectionAbout';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/SectionAbout'
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
      mock: {"variation":"default","name":"Default","slice_type":"section_about","items":[],"primary":{"title":"engineer 24/7 e-services","titleBlue":"maximize strategic deliverables","subtitle":"revolutionize 24/365 systems","subtitle2":"leverage clicks-and-mortar web services","link":{"link_type":"Web","url":"https://prismic.io"},"linkTitle":"repurpose distributed communities","img":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1576662712957-9c79ae1280f8?w=900&h=500&fit=crop"}},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
