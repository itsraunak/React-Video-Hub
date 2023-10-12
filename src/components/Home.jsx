import React from 'react';
import { Box, Container, Heading, Img, Stack, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCaurosol />

      <Container minH={'100vh'} maxW={'container.xl'} padding={'16'}>
        <Heading
          textTransform={'uppercase'}
          py={2}
          w={'fit-content'}
          borderBottom={'2px solid'}
          m={'auto'}
        >
          Services
        </Heading>
        <Stack
          h={'full'}
          p={4}
          alignItems={'Center'}
          direction={['column', 'row']}
        >
          <Img src={img5} h={['40', '400']} />
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
            minima, ipsum eum hic unde officiis, numquam, odio similique
            delectus corrupti est expedita assumenda blanditiis iure. Architecto
            laudantium itaque autem illum. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. At eaque aliquid ipsa id, ipsum saepe!
            Accusantium vitae aspernatur autem ratione, eveniet quod
            necessitatibus ex culpa quae minus, sint, laudantium obcaecati!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            similique perferendis, repellendus libero rerum, recusandae ducimus
            dignissimos culpa expedita voluptate provident commodi dicta vel nam
            fuga ratione? Excepturi, expedita quaerat. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Sed sapiente quas voluptatibus
            delectus hic, expedita totam animi, deserunt, facere nesciunt natus
            consectetur! Repellat a ipsum possimus consequatur tempore saepe
            beatae?
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCaurosol = () => {
  return (
    <Carousel
      infiniteLoop
      autoPlay
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      interval={1000}
    >
      <Box h={'100vh'} w={'full'}>
        <Img src={img1} h={'full'} w={'full'} objectFit={'cover'} />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          Watch the Future
        </Heading>
      </Box>
      <Box h={'100vh'} w={'full'}>
        <Img src={img2} h={'full'} w={'full'} objectFit={'cover'} />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          Future is Gaming
        </Heading>
      </Box>
      <Box h={'100vh'} w={'full'}>
        <Img src={img3} h={'full'} w={'full'} objectFit={'cover'} />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          The beautiful console
        </Heading>
      </Box>
      <Box h={'100vh'} w={'full'}>
        <Img src={img4} h={'full'} w={'full'} objectFit={'cover'} />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          perfect Sunrise
        </Heading>
      </Box>
    </Carousel>
  );
};

export default Home;
