import Head from 'next/head';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import {
  HeartIcon,
  CalendarIcon,
  // ArrowRightIcon,
} from '@heroicons/react/24/outline';
import { atcb_action } from 'add-to-calendar-button/no-pro';

import cdImg from '../public/images/cd-x.jpeg';
import crImg from '../public/images/cr-x.jpeg';

import heartIcon from '../public/images/icons/heart.png';

import bannerImg from '../public/images/banner.jpeg';
import coupleImg from '../public/images/couple.jpeg';

import leNapTaiImg from '../public/images/le-nap-tai.jpeg';
import leThanhHonImg from '../public/images/le-thanh-hon.jpeg';

import nhaGaiImg from '../public/images/tiec-cuoi-nha-gai.png';
import nhaTraiImg from '../public/images/tiec-cuoi-nha-trai.png';

const CountDown = dynamic(() => import('../components/count-down'), {
  ssr: false,
});

const Fancybox = dynamic(() => import('../components/fancybox'), {
  ssr: false,
});

const galleries = [
  {
    image: '/images/albums/TRUN0849.jpg',
    thumb: '/images/albums/TRUN0849s.jpeg',
  },
  {
    image: '/images/albums/TRUN0912.jpg',
    thumb: '/images/albums/TRUN0912s.jpeg',
  },
  {
    image: '/images/albums/TRUN0739.jpg',
    thumb: '/images/albums/TRUN0739s.jpeg',
  },
  {
    image: '/images/albums/TRUN0900.jpg',
    thumb: '/images/albums/TRUN0900s.jpeg',
  },
  {
    image: '/images/albums/TRUN0538.jpg',
    thumb: '/images/albums/TRUN0538s.jpeg',
  },
  // {
  //   image: '/images/albums/TRUN0507.jpg',
  //   thumb: '/images/albums/TRUN0507s.jpeg',
  // },
  {
    image: '/images/albums/TRUN0321.jpg',
    thumb: '/images/albums/TRUN0321s.jpeg',
  },
  {
    image: '/images/albums/TRUN0368.jpg',
    thumb: '/images/albums/TRUN0368s.jpeg',
  },
  {
    image: '/images/albums/TRUN0383.jpg',
    thumb: '/images/albums/TRUN0383s.jpeg',
  },
  // {
  //   image: '/images/albums/TRUN0478.jpg',
  //   thumb: '/images/albums/TRUN0478s.jpeg',
  // },
  // {
  //   image: '/images/albums/TRUN0500.jpg',
  //   thumb: '/images/albums/TRUN0500s.jpeg',
  // },
  {
    image: '/images/albums/TRUN0660.jpg',
    thumb: '/images/albums/TRUN0660s.jpeg',
  },
  // {
  //   image: '/images/albums/TRUN0680.jpg',
  //   thumb: '/images/albums/TRUN0680s.jpeg',
  // },
  {
    image: '/images/albums/TRUN0967.jpg',
    thumb: '/images/albums/TRUN0967s.jpeg',
  },
  {
    image: '/images/albums/TRUN0978.jpg',
    thumb: '/images/albums/TRUN0978s.jpeg',
  },
  {
    image: '/images/albums/TRUN0946.jpg',
    thumb: '/images/albums/TRUN0946s.jpeg',
  },
  {
    image: '/images/albums/TRUN0960.jpg',
    thumb: '/images/albums/TRUN0960s.jpeg',
  },
  // {
  //   image: '/images/albums/TRUN0980.jpg',
  //   thumb: '/images/albums/TRUN0980s.jpeg',
  // },
  {
    image: '/images/albums/TRUN0996.jpg',
    thumb: '/images/albums/TRUN0996s.jpeg',
  },
  {
    image: '/images/albums/TRUN0943.jpg',
    thumb: '/images/albums/TRUN0943s.jpeg',
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Văn Trường & Như Ngọc Wedding</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta
          name="description"
          content="Văn Trường & Như Ngọc - Our wedding date: 20/01/2024"
        />
        <meta name="og:title" content="Văn Trường & Như Ngọc Wedding | Save the date: 20/01/2024" />
        <meta property="og:image" content="/images/couple.jpeg"></meta>
      </Head>
      <main>
        <div className="header">
          <div className="topbar container p-8">
            <div className="site-logo space-y-4 text-center">
              <h1 className="md:text-4xl text-2xl">
                <span>Văn Trường </span>
                <HeartIcon className="inline w-8 h-8 text-primary" />
                <span> Như Ngọc</span>
              </h1>
              <div>
                <span className="relative text-sm text-gray-500 before:content-[''] before:bg-gray-300 before:w-8 before:h-px before:absolute before:top-1.5 before:-left-10 after:content-[''] after:bg-gray-300 after:w-8 after:h-px after:absolute after:top-1.5 after:-right-10">
                  Just Married
                </span>
              </div>
            </div>
          </div>
          <div className="navbar border-t border-gray-100">
            <div className="container">
              <ul className="flex flex-col md:flex-row justify-center">
                <li className="p-4 md:text-base text-sm font-bold">
                  <a href="#couple" className="block">
                    Về chúng mình
                  </a>
                </li>
                <li className="p-4 md:text-base md:border-none text-sm font-bold border-t border-b border-primary border-opacity-25">
                  <a href="#events" className="block">
                    Sự kiện
                  </a>
                </li>
                <li className="p-4 md:text-base text-sm font-bold">
                  <a href="#album" className="block">
                    Album cưới
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="body">
          <div className="slider-section relative">
            <Image
              src={bannerImg}
              alt="Banner"
              className="w-full h-[calc(100vh-210px)] min-h-[30rem] object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-25" />
            <div className="container absolute inset-0 m-auto h-fit space-y-4 text-center">
              <h2 className="lg:text-7xl md:text-6xl sm:text-5xl text-4xl text-white">
                <span>Văn Trường </span>
                <HeartIcon className="md:inline w-14 h-14 m-auto text-primary" />
                <span> Như Ngọc</span>
              </h2>
              <div>
                <span className="relative text-lg text-white before:content-[''] before:bg-white before:w-8 before:h-px before:absolute before:top-2 before:-left-10 after:content-[''] after:bg-white after:w-8 after:h-px after:absolute after:top-2 after:-right-10">
                  20 Tháng 1 2024
                </span>
              </div>
            </div>
          </div>
          <div className="invitation-section py-28 bg-[url(/images/bg.png)] overflow-hidden">
            <div className="container flex flex-col md:flex-row md:space-x-6">
              <div className="flex-1 relative p-8 text-center rounded-sm bg-white">
                <div className="absolute left-[-150px] top-[-100px] w-[220px] h-[414px] bg-[url(/images/invitation-left.png)] bg-center bg-cover bg-no-repeat" />
                <div className="h-full p-4 py-12 border-4 border-primary/40 space-y-6">
                  <h2 className="lg:text-5xl text-4xl">Save the Date</h2>
                  <div className="space-y-2">
                    <span className="text-gray-500">For the wedding of</span>
                    <h3 className="font-bold lg:text-2xl text-xl">
                      Văn Trường & Như Ngọc
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Một lời chúc từ bạn sẽ là niềm hạnh phúc của chúng mình
                  </p>
                </div>
              </div>
              <div className="flex-1 relative p-8 rounded-sm bg-white">
                <div className="absolute right-[-120px] bottom-[-100px] w-[400px] h-[508px] bg-[url(/images/invitation-right.png)] bg-center bg-cover bg-no-repeat" />
                <div className="h-full p-4 border-4 border-primary/40 space-y-4 overflow-x-auto">
                  <div className="space-y-2">
                    <div className="text-center">
                      <p className="font-bold">THÁNG 1 / 2024</p>
                    </div>
                    <table className="table-auto border-b ml-auto mr-auto">
                      <thead className="border-t border-b">
                        <tr className="h-8">
                          <th className="w-14 min-w-9">
                            <p className="text-sm">Th 2</p>
                          </th>
                          <th className="w-14 min-w-9">
                            <p className="text-sm">Th 3</p>
                          </th>
                          <th className="w-14 min-w-9">
                            <p className="text-sm">Th 4</p>
                          </th>
                          <th className="w-14 min-w-9">
                            <p className="text-sm">Th 5</p>
                          </th>
                          <th className="w-14 min-w-9">
                            <p className="text-sm">Th 6</p>
                          </th>
                          <th className="w-14 min-w-9">
                            <p className="text-sm">Th 7</p>
                          </th>
                          <th className="w-14 min-w-9">
                            <p className="text-sm">CN</p>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-center">
                        <tr className="h-11">
                          <td>
                            <p className="text-sm">1</p>
                          </td>
                          <td>
                            <p className="text-sm">2</p>
                          </td>
                          <td>
                            <p className="text-sm">3</p>
                          </td>
                          <td>
                            <p className="text-sm">4</p>
                          </td>
                          <td>
                            <p className="text-sm">5</p>
                          </td>
                          <td>
                            <p className="text-sm">6</p>
                          </td>
                          <td>
                            <p className="text-sm">7</p>
                          </td>
                        </tr>
                        <tr className="h-11">
                          <td>
                            <p className="text-sm">8</p>
                          </td>
                          <td>
                            <p className="text-sm">9</p>
                          </td>
                          <td>
                            <p className="text-sm">10</p>
                          </td>
                          <td>
                            <p className="text-sm">11</p>
                          </td>
                          <td>
                            <p className="text-sm">12</p>
                          </td>
                          <td>
                            <p className="text-sm">13</p>
                          </td>
                          <td>
                            <p className="text-sm">14</p>
                          </td>
                        </tr>
                        <tr className="h-11">
                          <td>
                            <p className="text-sm">15</p>
                          </td>
                          <td>
                            <p className="text-sm">16</p>
                          </td>
                          <td>
                            <p className="text-sm">17</p>
                          </td>
                          <td className="relative min-w-12">
                            <div className="flex items-center justify-center">
                              <div className="bg-primary w-7 h-7 rounded-full flex items-center justify-center">
                                <p className="text-sm text-white">18</p>
                              </div>
                            </div>
                            <span className="absolute inset-x-0 -bottom-2 text-xs text-[#8f4e27]">
                              Nạp tài
                            </span>
                          </td>
                          <td>
                            <p className="text-sm">19</p>
                          </td>
                          <td className="relative min-w-12">
                            <div className="relative">
                              <Image
                                src={heartIcon}
                                alt="Hôn lễ"
                                className="absolute inset-0 h-fit m-auto"
                              />
                              <div className="absolute inset-0 h-fit m-auto">
                                <p className="text-sm text-white">20</p>
                              </div>
                            </div>
                            <span className="absolute inset-x-0 -bottom-2 text-xs text-[#8f4e27]">
                              Hôn lễ
                            </span>
                          </td>
                          <td>
                            <p className="text-sm">21</p>
                          </td>
                        </tr>
                        <tr className="h-11">
                          <td>
                            <p className="text-sm">22</p>
                          </td>
                          <td>
                            <p className="text-sm">23</p>
                          </td>
                          <td>
                            <p className="text-sm">24</p>
                          </td>
                          <td>
                            <p className="text-sm">25</p>
                          </td>
                          <td>
                            <p className="text-sm">26</p>
                          </td>
                          <td>
                            <p className="text-sm">27</p>
                          </td>
                          <td>
                            <p className="text-sm">28</p>
                          </td>
                        </tr>
                        <tr className="h-11">
                          <td>
                            <p className="text-sm">29</p>
                          </td>
                          <td>
                            <p className="text-sm">30</p>
                          </td>
                          <td>
                            <p className="text-sm">31</p>
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <CountDown />
                </div>
              </div>
            </div>
          </div>
          <div
            id="couple"
            className="couple-section container py-28 space-y-10"
          >
            <div className="relative pt-20 text-center before:content-[''] before:bg-[url(/images/title-flower.png)] before:bg-center before:bg-cover before:bg-no-repeat before:w-[126px] before:h-[59px] before:absolute before:left-1/2 before:top-0 before:-translate-x-1/2">
              <h2 className="text-4xl">Cô dâu & Chú rể</h2>
            </div>
            <div className="flex flex-col lg:flex-row md:flex-row lg:space-x-2 md:space-x-2 space-y-4 lg:space-y-0 md:space-y-0">
              <div className="flex-1 space-y-4">
                <div className="relative flex justify-end items-end">
                  <h2 className="text-3xl mr-4 lg:mr-40">Tạ Văn Trường</h2>
                  <Image
                    src={crImg}
                    alt="Chú rể Văn Trường"
                    className="relative lg:absolute lg:top-0 lg:right-0 lg:w-40 lg:h-40 w-24 h-24 ring-4 ring-primary rounded-full"
                  />
                </div>
                <div className="lg:mr-36 p-6 rounded ring-4 ring-primary bg-gray-50">
                  <p>
                    Xin chào, Mình là Trường, 29 tuổi, hiện tại đang làm lập
                    trình viên tại Thanh Hóa. Mình và Cô Dâu sau thời gian tìm
                    hiểu, nay chúng mình tổ chức Hôn lễ. Mình và Cô Dâu rất mong
                    mọi người dành chút thời gian đến tham dự đám cưới của chúng
                    mình.
                  </p>
                </div>
              </div>
              <div>
                <HeartIcon className="md:inline m-auto lg:mt-10 md:mt-4 w-16 h-16 text-primary" />
              </div>
              <div className="flex-1 space-y-4">
                <div className="relative flex lg:flex-row flex-row-reverse lg:justify-start justify-end items-end">
                  <h2 className="text-3xl ml-4 lg:ml-40">Đỗ Thị Như Ngọc</h2>
                  <Image
                    src={cdImg}
                    alt="Cô dâu Như Ngọc"
                    className="relative lg:absolute lg:top-0 lg:left-0 lg:w-40 lg:h-40 w-24 h-24 ring-4 ring-primary rounded-full"
                  />
                </div>
                <div className="lg:ml-36 p-6 rounded ring-4 ring-primary bg-gray-50">
                  <p>
                    Hi, Mình là Như Ngọc, 24 tuổi, Mình và Chú Rể cùng quê luôn
                    nha. Hôm nay, chúng mình hạnh phúc chia sẻ niềm vui này với
                    mọi người. Mình và Chú Rể rất mong mọi người dành chút thời
                    gian đến tham dự đám cưới của chúng mình.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            id="events"
            className="event-section py-28 bg-[url(/images/bg.png)]"
          >
            <div className="container space-y-10">
              <div className="text-center">
                <h2 className="text-4xl">Sự Kiện Cưới</h2>
              </div>
              <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
                <div className="bg-white p-4 rounded text-center space-y-4">
                  <h3 className="relative pb-2 text-[1.15rem] before:absolute before:content-[''] before:bg-primary before:w-32 before:h-0.5 before:left-1/2 before:-translate-x-1/2 before:bottom-0">
                    LỄ NẠP TÀI
                  </h3>
                  <Image
                    src={leNapTaiImg}
                    alt="Lễ Nạp Tài"
                    className="rounded"
                  />
                  <div className="space-y-2">
                    <strong>08:00 18/01/2024</strong>
                    <p className="text-[0.96rem]">
                      Số 74 Nghĩa Sơn 2, Phường Tào Xuyên, TP Thanh Hoá
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div
                      className="flex p-1.5 border-2 rounded-full items-center justify-center cursor-pointer"
                      onClick={() => {
                        atcb_action({
                          name: 'LỄ NẠP TÀI (Đám cưới Văn Trường và Như Ngọc)',
                          description:
                            'Cảm ơn bạn đã dành thời gian tham dự đám cưới của chúng mình!. Thông tin chi tiết xem tại website: https://truongngoc-wedding.vercel.app',
                          startDate: '2024-01-18',
                          startTime: '08:00',
                          location:
                            'Số 74 Nghĩa Sơn 2, Phường Tào Xuyên, TP Thanh Hoá',
                          endDate: '2024-01-18',
                          endTime: '08:00',
                          options: [
                            'Apple',
                            'Google',
                            'iCal',
                            'Microsoft365',
                            'MicrosoftTeams',
                            'Outlook.com',
                            'Yahoo',
                          ],
                          timeZone: 'Asia/Saigon',
                        });
                      }}
                    >
                      <CalendarIcon className="w-5 h-5 mr-2" />
                      <p className="mt-1">Thêm vào lịch</p>
                    </div>
                    <a
                      href="https://maps.app.goo.gl/WgNaYs9FSXmwCWDo6"
                      target="_blank"
                      className="block p-1.5 border-2 rounded-full text-primary border-primary"
                    >
                      Xem bản đồ
                    </a>
                  </div>
                </div>
                <div className="bg-white p-4 rounded text-center space-y-4">
                  <h3 className="relative pb-2 text-[1.15rem] before:absolute before:content-[''] before:bg-primary before:w-32 before:h-0.5 before:left-1/2 before:-translate-x-1/2 before:bottom-0">
                    TIỆC CƯỚI NHÀ GÁI
                  </h3>
                  <Image
                    src={nhaGaiImg}
                    alt="Tiệc cưới nhà gái"
                    className="rounded"
                  />
                  <div className="space-y-2">
                    <strong>10:00 18/01/2024</strong>
                    <p className="text-[0.96rem]">
                      Số 74 Nghĩa Sơn 2, Phường Tào Xuyên, TP Thanh Hoá
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div
                      className="flex p-1.5 border-2 rounded-full items-center justify-center cursor-pointer"
                      onClick={() => {
                        atcb_action({
                          name: 'TIỆC CƯỚI NHÀ GÁI (Đám cưới Văn Trường và Như Ngọc)',
                          description:
                            'Cảm ơn bạn đã dành thời gian tham dự đám cưới của chúng mình!. Thông tin chi tiết xem tại website: https://truongngoc-wedding.vercel.app',
                          startDate: '2024-01-18',
                          startTime: '10:00',
                          location:
                            'Số 74 Nghĩa Sơn 2, Phường Tào Xuyên, TP Thanh Hoá',
                          endDate: '2024-01-18',
                          endTime: '10:00',
                          options: [
                            'Apple',
                            'Google',
                            'iCal',
                            'Microsoft365',
                            'MicrosoftTeams',
                            'Outlook.com',
                            'Yahoo',
                          ],
                          timeZone: 'Asia/Saigon',
                        });
                      }}
                    >
                      <CalendarIcon className="w-5 h-5 mr-2" />
                      <p className="mt-1">Thêm vào lịch</p>
                    </div>
                    <a
                      href="https://maps.app.goo.gl/WgNaYs9FSXmwCWDo6"
                      target="_blank"
                      className="block p-1.5 border-2 rounded-full text-primary border-primary"
                    >
                      Xem bản đồ
                    </a>
                  </div>
                </div>
                <div className="bg-white p-4 rounded text-center space-y-4">
                  <h3 className="relative pb-2 text-[1.15rem] before:absolute before:content-[''] before:bg-primary before:w-32 before:h-0.5 before:left-1/2 before:-translate-x-1/2 before:bottom-0">
                    TIỆC CƯỚI NHÀ TRAI
                  </h3>
                  <Image
                    src={nhaTraiImg}
                    alt="Tiệc cưới nhà trai"
                    className="rounded"
                  />
                  <div className="space-y-2">
                    <strong>10:00 19/01/2024</strong>
                    <p className="text-[0.96rem]">
                      Số 63 Yên Vực, Phường Tào Xuyên, TP Thanh Hoá
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div
                      className="flex p-1.5 border-2 rounded-full items-center justify-center cursor-pointer"
                      onClick={() => {
                        atcb_action({
                          name: 'TIỆC CƯỚI NHÀ TRAI (Đám cưới Văn Trường và Như Ngọc)',
                          description:
                            'Cảm ơn bạn đã dành thời gian tham dự đám cưới của chúng mình!. Thông tin chi tiết xem tại website: https://truongngoc-wedding.vercel.app',
                          startDate: '2024-01-19',
                          startTime: '10:00',
                          location:
                            'Số 63 Yên Vực, Phường Tào Xuyên, TP Thanh Hoá',
                          endDate: '2024-01-19',
                          endTime: '10:00',
                          options: [
                            'Apple',
                            'Google',
                            'iCal',
                            'Microsoft365',
                            'MicrosoftTeams',
                            'Outlook.com',
                            'Yahoo',
                          ],
                          timeZone: 'Asia/Saigon',
                        });
                      }}
                    >
                      <CalendarIcon className="w-5 h-5 mr-2" />
                      <p className="mt-1">Thêm vào lịch</p>
                    </div>
                    <a
                      href="https://maps.app.goo.gl/DyZCZQbSJpERmx9H6"
                      target="_blank"
                      className="block p-1.5 border-2 rounded-full text-primary border-primary"
                    >
                      Xem bản đồ
                    </a>
                  </div>
                </div>
                <div className="bg-white p-4 rounded text-center space-y-4">
                  <h3 className="relative pb-2 text-[1.15rem] before:absolute before:content-[''] before:bg-primary before:w-32 before:h-0.5 before:left-1/2 before:-translate-x-1/2 before:bottom-0">
                    LỄ THÀNH HÔN
                  </h3>
                  <Image
                    src={leThanhHonImg}
                    alt="Lễ Thành Hôn"
                    className="rounded"
                  />
                  <div className="space-y-2">
                    <strong>09:00 20/01/2024</strong>
                    <p className="text-[0.96rem]">
                      Số 63 Yên Vực, Phường Tào Xuyên, TP Thanh Hoá
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div
                      className="flex p-1.5 border-2 rounded-full items-center justify-center cursor-pointer"
                      onClick={() => {
                        atcb_action({
                          name: 'LỄ THÀNH HÔN (Đám cưới Văn Trường và Như Ngọc)',
                          description:
                            'Cảm ơn bạn đã dành thời gian tham dự đám cưới của chúng mình!. Thông tin chi tiết xem tại website: https://truongngoc-wedding.vercel.app',
                          startDate: '2024-01-20',
                          startTime: '09:00',
                          location:
                            'Số 63 Yên Vực, Phường Tào Xuyên, TP Thanh Hoá',
                          endDate: '2024-01-20',
                          endTime: '09:00',
                          options: [
                            'Apple',
                            'Google',
                            'iCal',
                            'Microsoft365',
                            'MicrosoftTeams',
                            'Outlook.com',
                            'Yahoo',
                          ],
                          timeZone: 'Asia/Saigon',
                        });
                      }}
                    >
                      <CalendarIcon className="w-5 h-5 mr-2" />
                      <p className="mt-1">Thêm vào lịch</p>
                    </div>
                    <a
                      href="https://maps.app.goo.gl/DyZCZQbSJpERmx9H6"
                      target="_blank"
                      className="block p-1.5 border-2 rounded-full text-primary border-primary"
                    >
                      Xem bản đồ
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="album"
            className="gallery-section container py-28 space-y-10"
          >
            <div className="relative pt-20 text-center before:content-[''] before:bg-[url(/images/title-flower.png)] before:bg-center before:bg-cover before:bg-no-repeat before:w-[126px] before:h-[59px] before:absolute before:left-1/2 before:top-0 before:-translate-x-1/2 space-y-4">
              <h2 className="text-4xl">Album Hình Cưới</h2>
              {/* <div className="flex items-center justify-center">
              <div
                className="flex p-2 px-6 text-white bg-primary rounded cursor-pointer"
                onClick={() => alert(1)}
              >
                <p className="mt-px">Xem Album</p>
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </div>
            </div> */}
            </div>
            <div>
              <Fancybox
                options={{
                  Carousel: {
                    infinite: false,
                  },
                }}
                className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4"
              >
                {galleries.map((item) => (
                  <a key={item.image} data-fancybox="gallery" href={item.image}>
                    <img src={item.thumb} className="rounded" />
                  </a>
                ))}
              </Fancybox>
            </div>
          </div>
        </div>
        <div className="footer relative text-center py-36 bg-[url(/images/footer-bg.png)] bg-[center_bottom] bg-[length:100%] bg-no-repeat space-y-10">
          <div className="relative w-[300px] h-[276px] lg:w-[511px] lg:h-[470px] mx-auto bg-[url(/images/footer-couple.png)] bg-center bg-cover bg-no-repeat">
            <Image
              src={coupleImg}
              alt="Văn Trường & Như Ngọc Wedding"
              className="max-w-[75%] rounded-full absolute left-[48%] top-[44%] -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <h2 className="text-6xl">Thank you!</h2>
        </div>
      </main>
    </div>
  );
}
