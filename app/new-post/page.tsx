'use client'

import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { FaCar, FaLaptop, FaCouch, FaTshirt, FaFutbol, FaBook, FaGavel, FaGamepad, FaRing, FaMusic, FaHome, FaHeart, FaPaw } from 'react-icons/fa'
import SelectCategory from './(components)/SelectCategory'
import EnterInformation from './(components)/EnterInformation'
import UploadImages from './(components)/UploadImages'
import ViewPost from './(components)/ViewPost'
import useAppState from "@/store/state"

const categories = [
  { value: 'appliances', label: 'Appliances', icon: <FaLaptop /> },
  { value: 'cars', label: 'Cars and Vehicles', icon: <FaCar /> },
  { value: 'electronics', label: 'Electronics and Gadgets', icon: <FaLaptop /> },
  { value: 'furniture', label: 'Furniture and Home Decor', icon: <FaCouch /> },
  { value: 'clothing', label: 'Clothing and Accessories', icon: <FaTshirt /> },
  { value: 'sports', label: 'Sports and Outdoor Equipment', icon: <FaFutbol /> },
  { value: 'books', label: 'Books and Media', icon: <FaBook /> },
  { value: 'collectibles', label: 'Collectibles and Antiques', icon: <FaGavel /> },
  { value: 'toys', label: 'Toys and Games', icon: <FaGamepad /> },
  { value: 'jewelry', label: 'Jewelry and Watches', icon: <FaRing /> },
  { value: 'instruments', label: 'Musical Instruments', icon: <FaMusic /> },
  { value: 'home', label: 'Home and Garden', icon: <FaHome /> },
  { value: 'health', label: 'Health and Beauty Products', icon: <FaHeart /> },
  { value: 'pets', label: 'Pet Supplies', icon: <FaPaw /> },
];

const page = () => {
  const {
    currentStep,
    setCurrentStep,
  } = useAppState();

  const router = useRouter();
  const { status } = useSession();

  const goBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goForvard = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  }

  if (status === "loading") {
    return <div >Loading...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/signin");
  }

  return (
    <main>
      <section className='py-4 text-center text-foreground'>
        <h1 className='text-lg md:text-2xl font-bold my-2'>Complete this form to list your item</h1>
        <p className='md:text-lg'>Your first three items will be listed completely free, for 30 days .</p>
      </section>
      {currentStep === 1 && <SelectCategory categories={categories} />}

      {currentStep === 2 && <UploadImages />}

      {currentStep === 3 && <EnterInformation />}

      {currentStep === 4 && <ViewPost/>}

      <section className='flex justify-evenly'>
        {currentStep > 1 && <button
          type='button'
          onClick={goBack}
          className='mr-2 px-4 py-2 text-accent border border-accent rounded hover:bg-secondary'
        >
          Back
        </button>
        }
        {
          currentStep < 4 && <button
            onClick={goForvard}
            type='button'
            className="bg-accent text-accent-foreground cursor-pointer hover:bg-secondary px-4 py-2 rounded border "
          >
            Next
          </button>
        }
      </section>
    </main>
  )
}

export default page