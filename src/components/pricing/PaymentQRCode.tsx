
import { QRCodeSVG } from "qrcode.react";

interface PaymentQRCodeProps {
  address: string;
}

export const PaymentQRCode = ({ address }: PaymentQRCodeProps) => {
  return (
    <div className="flex flex-col items-center justify-center mb-6">
      <div className="bg-white p-4 rounded-lg mb-4 shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
        <QRCodeSVG
          value={`solana:${address}`}
          size={200}
          level="H"
          includeMargin={true}
        />
      </div>
      <p className="text-sm text-gray-400 mb-4 flex items-center gap-2">
        Scan to pay with 
        <img src="https://cryptologos.cc/logos/solana-sol-logo.png" alt="Solana" className="w-5 h-5 inline" />
        Solana
      </p>
    </div>
  );
};
