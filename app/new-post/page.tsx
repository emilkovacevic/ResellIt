'use client'

import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import SelectCategory from './(components)/SelectCategory'
import EnterInformation from './(components)/EnterInformation'
import UploadImages from './(components)/UploadImages'
import ViewPost from './(components)/ViewPost'
import useAppState from "@/store/state"
import { categories } from "@/store/static"

const NewPostpage = () => {
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
    <main className="max-w-4xl mx-auto">
      <section className='py-4 text-center'>
        <h1 className='text-lg md:text-2xl font-bold my-2'>Complete this form to list your item</h1>
        <p className='md:text-lg'>Your first three items will be listed completely free, for 30 days .</p>
      </section>
      {currentStep === 1 && <SelectCategory categories={categories} />}

      {currentStep === 2 && <UploadImages />}

      {currentStep === 3 && <EnterInformation />}

      {currentStep === 4 && <ViewPost/>}

      <section className='flex justify-evenly my-4'>
        {currentStep > 1 && <button
          type='button'
          onClick={goBack}
          className='mr-2 px-4 border-1 py-2 border-secondary-foreground  text-primary-foreground border rounded hover:bg-secondary'
        >
          Back
        </button>
        }
        {
          currentStep < 4 && <button
            onClick={goForvard}
            type='button'
            className="bg-accent border-1  border-secondary-foreground text-primary-foreground cursor-pointer hover:bg-secondary px-4 py-2 rounded border "
          >
            Next
          </button>
        }
      </section>
    </main>
  )
}

export default NewPostpage