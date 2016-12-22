
function onVrViewLoad() {
	console.log('test')
  var vrView = new VRView.Player('#vrview', {
    video: 'https://1819948887.rsc.cdn77.org/videos/360-times-square-new-york-city_SMI_OSOE.mp4',
    is_stereo: true,
    height: '100%',
    width: '100%'
  });
}

onVrViewLoad()