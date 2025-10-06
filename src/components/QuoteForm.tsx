import React, { useState, useRef, ChangeEvent } from 'react';
import { X } from 'lucide-react';

interface QuoteFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteForm = ({ isOpen, onClose }: QuoteFormProps) => {
  const [selectedFiles, setSelectedFiles] = useState<string>('No file chosen');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      const fileCount = e.target.files.length;
      setSelectedFiles(
        fileCount === 1
          ? e.target.files[0].name
          : `${fileCount} files selected`
      );
    } else {
      setSelectedFiles('No file chosen');
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-[100] transition-opacity duration-300"
      onClick={handleOverlayClick}
    >
      <div className="bg-[#2C2C2C] w-[90%] max-w-[550px] rounded-lg p-8 relative text-center">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close popup"
        >
          <X size={24} />
        </button>

        <h2 className="text-3xl font-bold text-white mb-4 font-serif">
          Want to find the Perfect Custom Manufacturer?
        </h2>

        <p className="text-[#E0E0E0] mb-6 leading-relaxed">
          Transform Your Business with Our Premium Custom Garments. Enjoy Reliable, elegant and Cost-Effective Solutions.
        </p>

        <ul className="mb-8 space-y-2 text-[#E0E0E0] max-w-md mx-auto">
          <li className="flex items-start gap-2 text-sm text-left">
            <span className="w-1.5 h-1.5 bg-[#FF9900] rounded-full mt-[0.5em]"></span>
            <span>Your personal information will remain completely confidential.</span>
          </li>
          <li className="flex items-start gap-2 text-sm text-left">
            <span className="w-1.5 h-1.5 bg-[#FF9900] rounded-full mt-[0.5em]"></span>
            <span>We'll attach great importance to your inquiry and answer it within 24 hours.</span>
          </li>
        </ul>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full bg-[#444444] text-white border border-[#666666] rounded-md px-4 py-3 placeholder:text-gray-400 focus:outline-none focus:border-[#FF9900]"
            required
          />
          
          <input
            type="tel"
            placeholder="Phone"
            className="w-full bg-[#444444] text-white border border-[#666666] rounded-md px-4 py-3 placeholder:text-gray-400 focus:outline-none focus:border-[#FF9900]"
            required
          />
          
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-[#444444] text-white border border-[#666666] rounded-md px-4 py-3 placeholder:text-gray-400 focus:outline-none focus:border-[#FF9900]"
            required
          />
          
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full bg-[#444444] text-white border border-[#666666] rounded-md px-4 py-3 placeholder:text-gray-400 focus:outline-none focus:border-[#FF9900] resize-vertical"
            required
          ></textarea>

          <div className="flex items-center gap-3">
            <label 
              className="bg-[#555555] text-white px-4 py-2 rounded cursor-pointer hover:bg-[#666666] transition-colors"
            >
              Choose Files
              <input
                type="file"
                className="hidden"
                multiple
                onChange={handleFileChange}
                ref={fileInputRef}
              />
            </label>
            <span className="text-[#E0E0E0] text-sm">{selectedFiles}</span>
          </div>

          <button
            type="submit"
            className="bg-[#FF9900] text-white px-8 py-4 rounded font-bold hover:bg-[#E68A00] transition-colors flex items-center justify-center gap-2 w-full"
          >
            SUBMIT NOW
            <span className="text-lg">→</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuoteForm; 