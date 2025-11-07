import React, { useState } from 'react';
import { RegisterUserProps } from '@/interface/index'; // adjust path as needed
import { XMarkIcon } from '@heroicons/react/24/outline';


interface UserRegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserRegisterModal: React.FC<UserRegisterModalProps> = ({isOpen, onClose}) => {
  const [formData, setFormData] = useState<RegisterUserProps>({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const [loading, setLoading] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
     setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert('Please accept the terms and policy.');
      return;
    }
    // Submit logic here
    console.log('Registering user:', formData);
  };

  if (!isOpen) return null;

  return (
    <div onClick={onClose}
     className="w-full h-screen flex p-4 justify-center items-center fixed top-0 left-0 transform translate-50 z-50 bg-black/50">
      <form onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
        className="bg-gray-100 p-4 rounded-xl shadow-lg w-full max-w-md border border-gray-300"
      >
        <h2 className="text-2xl font-bold text-secondary mb-4 text-center">Create Account</h2>

        <div className="mb-2 border-b-2 border-secondary">
          <label className="block text-gray-400 font-semibold">Username</label>
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            className="w-full pt-2 text-gray-700 bg-transparent rounded focus:outline-none focus:none "
            required
          />
        </div>

        <div className="mb-2 border-b-2 border-secondary">
          <label className="block text-gray-400 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full pt-2 text-gray-700 bg-transparent rounded focus:outline-none focus:none "
            required
          />
        </div>

        <div className="mb-2 border-b-2 border-secondary">
          <label className="block text-gray-400 font-semibold">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full pt-2 text-gray-700 bg-transparent rounded focus:outline-none focus:none"
            required
          />
        </div>

        <div className="mb-4 border-b-2 border-secondary">
          <label className="block text-gray-400 font-semibold">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full pt-2 text-gray-700 bg-transparent rounded focus:outline-none focus:none"
            required
          />
        </div>

        <div className="mb-6 flex items-center">
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
            className="mr-2"
          />
          <label className="text-gray-700 text-sm">
            I agree to the <span className="text-primary hover:text-hoverPrimary cursor-pointer">Terms</span> and <span className="text-primary hover:text-hoverPrimary cursor-pointer">Policy</span>
          </label>
        </div>

       <div className='w-full flex justify-center items-center'>
         <button
          type="submit"
          className="py-2 w-[200px] px-4 bg-primary hover:bg-hoverPrimary rounded-xl flex justify-center items-center font-bold text-white flex items-center gap-2"
        >
          {loading ? (
            <span className="w-5 h-5 border-2 border-t-2 border-gray-100 rounded-full animate-spin">
              <XMarkIcon className='w-4 h-4 text-gray-100' />
            </span>
          ) : (
            'Register'
          )}
        </button>
       </div>
      </form>
    </div>
  );
}


export default UserRegisterModal;