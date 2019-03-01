import React, { Component } from 'react';
import { Box  } from 'reakit';
import { Flex, Text,Image, Card} from 'rebass';
import { Centered, Container } from '../components/base';

import shockDoll from '../static/imgs/shock-doll.jpg'

class Roster extends Component {
	state = {};

	render() {
		return (
			<Box palette="blacks" opaque tone={0} margin={10}>
				<Flex height={1} bg="" flexDirection="column" flexWrap="wrap">
					{' '}
						<Text textAlign='center' color='white'> Artist Roster </Text>
						<Flex mt={2} p={3} flexWrap='wrap' justifyContent='center'>
							<Card m={2} p={2} bg='black' width={[1/3, 1/4]} >
								<Image
									width={[ 1 ]}
									src={shockDoll}
									borderRadius={8}
								/>
							</Card>
							<Card m={2}  p={2} bg='black' width={[1/3, 1/4]}>
								<Image
									width={[ 1 ]}
									src={shockDoll}
									borderRadius={8}
								/>
							</Card>
							<Card m={2} p={2} bg='black' width={[1/3, 1/4]} >
								<Image
									width={[ 1 ]}
									src={shockDoll}
									borderRadius={8}
								/>
							</Card>

						</Flex>
				</Flex>
			</Box>
		);
	}
}

export default Roster;
