import React from 'react';
import { Row, Col } from 'antd';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';

export default class PCIndex extends React.Component{
	render(){
		return(
			<div>
				<MobileHeader> </MobileHeader>
				<MobileFooter/>
			</div>
			);
	};
} 