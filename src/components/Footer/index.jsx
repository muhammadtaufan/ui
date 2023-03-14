import {
    Box,
    Text,
    Divider,
    Grid,
    GridItem,
    Image,
    Flex,
    Icon
} from '@chakra-ui/react';
import logo from "@/assets/logo_perveks_white.svg";
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

export default function Footer() {

    return (
        <Box
            bg={'#3B453F'}
            px={40} sx={{ paddingY: '4em' }}
            position='relative'
            >
            <Grid templateColumns='repeat(10, 1fr)' gap={2}>
                <GridItem colSpan={6}>
                    <Link to='/home'>
                        <Image src={logo} alt='Logo Perveks' />
                    </Link>
                </GridItem>
                <GridItem colSpan={4}>
                    <Flex color={'white'} gap={5} justifyContent='space-between'>
                        <Box as='a' href='#'>Privacy and Policy</Box>
                        <Box as='a' href='#'>Term and Conditions</Box>
                        <Box as='a' href='#'>INDONESIA  <Icon
                            as={ChevronDownIcon}
                            w={6}
                            h={6}
                        /></Box>
                    </Flex>
                </GridItem>
            </Grid>
            <Divider pt={5} mb={5} />
            <Text align={'center'} color='white' fontSize={14}>
                © Copyright 2023 - Perveks. All Rights Reserved.
            </Text>
        </Box>
    );
}
