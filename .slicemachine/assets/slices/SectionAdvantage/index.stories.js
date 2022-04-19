import MyComponent from '../../../../slices/SectionAdvantage';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/SectionAdvantage'
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
      mock: {"variation":"default","name":"Default","slice_type":"section_advantage","items":[{"title":"incentivize collaborative communities","text":"facilitate dot-com deliverables"},{"title":"envisioneer best-of-breed experiences","text":"incentivize 24/365 deliverables"},{"title":"incubate leading-edge synergies","text":"cultivate sticky relationships"},{"title":"innovate web-enabled channels","text":"maximize front-end markets"}],"primary":{"title":"scale killer eyeballs"},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
