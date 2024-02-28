import { faEnvelope, faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "@/app/styles.module.scss";

const MENU_LIST = [
  { name: "メニュー1", icon: faHouse },
  { name: "メニュー2", icon: faUser },
  { name: "メニュー3", icon: faEnvelope },
];

const USER_LIST = [
  {
    companyName: "株式会社GeaRaise",
    userName: "山口凌",
    email: "example2@gearaise.co.jp",
  },
  {
    companyName: "株式会社GeaRaise",
    userName: "山口凌",
    email: "example2@gearaise.co.jp",
  },
  {
    companyName: "株式会社GeaRaise",
    userName: "山口凌",
    email: "example2@gearaise.co.jp",
  },
  {
    companyName: "株式会社GeaRaise",
    userName: "山口凌",
    email: "example2@gearaise.co.jp",
  },
  {
    companyName: "株式会社GeaRaise",
    userName: "山口凌",
    email: "example2@gearaise.co.jp",
  },
  {
    companyName: "株式会社GeaRaise",
    userName: "山口凌",
    email: "example2@gearaise.co.jp",
  },
  {
    companyName: "株式会社GeaRaise",
    userName: "山口凌",
    email: "example2@gearaise.co.jp",
  },
  {
    companyName: "株式会社GeaRaise",
    userName: "山口凌",
    email: "example2@gearaise.co.jp",
  },
];

export default function Home() {
  return (
    <main>
      <div
        className={`fixed pt-5 pr-5 pb-10 pl-5 top-0 h-screen flex flex-col items-right gap-[80px] transition-[left] duration-500 ease-in-out bg-cyan-200 ${styles.sidebar}`}
      >
        <div className="flex justify-between gap-[40px] items-center">
          <h2 className="text-3xl">sample</h2>
          <label className={styles.checkboxWrapper}>
            <input
              type="checkbox"
              name="sample"
              className={styles.checkbox}
              defaultChecked
            />
            <span className={styles.arrow}></span>
          </label>
        </div>
        <ul className="flex flex-col gap-5">
          {MENU_LIST.map((item) => (
            <li
              key={item.name}
              className="flex gap-2 items-center justify-between"
            >
              {item.name}
              <FontAwesomeIcon icon={faHouse} className={styles.icon} />
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`mt-10 transition-[margin-left] duration-500 ease-in-out mr-[40px] displayScroll ${styles.mainContents}`}
      >
        <table className="w-[100%]">
          <thead className="border border-solid border-black">
            <tr className="[&>th]:border-r [&>th]:border-solid [&>th]:border-black">
              <th>顧問先No.</th>
              <th>顧問先会社名</th>
              <th>顧問先担当者名</th>
              <th>登録メールアドレス</th>
              <th>ステータス</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="text-center">
            {USER_LIST.map((item, index) => (
              <tr
                key={index}
                className={`border border-solid border-black [&>td]:border-r [&>td]:border-solid [&>td]:border-black ${
                  index % 2 === 0 && "bg-cyan-200"
                }`}
              >
                <td>{index + 1}</td>
                <td>{item.companyName}</td>
                <td>{item.userName}</td>
                <td>{item.email}</td>
                <td>登録済み</td>
                <td>
                  <button>詳細情報</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
