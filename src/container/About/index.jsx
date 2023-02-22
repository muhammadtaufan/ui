import React from "react";
import { Text, Image, Flex, Stack, Box } from '@chakra-ui/react';
import about1 from "@/assets/about1.png";
import about2 from "@/assets/about2.png";
import about3 from "@/assets/about3.png";
import bg from "@/assets/bg_green.png";

const AboutPage = () => {

  return (
    <>
      <Box
       width={'full'}
       bgImage={bg} mt={20}
       backgroundRepeat="no-repeat"
       backgroundPosition="bottom"
       >
        <Flex mx={40} pt={20}>
          <Image src={about1} alt='About Perveks' objectFit='cover' height={400} />
          <Stack ml={20}>
            <Text
              transition={'all .3s ease'}
              fontSize={48}
              fontWeight={600}>
              Awal Mula Perveks
            </Text>
            <Text
              transition={'all .3s ease'}
              fontSize={17}
              fontWeight={300}
              textAlign='justify'
              sx={{ textJustify: 'auto' }}>
              <div>
                Ide awal kami muncul ketika dihadapkan pada realita temuan yang ada di lapangan bahwa dalam aktivitas export-import, review atau validasi dokumen-dokumen secara manual sangat tidak efisien dan cenderung tidak cinta lingkungan karena banyaknya kertas yang terbuang.
              </div><br />
              Waktu yang habis digunakan untuk me-review dokumen seharusnya bisa digunakan untuk aktivitas pekerjaan lain yang lebih memiliki added-value agar karyawan tidak bosan karena pekerjaan yang bersifat repetitive.
            </Text>
          </Stack>
        </Flex>
        <Flex mx={40} my={20}>
          <Stack mr={20}>
            <Text
              textAlign={'right'}
              transition={'all .3s ease'}
              fontSize={40}
              fontWeight={600}>
              Perveks, Era Baru Digitalisasi Validasi Dokumen Export - Import
            </Text>
            <Text
              transition={'all .3s ease'}
              fontSize={17}
              fontWeight={300}
              textAlign='justify'
              sx={{ textJustify: 'auto' }}
            >
              <div>
                Perveks muncul sebagai solusi digital atas kegiatan review dokumen import yang masih dilakukan secara manual. Perveks memastikan bahwa pekerjaan validasi dokumen secara digital akan bebas dari human error, cepat dan mudah.
              </div><br />
              <div>
                Seiring dengan perkembangan aplikasi yang berkelanjutan, Perveks juga menawarkan fitur query yang akan mempermudah user untuk mempersiapkan audit rutin dari bea cukai.
              </div><br />
              <div>
                Pegawai baru akan lebih mudah beradaptasi dengan sistem Perveks karena semua aktivitas review dokumen yang sudah divalidasi secara digital oleh user sebelumnya akan terdokumentasi ke dalam sistem sehingga user baru tidak perlu khawatir kelewatan syarat atau point penting yang harus ada dalam tiap dokumen.
              </div>
            </Text>
          </Stack>
          <Image src={about2} alt='About Perveks 2' objectFit='cover' height={400} />
        </Flex>
      </Box>

      <Box
        width={'full'}
        bgImage={about3}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Text
          transition={'all .3s ease'}
          fontSize={48}
          fontWeight={600}
          align='center'
          color={'white'}
          py={40}
        >
          Big Journeys begin with Small Steps
        </Text>
      </Box>
      <Box pb={20}>
        <Text
          transition={'all .3s ease'}
          fontSize={17}
          fontWeight={300}
          textAlign='justify'
          sx={{ textJustify: 'auto' }}
          mx={400} mt={20}
        >
          <div>
            Perveks memiliki misi untuk berkontribusi dalam proses digitalisasi rantai pasokan perdagangan internasional dan berdampak positive bagi lingkungan.
          </div><br />
          <div>
            Di satu sisi, digitalisasi validasi dokumen akan membantu meringankan beban kerja exportir dan importir sehingga mereka bisa fokus bekerja di aktivitas yang lebih memiliki added-value. Di sisi lain, kebiasaan tersebut juga akan menekan jumlah penggunaan kertas yang akan berdampak signifikan mengurangi emisi karbon dan mencegah pemanasan global.
          </div><br />
          <div>
            Perveks percaya bahwa pembangunan ekonomi secara digital bisa berjalan harmonis dengan pelestarian lingkungan.
          </div>
        </Text>
      </Box>
    </>
  );
};

export default AboutPage;
