import { useState } from 'react';
import { FaPlus } from "react-icons/fa6";

const FAQ = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-simple">
      <div className="faq-item">
         <p>What is react?</p>
        <button onClick={() => setOpen(!open)}>
           
        <FaPlus />
        
        </button>
        

        {open && (
          <div className="faq-answer">
            <p>I'm Shree Krishna</p>
          </div>
        )}
      </div>

      
    </div>
  );
};

export default FAQ;