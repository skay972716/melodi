// Chakra imports
import { Button, Flex, Icon, Input, Spacer, Text, useColorModeValue } from '@chakra-ui/react';
// Custom components
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import React, { useState } from 'react';
// react icons
import { BsArrowRight } from 'react-icons/bs';
import { buscarMusica } from '../servicios/buscarMusica';
import { SearchIcon } from '@chakra-ui/icons';
import { WalletIcon } from '../../../../components/Icons/Icons';
import MiniStatistics from './MiniStatistics';
const BuiltByDevelopers = ({ title, name, description }) => {
    const textColor = useColorModeValue('gray.700', 'white');
    const [videos, setVideos] = useState([]);
    return (
        <Card minHeight="290.5px" p="1.2rem">
            <CardBody w="100%">
                <Flex flexDirection={{ sm: 'column', lg: 'row' }} w="100%">
                    <Flex flexDirection="column" h="100%" lineHeight="1.6" width={{ lg: '45%' }}>
                        <Text fontSize="sm" color="gray.400" fontWeight="bold">
                            {title}
                        </Text>
                        <Text fontSize="lg" color={textColor} fontWeight="bold" pb=".5rem">
                            {name}
                        </Text>
                        <Text fontSize="sm" color="gray.400" fontWeight="normal">
                            {description}
                        </Text>
                        <Flex align="center" mt="0.5rem">
                            <Input placeholder="Buscar..." size="md" mr="0.5rem" id="buscar-musica" />
                            <Button
                                colorScheme="teal"
                                variant="solid"
                                onClick={async () => {
                                    await buscarMusica(setVideos);
                                }}
                            >
                                <SearchIcon />
                            </Button>
                        </Flex>
                        <Flex align="center" direction="column">
                            {videos.map(video => {
                                const { snippet, id } = video;
                                const { videoId } = id;
                                const { title, description, thumbnails = {} } = snippet;
                                const { default: { url } = {} } = thumbnails;
                                return (
                                    <MiniStatistics
                                        key={videoId}
                                        title={title}
                                        description={description}
                                        src={url}
                                        id={videoId}
                                        item={video}
                                    />
                                );
                            })}
                        </Flex>
                    </Flex>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default BuiltByDevelopers;
