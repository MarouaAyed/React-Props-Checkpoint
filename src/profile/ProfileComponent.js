import React from "react";
import PropTypes from "prop-types";

const ProfileComponent = ({ fullName, bio, profession, children, alert }) => {
	return (
		<div className="profile">
			My name is {fullName}
			<br></br>
			I'm a {bio} <br></br> and i'm a {profession} {children}
			{alert()}
		</div>
	);
};
ProfileComponent.propTypes = {
	fullName: PropTypes.string,
};

export default ProfileComponent;
