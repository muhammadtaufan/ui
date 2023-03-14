import React from "react";
import { Box, Text, Image, IconButton, Button, useBreakpointValue, Flex, Divider, Grid, GridItem } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import Slider from 'react-slick';
import bgwhy from "@/assets/bg_green.png";
import why1 from "@/assets/why1.png";
import why2 from "@/assets/why2.png";
import why3 from "@/assets/why3.png";
import why4 from "@/assets/why4.png";
import step from "@/assets/step.png";
import solusi from "@/assets/solusi.png";

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const LandingPage = () => {

  // const [slider, setSlider] = React.useState < Slider | null > (null);
  // const [slider, setSlider] = useState(null);

  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '20px' });

  const cards = [
    'https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1627875764093-315831ac12f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1627875764093-315831ac12f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
  ];

  return (
    <>
      <Box pb={60}
        position={'relative'}
        height={'100vh'}
        width={'full'}
        backgroundImage={`url('./src/assets/Landing Page Pict.png')`}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        id='hero'
      >
        <Text
          transition={'all .3s ease'}
          color={'white'}
          fontSize={48}
          pt={60} pl={20} pr={600}
          fontWeight={700}>
          SOLUSI ANTI RIBET VALIDASI DOKUMEN EXPORT-IMPORT ANDA
        </Text>
        <Text
          transition={'all .3s ease'}
          color={'white'}
          fontSize={20}
          pt={5} pl={20} pr={700}
          fontWeight={400}>
          Aplikasi <strong>one-stop solution service</strong> yang memudahkan Anda dalam menjamin konsistensi dan kebenaran data antar dokumen export-import secara digital.
        </Text>
        <Button
          display={{ base: 'none', md: 'inline-flex' }}
          fontSize={'sm'}
          fontWeight={600}
          ml={20} mt={10}
          px={10} mb={40}
          color={'white'}
          bg={'green.400'}
          href={'#'}
          borderRadius='0'
          _hover={{
            bg: 'green.300',
          }}>
          COBA SEKARANG
        </Button>
        {/* CSS files for react-slick */}
        {/* <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      /> */}
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          borderRadius="full"
          position="absolute"
          left={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider?.slickPrev()}>
          <ArrowBackIcon />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          colorScheme="gray"
          borderRadius="full"
          position="absolute"
          right={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider?.slickNext()}>
          <ArrowForwardIcon />
        </IconButton>
        {/* Slider */}
        {/* <Slider {...settings}  ref={(slider) => setSlider(slider)}>
        {/* <Image src={landing1} htmlHeight={'100vh'} alt='Landing Perveks' /> */}
        {/* {cards.map((url, index) => (
          <Box
            key={index}
            height={'6xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
          />
        ))} */}
        {/* </Slider> */}
      </Box>
      <Box
        bgImage={'https://ibb.co/Kw0zRDK'} bgColor={'white'}
        pb={20} pt={20}
        position={'relative'}
        width={'full'}
        backgroundPosition="bottom"
        backgroundRepeat="no-repeat"
      >
        <Grid templateColumns='repeat(10, 1fr)' gap={2}>
          <GridItem colStart={2} colSpan={2}>
            <Text
              transition={'all .3s ease'}
              fontSize={60}
              fontWeight={800}
              pt={20}>
              Why Perveks?
            </Text>
          </GridItem>

          <GridItem colSpan={3} ml={10}>
            <Flex gap={3}
              alignItems='self-end'
              justifyContent={'space-between'}
            >
              <Text
                transition={'all .3s ease'}
                fontSize={22}
                fontWeight={600}>
                No More Human Error,<br />
                Just Right First Time
              </Text>
              <Image src={why4} alt='Why Perveks 1' boxSize={150} />
            </Flex>
            <Text
              transition={'all .3s ease'}
              fontSize={16}
              mt={5} pr={20}
              textAlign='justify'
              sx={{ textJustify: 'auto' }}
            >
              Print kertas dan mereview setiap data antar dokumen export-import secara manual tidak menjamin konsistensi dan kebenaran data. Kelelahan mata dalam bekerja, distraksi selama melakukan review, serta melemahnya daya ingat adalah tiga faktor penyebab utama human error.
            </Text>
            <Text
              transition={'all .3s ease'}
              fontSize={16}
              mt={5} mb={20} pr={20}
              textAlign='justify'
              sx={{ textJustify: 'auto' }}
            >
              Dengan bantuan validasi digital Perveks, Anda tidak perlu takut lagi terjadi human error sehingga potensi terjadinya pinalti karena kesalahan dokumen bisa diminimalisir.
            </Text>
            <Flex gap={3}
              alignItems='self-end'
              justifyContent={'space-between'}>
              <Text
                transition={'all .3s ease'}
                fontSize={22}
                fontWeight={600}>
                No More <br />Complicated Handover,
                Just Smooth Handover
              </Text>
              <Image src={why1} alt='Why Perveks 2' boxSize={150} />
            </Flex>
            <Text
              transition={'all .3s ease'}
              fontSize={16}
              mt={5} pr={20}
              textAlign='justify'
              sx={{ textJustify: 'auto' }}
            >
              Semua transaksi validasi yang sudah dieksekusi akan tersimpan dengan aman di aplikasi Perveks termasuk record jenis data apa saja  yang dibutuhkan di tiap dokumen.
            </Text>
          </GridItem>

          <GridItem colSpan={3} ml={10} mt={20}>
            <Flex
              gap={3}
              alignItems='self-end'
              justifyContent={'space-between'}>
              <Text
                transition={'all .3s ease'}
                fontSize={22}
                fontWeight={600}>
                No More Wasting Time,
                Just Efficient Work Style
              </Text>
              <Image src={why3} alt='Why Perveks 2' boxSize={150} />
            </Flex>
            <Text
              transition={'all .3s ease'}
              fontSize={16}
              mt={5} pr={20}
              textAlign='justify'
              sx={{ textJustify: 'auto' }}
            >
              Pekerjaan yang dilakukan secara manual seperti review dokumen baik dengan menggunakan kertas maupun banyak tab atau windows akan membutuhkan lebih banyak waktu untuk diselesaikan.
            </Text>
            <Text
              transition={'all .3s ease'}
              fontSize={16}
              mt={5} pr={20}
              textAlign='justify'
              sx={{ textJustify: 'auto' }}
            >
              Perveks memberikan solusi validasi dokumen hanya dengan ‘One click away’ dan waktu anda bisa dimanfaatkan untuk mengerjakan hal-hal lain yang lebih bermanfaat.
            </Text>
            <Flex gap={3} mt={20}
              alignItems='self-end'
              justifyContent={'space-between'}>
              <Text
                transition={'all .3s ease'}
                fontSize={22}
                mt={5}
                fontWeight={600}>
                No More<br />
                Environmental Damage,
              </Text>
              <Image src={why2} alt='Why Perveks 2' boxSize={150} />
            </Flex>
            <Text
              transition={'all .3s ease'}
              fontSize={22}
              fontWeight={600}>
              Just Environmentally Friendly Work
            </Text>
            <Text
              transition={'all .3s ease'}
              fontSize={16}
              mt={5} pr={20}
              textAlign='justify'
              sx={{ textJustify: 'auto' }}
            >
              Apabila anda dapat mengolah ulang 1 ton kertas, berarti anda dapat menghemat 7000 galon air, menyelamatkan 20 pohon, mencegah polusi udara, juga menghemat pemakaian listrik rumahan selama 6 bulan.
            </Text>
          </GridItem>
        </Grid>
      </Box>
      <Box align='center' bgColor={'white'}>
        <Text
          transition={'all .3s ease'}
          sx={{ lineHeight: '1.2em' }}
          fontSize={42}
          fontWeight={600}
          py={20} >
          Langkah Sederhana <br />Kemudahan Validasi Dokumen
        </Text>
        <Image src={step} alt='Step' maxW={'70vw'} />
        <Grid templateColumns='repeat(8, 1fr)' gap={10} px={40}>
          <GridItem colSpan={2}>
            <Text
              transition={'all .3s ease'}
              sx={{ lineHeight: '1.2em' }}
              fontSize={26}
              fontWeight={600}
              pt={10}>
              1.<br />Marking & Labelling
            </Text>
            <Text
              transition={'all .3s ease'}
              sx={{ lineHeight: '1.2em' }}
              fontSize={16} pt={5}
              fontWeight={400}
            >
              Daftarkan format Template Dokumen dengan menandai jenis data mana saja yang akan Anda bandingkan dan pilih label yang sesuai.
            </Text>
          </GridItem>
          <GridItem colSpan={2}>
            <Text
              transition={'all .3s ease'}
              sx={{ lineHeight: '1.2em' }}
              fontSize={26}
              fontWeight={600}
              pt={10}>
              2.<br />Unggah Dokumen
            </Text>
            <Text
              transition={'all .3s ease'}
              sx={{ lineHeight: '1.2em' }}
              fontSize={16} pt={5}
              fontWeight={400}
            >
              Unggah dokumen di Template Paket Dokumen yang sudah diregistrasikan melalui aktivitas Marking & Labelling.
            </Text>
          </GridItem>
          <GridItem colSpan={2}>
            <Text
              transition={'all .3s ease'}
              sx={{ lineHeight: '1.2em' }}
              fontSize={26}
              fontWeight={600}
              pt={10}>
              3.<br />Validasi Dokumen
            </Text>
            <Text
              transition={'all .3s ease'}
              sx={{ lineHeight: '1.2em' }}
              fontSize={16} pt={5}
              fontWeight={400}
            >
              Dengan Logika Validasi yang dikehendaki, mulai perintah Validasi Dokumen untuk membandingkan dengan dokumen lainnya.
            </Text>
          </GridItem>
          <GridItem colSpan={2}>
            <Text
              transition={'all .3s ease'}
              sx={{ lineHeight: '1.2em' }}
              fontSize={26}
              fontWeight={600}
              pt={10}>
              4.<br />Hasil Validasi
            </Text>
            <Text
              transition={'all .3s ease'}
              sx={{ lineHeight: '1.2em' }}
              fontSize={16} pt={5}
              fontWeight={400}
            >
              Perveks akan menunjukkan hasil valid atau invalid berdasarkan perbandingan jenis data di tiap dokumen yang memiliki kesamaan label.
            </Text>
          </GridItem>
        </Grid>
        <Grid px={40} py={20} templateColumns='repeat(8, 1fr)' gap={8} >
          <GridItem colSpan={4}>
            <Text
              transition={'all .3s ease'}
              sx={{ lineHeight: '1.2em' }}
              fontSize={42}
              fontWeight={600}
              py={20} align='right'>
              Solusi Cerdas Validasi Dokumen Export-Import
              Goodbye Ribet!
            </Text>
          </GridItem>
          <GridItem colSpan={4}>
            <Image src={solusi} alt='Why Perveks 2' />
          </GridItem>

        </Grid>
      </Box>
    </>
  );
};

export default LandingPage;
