import React, { useEffect } from 'react';

interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'info';
  onClose: () => void;
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose, duration = 5000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const bgColor = type === 'success'
    ? 'bg-heritage-green'
    : type === 'error'
    ? 'bg-chili-red'
    : 'bg-blue-500';

  const icon = type === 'success'
    ? '✓'
    : type === 'error'
    ? '✕'
    : 'ℹ';

  return (
    <div
      className={`fixed top-4 right-4 ${bgColor} text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3 z-50 animate-slide-in max-w-md`}
      role="alert"
    >
      <span className="text-2xl font-bold">{icon}</span>
      <p className="font-lato flex-1">{message}</p>
      <button
        onClick={onClose}
        className="text-white hover:text-gray-200 font-bold text-xl"
        aria-label="Close notification"
      >
        ×
      </button>
    </div>
  );
};

export default Toast;
