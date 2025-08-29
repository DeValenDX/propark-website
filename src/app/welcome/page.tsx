import WhoWeAre from '../../components/SPA/WhoWeAre '
import Services from '../../components/SPA/Services'
import Welcome from '../../components/SPA/Welcome'
import Parkings from '../../components/SPA/Parkings'

export default function Page() {
	return (
		<>
			<Welcome id="inicio" />
			<WhoWeAre id="who-we-are" />
			<Services id="services" />
			<Parkings id="parkings" />
		</>
	)
}
