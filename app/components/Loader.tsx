import React from 'react';
import { ImSpinner8 } from 'react-icons/im';

const Loader: React.FC = () => {
  return (
    <div className="h-[60vh] flex justify-center items-center xsm:w-[100vw] lg:w-[65vw]">
      <ImSpinner8 className="w-6 h-6 text-[#fbb110] animate-spin" />
    </div>
  );
};

export default Loader;
