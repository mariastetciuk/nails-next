"use client";

import { useState } from "react";

const BtnReadMore = () => {
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      {!readMore && (
        <button
          className="mb-5 cursor-pointer pr-[80px]"
          type="button"
          onClick={() => {
            setReadMore((prev) => !prev);
          }}
        >
          Дізнатись більше...
        </button>
      )}
      <div className={`${readMore ? "" : "hidden"} `}>
        <p className="mb-5">
          {
            "Студія гостинно відкрила двері для своїх перших клієнтів 1 жовтня 2022 року. У доглядових процедурах завжди поєднуємо максимальний комфорт і турботу про здоров'я клієнтів, за що і отримали визнання серед клієнтів."
          }
        </p>
        <p className="mb-5">
          Ми продовжуємо розвиватися, щоб і надалі тішити вас якісним манікюром
          та педикюром.
        </p>
      </div>
    </>
  );
};

export default BtnReadMore;
