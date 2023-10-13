'use client'

import useAppState from '@/store/state'

const NavigationButtons = () => {
  const { currentStep, setCurrentStep } = useAppState()

  const goBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const goForvard = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  return (
    <section className="flex justify-evenly my-4">
      {currentStep > 1 && (
        <button
          type="button"
          onClick={goBack}
          className="mr-2 px-4 border-1 w-24 py-2 border-secondary-foreground  text-foreground border rounded hover:bg-secondary"
        >
          Back
        </button>
      )}
      {currentStep < 4 && (
        <button
          onClick={goForvard}
          type="button"
          className="bg-primary border-1 w-48 border-secondary-foreground text-primary-foreground cursor-pointer hover:bg-secondary hover:text-secondary-foreground px-4 py-2 rounded border "
        >
          Next
        </button>
      )}
    </section>
  )
}

export default NavigationButtons
