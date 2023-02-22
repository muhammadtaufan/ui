import { useEffect, useState } from 'react';
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Image,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Divider
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons';
import logo from "@/assets/logo_perveks.svg";
import logoWhite from "@/assets/logo_perveks_white.svg";
import { Link, useLocation } from 'react-router-dom';

export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure();
    const [header, useHeader] = useState(false)
    const location = useLocation()
    const isHome = location.pathname === '/home'

    useEffect(() => {
        if (isHome) {
            let hero = document.getElementById("hero");
            const sticky = hero.offsetTop;

            window.addEventListener("scroll", () => {
                if (window.scrollY > sticky) {
                    useHeader(true)
                } else if (window.scrollY < sticky) {
                    useHeader(false)
                }
            })
        } else { useHeader(true) }
    }, [isHome])

    return (
        <Box>
            <Flex
                bg={header || !isHome ? useColorModeValue('white', 'gray.800') : 'transparent'}
                py={{ base: 5 }}
                px={{ base: 40 }}
                // borderBottom={1}
                // borderStyle={'solid'}
                align={'center'}
                minW='100vw'
                position={'fixed'}
                top={0} zIndex={999}
            >
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <Link to='/home'>
                        <Image src={header ? logo : logoWhite} alt='Logo Perveks' />
                    </Link>
                    <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                        <DesktopNav header={header} />
                    </Flex>
                </Flex>

                <Stack
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={10}>
                    <Button
                        as={header && 'a'}
                        variant={header && 'link'}
                        fontSize={'sm'}
                        fontWeight={400}
                        color={!header && 'white'}
                        borderStyle={!header && 'solid'}
                        borderRadius={0}
                        bgColor={!header && 'transparent'}
                        borderColor={!header && 'white'}
                        _hover={{
                            bg: !header && 'green.300',
                        }}
                        href={'#'}>
                        LOGIN
                    </Button>
                    <Button
                        display={{ base: 'none', md: 'inline-flex' }}
                        fontSize={'sm'}
                        fontWeight={600}
                        color={'white'}
                        bg={'green.400'}
                        href={'#'}
                        borderRadius='0'
                        _hover={{
                            bg: 'green.300',
                        }}>
                        COBA SEKARANG
                    </Button>
                    <Button
                        as={'a'}
                        fontSize={'sm'}
                        fontWeight={400}
                        color={!header && 'white'}
                        variant={'link'}
                        href={'#'}>
                        IND  <Icon
                            as={ChevronDownIcon}
                            w={6}
                            h={6}
                        />
                    </Button>
                </Stack>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    );
}

const DesktopNav = (header) => {
    const linkColor = header.header ? useColorModeValue('gray.600', 'gray.200') : 'white';
    const linkHoverColor = '#0BAA4B';
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');

    return (
        <Stack direction={'row'} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Link to={navItem.href ?? '#'}>
                                <Text
                                    p={2}
                                    fontSize={'sm'}
                                    fontWeight={500}
                                    color={header ? linkColor : 'white'}
                                    _hover={{
                                        textDecoration: 'none',
                                        color: linkHoverColor,
                                    }}
                                >
                                    {navItem.label}
                                </Text>
                            </Link>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={'xl'}
                                minW={'sm'}>
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
        <Link to={href}>
            <Text
                role={'group'}
                display={'block'}
                p={2}
                rounded={'md'}
                _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
            >
                <Stack direction={'row'} align={'center'}>
                    <Box>
                        <Text
                            transition={'all .3s ease'}
                            _groupHover={{ color: 'pink.400' }}
                            fontWeight={500}>
                            {label}
                        </Text>
                        <Text fontSize={'sm'}>{subLabel}</Text>
                    </Box>
                    <Flex
                        transition={'all .3s ease'}
                        transform={'translateX(-10px)'}
                        opacity={0}
                        _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                        justify={'flex-end'}
                        align={'center'}
                        flex={1}>
                        <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
                    </Flex>
                </Stack>
            </Text>
        </Link>
    );
};

const MobileNav = () => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            p={4}
            display={{ md: 'none' }}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};

const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                // as={Link}
                href={href ?? '#'}
                justify={'space-between'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text
                    fontWeight={600}
                    color={useColorModeValue('gray.600', 'gray.200')}>
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}>
                    {children &&
                        children.map((child) => (
                            <Link to={child.href}>
                                <Text py={2} key={child.label}>
                                    {child.label}
                                </Text>
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};


const NAV_ITEMS = [
    {
        label: 'TENTANG KAMI',
        href: '/about',
    },
    {
        label: 'HUBUNGI KAMI'
    },
    {
        label: 'HARGA',
        href: '#',
    },
];