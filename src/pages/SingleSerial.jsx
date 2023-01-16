import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SinglePage from "../components/SinglePage/SinglePage";

const SingleSerial = ({ isAuth }) => {
	const [serial, setSerial] = useState(null);
	const navigate = useNavigate();
	const { serialId } = useParams();

	const API = `${process.env.REACT_APP_URL_FOR_MOVIES}field=id&search=${serialId}&token=${process.env.REACT_APP_TOKEN}`;

	const getSerial = async () => {
		const response = await fetch(API);
		if (!response.ok) {
			navigate("/error");
		}
		const data = await response.json();
		console.log(data);
		setSerial(data);
	};

	useEffect(() => {
		getSerial();
	}, []);

	return (
		<>
			<SinglePage
				item={serial}
				itemId={serialId}
				isAuth={isAuth}
				type="series"
				link="series"
			/>
		</>
	);
};

export default SingleSerial;
