// Chakra imports
import { Button, Flex, Image, Stat, StatHelpText, StatLabel, StatNumber, useColorModeValue } from '@chakra-ui/react';
// Custom components
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import React from 'react';
import { AddIcon } from '@chakra-ui/icons';
import { pedirMusica } from '../servicios/pedirMusica';
const MiniStatistics = ({ title, description, src, id, item }) => {
    const textColor = useColorModeValue('gray.700', 'white');
    return (
        <Card minH="83px">
            <CardBody>
                <Flex flexDirection="row" align="center" justify="center" w="100%">
                    <Stat me="auto">
                        <StatLabel fontSize="sm" color={textColor} fontWeight="bold" pb=".1rem">
                            {title}
                        </StatLabel>
                        <Flex>
                            <StatLabel fontSize="sm" color="gray.400">
                                {description}
                            </StatLabel>
                        </Flex>
                    </Stat>
                    <Image
                        src={src}
                        onClick={() => {
                            const videoUrl = `https://youtube.com/watch?v=${id}`;
                            window.open(videoUrl, '_blank');
                        }}
                        cursor="pointer"
                    />
                    <Button
                        colorScheme="teal"
                        variant="solid"
                        ml="1rem"
                        leftIcon={<AddIcon />}
                        onClick={async () => {
                            await pedirMusica(item);
                        }}
                    >
                        Pedir
                    </Button>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default MiniStatistics;
