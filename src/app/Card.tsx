'use client';

import Image from 'next/image';
import {
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from 'react-icons/fa';

export default function Card() {
  return (
    <div className="w-[350px] bg-white rounded-3xl shadow-xl overflow-hidden">
      {/* Imagen con margen interior */}
      <div className="px-4 pt-4">
        <div className="bg-white rounded-2xl overflow-hidden">
          <Image
            src="/profile.png"
            alt="Profile"
            width={1000}
            height={500}
            className="w-full h-48 object-cover rounded-2xl"
          />
        </div>
      </div>

      {/* Contenido */}
      <div className="px-4 py-4 space-y-3">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-lg font-bold text-black">Main Heading</h2>
            <p className="text-sm text-gray-500 font-semibold">Sub Heading</p>
          </div>
          <span className="bg-[#EBF8FE] text-black text-xs font-semibold px-3 py-1 rounded-full">
            3 months
          </span>
        </div>

        <p className="text-sm text-gray-600">
          Lorem Ipsum is simply dummy text of they printing and typesetting industry. Loremel Ipsum has been the industry’s standards
        </p>

        <div className="flex space-x-3 text-xl">
          <FaYoutube className="text-red-600" />
          <FaFacebook className="text-blue-700" />
          <FaInstagram className="text-pink-500" />
          <FaTiktok className="text-black" />
        </div>
      </div>

      {/* Precio + Botón - de borde a borde */}
      <div className="py-4 px-4 border-t bg-[#FAF7F7] flex justify-between items-center">
        <span className="font-bold text-black">USD 3</span>
        <button className="bg-[#43629E] hover:bg-[#163f9b] text-white text-base font-bold px-6 py-2 rounded-lg transition">
          Activate
        </button>
      </div>
    </div>
  );
}
