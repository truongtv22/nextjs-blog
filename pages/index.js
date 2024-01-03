import Head from 'next/head';
import Image from 'next/image';
import { HeartIcon } from '@heroicons/react/24/outline';
import { useCountDown } from 'ahooks/es';

import dayjs from 'dayjs';
import 'dayjs/locale/vi';

import Layout, { siteTitle } from '../components/layout';
import heartIcon from '../public/images/icons/heart.png';
import bannerImg from '../public/images/banner.jpeg';

export default function Home() {
  const [, { days, hours, minutes, seconds }] = useCountDown({
    targetDate: new Date(2024, 0, 20),
  });

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
        <div className="invitation-section py-28 bg-[url(/images/bg.png)]">
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
                  <table className="table-auto border-b">
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
                <div className="flex justify-center space-x-8">
                  <div className="text-center">
                    <p className="text-4xl text-primary">
                      {days > 9 ? days : `0${days}`}
                    </p>
                    <span className="text-sm text-primary">Ngày</span>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl text-primary">
                      {hours > 9 ? hours : `0${hours}`}
                    </p>
                    <span className="text-sm text-primary">Giờ</span>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl text-primary">
                      {minutes > 9 ? minutes : `0${minutes}`}
                    </p>
                    <span className="text-sm text-primary">Phút</span>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl text-primary">
                      {seconds > 9 ? seconds : `0${seconds}`}
                    </p>
                    <span className="text-sm text-primary">Giây</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="couple-section">
          <div>
            <h2>Cô dâu & Chú rể</h2>
          </div>
          <div>
            <div>
              <h2>Tạ Văn Trường</h2>
              <p>
                Xin chào, Mình là Trường, 29 tuổi, hiện tại đang làm lập trình
                viên tại Thanh Hóa. Mình và Cô Dâu sau thời gian tìm hiểu, nay
                chúng mình tổ chức Hôn lễ. Mình và Cô Dâu rất mong mọi người
                dành chút thời gian đến tham dự đám cưới của chúng mình.
              </p>
            </div>
            <div>
              <h2>Đỗ Thị Như Ngọc</h2>
              <p>
                Hi, Mình là Như Ngọc, 24 tuổi, Mình và Chú Rể cùng quê luôn nha.
                Hôm nay, chúng mình hạnh phúc chia sẻ niềm vui này với mọi
                người. Mình và Chú Rể rất mong mọi người dành chút thời gian đến
                tham dự đám cưới của chúng mình.
              </p>
            </div>
          </div>
        </div>
        <div className="event-section">
          <div>
            <h2>Sự Kiện Cưới</h2>
          </div>
          <div>
            <div>
              <h3>LỄ NẠP TÀI</h3>
              <p>
                <strong>08:00 18/01/2024</strong>
              </p>
              <p>Số 74 Nghĩa Sơn 2, Phường Tào Xuyên, TP Thanh Hoá</p>
              <div>
                <div>Thêm vào lịch</div>
                <div>Xem bản đồ</div>
              </div>
            </div>
            <div>
              <h3>LỄ THÀNH HÔN</h3>
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
