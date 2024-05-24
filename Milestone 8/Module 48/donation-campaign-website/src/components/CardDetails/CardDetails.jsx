import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { saveDonationData } from "../../utility/localStorage";

const CardDetails = () => {    
  const cards = useLoaderData();
  const {cardId} = useParams();
  const card = cards.filter(card => (card.id === cardId) && card);
  const { picture, title, description, button_bg, price } =
    card[0];
    
    const handleDonation = () => {
        saveDonationData(cardId);
        toast("Donated Successfully !", {
            pauseOnFocusLoss: false
        });
    }
  return (
    <div className="my-16">
      <div className="card rounded-none w-full h-fit">
        <figure>
          <img className="w-full h-fit" src={picture} alt={title} />
        </figure>
        <div className="card-body p-0">
          <div className="w-full card-actions justify-start absolute bottom-0 p-5 md:p-9 bg-gradient-to-r from-[#0b0b0b]/25 to-[#0b0b0b]/25">
            <button onClick={handleDonation} className="btn text-white py-4 px-6 outline-none border-none rounded-md" style={{background: `${button_bg}`,}}>Donate ${price}</button>
          </div>
        </div>
      </div>
      <div className="mt-14 space-y-6">
        <h2 className="text-4xl font-bold">{title}</h2>
        <p className="text-[#0b0b0b]/70">{description}</p>
      </div>
      <ToastContainer pauseOnFocusLoss={false} />
    </div>
  );
}

export default CardDetails;
