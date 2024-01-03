import Head from 'next/head';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { HeartIcon } from '@heroicons/react/24/outline';

import dayjs from 'dayjs';
import 'dayjs/locale/vi';

import Layout, { siteTitle } from '../components/layout';

import cdImg from '../public/images/cd-x.jpeg';
import crImg from '../public/images/cr-x.jpeg';

import heartIcon from '../public/images/icons/heart.png';
import bannerImg from '../public/images/banner.jpeg';

const CountDown = dynamic(() => import('../components/count-down'), {
  ssr: false,
});

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="header">
        <div className="topbar container p-8">
          <div className="site-logo space-y-4 text-center">
            <h1 className="text-4xl">
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
            <ul className="flex justify-center">
              <li className="p-4 font-bold">Về chúng mình</li>
              <li className="p-4 font-bold">Sự kiện</li>
              <li className="p-4 font-bold">Album cưới</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="body">
        <div className="slider-section relative ">
          <Image
            src={bannerImg}
            alt="Banner"
            className="h-[calc(100vh-210px)] min-h-[30rem] object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-25" />
          <div className="container absolute inset-0 m-auto h-fit space-y-4 text-center">
            <h2 className="text-7xl text-white">
              <span>Văn Trường </span>
              <HeartIcon className="inline w-14 h-14 text-primary" />
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
          <div className="container flex space-x-6">
            <div className="flex-1 relative p-8 bg-white rounded-sm text-center">
              <div className="absolute left-[-150px] top-[-100px] w-[220px] h-[414px] bg-[url(/images/invitation-left.png)] bg-center bg-cover bg-no-repeat" />
              <div className="h-full p-4 py-12 border-4 border-primary/40 space-y-6">
                <h2 className="text-5xl">Save the Date</h2>
                <div className="space-y-2">
                  <span className="text-gray-500">For the wedding of</span>
                  <h3 className="font-bold text-2xl">Văn Trường & Như Ngọc</h3>
                </div>
                <p className="text-gray-600">
                  Một lời chúc từ bạn sẽ là niềm hạnh phúc của chúng mình
                </p>
              </div>
            </div>
            <div className="flex-1 relative bg-white rounded-sm p-8">
              <div className="absolute right-[-120px] bottom-[-100px] w-[400px] h-[508px] bg-[url(/images/invitation-right.png)] bg-center bg-cover bg-no-repeat" />
              <div className="h-full p-4 border-4 border-primary/40 space-y-4">
                <div className="space-y-2">
                  <div className="text-center">
                    <p className="font-bold">THÁNG 1 / 2024</p>
                  </div>
                  <table className="table-auto border-b ml-auto mr-auto">
                    <thead className="border-t border-b">
                      <tr className="h-8">
                        <th className="min-w-14">
                          <p className="text-sm">Th 2</p>
                        </th>
                        <th className="min-w-14">
                          <p className="text-sm">Th 3</p>
                        </th>
                        <th className="min-w-14">
                          <p className="text-sm">Th 4</p>
                        </th>
                        <th className="min-w-14">
                          <p className="text-sm">Th 5</p>
                        </th>
                        <th className="min-w-14">
                          <p className="text-sm">Th 6</p>
                        </th>
                        <th className="min-w-14">
                          <p className="text-sm">Th 7</p>
                        </th>
                        <th className="min-w-14">
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
                        <td className="relative">
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
                        <td className="relative">
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
        <div className="couple-section container py-28 space-y-8">
          <div className="relative pt-20 text-center before:content-[''] before:bg-[url(/images/title-flower.png)] before:bg-center before:bg-cover before:bg-no-repeat before:w-[126px] before:h-[59px] before:absolute before:left-1/2 before:top-0 before:-translate-x-1/2">
            <h2 className="text-4xl">Cô dâu & Chú rể</h2>
          </div>
          <div className="flex space-x-2">
            <div className="flex flex-1 flex-row-reverse">
              <Image
                src={crImg}
                alt="Chú rể Văn Trường"
                className="w-40 h-40 ring-4 ring-primary rounded-full"
              />
              <div className="flex-1 space-y-2">
                <h2 className="text-3xl text-right">Tạ Văn Trường</h2>
                <div className="-mr-3 p-6 rounded ring-4 ring-primary bg-gray-50">
                  <p>
                    Xin chào, Mình là Trường, 29 tuổi, hiện tại đang làm lập
                    trình viên tại Thanh Hóa. Mình và Cô Dâu sau thời gian tìm
                    hiểu, nay chúng mình tổ chức Hôn lễ. Mình và Cô Dâu rất mong
                    mọi người dành chút thời gian đến tham dự đám cưới của chúng
                    mình.
                  </p>
                </div>
              </div>
            </div>
            <HeartIcon className="inline mt-10 w-16 h-16 text-primary" />
            <div className="flex flex-1">
              <Image
                src={cdImg}
                alt="Cô dâu Như Ngọc"
                className="z-10 w-40 h-40 ring-4 ring-primary rounded-full"
              />
              <div className="flex-1 space-y-2">
                <h2 className="text-3xl">Đỗ Thị Như Ngọc</h2>
                <div className="-ml-3 p-6 rounded ring-4 ring-primary bg-gray-50">
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
        </div>
        <div className="event-section py-28 bg-[url(/images/bg.png)]">
          <div className="container">
            <div className="py-12 text-center">
              <h2 className="text-4xl">Sự Kiện Cưới</h2>
            </div>
            <div className="grid grid-cols-4">
              <div className="bg-white p-4 text-center space-y-4">
                <h3 className="relative pb-2 text-2xl before:absolute before:content-[''] before:bg-primary before:w-32 before:h-0.5 before:left-1/2 before:-translate-x-1/2 before:bottom-0">
                  LỄ NẠP TÀI
                </h3>
                <img
                  src="https://cdn.biihappy.com/ziiweb/default/website/7744fc9739685fe61c53cd8fe2cf7e52.png"
                  alt=""
                />
                <div>
                  <p>
                    <strong>08:00 18/01/2024</strong>
                  </p>
                  <p>Số 74 Nghĩa Sơn 2, Phường Tào Xuyên, TP Thanh Hoá</p>
                </div>
                <div>
                  <div>Thêm vào lịch</div>
                  <div>Xem bản đồ</div>
                </div>
              </div>
              <div>
                <h3>TIỆC CƯỚI NHÀ GÁI</h3>
                <p>
                  <strong>09:30 18/01/2024</strong>
                </p>
                <p>Số 74 Nghĩa Sơn 2, Phường Tào Xuyên, TP Thanh Hoá</p>
                <div>
                  <div>Thêm vào lịch</div>
                  <div>Xem bản đồ</div>
                </div>
              </div>
              <div>
                <h3>TIỆC CƯỚI NHÀ TRAI</h3>
                <p>
                  <strong>10:00 19/01/2024</strong>
                </p>
                <p>Số 63 Yên Vực, Phường Tào Xuyên, TP Thanh Hoá</p>
                <div>
                  <div>Thêm vào lịch</div>
                  <div>Xem bản đồ</div>
                </div>
              </div>
              <div>
                <h3>LỄ THÀNH HÔN</h3>
                <img
                  src="https://cdn.biihappy.com/ziiweb/default/website/eee1cb36b560f0d80f513c4e9be666db.png"
                  alt=""
                />
                <p>
                  <strong>09:00 20/01/2024</strong>
                </p>
                <p>Số 63 Yên Vực, Phường Tào Xuyên, TP Thanh Hoá</p>
                <div>
                  <div>Thêm vào lịch</div>
                  <div>Xem bản đồ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gallery-section">
          <div>
            <h2>Album Hình Cưới</h2>
          </div>
          <div></div>
        </div>
      </div>
    </Layout>
  );
}
