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
      mock: {"variation":"default","name":"Default","slice_type":"section_about","items":[],"primary":{"title":[{"type":"paragraph","text":"Magna aliquip veniam fugiat nulla ex magna nisi aliqua anim sint sint Lorem non dolor. Laborum ea laboris magna consequat.","spans":[]}],"subTitle":[{"type":"paragraph","text":"Sint veniam commodo in consequat magna commodo nostrud culpa incididunt. Pariatur consequat minim eu aute laborum labore nisi enim reprehenderit exercitation Lorem adipisicing sit est eu. Aliqua id exercitation deserunt et cupidatat ea do est adipisicing exercitation non id dolore commodo do.","spans":[]}],"link":{"link_type":"Web","url":"http://google.com"},"linkTitle":"architect clicks-and-mortar niches","img":{"dimensions":{"width":1700,"height":893},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278043-57198ac8da43?w=1700&h=893&fit=crop"}},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
