import { Image } from "react-bootstrap";
import "./App.css";
import ProfileComponent from "./profile/ProfileComponent";

function App() {
	const fullName = "Maroua Ayed";
	const bio = "developpeuse";
	const profession = "formatrice";
	const alertme = () => {
		alert("hello " + fullName);
	};
	return (
		<div className="App">
			<ProfileComponent
				fullName={fullName}
				bio={bio}
				profession={profession}
				alert={alertme}
			/>
			<Image src="maroua.jpg" className="image" rounded />
		</div>
	);
}

export default App;
