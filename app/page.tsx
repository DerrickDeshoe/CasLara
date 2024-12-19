import Image from "next/image";
import Link from "next/link";
import HomeImage from "../public/images/HomeImage.png";
import PhoneHome from '../public/images/PhoneHome.png'
import Card1 from "./Components/Card1";
import Product2 from "../public/images/Product2.png";
import Product3 from "../public/images/Product3.png";
import Product4 from "../public/images/Product4.png";
import Product5 from "../public/images/Product5.png";
import Product6 from "../public/images/Product6.png";
import Product7 from "../public/images/Product7.png";
import Product8 from "../public/images/Product8.png";
import Product9 from "../public/images/Product9.png";
import Product10 from "../public/images/Product10.png";
import Product11 from "../public/images/Product11.png";
import Product12 from "../public/images/Product12.png";
import Product13 from "../public/images/Product13.png";
import Product14 from "../public/images/Product14.png";
import Product15 from "../public/images/Product15.png";
import Product16 from "../public/images/Product16.png";
import Product17 from "../public/images/Product17.png";
import Product1 from "../public/images/Card1.png";
import Promo from "../public/images/flier.png";
import ADS from "../public/images/ADS.png";
import Promo2 from "../public/images/Flier2.png";
import Promo3 from "../public/images/Flier3.png";
import Promo4 from "../public/images/Flier4.png";
import Card2 from "./Components/Card2";

export default function Home() {
  return (
    <div className="">
      <Image src={HomeImage} alt="HomePageImage" className="hidden lg:flex" />

      <Image src={PhoneHome} alt="HomePageImage" className="flex lg:hidden w-[100%]"/>

      <div className="flex flex-col space-y-5">
        <div className="flex justify-center py-[5%]">
          <h2 className="font-bold text-2xl">VIEW PRODUCTS CATALOGUE</h2>
        </div>
        <div className="flex flex-wrap lg:justify-between px-[5%] lg:[6%]">
          <Card1 image={Product1} productName="SANITARY WARE " cardPositionClasses="absolute bottom-6 left-[28%]"/>
          <Card1 image={Product2} productName="SOLAR POWER " cardPositionClasses="absolute bottom-6 left-[30%]"/>
          <Card1 image={Product3} productName="PAINTING " cardPositionClasses="absolute bottom-6 left-[36%]"/>
          <Card1 image={Product4} productName="POWER TOOLS"  cardPositionClasses="absolute bottom-6 left-[30%]"/>
          <Card1 image={Product5} productName="AUTOMOTIVES"  cardPositionClasses="absolute bottom-6 left-[34%]"/>
          <div className=" h-[40vh] lg:w-[28%] bg-gray p-5 rounded-lg flex flex-col items-center justify-between lg:mt-5">
            <h4 className="text-3xl font-bold text-center">
              SIGN UP & GET 20% OFF
            </h4>
            <p className="text-center lg:w-[90%]">
              Be the first to receive our latest news and exclusive offers on
              our WhatsApp Channel
            </p>
            <Link
              href="#"
              className="flex space-x-2 justify-center bg-black rounded-3xl px-7 py-3 w-[40%]"
            >
              <button className="font-semibold text-sm text-white">
                SIGN UP
              </button>
            </Link>
          </div>
         
          <Card1 image={Product6} productName="ELECTRICALS "  cardPositionClasses="absolute bottom-6 left-[35%]"/>
          <Card1 image={Product7} productName="BUILDING TOOLS"  cardPositionClasses="absolute bottom-6 left-[29%]"/>
          <Card1 image={Product8} productName="ABBRASIVES"  cardPositionClasses="absolute bottom-6 left-[36%]"/>
          <Card1 image={Product9} productName="AGRICULTURE "  cardPositionClasses="absolute bottom-6 left-[32%]"/>
          <Card1 image={Product10} productName="PROTECTIVE WEAR "  cardPositionClasses="absolute bottom-6 left-[25%]"/>
          <Card1 image={Product11} productName="GARDENING TOOLS "  cardPositionClasses="absolute bottom-6 left-[25%]"/>
          <Card1 image={Product12} productName="SECURITY "  cardPositionClasses="absolute bottom-6 left-[36%]"/>
          <Card1 image={Product13} productName="PUMPS "  cardPositionClasses="absolute bottom-6 left-[38%]"/>
          <Card1 image={Product14} productName="AIR COMPRESSORS "  cardPositionClasses="absolute bottom-6 left-[28%]"/>
          <Card1 image={Product15} productName="BUILDING MATERIALS "  cardPositionClasses="absolute bottom-6 left-[25%]"/>
          <Card1 image={Product16} productName="PVC PIPES "  cardPositionClasses="absolute bottom-6 left-[36%]"/>
          <Card1 image={Product17} productName="GENERATORS "  cardPositionClasses="absolute bottom-6 left-[36%]"/>
        </div>
      </div>

      <div className="flex flex-col px-[5%]">
        <div className="flex justify-center py-[5%]">
          <h2 className="font-bold text-2xl text-center">
            PRODUCTION ON PROMOTION (SLIDE)
          </h2>
        </div>
        <div className="flex flex-wrap justify-between gap-y-5 lg:gap-y-20">
          <Image
            src={Promo}
            alt="PromotionPicture"
            className="w-[47%]  lg:w-[44%]"
          />
          <Image
            src={Promo}
            alt="PromotionPicture"
            className="w-[47%] lg:w-[44%]"
          />
          <Image
            src={Promo}
            alt="PromotionPicture"
            className="w-[47%]  lg:w-[44%]"
          />
          <Image
            src={Promo}
            alt="PromotionPicture"
            className="w-[47%] lg:w-[44%]"
          />
        </div>
      </div>

      <div className="hidden lg:flex flex-col lg:px-[5%]">
        <Link href="" className="flex justify-center py-[5%]">
          <h2 className="font-bold text-2xl text-center">
            @CASLARA HARDWARE FACEBOOK PAGE
          </h2>
        </Link>
        <div className="flex flex-col space-y-5">
          <div className="flex justify-between">
            <Image src={Promo2} alt="Promo" className="w-[30%]" />
            <Image src={Promo3} alt="Promo" className="w-[30%]" />
            <Image src={Promo4} alt="Promo" className="w-[30%]" />
          </div>
          <Image src={ADS} alt="ADS" />
        </div>
      </div>

      <div className="flex flex-wrap px-[5%] space-y-3 lg:space-y-0 lg:justify-between my-6">
        <Card2
          heading="Bulk Order Delivery"
          description="Click here for more info"
        />
        <Card2
          heading="30 Days Return"
          description="Simply return it within 30 days for an exchange."
        />
        <Card2
          heading="Store Opening"
          description="Shop open from Monday to Sunday"
        />
      </div>
    </div>
  );
}
