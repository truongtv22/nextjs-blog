import Head from 'next/head';
import Image from 'next/image';
import { HeartIcon } from '@heroicons/react/24/outline';

import dayjs from 'dayjs';
import 'dayjs/locale/vi';

import Layout, { siteTitle } from '../components/layout';
import heartAirImg from '../public/images/heart-air.png';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="header">
        <div className="topbar">
          <div className="site-logo">
            <h1 className="text-2xl">
              <span>Văn Trường </span>
              <HeartIcon className="inline w-4 h-4" />
              <span> Như Ngọc</span>
            </h1>
            <span>Just Married</span>
          </div>
        </div>
        <div className="navbar">
          <ul>
            <li>Về chúng mình</li>
            <li>Sự kiện</li>
            <li>Album cưới</li>
          </ul>
        </div>
      </div>
      <div className="body">
        <div className="slider-section">
          <div>
            <h2>
              <span>Văn Trường</span>
              <HeartIcon className="inline w-4 h-4" />
              <span>Như Ngọc</span>
            </h2>
            <span>20 Tháng 1 2024</span>
          </div>
        </div>
        <div className="invitation-section">
          <div className="">
            <h2>Save the Date</h2>
            <span>For the wedding of</span>
            <h3>Văn Trường & Như Ngọc</h3>
            <p>Một lời chúc từ bạn sẽ là niềm hạnh phúc của chúng mình</p>
          </div>
          <div>
            <table className="">
              <thead>
                <tr>
                  <th className="min-w-16">Th 2</th>
                  <th className="min-w-16">Th 3</th>
                  <th className="min-w-16">Th 4</th>
                  <th className="min-w-16">Th 5</th>
                  <th className="min-w-16">Th 6</th>
                  <th className="min-w-16">Th 7</th>
                  <th className="min-w-16">CN</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                  <td>6</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>9</td>
                  <td>10</td>
                  <td>11</td>
                  <td>12</td>
                  <td>13</td>
                  <td>14</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>16</td>
                  <td>17</td>
                  <td className="flex items-center justify-center">
                    <div className="bg-primary w-8 h-8 rounded-full flex items-center justify-center text-white">
                      <p>18</p>
                    </div>
                  </td>
                  <td>19</td>
                  <td>
                    <div className="relative">
                      <Image
                        src={heartAirImg}
                        alt="Hôn lễ"
                        className="absolute inset-0 h-fit m-auto"
                      />
                      <div className="absolute  inset-0 h-fit m-auto text-white">
                        20
                      </div>
                    </div>
                  </td>
                  <td>21</td>
                </tr>
                <tr>
                  <td>22</td>
                  <td>23</td>
                  <td>24</td>
                  <td>25</td>
                  <td>26</td>
                  <td>27</td>
                  <td>28</td>
                </tr>
                <tr>
                  <td>29</td>
                  <td>30</td>
                  <td>31</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <div>
              <span>18</span>
              <span>20</span>
            </div>
            <div>
              <div>
                <p>17</p>
                <span>Ngày</span>
              </div>
              <div>
                <p>05</p>
                <span>Giờ</span>
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
