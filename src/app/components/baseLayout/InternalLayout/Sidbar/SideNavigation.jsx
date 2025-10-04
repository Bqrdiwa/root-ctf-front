import React, { Component } from "react";
import Div from '../../../@material/Base/Div';
import SideNavItem, { loadChallenges } from './SideNavItem';
import { connect } from "react-redux";
import { remountOnLanguage } from '../../../@material/HOC/remountOnLanguage';
import { SideNavMenu } from "./SideNavMenu";

class SideNav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			categoryChallenge: [],
			dataChallenge: [],
			link: '',
			statusCode: ''
		}
	}

	componentDidMount() {
		loadChallenges(
			(challenges) => {
				this.setState({ dataChallenge: challenges });
			}
		);
	}

	render() {
		const { isOpen } = this.props;
		const injectedClass = isOpen ? "open" : "hide";

		return (
			<Div className={`sideNav ${injectedClass}`} id="mySidepanel">
				<SideNavMenu list={SideNavItem(this.state.dataChallenge, this.props.language)} />
			</Div>
		);
	}
};

const mapStateToProps = (state) => ({
	language: state.language.trans,
	isOpen: state.app_attrs.sidenav
});

export default connect(mapStateToProps)(remountOnLanguage(SideNav));

