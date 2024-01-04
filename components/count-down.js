import { useCountDown } from 'ahooks';

export default function CountDown() {
  const [, { days, hours, minutes, seconds }] = useCountDown({
    targetDate: new Date(2024, 0, 20),
  });

  return (
    <div className="flex justify-center xs:space-x-8 space-x-4">
      <div className="text-center">
        <p className="xs:text-4xl text-2xl text-primary">{days > 9 ? days : `0${days}`}</p>
        <span className="text-sm text-primary">Ngày</span>
      </div>
      <div className="text-center">
        <p className="xs:text-4xl text-2xl text-primary">
          {hours > 9 ? hours : `0${hours}`}
        </p>
        <span className="text-sm text-primary">Giờ</span>
      </div>
      <div className="text-center">
        <p className="xs:text-4xl text-2xl text-primary">
          {minutes > 9 ? minutes : `0${minutes}`}
        </p>
        <span className="text-sm text-primary">Phút</span>
      </div>
      <div className="text-center">
        <p className="xs:text-4xl text-2xl text-primary">
          {seconds > 9 ? seconds : `0${seconds}`}
        </p>
        <span className="text-sm text-primary">Giây</span>
      </div>
    </div>
  );
}
