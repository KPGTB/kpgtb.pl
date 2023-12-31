import Clients from "@/components/features/Clients/Clients"
import Contact from "@/components/features/Contact/Contact"
import Home from "@/components/features/Home/Home"
import Projects from "@/components/features/Projects/Projects"

const Page = () => {
	return (
		<main>
			<Home />
			<Projects />
			<Contact />
			<Clients />
		</main>
	)
}

export default Page
