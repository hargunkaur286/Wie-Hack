import React from 'react';
import "../NftCard/nftCard.css";
import { Link } from "react-router-dom";
import creatorImg from "../../../assets/images/ava-01.png";

export default function BlogCard({ Title, Content, Author}) {
  return (
    <div>
         <div className="single__nft__card">
      <div className="nft__img">
        <img src={creatorImg} alt="" className="w-100 " />
      </div>

      <div className="nft__content">
        <h5 className="nft__title from-teal-950">
          <Link >{Title}</Link>
        </h5>

        <div className="creator__info-wrapper d-flex gap-3">
          

          <div className="creator__info w-100 d-flex align-items-center justify-content-between">
            <div>
              <h6>Author: {Author}</h6>
              <p>{Author}</p>
            </div>

            {/* <div>
              <h6>Floor Price</h6>
              <p>{base} ANC</p>
            </div> */}
          </div>
          
        </div>
        <div className='content__info'>
            <p className='text-white font-thin text-sm text-[20px]   '>
                {Content}
            </p>
          </div>

        <div className=" mt-3 d-flex align-items-center justify-content-center">
          <Link>
            <button
              className="bid__btn d-flex align-items-center gap-1"
              // onClick={() => setShowModal(true)}
            >
              {/* <i className="ri-shopping-bag-line"></i> */}
              Read More
            </button>
          </Link>

          {/* {showModal && <Modal setShowModal={setShowModal} />} */}
        </div>
      </div>
    </div>

    </div>

  )
}
