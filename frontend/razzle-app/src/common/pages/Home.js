import React, { Component } from 'react';
import { Box  } from 'reakit';
import { Flex, Text ,Image, Card} from 'rebass';
import { Centered, Container } from '../components/base';

import bannerImg from '../static/imgs/comfort_here.jpg'

class Home extends Component {
  state = {};

  render() {
    return (
      <Box palette="blacks" opaque tone={0} margin={10}>
        <Flex height={1} bg="" flexDirection="column" flexWrap="wrap">
          {' '}
          <Container mt={4}>
            <Text textAlign='center' color='white'>Smoking Gun Events is a Washington Underground Bass Music Event Production Co. Our primary focus is to host the most wicked Gatherings the West Coast has ever seen. Come one come all come as you are no judgement. </Text>
            <Flex justifyContent='center'><Text mt={2} color='white'>Respect yourself, respect others, respect the land.  </Text></Flex>
            <Flex justifyContent='center'> <Text mt={2} color='white'>Love is the highest frequency, lets vibe.</Text></Flex>
            <Flex mt={2} p={3} justifyContent='center'>
              <Card p={2} bg='black'  >
              <Image src={bannerImg} height={[250, 350]} borderRadius={8}/>
              </Card>
            </Flex>
          </Container>
        </Flex>
      </Box>
    );
  }
}

export default Home;
