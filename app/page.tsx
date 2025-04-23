"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import irshad from "../public/PHOTO IRSHAD.jpg";
import Button from "@/components/button1";
import Header from "@/components/Header";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <Header />
      <div className=" flex-1/3 m-20 text-center text-red-500 text-shadow-amber-200 text-[50px]">
        <h1 className="bg-slate-800 text-amber-50 text-bold ">
          {" "}
          welcome to concept coaching browser{" "}
        </h1>
        <p
          className="bg-slate-400 p-1.5 font-family: 'Arial' , sans-serif; font-size: 50px; font-black color: #333 ; background : Linear-gradient(to right, #ff9a9e, #fad0c4;);
        padding: 15px; border-radius : 8px;
        text-align: center; box-shadow: 2px 2px 5px rgba (0,0,0,0,0.2); "
        >
          Director: SYED IRSHAD AHMAD ('MR. SID SIR') Qualification: B.SC.
          (P.C.M), M.SC.( CHEMISTRY )+ B.ED. M.C.A (Machine learning )
        </p>
        <p
          className="bg-slate-500 p-1.5 font-family: 'Arial' , sans-serif; font-size: 18px; color: #333; background : Linear-gradient(to right, #ff9a9e, #fad0c4;);
        padding: 15px; border-radius : 8px;
        text-align: center; box-shadow: 3px 3px 10px rgba (0,0,0,0,0.2); "
        >
          ONE INITIATIVE TOWARDS CONCEPT
        </p>
        <button type="button" onClick={() => router.push("/")}>
          <Image
            src="https://res.cloudinary.com/dpotbki0n/image/upload/v1744553152/PHOTO_IRSHAD_ktqljc.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
            className="w-36 h-32 object-contain"
          />
        </button>
      </div>
      <ul className="list-disc list-inside">
        <li className="bg-black text-white "> Mr. tabish sir (M.tech.) </li>
        <li className="bg-red-400 text-amber-200"> Mr. Ameel sir(B.tech.) </li>
        <li className=" bg-blue-600 text-sky-400">Mr. sid sir (m.sc.) </li>
      </ul>
      <div>
        <div>
          <div>
            <h1> Please read the following line carefully </h1>
            <p
              className=" p-1.5 font-family: 'Arial' , sans-serif; font-size: 18px; color: #444 ; background : Linear-gradient(to right, #ff9a9e, #fad0c4;);
        padding: 15px; border-radius : 8px;
        text-align: center; box-shadow: 3px 3px 10px rgba (0,0,0,0,0.2) justify-between ; "
            >
              {" "}
              why should you join our concept coaching classes :{" "}
            </p>
            <p>
              1. **Unlock your full potential**—concept coaching helps you truly
              understand, not just memorize.{" "}
            </p>{" "}
            <p>
              {" "}
              2. **Bridge the gap between theory and reality**—learn how
              concepts work in real life!
            </p>{" "}
            <p>
              3. **Personalized guidance** ensures no student is left behind{" "}
            </p>{" "}
            <p>
              4. **Master the fundamentals** so you can solve any problem with
              confidence.{" "}
            </p>{" "}
            <p>
              {" "}
              5. **Interactive and engaging sessions** make learning exciting
              and effective.
            </p>{" "}
            <p>
              {" "}
              6. **Boost your critical thinking** and apply knowledge like a pro{" "}
            </p>{" "}
            <p>
              {" "}
              **Stronger concepts mean higher scores**—excel in exams with ease.
            </p>{" "}
            <p>
              {" "}
              8. **Learn from experienced mentors** who make tough topics simple{" "}
            </p>{" "}
            <p>
              {" "}
              9. **Turn confusion into clarity**—never fear tricky subjects
              again!
            </p>{" "}
            <p>
              {" "}
              10. **Your future starts today**—invest in yourself with concept
              coaching.
            </p>
            <p></p>
          </div>
          <button>
            {" "}
            <search> conceptcoachingsyllbus </search>{" "}
          </button>
          <button>
            {" "}
            <search> ok </search>{" "}
          </button>
        </div>
        <div>
          <div className="flex-1/12 text[25px] text-color via-violet-500 m-1.5">
            about our facilities
          </div>
          <Button />
        </div>
      </div>
    </div>
  );
}
